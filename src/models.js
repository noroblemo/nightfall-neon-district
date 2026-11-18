import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createGlowSpriteTexture } from './textures.js';
import { clamp, lerp } from './utils.js';

const bodyMaterialCache = new Map();

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

export function buildCharacter({ color = 0x35e9ff, skin = 0xd9ab8a, hostile = false } = {}) {
  const group = new THREE.Group();
  // Gentle self-illumination keeps operators readable against the dark city.
  const lit = hostile ? {} : { emissive: 0x303748, emissiveIntensity: 0.45 };
  const litPants = hostile ? {} : { emissive: 0x242a39, emissiveIntensity: 0.45 };
  const litSkin = hostile ? {} : { emissive: skin, emissiveIntensity: 0.22 };
  const jacket = mat(hostile ? 0x262631 : 0x3a4256, { roughness: 0.75, metalness: 0.15, ...lit });
  const pants = mat(hostile ? 0x181a20 : 0x2c3346, { roughness: 0.8, ...litPants });
  const accent = glowMat(hostile ? 0xff2c55 : color, 1);
  const visor = glowMat(hostile ? 0xff263f : color, 1);
  const skinMat = mat(skin, { roughness: 0.82, metalness: 0, ...litSkin });
  if (!hostile) {
    const fill = new THREE.PointLight(0x9fe2ff, 10, 6, 2);
    fill.position.set(0, 2.3, -1.0);
    group.add(fill);
  }

  const torso = new THREE.Group();
  torso.position.y = 1.02;
  group.add(torso);

  const chest = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.58, 0.3), jacket);
  chest.position.y = 0.12;
  torso.add(chest);
  const collar = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.13, 0.34), mat(0x0b0d12, { roughness: 0.5, metalness: 0.5 }));
  collar.position.y = 0.43;
  torso.add(collar);
  const chestLine = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.035, 0.02), accent);
  chestLine.position.set(0, 0.19, 0.158);
  torso.add(chestLine);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.3), mat(0x08090d, { roughness: 0.4, metalness: 0.6 }));
  belt.position.y = -0.2;
  torso.add(belt);

  const headGroup = new THREE.Group();
  headGroup.position.y = 0.45;
  torso.add(headGroup);
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.14, 8), skinMat);
  neck.position.y = 0.02;
  headGroup.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.175, 12, 10), mat(hostile ? 0x2c2f3a : 0x3a4152, { roughness: 0.55 }));
  head.scale.set(0.92, 1.06, 0.94);
  head.position.y = 0.2;
  headGroup.add(head);
  const face = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.09, 0.06), visor);
  face.position.set(0, 0.21, 0.155);
  headGroup.add(face);
  const hood = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), mat(hostile ? 0x111218 : 0x10121a, { roughness: 0.55 }));
  hood.position.y = 0.22;
  headGroup.add(hood);

  // Arms
  const armGeo = new THREE.BoxGeometry(0.14, 0.54, 0.18);
  const forearmGeo = new THREE.BoxGeometry(0.12, 0.34, 0.15);
  const makeArm = (side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.34, 0.3, 0);
    torso.add(pivot);
    const upper = new THREE.Mesh(armGeo, jacket);
    upper.position.y = -0.2;
    pivot.add(upper);
    const lowerPivot = new THREE.Group();
    lowerPivot.position.y = -0.46;
    pivot.add(lowerPivot);
    const lower = new THREE.Mesh(forearmGeo, jacket);
    lower.position.y = -0.14;
    lowerPivot.add(lower);
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.14), mat(0x101116));
    hand.position.y = -0.34;
    lowerPivot.add(hand);
    const cuff = new THREE.Mesh(new THREE.BoxGeometry(0.145, 0.035, 0.185), accent);
    cuff.position.y = -0.2;
    pivot.add(cuff);
    return { pivot, lowerPivot, side };
  };
  const leftArm = makeArm(-1);
  const rightArm = makeArm(1);

  // Legs
  const legPivotGeo = new THREE.BoxGeometry(0.19, 0.62, 0.24);
  const lowerLegGeo = new THREE.BoxGeometry(0.16, 0.52, 0.2);
  const makeLeg = (side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.13, 0.82, 0);
    group.add(pivot);
    const upper = new THREE.Mesh(legPivotGeo, pants);
    upper.position.y = -0.3;
    pivot.add(upper);
    const lowerPivot = new THREE.Group();
    lowerPivot.position.y = -0.62;
    pivot.add(lowerPivot);
    const lower = new THREE.Mesh(lowerLegGeo, pants);
    lower.position.y = -0.24;
    lowerPivot.add(lower);
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.15, 0.37), mat(0x090a0e, { roughness: 0.5, metalness: 0.3 }));
    boot.position.set(0, -0.52, 0.08);
    lowerPivot.add(boot);
    const shin = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.03, 0.22), accent);
    shin.position.set(0, -0.38, 0.02);
    lowerPivot.add(shin);
    return { pivot, lowerPivot, side };
  };
  const leftLeg = makeLeg(-1);
  const rightLeg = makeLeg(1);

  // Backpack / gear
  const pack = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.44, 0.16), mat(0x0c0e14, { roughness: 0.55, metalness: 0.35 }));
  pack.position.set(0, 0.14, -0.22);
  torso.add(pack);
  const packLight = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.025, 0.02), accent);
  packLight.position.set(0, 0.26, -0.31);
  torso.add(packLight);

  // Weapon silhouette
  const weapon = new THREE.Group();
  const gunBody = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.12, 0.36), mat(0x0a0c11, { roughness: 0.35, metalness: 0.8 }));
  weapon.add(gunBody);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.23, 6), mat(0x20242b, { roughness: 0.4, metalness: 0.8 }));
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.02, 0.26);
  weapon.add(barrel);
  const gunGlow = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.18), accent);
  gunGlow.position.set(0.045, 0.01, 0.1);
  weapon.add(gunGlow);
  weapon.position.set(0, -0.34, 0.18);
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
  flash.position.set(0, -0.34, 0.48);
  rightArm.lowerPivot.add(flash);

  group.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });

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

  state.animate = (dt, time, moveSpeed = 0, grounded = true, aiming = false) => {
    const speed = clamp(Math.abs(moveSpeed) / 8, 0, 1.6);
    const stride = Math.min(time * (5 + speed * 5), 1000);
    const swing = Math.sin(stride) * (0.12 + speed * 0.7);
    const bounce = Math.abs(Math.sin(stride)) * speed * 0.035;
    if (grounded) {
      torso.position.y = 1.02 + bounce;
      torso.rotation.x = speed * 0.11;
      torso.rotation.z = Math.sin(stride) * speed * 0.035;
      leftLeg.pivot.rotation.x = swing;
      rightLeg.pivot.rotation.x = -swing;
      leftLeg.lowerPivot.rotation.x = Math.max(0, -swing) * 0.55;
      rightLeg.lowerPivot.rotation.x = Math.max(0, swing) * 0.55;
      leftArm.pivot.rotation.x = -swing * 0.75;
      rightArm.pivot.rotation.x = swing * 0.45;
      leftArm.lowerPivot.rotation.x = -Math.max(0, swing) * 0.3;
    } else {
      torso.position.y = 1.02;
      torso.rotation.x = -0.08;
      torso.rotation.z = 0;
      leftLeg.pivot.rotation.x = -0.5;
      rightLeg.pivot.rotation.x = 0.25;
      leftLeg.lowerPivot.rotation.x = 0.5;
      rightLeg.lowerPivot.rotation.x = 0.2;
      leftArm.pivot.rotation.x = -0.75;
      rightArm.pivot.rotation.x = -0.2;
    }

    const idleSway = Math.sin(time * 1.6) * 0.02;
    if (!aiming) {
      leftArm.pivot.rotation.z = -0.12 + idleSway;
      rightArm.pivot.rotation.z = 0.12 - idleSway;
      rightArm.pivot.rotation.x += -0.25;
      rightArm.lowerPivot.rotation.x = -0.35;
      rightArm.lowerPivot.rotation.z = 0.05;
    } else {
      const aimPitch = -1.35;
      rightArm.pivot.rotation.x = aimPitch;
      rightArm.pivot.rotation.z = 0.05;
      rightArm.lowerPivot.rotation.x = -0.08;
      rightArm.lowerPivot.rotation.z = 0.12;
      leftArm.pivot.rotation.x = -1.1;
      leftArm.pivot.rotation.z = -0.38;
      leftArm.lowerPivot.rotation.x = -0.65;
      leftArm.lowerPivot.rotation.z = 0.35;
    }
    headGroup.rotation.x = aiming ? -0.08 : Math.sin(time * 0.8) * 0.04;

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

  const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.16, 0.07, 0.42), mat(0x06070a, { roughness: 0.4, metalness: 0.8 }));
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
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.055, 0.06), glowMat(0xe8fbff, 1));
    head.position.set(x, 0.82, 2.22);
    bodyGroup.add(head);
  }
  const tail = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.055, 0.05),
    new THREE.MeshBasicMaterial({
      color: 0xff2350,
      transparent: true,
      opacity: 1,
      toneMapped: false,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
  tail.position.set(0, 0.88, -2.24);
  bodyGroup.add(tail);
  const tailUnder = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.03, 0.04), glowMat(0xff2350, 0.7));
  tailUnder.position.set(0, 0.72, -2.2);
  bodyGroup.add(tailUnder);

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.37, 0.37, 0.28, 16);
  wheelGeo.rotateZ(Math.PI / 2);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x08090c, roughness: 0.88 });
  const rimGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.3, 8);
  rimGeo.rotateZ(Math.PI / 2);
  const rimMat = mat(0x252a33, { roughness: 0.32, metalness: 0.9 });
  const wheels = [];
  for (const [x, z] of [[-0.98, 1.45], [0.98, 1.45], [-0.98, -1.45], [0.98, -1.45]]) {
    const steer = new THREE.Group();
    steer.position.set(x, 0.38, z);
    group.add(steer);
    const spin = new THREE.Group();
    steer.add(spin);
    const tire = new THREE.Mesh(wheelGeo, tireMat);
    spin.add(tire);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    spin.add(rim);
    for (let a = 0; a < 4; a += 1) {
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.31, 0.055, 0.05), rimMat);
      spoke.rotation.x = (a * Math.PI) / 4;
      spin.add(spoke);
    }
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
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 10.5), headMat.clone());
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
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.2, 8), mat(0x181a20, { roughness: 0.3, metalness: 0.9 }));
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
  const search = new THREE.SpotLight(0xff2f55, 0, 16, 0.4, 0.7, 1.6);
  search.position.set(0, -0.2, 0.4);
  search.target.position.set(0, -5, 3);
  group.add(search, search.target);
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
      search.intensity = alert ? 12 : 3;
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
  return buildCharacter({ color: 0xff2c55, skin: 0xb88464, hostile: true });
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
