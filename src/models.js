import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { createGlowSpriteTexture } from './textures.js';
import { clamp, lerp } from './utils.js';

const bodyMaterialCache = new Map();
let operatorAsset = null;

// The Blender-authored operator is optional: if the GLB cannot be fetched the
// game falls back to the procedural rig below without changing gameplay.
export function setOperatorAsset(gltf) {
  operatorAsset = gltf && gltf.scene ? gltf : null;
}


function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.62,
    metalness: 0.25,
    ...opts,
  });
}

function glowMat(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
    toneMapped: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

function mergeDirectMeshes(container) {
  if (!container) return;
  const byMaterial = new Map();
  for (const child of [...container.children]) {
    if (!child.isMesh || child.isSprite || child.isInstancedMesh) continue;
    if (!child.material || Array.isArray(child.material)) continue;
    const key = child.material.uuid;
    const list = byMaterial.get(key) || [];
    list.push(child);
    byMaterial.set(key, list);
  }
  for (const meshes of byMaterial.values()) {
    if (meshes.length < 2) continue;
    const geometries = [];
    for (const mesh of meshes) {
      mesh.updateMatrix();
      const geo = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      geo.applyMatrix4(mesh.matrix);
      geometries.push(geo);
    }
    const merged = mergeGeometries(geometries, false);
    for (const geo of geometries) geo.dispose();
    if (!merged) continue;
    const combined = new THREE.Mesh(merged, meshes[0].material);
    combined.castShadow = false;
    combined.receiveShadow = false;
    container.add(combined);
    for (const mesh of meshes) {
      container.remove(mesh);
      mesh.geometry.dispose?.();
    }
  }
}

function buildBlenderOperator({ color = 0x35e9ff } = {}) {
  const group = new THREE.Group();
  const model = cloneSkeleton(operatorAsset.scene);
  let visorMaterial = null;

  model.traverse((obj) => {
    if (!obj.isMesh) return;
    // Each operator owns its geometry and materials so recolouring or
    // respawning the local player cannot invalidate remote players.
    obj.geometry = obj.geometry.clone();
    obj.castShadow = false;
    obj.receiveShadow = false;
    // Skinned bounds inflate during the sprint stride; keep the operator
    // visible instead of letting the chase camera clip the mesh.
    obj.frustumCulled = false;
    const sources = Array.isArray(obj.material) ? obj.material : [obj.material];
    const materials = sources.map((source) => {
      const copy = source.clone();
      if (copy.name === 'NF_Accent' || copy.name === 'NF_Visor') {
        copy.color.setHex(0x06141a);
        copy.emissive.setHex(color);
        copy.emissiveIntensity = copy.name === 'NF_Visor' ? 1.1 : 0.95;
        copy.toneMapped = false;
      }
      if (copy.name === 'NF_Visor') visorMaterial = copy;
      return copy;
    });
    obj.material = Array.isArray(obj.material) ? materials : materials[0];
  });

  group.add(model);
  if (!operatorAsset.animations?.length) return null;

  // Muzzle flash rides the exported weapon bone so it tracks the sprint carry
  // and the aim pose instead of hovering at a fixed offset.
  const flash = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createGlowSpriteTexture('#ffe6b3'),
      color: 0xffe6b3,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  flash.scale.set(0.6, 0.6, 1);
  let muzzleBone = null;
  model.traverse((obj) => {
    if (obj.isBone && obj.name === 'muzzle') muzzleBone = obj;
  });
  if (muzzleBone) {
    flash.position.set(0, 0.02, 0);
    muzzleBone.add(flash);
  } else {
    flash.position.set(0.3, 1.15, 0.55);
    group.add(flash);
  }

  const fill = new THREE.PointLight(0x9fe2ff, 6.5, 5.2, 2);
  fill.position.set(0, 2.35, -0.9);
  group.add(fill);

  const mixer = new THREE.AnimationMixer(model);
  const actions = {};
  for (const clip of operatorAsset.animations) {
    actions[clip.name.toLowerCase()] = mixer.clipAction(clip);
  }
  const preferred = ['idle', 'walk', 'sprint', 'aim', 'aimwalk', 'air'];
  let currentName = '';
  let currentAction = null;
  for (const name of preferred) {
    if (actions[name]) {
      currentName = name;
      currentAction = actions[name];
      currentAction.play();
      break;
    }
  }
  let playbackRate = 1;

  const fadeTo = (name, duration = 0.16) => {
    if (name === currentName) return;
    const next = actions[name];
    if (!next) return;
    next.reset();
    next.enabled = true;
    next.setEffectiveTimeScale(playbackRate);
    next.setEffectiveWeight(1);
    next.fadeIn(duration).play();
    if (currentAction && currentAction !== next) currentAction.fadeOut(duration);
    currentAction = next;
    currentName = name;
  };

  const state = {
    group,
    flash,
    color,
    hostile: false,
    flashTime: 0,
    visorMaterial,
    mixer,
  };

  state.animate = (dt, time, moveSpeed = 0, grounded = true, aiming = false, sprinting = false) => {
    const speed = clamp(Math.abs(moveSpeed), 0, 20);
    let target = 'idle';
    if (!grounded) target = 'air';
    else if (aiming) target = speed > 0.8 ? 'aimwalk' : 'aim';
    else if (speed > 6.2 || (sprinting && speed > 1)) target = 'sprint';
    else if (speed > 0.65) target = 'walk';
    fadeTo(target);

    let targetRate = 1;
    if (target === 'sprint') targetRate = clamp(0.8 + speed / 34, 0.95, 1.2);
    else if (target === 'walk') targetRate = clamp(0.9 + speed / 44, 0.9, 1.1);
    playbackRate = lerp(playbackRate, targetRate, 1 - Math.exp(-10 * dt));
    if (currentAction) currentAction.setEffectiveTimeScale(playbackRate);
    mixer.update(dt);

    if (state.flashTime > 0) {
      state.flashTime -= dt;
      flash.material.opacity = clamp(state.flashTime * 9, 0, 1) * 0.95;
      flash.scale.setScalar(0.6 + (1 - clamp(state.flashTime * 8, 0, 1)) * 0.25);
    } else {
      flash.material.opacity = 0;
    }
  };

  return state;
}

export function buildCharacter({ color = 0x35e9ff, skin = 0xd9ab8a, hostile = false, detail = 1 } = {}) {
  if (operatorAsset && !hostile) {
    const operator = buildBlenderOperator({ color });
    if (operator) return operator;
  }
  const group = new THREE.Group();
  // Guards share one cohesive suit material so their static parts can be
  // merged into a handful of draw calls; operators keep the detailed kit.
  const compact = hostile && detail < 0.8;
  const suit = compact
    ? mat(0x262731, { roughness: 0.6, metalness: 0.32, emissive: 0x2a1219, emissiveIntensity: 0.5 })
    : null;
  // Soft self-illumination keeps operators readable against the dark city
  // without flattening the rounded forms into toy-like silhouettes.
  const lit = hostile
    ? { emissive: 0x2a1219, emissiveIntensity: 0.5 }
    : { emissive: 0x1c2333, emissiveIntensity: 0.5 };
  const litPants = hostile
    ? { emissive: 0x160d11, emissiveIntensity: 0.45 }
    : { emissive: 0x151a25, emissiveIntensity: 0.45 };
  const litSkin = hostile ? {} : { emissive: skin, emissiveIntensity: 0.1 };
  const jacket = suit || mat(hostile ? 0x2b2b36 : 0x3b4356, { roughness: 0.78, metalness: 0.16, ...lit });
  const armor = suit || mat(hostile ? 0x1c1d24 : 0x222834, { roughness: 0.5, metalness: 0.42 });
  const pants = suit || mat(hostile ? 0x1a1c22 : 0x2d3447, { roughness: 0.82, metalness: 0.08, ...litPants });
  const rubber = suit || mat(0x0a0b10, { roughness: 0.72, metalness: 0.18 });
  const accent = glowMat(hostile ? 0xff2c55 : color, 1);
  const visor = glowMat(hostile ? 0xff263f : color, 1);
  const skinMat = suit || mat(skin, { roughness: 0.86, metalness: 0, ...litSkin });
  if (!hostile) {
    const fill = new THREE.PointLight(0x9fe2ff, 6.5, 5.2, 2);
    fill.position.set(0, 2.35, -0.9);
    group.add(fill);
  }

  const torso = new THREE.Group();
  torso.position.y = 1.0;
  group.add(torso);

  // Hips and rounded chest shell
  const hips = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.2, 0.27, 3, 0.07), pants);
  hips.position.y = -0.02;
  torso.add(hips);

  const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.205, 0.22, 8, 18), jacket);
  chest.position.y = 0.28;
  chest.scale.set(1.04, 1, 0.72);
  torso.add(chest);

  const plate = new THREE.Mesh(new RoundedBoxGeometry(0.36, 0.3, 0.1, 4, 0.05), armor);
  plate.position.set(0, 0.32, 0.135);
  torso.add(plate);

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.038, 8, 22), armor);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 0.53;
  torso.add(collar);

  const chestLine = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.028, 0.02, 2, 0.012), accent);
  chestLine.position.set(0, 0.34, 0.187);
  torso.add(chestLine);

  const belt = new THREE.Mesh(new RoundedBoxGeometry(0.38, 0.08, 0.28, 3, 0.03), rubber);
  belt.position.y = 0.02;
  torso.add(belt);
  const buckle = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.05, 0.02, 2, 0.012), accent);
  buckle.position.set(0, 0.02, 0.145);
  if (detail >= 0.8) torso.add(buckle);

  // Shoulder pads soften the arm joints
  for (const side of [-1, 1]) {
    const pad = new THREE.Mesh(new THREE.SphereGeometry(0.095, 16, 12), armor);
    pad.scale.set(1.15, 0.8, 1);
    pad.position.set(side * 0.27, 0.47, 0);
    torso.add(pad);
  }

  // Head with a rounded visor band and hood cap
  const headGroup = new THREE.Group();
  headGroup.position.y = 0.55;
  torso.add(headGroup);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.13, 12), skinMat);
  neck.position.y = 0.04;
  headGroup.add(neck);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.172, 24, 18),
    suit || mat(hostile ? 0x2f323d : 0x3c4354, { roughness: 0.6 }),
  );
  head.scale.set(0.92, 1.05, 0.94);
  head.position.y = 0.19;
  headGroup.add(head);
  const mask = new THREE.Mesh(new RoundedBoxGeometry(0.19, 0.1, 0.1, 3, 0.035), rubber);
  mask.position.set(0, 0.12, 0.115);
  headGroup.add(mask);
  const face = new THREE.Mesh(new RoundedBoxGeometry(0.245, 0.07, 0.055, 3, 0.028), visor);
  face.position.set(0, 0.215, 0.145);
  headGroup.add(face);
  const hood = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 22, 14, 0, Math.PI * 2, 0, Math.PI * 0.42),
    suit || mat(hostile ? 0x12131a : 0x11141d, { roughness: 0.62 }),
  );
  hood.position.y = 0.22;
  headGroup.add(hood);
  if (detail >= 0.8) {
    for (const side of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.035, 12), armor);
      ear.rotation.z = Math.PI / 2;
      ear.position.set(side * 0.165, 0.19, 0);
      headGroup.add(ear);
      const earGlow = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.008, 6, 14), accent);
      earGlow.rotation.y = Math.PI / 2;
      earGlow.position.set(side * 0.185, 0.19, 0);
      headGroup.add(earGlow);
    }
  }

  // Arms: tapered capsules with beveled cuffs
  const upperArmGeo = new THREE.CapsuleGeometry(0.065, 0.22, 6, 12);
  const forearmGeo = new THREE.CapsuleGeometry(0.055, 0.2, 6, 12);
  const makeArm = (side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.305, 0.46, 0);
    torso.add(pivot);
    const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 10), jacket);
    shoulder.position.y = -0.02;
    pivot.add(shoulder);
    const upper = new THREE.Mesh(upperArmGeo, jacket);
    upper.position.y = -0.185;
    pivot.add(upper);
    const lowerPivot = new THREE.Group();
    lowerPivot.position.y = -0.36;
    pivot.add(lowerPivot);
    const lower = new THREE.Mesh(forearmGeo, jacket);
    lower.position.y = -0.155;
    lowerPivot.add(lower);
    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.058, 0.017, 6, 16), accent);
    cuff.rotation.x = Math.PI / 2;
    cuff.position.y = -0.29;
    lowerPivot.add(cuff);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), rubber);
    hand.scale.set(1, 1.1, 1);
    hand.position.y = -0.335;
    lowerPivot.add(hand);
    return { pivot, lowerPivot, side };
  };
  const leftArm = makeArm(-1);
  const rightArm = makeArm(1);

  // Legs: capsule thighs and calves with rounded boots
  const upperLegGeo = new THREE.CapsuleGeometry(0.082, 0.28, 6, 12);
  const lowerLegGeo = new THREE.CapsuleGeometry(0.07, 0.26, 6, 12);
  const makeLeg = (side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.115, 0.98, 0);
    group.add(pivot);
    const upper = new THREE.Mesh(upperLegGeo, pants);
    upper.position.y = -0.21;
    pivot.add(upper);
    const thighPlate = new THREE.Mesh(new RoundedBoxGeometry(0.13, 0.2, 0.06, 3, 0.025), armor);
    thighPlate.position.set(0, -0.16, 0.075);
    if (detail >= 0.8) pivot.add(thighPlate);
    const lowerPivot = new THREE.Group();
    lowerPivot.position.y = -0.44;
    pivot.add(lowerPivot);
    const lower = new THREE.Mesh(lowerLegGeo, pants);
    lower.position.y = -0.18;
    lowerPivot.add(lower);
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.07, 14, 10), armor);
    knee.scale.set(1, 0.85, 0.9);
    knee.position.set(0, 0.005, 0.02);
    if (detail >= 0.8) lowerPivot.add(knee);
    const boot = new THREE.Mesh(new RoundedBoxGeometry(0.17, 0.12, 0.3, 4, 0.05), rubber);
    boot.position.set(0, -0.42, 0.055);
    lowerPivot.add(boot);
    const shin = new THREE.Mesh(new RoundedBoxGeometry(0.055, 0.17, 0.02, 2, 0.01), accent);
    shin.position.set(0, -0.22, 0.08);
    if (detail >= 0.8) lowerPivot.add(shin);
    return { pivot, lowerPivot, side };
  };
  const leftLeg = makeLeg(-1);
  const rightLeg = makeLeg(1);

  // Backpack / gear
  const pack = new THREE.Mesh(new RoundedBoxGeometry(0.34, 0.4, 0.15, 4, 0.045), armor);
  pack.position.set(0, 0.3, -0.19);
  torso.add(pack);
  const packLight = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.022, 0.02, 2, 0.01), accent);
  packLight.position.set(0, 0.41, -0.27);
  if (detail >= 0.8) torso.add(packLight);
  const canister = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 10), rubber);
  canister.position.set(0.11, 0.28, -0.275);
  if (detail >= 0.8) torso.add(canister);

  // Weapon silhouette
  const weapon = new THREE.Group();
  const gunBody = new THREE.Mesh(
    new RoundedBoxGeometry(0.075, 0.105, 0.34, 3, 0.02),
    suit || mat(0x0a0c11, { roughness: 0.35, metalness: 0.8 }),
  );
  weapon.add(gunBody);
  const barrel = new THREE.Mesh(
    new THREE.CylinderGeometry(0.026, 0.03, 0.23, 8),
    suit || mat(0x20242b, { roughness: 0.4, metalness: 0.8 }),
  );
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.02, 0.26);
  weapon.add(barrel);
  const gunGlow = new THREE.Mesh(new RoundedBoxGeometry(0.02, 0.02, 0.18, 2, 0.008), accent);
  gunGlow.position.set(0.045, 0.01, 0.1);
  weapon.add(gunGlow);
  weapon.position.set(0, -0.32, 0.18);
  rightArm.lowerPivot.add(weapon);

  const flash = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createGlowSpriteTexture('#ffe6b3'),
      color: 0xffe6b3,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  flash.scale.set(0.6, 0.6, 1);
  // Parent the flash to the weapon so it follows the wrist compensation and
  // stays at the muzzle instead of floating above the hand when aiming.
  flash.position.set(0, 0.02, 0.44);
  weapon.add(flash);

  group.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });

  // Batch the static detail inside each animated pivot so guards stay cheap.
  mergeDirectMeshes(torso);
  mergeDirectMeshes(headGroup);
  for (const arm of [leftArm, rightArm]) {
    mergeDirectMeshes(arm.pivot);
    mergeDirectMeshes(arm.lowerPivot);
  }
  for (const leg of [leftLeg, rightLeg]) {
    mergeDirectMeshes(leg.pivot);
    mergeDirectMeshes(leg.lowerPivot);
  }

  const state = {
    group,
    torso,
    headGroup,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    flash,
    color,
    hostile,
    flashTime: 0,
    visorMaterial: visor,
  };

  state.animate = (dt, time, moveSpeed = 0, grounded = true, aiming = false, sprinting = false) => {
    const speed = clamp(Math.abs(moveSpeed) / 8, 0, 1.6);
    // Blend from a relaxed walk into a full sprint instead of using a hard
    // threshold, so the gait never pops when stamina kicks in or out.
    const run = clamp((speed - 0.62) / 0.55, 0, 1);
    const strideRate = 7.4 + speed * 6.2 + (sprinting ? 1.4 : 0);
    const stride = Math.min(time * strideRate, 1000);
    const phase = Math.sin(stride);
    // Positive hip rotation sweeps the foot backward; negative swings it
    // forward. Keep the swing inside a stride that reads at sprint speed.
    const swing = phase * (0.14 + speed * 0.62);
    const bounce = Math.abs(phase) * (speed * 0.026 + run * 0.026);
    // Knee flexion belongs to the recovery half of the cycle: the foot lifts
    // and folds under the hip while the leg travels forward, then extends for
    // the next contact. Tying it to the swing sign instead produced a stiff
    // fencing-lunge pose at speed.
    const recovery = Math.cos(stride);
    const kneeL = Math.max(0, -recovery) * (0.35 + run * 0.95);
    const kneeR = Math.max(0, recovery) * (0.35 + run * 0.95);
    if (grounded) {
      torso.position.y = 1.0 + bounce;
      torso.rotation.x = speed * 0.06 + run * 0.2 + (sprinting ? 0.045 : 0);
      torso.rotation.y = -phase * run * 0.12;
      torso.rotation.z = phase * speed * 0.026;
      leftLeg.pivot.rotation.x = swing;
      rightLeg.pivot.rotation.x = -swing;
      leftLeg.lowerPivot.rotation.x = 0.05 + kneeL;
      rightLeg.lowerPivot.rotation.x = 0.05 + kneeR;
      // Arms counter the legs: left drives forward when the left leg goes
      // back. The free arm needs a real pump and a bent elbow to sell speed.
      leftArm.pivot.rotation.x = -phase * (0.55 + run * 0.5);
      leftArm.lowerPivot.rotation.x = -(0.22 + run * 0.78) - Math.max(0, phase) * run * 0.2;
      rightArm.pivot.rotation.x = phase * (0.18 + run * 0.22);
      rightArm.lowerPivot.rotation.x = -0.32 - run * 0.5;
    } else {
      torso.position.y = 1.0;
      torso.rotation.x = -0.08;
      torso.rotation.y = 0;
      torso.rotation.z = 0;
      leftLeg.pivot.rotation.x = -0.5;
      rightLeg.pivot.rotation.x = 0.25;
      leftLeg.lowerPivot.rotation.x = 0.5;
      rightLeg.lowerPivot.rotation.x = 0.2;
      leftArm.pivot.rotation.x = -0.75;
      rightArm.pivot.rotation.x = -0.2;
      leftArm.lowerPivot.rotation.x = -0.3;
    }

    const idleSway = Math.sin(time * 1.6) * 0.02;
    if (aiming) {
      const aimPitch = -1.35;
      rightArm.pivot.rotation.x = aimPitch;
      rightArm.pivot.rotation.z = 0.05;
      rightArm.lowerPivot.rotation.x = -0.08;
      rightArm.lowerPivot.rotation.z = 0.12;
      leftArm.pivot.rotation.x = -1.1;
      leftArm.pivot.rotation.z = -0.38;
      leftArm.lowerPivot.rotation.x = -0.65;
      leftArm.lowerPivot.rotation.z = 0.35;
    } else if (grounded && run > 0.3) {
      // Sprint carry: the rifle rides at the hip, muzzle level, while the
      // free arm drives. Elbows flare slightly so the pump reads from the
      // chase camera, and the right arm stays quiet so the weapon doesn't
      // flail with every stride.
      leftArm.pivot.rotation.z = -0.28 + idleSway * 0.4;
      leftArm.lowerPivot.rotation.z = 0;
      rightArm.pivot.rotation.x = -0.38 + phase * 0.06;
      rightArm.pivot.rotation.z = 0.24;
      rightArm.lowerPivot.rotation.x = -0.98;
      rightArm.lowerPivot.rotation.z = 0.2;
    } else {
      leftArm.pivot.rotation.z = -0.12 + idleSway;
      leftArm.lowerPivot.rotation.z = 0;
      rightArm.pivot.rotation.z = 0.12 - idleSway;
      rightArm.pivot.rotation.x += -0.25;
      rightArm.lowerPivot.rotation.x = -0.35;
      rightArm.lowerPivot.rotation.z = 0.05;
    }
    // The rifle is parented to the forearm, so wrist-compensate its pitch to
    // keep the muzzle level instead of pointing at the sky when the arm
    // raises to aim or tucks in for a sprint.
    let muzzlePitch;
    if (aiming) muzzlePitch = 0.02;
    else if (grounded && run > 0.3) muzzlePitch = 0.12;
    else muzzlePitch = 0.3;
    weapon.rotation.x = -(rightArm.pivot.rotation.x + rightArm.lowerPivot.rotation.x) + muzzlePitch;
    // Counter the torso lean so the operator keeps their eyes on the street.
    headGroup.rotation.x = aiming ? -0.08 : -torso.rotation.x * 0.8 + Math.sin(time * 0.8) * 0.03;
    headGroup.rotation.y = -torso.rotation.y * 0.6;

    if (state.flashTime > 0) {
      state.flashTime -= dt;
      flash.material.opacity = clamp(state.flashTime * 9, 0, 1) * 0.95;
      flash.scale.setScalar(0.6 + (1 - clamp(state.flashTime * 8, 0, 1)) * 0.25);
    } else {
      flash.material.opacity = 0;
    }
  };

  return state;
}

function makeCabinGeometry(w, h, d, topX = 0.82, topZ = 0.8, shift = 0) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i += 1) {
    if (pos.getY(i) > 0) {
      pos.setX(i, pos.getX(i) * topX);
      pos.setZ(i, pos.getZ(i) * topZ + shift);
    }
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

export function buildCar(color = 0x20e6ff) {
  const group = new THREE.Group();
  const bodyGroup = new THREE.Group();
  group.add(bodyGroup);
  const paint = new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.18,
    metalness: 0.65,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.6,
  });
  const dark = mat(0x080a0f, { roughness: 0.55, metalness: 0.55 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x07121d,
    roughness: 0.08,
    metalness: 0.35,
    transmission: 0.1,
    transparent: true,
    opacity: 0.92,
    envMapIntensity: 2,
  });
  const accent = glowMat(color === 0xff2d95 ? 0xff6bb5 : color, 1);
  const headGlow = glowMat(0xe8fbff, 1);
  const tailMat = new THREE.MeshBasicMaterial({
    color: 0xff2350,
    transparent: true,
    opacity: 1,
    toneMapped: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const exhaustMat = mat(0x181a20, { roughness: 0.3, metalness: 0.9 });

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.08, 0.32, 4.55), paint);
  chassis.position.y = 0.55;
  bodyGroup.add(chassis);

  const mid = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.24, 4.2), paint);
  mid.position.y = 0.77;
  bodyGroup.add(mid);

  const nose = new THREE.Mesh(makeCabinGeometry(1.9, 0.25, 1.65, 0.78, 0.55, 0.35), paint);
  nose.position.set(0, 0.9, 1.35);
  bodyGroup.add(nose);

  const rear = new THREE.Mesh(makeCabinGeometry(2.0, 0.28, 1.2, 0.92, 0.95, -0.05), paint);
  rear.position.set(0, 0.91, -1.65);
  bodyGroup.add(rear);

  const cabin = new THREE.Mesh(makeCabinGeometry(1.45, 0.48, 2.15, 0.74, 0.62, 0.12), glass);
  cabin.position.set(0, 1.1, -0.25);
  bodyGroup.add(cabin);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.06, 1.28), paint);
  roof.position.set(0, 1.36, -0.3);
  bodyGroup.add(roof);

  const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.16, 0.07, 0.42), dark);
  splitter.position.set(0, 0.35, 2.15);
  bodyGroup.add(splitter);

  const diffuser = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.12, 0.5), dark);
  diffuser.position.set(0, 0.34, -2.17);
  bodyGroup.add(diffuser);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.06, 0.38), paint);
  wing.position.set(0, 1.2, -2.05);
  wing.rotation.x = -0.08;
  bodyGroup.add(wing);
  for (const x of [-0.63, 0.63]) {
    const support = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.12), dark);
    support.position.set(x, 1.07, -2.02);
    bodyGroup.add(support);
  }

  // Side accent blades
  for (const side of [-1, 1]) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.05, 2.4), accent);
    blade.position.set(side * 1.045, 0.65, 0);
    bodyGroup.add(blade);
    const intake = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.75), dark);
    intake.position.set(side * 0.97, 0.9, -0.95);
    bodyGroup.add(intake);
  }

  // Light blades
  for (const x of [-0.62, 0.62]) {
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.055, 0.06), headGlow);
    head.position.set(x, 0.82, 2.22);
    bodyGroup.add(head);
  }
  const tail = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.055, 0.05), tailMat);
  tail.position.set(0, 0.88, -2.24);
  bodyGroup.add(tail);
  const tailUnder = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.03, 0.04), tailMat);
  tailUnder.position.set(0, 0.72, -2.2);
  bodyGroup.add(tailUnder);

  // Wheels: tire + rim/spokes are merged into one two-material mesh so all
  // four wheels cost eight draw calls per car instead of twenty-four.
  const wheelGeo = new THREE.CylinderGeometry(0.37, 0.37, 0.28, 16);
  wheelGeo.rotateZ(Math.PI / 2);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x08090c, roughness: 0.88 });
  const rimGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.3, 8);
  rimGeo.rotateZ(Math.PI / 2);
  const rimMat = mat(0x252a33, { roughness: 0.32, metalness: 0.9 });
  const spokeGeos = [];
  for (let a = 0; a < 4; a += 1) {
    const spoke = new THREE.BoxGeometry(0.31, 0.055, 0.05);
    spoke.rotateX((a * Math.PI) / 4);
    spokeGeos.push(spoke);
  }
  const rimMerged = mergeGeometries([rimGeo, ...spokeGeos], false);
  const wheelMerged = mergeGeometries([wheelGeo, rimMerged], true);
  wheelGeo.dispose();
  rimGeo.dispose();
  spokeGeos.forEach((geo) => geo.dispose());
  rimMerged.dispose();
  const wheels = [];
  for (const [x, z] of [[-0.98, 1.45], [0.98, 1.45], [-0.98, -1.45], [0.98, -1.45]]) {
    const steer = new THREE.Group();
    steer.position.set(x, 0.38, z);
    group.add(steer);
    const spin = new THREE.Group();
    steer.add(spin);
    spin.add(new THREE.Mesh(wheelMerged, [tireMat, rimMat]));
    wheels.push({ steer, spin, front: z > 0 });
  }

  // Wheel arches / fenders
  for (const side of [-1, 1]) {
    for (const z of [1.45, -1.45]) {
      const arch = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.08, 6, 14, Math.PI), dark);
      arch.rotation.y = Math.PI / 2;
      arch.rotation.z = Math.PI;
      arch.position.set(side * 1.02, 0.75, z);
      bodyGroup.add(arch);
    }
  }

  // Headlight ground pools. Flat additive decals read far better from the
  // chase camera than large translucent cone volumes.
  const headMat = new THREE.MeshBasicMaterial({
    map: createGlowSpriteTexture('#bfeaff'),
    color: 0xbfeaff,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
  });
  const cones = [];
  for (const x of [-0.62, 0.62]) {
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 10.5), headMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(x, 0.075, 7.1);
    bodyGroup.add(pool);
    cones.push(pool);
  }

  // Underglow
  const underGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(3.4, 6.4),
    new THREE.MeshBasicMaterial({
      map: createGlowSpriteTexture(`#${new THREE.Color(color).getHexString()}`),
      color,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  underGlow.rotation.x = -Math.PI / 2;
  underGlow.position.y = 0.055;
  group.add(underGlow);

  // Exhaust glow nodes
  const exhausts = [];
  for (const x of [-0.48, 0.48]) {
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.2, 8), exhaustMat);
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(x, 0.46, -2.31);
    bodyGroup.add(exhaust);
    const flame = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: createGlowSpriteTexture('#7fd8ff'),
        color: 0x63c9ff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    flame.position.set(x, 0.46, -2.46);
    flame.scale.set(0.9, 0.55, 1);
    bodyGroup.add(flame);
    exhausts.push(flame);
  }

  // Cockpit glow strip
  const dash = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.025, 0.02), accent);
  dash.position.set(0, 0.99, 0.9);
  bodyGroup.add(dash);

  const decal = new THREE.Mesh(
    new THREE.PlaneGeometry(0.7, 0.34),
    new THREE.MeshBasicMaterial({
      map: createNumberDecal(),
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  decal.rotation.x = -Math.PI / 2;
  decal.rotation.z = Math.PI;
  decal.position.set(0, 1.055, 1.18);
  bodyGroup.add(decal);

  // Keep the few meshes whose transforms/opacity are animated per frame.
  tail.userData.noMerge = true;
  cones.forEach((cone) => { cone.userData.noMerge = true; });

  // Collapse the static bodywork into one mesh per material. This removes
  // roughly 25 draw calls from every player car without changing the shape.
  const bodyBatches = new Map();
  for (const child of [...bodyGroup.children]) {
    if (!child.isMesh || child.userData.noMerge) continue;
    child.updateMatrix();
    const key = child.material.uuid;
    let batch = bodyBatches.get(key);
    if (!batch) {
      batch = { material: child.material, originals: [], geos: [] };
      bodyBatches.set(key, batch);
    }
    batch.originals.push(child);
    batch.geos.push(child.geometry.clone().applyMatrix4(child.matrix));
    bodyGroup.remove(child);
  }
  for (const batch of bodyBatches.values()) {
    const merged = batch.geos.length === 1
      ? batch.geos[0]
      : mergeGeometries(batch.geos, false);
    if (!merged) {
      batch.originals.forEach((child) => bodyGroup.add(child));
      batch.geos.forEach((geo) => geo.dispose());
      continue;
    }
    bodyGroup.add(new THREE.Mesh(merged, batch.material));
    if (batch.geos.length > 1) batch.geos.forEach((geo) => geo.dispose());
  }

  const state = {
    group,
    bodyGroup,
    wheels,
    underGlow,
    exhausts,
    cones,
    brake: 0,
    boost: 0,
    spin: 0,
    prevSpeed: 0,
    color,
    headMat,
  };

  state.update = (dt, speed, steering, boosting, braking, lightsOn = true) => {
    const abs = Math.abs(speed);
    const accel = (speed - state.prevSpeed) / Math.max(dt, 0.001);
    state.prevSpeed = speed;
    state.spin += speed * dt * 2.8;
    state.wheels.forEach((w) => {
      w.spin.rotation.x = state.spin;
      w.steer.rotation.y = w.front ? steering * 0.45 : 0;
    });
    const targetBrake = braking ? 1 : 0;
    state.brake = lerp(state.brake, targetBrake, 1 - Math.exp(-8 * dt));
    state.boost = lerp(state.boost, boosting ? 1 : 0, 1 - Math.exp(-7 * dt));
    bodyGroup.rotation.z = -steering * clamp(abs / 35, 0, 1) * 0.055;
    bodyGroup.rotation.x = clamp(-accel * 0.0008, -0.04, 0.04);
    bodyGroup.position.y = Math.sin(state.spin * 0.5) * clamp(abs * 0.0015, 0, 0.018);
    tail.material.opacity = lightsOn ? 1 : 0.2;
    tail.material.color.setHex(braking ? 0xff3333 : 0xff2350);
    tail.scale.x = braking ? 1.08 : 1;
    exhausts.forEach((f, i) => {
      f.material.opacity = state.boost * (0.6 + Math.random() * 0.35);
      f.scale.set(0.7 + Math.random() * 0.6, 0.45 + state.boost * 0.5, 1);
      f.position.z = -2.46 - state.boost * (0.3 + Math.random() * 0.4);
    });
    underGlow.material.opacity = 0.22 + state.boost * 0.4;
    cones.forEach((c) => {
      c.visible = lightsOn;
      c.material.opacity = lightsOn ? 0.22 : 0;
    });
  };

  return state;
}

function createNumberDecal() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, 256, 128);
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 4;
  ctx.strokeRect(6, 6, 244, 116);
  ctx.font = '900 74px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.fillText('09', 128, 68);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function buildDrone() {
  const group = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: 0x171a21, roughness: 0.34, metalness: 0.8, envMapIntensity: 1.3 });
  const glow = glowMat(0xff2a4d, 1);
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 10), shell);
  group.add(body);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), glowMat(0xff2f55, 1));
  eye.position.set(0, 0.02, 0.5);
  group.add(eye);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.78, 0.045, 4, 40), shell);
  ring.rotation.x = Math.PI / 2;
  group.add(ring);
  const glowRing = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.015, 3, 36), glowMat(0xff2f55, 0.8));
  glowRing.rotation.x = Math.PI / 2;
  group.add(glowRing);
  for (const side of [-1, 1]) {
    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.03, 12), mat(0x0b0c11, { roughness: 0.6 }));
    rotor.position.set(side * 1.02, 0.05, 0);
    group.add(rotor);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.08), shell);
    arm.position.set(side * 0.7, 0.05, 0);
    group.add(arm);
    const rotorGlow = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.012, 3, 20), glowMat(0xff563d, 0.4));
    rotorGlow.rotation.x = Math.PI / 2;
    rotorGlow.position.set(side * 1.02, 0.08, 0);
    group.add(rotorGlow);
  }
  // A translucent cone reads as a search beam without the cost of a real
  // spotlight; multiple drone spotlights were the main frame-rate killer.
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xff2f55,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const search = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 2.4, 9, 18, 1, true), beamMat);
  search.position.set(0, -4.3, 0.8);
  group.add(search);
  group.userData.eye = eye;
  group.userData.glowRing = glowRing;
  group.userData.search = search;
  group.userData.rotors = group.children.filter((c) => c.geometry?.type === 'CylinderGeometry');
  return {
    group,
    eye,
    glowRing,
    animate: (dt, time, alert = false) => {
      ring.rotation.z += dt * 1.7;
      glowRing.rotation.z -= dt * 2.2;
      eye.scale.setScalar(1 + Math.sin(time * 5) * 0.12);
      eye.material.color.setHex(alert ? 0xff1b3d : 0xff7b4d);
      search.material.opacity = alert ? 0.2 : 0.06;
      group.position.y += 0;
    },
  };
}

export function buildShard() {
  const group = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.7, 0),
    new THREE.MeshStandardMaterial({
      color: 0x58ffff,
      emissive: 0x32f4ff,
      emissiveIntensity: 3.5,
      roughness: 0.15,
      metalness: 0.7,
      toneMapped: false,
    }),
  );
  core.scale.set(1, 1.55, 1);
  group.add(core);
  const cage = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.05, 0),
    new THREE.MeshBasicMaterial({
      color: 0x7cffff,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  group.add(cage);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.025, 3, 48),
    new THREE.MeshBasicMaterial({
      color: 0x4ff4ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  ring.rotation.x = Math.PI / 2;
  group.add(ring);
  const ring2 = ring.clone();
  ring2.rotation.set(Math.PI / 2, Math.PI / 3, 0);
  group.add(ring2);
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0x39f5ff,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 2, 34, 16, 1, true), beamMat);
  beam.position.y = 17;
  group.add(beam);
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createGlowSpriteTexture('#53f5ff'),
      color: 0x53f5ff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  glow.scale.set(7, 7, 1);
  group.add(glow);
  group.position.y = 1.6;
  return {
    group,
    animate: (dt, time) => {
      core.rotation.y += dt * 1.3;
      cage.rotation.y -= dt * 0.7;
      cage.rotation.x += dt * 0.24;
      ring.rotation.z += dt * 0.9;
      ring2.rotation.z -= dt * 0.7;
      glow.material.opacity = 0.5 + Math.sin(time * 2.3) * 0.2;
      group.position.y = 1.9 + Math.sin(time * 1.7) * 0.22;
    },
  };
}

export function buildGuard() {
  return buildCharacter({ color: 0xff2c55, skin: 0xb88464, hostile: true, detail: 0.5 });
}

export function buildShadowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,0.62)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.33)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

export function makeBlobShadow(tex, size = 2.2) {
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      opacity: 0.9,
      toneMapped: false,
    }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = 1;
  return mesh;
}
