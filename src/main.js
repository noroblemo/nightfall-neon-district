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
  performance: { cap: 0.7, bloom: 0.24, bloomRadius: 0.32, bloomScale: 0.45, worldQuality: 0.5, low: true, samples: 0 },
  balanced: { cap: 0.85, bloom: 0.38, bloomRadius: 0.4, bloomScale: 0.5, worldQuality: 0.72, low: true, samples: 0 },
  cinematic: { cap: 1.25, bloom: 0.62, bloomRadius: 0.55, bloomScale: 0.65, worldQuality: 1, low: false, samples: 2 },
};

const MIN_DYNAMIC_SCALE = 0.5;
// Target a 60 Hz frame budget (~16.67 ms). Stay in a narrow dead band around
// vsync so a steady 55 FPS cannot be mistaken for "good enough".
const SLOW_FRAME_MS = 17.4;
const FAST_FRAME_MS = 16.9;
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

function failBoot(message, progress = 1) {
  ui.setLoading(progress, 'BOOT FAILURE');
  ui.finishLoading();
  ui.showLanding();
  ui.showStartError(message);
}

async function boot() {
  if (!window.WebGL2RenderingContext) {
    failBoot('This browser does not expose WebGL 2. Use a current Chrome, Edge, Firefox or Safari build.', 0.15);
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
    failBoot('WebGL could not start. Close other 3D tabs, update your graphics driver, then reload.', 0.15);
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
  let bloomScale = quality.bloomScale;

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
    bloomSetSize(
      Math.max(2, Math.round(width * bloomScale)),
      Math.max(2, Math.round(height * bloomScale)),
    );
  };
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);
  composer.setSize(window.innerWidth, window.innerHeight);
  effects.setViewport(renderer.domElement.height, camera.fov);

  let appliedWidth = window.innerWidth;
  let appliedHeight = window.innerHeight;
  let appliedDpr = renderer.getPixelRatio();

  function applyDpr() {
    const dpr = Math.min(window.devicePixelRatio || 1, quality.cap) * dynamicScale;
    // setPixelRatio reallocates the drawing buffer and composer targets, so
    // only apply it when the adaptive controller actually changed the scale.
    if (dpr !== appliedDpr) {
      appliedDpr = dpr;
      renderer.setPixelRatio(dpr);
      composer.setPixelRatio(dpr);
    }
    if (appliedWidth !== window.innerWidth || appliedHeight !== window.innerHeight) {
      appliedWidth = window.innerWidth;
      appliedHeight = window.innerHeight;
      renderer.setSize(appliedWidth, appliedHeight, false);
      composer.setSize(appliedWidth, appliedHeight);
    }
    effects.setViewport(renderer.domElement.height, camera.fov);
  }

  function applyQuality(name) {
    qualityName = QUALITY[name] ? name : 'balanced';
    quality = QUALITY[qualityName];
    dynamicScale = 1;
    bloomScale = quality.bloomScale;
    world.quality = quality.worldQuality;
    world.low = quality.low;
    bloomPass.strength = quality.bloom;
    bloomPass.radius = quality.bloomRadius;
    // MSAA is fixed at construction in three.js; dispose both buffers so the
    // renderer reallocates them with the selected preset's sample count.
    if (composer.renderTarget1.samples !== quality.samples) {
      composer.renderTarget1.samples = quality.samples;
      composer.renderTarget1.dispose();
    }
    if (composer.renderTarget2.samples !== quality.samples) {
      composer.renderTarget2.samples = quality.samples;
      composer.renderTarget2.dispose();
    }
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
  let smoothedFrameMs = 1000 / 60;
  let slowFrameMs = 0;
  let fastFrameMs = 0;

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    applyDpr();
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
    let sampleMs = 0;
    if (rawDt > 0 && rawDt < 0.25) {
      sampleMs = rawDt * 1000;
      fpsAccumulator += sampleMs;
      fpsFrames += 1;
    }
    if (fpsAccumulator >= 400) {
      smoothedFrameMs = fpsAccumulator / fpsFrames;
      smoothedFps = 1000 / smoothedFrameMs;
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

    // Frame-time controller: react to sustained frames over the 60 Hz budget,
    // then recover as soon as frames are consistently back near vsync. A small
    // dead band prevents oscillation from normal frame pacing jitter.
    if (game.status === 'playing' || game.status === 'dead') {
      if (sampleMs > 0 && smoothedFrameMs > SLOW_FRAME_MS) {
        fastFrameMs = 0;
        slowFrameMs += sampleMs;
        if (slowFrameMs >= 400 && dynamicScale > MIN_DYNAMIC_SCALE) {
          dynamicScale = Math.max(MIN_DYNAMIC_SCALE, dynamicScale - 0.05);
          applyDpr();
          slowFrameMs = 0;
        }
      } else if (sampleMs > 0 && smoothedFrameMs < FAST_FRAME_MS) {
        slowFrameMs = 0;
        fastFrameMs += sampleMs;
        if (fastFrameMs >= 1600 && dynamicScale < 1) {
          dynamicScale = Math.min(1, dynamicScale + 0.04);
          applyDpr();
          fastFrameMs = 0;
        }
      } else {
        slowFrameMs = 0;
        fastFrameMs = 0;
      }
    } else {
      slowFrameMs = 0;
      fastFrameMs = 0;
    }
  }

  // Expose a tiny diagnostic handle for browser testing / tuning.
  window.__nightfall = {
    game,
    world,
    scene,
    camera,
    renderer,
    composer,
    effects,
    applyQuality,
    get dynamicScale() { return dynamicScale; },
    get frameMs() { return smoothedFrameMs; },
  };
  requestAnimationFrame(frame);
}

boot().catch((err) => {
  console.error('Nightfall boot failed', err);
  failBoot(`Boot failure: ${err?.message || 'unknown error'}. Reload the page and try again.`, 0.3);
});
