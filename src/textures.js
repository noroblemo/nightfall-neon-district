import * as THREE from 'three';
import { createCanvas, canvasTexture, TAU, makeRng } from './utils.js';

function finishTexture(canvas, { repeat = true, srgb = true } = {}) {
  const tex = canvasTexture(canvas, repeat);
  if (!srgb) tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

function noise(ctx, w, h, amount, rng, alpha = 1) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rng() - 0.5) * amount;
    d[i] += n;
    d[i + 1] += n;
    d[i + 2] += n;
    d[i + 3] = Math.min(255, d[i + 3] * alpha);
  }
  ctx.putImageData(img, 0, 0);
}

export function createAsphaltTextures(anisotropy = 4) {
  const rng = makeRng(9173);
  const size = 512;
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#17191e';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 2600; i += 1) {
    const x = rng() * size;
    const y = rng() * size;
    const s = rng() * 2.6 + 0.4;
    const v = 26 + Math.floor(rng() * 35);
    ctx.fillStyle = `rgba(${v},${v + 2},${v + 5},${rng() * 0.55})`;
    ctx.fillRect(x, y, s, s);
  }
  // Tire wear bands
  for (let i = 0; i < 9; i += 1) {
    ctx.fillStyle = `rgba(10,11,15,${0.06 + rng() * 0.08})`;
    ctx.fillRect(0, rng() * size, size, 10 + rng() * 30);
  }
  // Cracks
  ctx.strokeStyle = 'rgba(6,7,10,0.55)';
  ctx.lineWidth = 1.2;
  for (let i = 0; i < 18; i += 1) {
    let x = rng() * size;
    let y = rng() * size;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let j = 0; j < 5; j += 1) {
      x += (rng() - 0.5) * 60;
      y += (rng() - 0.5) * 60;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  noise(ctx, size, size, 14, rng);
  const map = finishTexture(c);
  map.anisotropy = anisotropy;

  // Roughness / wet-street variation.
  const rc = createCanvas(size);
  const rctx = rc.getContext('2d');
  rctx.fillStyle = '#6d6d6d';
  rctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 90; i += 1) {
    const x = rng() * size;
    const y = rng() * size;
    const r = 12 + rng() * 70;
    const g = rctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(18,18,18,0.75)');
    g.addColorStop(1, 'rgba(18,18,18,0)');
    rctx.fillStyle = g;
    rctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  noise(rctx, size, size, 20, rng);
  const roughnessMap = finishTexture(rc, { srgb: false });
  roughnessMap.anisotropy = anisotropy;
  return { map, roughnessMap };
}

export function createSidewalkTexture(anisotropy = 4) {
  const rng = makeRng(4481);
  const size = 256;
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#282b33';
  ctx.fillRect(0, 0, size, size);
  const tile = 64;
  for (let y = 0; y < size; y += tile) {
    for (let x = 0; x < size; x += tile) {
      const v = 31 + Math.floor(rng() * 11);
      ctx.fillStyle = `rgb(${v},${v + 2},${v + 5})`;
      ctx.fillRect(x + 2, y + 2, tile - 4, tile - 4);
      ctx.strokeStyle = 'rgba(8,9,12,0.8)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 1, y + 1, tile - 2, tile - 2);
      for (let i = 0; i < 20; i += 1) {
        ctx.fillStyle = `rgba(5,6,9,${rng() * 0.15})`;
        ctx.fillRect(x + rng() * tile, y + rng() * tile, 1.5, 1.5);
      }
    }
  }
  noise(ctx, size, size, 9, rng);
  const tex = finishTexture(c);
  tex.anisotropy = anisotropy;
  return tex;
}

export function createPlazaTexture(anisotropy = 4) {
  const rng = makeRng(8127);
  const size = 512;
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#141721';
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(73,227,255,0.09)';
  ctx.lineWidth = 2;
  const step = 64;
  for (let i = 0; i <= size; i += step) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(size, i);
    ctx.stroke();
  }
  for (let i = 0; i < 55; i += 1) {
    ctx.strokeStyle = `rgba(70,240,255,${0.02 + rng() * 0.08})`;
    ctx.lineWidth = 0.8 + rng() * 1.5;
    ctx.beginPath();
    ctx.arc(rng() * size, rng() * size, rng() * 90, 0, TAU);
    ctx.stroke();
  }
  noise(ctx, size, size, 8, rng);
  const tex = finishTexture(c);
  tex.anisotropy = anisotropy;
  return tex;
}

const FACADE_THEMES = [
  { wall: '#1e2532', glass: '#0c1624', lit: ['#ffd9a0', '#ffe9c4', '#8ce6ff', '#ffa9d6'], tint: '#7686a4', density: 0.42 },
  { wall: '#2a2423', glass: '#121113', lit: ['#ffd09a', '#ffb36b', '#cbeaff', '#79d7ff'], tint: '#a58c7d', density: 0.35 },
  { wall: '#1b2a2b', glass: '#071719', lit: ['#bffaff', '#66e9ff', '#ff9cd8', '#e8fff9'], tint: '#5b9ca0', density: 0.38 },
  { wall: '#211d2e', glass: '#0d0b18', lit: ['#d4b7ff', '#ffb0e4', '#8defff', '#ffe6a6'], tint: '#8475b7', density: 0.46 },
  { wall: '#181a20', glass: '#0a0d14', lit: ['#ffc98a', '#a8f4ff', '#ff90c9'], tint: '#687083', density: 0.3 },
];

export function createFacadeTextures(anisotropy = 4) {
  return FACADE_THEMES.map((theme, ti) => {
    const rng = makeRng(1229 + ti * 997);
    const w = 512;
    const h = 512;
    const albedo = createCanvas(w, h);
    const emissive = createCanvas(w, h);
    const ctx = albedo.getContext('2d');
    const ectx = emissive.getContext('2d');
    ctx.fillStyle = theme.wall;
    ctx.fillRect(0, 0, w, h);
    ectx.fillStyle = '#000';
    ectx.fillRect(0, 0, w, h);

    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, 'rgba(255,255,255,0.035)');
    gradient.addColorStop(0.5, 'rgba(0,0,0,0.12)');
    gradient.addColorStop(1, 'rgba(255,255,255,0.02)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    const cols = 7;
    const rows = 10;
    const cw = w / cols;
    const ch = h / rows;
    const marginX = 7;
    const marginY = 6;
    const glassColors = ['#08121d', '#0d1821', '#15101f', '#0a1418'];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const x = col * cw + marginX;
        const y = row * ch + marginY;
        const ww = cw - marginX * 2;
        const wh = ch - marginY * 2;
        ctx.fillStyle = theme.glass;
        ctx.fillRect(x, y, ww, wh);
        ctx.fillStyle = `rgba(${glassColors[(row + col) % glassColors.length].slice(1).match(/../g).map((v) => parseInt(v, 16)).join(',')},0.55)`;
        ctx.fillRect(x, y, ww, wh);

        // Glass reflection sliver
        ctx.fillStyle = 'rgba(150,195,255,0.08)';
        ctx.beginPath();
        ctx.moveTo(x, y + wh * 0.6);
        ctx.lineTo(x + ww, y + wh * 0.05);
        ctx.lineTo(x + ww, y + wh * 0.2);
        ctx.lineTo(x, y + wh * 0.8);
        ctx.closePath();
        ctx.fill();

        // Frame
        ctx.strokeStyle = 'rgba(3,5,8,0.8)';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, ww, wh);
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.fillRect(x, y, ww, 2);

        if (rng() < theme.density) {
          const color = theme.lit[Math.floor(rng() * theme.lit.length)];
          ectx.fillStyle = color;
          ectx.globalAlpha = 0.35 + rng() * 0.65;
          ectx.fillRect(x + 1, y + 1, ww - 2, wh - 2);
          ectx.globalAlpha = 1;
          // Blinds / silhouettes
          if (rng() < 0.35) {
            ectx.fillStyle = 'rgba(0,0,0,0.45)';
            ectx.fillRect(x + 1, y + wh * (0.3 + rng() * 0.3), ww - 2, wh * 0.18);
          }
        }
      }
    }

    // Vertical structural mullions.
    ctx.fillStyle = 'rgba(2,3,5,0.5)';
    for (let col = 0; col <= cols; col += 1) ctx.fillRect(col * cw - 2, 0, 4, h);
    ctx.fillStyle = `rgba(255,255,255,0.03)`;
    ctx.fillRect(0, 0, w, 4);
    noise(ctx, w, h, 9, rng, 0.95);

    const map = finishTexture(albedo);
    const emissiveMap = finishTexture(emissive);
    map.anisotropy = anisotropy;
    emissiveMap.anisotropy = anisotropy;
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    emissiveMap.wrapS = emissiveMap.wrapT = THREE.RepeatWrapping;
    return { map, emissiveMap, tint: new THREE.Color(theme.tint) };
  });
}

const SIGN_WORDS = [
  'NOVA', 'KAIDO', 'SYNTH', 'NEON', 'ZERO', 'RAMEN', 'GRID', 'VOID',
  'AETHER', 'NIGHT', 'HALO', 'DRIVE', 'PULSE', 'ECHO', 'LUX', 'ARCO',
  'ONI', 'VANTA', 'NEXUS', 'KITSUNE', 'QUANTUM', 'HELIX', 'ORBIT', 'CHROME',
];
const SIGN_COLORS = ['#52f6ff', '#ff3d9c', '#b268ff', '#ffb44d', '#74ffb0', '#4d8bff'];

export function createSignTexture(index = 0, word = null, color = null, vertical = false) {
  const rng = makeRng(777 + index * 43);
  const text = word || SIGN_WORDS[index % SIGN_WORDS.length];
  const neon = color || SIGN_COLORS[index % SIGN_COLORS.length];
  const w = vertical ? 192 : 640;
  const h = vertical ? 640 : 192;
  const c = createCanvas(w, h);
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);

  if (!vertical) {
    ctx.fillStyle = 'rgba(4,5,10,0.86)';
    ctx.fillRect(10, 10, w - 20, h - 20);
    ctx.strokeStyle = neon;
    ctx.lineWidth = 5;
    ctx.shadowColor = neon;
    ctx.shadowBlur = 18;
    ctx.strokeRect(14, 14, w - 28, h - 28);
    ctx.shadowBlur = 35;
    ctx.font = '700 96px "Arial Black", Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, w / 2, h / 2 + 4);
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = neon;
    ctx.fillText(text, w / 2, h / 2 + 4);
    ctx.globalAlpha = 1;
    ctx.font = '600 22px "Arial", sans-serif';
    ctx.fillStyle = neon;
    ctx.shadowBlur = 10;
    ctx.fillText('N E O N   D I S T R I C T', w / 2, h - 36);
  } else {
    ctx.fillStyle = 'rgba(4,5,10,0.9)';
    ctx.fillRect(8, 8, w - 16, h - 16);
    ctx.strokeStyle = neon;
    ctx.lineWidth = 5;
    ctx.shadowColor = neon;
    ctx.shadowBlur = 20;
    ctx.strokeRect(14, 14, w - 28, h - 28);
    ctx.shadowBlur = 28;
    ctx.font = '700 92px "Arial Black", Impact, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const letters = text.split('');
    letters.forEach((ch, i) => {
      ctx.fillStyle = i % 2 ? neon : '#ffffff';
      ctx.fillText(ch, w / 2, 105 + i * 100);
    });
    ctx.font = '22px "Arial", sans-serif';
    ctx.fillStyle = neon;
    ctx.fillText('24H', w / 2, h - 48);
  }
  // Subtle scanlines.
  ctx.globalCompositeOperation = 'source-atop';
  ctx.fillStyle = 'rgba(0,0,0,0.12)';
  for (let y = 0; y < h; y += 5) ctx.fillRect(0, y, w, 2);
  ctx.globalCompositeOperation = 'source-over';
  const tex = canvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

export function createBillboardTexture(index = 0) {
  const rng = makeRng(3301 + index * 91);
  const w = 512;
  const h = 256;
  const c = createCanvas(w, h);
  const ctx = c.getContext('2d');
  const palettes = [
    ['#ff2b83', '#4310a8', '#ffd1e8'],
    ['#11e4ff', '#053c78', '#d5fdff'],
    ['#ffb300', '#741b00', '#fff0c2'],
    ['#b670ff', '#14054a', '#f1e3ff'],
  ];
  const p = palettes[index % palettes.length];
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, p[1]);
  g.addColorStop(1, p[0]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  // Abstract city / product graphic.
  for (let i = 0; i < 18; i += 1) {
    const bw = 10 + rng() * 55;
    const bh = 20 + rng() * 160;
    ctx.fillStyle = `rgba(5,3,12,${0.15 + rng() * 0.35})`;
    ctx.fillRect(rng() * w, h - bh, bw, bh);
    ctx.fillStyle = `rgba(255,255,255,${0.05 + rng() * 0.2})`;
    for (let y = h - bh + 6; y < h; y += 9) {
      for (let x = 4; x < bw; x += 8) {
        if (rng() < 0.3) ctx.fillRect(rng() * w, y, 2, 2);
      }
    }
  }
  ctx.globalAlpha = 0.4;
  for (let i = 0; i < 7; i += 1) {
    ctx.strokeStyle = p[2];
    ctx.lineWidth = 1 + rng() * 4;
    ctx.beginPath();
    ctx.arc(w * 0.72, h * 0.4, 20 + i * 22, 0, TAU);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'rgba(4,3,12,0.7)';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = p[0];
  ctx.lineWidth = 3;
  ctx.strokeRect(6, 6, w - 12, h - 12);
  ctx.font = '900 56px "Arial Black", Impact, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'left';
  ctx.shadowColor = p[0];
  ctx.shadowBlur = 16;
  const lines = [
    ['WAKE', 'THE CITY'],
    ['RIDE', 'THE VOID'],
    ['NO', 'LIMITS'],
    ['SYNC', 'YOUR SOUL'],
  ][index % 4];
  ctx.fillText(lines[0], 34, 108);
  ctx.fillStyle = p[2];
  ctx.fillText(lines[1], 34, 164);
  ctx.font = '600 18px "Arial", sans-serif';
  ctx.fillStyle = p[0];
  ctx.fillText('NIGHTFALL INDUSTRIES // EST. 2086', 36, 210);
  const tex = canvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

export function createGlowSpriteTexture(color = '#ffffff') {
  const size = 128;
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, color);
  g.addColorStop(0.12, color);
  g.addColorStop(0.4, `${color}55`);
  g.addColorStop(1, `${color}00`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvasTexture(c);
}

export function createNoiseTexture(size = 256) {
  const rng = makeRng(1201);
  const c = createCanvas(size);
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 120 + rng() * 80;
    img.data[i] = v;
    img.data[i + 1] = v;
    img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = canvasTexture(c, true);
  tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

export function createEnvironmentTexture() {
  const w = 1024;
  const h = 512;
  const c = createCanvas(w, h);
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#02030a');
  g.addColorStop(0.42, '#090c1c');
  g.addColorStop(0.52, '#1c1233');
  g.addColorStop(0.58, '#2b1a48');
  g.addColorStop(0.65, '#0b0a14');
  g.addColorStop(1, '#030409');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  const colors = ['#ff2f9a', '#35f4ff', '#8b5cff', '#ffb443', '#4b7dff'];
  for (let i = 0; i < 140; i += 1) {
    const x = Math.random() * w;
    const y = h * 0.5 + Math.random() * 70;
    const width = 2 + Math.random() * 10;
    const height = 10 + Math.random() * 120;
    ctx.globalAlpha = 0.15 + Math.random() * 0.7;
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillRect(x, y - height, width, height);
  }
  // Horizontal neon haze.
  ctx.globalAlpha = 1;
  for (let i = 0; i < 18; i += 1) {
    const y = h * 0.51 + i * 3;
    ctx.fillStyle = `rgba(${80 + Math.random() * 140},${80 + Math.random() * 120},255,${0.025 + Math.random() * 0.05})`;
    ctx.fillRect(0, y, w, 2);
  }
  const tex = canvasTexture(c, true);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  return tex;
}
