import * as THREE from 'three';

export const PI = Math.PI;
export const TAU = Math.PI * 2;

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const smoothstep = (min, max, v) => {
  const t = clamp((v - min) / (max - min), 0, 1);
  return t * t * (3 - 2 * t);
};
export const angleDelta = (from, to) => {
  let d = (to - from) % TAU;
  if (d > PI) d -= TAU;
  if (d < -PI) d += TAU;
  return d;
};
export const dampAngle = (from, to, lambda, dt) => from + angleDelta(from, to) * (1 - Math.exp(-lambda * dt));
export const dist2D = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);
export const randRange = (rng, min, max) => min + (max - min) * rng();

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRng(seed) {
  const r = mulberry32(seed);
  // Callable random source with convenience helpers, so both rng() and
  // rng.range()/rng.int()/rng.pick()/rng.chance() work everywhere.
  const random = () => r();
  random.next = r;
  random.range = (min, max) => min + (max - min) * r();
  random.int = (min, max) => Math.floor(min + (max - min + 1) * r());
  random.pick = (arr) => arr[Math.floor(r() * arr.length)];
  random.chance = (p) => r() < p;
  return random;
}

export function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const ID_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export function makeRoomCode(length = 5) {
  let out = '';
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  for (const b of bytes) out += ID_CHARS[b % ID_CHARS.length];
  return out;
}

export function makeId(prefix = 'p') {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

export function formatNumber(n) {
  return Math.round(n).toLocaleString('en-US');
}

export function formatTime(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function canvasTexture(canvas, repeat = false) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  if (repeat) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
  }
  tex.needsUpdate = true;
  return tex;
}

export function createCanvas(width, height = width) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

export function projectToScreen(vec, camera, width, height) {
  const p = vec.clone().project(camera);
  return {
    x: (p.x * 0.5 + 0.5) * width,
    y: (-p.y * 0.5 + 0.5) * height,
    visible: p.z > -1 && p.z < 1,
  };
}

export function circleBoxResolve(pos, radius, box) {
  const nearestX = clamp(pos.x, box.minX, box.maxX);
  const nearestZ = clamp(pos.z, box.minZ, box.maxZ);
  let dx = pos.x - nearestX;
  let dz = pos.z - nearestZ;
  const d2 = dx * dx + dz * dz;
  if (d2 >= radius * radius) return false;
  if (d2 > 0.000001) {
    const d = Math.sqrt(d2);
    const push = radius - d;
    pos.x += (dx / d) * push;
    pos.z += (dz / d) * push;
  } else {
    // Center is inside the box: push out through the closest edge.
    const left = pos.x - box.minX;
    const right = box.maxX - pos.x;
    const up = pos.z - box.minZ;
    const down = box.maxZ - pos.z;
    const m = Math.min(left, right, up, down);
    if (m === left) pos.x = box.minX - radius;
    else if (m === right) pos.x = box.maxX + radius;
    else if (m === up) pos.z = box.minZ - radius;
    else pos.z = box.maxZ + radius;
  }
  return true;
}

// Resolve a circle against a yawed rectangle on the XZ plane. `box.rot` uses
// the game's yaw convention: +Z is the box's forward axis.
export function circleOrientedBoxResolve(pos, radius, box) {
  const cos = Math.cos(box.rot);
  const sin = Math.sin(box.rot);
  const dx = pos.x - box.x;
  const dz = pos.z - box.z;
  // World -> box-local. Local +X is right, local +Z is forward.
  const lx = dx * cos - dz * sin;
  const lz = dx * sin + dz * cos;
  const nearestX = clamp(lx, -box.halfX, box.halfX);
  const nearestZ = clamp(lz, -box.halfZ, box.halfZ);
  let ox = lx - nearestX;
  let oz = lz - nearestZ;
  const d2 = ox * ox + oz * oz;
  if (d2 >= radius * radius) return false;
  if (d2 > 0.000001) {
    const d = Math.sqrt(d2);
    const push = radius - d;
    ox = (ox / d) * push;
    oz = (oz / d) * push;
  } else {
    // Center is inside the hull: exit through the nearest face.
    const left = lx + box.halfX;
    const right = box.halfX - lx;
    const back = lz + box.halfZ;
    const front = box.halfZ - lz;
    const m = Math.min(left, right, back, front);
    if (m === left) ox = -left - radius;
    else if (m === right) ox = right + radius;
    else if (m === back) oz = -back - radius;
    else oz = front + radius;
  }
  // Box-local -> world.
  pos.x += ox * cos + oz * sin;
  pos.z += -ox * sin + oz * cos;
  return true;
}

export function segmentBoxHit(start, end, box, pad = 0) {
  // 2D slab test on XZ, returns hit distance fraction or null. This runs for
  // every collider in several per-frame scans, so avoid all allocations.
  let tmin = 0;
  let tmax = 1;
  const dx = end.x - start.x;
  const dz = end.z - start.z;
  const minX = box.minX - pad;
  const maxX = box.maxX + pad;
  const minZ = box.minZ - pad;
  const maxZ = box.maxZ + pad;

  if (Math.abs(dx) < 1e-8) {
    if (start.x < minX || start.x > maxX) return null;
  } else {
    let t1 = (minX - start.x) / dx;
    let t2 = (maxX - start.x) / dx;
    if (t1 > t2) {
      const swap = t1;
      t1 = t2;
      t2 = swap;
    }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return null;
  }

  if (Math.abs(dz) < 1e-8) {
    if (start.z < minZ || start.z > maxZ) return null;
  } else {
    let t1 = (minZ - start.z) / dz;
    let t2 = (maxZ - start.z) / dz;
    if (t1 > t2) {
      const swap = t1;
      t1 = t2;
      t2 = swap;
    }
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return null;
  }

  return tmin;
}

export function makeGlowTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128) {
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.22, inner);
  g.addColorStop(0.55, outer.replace(/[\d.]+\)$/, '0.18)'));
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvasTexture(c);
}

export function makeRingTexture(color = 'rgba(70,255,255,1)', size = 256) {
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  ctx.strokeStyle = color;
  ctx.lineWidth = 8;
  ctx.shadowColor = color;
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 24, 0, TAU);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 36, 0, TAU);
  ctx.stroke();
  return canvasTexture(c);
}

export function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGL2RenderingContext && c.getContext('webgl2'));
  } catch {
    return false;
  }
}
