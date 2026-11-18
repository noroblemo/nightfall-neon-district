import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  createAsphaltTextures,
  createSidewalkTexture,
  createPlazaTexture,
  createFacadeTextures,
  createSignTexture,
  createBillboardTexture,
  createGlowSpriteTexture,
  createEnvironmentTexture,
} from './textures.js';
import {
  createCanvas,
  makeRng,
  TAU,
  clamp,
  makeGlowTexture,
} from './utils.js';

export const WORLD_SIZE = {
  cell: 60,
  grid: 7,
  blockHalf: 22,
  bounds: 218,
  roadWidth: 16,
};

const ROAD_LINES = [-210, -150, -90, -30, 30, 90, 150, 210];
const NEON = [0x38f5ff, 0xff2d95, 0xa86bff, 0xffb44d, 0x6bffb8];
const STREET_NAMES = ['KANTO', 'ORBITAL', 'AURORA', 'HELIX', 'ECHO', 'VANTA', 'NEXUS', 'CHROME'];

function buildSky(scene) {
  const skyGeo = new THREE.SphereGeometry(620, 32, 20);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color('#02040a') },
      midColor: { value: new THREE.Color('#0a0d20') },
      horizonColor: { value: new THREE.Color('#241a3d') },
      glowColor: { value: new THREE.Color('#432260') },
    },
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vWorld = normalize(position);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vWorld;
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 horizonColor;
      uniform vec3 glowColor;
      void main() {
        float h = clamp(vWorld.y, 0.0, 1.0);
        vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
        col = mix(col, topColor, smoothstep(0.25, 0.8, h));
        float haze = pow(1.0 - h, 6.0);
        col += glowColor * haze * 0.65;
        float band = sin(vWorld.y * 38.0 + vWorld.x * 5.0) * 0.004 * (1.0 - h);
        col += band;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.frustumCulled = false;
  scene.add(sky);

  // Stars
  const rng = makeRng(5150);
  const starCount = 900;
  const pos = new Float32Array(starCount * 3);
  const col = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i += 1) {
    const theta = rng() * TAU;
    const y = 0.04 + rng() * 0.95;
    const r = Math.sqrt(1 - y * y);
    pos[i * 3] = Math.cos(theta) * r * 580;
    pos[i * 3 + 1] = y * 580;
    pos[i * 3 + 2] = Math.sin(theta) * r * 580;
    const tint = 0.55 + rng() * 0.45;
    col[i * 3] = tint * (0.7 + rng() * 0.3);
    col[i * 3 + 1] = tint * (0.8 + rng() * 0.2);
    col[i * 3 + 2] = tint;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const starTex = createGlowSpriteTexture('#dfe9ff');
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      size: 2.1,
      map: starTex,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      sizeAttenuation: false,
      fog: false,
    }),
  );
  stars.frustumCulled = false;
  scene.add(stars);

  // Moon
  const moonTex = createGlowSpriteTexture('#dce7ff');
  const moon = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: moonTex,
      color: 0xdde8ff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
    }),
  );
  moon.position.set(250, 260, -330);
  moon.scale.set(52, 52, 1);
  scene.add(moon);
  const moonCore = new THREE.Mesh(
    new THREE.CircleGeometry(7, 36),
    new THREE.MeshBasicMaterial({ color: 0xeaf2ff, transparent: true, opacity: 0.9, fog: false }),
  );
  moonCore.position.set(246, 261, -331);
  moonCore.lookAt(0, 0, 0);
  scene.add(moonCore);
}

function scaleBoxUV(geo, w, h, d, uScale = 15, vScale = 30) {
  const uv = geo.attributes.uv;
  const dims = [
    [d, h], [d, h],
    [w, d], [w, d],
    [w, h], [w, h],
  ];
  for (let f = 0; f < 6; f += 1) {
    const [du, dv] = dims[f];
    for (let i = 0; i < 4; i += 1) {
      const idx = f * 4 + i;
      uv.setXY(idx, (uv.getX(idx) * du) / uScale, (uv.getY(idx) * dv) / vScale);
    }
  }
  uv.needsUpdate = true;
}

function addBeamSprite(parent, texture, color, position, scale, opacity = 0.7) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  sprite.position.copy(position);
  sprite.scale.set(scale, scale, 1);
  parent.add(sprite);
  return sprite;
}

export function createWorld(scene, renderer) {
  const rng = makeRng(913205);
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const colliders = [];
  const traffic = [];
  const pedestrians = [];
  const flickerSigns = [];
  const animatedRings = [];
  const extraction = new THREE.Vector3(0, 0, 1);
  const spawn = { x: 0, y: 0, z: -24, rot: 0 };
  const addCollider = (x, z, w, d) => {
    colliders.push({
      minX: x - w / 2,
      maxX: x + w / 2,
      minZ: z - d / 2,
      maxZ: z + d / 2,
    });
  };

  scene.fog = new THREE.FogExp2(0x070b16, 0.0042);

  // Lighting ------------------------------------------------------------
  const hemi = new THREE.HemisphereLight(0x5b6cff, 0x170c20, 0.85);
  scene.add(hemi);
  const moonLight = new THREE.DirectionalLight(0x8fa8ff, 1.15);
  moonLight.position.set(120, 200, -160);
  scene.add(moonLight);
  const ambient = new THREE.AmbientLight(0x2b2340, 0.7);
  scene.add(ambient);
  const plazaLightA = new THREE.PointLight(0x29e7ff, 40, 48, 2);
  plazaLightA.position.set(-12, 7, -8);
  scene.add(plazaLightA);
  const plazaLightB = new THREE.PointLight(0xff2d95, 34, 44, 2);
  plazaLightB.position.set(14, 6, 10);
  scene.add(plazaLightB);
  const spireLight = new THREE.PointLight(0x655cff, 80, 90, 2);
  spireLight.position.set(60, 30, 0);
  scene.add(spireLight);
  const warmLight = new THREE.PointLight(0xffbb77, 22, 34, 2);
  warmLight.position.set(-58, 6, -58);
  scene.add(warmLight);

  buildSky(scene);

  // Environment reflection map for wet streets and car paint.
  try {
    const envTex = createEnvironmentTexture();
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const env = pmrem.fromEquirectangular(envTex).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.65;
    envTex.dispose();
    pmrem.dispose();
  } catch {
    // Environment reflection is a nice-to-have; never block boot on it.
  }

  // Ground --------------------------------------------------------------
  const asphalt = createAsphaltTextures(anisotropy);
  asphalt.map.repeat.set(64, 64);
  asphalt.roughnessMap.repeat.set(64, 64);
  const roadMat = new THREE.MeshStandardMaterial({
    map: asphalt.map,
    roughnessMap: asphalt.roughnessMap,
    color: 0xb9c1cf,
    roughness: 0.72,
    metalness: 0.55,
    envMapIntensity: 1.1,
  });
  const groundGeo = new THREE.PlaneGeometry(520, 520);
  groundGeo.rotateX(-Math.PI / 2);
  const ground = new THREE.Mesh(groundGeo, roadMat);
  ground.position.y = -0.03;
  scene.add(ground);

  const sidewalkTex = createSidewalkTexture(anisotropy);
  sidewalkTex.repeat.set(5, 5);
  const sidewalkMat = new THREE.MeshStandardMaterial({
    map: sidewalkTex,
    color: 0xaab0bf,
    roughness: 0.86,
    metalness: 0.18,
    envMapIntensity: 0.55,
  });
  const plazaTex = createPlazaTexture(anisotropy);
  plazaTex.repeat.set(2.6, 2.6);
  const plazaMat = new THREE.MeshStandardMaterial({
    map: plazaTex,
    color: 0xbdc6dd,
    roughness: 0.42,
    metalness: 0.58,
    envMapIntensity: 1.2,
  });
  const sidewalkGeos = [];
  const plazaCircle = new THREE.Mesh(
    new THREE.CircleGeometry(28, 64),
    plazaMat,
  );
  plazaCircle.rotation.x = -Math.PI / 2;
  plazaCircle.position.set(0, 0.055, 0);
  scene.add(plazaCircle);

  const blockData = [];
  for (let i = 0; i < WORLD_SIZE.grid; i += 1) {
    for (let j = 0; j < WORLD_SIZE.grid; j += 1) {
      const cx = (i - 3) * WORLD_SIZE.cell;
      const cz = (j - 3) * WORLD_SIZE.cell;
      if (i === 3 && j === 3) continue;
      const slab = new THREE.BoxGeometry(44.5, 0.18, 44.5);
      slab.translate(cx, 0.01, cz);
      sidewalkGeos.push(slab);
      blockData.push({ cx, cz, i, j });
    }
  }
  const sidewalkMesh = new THREE.Mesh(mergeGeometries(sidewalkGeos, false), sidewalkMat);
  scene.add(sidewalkMesh);
  sidewalkGeos.forEach((g) => g.dispose());

  // Road lines and crosswalks ------------------------------------------
  const lineGeos = [];
  const crossGeos = [];
  const addLine = (x, z, w, d) => {
    const g = new THREE.PlaneGeometry(w, d);
    g.rotateX(-Math.PI / 2);
    g.translate(x, 0.105, z);
    lineGeos.push(g);
  };
  for (const line of ROAD_LINES) {
    for (let c = -206; c <= 206; c += 8) {
      addLine(line, c, 0.18, 3.4);
      addLine(c, line, 3.4, 0.18);
    }
    // Outer lane edges
    for (const off of [-7.1, 7.1]) {
      addLine(line + off, 0, 0.12, 410);
      addLine(0, line + off, 410, 0.12);
    }
  }
  for (const x of ROAD_LINES) {
    for (const z of ROAD_LINES) {
      for (let k = 0; k < 4; k += 1) {
        const ang = k * Math.PI / 2;
        for (let s = -1; s <= 1; s += 1) {
          const px = x + Math.cos(ang) * 10.4 + Math.cos(ang + Math.PI / 2) * (s * 2.4);
          const pz = z + Math.sin(ang) * 10.4 + Math.sin(ang + Math.PI / 2) * (s * 2.4);
          const g = new THREE.PlaneGeometry(4.2, 0.75);
          g.rotateX(-Math.PI / 2);
          g.rotateY(-ang);
          g.translate(px, 0.107, pz);
          crossGeos.push(g);
        }
      }
    }
  }
  const lineMat = new THREE.MeshBasicMaterial({
    color: 0xbdd2e8,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
  });
  const lineMesh = new THREE.Mesh(mergeGeometries(lineGeos, false), lineMat);
  scene.add(lineMesh);
  const crossMat = new THREE.MeshBasicMaterial({
    color: 0xdbe8f8,
    transparent: true,
    opacity: 0.3,
    depthWrite: false,
  });
  const crossMesh = new THREE.Mesh(mergeGeometries(crossGeos, false), crossMat);
  scene.add(crossMesh);
  lineGeos.forEach((g) => g.dispose());
  crossGeos.forEach((g) => g.dispose());

  // Facade/building materials ------------------------------------------
  const facadeTextures = createFacadeTextures(anisotropy);
  const facadeMaterials = facadeTextures.map((f) => new THREE.MeshStandardMaterial({
    map: f.map,
    emissiveMap: f.emissiveMap,
    emissive: 0xffffff,
    emissiveIntensity: 1.15,
    color: 0x9aa0aa,
    roughness: 0.56,
    metalness: 0.38,
    envMapIntensity: 0.5,
  }));
  const roofMat = new THREE.MeshStandardMaterial({
    color: 0x11141c,
    roughness: 0.88,
    metalness: 0.24,
  });
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0x0b0d13,
    roughness: 0.6,
    metalness: 0.7,
    envMapIntensity: 0.8,
  });
  const neonMats = NEON.slice(0, 4).map((c) => new THREE.MeshBasicMaterial({
    color: c,
    toneMapped: false,
  }));
  const buildingGeos = facadeMaterials.map(() => []);
  const roofGeos = [];
  const trimGeos = [];
  const neonGeos = neonMats.map(() => []);

  const addBuilding = (cx, cz, w, d, h, variant, withTrim = true) => {
    const geo = new THREE.BoxGeometry(w, h, d);
    scaleBoxUV(geo, w, h, d, 16, 30);
    geo.translate(cx, h / 2 + 0.12, cz);
    buildingGeos[variant].push(geo);
    addCollider(cx, cz, w, d);

    const cap = new THREE.BoxGeometry(w + 0.5, 0.55, d + 0.5);
    cap.translate(cx, h + 0.32, cz);
    roofGeos.push(cap);

    if (withTrim) {
      const trim = new THREE.BoxGeometry(w + 0.35, 0.9, d + 0.35);
      trim.translate(cx, 0.5, cz);
      trimGeos.push(trim);
    }

    if (rng.chance(0.55)) {
      const ni = rng.int(0, neonMats.length - 1);
      const stripH = 0.22;
      const stripGeo = new THREE.BoxGeometry(w + 0.16, stripH, 0.16);
      stripGeo.translate(cx, h - 1.2, cz + d / 2 + 0.1);
      neonGeos[ni].push(stripGeo);
      const stripGeo2 = new THREE.BoxGeometry(0.16, stripH, d + 0.16);
      stripGeo2.translate(cx + w / 2 + 0.1, h - 1.2, cz);
      neonGeos[ni].push(stripGeo2);
    }

    // Rooftop mechanical equipment
    const boxes = rng.int(1, 3);
    for (let b = 0; b < boxes; b += 1) {
      const bw = rng.range(1.5, Math.min(5, w * 0.25));
      const bd = rng.range(1.5, Math.min(5, d * 0.25));
      const bh = rng.range(0.7, 2.2);
      const bx = cx + rng.range(-w * 0.28, w * 0.28);
      const bz = cz + rng.range(-d * 0.28, d * 0.28);
      const mech = new THREE.BoxGeometry(bw, bh, bd);
      mech.translate(bx, h + 0.55 + bh / 2, bz);
      roofGeos.push(mech);
    }
    if (h > 55 && rng.chance(0.6)) {
      const mast = new THREE.CylinderGeometry(0.06, 0.11, rng.range(4, 10), 5);
      mast.translate(cx + rng.range(-w * 0.2, w * 0.2), h + 6, cz + rng.range(-d * 0.2, d * 0.2));
      trimGeos.push(mast);
    }
    return { w, d, h };
  };

  const makeSign = (x, z, side, width, vertical = false, word = null, color = null, y = null) => {
    const texture = createSignTexture(Math.floor(rng() * 999), word, color, vertical);
    const height = width / (vertical ? 1 / 3.33 : 3.33);
    const geo = new THREE.PlaneGeometry(width, height);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
    const sign = new THREE.Mesh(geo, mat);
    let rot = 0;
    if (side === 0) { rot = 0; z += 0.3; }
    if (side === 1) { rot = Math.PI; z -= 0.3; }
    if (side === 2) { rot = Math.PI / 2; x += 0.3; }
    if (side === 3) { rot = -Math.PI / 2; x -= 0.3; }
    sign.rotation.y = rot;
    sign.position.set(x, y ?? 0, z);
    sign.renderOrder = 2;
    scene.add(sign);
    flickerSigns.push({ mesh: sign, base: 0.82 + rng() * 0.18, phase: rng() * 12, speed: rng.range(4, 14), broken: rng.chance(0.18) });
    return sign;
  };

  const addBillboard = (x, z, side, index, y = 13) => {
    const texture = createBillboardTexture(index);
    const w = 15;
    const h = 7.5;
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
      side: THREE.DoubleSide,
    });
    const board = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    let rot = 0;
    if (side === 0) rot = 0;
    if (side === 1) rot = Math.PI;
    if (side === 2) rot = Math.PI / 2;
    if (side === 3) rot = -Math.PI / 2;
    board.rotation.y = rot;
    board.position.set(x, y, z);
    board.renderOrder = 2;
    scene.add(board);
    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.7, h + 0.7, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x090a10, roughness: 0.4, metalness: 0.8 }),
    );
    frame.position.set(x, y, z);
    frame.rotation.y = rot;
    frame.translateZ(-0.24);
    scene.add(frame);
    return board;
  };

  // City blocks ---------------------------------------------------------
  for (const block of blockData) {
    const { cx, cz, i, j } = block;
    const isSpireBlock = i === 4 && j === 3;
    if (isSpireBlock) continue;

    const distance = Math.hypot(cx, cz);
    const heightScale = clamp(1.35 - distance / 330, 0.38, 1.2);
    const type = rng.next();
    const variantFor = () => rng.int(0, facadeMaterials.length - 1);
    const tall = () => clamp(rng.range(45, 125) * heightScale, 24, 162);

    if (type < 0.1) {
      // Pocket park
      block.type = 'park';
      continue;
    }

    if (type < 0.24) {
      // Market / low podium with a slim tower
      block.type = 'market';
      const baseH = rng.range(6, 12);
      addBuilding(cx - 3, cz - 2, 36, 31, baseH, variantFor(), false);
      addBuilding(cx + 10, cz + 10, 15, 15, tall() * 0.7, variantFor());
      const signSide = rng.int(0, 3);
      if (signSide === 0) makeSign(cx, cz - 17.8, 1, rng.range(9, 13), false, null, null, 7);
      if (signSide === 1) makeSign(cx, cz + 17.8, 0, rng.range(9, 13), false, null, null, 7);
      if (signSide === 2) makeSign(cx - 17.8, cz, 3, rng.range(9, 13), false, null, null, 7);
      if (signSide === 3) makeSign(cx + 17.8, cz, 2, rng.range(9, 13), false, null, null, 7);
    } else if (type < 0.44) {
      // Two towers
      block.type = 'twin';
      const wA = rng.range(16, 21);
      const dA = rng.range(17, 24);
      const wB = rng.range(15, 20);
      const dB = rng.range(15, 21);
      addBuilding(cx - 9, cz - 7, wA, dA, tall(), variantFor());
      addBuilding(cx + 9, cz + 9, wB, dB, tall() * rng.range(0.65, 1), variantFor());
    } else if (type < 0.68) {
      // Podium tower
      block.type = 'podium';
      const baseH = rng.range(7, 15);
      addBuilding(cx, cz, 38, 33, baseH, variantFor(), false);
      addBuilding(cx + rng.range(-3, 3), cz + rng.range(-3, 3), rng.range(18, 24), rng.range(18, 24), tall() + baseH, variantFor(), false);
      addBillboard(cx, cz + 17.2, 0, rng.int(0, 3), rng.range(9, 15));
    } else {
      // Single signature tower
      block.type = 'single';
      const w = rng.range(26, 37);
      const d = rng.range(25, 36);
      const h = tall() * rng.range(0.9, 1.3);
      addBuilding(cx + rng.range(-2, 2), cz + rng.range(-2, 2), w, d, h, variantFor());
      if (rng.chance(0.75)) {
        const vertical = rng.chance(0.35);
        const side = rng.int(0, 3);
        const signWidth = vertical ? rng.range(3, 5) : rng.range(9, 16);
        const y = clamp(h * rng.range(0.3, 0.75), 8, h - 2);
        if (side === 0) makeSign(cx, cz + d / 2 + 0.2, 0, signWidth, vertical, null, null, y);
        if (side === 1) makeSign(cx, cz - d / 2 - 0.2, 1, signWidth, vertical, null, null, y);
        if (side === 2) makeSign(cx + w / 2 + 0.2, cz, 2, signWidth, vertical, null, null, y);
        if (side === 3) makeSign(cx - w / 2 - 0.2, cz, 3, signWidth, vertical, null, null, y);
      }
    }

    // Occasional corner sign on short buildings
    if (type >= 0.24 && rng.chance(0.25)) {
      const side = rng.int(0, 3);
      const w = rng.range(5, 9);
      const offsets = [cz + 20.5, cz - 20.5, cx + 20.5, cx - 20.5];
      if (side === 0) makeSign(cx + 4, offsets[0], 0, w, false, null, null, 4.5);
      if (side === 1) makeSign(cx - 4, offsets[1], 1, w, false, null, null, 4.5);
      if (side === 2) makeSign(offsets[2], cz - 4, 2, w, false, null, null, 4.5);
      if (side === 3) makeSign(offsets[3], cz + 4, 3, w, false, null, null, 4.5);
    }
  }

  // Merge architecture draw calls.
  buildingGeos.forEach((geos, index) => {
    if (!geos.length) return;
    const merged = mergeGeometries(geos, false);
    const mesh = new THREE.Mesh(merged, facadeMaterials[index]);
    scene.add(mesh);
    geos.forEach((g) => g.dispose());
  });
  if (roofGeos.length) {
    const merged = mergeGeometries(roofGeos, false);
    scene.add(new THREE.Mesh(merged, roofMat));
    roofGeos.forEach((g) => g.dispose());
  }
  if (trimGeos.length) {
    const merged = mergeGeometries(trimGeos, false);
    scene.add(new THREE.Mesh(merged, trimMat));
    trimGeos.forEach((g) => g.dispose());
  }
  neonGeos.forEach((geos, i) => {
    if (!geos.length) return;
    const merged = mergeGeometries(geos, false);
    scene.add(new THREE.Mesh(merged, neonMats[i]));
    geos.forEach((g) => g.dispose());
  });

  // NOVA Spire ----------------------------------------------------------
  const spireX = 60;
  const spireZ = 0;
  {
    const baseW = 30;
    const baseD = 30;
    addCollider(spireX, spireZ, baseW, baseD);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x141625, roughness: 0.35, metalness: 0.8, envMapIntensity: 0.9,
    });
    const lightMat = new THREE.MeshBasicMaterial({ color: 0x51ecff, toneMapped: false });
    const tower = new THREE.Group();
    tower.position.set(spireX, 0, spireZ);
    scene.add(tower);

    const tiers = [
      { w: 30, h: 22, d: 30 },
      { w: 24, h: 42, d: 24 },
      { w: 18, h: 54, d: 18 },
      { w: 12, h: 42, d: 12 },
      { w: 6.5, h: 22, d: 6.5 },
    ];
    let y = 0;
    for (let t = 0; t < tiers.length; t += 1) {
      const tier = tiers[t];
      const geo = new THREE.BoxGeometry(tier.w, tier.h, tier.d);
      scaleBoxUV(geo, tier.w, tier.h, tier.d, 14, 24);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({
          map: facadeTextures[4].map,
          emissiveMap: facadeTextures[4].emissiveMap,
          emissive: 0xffffff,
          emissiveIntensity: 1.05,
          color: 0x8d93aa,
          roughness: 0.4,
          metalness: 0.72,
          envMapIntensity: 1,
        }),
      );
      mesh.position.y = y + tier.h / 2;
      tower.add(mesh);
      if (t < tiers.length - 1) {
        const ledge = new THREE.Mesh(new THREE.BoxGeometry(tier.w + 1.2, 0.6, tier.d + 1.2), lightMat);
        ledge.position.y = y + tier.h;
        tower.add(ledge);
      }
      y += tier.h;
    }
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.55, 34, 6), trimMat);
    crown.position.y = y + 16;
    tower.add(crown);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff477d, toneMapped: false }));
    beacon.position.y = y + 33;
    tower.add(beacon);
    addBeamSprite(tower, createGlowSpriteTexture('#ff477d'), 0xff477d, new THREE.Vector3(0, y + 33, 0), 9, 0.9);

    // Tower holographic rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x42f3ff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      toneMapped: false,
    });
    for (let r = 0; r < 3; r += 1) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(18 + r * 7, 0.11, 4, 100), ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 42 + r * 20;
      ring.userData.speed = (r % 2 === 0 ? 1 : -1) * (0.05 + r * 0.02);
      ring.userData.bob = r * 2;
      tower.add(ring);
      animatedRings.push(ring);
    }
    // Neon blade on the face
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.45, 130, 0.45), lightMat);
    blade.position.set(0, 85, 16.4);
    tower.add(blade);
    const spireSign = createSignTexture(32, 'NOVA', '#53f3ff', true);
    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(7, 23),
      new THREE.MeshBasicMaterial({ map: spireSign, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, side: THREE.DoubleSide }),
    );
    signMesh.position.set(0, 48, 16.6);
    tower.add(signMesh);
    addBeamSprite(tower, createGlowSpriteTexture('#42f3ff'), 0x42f3ff, new THREE.Vector3(0, 40, 17), 20, 0.24);

    // Rooftop searchlight
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x6fd8ff,
      transparent: true,
      opacity: 0.035,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
      fog: false,
    });
    const beamGeo = new THREE.ConeGeometry(20, 170, 32, 1, true);
    beamGeo.translate(0, -85, 0);
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set(18, 160, 0);
    beam.rotation.z = -0.35;
    tower.add(beam);
    addBeamSprite(tower, createGlowSpriteTexture('#5ee8ff'), 0x5ee8ff, new THREE.Vector3(0, 168, 0), 30, 0.4);
  }

  // Central plaza -------------------------------------------------------
  {
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x47f5ff,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });
    for (const [radius, width] of [[11, 0.16], [20, 0.1], [26.5, 0.2]]) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(radius - width, radius, 96), ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.19;
      scene.add(ring);
    }
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(4.2, 5.2, 1.1, 48),
      new THREE.MeshStandardMaterial({ color: 0x0e1220, roughness: 0.25, metalness: 0.9, envMapIntensity: 1.4 }),
    );
    pedestal.position.set(0, 0.7, 13);
    scene.add(pedestal);
    addCollider(0, 13, 10, 10);
    const holoMat = new THREE.MeshBasicMaterial({
      color: 0x55efff,
      transparent: true,
      opacity: 0.58,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      wireframe: true,
      toneMapped: false,
    });
    const holo = new THREE.Mesh(new THREE.OctahedronGeometry(3.3, 0), holoMat);
    holo.position.set(0, 6.3, 13);
    holo.userData.isHolo = true;
    scene.add(holo);
    animatedRings.push(holo);
    const holoGlow = addBeamSprite(scene, createGlowSpriteTexture('#39eeff'), 0x39eeff, new THREE.Vector3(0, 6.3, 13), 16, 0.3);
    holoGlow.userData.isHoloGlow = true;
    scene.userData.holoGlow = holoGlow;
    animatedRings.push(holoGlow);

    const beamGeo = new THREE.CylinderGeometry(4.2, 4.2, 24, 32, 1, true);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x38f4ff,
      transparent: true,
      opacity: 0.055,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set(0, 12, 13);
    scene.add(beam);
    scene.userData.plazaBeam = beam;
  }

  // Parks / trees -------------------------------------------------------
  const treePositions = [];
  for (const block of blockData) {
    if (block.type !== 'park') continue;
    for (let n = 0; n < 9; n += 1) {
      treePositions.push({
        x: block.cx + rng.range(-18, 18),
        z: block.cz + rng.range(-18, 18),
        s: rng.range(0.8, 1.4),
      });
    }
  }
  for (const block of blockData) {
    if (block.type !== 'park' && rng.chance(0.45)) {
      treePositions.push({
        x: block.cx + (rng.chance(0.5) ? -20.2 : 20.2),
        z: block.cz + rng.range(-14, 14),
        s: rng.range(0.75, 1.15),
      });
    }
  }
  for (const site of [
    [-23, -19], [23, -19], [-24, 20], [24, 20], [-16, 24], [16, 24],
  ]) {
    treePositions.push({ x: site[0], z: site[1], s: 0.95 });
  }
  const trunkGeo = new THREE.CylinderGeometry(0.15, 0.24, 4.5, 6);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x2a2021, roughness: 0.92 });
  const trunkMesh = new THREE.InstancedMesh(trunkGeo, trunkMat, treePositions.length);
  const foliageGeo = new THREE.IcosahedronGeometry(2.2, 1);
  const foliageMat = new THREE.MeshStandardMaterial({
    color: 0x1c4c46,
    roughness: 0.82,
    metalness: 0.1,
    emissive: 0x0d2723,
    emissiveIntensity: 0.6,
  });
  const foliageMesh = new THREE.InstancedMesh(foliageGeo, foliageMat, treePositions.length * 2);
  const dummy = new THREE.Object3D();
  treePositions.forEach((tree, idx) => {
    dummy.position.set(tree.x, 2.2 * tree.s, tree.z);
    dummy.scale.set(tree.s, tree.s, tree.s);
    dummy.rotation.y = rng() * TAU;
    dummy.updateMatrix();
    trunkMesh.setMatrixAt(idx, dummy.matrix);
    for (let k = 0; k < 2; k += 1) {
      dummy.position.set(
        tree.x + (k === 0 ? 0 : 0.8 * tree.s) * (rng() - 0.5),
        4.3 * tree.s + k * 1.1 * tree.s,
        tree.z + (rng() - 0.5) * 0.8,
      );
      const sc = tree.s * (k === 0 ? 1 : 0.68);
      dummy.scale.set(sc, sc * 1.15, sc);
      dummy.rotation.y = rng() * TAU;
      dummy.updateMatrix();
      foliageMesh.setMatrixAt(idx * 2 + k, dummy.matrix);
    }
  });
  trunkMesh.instanceMatrix.needsUpdate = true;
  foliageMesh.instanceMatrix.needsUpdate = true;
  scene.add(trunkMesh, foliageMesh);

  // Streetlights --------------------------------------------------------
  const lampPositions = [];
  for (const line of ROAD_LINES) {
    for (let c = -195; c <= 195; c += 39) {
      lampPositions.push({ x: line + 8.8, z: c });
      lampPositions.push({ x: line - 8.8, z: c + 19.5 });
    }
  }
  for (const line of ROAD_LINES) {
    for (let c = -176; c <= 176; c += 39) {
      lampPositions.push({ x: c + 9.5, z: line + 8.8 });
      lampPositions.push({ x: c + 28.5, z: line - 8.8 });
    }
  }
  const poleGeo = new THREE.CylinderGeometry(0.07, 0.12, 5.8, 6);
  poleGeo.translate(0, 2.9, 0);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x161a24, roughness: 0.55, metalness: 0.7 });
  const poleMesh = new THREE.InstancedMesh(poleGeo, poleMat, lampPositions.length);
  const headGeo = new THREE.BoxGeometry(0.5, 0.16, 1.5);
  headGeo.translate(0, 5.78, 0);
  const headMesh = new THREE.InstancedMesh(
    headGeo,
    new THREE.MeshBasicMaterial({ color: 0xffd1a0, toneMapped: false }),
    lampPositions.length,
  );
  const glowPositions = [];
  const poolGeo = new THREE.PlaneGeometry(9, 9);
  poolGeo.rotateX(-Math.PI / 2);
  const poolMesh = new THREE.InstancedMesh(
    poolGeo,
    new THREE.MeshBasicMaterial({
      map: createGlowSpriteTexture('#ffae70'),
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
    lampPositions.length,
  );
  lampPositions.forEach((p, idx) => {
    dummy.position.set(p.x, 0, p.z);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    poleMesh.setMatrixAt(idx, dummy.matrix);
    headMesh.setMatrixAt(idx, dummy.matrix);
    dummy.position.set(p.x, 0.03, p.z);
    dummy.updateMatrix();
    poolMesh.setMatrixAt(idx, dummy.matrix);
    glowPositions.push(p.x, 5.7, p.z);
  });
  [poleMesh, headMesh, poolMesh].forEach((m) => { m.instanceMatrix.needsUpdate = true; scene.add(m); });
  const glowGeo = new THREE.BufferGeometry();
  glowGeo.setAttribute('position', new THREE.Float32BufferAttribute(glowPositions, 3));
  const lampGlow = new THREE.Points(
    glowGeo,
    new THREE.PointsMaterial({
      size: 2.1,
      map: createGlowSpriteTexture('#ffb27b'),
      color: 0xffb27b,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }),
  );
  scene.add(lampGlow);

  // Neon spill pools on the road
  const spillMat = new THREE.MeshBasicMaterial({
    color: 0x3bf4ff,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  for (let i = 0; i < 26; i += 1) {
    const spill = new THREE.Mesh(new THREE.PlaneGeometry(rng.range(3, 9), rng.range(10, 26)), spillMat.clone());
    spill.material.color.setHex(NEON[i % NEON.length]);
    spill.rotation.x = -Math.PI / 2;
    spill.rotation.z = rng() * TAU;
    spill.position.set(rng.range(-200, 200), 0.115, rng.range(-200, 200));
    scene.add(spill);
  }

  // Wet reflective puddles
  const puddleMat = new THREE.MeshStandardMaterial({
    color: 0x070b14,
    roughness: 0.04,
    metalness: 1,
    transparent: true,
    opacity: 0.9,
    envMapIntensity: 1.8,
    depthWrite: false,
  });
  for (let i = 0; i < 46; i += 1) {
    const w = rng.range(2.5, 11);
    const h = rng.range(1.2, 5);
    const puddle = new THREE.Mesh(new THREE.CircleGeometry(1, 20), puddleMat);
    puddle.scale.set(w, h, 1);
    puddle.rotation.x = -Math.PI / 2;
    puddle.rotation.z = rng() * TAU;
    puddle.position.set(rng.range(-205, 205), 0.12, rng.range(-205, 205));
    puddle.renderOrder = 1;
    scene.add(puddle);
  }

  // Props: planters, benches, barriers ----------------------------------
  const planterGeo = new THREE.BoxGeometry(2.8, 0.8, 2.8);
  const planterMat = new THREE.MeshStandardMaterial({ color: 0x1c2029, roughness: 0.7, metalness: 0.25 });
  const plantGeo = new THREE.IcosahedronGeometry(1.1, 1);
  const planterPositions = [];
  for (const a of [0, 1, 2, 3]) {
    const angle = a * Math.PI / 2 + Math.PI / 4;
    planterPositions.push({ x: Math.cos(angle) * 24.5, z: Math.sin(angle) * 24.5 });
  }
  for (let i = 0; i < 26; i += 1) {
    const b = rng.pick(blockData);
    if (!b || b.type === 'park') continue;
    planterPositions.push({
      x: b.cx + (rng.chance(0.5) ? -20 : 20),
      z: b.cz + rng.range(-16, 16),
    });
  }
  const planterMesh = new THREE.InstancedMesh(planterGeo, planterMat, planterPositions.length);
  const plantMesh = new THREE.InstancedMesh(plantGeo, foliageMat, planterPositions.length);
  planterPositions.forEach((p, idx) => {
    dummy.position.set(p.x, 0.4, p.z);
    dummy.rotation.set(0, rng() * TAU, 0);
    dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    planterMesh.setMatrixAt(idx, dummy.matrix);
    dummy.position.set(p.x, 1.45, p.z);
    dummy.scale.set(0.9, 0.75, 0.9);
    dummy.updateMatrix();
    plantMesh.setMatrixAt(idx, dummy.matrix);
  });
  scene.add(planterMesh, plantMesh);

  const benchGeo = new THREE.BoxGeometry(4, 0.22, 1.1);
  const benchLegGeo = new THREE.BoxGeometry(0.18, 0.6, 0.8);
  const benchGeos = [];
  for (const p of [-6, 6]) {
    for (const z of [-18, 25]) {
      const g = benchGeo.clone();
      g.translate(p, 0.65, z);
      benchGeos.push(g);
      for (const lx of [-1.6, 1.6]) {
        const leg = benchLegGeo.clone();
        leg.translate(p + lx, 0.3, z);
        benchGeos.push(leg);
      }
    }
  }
  const benchMesh = new THREE.Mesh(mergeGeometries(benchGeos, false), new THREE.MeshStandardMaterial({ color: 0x24262e, roughness: 0.5, metalness: 0.5 }));
  scene.add(benchMesh);
  benchGeos.forEach((g) => g.dispose());

  // Distant skyline -----------------------------------------------------
  const skylineGeos = [];
  for (let i = 0; i < 110; i += 1) {
    const angle = rng() * TAU;
    const radius = rng.range(250, 470);
    const w = rng.range(15, 55);
    const d = rng.range(15, 55);
    const h = rng.range(40, 210);
    const g = new THREE.BoxGeometry(w, h, d);
    g.translate(Math.cos(angle) * radius, h / 2 - 2, Math.sin(angle) * radius);
    skylineGeos.push(g);
  }
  const skylineMesh = new THREE.Mesh(
    mergeGeometries(skylineGeos, false),
    new THREE.MeshStandardMaterial({
      color: 0x090c16,
      roughness: 0.92,
      metalness: 0.25,
      emissive: 0x080b18,
      emissiveIntensity: 0.65,
    }),
  );
  scene.add(skylineMesh);
  skylineGeos.forEach((g) => g.dispose());
  const skylineLights = [];
  for (let i = 0; i < 70; i += 1) {
    const angle = rng() * TAU;
    const radius = rng.range(260, 450);
    skylineLights.push(Math.cos(angle) * radius, rng.range(40, 190), Math.sin(angle) * radius);
  }
  const skylineGlowGeo = new THREE.BufferGeometry();
  skylineGlowGeo.setAttribute('position', new THREE.Float32BufferAttribute(skylineLights, 3));
  const skylineGlow = new THREE.Points(
    skylineGlowGeo,
    new THREE.PointsMaterial({
      color: 0xff9b66,
      size: 1.2,
      map: createGlowSpriteTexture('#ff9b66'),
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }),
  );
  scene.add(skylineGlow);

  // Volumetric searchlights --------------------------------------------
  const searchlights = new THREE.Group();
  for (let i = 0; i < 2; i += 1) {
    const coneGeo = new THREE.ConeGeometry(18, 180, 28, 1, true);
    coneGeo.translate(0, -90, 0);
    const cone = new THREE.Mesh(
      coneGeo,
      new THREE.MeshBasicMaterial({
        color: i ? 0xff3e9e : 0x44e9ff,
        transparent: true,
        opacity: 0.03,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        fog: false,
      }),
    );
    cone.position.set(i ? -130 : 160, 170, i ? 120 : -90);
    cone.rotation.z = i ? 0.35 : -0.3;
    searchlights.add(cone);
  }
  scene.add(searchlights);

  // Traffic -------------------------------------------------------------
  const trafficColors = [0x242a38, 0x2e2633, 0x19262c, 0x3a2428, 0x1d1e28, 0x30303a];
  const makeTrafficCar = (color) => {
    const g = new THREE.Group();
    const paint = new THREE.MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.7, envMapIntensity: 1.2 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.55, 4.2), paint);
    body.position.y = 0.62;
    g.add(body);
    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.5, 1.9),
      new THREE.MeshStandardMaterial({ color: 0x0a111c, roughness: 0.12, metalness: 0.6 }),
    );
    cabin.position.set(0, 1.05, -0.2);
    g.add(cabin);
    const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.25, 10);
    wheelGeo.rotateZ(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x08090c, roughness: 0.9 });
    for (const [wx, wz] of [[-0.92, 1.35], [0.92, 1.35], [-0.92, -1.35], [0.92, -1.35]]) {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.position.set(wx, 0.34, wz);
      g.add(wheel);
    }
    const headMat = new THREE.MeshBasicMaterial({ color: 0xfff0d0, toneMapped: false });
    for (const hx of [-0.62, 0.62]) {
      const light = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.13, 0.06), headMat);
      light.position.set(hx, 0.68, 2.11);
      g.add(light);
    }
    const tail = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.1, 0.05), new THREE.MeshBasicMaterial({ color: 0xff304e, toneMapped: false }));
    tail.position.set(0, 0.68, -2.11);
    g.add(tail);
    scene.add(g);
    return g;
  };

  for (let i = 0; i < 10; i += 1) {
    const axis = i % 2 === 0 ? 'x' : 'z';
    const line = ROAD_LINES[(i * 3 + 1) % ROAD_LINES.length];
    const dir = i % 4 < 2 ? 1 : -1;
    const lane = dir * 4.2;
    const car = makeTrafficCar(trafficColors[i % trafficColors.length]);
    const start = -190 + ((i * 47) % 380);
    const speed = rng.range(8, 14);
    traffic.push({ mesh: car, axis, line, dir, lane, start, speed, t: start });
    car.rotation.y = axis === 'x' ? (dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (dir > 0 ? 0 : Math.PI);
  }

  // Pedestrians (instanced) --------------------------------------------
  const pedBodyGeo = mergeGeometries([
    new THREE.BoxGeometry(0.46, 0.85, 0.28).translate(0, 1.05, 0),
    new THREE.BoxGeometry(0.16, 0.55, 0.2).translate(-0.13, 0.35, 0),
    new THREE.BoxGeometry(0.16, 0.55, 0.2).translate(0.13, 0.35, 0),
    new THREE.BoxGeometry(0.13, 0.65, 0.16).translate(-0.31, 1.02, 0),
    new THREE.BoxGeometry(0.13, 0.65, 0.16).translate(0.31, 1.02, 0),
  ], false);
  const pedCount = 32;
  const pedBody = new THREE.InstancedMesh(
    pedBodyGeo,
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0.05 }),
    pedCount,
  );
  const pedHead = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.16, 8, 6),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 }),
    pedCount,
  );
  const umbGeo = new THREE.ConeGeometry(0.55, 0.24, 10);
  const umbMesh = new THREE.InstancedMesh(
    umbGeo,
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.2 }),
    pedCount,
  );
  const pedPalette = [0x353a4d, 0x4b2d42, 0x1d3c46, 0x443724, 0x24243a, 0x3f3f46, 0x22352e];
  const umbPalette = [0xff2d95, 0x30e8ff, 0xffb44d, 0x9a6bff, 0x1a1c28, 0x3a4150];
  const skinPalette = [0xd9ab8a, 0x9e6c4f, 0x6f4b38, 0xf0c8a6, 0xba8262];
  const blocksForPeds = blockData.filter((b) => b.type && b.type !== 'park');
  for (let i = 0; i < pedCount; i += 1) {
    const b = rng.pick(blocksForPeds);
    pedestrians.push({
      cx: b.cx,
      cz: b.cz,
      angle: rng() * TAU,
      radius: rng.range(17.2, 20.4),
      speed: rng.range(0.35, 0.85) * (rng.chance(0.5) ? 1 : -1),
      color: rng.pick(pedPalette),
      umbrella: rng.chance(0.55),
      umbrellaColor: rng.pick(umbPalette),
      skin: rng.pick(skinPalette),
      phase: rng() * TAU,
      scale: rng.range(0.88, 1.08),
    });
    pedBody.setColorAt(i, new THREE.Color(rng.pick(pedPalette)));
    pedHead.setColorAt(i, new THREE.Color(rng.pick(skinPalette)));
    umbMesh.setColorAt(i, new THREE.Color(pedestrians[i].umbrellaColor));
  }
  pedBody.instanceColor.needsUpdate = true;
  pedHead.instanceColor.needsUpdate = true;
  umbMesh.instanceColor.needsUpdate = true;
  scene.add(pedBody, pedHead, umbMesh);

  // Rain shader ---------------------------------------------------------
  const rainCount = 1500;
  const rainPos = new Float32Array(rainCount * 6);
  const rainSpeed = new Float32Array(rainCount * 2);
  for (let i = 0; i < rainCount; i += 1) {
    const x = (rng() - 0.5) * 74;
    const z = (rng() - 0.5) * 74;
    const y = rng() * 34;
    const len = 0.6 + rng() * 1.4;
    rainPos[i * 6] = x;
    rainPos[i * 6 + 1] = y;
    rainPos[i * 6 + 2] = z;
    rainPos[i * 6 + 3] = x + 0.08;
    rainPos[i * 6 + 4] = y + len;
    rainPos[i * 6 + 5] = z;
    const s = 17 + rng() * 12;
    rainSpeed[i * 2] = s;
    rainSpeed[i * 2 + 1] = s;
  }
  const rainGeo = new THREE.BufferGeometry();
  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
  rainGeo.setAttribute('aSpeed', new THREE.BufferAttribute(rainSpeed, 1));
  const rainMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      attribute float aSpeed;
      uniform float uTime;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * aSpeed, 34.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vAlpha = smoothstep(0.0, 4.0, p.y) * (1.0 - smoothstep(26.0, 34.0, p.y));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying float vAlpha;
      void main() {
        gl_FragColor = vec4(0.57, 0.75, 0.95, 0.30 * vAlpha);
      }
    `,
  });
  const rain = new THREE.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  scene.add(rain);

  // Open mission sites on sidewalks ------------------------------------
  const siteCandidates = [];
  for (const b of blockData) {
    if (!b.type || b.type === 'park') continue;
    for (const [ox, oz] of [[20.2, 6], [-20.2, -6], [6, 20.2], [-6, -20.2]]) {
      const x = b.cx + ox;
      const z = b.cz + oz;
      const blocked = colliders.some((c) => (
        x > c.minX - 1.8 && x < c.maxX + 1.8 && z > c.minZ - 1.8 && z < c.maxZ + 1.8
      ));
      if (blocked) continue;
      if (Math.hypot(x, z) < 48) continue;
      siteCandidates.push({ x, z, name: STREET_NAMES[(b.i + b.j * 3) % STREET_NAMES.length] });
    }
  }
  const shardSites = [];
  const shuffled = siteCandidates.sort(() => rng.next() - 0.5);
  for (const site of shuffled) {
    if (shardSites.every((s) => Math.hypot(s.x - site.x, s.z - site.z) > 58)) {
      shardSites.push(site);
    }
    if (shardSites.length >= 9) break;
  }
  // Fallbacks guarantee three sites even if the city algorithm changes.
  while (shardSites.length < 3) {
    shardSites.push({ x: -40 + shardSites.length * 38, z: 40, name: 'NIGHT MARKET' });
  }

  // Car spawns on open roads near the plaza.
  const carSpawns = [
    { x: 7, z: -34, rot: Math.PI / 2, color: 0x20e6ff },
    { x: 34, z: 9, rot: 0, color: 0xff2d95 },
    { x: -34, z: -12, rot: Math.PI, color: 0xffb44d },
    { x: -9, z: 66, rot: -Math.PI / 2, color: 0xa86bff },
    { x: 106, z: -34, rot: Math.PI / 2, color: 0x6bffb8 },
  ];

  // Ambient audio-position markers are handled by the game.
  const metro = {
    bounds: WORLD_SIZE.bounds,
    blocks: blockData,
    roads: ROAD_LINES,
  };

  // Extraction pad visuals ---------------------------------------------
  const extractionGroup = new THREE.Group();
  extractionGroup.position.set(extraction.x, 0.16, extraction.z);
  const exRing = new THREE.Mesh(
    new THREE.RingGeometry(5.6, 7, 80),
    new THREE.MeshBasicMaterial({
      color: 0x45f6ff,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }),
  );
  exRing.rotation.x = -Math.PI / 2;
  extractionGroup.add(exRing);
  const exBeam = new THREE.Mesh(
    new THREE.CylinderGeometry(4.2, 6.4, 40, 40, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0x42f3ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    }),
  );
  exBeam.position.y = 20;
  extractionGroup.add(exBeam);
  const exGlow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createGlowSpriteTexture('#42f3ff'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  );
  exGlow.position.y = 1.2;
  exGlow.scale.set(18, 18, 1);
  extractionGroup.add(exGlow);
  extractionGroup.visible = false;
  scene.add(extractionGroup);

  const state = {
    colliders,
    shardSites,
    carSpawns,
    traffic,
    pedestrians,
    extraction,
    extractionGroup,
    spawn,
    metro,
    animatedRings,
    scene,
    flickerSigns,
    searchlights,
    rain,
    rainMat,
    dummy,
    elapsed: 0,
    quality: 1,
    low: false,
    update,
  };

  function update(dt, elapsed, playerPos, cameraPos) {
    state.elapsed = elapsed;
    rainMat.uniforms.uTime.value = elapsed;
    rain.position.x = playerPos.x;
    rain.position.z = playerPos.z;
    rain.visible = !!state.quality;
    const intensity = state.low ? 0.55 : 1;
    lampGlow.material.opacity = 0.6 * intensity;
    searchlights.children.forEach((beam, i) => {
      beam.rotation.z = (i ? 0.3 : -0.3) + Math.sin(elapsed * 0.08 + i * 2) * 0.26;
      beam.material.opacity = (state.low ? 0.014 : 0.03) * (0.75 + Math.sin(elapsed * 0.35 + i) * 0.25);
    });
    animatedRings.forEach((obj) => {
      if (obj.userData.isHolo) {
        obj.rotation.y += dt * 0.55;
        obj.rotation.x += dt * 0.22;
        obj.position.y = 6.3 + Math.sin(elapsed * 1.3) * 0.35;
      } else if (obj.userData.isHoloGlow) {
        obj.position.y = 6.3 + Math.sin(elapsed * 1.3) * 0.35;
        obj.material.opacity = 0.24 + Math.sin(elapsed * 2.2) * 0.07;
      } else {
        obj.rotation.z += dt * obj.userData.speed;
        obj.position.y += Math.sin(elapsed * 0.8 + obj.userData.bob) * dt * 0.12;
      }
    });
    const holoGlow = scene.userData.holoGlow;
    if (holoGlow) holoGlow.position.y = 6.3 + Math.sin(elapsed * 1.3) * 0.35;
    const beam = scene.userData.plazaBeam;
    if (beam) beam.material.opacity = 0.04 + Math.sin(elapsed * 1.2) * 0.012;
    if (extractionGroup.visible) {
      exRing.rotation.z += dt * 0.35;
      exGlow.material.opacity = 0.55 + Math.sin(elapsed * 2.4) * 0.18;
      exBeam.material.opacity = 0.05 + Math.sin(elapsed * 1.8) * 0.018;
    }
    flickerSigns.forEach((s) => {
      const wave = Math.sin(elapsed * s.speed + s.phase);
      s.mesh.material.opacity = s.base * (0.85 + wave * 0.15);
      if (s.broken && Math.sin(elapsed * 21 + s.phase) > 0.92) s.mesh.material.opacity *= 0.15;
    });

    // Traffic
    for (const car of traffic) {
      let speed = car.speed;
      // Brake for the player when directly ahead.
      if (playerPos) {
        let ahead = 0;
        if (car.axis === 'x') {
          ahead = (playerPos.x - car.t) * car.dir;
          if (ahead > 0 && ahead < 13 && Math.abs(playerPos.z - (car.line + car.lane)) < 4.5) speed = 0;
        } else {
          ahead = (playerPos.z - car.t) * car.dir;
          if (ahead > 0 && ahead < 13 && Math.abs(playerPos.x - (car.line + car.lane)) < 4.5) speed = 0;
        }
      }
      car.t += speed * car.dir * dt;
      if (car.t > 215) car.t = -215;
      if (car.t < -215) car.t = 215;
      if (car.axis === 'x') {
        car.mesh.position.set(car.t, 0.02, car.line + car.lane);
      } else {
        car.mesh.position.set(car.line + car.lane, 0.02, car.t);
      }
    }

    // Pedestrians
    for (let i = 0; i < pedestrians.length; i += 1) {
      const p = pedestrians[i];
      p.angle += (p.speed / p.radius) * dt;
      const x = p.cx + Math.cos(p.angle) * p.radius;
      const z = p.cz + Math.sin(p.angle) * p.radius;
      const bob = Math.sin(p.angle * 10 + p.phase) * 0.035;
      dummy.position.set(x, 0.2 + bob, z);
      dummy.rotation.set(0, -p.angle + (p.speed > 0 ? Math.PI / 2 : -Math.PI / 2), 0);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      pedBody.setMatrixAt(i, dummy.matrix);
      dummy.position.y = 1.86 * p.scale + bob;
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      pedHead.setMatrixAt(i, dummy.matrix);
      dummy.position.set(x, (p.umbrella ? 2.45 : 0) * p.scale + bob, z);
      dummy.rotation.set(p.umbrella ? 0.12 : 0, 0, p.umbrella ? 0.1 : 0);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      umbMesh.setMatrixAt(i, dummy.matrix);
    }
    pedBody.instanceMatrix.needsUpdate = true;
    pedHead.instanceMatrix.needsUpdate = true;
    umbMesh.instanceMatrix.needsUpdate = true;
  }

  return state;
}
