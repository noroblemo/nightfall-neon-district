import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { UI } from './hud.js';
import { createWorld } from './world.js';
import { Effects } from './effects.js';
import { AudioEngine } from './audio.js';
import { setOperatorAsset, setOperatorAssets, setBikeAsset } from './models.js';
import { NightfallGame } from './game.js';

const QUALITY = {
  performance: { cap: 0.85, bloom: 0.28, bloomRadius: 0.35, worldQuality: 0.72, low: true, samples: 0 },
  balanced: { cap: 1.0, bloom: 0.48, bloomRadius: 0.45, worldQuality: 1, low: false, samples: 0 },
  cinematic: { cap: 1.5, bloom: 0.68, bloomRadius: 0.6, worldQuality: 1, low: false, samples: 4 },
};

const MIN_DYNAMIC_SCALE = 0.55;
const QUALITY_KEY = 'nightfall:quality';
// Bump this when any GLB changes so CDNs and GitHub Pages pick up the new
// assets instead of a previously cached build.
const ASSET_VERSION = '?v=20261124a';
const OPERATOR_MALE_URL = `./assets/operator_male.glb${ASSET_VERSION}`;
const OPERATOR_FEMALE_URL = `./assets/operator_female.glb${ASSET_VERSION}`;
const OPERATOR_LEGACY_URL = `./assets/operator.glb${ASSET_VERSION}`;
const BIKE_ASSET_URL = `./assets/bike.glb${ASSET_VERSION}`;
const canvas = document.getElementById('gameCanvas');
const ui = new UI();
ui.setLoading(0.04, 'INITIALIZING THE DISTRICT');

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function readQuality() {
  try {
    const stored = localStorage.getItem(QUALITY_KEY);
    if (stored && QUALITY[stored]) return stored;
  } catch {
    // ignore
  }
  return 'balanced';
}

async function boot() {
  if (!window.WebGL2RenderingContext) {
    ui.setLoading(0.15, 'WEBGL 2 IS REQUIRED');
    ui.showLanding();
    ui.showStartError('This browser does not expose WebGL 2. Use a current Chrome, Edge, Firefox or Safari build.');
    return;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });
  } catch (err) {
    console.error(err);
    ui.setLoading(0.15, 'RENDERER UNAVAILABLE');
    ui.showLanding();
    ui.showStartError('WebGL could not start. Close other 3D tabs, update your graphics driver, then reload.');
    return;
  }

  renderer.setClearColor(0x03050b, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = false;
  renderer.info.autoReset = true;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.12, 760);
  camera.position.set(0, 26, -68);

  ui.setLoading(0.2, 'ASSEMBLING THE NEON GRID');
  await nextFrame();
  await nextFrame();

  const world = createWorld(scene, renderer);
  ui.setLoading(0.62, 'RAISING THE SKYLINE');
  await nextFrame();

  const effects = new Effects(scene);
  const audio = new AudioEngine();
  ui.setLoading(0.72, 'CHARGING THE RAIN');

  const initialQuality = readQuality();
  let qualityName = initialQuality;
  let quality = QUALITY[initialQuality];
  let dynamicScale = 1;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.cap));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  const initialSize = renderer.getDrawingBufferSize(new THREE.Vector2());
  const renderTarget = new THREE.WebGLRenderTarget(initialSize.x, initialSize.y, {
    type: THREE.HalfFloatType,
    samples: quality.samples,
  });
  renderTarget.texture.name = 'nightfall.hdr';
  const composer = new EffectComposer(renderer, renderTarget);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    quality.bloom,
    quality.bloomRadius,
    0.74,
  );
  // Bloom dominates postprocessing cost at high DPR. Run its blur chain at a
  // lower internal resolution; the additive result is upsampled by the output
  // pass and is visually nearly identical for neon glows.
  const bloomSetSize = bloomPass.setSize.bind(bloomPass);
  bloomPass.setSize = (width, height) => {
    bloomSetSize(Math.max(2, Math.round(width * 0.65)), Math.max(2, Math.round(height * 0.65)));
  };
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);
  composer.setSize(window.innerWidth, window.innerHeight);
  effects.setViewport(renderer.domElement.height, camera.fov);

  function applyDpr() {
    const dpr = Math.min(window.devicePixelRatio || 1, quality.cap) * dynamicScale;
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    composer.setPixelRatio(dpr);
    composer.setSize(window.innerWidth, window.innerHeight);
    effects.setViewport(renderer.domElement.height, camera.fov);
  }

  function applyQuality(name) {
    qualityName = QUALITY[name] ? name : 'balanced';
    quality = QUALITY[qualityName];
    dynamicScale = 1;
    world.quality = quality.worldQuality;
    world.low = quality.low;
    bloomPass.strength = quality.bloom;
    bloomPass.radius = quality.bloomRadius;
    applyDpr();
  }
  applyQuality(initialQuality);

  ui.setLoading(0.8, 'DEPLOYING THE OPERATORS');
  await nextFrame();
  const assetLoader = new GLTFLoader();
  // Each asset is independent: a missing variant or bike only removes that
  // option, it never takes the procedural gameplay down with it.
  const loadAsset = async (url, label) => {
    try {
      return await assetLoader.loadAsync(url);
    } catch (error) {
      console.warn(`[nightfall] ${label} asset unavailable, using fallback:`, error);
      return null;
    }
  };
  const [maleAsset, femaleAsset, bikeAsset] = await Promise.all([
    loadAsset(OPERATOR_MALE_URL, 'male operator'),
    loadAsset(OPERATOR_FEMALE_URL, 'female operator'),
    loadAsset(BIKE_ASSET_URL, 'light bike'),
  ]);
  const legacyAsset = maleAsset ? null : await loadAsset(OPERATOR_LEGACY_URL, 'operator');
  const male = maleAsset || legacyAsset;
  setOperatorAssets({ male, female: femaleAsset || male });
  // Keep the historic single-asset hook valid for older callers.
  setOperatorAsset(male);
  setBikeAsset(bikeAsset);

  ui.setLoading(0.84, 'BINDING THE RESPONSE GRID');
  await nextFrame();

  const game = new NightfallGame({
    scene,
    camera,
    renderer,
    world,
    ui,
    effects,
    audio,
    setQuality: applyQuality,
  });

  ui.setLoading(0.92, 'SYNCING THE NETWORK');
  await game.init();

  let lastTime = performance.now();
  let fpsAccumulator = 0;
  let fpsFrames = 0;
  let smoothedFps = 60;
  let adaptTimer = 0;
  let fastTime = 0;
  let slowWindows = 0;

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality.cap) * dynamicScale);
    renderer.setSize(width, height, false);
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(width, height);
    effects.setViewport(renderer.domElement.height, camera.fov);
    ui.initMinimap(world);
  }

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) lastTime = performance.now();
  });

  function frame(now) {
    requestAnimationFrame(frame);
    const rawDt = (now - lastTime) / 1000;
    lastTime = now;
    const dt = Math.min(Math.max(rawDt, 0), 0.05);
    // Ignore tab-switch/stall gaps so they cannot skew FPS or trigger a
    // resolution drop when the page becomes visible again.
    if (rawDt > 0 && rawDt < 0.25) {
      fpsAccumulator += rawDt;
      fpsFrames += 1;
    }
    if (fpsAccumulator >= 0.5) {
      smoothedFps = fpsFrames / fpsAccumulator;
      fpsAccumulator = 0;
      fpsFrames = 0;
    }

    game.update(dt, now / 1000, smoothedFps);
    const focus = game.localCar
      ? { x: game.localCar.x, z: game.localCar.z }
      : game.player
        ? { x: game.player.pos.x, z: game.player.pos.z }
        : { x: 0, z: 0 };
    world.update(dt, now / 1000, focus, camera.position);
    effects.update(dt);
    composer.render(dt);

    // Adaptive resolution with hysteresis: react to sustained slow windows,
    // recover slowly, and never oscillate on a single stutter.
    if (rawDt < 0.25) adaptTimer += rawDt;
    if (game.status === 'playing' || game.status === 'dead') {
      if (adaptTimer > 1.2) {
        adaptTimer = 0;
        if (smoothedFps < 50) {
          slowWindows += 1;
          fastTime = 0;
          if (slowWindows >= 2 && dynamicScale > MIN_DYNAMIC_SCALE) {
            dynamicScale = Math.max(MIN_DYNAMIC_SCALE, dynamicScale - 0.07);
            applyDpr();
            slowWindows = 0;
          }
        } else if (smoothedFps > 58) {
          slowWindows = 0;
          fastTime += 1.2;
          if (fastTime >= 6 && dynamicScale < 1) {
            dynamicScale = Math.min(1, dynamicScale + 0.05);
            applyDpr();
            fastTime = 0;
          }
        } else {
          slowWindows = 0;
          fastTime = 0;
        }
      }
    } else {
      slowWindows = 0;
      fastTime = 0;
    }
  }

  // Expose a tiny diagnostic handle for browser testing / tuning.
  window.__nightfall = { game, world, scene, camera, renderer, composer, effects, applyQuality };
  requestAnimationFrame(frame);
}

boot().catch((err) => {
  console.error('Nightfall boot failed', err);
  ui.setLoading(0.3, 'BOOT FAILURE');
  ui.showLanding();
  ui.showStartError(`Boot failure: ${err?.message || 'unknown error'}. Reload the page and try again.`);
});
