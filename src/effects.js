import * as THREE from 'three';
import { createGlowSpriteTexture } from './textures.js';
import { TAU } from './utils.js';

const MAX_PARTICLES = 900;

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.particleCursor = 0;
    this.particlePositions = new Float32Array(MAX_PARTICLES * 3);
    this.particleColors = new Float32Array(MAX_PARTICLES * 3);
    this.particleSizes = new Float32Array(MAX_PARTICLES);
    this.particleAlphas = new Float32Array(MAX_PARTICLES);
    this.tmpColor = new THREE.Color();

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.particleColors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.particleSizes, 1));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.particleAlphas, 1));
    this.particleGeo = geo;
    this.particleTex = createGlowSpriteTexture('#ffffff');
    this.particleMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uMap: { value: this.particleTex },
        uScale: { value: 700 },
      },
      vertexShader: `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 0.0, 96.0);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a * vAlpha);
        }
      `,
    });
    this.particlePoints = new THREE.Points(geo, this.particleMat);
    this.particlePoints.frustumCulled = false;
    this.particlePoints.renderOrder = 4;
    scene.add(this.particlePoints);
    for (let i = 0; i < MAX_PARTICLES; i += 1) {
      this.particles.push({
        alive: false, x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0,
        life: 0, maxLife: 1, size: 1, drag: 0, gravity: 0, endSize: 0,
        r: 1, g: 1, b: 1,
      });
      this.particleAlphas[i] = 0;
    }
    this.particleGeo.attributes.position.needsUpdate = true;
    this.particleGeo.attributes.aColor.needsUpdate = true;
    this.particleGeo.attributes.aSize.needsUpdate = true;
    this.particleGeo.attributes.aAlpha.needsUpdate = true;

    this.tracerCount = 20;
    this.tracers = [];
    this.tracerPositions = new Float32Array(this.tracerCount * 6);
    this.tracerColors = new Float32Array(this.tracerCount * 6);
    const tgeo = new THREE.BufferGeometry();
    tgeo.setAttribute('position', new THREE.BufferAttribute(this.tracerPositions, 3));
    tgeo.setAttribute('color', new THREE.BufferAttribute(this.tracerColors, 3));
    this.tracerGeo = tgeo;
    this.tracerLines = new THREE.LineSegments(
      tgeo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    this.tracerLines.frustumCulled = false;
    this.tracerLines.renderOrder = 4;
    scene.add(this.tracerLines);
    for (let i = 0; i < this.tracerCount; i += 1) {
      this.tracers.push({ life: 0, maxLife: 0.1, r: 1, g: 1, b: 1 });
    }

    this.shockwaves = [];
    this.flashes = [];
    this.time = 0;
  }

  setViewport(height, fov = 62) {
    this.particleMat.uniforms.uScale.value = height / (2 * Math.tan((fov * Math.PI) / 360));
  }

  spawn(opts) {
    const p = this.particles[this.particleCursor];
    this.particleCursor = (this.particleCursor + 1) % MAX_PARTICLES;
    const spread = opts.spread ?? 0;
    const angle = Math.random() * TAU;
    const radius = Math.random() * spread;
    p.alive = true;
    p.x = opts.x + Math.cos(angle) * radius;
    p.y = opts.y + (Math.random() - 0.5) * (opts.spreadY ?? 0);
    p.z = opts.z + Math.sin(angle) * radius;
    p.vx = (opts.vx ?? 0) + (Math.random() - 0.5) * (opts.vel ?? 0);
    p.vy = (opts.vy ?? 0) + (Math.random() - 0.3) * (opts.vel ?? 0);
    p.vz = (opts.vz ?? 0) + (Math.random() - 0.5) * (opts.vel ?? 0);
    p.life = opts.life ?? 0.6;
    p.maxLife = p.life;
    p.size = opts.size ?? 0.5;
    p.endSize = opts.endSize ?? p.size * 0.2;
    p.gravity = opts.gravity ?? 0;
    p.drag = opts.drag ?? 0.96;
    this.tmpColor.set(opts.color ?? 0xffffff);
    p.r = this.tmpColor.r;
    p.g = this.tmpColor.g;
    p.b = this.tmpColor.b;
    return p;
  }

  muzzleFlash(position, color = 0xffe3a3, direction = null) {
    for (let i = 0; i < 5; i += 1) {
      this.spawn({
        x: position.x,
        y: position.y,
        z: position.z,
        vx: direction ? direction.x * 2.5 : 0,
        vy: direction ? direction.y * 2.5 + 0.2 : 0.4,
        vz: direction ? direction.z * 2.5 : 0,
        vel: 1.4,
        life: 0.09 + Math.random() * 0.06,
        size: 0.45 + Math.random() * 0.25,
        endSize: 0.1,
        color,
        drag: 0.8,
      });
    }
    this.spawn({
      x: position.x, y: position.y, z: position.z,
      life: 0.08, size: 1.15, endSize: 0.2, color,
    });
  }

  bulletImpact(position, normal, color = 0x9feaff) {
    const n = normal || new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < 8; i += 1) {
      this.spawn({
        x: position.x,
        y: position.y,
        z: position.z,
        vx: n.x * 2.2 + (Math.random() - 0.5) * 4,
        vy: n.y * 2.2 + Math.random() * 3.4,
        vz: n.z * 2.2 + (Math.random() - 0.5) * 4,
        life: 0.2 + Math.random() * 0.32,
        size: 0.18 + Math.random() * 0.2,
        endSize: 0,
        color,
        gravity: 9,
        drag: 0.95,
      });
    }
    this.spawn({
      x: position.x, y: position.y, z: position.z,
      life: 0.1, size: 0.7, endSize: 0.1, color,
    });
  }

  enemyHit(position, color = 0xff6a55) {
    for (let i = 0; i < 10; i += 1) {
      this.spawn({
        x: position.x, y: position.y, z: position.z,
        vel: 5,
        life: 0.22 + Math.random() * 0.3,
        size: 0.14 + Math.random() * 0.2,
        endSize: 0,
        color,
        gravity: 5,
      });
    }
  }

  explosion(position, color = 0xff5a3d, scale = 1) {
    for (let i = 0; i < 46; i += 1) {
      this.spawn({
        x: position.x, y: position.y, z: position.z,
        vel: 9 * scale,
        vy: 4,
        life: 0.5 + Math.random() * 0.7,
        size: 0.6 + Math.random() * 1.4,
        endSize: 0.1,
        color: i % 3 === 0 ? 0xffe0a0 : color,
        gravity: 5,
        drag: 0.94,
      });
    }
    for (let i = 0; i < 12; i += 1) {
      this.spawn({
        x: position.x, y: position.y, z: position.z,
        vel: 3,
        vy: 2,
        life: 1 + Math.random() * 0.8,
        size: 1.5 + Math.random() * 2,
        endSize: 4,
        color: 0x191b26,
        gravity: -0.3,
        drag: 0.97,
      });
    }
    this.spawnShockwave(position, color, 3 * scale, 0.6);
    this.flash(position, color, 18 * scale, 0.22);
  }

  pickup(position, color = 0x4ff5ff) {
    for (let i = 0; i < 36; i += 1) {
      const a = Math.random() * TAU;
      const r = 0.5 + Math.random() * 1.4;
      this.spawn({
        x: position.x + Math.cos(a) * r,
        y: position.y - 1 + Math.random() * 2,
        z: position.z + Math.sin(a) * r,
        vx: Math.cos(a) * 5,
        vy: 1 + Math.random() * 5,
        vz: Math.sin(a) * 5,
        life: 0.5 + Math.random() * 0.7,
        size: 0.2 + Math.random() * 0.35,
        endSize: 0,
        color: i % 4 === 0 ? 0xffffff : color,
        gravity: 2,
        drag: 0.94,
      });
    }
    this.spawnShockwave(new THREE.Vector3(position.x, 0.25, position.z), color, 6, 0.8);
    this.flash(new THREE.Vector3(position.x, position.y, position.z), color, 16, 0.35);
  }

  exitCar(pos) {
    for (let i = 0; i < 10; i += 1) {
      this.spawn({
        x: pos.x, y: 0.2, z: pos.z, vel: 1.4,
        life: 0.3, size: 0.3, endSize: 0, color: 0x6e627a,
      });
    }
  }

  drift(pos, intensity = 1) {
    this.spawn({
      x: pos.x,
      y: 0.22 + Math.random() * 0.2,
      z: pos.z,
      vx: (Math.random() - 0.5) * 1.6,
      vy: 0.25 + Math.random() * 0.45,
      vz: (Math.random() - 0.5) * 1.6,
      vel: 0.8,
      life: 0.5 + Math.random() * 0.6,
      size: (0.7 + Math.random() * 0.7) * intensity,
      endSize: 1.8 * intensity,
      color: 0x9097a8,
      drag: 0.94,
      gravity: -0.2,
    });
  }

  boostTrail(pos, color = 0x35e6ff) {
    this.spawn({
      x: pos.x + (Math.random() - 0.5) * 0.35,
      y: pos.y,
      z: pos.z,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.7,
      life: 0.2 + Math.random() * 0.2,
      size: 0.5 + Math.random() * 0.35,
      endSize: 0.05,
      color,
      drag: 0.9,
    });
  }

  // Kick-up behind a sprinting operator. Wet streets throw a bright spray,
  // snow lifts a soft puff, and dry weather leaves a low dust trail.
  runSpray(x, z, dirX, dirZ, weather = 'rain') {
    const wet = weather === 'rain' || weather === 'storm';
    const snow = weather === 'snow';
    const color = wet ? 0x9feaff : snow ? 0xe8f2ff : 0x7d8799;
    const count = wet ? 6 : 5;
    for (let i = 0; i < count; i += 1) {
      const back = 1.1 + Math.random() * (wet ? 2.2 : 1.4);
      const side = (Math.random() - 0.5) * (wet ? 1.6 : 1);
      this.spawn({
        x: x + (Math.random() - 0.5) * 0.22,
        y: 0.06 + Math.random() * 0.08,
        z: z + (Math.random() - 0.5) * 0.22,
        vx: -dirX * back - dirZ * side,
        vy: wet ? 0.9 + Math.random() * 1.2 : snow ? 0.5 + Math.random() * 0.7 : 0.25 + Math.random() * 0.4,
        vz: -dirZ * back + dirX * side,
        life: wet ? 0.3 + Math.random() * 0.2 : 0.42 + Math.random() * 0.25,
        size: wet ? 0.1 + Math.random() * 0.08 : 0.18 + Math.random() * 0.14,
        endSize: wet ? 0.3 : 0.55,
        color,
        drag: 0.94,
        gravity: wet ? 7 : snow ? 1.6 : 0.4,
      });
    }
  }

  sparkle(pos, color = 0x9ef7ff) {
    this.spawn({
      x: pos.x + (Math.random() - 0.5) * 1.5,
      y: pos.y + (Math.random() - 0.5) * 1.5,
      z: pos.z + (Math.random() - 0.5) * 1.5,
      vy: 0.3,
      life: 0.8 + Math.random() * 0.5,
      size: 0.16 + Math.random() * 0.1,
      endSize: 0,
      color,
      gravity: 0.2,
    });
  }

  tracer(start, end, color = 0xa8f2ff) {
    const available = this.tracers.find((t) => t.life <= 0);
    const idx = this.tracers.indexOf(available);
    const i = idx >= 0 ? idx : 0;
    const t = this.tracers[i];
    t.life = 0.08;
    t.maxLife = 0.08;
    this.tmpColor.set(color);
    t.r = this.tmpColor.r;
    t.g = this.tmpColor.g;
    t.b = this.tmpColor.b;
    const p = this.tracerPositions;
    p[i * 6] = start.x;
    p[i * 6 + 1] = start.y;
    p[i * 6 + 2] = start.z;
    p[i * 6 + 3] = end.x;
    p[i * 6 + 4] = end.y;
    p[i * 6 + 5] = end.z;
  }

  spawnShockwave(position, color, radius = 3, life = 0.6) {
    const mesh = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.75, 48),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(position);
    mesh.position.y = Math.max(0.3, position.y);
    this.scene.add(mesh);
    this.shockwaves.push({ mesh, life, maxLife: life, radius });
  }

  flash(position, color, size = 12, life = 0.25) {
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: this.particleTex,
        color,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    );
    sprite.position.copy(position);
    sprite.scale.set(size, size, 1);
    this.scene.add(sprite);
    this.flashes.push({ sprite, life, maxLife: life });
  }

  update(dt) {
    for (let i = 0; i < MAX_PARTICLES; i += 1) {
      const p = this.particles[i];
      if (!p.alive) {
        this.particleAlphas[i] = 0;
        continue;
      }
      p.life -= dt;
      if (p.life <= 0) {
        p.alive = false;
        this.particleAlphas[i] = 0;
        continue;
      }
      p.vx *= p.drag;
      p.vy = p.vy * p.drag - p.gravity * dt;
      p.vz *= p.drag;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
      if (p.y < 0.05) {
        p.y = 0.05;
        p.vy *= -0.3;
        p.vx *= 0.7;
        p.vz *= 0.7;
      }
      const t = 1 - p.life / p.maxLife;
      const size = p.size + (p.endSize - p.size) * t;
      const alpha = Math.sin(Math.min(1, t) * Math.PI) * 0.9;
      this.particlePositions[i * 3] = p.x;
      this.particlePositions[i * 3 + 1] = p.y;
      this.particlePositions[i * 3 + 2] = p.z;
      this.particleColors[i * 3] = p.r;
      this.particleColors[i * 3 + 1] = p.g;
      this.particleColors[i * 3 + 2] = p.b;
      this.particleSizes[i] = size;
      this.particleAlphas[i] = alpha;
    }
    this.particleGeo.attributes.position.needsUpdate = true;
    this.particleGeo.attributes.aColor.needsUpdate = true;
    this.particleGeo.attributes.aSize.needsUpdate = true;
    this.particleGeo.attributes.aAlpha.needsUpdate = true;

    for (let i = 0; i < this.tracerCount; i += 1) {
      const t = this.tracers[i];
      if (t.life > 0) t.life -= dt;
      const fade = Math.max(0, t.life / Math.max(0.001, t.maxLife));
      const idx = i * 6;
      this.tracerColors[idx] = t.r * fade;
      this.tracerColors[idx + 1] = t.g * fade;
      this.tracerColors[idx + 2] = t.b * fade;
      this.tracerColors[idx + 3] = t.r * fade;
      this.tracerColors[idx + 4] = t.g * fade;
      this.tracerColors[idx + 5] = t.b * fade;
    }
    this.tracerGeo.attributes.position.needsUpdate = true;
    this.tracerGeo.attributes.color.needsUpdate = true;

    for (let i = this.shockwaves.length - 1; i >= 0; i -= 1) {
      const s = this.shockwaves[i];
      s.life -= dt;
      const t = 1 - s.life / s.maxLife;
      const scale = 1 + t * s.radius;
      s.mesh.scale.set(scale, scale, 1);
      s.mesh.material.opacity = (1 - t) * 0.7;
      if (s.life <= 0) {
        this.scene.remove(s.mesh);
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
        this.shockwaves.splice(i, 1);
      }
    }
    for (let i = this.flashes.length - 1; i >= 0; i -= 1) {
      const f = this.flashes[i];
      f.life -= dt;
      f.sprite.material.opacity = Math.max(0, f.life / f.maxLife) * 0.9;
      if (f.life <= 0) {
        this.scene.remove(f.sprite);
        f.sprite.material.dispose();
        this.flashes.splice(i, 1);
      }
    }
  }
}
