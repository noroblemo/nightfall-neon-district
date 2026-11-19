import * as THREE from 'three';
import {
  buildCharacter,
  buildCar,
  buildDrone,
  buildGuard,
  buildShard,
  buildShadowTexture,
  makeBlobShadow,
} from './models.js';
import { Network, detectGameServer, sanitizeRoom } from './network.js';
import {
  clamp,
  damp,
  dampAngle,
  dist2D,
  lerp,
  circleBoxResolve,
  segmentBoxHit,
  TAU,
} from './utils.js';

const SENS_KEY = 'nightfall:sensitivity';
const QUALITY_KEY = 'nightfall:quality';
const NAME_KEY = 'nightfall:name';
const MUTE_KEY = 'nightfall:muted';
const CAR_COLORS = [0x20e6ff, 0xff2d95, 0xffb44d, 0xa86bff, 0x6bffb8];
const WEAPON_DAMAGE = 34;
const MAG_SIZE = 12;
const MAX_RESERVE = 120;
const PLAZA_SAFE_RADIUS = 30;

// Contract ladder. Every contract reuses the same sandbox but changes the
// cache count, security density, extraction hold and payout.
const CONTRACTS = [
  {
    name: 'GHOST PROTOCOL',
    tag: 'SECURE THREE DATA CACHES',
    caches: 3,
    guardBudget: 3,
    droneBudget: 3,
    extractSeconds: 8,
    bonus: 3000,
  },
  {
    name: 'BLACKOUT RUN',
    tag: 'CUT THE GRID NODES',
    caches: 3,
    guardBudget: 3,
    droneBudget: 4,
    extractSeconds: 9,
    bonus: 3300,
  },
  {
    name: 'CROWN HEIST',
    tag: 'LIFT FOUR EXECUTIVE CACHES',
    caches: 4,
    guardBudget: 4,
    droneBudget: 4,
    extractSeconds: 10,
    bonus: 3700,
  },
  {
    name: 'SILENT AUCTION',
    tag: 'RAID THE NIGHT MARKET',
    caches: 4,
    guardBudget: 4,
    droneBudget: 5,
    extractSeconds: 10,
    bonus: 4000,
  },
  {
    name: 'ZERO HOUR',
    tag: 'BEAT THE SECURITY SWEEP',
    caches: 5,
    guardBudget: 5,
    droneBudget: 6,
    extractSeconds: 11,
    bonus: 4400,
  },
  {
    name: 'LAST SIGNAL',
    tag: 'PULL EVERY CACHE OFFLINE',
    caches: 5,
    guardBudget: 5,
    droneBudget: 7,
    extractSeconds: 12,
    bonus: 4800,
  },
];

const tempVec = new THREE.Vector3();
const tempVec2 = new THREE.Vector3();
const tempVec3 = new THREE.Vector3();

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Private browsing / storage disabled: settings simply won't persist.
  }
}

function cssColor(hex) {
  return `#${(hex ?? 0x36ecff).toString(16).padStart(6, '0')}`;
}

function pointSegmentDistance(px, pz, ax, az, bx, bz) {
  const vx = bx - ax;
  const vz = bz - az;
  const wx = px - ax;
  const wz = pz - az;
  const len = vx * vx + vz * vz;
  let t = len > 1e-8 ? (wx * vx + wz * vz) / len : 0;
  t = clamp(t, 0, 1);
  const dx = px - (ax + vx * t);
  const dz = pz - (az + vz * t);
  return Math.hypot(dx, dz);
}

function smoothAngle(current, target, lambda, dt) {
  return dampAngle(current, target, lambda, dt);
}

/**
 * NIGHTFALL // NEON DISTRICT
 * Gameplay core: third-person operator, arcade supercar physics, a
 * host-authoritative co-op contract and a tiny interpolation layer for
 * remote operators. Rendering lives in main.js.
 */
export class NightfallGame {
  constructor({ scene, camera, renderer, world, ui, effects, audio, setQuality }) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.world = world;
    this.ui = ui;
    this.effects = effects;
    this.audio = audio;
    this.setQualityCallback = setQuality || (() => {});
    this.canvas = renderer.domElement;

    this.status = 'menu';
    this.busy = false;
    this.session = null;
    this.network = null;
    this.isHost = false;
    this.mission = null;
    this.missionCount = 0;
    this.completed = false;
    this.resultTimer = 0;
    this.currentMode = 'foot';
    this.paused = false;
    this.chatOpen = false;
    this.controlsOpen = false;
    this.ignoreUnlock = false;

    this.keys = new Set();
    this.mouseDown = false;
    this.aiming = false;
    this.cameraYaw = 0;
    this.cameraPitch = -0.08;
    this.driveLookYaw = 0;
    this.drivePitch = 0.26;
    this.lastLookMove = 0;
    this.lookSensitivity = Number(readStorage(SENS_KEY, '1')) || 1;
    this.quality = readStorage(QUALITY_KEY, 'balanced');
    this.name = readStorage(NAME_KEY, 'GHOST') || 'GHOST';
    this.myColor = 0x36ecff;
    this.myName = this.name;
    this.serverAvailable = false;
    this.serverChecked = false;

    this.setQualityCallback(this.quality);
    this.player = null;
    this.localChar = null;
    this.localCharShadow = null;
    this.localCar = null;
    this.cars = [];
    this.shardVisuals = new Map();
    this.localEnemies = [];
    this.remoteEnemies = new Map();
    this.remotePlayers = new Map();
    this.pings = [];
    this.shadowTex = buildShadowTexture();
    this.elapsed = 0;
    this.menuAngle = 0;
    this.pingSeq = 0;
    this.statePingTimer = 0;
    this.playerStateTimer = 0;
    this.shardFxTimer = 0;
    this.cameraShake = 0;
    this.extractWasInside = false;
    this.damageFlashTimer = 0;
    this.lastFpsUpdate = 0;
    this.fps = 60;
    this.currentFov = 62;
    this.hudTick = 0;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onPointerLockChange = this.onPointerLockChange.bind(this);
    this.onWindowBlur = this.onWindowBlur.bind(this);
  }

  async init() {
    this.bindUI();
    this.bindInput();
    this.ui.setName(this.name);
    this.ui.setRoomCode('SOLO', false);
    this.ui.setLoading(0.92, 'CALIBRATING THE NEON GRID');

    const urlRoom = sanitizeRoom(new URLSearchParams(window.location.search).get('room') || '');
    const roomInput = document.getElementById('roomInput');
    if (roomInput) roomInput.value = urlRoom;

    try {
      this.serverAvailable = await detectGameServer();
    } catch {
      this.serverAvailable = false;
    }
    this.serverChecked = true;
    if (this.serverAvailable) {
      this.ui.setServerStatus('online', 'RELAY ONLINE');
    } else {
      this.ui.setServerStatus('p2p', 'PEER LINK READY');
    }

    const sens = document.getElementById('sensitivity');
    if (sens) sens.value = String(this.lookSensitivity);
    const muteBtn = document.getElementById('muteBtn');
    const muted = readStorage(MUTE_KEY, 'false') === 'true';
    this.audio.setMuted(muted);
    if (muteBtn) muteBtn.textContent = muted ? 'SOUND OFF' : 'SOUND ON';
    this.updateQualityButtons();

    this.ui.setLoading(1, 'DISTRICT READY');
    this.ui.finishLoading();
    setTimeout(() => {
      if (this.status === 'menu') this.ui.showLanding();
    }, 500);

    if (urlRoom) {
      const note = document.getElementById('connectionText');
      if (note) note.textContent = `Room ${urlRoom} loaded — press JOIN to link up.`;
    }

    // Nice first impression even while the menu is showing.
    this.positionMenuCamera(0);
  }

  bindUI() {
    const click = (id, handler) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('click', handler);
    };

    click('hostBtn', () => this.startOnline('host'));
    click('joinBtn', () => this.startOnline('join'));
    click('soloBtn', () => this.startSolo());

    click('resumeBtn', () => {
      this.paused = false;
      this.ui.setPaused(false);
      this.requestPointerLock();
    });
    click('howToBtn', () => {
      this.controlsOpen = true;
      this.ui.setControls(true);
      if (document.pointerLockElement) document.exitPointerLock();
    });
    click('closeControlsBtn', () => {
      this.controlsOpen = false;
      this.ui.setControls(false);
      if (this.status === 'playing' || this.status === 'paused') this.requestPointerLock();
    });
    click('copyInviteBtn', () => this.copyInvite());
    click('leaveBtn', () => this.leaveGame());
    click('reloadBtn', () => window.location.reload());
    click('redeployBtn', () => {
      if (this.isHost) {
        this.resetMission();
      } else if (this.network?.connected) {
        this.network.send('redeploy');
        this.ui.toast('Redeploy requested.', 'info');
      }
    });

    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
      nameInput.addEventListener('change', () => {
        this.name = (nameInput.value || 'GHOST').replace(/[^\w .\-']/g, '').trim().slice(0, 14) || 'GHOST';
        nameInput.value = this.name;
        this.ui.setName(this.name);
        writeStorage(NAME_KEY, this.name);
      });
      nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') this.startOnline('host');
      });
    }

    const roomInput = document.getElementById('roomInput');
    if (roomInput) {
      roomInput.addEventListener('input', () => {
        roomInput.value = sanitizeRoom(roomInput.value);
      });
      roomInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') this.startOnline('join');
      });
    }

    const sens = document.getElementById('sensitivity');
    if (sens) {
      sens.addEventListener('input', () => {
        this.lookSensitivity = clamp(Number(sens.value) || 1, 0.5, 2);
        writeStorage(SENS_KEY, String(this.lookSensitivity));
      });
    }

    const muteBtn = document.getElementById('muteBtn');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        const muted = !this.audio.muted;
        this.audio.setMuted(muted);
        writeStorage(MUTE_KEY, String(muted));
        muteBtn.textContent = muted ? 'SOUND OFF' : 'SOUND ON';
      });
    }

    document.querySelectorAll('#qualityGroup button').forEach((button) => {
      button.addEventListener('click', () => this.applyQuality(button.dataset.quality || 'balanced'));
    });

    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
      chatInput.addEventListener('keydown', (event) => {
        event.stopPropagation();
        if (event.key === 'Enter') {
          event.preventDefault();
          this.sendChat();
        } else if (event.key === 'Escape') {
          event.preventDefault();
          this.toggleChat(false);
        }
      });
    }
  }

  bindInput() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    this.canvas.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('pointerlockchange', this.onPointerLockChange);
    window.addEventListener('blur', this.onWindowBlur);
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  bindNetwork(net) {
    net.on('ready', (payload) => {
      if (this.session) return;
      this.beginSession({ ...payload, network: net });
    });
    net.on('message', (msg) => this.onNetMessage(msg));
    net.on('playerJoin', (player) => this.onPlayerJoin(player));
    net.on('playerLeave', (payload) => this.onPlayerLeave(payload));
    net.on('hostChanged', (hostId) => this.onHostChanged(hostId));
    net.on('latency', () => {});
    net.on('notice', ({ text, level }) => {
      this.ui.toast(text, level === 'error' ? 'error' : 'info', 4200);
    });
    net.on('close', ({ reason }) => {
      if (!this.session) return;
      this.status = 'disconnected';
      this.ui.setCrosshair(false);
      this.ui.setInteraction('', false);
      this.ignoreUnlock = true;
      if (document.pointerLockElement) document.exitPointerLock();
      this.ui.showDisconnect(reason || 'The city link was severed.');
    });
  }

  applyQuality(quality) {
    this.quality = quality;
    writeStorage(QUALITY_KEY, quality);
    this.setQualityCallback(quality);
    this.updateQualityButtons();
  }

  updateQualityButtons() {
    document.querySelectorAll('#qualityGroup button').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.quality === this.quality);
    });
  }

  async startOnline(kind) {
    if (this.busy || this.status !== 'menu') return;
    const nameInput = document.getElementById('nameInput');
    const roomInput = document.getElementById('roomInput');
    const name = (nameInput?.value || 'GHOST').replace(/[^\w .\-']/g, '').trim().slice(0, 14) || 'GHOST';
    this.name = name;
    writeStorage(NAME_KEY, name);

    const room = sanitizeRoom(roomInput?.value || '');
    if (kind === 'join' && room.length < 4) {
      this.ui.showStartError('Enter the 4–6 character room code your partner sent you.');
      roomInput?.focus();
      return;
    }

    this.ui.showStartError('');
    this.ui.setBusy(true, kind === 'host' ? 'FOUNDING THE DISTRICT' : 'LINKING TO THE DISTRICT');
    this.busy = true;
    this.audio.start();

    const net = new Network();
    this.network = net;
    this.bindNetwork(net);

    try {
      await net.connect({
        mode: kind,
        room,
        name,
        useServer: this.serverAvailable,
      });
    } catch (err) {
      net.close();
      if (this.network === net) this.network = null;
      if (!this.session) {
        this.ui.setBusy(false);
        this.ui.showStartError(err?.message || 'Could not link to the district.');
        this.ui.setServerStatus(this.serverAvailable ? 'online' : 'p2p', this.serverAvailable ? 'RELAY ONLINE' : 'PEER LINK READY');
      }
    } finally {
      this.busy = false;
      this.ui.setBusy(false);
    }
  }

  startSolo() {
    if (this.busy || this.status !== 'menu') return;
    const nameInput = document.getElementById('nameInput');
    this.name = (nameInput?.value || 'GHOST').replace(/[^\w .\-']/g, '').trim().slice(0, 14) || 'GHOST';
    writeStorage(NAME_KEY, this.name);
    this.audio.start();
    this.beginSession({
      network: null,
      selfId: 'solo',
      self: { id: 'solo', name: this.name, color: 0x36ecff },
      roomCode: null,
      hostId: 'solo',
      players: [],
      server: false,
    });
  }

  beginSession(payload) {
    if (this.session) return;
    this.session = {
      online: !!payload.network,
      selfId: payload.selfId,
      hostId: payload.hostId,
      roomCode: payload.roomCode || null,
      server: !!payload.server,
      self: payload.self || { id: payload.selfId, name: this.name, color: 0x36ecff },
    };
    this.isHost = payload.network ? payload.network.isHost : true;
    this.myName = payload.self?.name || this.name;
    this.myColor = payload.self?.color ?? 0x36ecff;
    this.ui.setBusy(false);
    this.ui.showStartError('');
    this.ui.enterGame();
    this.ui.setName(this.myName);
    this.ui.setRoomCode(this.session.roomCode || 'SOLO', this.session.server);
    this.ui.clearLabels();
    this.ui.setMode('foot');
    this.ui.setPaused(false);
    this.ui.hideDeath();
    this.ui.hideResult();
    this.ui.hideDisconnect();
    this.ui.setAlert(0);
    this.ui.setAmmo(MAG_SIZE, MAX_RESERVE, 0);
    this.ui.setVitals(100, 100);
    this.ui.setCrosshair(true, false, false);
    this.ui.setBoost(1, false);
    this.ui.initMinimap(this.world);
    this.ui.setInteraction('', false);
    this.ui.setWeather(this.weatherLabel(), this.world.getWeatherPreset(this.world.weather.kind)?.tagline);
    this.ui.showMissionBanner(
      'GHOST PROTOCOL',
      this.isHost ? 'SECURE THE DATA CACHES' : 'SYNCING WITH HOST',
      this.isHost ? 'NEW CONTRACT' : 'CO-OP LINK',
      4600,
    );

    this.status = 'playing';
    this.paused = false;
    this.completed = false;
    this.ignoreUnlock = false;
    this.currentMode = 'foot';
    this.cameraYaw = this.world.spawn.rot;
    this.cameraPitch = -0.08;
    this.mission = null;
    this.localCar = null;
    this.remotePlayers.clear();
    this.remoteEnemies.clear();
    this.localEnemies = [];
    this.pings = [];
    this.elapsed = 0;

    this.createLocalCharacter(this.myColor);
    this.initCars();
    this.world.extractionGroup.visible = false;

    if (this.isHost) {
      this.startMission();
    } else {
      this.ui.feed('Waiting for the host to transmit the contract…');
    }

    if (this.session.online) {
      this.ui.updateRoster(
        { id: this.session.selfId, name: this.myName, color: this.myColor },
        [...(this.network?.players.values() || [])],
        this.session.hostId,
      );
      if (this.isHost) {
        this.ui.feed('City link online. Share the room code with your partner.', 'ok', 'LINK');
      } else {
        this.ui.feed('Linked to the host city.', 'ok', 'LINK');
      }
    } else {
      this.ui.feed('Solo patrol engaged. Contract ladder is live in the district.', 'ok', 'CONTRACT');
    }
    this.ui.toast('Click the city to take control.', 'info', 3600);
    this.ui.setLockHint(true);
    this.requestPointerLock();
    this.lastFpsUpdate = 0;
    this.playerStateTimer = 0;
    this.statePingTimer = 0;
  }

  createLocalCharacter(color) {
    if (this.localChar) {
      this.scene.remove(this.localChar.group);
      this.localChar.group.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material?.dispose?.();
        }
      });
    }
    if (this.localCharShadow) this.scene.remove(this.localCharShadow);

    const skinTones = [0xd9ab8a, 0xb98262, 0x8b5b42, 0xe6c2a1, 0x6e4635];
    const colorIndex = Math.abs(Number(color) || 0) % 5;
    this.localChar = buildCharacter({ color, skin: skinTones[colorIndex] });
    // buildCharacter carries its own fill light, so local and remote operators stay readable.
    this.scene.add(this.localChar.group);
    this.localCharShadow = makeBlobShadow(this.shadowTex, 2.1);
    this.localCharShadow.material.opacity = 0.72;
    this.scene.add(this.localCharShadow);

    const spawn = this.world.spawn;
    const playerIndex = this.session ? [...(this.network?.players?.values() || [])].length : 0;
    const offset = this.session?.online ? playerIndex * 1.4 : 0;
    this.player = {
      pos: new THREE.Vector3(spawn.x + offset, 0, spawn.z),
      yaw: spawn.rot,
      bodyYaw: spawn.rot,
      velY: 0,
      grounded: true,
      health: 100,
      stamina: 100,
      alive: true,
      moveSpeed: 0,
      sprinting: false,
      ammo: MAG_SIZE,
      reserve: MAX_RESERVE,
      reloading: 0,
      fireCooldown: 0,
      lastDamageAt: 0,
      deathTimer: 0,
      wasInCar: false,
    };
    this.cameraYaw = spawn.rot;
    this.cameraPitch = -0.08;
  }

  initCars() {
    for (const car of this.cars) this.scene.remove(car.model.group);
    this.cars = [];
    this.localCar = null;
    this.world.carSpawns.forEach((spawn, index) => {
      const color = CAR_COLORS[index % CAR_COLORS.length] ?? spawn.color;
      const model = buildCar(color);
      model.group.position.set(spawn.x, 0.02, spawn.z);
      model.group.rotation.y = spawn.rot;
      const shadow = makeBlobShadow(this.shadowTex, 4.6);
      shadow.position.y = 0.03;
      shadow.material.opacity = 0.48;
      model.group.add(shadow);
      this.scene.add(model.group);
      this.cars.push({
        id: `car-${index}`,
        x: spawn.x,
        z: spawn.z,
        yaw: spawn.rot,
        speed: 0,
        steer: 0,
        boost: 1,
        model,
        color,
        occupiedBy: null,
      });
    });
  }

  startMission() {
    this.missionCount += 1;
    const contractDef = CONTRACTS[(this.missionCount - 1) % CONTRACTS.length];
    const stage = ((this.missionCount - 1) % CONTRACTS.length) + 1;
    const sites = this.world.shardSites;
    const targetCaches = Math.min(contractDef.caches, sites.length);
    const chosen = [];
    const rotation = (this.missionCount * 2) % Math.max(1, sites.length);
    for (let i = 0; i < sites.length && chosen.length < targetCaches; i += 1) {
      const site = sites[(i + rotation) % sites.length];
      if (chosen.every((c) => dist2D(c.x, c.z, site.x, site.z) > 32)) chosen.push(site);
    }
    for (const site of sites) {
      if (chosen.length >= targetCaches) break;
      if (!chosen.includes(site)) chosen.push(site);
    }
    while (chosen.length < targetCaches) {
      chosen.push({ x: -40 + chosen.length * 38, z: 40, name: 'NIGHT MARKET' });
    }

    this.mission = {
      phase: 'collect',
      shards: chosen.slice(0, targetCaches).map((site, index) => ({
        id: `shard-${this.missionCount}-${index}`,
        x: site.x,
        z: site.z,
        name: site.name || 'CACHE',
        collected: false,
      })),
      elapsed: 0,
      score: 0,
      extraction: { x: this.world.extraction.x, z: this.world.extraction.z },
      extractProgress: 0,
      extractSeconds: contractDef.extractSeconds,
      allInside: false,
      completeIn: 0,
      contract: this.missionCount,
      contractName: contractDef.name,
      contractTag: contractDef.tag,
      contractIndex: stage - 1,
      contractTotal: CONTRACTS.length,
      scoreBonus: contractDef.bonus,
      guardBudget: contractDef.guardBudget,
      droneBudget: contractDef.droneBudget,
    };
    this.completed = false;
    this.resultTimer = 0;
    this.extractWasInside = false;
    this.clearShardVisuals();
    this.syncShardVisuals();
    this.clearEnemies();
    if (this.isHost) this.spawnLocalEnemies();
    this.world.extractionGroup.visible = false;
    this.ui.hideResult();
    this.ui.showMissionBanner(contractDef.name, contractDef.tag, 'NEW CONTRACT', 4400);
    this.ui.feed(
      `Contract ${stage}/${CONTRACTS.length} — ${contractDef.name}. ${targetCaches} caches live.`,
      'ok',
      'CONTRACT',
    );
    if (this.session?.online && this.isHost) this.sendFullState(true);
  }

  onKeyDown(event) {
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
    if (this.status === 'menu' || this.status === 'disconnected') return;

    if (event.code === 'Escape') {
      if (this.controlsOpen) {
        this.controlsOpen = false;
        this.ui.setControls(false);
        if (this.status === 'paused') {
          this.paused = false;
          this.status = 'playing';
          this.ui.setPaused(false);
        }
      }
      return;
    }
    if (this.status === 'result') return;
    if (this.chatOpen) return;
    if (this.status === 'paused') return;

    if (event.code === 'KeyT' && !event.repeat) {
      this.toggleChat(true);
      return;
    }
    if (this.status !== 'playing' && this.status !== 'dead') return;

    this.keys.add(event.code);
    if (event.repeat) return;

    switch (event.code) {
      case 'Space':
        if (this.currentMode === 'foot') {
          event.preventDefault();
          this.jump();
        }
        break;
      case 'KeyF':
        this.vehicleInteract();
        break;
      case 'KeyE':
        this.useInteract();
        break;
      case 'KeyR':
        if (this.currentMode === 'car') this.resetCar();
        else this.startReload();
        break;
      case 'KeyQ':
        this.sendMapPing();
        break;
      case 'KeyV':
        this.cycleWeather();
        break;
      case 'KeyM': {
        const muted = !this.audio.muted;
        this.audio.setMuted(muted);
        writeStorage(MUTE_KEY, String(muted));
        const muteBtn = document.getElementById('muteBtn');
        if (muteBtn) muteBtn.textContent = muted ? 'SOUND OFF' : 'SOUND ON';
        this.ui.toast(muted ? 'Audio muted.' : 'Audio on.', 'info', 1600);
        break;
      }
      default:
        break;
    }
  }

  onKeyUp(event) {
    this.keys.delete(event.code);
  }

  onMouseDown(event) {
    if (this.status === 'menu' || this.status === 'disconnected' || this.status === 'result') return;
    if (!this.session) return;
    if (document.pointerLockElement !== this.canvas) {
      if (this.status === 'playing' || this.status === 'dead') this.requestPointerLock();
      return;
    }
    if (this.paused || this.chatOpen || this.controlsOpen) return;
    if (event.button === 0) {
      this.mouseDown = true;
      event.preventDefault();
    } else if (event.button === 2) {
      this.aiming = true;
      event.preventDefault();
    }
  }

  onMouseUp(event) {
    if (event.button === 0) this.mouseDown = false;
    if (event.button === 2) this.aiming = false;
  }

  onMouseMove(event) {
    if (document.pointerLockElement !== this.canvas) return;
    if (this.chatOpen || this.controlsOpen || this.paused) return;
    const sens = this.lookSensitivity;
    if (this.currentMode === 'car') {
      // Yaw grows counter-clockwise in this world, so mouse-right must subtract.
      this.driveLookYaw = clamp(this.driveLookYaw - event.movementX * 0.0024 * sens, -2.5, 2.5);
      this.drivePitch = clamp(this.drivePitch + event.movementY * 0.0016 * sens, 0.02, 0.78);
      this.lastLookMove = performance.now();
      return;
    }
    this.cameraYaw -= event.movementX * 0.0022 * sens;
    if (this.cameraYaw > Math.PI) this.cameraYaw -= TAU;
    if (this.cameraYaw < -Math.PI) this.cameraYaw += TAU;
    this.cameraPitch = clamp(this.cameraPitch - event.movementY * 0.0019 * sens, -1.02, 0.68);
    this.lastLookMove = performance.now();
  }

  onPointerLockChange() {
    const locked = document.pointerLockElement === this.canvas;
    if (locked) {
      this.ui.setLockHint(false);
      if (this.status === 'paused') {
        this.paused = false;
        this.status = 'playing';
        this.ui.setPaused(false);
      }
      return;
    }
    this.ui.setLockHint(false);
    this.mouseDown = false;
    this.aiming = false;
    if (this.status === 'playing' && !this.chatOpen && !this.controlsOpen && !this.ignoreUnlock) {
      this.setPaused(true);
    }
  }

  onWindowBlur() {
    this.keys.clear();
    this.mouseDown = false;
    this.aiming = false;
  }

  requestPointerLock() {
    if (!this.session || this.status === 'menu' || this.status === 'disconnected') return;
    try {
      const request = this.canvas.requestPointerLock?.();
      if (request?.catch) request.catch(() => {});
    } catch {
      // Pointer lock is a nice-to-have; the click-to-lock hint covers failures.
    }
  }

  setPaused(paused) {
    if (this.status === 'disconnected' || this.status === 'result' || this.status === 'menu') return;
    if (this.status === 'dead') return;
    this.paused = paused;
    this.status = paused ? 'paused' : 'playing';
    this.ui.setPaused(paused);
    this.keys.clear();
    this.mouseDown = false;
    this.aiming = false;
    this.ui.setCrosshair(!paused);
    if (paused) this.ui.setInteraction('', false);
    if (paused && document.pointerLockElement) document.exitPointerLock();
  }

  toggleChat(open) {
    if (!this.session) return;
    if (open && this.status !== 'playing' && this.status !== 'dead' && this.status !== 'paused') return;
    this.chatOpen = open;
    this.ui.setChatOpen(open);
    if (open) {
      this.keys.clear();
      this.mouseDown = false;
      this.aiming = false;
    } else if (document.pointerLockElement !== this.canvas) {
      this.requestPointerLock();
    }
  }

  sendChat() {
    const input = document.getElementById('chatInput');
    const text = (input?.value || '').replace(/[<>]/g, '').trim().slice(0, 120);
    this.toggleChat(false);
    if (!text) return;
    this.ui.chat(this.myName, text, this.myColor);
    this.network?.send('chat', { text, name: this.myName, color: this.myColor });
  }

  sendMapPing() {
    if (!this.player || !this.player.alive || !this.mission) return;
    const position = this.currentMode === 'car' && this.localCar
      ? { x: this.localCar.x, z: this.localCar.z }
      : { x: this.player.pos.x, z: this.player.pos.z };
    this.pingSeq += 1;
    const id = `${this.session?.selfId || 'solo'}-${this.pingSeq}`;
    this.addPing(id, this.myName, position.x, position.z, this.myColor);
    this.network?.send('map-ping', { id, name: this.myName, x: position.x, z: position.z, color: this.myColor });
  }

  addPing(id, name, x, z, color = 0xff2d95) {
    if (this.pings.some((p) => p.id === id)) return;
    this.pings.push({
      id,
      name: name || 'ALLY',
      position: new THREE.Vector3(x, 2.3, z),
      born: this.elapsed,
      color,
    });
    if (this.pings.length > 8) this.pings.shift();
    this.audio.ping();
    this.ui.feed(`${(name || 'ALLY').toUpperCase()} marked a location.`, 'info', 'PING');
  }

  weatherLabel(id = this.world?.weather?.kind) {
    const preset = this.world?.getWeatherPreset?.(id);
    return preset?.label || String(id || 'RAIN').toUpperCase();
  }

  applyWeather(id, announce = false) {
    if (!this.world?.setWeather) return;
    const already = this.world.weather.kind === id;
    const preset = this.world.setWeather(id, true);
    this.ui.setWeather?.(preset.label, preset.tagline);
    if (announce && !already) {
      this.ui.toast(`Weather: ${preset.label}`, 'info', 2200);
      this.ui.feed(`${preset.tagline} rolling over the district.`, 'info', 'WEATHER');
    }
  }

  cycleWeather() {
    const list = this.world?.weatherList || [];
    if (!list.length) return;
    const index = list.findIndex((item) => item.id === this.world.weather.kind);
    const next = list[(index + 1) % list.length];
    if (this.session?.online && !this.isHost) {
      this.network?.send('weather-request', { weather: next.id, name: this.myName });
      this.ui.toast(`Requested ${next.label.toLowerCase()} weather.`, 'info', 1800);
      return;
    }
    this.applyWeather(next.id, true);
    if (this.session?.online && this.isHost) {
      this.network?.send('weather', { weather: next.id, by: this.session.selfId, name: this.myName });
    }
  }

  jump() {
    const p = this.player;
    if (!p || !p.alive || !p.grounded || this.currentMode !== 'foot') return;
    p.velY = 6.1;
    p.grounded = false;
    this.audio.jump();
  }

  updatePlayer(dt, elapsed) {
    const p = this.player;
    if (!p) return;

    if (!p.alive) {
      p.deathTimer -= dt;
      this.ui.updateDeath(p.deathTimer);
      if (p.deathTimer <= 0) this.respawn();
      if (this.localChar) {
        this.localChar.group.position.set(p.pos.x, 0, p.pos.z);
        this.localCharShadow.position.set(p.pos.x, 0.045, p.pos.z);
      }
      return;
    }

    if (p.fireCooldown > 0) p.fireCooldown = Math.max(0, p.fireCooldown - dt);
    if (p.reloading > 0) {
      p.reloading = Math.max(0, p.reloading - dt);
      this.ui.setAmmo(p.ammo, p.reserve, 1 - p.reloading / 1.35);
      if (p.reloading === 0) this.finishReload();
    }

    // Slow out-of-combat regeneration so a long co-op run stays playable.
    if (p.health > 0 && p.health < 100 && this.elapsed - p.lastDamageAt > 6) {
      p.health = Math.min(100, p.health + 9 * dt);
      this.ui.setVitals(p.health, p.stamina);
    }

    const canControl = this.status === 'playing' && !this.paused && !this.chatOpen && this.controlsOpen === false;
    let moveX = 0;
    let moveZ = 0;
    let moving = false;
    if (this.currentMode === 'car') {
      p.stamina = Math.min(100, p.stamina + 16 * dt);
      p.moveSpeed = 0;
      if (this.localChar) {
        this.localChar.group.visible = false;
        this.localCharShadow.visible = false;
        if (this.localCar) {
          p.pos.x = this.localCar.x;
          p.pos.z = this.localCar.z;
        }
      }
      return;
    }

    if (canControl) {
      const forward = (this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0)
        - (this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0);
      const strafe = (this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0)
        - (this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0);
      const sin = Math.sin(this.cameraYaw);
      const cos = Math.cos(this.cameraYaw);
      // Strafe right vector is (-cos, sin); the (cos, -sin) basis points screen-left.
      moveX = sin * forward - cos * strafe;
      moveZ = cos * forward + sin * strafe;
      const length = Math.hypot(moveX, moveZ);
      if (length > 0.001) {
        moveX /= length;
        moveZ /= length;
        moving = true;
      }
    }

    const wantsSprint = canControl && moving && !this.aiming
      && (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) && p.stamina > 0.5;
    p.sprinting = wantsSprint;
    const speedTarget = this.aiming ? 3.1 : (wantsSprint ? 8.7 : 5.3);
    if (wantsSprint) p.stamina = Math.max(0, p.stamina - 20 * dt);
    else p.stamina = Math.min(100, p.stamina + 15 * dt);

    const accel = p.grounded ? 13 : 5;
    p.moveSpeed = damp(p.moveSpeed, moving && canControl ? speedTarget : 0, accel, dt);
    if (p.moveSpeed > 0.02 && moving) {
      p.pos.x += moveX * p.moveSpeed * dt;
      p.pos.z += moveZ * p.moveSpeed * dt;
      this.stepAccum = (this.stepAccum || 0) + p.moveSpeed * dt;
      if (this.stepAccum > (wantsSprint ? 2.25 : 1.7)) {
        this.stepAccum = 0;
        this.audio.footstep(wantsSprint);
      }
    }

    // Vertical movement
    p.velY -= 19.5 * dt;
    p.pos.y += p.velY * dt;
    if (p.pos.y <= 0) {
      if (!p.grounded && p.velY < -4.2) this.audio.land();
      p.pos.y = 0;
      p.velY = 0;
      p.grounded = true;
    }

    // Building collision and world bounds
    for (const collider of this.world.colliders) {
      circleBoxResolve(p.pos, 0.46, collider);
    }
    const bounds = this.world.metro.bounds - 4;
    p.pos.x = clamp(p.pos.x, -bounds, bounds);
    p.pos.z = clamp(p.pos.z, -bounds, bounds);

    const bodyTarget = (this.aiming || (elapsed - (p.lastShotAt || 0)) < 0.55)
      ? this.cameraYaw
      : (moving ? Math.atan2(moveX, moveZ) : p.bodyYaw);
    p.bodyYaw = smoothAngle(p.bodyYaw, bodyTarget, 11, dt);
    p.yaw = this.cameraYaw;

    if (this.localChar) {
      this.localChar.group.visible = true;
      this.localChar.group.position.copy(p.pos);
      this.localChar.group.rotation.y = p.bodyYaw;
      this.localChar.animate(dt, elapsed, p.moveSpeed, p.grounded, this.aiming);
    }
    if (this.localCharShadow) {
      this.localCharShadow.visible = true;
      this.localCharShadow.position.set(p.pos.x, 0.045, p.pos.z);
      const height = clamp(p.pos.y / 3, 0, 0.9);
      this.localCharShadow.material.opacity = 0.72 * (1 - height * 0.8);
      this.localCharShadow.scale.setScalar(1 - height * 0.3);
    }
  }

  updateVehicle(dt, elapsed) {
    const car = this.localCar;
    if (!car || !this.player) return;
    const p = this.player;
    const canControl = this.status === 'playing' && !this.paused && !this.chatOpen && !this.controlsOpen;
    const throttle = canControl
      ? (this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0) - (this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0)
      : 0;
    const steerInput = canControl
      ? (this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0) - (this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0)
      : 0;
    const handbrake = canControl && this.keys.has('Space');
    const wantBoost = canControl && (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'));
    car.boost = car.boost ?? 1;

    const boosting = wantBoost && car.boost > 0.02 && throttle > 0 && car.speed > 1;
    if (boosting) car.boost = Math.max(0, car.boost - 0.27 * dt);
    else car.boost = Math.min(1, car.boost + 0.12 * dt);

    const maxForward = boosting ? 66 : 50;
    if (throttle > 0) {
      if (car.speed < 0) car.speed += 36 * dt;
      else car.speed += (boosting ? 25 : 15) * dt * (1 - clamp(car.speed / maxForward, 0, 1));
    } else if (throttle < 0) {
      if (car.speed > 0.4) car.speed -= 38 * dt;
      else car.speed -= 13 * dt;
    } else {
      car.speed *= Math.exp(-0.62 * dt);
    }
    if (handbrake) car.speed *= Math.exp(-1.15 * dt);
    car.speed -= car.speed * 0.06 * dt;
    car.speed = clamp(car.speed, -15, maxForward);

    const absSpeed = Math.abs(car.speed);
    const steerAuthority = clamp(absSpeed / 5, 0, 1) * (1 - clamp(absSpeed / 105, 0, 0.52));
    const steerScale = handbrake ? 1.55 : 1;
    if (absSpeed > 0.25) {
      // steerInput > 0 means right; yaw grows counter-clockwise, so subtract.
      car.yaw -= steerInput * 1.5 * steerAuthority * steerScale * dt * Math.sign(car.speed || 1);
    }
    car.steer = damp(car.steer, -steerInput * (handbrake ? 0.7 : 0.5), 7, dt);

    const forwardX = Math.sin(car.yaw);
    const forwardZ = Math.cos(car.yaw);
    car.x += forwardX * car.speed * dt;
    car.z += forwardZ * car.speed * dt;

    const hit = this.resolveVehicleCollisions(car, forwardX, forwardZ);
    if (hit) {
      const impact = absSpeed;
      if (impact > 12) {
        this.effects.bulletImpact(
          new THREE.Vector3(car.x + forwardX * 2.1, 0.6, car.z + forwardZ * 2.1),
          new THREE.Vector3(0, 1, 0),
          0xffc06b,
        );
        this.audio.explosion();
        this.cameraShake = Math.min(1.2, this.cameraShake + impact * 0.02);
      } else if (impact > 3) {
        this.audio.land();
      }
      car.speed *= 0.28;
    }

    const bounds = this.world.metro.bounds - 4;
    const boundedX = clamp(car.x, -bounds, bounds);
    const boundedZ = clamp(car.z, -bounds, bounds);
    if (boundedX !== car.x || boundedZ !== car.z) {
      // Ran into the city edge: bleed speed like a wall impact instead of grinding.
      if (absSpeed > 12) {
        this.effects.bulletImpact(
          new THREE.Vector3(car.x + forwardX * 2.1, 0.6, car.z + forwardZ * 2.1),
          new THREE.Vector3(0, 1, 0),
          0xffc06b,
        );
        this.audio.land();
        this.cameraShake = Math.min(1.0, this.cameraShake + absSpeed * 0.015);
      }
      car.speed *= 0.2;
    }
    car.x = boundedX;
    car.z = boundedZ;
    car.speed = clamp(car.speed, -15, maxForward);
    car.model.group.position.set(car.x, 0.02, car.z);
    car.model.group.rotation.y = car.yaw;
    car.model.update(dt, car.speed, car.steer, boosting, throttle < 0 || handbrake, true);

    p.pos.set(car.x, 0, car.z);
    p.bodyYaw = car.yaw;
    p.velY = 0;
    p.grounded = true;

    if (this.driveLookYaw !== 0 && performance.now() - this.lastLookMove > 1500) {
      this.driveLookYaw = damp(this.driveLookYaw, 0, 1.4, dt);
    }

    this.driftTimer = (this.driftTimer || 0) + dt;
    if (this.driftTimer > 0.045) {
      this.driftTimer = 0;
      if ((handbrake || Math.abs(steerInput) > 0.2) && absSpeed > 9) {
        const rearX = car.x - forwardX * 2.2 + (Math.random() - 0.5) * 1.4;
        const rearZ = car.z - forwardZ * 2.2 + (Math.random() - 0.5) * 1.4;
        this.effects.drift(new THREE.Vector3(rearX, 0.15, rearZ), clamp(absSpeed / 28, 0.4, 1.4));
      }
      if (boosting) {
        const rearX = car.x - forwardX * 2.5;
        const rearZ = car.z - forwardZ * 2.5;
        this.effects.boostTrail(new THREE.Vector3(rearX, 0.48, rearZ), 0x63d9ff);
      }
    }

    this.audio.updateCar({
      active: true,
      speed: car.speed,
      throttle,
      boosting,
      drifting: handbrake && absSpeed > 8,
    });

    const gear = car.speed < -0.5 ? 'R' : car.speed < 0.5 ? 'N' : String(clamp(Math.ceil(absSpeed / 11), 1, 6));
    this.ui.setCarStats(car.speed, car.boost, gear, throttle);
    this.ui.setBoost(car.boost, boosting);
    this.ui.setBoosting(boosting);
  }

  resolveVehicleCollisions(car, forwardX, forwardZ) {
    let hit = false;
    for (const offset of [-1.45, 0, 1.45]) {
      const point = { x: car.x + forwardX * offset, z: car.z + forwardZ * offset };
      const startX = point.x;
      const startZ = point.z;
      for (const collider of this.world.colliders) {
        circleBoxResolve(point, 1.02, collider);
      }
      const dx = point.x - startX;
      const dz = point.z - startZ;
      if (Math.abs(dx) + Math.abs(dz) > 0.001) {
        car.x += dx;
        car.z += dz;
        hit = true;
      }
    }
    return hit;
  }

  resetCar() {
    const car = this.localCar;
    if (!car) return;
    let nearest = this.world.carSpawns[0];
    let best = Infinity;
    for (const spawn of this.world.carSpawns) {
      const d = dist2D(car.x, car.z, spawn.x, spawn.z) + (spawn.x === 7 ? 3 : 0);
      if (d < best) {
        best = d;
        nearest = spawn;
      }
    }
    car.x = nearest.x;
    car.z = nearest.z;
    car.yaw = nearest.rot;
    car.speed = 0;
    car.boost = 1;
    car.model.group.position.set(car.x, 0.02, car.z);
    car.model.group.rotation.y = car.yaw;
    this.cameraYaw = car.yaw;
    this.driveLookYaw = 0;
    this.ui.toast('Vehicle re-synced to the nearest road.', 'info', 2000);
    this.audio.door();
    this.sendPlayerState(true);
  }

  nearestCar(maxDistance = 4.6) {
    let best = null;
    let bestDistance = maxDistance;
    for (const car of this.cars) {
      if (car.occupiedBy && car.occupiedBy !== this.session?.selfId) continue;
      const d = dist2D(this.player.pos.x, this.player.pos.z, car.x, car.z);
      if (d < bestDistance) {
        bestDistance = d;
        best = car;
      }
    }
    return best;
  }

  nearestShard(maxDistance = 4.3) {
    if (!this.mission || this.mission.phase !== 'collect') return null;
    let best = null;
    let bestDistance = maxDistance;
    for (const shard of this.mission.shards) {
      if (shard.collected) continue;
      const d = dist2D(this.player.pos.x, this.player.pos.z, shard.x, shard.z);
      if (d < bestDistance) {
        bestDistance = d;
        best = shard;
      }
    }
    return best;
  }

  vehicleInteract() {
    if (!this.player || !this.player.alive) return;
    if (this.currentMode === 'car') {
      if (Math.abs(this.localCar?.speed || 0) > 9) {
        this.ui.toast('Slow down before exiting.', 'warn', 1800);
        return;
      }
      this.exitCar();
      return;
    }
    const car = this.nearestCar();
    if (car) this.enterCar(car);
  }

  useInteract() {
    if (!this.player || !this.player.alive || this.status !== 'playing') return;
    if (this.currentMode === 'car') {
      this.vehicleInteract();
      return;
    }
    const shard = this.nearestShard(4.8);
    if (shard) {
      if (this.isHost) this.hostCollectShard(shard.id);
      else {
        this.network?.send('shard-request', { shardId: shard.id });
        this.ui.toast('Breach requested — hold position.', 'info', 1800);
      }
      return;
    }
    const car = this.nearestCar();
    if (car) this.enterCar(car);
  }

  enterCar(car) {
    if (!this.player || !this.player.alive) return;
    this.currentMode = 'car';
    this.localCar = car;
    car.occupiedBy = this.session?.selfId || 'solo';
    car.speed = 0;
    car.boost = car.boost ?? 1;
    car.model.group.position.set(car.x, 0.02, car.z);
    car.model.group.rotation.y = car.yaw;
    this.cameraYaw = car.yaw;
    this.driveLookYaw = 0;
    this.drivePitch = 0.26;
    this.aiming = false;
    this.mouseDown = false;
    this.player.pos.set(car.x, 0, car.z);
    this.player.bodyYaw = car.yaw;
    if (this.localChar) {
      this.localChar.group.visible = false;
      this.localCharShadow.visible = false;
    }
    this.ui.setMode('car');
    this.ui.setCrosshair(false);
    this.ui.setInteraction('', false);
    this.ui.setBoost(car.boost, false);
    this.audio.door();
    this.effects.exitCar(new THREE.Vector3(car.x, 0.2, car.z));
    this.audio.updateCar({ active: true, speed: 0, throttle: 0, boosting: false, drifting: false });
    this.sendPlayerState(true);
  }

  exitCar() {
    const car = this.localCar;
    if (!car) return;
    const sin = Math.sin(car.yaw);
    const cos = Math.cos(car.yaw);
    let side = 1;
    let x = car.x + cos * 1.7;
    let z = car.z - sin * 1.7;
    for (const collider of this.world.colliders) {
      const point = { x, z };
      if (circleBoxResolve(point, 0.5, collider)) {
        side = -1;
        x = car.x + cos * -1.7;
        z = car.z - sin * -1.7;
        break;
      }
    }
    const bounds = this.world.metro.bounds - 4;
    this.player.pos.set(clamp(x, -bounds, bounds), 0, clamp(z, -bounds, bounds));
    this.player.bodyYaw = car.yaw;
    this.player.velY = 0;
    this.player.grounded = true;
    car.occupiedBy = null;
    car.speed = 0;
    car.steer = 0;
    this.localCar = null;
    this.currentMode = 'foot';
    this.cameraYaw = car.yaw;
    this.cameraPitch = -0.08;
    this.aiming = false;
    if (this.localChar) {
      this.localChar.group.visible = true;
      this.localChar.group.position.copy(this.player.pos);
      this.localChar.group.rotation.y = this.player.bodyYaw;
    }
    if (this.localCharShadow) {
      this.localCharShadow.visible = true;
      this.localCharShadow.position.set(this.player.pos.x, 0.045, this.player.pos.z);
    }
    this.driveLookYaw = 0;
    this.ui.setMode('foot');
    this.ui.setCrosshair(true);
    this.ui.setInteraction('', false);
    this.audio.door();
    this.audio.updateCar({ active: false, speed: 0, throttle: 0, boosting: false, drifting: false });
    this.effects.exitCar(new THREE.Vector3(car.x, 0.2, car.z));
    this.sendPlayerState(true);
  }

  updateCars(dt) {
    const now = performance.now();
    for (const car of this.cars) {
      if (car === this.localCar) continue;
      const remote = car.occupiedBy ? this.remotePlayers.get(car.occupiedBy) : null;
      if (remote) {
        car.x = remote.pos.x;
        car.z = remote.pos.z;
        car.yaw = remote.bodyYaw;
        car.speed = remote.speed || 0;
        car.model.group.position.set(car.x, 0.02, car.z);
        car.model.group.rotation.y = car.yaw;
        car.model.update(dt, car.speed, 0, !!remote.boosting, false, true);
      } else {
        if (car.occupiedBy && !remote) car.occupiedBy = null;
        car.model.group.position.set(car.x, 0.02, car.z);
        car.model.group.rotation.y = car.yaw;
      }
      if (car.model.exhausts) {
        for (const flame of car.model.exhausts) flame.material.opacity *= 0.9;
      }
    }
    this.carSyncTimer = (this.carSyncTimer || 0) + dt;
  }

  updateCamera(dt, elapsed) {
    const p = this.player;
    if (!p) return;
    const shake = this.cameraShake;
    this.cameraShake = Math.max(0, this.cameraShake - dt * 2.6);

    if (this.currentMode === 'car' && this.localCar) {
      const car = this.localCar;
      const speed = Math.abs(car.speed);
      this.cameraYaw = car.yaw;
      const chaseYaw = car.yaw + this.driveLookYaw;
      const dist = 7.8 + clamp(speed / 70, 0, 1) * 2.6;
      const height = 1.35 + Math.sin(this.drivePitch) * dist * 0.72;
      const origin = new THREE.Vector3(car.x, 1.45, car.z);
      const desired = new THREE.Vector3(
        car.x - Math.sin(chaseYaw) * Math.cos(this.drivePitch) * dist,
        Math.max(0.85, height),
        car.z - Math.cos(chaseYaw) * Math.cos(this.drivePitch) * dist,
      );
      const clipped = this.clipCamera(origin, desired);
      this.camera.position.copy(clipped);
      if (shake > 0.01) {
        this.camera.position.x += (Math.random() - 0.5) * shake * 0.35;
        this.camera.position.y += (Math.random() - 0.5) * shake * 0.25;
      }
      tempVec.set(
        car.x + Math.sin(chaseYaw) * 5.2,
        1.25 + Math.sin(this.drivePitch) * 1.4,
        car.z + Math.cos(chaseYaw) * 5.2,
      );
      this.camera.lookAt(tempVec);
      const targetFov = 64 + clamp(speed / 65, 0, 1) * 9 + (this.keys.has('ShiftLeft') ? 5 : 0);
      this.setCameraFov(targetFov, dt);
      return;
    }

    const eye = tempVec.set(p.pos.x, p.pos.y + 1.62, p.pos.z).clone();
    const dir = tempVec2.set(
      Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch),
      Math.sin(this.cameraPitch),
      Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch),
    ).normalize();
    const rightX = Math.cos(this.cameraYaw);
    const rightZ = -Math.sin(this.cameraYaw);
    const shoulder = this.aiming ? 0.58 : 0.42;
    const distance = this.aiming ? 2.15 : 4.15 + (p.moveSpeed > 6.5 ? 0.45 : 0);
    const desired = tempVec3.set(
      eye.x + rightX * shoulder - dir.x * distance,
      eye.y - dir.y * distance + (this.aiming ? 0.08 : 0.2),
      eye.z + rightZ * shoulder - dir.z * distance,
    );
    desired.y = Math.max(0.52, desired.y);
    const clipped = this.clipCamera(eye, desired);
    this.camera.position.copy(clipped);
    if (shake > 0.01) {
      this.camera.position.x += (Math.random() - 0.5) * shake * 0.28;
      this.camera.position.y += (Math.random() - 0.5) * shake * 0.2;
    }
    const bob = p.grounded && p.moveSpeed > 0.2
      ? Math.sin(elapsed * (p.sprinting ? 12 : 8)) * Math.min(0.045, p.moveSpeed * 0.006)
      : 0;
    this.camera.position.y += bob;
    this.camera.lookAt(
      this.camera.position.x + dir.x,
      this.camera.position.y + dir.y,
      this.camera.position.z + dir.z,
    );
    const targetFov = this.aiming ? 46 : (p.sprinting ? 67 : 62);
    this.setCameraFov(targetFov, dt);
    if (this.localChar) {
      const camDistance = this.camera.position.distanceTo(p.pos);
      this.localChar.group.visible = p.alive && (camDistance > 0.85);
    }
  }

  setCameraFov(target, dt) {
    if (Math.abs(this.camera.fov - target) < 0.05) return;
    this.camera.fov = damp(this.camera.fov, target, 7, dt);
    this.camera.updateProjectionMatrix();
    const height = this.renderer.domElement.height || window.innerHeight;
    this.effects.setViewport?.(height, this.camera.fov);
  }

  clipCamera(origin, desired) {
    const direction = new THREE.Vector3().subVectors(desired, origin);
    let best = 1;
    for (const collider of this.world.colliders) {
      const hit = segmentBoxHit(origin, desired, collider, 0.24);
      if (hit !== null && hit > 0.02 && hit < best) best = hit;
    }
    if (best < 0.999) {
      desired.copy(origin).addScaledVector(direction, Math.max(0.12, best * 0.9));
    }
    return desired;
  }

  updateInteractions() {
    if (!this.player || this.status !== 'playing' || this.chatOpen || this.paused || !this.player.alive) {
      this.ui.setInteraction('', false);
      return;
    }
    if (this.currentMode === 'car') {
      this.ui.setInteraction('', false);
      return;
    }
    const shard = this.nearestShard(4.8);
    if (shard) {
      this.ui.setInteraction('BREACH DATA CACHE', true, 'E');
      return;
    }
    const car = this.nearestCar();
    if (car) {
      this.ui.setInteraction('ENTER VEHICLE', true, 'F');
      return;
    }
    if (this.mission && (this.mission.phase === 'extract' || this.mission.phase === 'extracting')) {
      const d = dist2D(this.player.pos.x, this.player.pos.z, this.world.extraction.x, this.world.extraction.z);
      if (d < 9) {
        this.ui.setInteraction('HOLD THE EXTRACTION ZONE', true, '◆');
        return;
      }
    }
    this.ui.setInteraction('', false);
  }

  clearShardVisuals() {
    for (const [, visual] of this.shardVisuals) {
      this.scene.remove(visual.group);
      this.scene.remove(visual.shadow);
      visual.group.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material?.dispose?.();
        }
      });
      visual.shadow.geometry?.dispose?.();
      visual.shadow.material?.dispose?.();
    }
    this.shardVisuals.clear();
  }

  syncShardVisuals() {
    if (!this.mission) return;
    const active = new Set();
    for (const shard of this.mission.shards) {
      active.add(shard.id);
      let visual = this.shardVisuals.get(shard.id);
      if (!visual) {
        const shardModel = buildShard();
        const group = new THREE.Group();
        group.position.set(shard.x, 0, shard.z);
        group.add(shardModel.group);
        group.position.y = 0;
        const shadow = makeBlobShadow(this.shadowTex, 5);
        shadow.position.set(shard.x, 0.045, shard.z);
        shadow.material.opacity = 0.45;
        this.scene.add(group);
        this.scene.add(shadow);
        visual = { group, shadow, model: shardModel, shard };
        this.shardVisuals.set(shard.id, visual);
      }
      visual.group.visible = !shard.collected;
      visual.shadow.visible = !shard.collected;
      visual.shard = shard;
    }
    for (const [id, visual] of this.shardVisuals) {
      if (active.has(id)) continue;
      this.scene.remove(visual.group);
      this.scene.remove(visual.shadow);
      visual.group.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material?.dispose?.();
        }
      });
      visual.shadow.geometry?.dispose?.();
      visual.shadow.material?.dispose?.();
      this.shardVisuals.delete(id);
    }
  }

  updateShardVisuals(dt, elapsed) {
    this.shardFxTimer += dt;
    const sparkle = this.shardFxTimer > 0.12;
    if (sparkle) this.shardFxTimer = 0;
    for (const [, visual] of this.shardVisuals) {
      if (!visual.group.visible || !visual.shard || visual.shard.collected) continue;
      visual.model.animate(dt, elapsed);
      if (sparkle) {
        this.effects.sparkle(new THREE.Vector3(visual.shard.x, 1.8, visual.shard.z), 0x5ef6ff);
      }
    }
    this.world.extractionGroup.visible = !!this.mission
      && (this.mission.phase === 'extract' || this.mission.phase === 'extracting' || this.mission.phase === 'complete');
  }

  updateMission(dt, elapsed) {
    if (!this.mission) return;
    if (this.isHost) {
      if (this.mission.phase === 'collect' || this.mission.phase === 'extract' || this.mission.phase === 'extracting') {
        this.mission.elapsed += dt;
      }
      if (this.mission.phase === 'extract' || this.mission.phase === 'extracting') {
        const radius = 8.6;
        const localInside = this.player?.alive
          && dist2D(this.player.pos.x, this.player.pos.z, this.world.extraction.x, this.world.extraction.z) < radius;
        let allInside = localInside;
        for (const remote of this.remotePlayers.values()) {
          if (!remote.alive) {
            allInside = false;
            continue;
          }
          const px = remote.pos.x;
          const pz = remote.pos.z;
          if (dist2D(px, pz, this.world.extraction.x, this.world.extraction.z) > radius) allInside = false;
        }
        if (allInside) {
          if (this.mission.phase === 'extract') {
            this.mission.phase = 'extracting';
            this.ui.showMissionBanner('EXTRACTION', `HOLD THE RING // ${this.mission.extractSeconds}s`, 'IN PROGRESS', 3200);
            this.ui.feed('All operatives inside. Hold the extraction ring.', 'warn', 'EXTRACT');
            this.audio.boost();
          }
          this.mission.extractProgress += dt;
          if (!this.extractWasInside && this.mission.extractProgress > 0.1) {
            this.ui.toast('Extraction in progress — stay inside the ring.', 'info', 2000);
          }
          this.extractWasInside = true;
          if (this.mission.extractProgress >= this.mission.extractSeconds) {
            this.completeMission();
          }
        } else {
          if (this.mission.phase === 'extracting') {
            this.mission.phase = 'extract';
            this.mission.extractProgress = 0;
            this.ui.toast('Extraction interrupted — regroup in the ring.', 'warn', 2400);
            this.ui.feed('Extraction interrupted. Every operative must hold the ring.', 'warn', 'EXTRACT');
          }
          this.extractWasInside = false;
        }
      }
      if (this.mission.phase === 'complete') {
        this.mission.completeIn = Math.max(0, this.mission.completeIn - dt);
        this.ui.updateResultCountdown(this.mission.completeIn);
        if (this.mission.completeIn <= 0) this.resetMission();
      }
      if (this.mission.phase === 'extracting') this.ui.setMission(this.mission, 0);
      this.sendStateTimer = (this.sendStateTimer || 0) + dt;
      if (this.session?.online && this.sendStateTimer > 0.1) {
        this.sendStateTimer = 0;
        this.sendFullState(false);
      }
    } else {
      // Guests mirror the host's clock between snapshots for a smooth HUD.
      if (this.mission.phase !== 'complete') this.mission.elapsed += dt;
      else {
        this.mission.completeIn = Math.max(0, (this.mission.completeIn ?? 0) - dt);
        this.ui.updateResultCountdown(this.mission.completeIn);
      }
    }
  }

  completeMission() {
    if (!this.mission || this.isHost === false) return;
    const contractName = this.mission.contractName || 'GHOST PROTOCOL';
    const cacheCount = this.mission.shards?.length || 3;
    this.mission.phase = 'complete';
    this.mission.score += (this.mission.scoreBonus || 3000)
      + Math.round(Math.max(0, 1600 - this.mission.elapsed * 3));
    this.mission.completeIn = 12;
    this.completed = true;
    this.resultTimer = 12;
    this.status = 'result';
    this.ignoreUnlock = true;
    this.mouseDown = false;
    this.aiming = false;
    this.ui.setCrosshair(false);
    this.ui.setInteraction('', false);
    this.ui.hideDeath();
    this.ui.showMissionBanner('CONTRACT COMPLETE', `${contractName} SECURED`, 'EXFIL', 4600);
    this.ui.showResult({
      time: this.mission.elapsed,
      score: this.mission.score,
      countdown: this.mission.completeIn,
      caches: cacheCount,
      contractName,
    });
    this.effects.explosion(
      new THREE.Vector3(this.world.extraction.x, 2, this.world.extraction.z),
      0x45f6ff,
      1.8,
    );
    this.ui.feed(`Contract complete. ${Math.round(this.mission.score)} points banked.`, 'ok', 'CONTRACT');
    this.audio.pickup();
    if (this.session?.online) this.sendFullState(true);
    if (document.pointerLockElement) document.exitPointerLock();
  }

  resetMission() {
    if (!this.isHost) return;
    this.completed = false;
    this.status = 'playing';
    this.paused = false;
    this.resultTimer = 0;
    this.ignoreUnlock = false;
    this.ui.hideResult();
    this.ui.setPaused(false);
    this.startMission();
    this.requestPointerLock();
  }

  hostCollectShard(shardId) {
    if (!this.isHost || !this.mission || this.mission.phase !== 'collect') return;
    const shard = this.mission.shards.find((s) => s.id === shardId);
    if (!shard || shard.collected) return;
    const distance = dist2D(this.player.pos.x, this.player.pos.z, shard.x, shard.z);
    if (distance > 6.2) return;
    this.applyShardCollected(shard, this.myName, true);
    this.mission.score += 500;
    this.network?.send('shard-collected', { shardId: shard.id, by: this.session?.selfId, name: this.myName });
    if (this.mission.shards.every((s) => s.collected)) {
      this.mission.phase = 'extract';
      this.world.extractionGroup.visible = true;
      this.ui.showMissionBanner('EXTRACTION READY', 'RETURN TO THE PLAZA AS A TEAM', 'ALL CACHES SECURED', 5200);
      this.ui.feed('All caches secured. Extraction gate is live at the plaza.', 'ok', 'EXTRACT');
      this.ui.toast('Extraction unlocked — get to the plaza.', 'ok', 4000);
    }
    this.sendFullState(true);
  }

  applyShardCollected(shard, byName, announce = true) {
    if (!shard || shard.collected) return;
    shard.collected = true;
    const visual = this.shardVisuals.get(shard.id);
    if (visual) {
      visual.group.visible = false;
      visual.shadow.visible = false;
    }
    this.effects.pickup(new THREE.Vector3(shard.x, 1.7, shard.z), 0x4ff5ff);
    this.audio.pickup();
    if (announce) {
      this.ui.feed(`${(byName || 'ALLY').toUpperCase()} breached ${shard.name || 'a data cache'}.`, 'ok', 'CACHE');
    }
    if (this.mission && this.mission.shards.every((s) => s.collected)) {
      this.world.extractionGroup.visible = true;
      if (!this.isHost) {
        this.ui.showMissionBanner('EXTRACTION READY', 'RETURN TO THE PLAZA AS A TEAM', 'ALL CACHES SECURED', 5200);
        this.ui.feed('All caches secured. Extraction gate is live at the plaza.', 'ok', 'EXTRACT');
      }
    }
  }

  startReload() {
    const p = this.player;
    if (!p || !p.alive || this.currentMode === 'car') return;
    if (p.reloading > 0 || p.ammo >= MAG_SIZE || p.reserve <= 0) return;
    p.reloading = 1.35;
    this.audio.reload();
  }

  finishReload() {
    const p = this.player;
    if (!p) return;
    const missing = MAG_SIZE - p.ammo;
    const amount = Math.min(missing, p.reserve);
    p.ammo += amount;
    p.reserve -= amount;
    this.ui.setAmmo(p.ammo, p.reserve, 0);
  }

  updateWeapon(dt, elapsed) {
    const p = this.player;
    if (!p || !p.alive) {
      this.mouseDown = false;
      return;
    }
    if (this.currentMode !== 'foot' || this.status !== 'playing' || this.paused || this.chatOpen || this.controlsOpen) {
      if (this.currentMode === 'car') this.ui.setCrosshair(false);
      return;
    }
    if (document.pointerLockElement !== this.canvas) this.mouseDown = false;
    this.ui.setCrosshair(true, this.aiming, this.isAimBlocked());
    if (this.mouseDown && p.fireCooldown <= 0) this.fireWeapon(elapsed);
  }

  isAimBlocked() {
    const origin = this.camera.position;
    const dir = this.camera.getWorldDirection(tempVec);
    const end = new THREE.Vector3(
      origin.x + dir.x * 2.8,
      origin.y + dir.y * 2.8,
      origin.z + dir.z * 2.8,
    );
    for (const collider of this.world.colliders) {
      const hit = segmentBoxHit(origin, end, collider, 0);
      if (hit !== null && hit < 0.99) return true;
    }
    return false;
  }

  fireWeapon(elapsed) {
    const p = this.player;
    if (!p || !p.alive) return;
    if (p.reloading > 0) return;
    if (p.ammo <= 0) {
      this.audio._noiseBurst?.(0.03, 2000, 0.01);
      this.startReload();
      return;
    }
    p.ammo -= 1;
    p.fireCooldown = 0.115;
    p.lastShotAt = elapsed;
    p.reloading = 0;
    this.ui.setAmmo(p.ammo, p.reserve, 0);
    this.cameraShake = Math.min(0.32, this.cameraShake + 0.075);
    this.cameraPitch = clamp(this.cameraPitch + 0.0035, -1.02, 0.68);
    this.audio.gunshot(true);
    if (this.localChar) this.localChar.flashTime = 0.06;

    const origin = this.camera.position.clone();
    const direction = this.camera.getWorldDirection(new THREE.Vector3());
    const end = origin.clone().addScaledVector(direction, 150);
    const target = this.pickShootTarget(origin, direction, 150);

    let impactPoint = end;
    if (target) {
      impactPoint = target.point.clone();
      if (target.enemy) {
        if (this.isHost) this.applyEnemyDamage(target.enemy, WEAPON_DAMAGE, this.myName);
        else {
          this.network?.send('shot', {
            enemyId: target.enemy.id,
            ox: origin.x, oy: origin.y, oz: origin.z,
            ex: impactPoint.x, ey: impactPoint.y, ez: impactPoint.z,
          });
        }
        this.ui.hitmarker();
        this.audio.hitmarker();
        this.effects.enemyHit(impactPoint, 0xff6a55);
        p.scoreFlash = 0.2;
      } else {
        this.effects.bulletImpact(impactPoint, new THREE.Vector3(0, 1, 0), 0x9feaff);
      }
    }
    const muzzle = new THREE.Vector3(
      p.pos.x + Math.sin(p.bodyYaw) * 0.55 + Math.cos(p.bodyYaw) * 0.24,
      p.pos.y + 1.3,
      p.pos.z + Math.cos(p.bodyYaw) * 0.55 - Math.sin(p.bodyYaw) * 0.24,
    );
    this.effects.muzzleFlash(muzzle, 0xffe3a3, direction);
    this.effects.tracer(muzzle, impactPoint, 0xa8f2ff);
    this.sendPlayerState(true);
  }

  pickShootTarget(origin, direction, maxDistance) {
    const candidates = this.isHost ? this.localEnemies : [...this.remoteEnemies.values()];
    let best = null;
    let bestT = maxDistance;
    for (const enemy of candidates) {
      if (!enemy.alive) continue;
      const baseY = enemy.y ?? enemy.pos?.y ?? 0;
      const center = new THREE.Vector3(
        enemy.x ?? enemy.pos?.x ?? 0,
        enemy.type === 'drone' ? baseY : baseY + 1.1,
        enemy.z ?? enemy.pos?.z ?? 0,
      );
      const toEnemy = center.clone().sub(origin);
      const t = toEnemy.dot(direction);
      if (t < 0.5 || t > bestT) continue;
      const closest = origin.clone().addScaledVector(direction, t);
      const radius = enemy.type === 'drone' ? 1.15 : 0.9;
      if (closest.distanceTo(center) > radius) continue;
      if (this.isShotBlocked(origin, center)) continue;
      bestT = t;
      best = { enemy, point: closest, distance: t };
    }
    if (best) return best;
    // Ground / facade impact
    const groundT = direction.y < -0.02 ? -origin.y / direction.y : Infinity;
    if (groundT > 0 && groundT < maxDistance) {
      return { point: origin.clone().addScaledVector(direction, groundT), distance: groundT };
    }
    const point = origin.clone().addScaledVector(direction, Math.min(maxDistance, 90));
    return { point, distance: Math.min(maxDistance, 90) };
  }

  isShotBlocked(origin, target) {
    for (const collider of this.world.colliders) {
      const hit = segmentBoxHit(origin, target, collider, 0);
      if (hit !== null && hit > 0.02 && hit < 0.98) return true;
    }
    return false;
  }

  spawnLocalEnemies() {
    if (!this.isHost || !this.mission) return;
    this.clearEnemies();
    const sites = this.mission.shards;
    const guardBudget = Math.max(1, this.mission.guardBudget || sites.length);
    const droneBudget = Math.max(1, this.mission.droneBudget || sites.length);
    for (let i = 0; i < guardBudget; i += 1) {
      const site = sites[i % sites.length];
      const ring = Math.floor(i / sites.length);
      const angle = (i / guardBudget) * TAU + 0.7 + ring * 1.4;
      const radius = 4.2 + ring * 2.4;
      this.createGuard(
        site.x + Math.cos(angle) * radius,
        site.z + Math.sin(angle) * radius,
        `guard-${this.mission.contract}-${i}`,
      );
    }
    for (let i = 0; i < droneBudget; i += 1) {
      const site = sites[i % sites.length];
      const ring = Math.floor(i / sites.length);
      const angle = (i / droneBudget) * TAU - 0.5 + ring * 1.7;
      const radius = 6.4 + ring * 2.2;
      this.createDrone(
        site.x - Math.cos(angle) * radius,
        site.z - Math.sin(angle) * radius,
        `drone-${this.mission.contract}-${i}`,
        i,
      );
    }
  }

  createGuard(x, z, id) {
    const model = buildGuard();
    const point = { x, z };
    for (const collider of this.world.colliders) circleBoxResolve(point, 0.55, collider);
    const bounds = this.world.metro.bounds - 6;
    point.x = clamp(point.x, -bounds, bounds);
    point.z = clamp(point.z, -bounds, bounds);
    const shadow = makeBlobShadow(this.shadowTex, 1.9);
    shadow.position.set(point.x, 0.045, point.z);
    shadow.material.opacity = 0.7;
    model.group.position.set(point.x, 0, point.z);
    this.scene.add(model.group);
    this.scene.add(shadow);
    this.localEnemies.push({
      id,
      type: 'guard',
      x: point.x,
      y: 0,
      z: point.z,
      homeX: point.x,
      homeZ: point.z,
      yaw: Math.random() * TAU,
      health: 100,
      maxHealth: 100,
      alive: true,
      alert: false,
      fireTimer: 1.2 + Math.random() * 1.4,
      patrolPhase: Math.random() * TAU,
      orbitPhase: 0,
      model,
      group: model.group,
      shadow,
      moveSpeed: 0,
    });
  }

  createDrone(x, z, id, index) {
    const model = buildDrone();
    const shadow = makeBlobShadow(this.shadowTex, 1.2);
    shadow.position.set(x, 0.045, z);
    shadow.material.opacity = 0.42;
    model.group.position.set(x, 5.4, z);
    this.scene.add(model.group);
    this.scene.add(shadow);
    this.localEnemies.push({
      id,
      type: 'drone',
      x,
      y: 5.4,
      z,
      homeX: x,
      homeZ: z,
      yaw: 0,
      health: 80,
      maxHealth: 80,
      alive: true,
      alert: false,
      fireTimer: 1.8 + Math.random() * 1.5,
      patrolPhase: index * 1.7,
      orbitPhase: Math.random() * TAU,
      model,
      group: model.group,
      shadow,
      moveSpeed: 0,
    });
  }

  clearEnemies() {
    for (const enemy of this.localEnemies) {
      this.scene.remove(enemy.group);
      this.scene.remove(enemy.shadow);
      enemy.group.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material?.dispose?.();
        }
      });
      enemy.shadow.geometry?.dispose?.();
      enemy.shadow.material?.dispose?.();
    }
    this.localEnemies = [];
  }

  clearRemoteEnemies() {
    for (const enemy of this.remoteEnemies.values()) {
      this.scene.remove(enemy.group);
      this.scene.remove(enemy.shadow);
      enemy.group.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose?.());
          else obj.material?.dispose?.();
        }
      });
      enemy.shadow.geometry?.dispose?.();
      enemy.shadow.material?.dispose?.();
    }
    this.remoteEnemies.clear();
  }

  updateEnemies(dt, elapsed) {
    if (!this.isHost || !this.mission) return;
    // The central plaza is a safe zone: security units never engage a player
    // standing inside it, so respawns and menu reading are never a death trap.
    const inSafeZone = (pos) => Math.hypot(pos.x, pos.z - 1) < PLAZA_SAFE_RADIUS;
    const players = [];
    if (this.player?.alive && !inSafeZone(this.player.pos)) {
      players.push({ id: this.session?.selfId || 'solo', pos: this.player.pos, isLocal: true });
    }
    for (const remote of this.remotePlayers.values()) {
      if (remote.alive && !inSafeZone(remote.pos)) {
        players.push({ id: remote.id, pos: remote.pos, isLocal: false });
      }
    }

    let alerted = 0;
    for (const enemy of this.localEnemies) {
      if (!enemy.alive) continue;
      let target = null;
      let bestDistance = Infinity;
      for (const p of players) {
        const d = dist2D(enemy.x, enemy.z, p.pos.x, p.pos.z);
        if (d < bestDistance) {
          bestDistance = d;
          target = p;
        }
      }

      const detectRange = enemy.type === 'drone' ? 32 : 26;
      const leashRange = enemy.type === 'drone' ? 46 : 38;
      const homeDistance = target
        ? dist2D(enemy.homeX, enemy.homeZ, target.pos.x, target.pos.z)
        : Infinity;
      // Hysteresis keeps a unit engaged once alerted, but a leash stops guards
      // from chasing a speeding car across the entire district forever.
      const engagementRange = enemy.alert ? detectRange * 1.35 : detectRange;
      enemy.alert = !!target && homeDistance < leashRange && bestDistance < engagementRange;
      if (!this.completed && enemy.alert) alerted += 1;
      enemy.fireTimer -= dt;

      if (enemy.type === 'guard') {
        let speed = 0;
        let targetYaw = enemy.yaw;
        if (enemy.alert && target) {
          targetYaw = Math.atan2(target.pos.x - enemy.x, target.pos.z - enemy.z);
          const strafe = Math.sin(elapsed * 1.4 + enemy.patrolPhase) * 2.2;
          const dirX = (target.pos.x - enemy.x) / Math.max(1, bestDistance);
          const dirZ = (target.pos.z - enemy.z) / Math.max(1, bestDistance);
          let moveX = 0;
          let moveZ = 0;
          if (bestDistance > 10) {
            moveX = dirX;
            moveZ = dirZ;
          } else if (bestDistance < 6) {
            moveX = -dirX;
            moveZ = -dirZ;
          }
          moveX += -dirZ * strafe * 0.15;
          moveZ += dirX * strafe * 0.15;
          const len = Math.hypot(moveX, moveZ);
          if (len > 0.01) {
            speed = 4.4;
            enemy.x += (moveX / len) * speed * dt;
            enemy.z += (moveZ / len) * speed * dt;
          }
          const chest = new THREE.Vector3(target.pos.x, target.pos.y + 1.25, target.pos.z);
          const from = new THREE.Vector3(enemy.x, 1.25, enemy.z);
          const canSee = !this.isShotBlocked(from, chest);
          if (canSee && bestDistance < 25 && enemy.fireTimer <= 0 && !this.completed) {
            this.enemyFire(enemy, target, chest, from);
          }
        } else {
          const angle = elapsed * 0.32 + enemy.patrolPhase;
          const px = enemy.homeX + Math.cos(angle) * 5.2;
          const pz = enemy.homeZ + Math.sin(angle) * 5.2;
          const dx = px - enemy.x;
          const dz = pz - enemy.z;
          const d = Math.hypot(dx, dz);
          if (d > 0.6) {
            speed = 1.7;
            enemy.x += (dx / d) * speed * dt;
            enemy.z += (dz / d) * speed * dt;
            targetYaw = Math.atan2(dx, dz);
          }
        }
        const point = { x: enemy.x, z: enemy.z };
        for (const collider of this.world.colliders) circleBoxResolve(point, 0.45, collider);
        enemy.x = point.x;
        enemy.z = point.z;
        const bounds = this.world.metro.bounds - 5;
        enemy.x = clamp(enemy.x, -bounds, bounds);
        enemy.z = clamp(enemy.z, -bounds, bounds);
        enemy.moveSpeed = damp(enemy.moveSpeed, speed, 8, dt);
        enemy.yaw = smoothAngle(enemy.yaw, targetYaw, 7, dt);
        enemy.group.position.set(enemy.x, 0, enemy.z);
        enemy.group.rotation.y = enemy.yaw;
        enemy.shadow.position.set(enemy.x, 0.045, enemy.z);
        enemy.model.animate(dt, elapsed, enemy.moveSpeed, true, enemy.alert);
      } else {
        // Drones orbit their target at altitude, or their home when calm.
        const radius = enemy.alert ? 10.5 : 6.5;
        const centerX = enemy.alert && target ? target.pos.x : enemy.homeX;
        const centerZ = enemy.alert && target ? target.pos.z : enemy.homeZ;
        enemy.orbitPhase += dt * (enemy.alert ? 0.9 : 0.34);
        const desiredX = centerX + Math.cos(enemy.orbitPhase) * radius;
        const desiredZ = centerZ + Math.sin(enemy.orbitPhase) * radius;
        const desiredY = (enemy.alert ? 4.6 : 6.2) + Math.sin(elapsed * 1.5 + enemy.patrolPhase) * 0.7;
        enemy.x = damp(enemy.x, desiredX, 1.4, dt);
        enemy.z = damp(enemy.z, desiredZ, 1.4, dt);
        enemy.y = damp(enemy.y, desiredY, 1.8, dt);
        if (target) enemy.yaw = smoothAngle(enemy.yaw, Math.atan2(target.pos.x - enemy.x, target.pos.z - enemy.z), 5, dt);
        enemy.group.position.set(enemy.x, enemy.y, enemy.z);
        enemy.group.rotation.y = enemy.yaw;
        enemy.shadow.position.set(enemy.x, 0.045, enemy.z);
        enemy.shadow.material.opacity = 0.4;
        enemy.model.animate(dt, elapsed, enemy.alert);
        if (enemy.alert && target && bestDistance < 32 && enemy.fireTimer <= 0 && !this.completed) {
          const chest = new THREE.Vector3(target.pos.x, target.pos.y + 1.25, target.pos.z);
          const from = new THREE.Vector3(enemy.x, enemy.y, enemy.z);
          if (!this.isShotBlocked(from, chest)) this.enemyFire(enemy, target, chest, from);
        }
      }
    }
    this.alertCount = alerted;
  }

  enemyFire(enemy, target, targetPoint, from) {
    const isDrone = enemy.type === 'drone';
    enemy.fireTimer = (isDrone ? 1.8 : 1.35) + Math.random() * 1.25;
    const dir = targetPoint.clone().sub(from).normalize();
    const hit = Math.random() < (isDrone ? 0.56 : 0.66);
    const end = targetPoint.clone();
    if (!hit) {
      end.x += (Math.random() - 0.5) * 3.2;
      end.y += (Math.random() - 0.3) * 2;
      end.z += (Math.random() - 0.5) * 3.2;
    }
    this.effects.muzzleFlash(from, isDrone ? 0xff6a55 : 0xffb27a, dir);
    this.effects.tracer(from, end, isDrone ? 0xff5a75 : 0xffa36b);
    if (this.camera.position.distanceTo(from) < 42) this.audio.enemyShot();
    if (enemy.type === 'guard') enemy.model.flashTime = 0.08;
    this.network?.send('enemy-shot', {
      ox: from.x, oy: from.y, oz: from.z,
      ex: end.x, ey: end.y, ez: end.z,
      hit,
    });

    if (!hit) return;
    const amount = isDrone ? 5.5 : 7;
    if (target.isLocal) {
      this.damagePlayer(amount, enemy.id);
    } else {
      this.network?.send('hit', { target: target.id, amount, source: enemy.id });
    }
  }

  applyEnemyDamage(enemy, damage, byName) {
    if (!enemy || !enemy.alive) return;
    enemy.health -= damage;
    enemy.alert = true;
    const point = new THREE.Vector3(
      enemy.x,
      enemy.type === 'drone' ? enemy.y : 1.1,
      enemy.z,
    );
    this.effects.enemyHit(point, 0xff6a55);
    this.audio.enemyHit();
    if (enemy.health <= 0) this.killEnemy(enemy, byName);
  }

  killEnemy(enemy, byName) {
    if (!enemy.alive) return;
    enemy.alive = false;
    const point = new THREE.Vector3(enemy.x, enemy.type === 'drone' ? enemy.y : 1, enemy.z);
    this.effects.explosion(point, enemy.type === 'drone' ? 0xff5a75 : 0xff8b57, enemy.type === 'drone' ? 1.15 : 0.8);
    this.audio.explosion();
    this.scene.remove(enemy.group);
    this.scene.remove(enemy.shadow);
    if (this.mission) this.mission.score += 250;
    this.ui.feed(`Security unit neutralized by ${(byName || 'ALLY').toUpperCase()}.`, 'ok', 'COMBAT');
    this.network?.send('enemy-dead', {
      id: enemy.id,
      x: enemy.x,
      y: enemy.type === 'drone' ? enemy.y : 1,
      z: enemy.z,
      type: enemy.type,
    });
    this.sendFullState(true);
  }

  damagePlayer(amount, source) {
    const p = this.player;
    if (!p || !p.alive || this.status === 'result' || this.status === 'disconnected') return;
    const adjusted = this.currentMode === 'car' ? amount * 0.65 : amount;
    p.health = Math.max(0, p.health - adjusted);
    p.lastDamageAt = this.elapsed;
    this.ui.setVitals(p.health, p.stamina);
    this.ui.damage();
    this.audio.damage();
    this.cameraShake = Math.min(1.2, this.cameraShake + 0.32);
    if (p.health <= 0) this.die(source);
  }

  die(source) {
    const p = this.player;
    if (!p || !p.alive) return;
    p.alive = false;
    p.deathTimer = 4;
    p.health = 0;
    this.status = 'dead';
    this.mouseDown = false;
    this.aiming = false;
    this.keys.clear();
    if (this.currentMode === 'car') this.exitCar();
    this.ui.showDeath(4);
    this.ui.setCrosshair(false);
    this.ui.setInteraction('', false);
    this.ui.setVitals(0, p.stamina);
    this.ui.feed('Signal lost. Re-syncing neural link…', 'warn', 'SECURITY');
    if (this.localChar) this.localChar.group.visible = true;
    this.sendPlayerState(true);
  }

  respawn() {
    const p = this.player;
    if (!p) return;
    p.alive = true;
    p.health = 100;
    p.stamina = 100;
    p.ammo = MAG_SIZE;
    p.reserve = MAX_RESERVE;
    p.reloading = 0;
    p.deathTimer = 0;
    p.velY = 0;
    p.grounded = true;
    p.pos.set(this.world.spawn.x + (this.remotePlayers.size ? 1.4 : 0), 0, this.world.spawn.z);
    this.cameraYaw = this.world.spawn.rot;
    this.cameraPitch = -0.08;
    this.currentMode = 'foot';
    this.localCar = null;
    this.ui.hideDeath();
    this.ui.setMode('foot');
    this.ui.setVitals(100, 100);
    this.ui.setAmmo(MAG_SIZE, MAX_RESERVE, 0);
    this.ui.setCrosshair(true);
    this.status = this.mission?.phase === 'complete' ? 'result' : 'playing';
    if (this.localChar) this.localChar.group.visible = true;
    if (this.localCharShadow) this.localCharShadow.visible = true;
    this.ui.feed('Neural link restored. Back in the district.', 'ok', 'SYSTEM');
    this.sendPlayerState(true);
  }

  updateRemoteEnemies(dt, elapsed) {
    if (this.isHost) return;
    for (const enemy of this.remoteEnemies.values()) {
      if (!enemy.alive) continue;
      enemy.pos.lerp(enemy.target, 1 - Math.exp(-dt * 8));
      enemy.x = enemy.pos.x;
      enemy.y = enemy.pos.y;
      enemy.z = enemy.pos.z;
      enemy.yaw = smoothAngle(enemy.yaw, enemy.targetYaw, 7, dt);
      enemy.group.position.copy(enemy.pos);
      enemy.group.rotation.y = enemy.yaw;
      if (enemy.type === 'drone') {
        enemy.shadow.position.set(enemy.pos.x, 0.045, enemy.pos.z);
        enemy.model.animate(dt, elapsed, enemy.alert);
      } else {
        enemy.shadow.position.set(enemy.pos.x, 0.045, enemy.pos.z);
        enemy.model.animate(dt, elapsed, enemy.moveSpeed, true, enemy.alert);
      }
    }
  }

  syncRemoteEnemies(list) {
    if (!Array.isArray(list)) return;
    const seen = new Set();
    for (const entry of list) {
      if (!entry || !entry.id) continue;
      seen.add(entry.id);
      let enemy = this.remoteEnemies.get(entry.id);
      if (!enemy) {
        const model = entry.type === 'drone' ? buildDrone() : buildGuard();
        const shadow = makeBlobShadow(this.shadowTex, entry.type === 'drone' ? 1.2 : 1.9);
        shadow.material.opacity = entry.type === 'drone' ? 0.4 : 0.65;
        const group = model.group;
        const pos = new THREE.Vector3(entry.x, entry.y, entry.z);
        group.position.copy(pos);
        this.scene.add(group);
        this.scene.add(shadow);
        enemy = {
          id: entry.id,
          type: entry.type,
          model,
          group,
          shadow,
          pos,
          target: pos.clone(),
          yaw: entry.ry || 0,
          targetYaw: entry.ry || 0,
          health: entry.health,
          alive: true,
          alert: !!entry.alert,
          moveSpeed: 0,
          x: entry.x,
          y: entry.y,
          z: entry.z,
        };
        this.remoteEnemies.set(entry.id, enemy);
      }
      enemy.target.set(entry.x, entry.y, entry.z);
      enemy.targetYaw = entry.ry || 0;
      enemy.health = entry.health;
      enemy.alert = !!entry.alert;
      enemy.alive = true;
      enemy.moveSpeed = enemy.type === 'drone' ? 0 : 3.2;
    }
    for (const [id, enemy] of this.remoteEnemies) {
      if (seen.has(id)) continue;
      this.scene.remove(enemy.group);
      this.scene.remove(enemy.shadow);
      this.remoteEnemies.delete(id);
    }
    this.remoteAlertCount = list.filter((e) => e.alert).length;
  }

  applyStateCars(cars) {
    if (!Array.isArray(cars)) return;
    for (const entry of cars) {
      const car = this.cars.find((c) => c.id === entry.id);
      if (!car) continue;
      if (car === this.localCar) continue;
      if (entry.o === this.session?.selfId) continue;
      if (!car.occupiedBy || !this.remotePlayers.has(car.occupiedBy)) {
        car.x = entry.x;
        car.z = entry.z;
        car.yaw = entry.yaw;
      }
      car.occupiedBy = entry.o || null;
    }
  }

  handleState(msg) {
    if (this.isHost || !msg || !msg.mission) return;
    if (msg.from && this.session?.hostId && msg.from !== this.session.hostId) return;
    if (msg.weather && msg.weather !== this.world?.weather?.kind) {
      this.applyWeather(msg.weather, true);
    }
    const incoming = msg.mission;
    const previousContract = this.mission?.contract;
    const previousPhase = this.mission?.phase;
    this.mission = {
      ...incoming,
      shards: (incoming.shards || []).map((s) => ({ ...s })),
      extraction: { ...(incoming.extraction || this.world.extraction) },
    };
    this.syncShardVisuals();
    this.applyStateCars(msg.cars);
    this.syncRemoteEnemies(msg.enemies);
    this.alertCount = msg.alert ?? this.remoteAlertCount ?? 0;
    const phase = this.mission.phase;
    const contractName = this.mission.contractName || 'GHOST PROTOCOL';

    if (phase === 'complete' && !this.completed) {
      this.completed = true;
      this.status = 'result';
      this.ignoreUnlock = true;
      this.mouseDown = false;
      this.aiming = false;
      this.ui.setCrosshair(false);
      this.ui.setInteraction('', false);
      this.ui.hideDeath();
      this.ui.showMissionBanner('CONTRACT COMPLETE', `${contractName} SECURED`, 'EXFIL', 4600);
      this.ui.showResult({
        time: this.mission.elapsed,
        score: this.mission.score,
        countdown: this.mission.completeIn ?? 12,
        caches: this.mission.shards?.length || 3,
        contractName,
      });
      if (document.pointerLockElement) document.exitPointerLock();
    } else if (phase !== 'complete' && this.completed) {
      this.completed = false;
      this.ignoreUnlock = false;
      this.ui.hideResult();
      if (this.player?.alive) {
        this.status = this.paused ? 'paused' : 'playing';
        this.ui.setLockHint(true);
      }
    }

    if (previousContract !== undefined && previousContract !== this.mission.contract) {
      this.ui.showMissionBanner(
        contractName,
        this.mission.contractTag || 'SECURE THE DATA CACHES',
        'NEW CONTRACT',
        4200,
      );
      this.ui.feed(`New contract — ${contractName}. ${this.mission.shards?.length || 3} caches are live.`, 'ok', 'CONTRACT');
    } else if (previousContract === undefined && phase === 'collect') {
      this.ui.showMissionBanner(
        contractName,
        this.mission.contractTag || 'SECURE THE DATA CACHES',
        'CO-OP CONTRACT',
        4200,
      );
    }
    if (previousPhase !== phase && phase === 'extract') {
      this.ui.showMissionBanner('EXTRACTION READY', 'RETURN TO THE PLAZA AS A TEAM', 'ALL CACHES SECURED', 5200);
    }
  }

  sendFullState(force = false) {
    if (!this.isHost || !this.session?.online || !this.network?.connected || !this.mission) return;
    const now = performance.now();
    if (!force && now - (this.lastFullStateAt || 0) < 90) return;
    this.lastFullStateAt = now;
    this.network.send('state', {
      mission: {
        phase: this.mission.phase,
        shards: this.mission.shards.map((s) => ({ id: s.id, x: s.x, z: s.z, name: s.name, collected: s.collected })),
        elapsed: this.mission.elapsed,
        score: this.mission.score,
        extraction: { x: this.mission.extraction.x, z: this.mission.extraction.z },
        extractProgress: this.mission.extractProgress,
        extractSeconds: this.mission.extractSeconds,
        completeIn: this.mission.completeIn,
        contract: this.mission.contract,
        contractName: this.mission.contractName,
        contractTag: this.mission.contractTag,
        contractIndex: this.mission.contractIndex,
        contractTotal: this.mission.contractTotal,
        scoreBonus: this.mission.scoreBonus,
      },
      weather: this.world?.weather?.kind || 'rain',
      enemies: this.localEnemies.filter((e) => e.alive).map((e) => ({
        id: e.id,
        type: e.type,
        x: e.x,
        y: e.y,
        z: e.z,
        ry: e.yaw,
        health: e.health,
        alert: e.alert,
      })),
      cars: this.cars.map((car) => ({
        id: car.id, x: car.x, z: car.z, yaw: car.yaw, o: car.occupiedBy,
      })),
      alert: this.alertCount || 0,
    });
  }

  sendPlayerState(force = false) {
    if (!this.session?.online || !this.network?.connected || !this.player) return;
    const now = performance.now();
    if (!force && now - (this.lastPlayerStateAt || 0) < 85) return;
    this.lastPlayerStateAt = now;
    const p = this.player;
    const car = this.localCar;
    this.network.send('player-state', {
      x: car ? car.x : p.pos.x,
      y: car ? 0 : p.pos.y,
      z: car ? car.z : p.pos.z,
      ry: car ? car.yaw : p.bodyYaw,
      inCar: !!car,
      carId: car?.id || null,
      speed: car ? car.speed : p.moveSpeed,
      boosting: car ? (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) && car.boost > 0.05 && car.speed > 1 : false,
      health: p.health,
      alive: p.alive,
      name: this.myName,
      color: this.myColor,
    });
  }

  ensureRemote(id, info = {}) {
    if (!id || id === this.session?.selfId) return null;
    let remote = this.remotePlayers.get(id);
    if (remote) {
      if (info.name) remote.name = info.name;
      if (info.color !== undefined) remote.color = info.color;
      return remote;
    }
    const known = this.network?.players?.get(id);
    const color = info.color ?? known?.color ?? 0xff2d95;
    const name = info.name || known?.name || 'ALLY';
    const char = buildCharacter({ color, skin: 0xc99a79 });
    const shadow = makeBlobShadow(this.shadowTex, 2.1);
    shadow.material.opacity = 0.65;
    const pos = new THREE.Vector3(this.world.spawn.x + 2, 0, this.world.spawn.z);
    char.group.position.copy(pos);
    this.scene.add(char.group);
    this.scene.add(shadow);
    remote = {
      id,
      name,
      color,
      char,
      shadow,
      pos,
      target: pos.clone(),
      bodyYaw: 0,
      targetYaw: 0,
      inCar: false,
      carId: null,
      speed: 0,
      boosting: false,
      health: 100,
      alive: true,
      moveSpeed: 0,
    };
    this.remotePlayers.set(id, remote);
    return remote;
  }

  handlePlayerState(msg) {
    if (!msg.from || msg.from === this.session?.selfId) return;
    const remote = this.ensureRemote(msg.from, { name: msg.name, color: msg.color });
    if (!remote) return;
    remote.target.set(msg.x || 0, msg.y || 0, msg.z || 0);
    remote.targetYaw = msg.ry || 0;
    remote.inCar = !!msg.inCar;
    remote.speed = msg.speed || 0;
    remote.boosting = !!msg.boosting;
    remote.health = msg.health ?? 100;
    remote.alive = msg.alive !== false;

    if (this.isHost) {
      const previousCar = remote.carId;
      remote.carId = msg.carId || null;
      if (previousCar && previousCar !== remote.carId) {
        const car = this.cars.find((c) => c.id === previousCar);
        if (car && car.occupiedBy === remote.id) car.occupiedBy = null;
      }
      if (remote.carId) {
        const car = this.cars.find((c) => c.id === remote.carId);
        if (car) {
          car.occupiedBy = remote.id;
          car.x = remote.target.x;
          car.z = remote.target.z;
          car.yaw = remote.targetYaw;
        }
      }
    } else if (this.network?.hostId === remote.id) {
      remote.carId = msg.carId || null;
    }
  }

  onNetMessage(msg) {
    if (!this.session || !msg || !msg.from) return;
    switch (msg.type) {
      case 'player-state':
        this.handlePlayerState(msg);
        break;
      case 'state':
        if (!this.isHost) this.handleState(msg);
        break;
      case 'weather':
        if (!this.isHost && msg.weather) this.applyWeather(msg.weather, true);
        break;
      case 'weather-request':
        if (this.isHost && msg.weather) {
          const preset = this.world.getWeatherPreset(msg.weather);
          if (preset) {
            this.applyWeather(preset.id, true);
            this.network?.send('weather', { weather: preset.id, by: this.session?.selfId, name: this.myName });
          }
        }
        break;
      case 'shard-request':
        if (this.isHost) this.handleShardRequest(msg);
        break;
      case 'shard-collected':
        if (!this.isHost) this.handleRemoteShardCollected(msg);
        break;
      case 'shot':
        if (this.isHost) this.handleRemoteShot(msg);
        break;
      case 'enemy-shot':
        if (!this.isHost) this.handleEnemyShot(msg);
        break;
      case 'enemy-dead':
        if (!this.isHost) this.handleEnemyDead(msg);
        break;
      case 'hit':
        if (msg.target === this.session.selfId) this.damagePlayer(msg.amount || 5, msg.source);
        break;
      case 'chat': {
        const text = String(msg.text || '').replace(/[<>]/g, '').trim().slice(0, 120);
        if (text) this.ui.chat(msg.name || this.remotePlayers.get(msg.from)?.name || 'ALLY', text, msg.color ?? 0xff2d95);
        break;
      }
      case 'map-ping':
        this.addPing(
          msg.id || `${msg.from}-${this.elapsed}`,
          msg.name || this.remotePlayers.get(msg.from)?.name || 'ALLY',
          msg.x,
          msg.z,
          msg.color ?? 0xff2d95,
        );
        break;
      case 'redeploy':
        if (this.isHost && this.mission?.phase === 'complete') this.resetMission();
        break;
      default:
        break;
    }
  }

  handleShardRequest(msg) {
    if (!this.isHost || !this.mission || this.mission.phase !== 'collect') return;
    const remote = this.remotePlayers.get(msg.from);
    if (!remote || !remote.alive) return;
    const shard = this.mission.shards.find((s) => s.id === msg.shardId);
    if (!shard || shard.collected) return;
    if (dist2D(remote.pos.x, remote.pos.z, shard.x, shard.z) > 7) return;
    this.applyShardCollected(shard, remote.name, true);
    this.mission.score += 500;
    this.network?.send('shard-collected', {
      shardId: shard.id,
      by: remote.id,
      name: remote.name,
      all: this.mission.shards.every((s) => s.collected),
    });
    if (this.mission.shards.every((s) => s.collected)) {
      this.mission.phase = 'extract';
      this.world.extractionGroup.visible = true;
      this.ui.showMissionBanner('EXTRACTION READY', 'RETURN TO THE PLAZA AS A TEAM', 'ALL CACHES SECURED', 5200);
      this.ui.feed('All caches secured. Extraction gate is live at the plaza.', 'ok', 'EXTRACT');
    }
    this.sendFullState(true);
  }

  handleRemoteShardCollected(msg) {
    if (this.isHost || !this.mission) return;
    const shard = this.mission.shards.find((s) => s.id === msg.shardId);
    if (!shard) return;
    this.applyShardCollected(shard, msg.name || 'ALLY', true);
    if (msg.all || this.mission.shards.every((s) => s.collected)) {
      if (this.mission.phase === 'collect') this.mission.phase = 'extract';
      this.world.extractionGroup.visible = true;
    }
  }

  handleRemoteShot(msg) {
    if (!this.isHost) return;
    const enemy = this.localEnemies.find((e) => e.id === msg.enemyId && e.alive);
    if (!enemy) return;
    const ox = Number(msg.ox) || 0;
    const oz = Number(msg.oz) || 0;
    const ex = Number(msg.ex) || 0;
    const ez = Number(msg.ez) || 0;
    if (dist2D(ox, oz, enemy.x, enemy.z) > 70) return;
    if (pointSegmentDistance(enemy.x, enemy.z, ox, oz, ex, ez) > 2.3) return;
    const from = new THREE.Vector3(ox, Number(msg.oy) || 1.2, oz);
    const to = new THREE.Vector3(enemy.x, enemy.type === 'drone' ? enemy.y : 1.1, enemy.z);
    if (this.isShotBlocked(from, to)) return;
    this.effects.tracer(from, to, 0xfff1c9);
    this.applyEnemyDamage(enemy, WEAPON_DAMAGE, this.remotePlayers.get(msg.from)?.name || 'ALLY');
  }

  handleEnemyShot(msg) {
    const from = new THREE.Vector3(msg.ox, msg.oy, msg.oz);
    const to = new THREE.Vector3(msg.ex, msg.ey, msg.ez);
    this.effects.tracer(from, to, 0xff6b6b);
    if (this.camera.position.distanceTo(from) < 46) this.audio.enemyShot();
    if (!msg.hit) this.effects.bulletImpact(to, new THREE.Vector3(0, 1, 0), 0xff9a7a);
  }

  handleEnemyDead(msg) {
    if (this.isHost) return;
    const enemy = this.remoteEnemies.get(msg.id);
    if (enemy) {
      this.effects.explosion(
        new THREE.Vector3(msg.x, msg.y, msg.z),
        msg.type === 'drone' ? 0xff5a75 : 0xff8b57,
        msg.type === 'drone' ? 1.15 : 0.8,
      );
      this.audio.explosion();
      this.scene.remove(enemy.group);
      this.scene.remove(enemy.shadow);
      this.remoteEnemies.delete(msg.id);
    }
  }

  onPlayerJoin(player) {
    if (!player || player.id === this.session?.selfId) return;
    this.ensureRemote(player.id, player);
    this.updateRoster();
    this.ui.feed(`${(player.name || 'ALLY').toUpperCase()} linked into the district.`, 'ok', 'LINK');
    this.ui.toast(`${player.name || 'ALLY'} joined. Hold the city together.`, 'ok', 3200);
    if (this.isHost) this.sendFullState(true);
  }

  onPlayerLeave(payload) {
    const id = payload?.id;
    if (!id) return;
    let remote = this.remotePlayers.get(id);
    if (remote) {
      for (const car of this.cars) {
        if (car.occupiedBy === id) car.occupiedBy = null;
      }
      this.scene.remove(remote.char.group);
      this.scene.remove(remote.shadow);
      this.remotePlayers.delete(id);
    }
    if (this.network) this.network.players.delete(id);
    this.updateRoster();
    const name = payload?.player?.name || remote?.name || 'ALLY';
    this.ui.feed(`${name.toUpperCase()} disconnected from the district.`, 'warn', 'LINK');
    this.ui.toast(`${name} left the district.`, 'warn', 3000);
    if (this.isHost) this.sendFullState(true);
  }

  onHostChanged(hostId) {
    if (!this.session) return;
    this.session.hostId = hostId;
    const becameHost = this.network?.isHost;
    if (becameHost && !this.isHost) {
      this.isHost = true;
      this.clearRemoteEnemies();
      if (!this.mission) this.startMission();
      else {
        this.syncShardVisuals();
        this.spawnLocalEnemies();
        this.sendFullState(true);
      }
      this.ui.toast('You are now hosting the city. Keep the contract alive.', 'info', 5000);
      this.ui.feed('Host migrated to you. Security traffic re-synced.', 'warn', 'NETWORK');
    } else if (!becameHost && this.isHost) {
      this.isHost = false;
      this.clearEnemies();
      this.ui.toast('Host migrated to your partner.', 'info', 4000);
    }
    this.updateRoster();
  }

  updateRoster() {
    if (!this.session) return;
    this.ui.updateRoster(
      { id: this.session.selfId, name: this.myName, color: this.myColor },
      [...(this.network?.players.values() || [])],
      this.session.hostId,
    );
  }

  updateRemotes(dt, elapsed) {
    for (const remote of this.remotePlayers.values()) {
      const previousX = remote.pos.x;
      const previousZ = remote.pos.z;
      remote.pos.lerp(remote.target, 1 - Math.exp(-dt * 9));
      remote.bodyYaw = smoothAngle(remote.bodyYaw, remote.targetYaw, 9, dt);
      const moved = Math.hypot(remote.pos.x - previousX, remote.pos.z - previousZ) / Math.max(dt, 0.001);
      remote.moveSpeed = damp(remote.moveSpeed || 0, Math.min(moved, 12), 8, dt);

      if (remote.inCar) {
        remote.char.group.visible = false;
        remote.shadow.visible = false;
      } else {
        remote.char.group.visible = remote.alive;
        remote.shadow.visible = remote.alive;
        remote.char.group.position.copy(remote.pos);
        remote.char.group.rotation.y = remote.bodyYaw;
        remote.char.animate(dt, elapsed, remote.moveSpeed, true, false);
        remote.shadow.position.set(remote.pos.x, 0.045, remote.pos.z);
      }
      if (!remote.alive) {
        remote.char.group.visible = false;
        remote.shadow.visible = false;
      }
    }
  }

  updatePings() {
    this.pings = this.pings.filter((p) => this.elapsed - p.born < 8);
  }

  updateHUD(dt, elapsed) {
    if (!this.player) return;
    this.hudTick += dt;
    this.ui.setVitals(this.player.health, this.player.stamina);
    if (this.currentMode === 'foot') this.ui.setAmmo(this.player.ammo, this.player.reserve, this.player.reloading > 0 ? 1 - this.player.reloading / 1.35 : 0);

    const width = this.renderer.domElement.clientWidth || window.innerWidth;
    const height = this.renderer.domElement.clientHeight || window.innerHeight;
    if (this.mission) {
      this.ui.setMission(this.mission, this.objectiveDistance());
    }
    this.ui.setAlert(this.isHost ? (this.alertCount || 0) : (this.remoteAlertCount || 0));
    this.ui.updateRemoteLabels(
      this.camera,
      width,
      height,
      [...this.remotePlayers.values()].map((r) => ({
        id: r.id,
        name: r.name,
        cssColor: cssColor(r.color),
        position: r.pos,
        inCar: r.inCar,
        visible: r.alive,
      })),
    );
    this.ui.updatePingLabels(this.camera, width, height, this.pings);

    const markers = [];
    if (this.mission) {
      for (const shard of this.mission.shards) {
        if (shard.collected) continue;
        markers.push({
          id: `shard-${shard.id}`,
          position: new THREE.Vector3(shard.x, 2.2, shard.z),
          label: 'DATA CACHE',
          className: 'world-marker--cache',
        });
      }
      if (this.mission.phase === 'extract' || this.mission.phase === 'extracting' || this.mission.phase === 'complete') {
        markers.push({
          id: 'extraction-marker',
          position: new THREE.Vector3(this.mission.extraction.x, 2.4, this.mission.extraction.z),
          label: 'EXTRACTION',
          className: 'world-marker--extract',
        });
      }
    }
    this.ui.updateLabels(this.camera, width, height, markers, dt);

    if (this.hudTick > 0.045) {
      this.hudTick = 0;
      const enemies = this.isHost
        ? this.localEnemies.filter((e) => e.alive)
        : [...this.remoteEnemies.values()].filter((e) => e.alive);
      this.ui.drawMinimap(
        this.world,
        { x: this.player.pos.x, z: this.player.pos.z, rot: this.currentMode === 'car' && this.localCar ? this.localCar.yaw : this.player.bodyYaw },
        [...this.remotePlayers.values()].map((r) => ({
          x: r.pos.x,
          z: r.pos.z,
          rot: r.bodyYaw,
          colorHex: cssColor(r.color),
        })),
        this.mission,
        enemies.map((e) => ({ x: e.x, z: e.z })),
        this.pings,
        performance.now(),
      );
    }

    if (performance.now() - this.lastFpsUpdate > 700) {
      this.lastFpsUpdate = performance.now();
      this.ui.setFps(this.fps, this.network?.latency ?? null);
    }

    const locked = document.pointerLockElement === this.canvas;
    this.ui.setLockHint(!locked && this.status === 'playing' && !this.chatOpen && !this.controlsOpen);
    if (this.status === 'dead' || this.status === 'result' || this.status === 'disconnected' || this.paused || this.chatOpen) {
      this.ui.setCrosshair(false);
    }
  }

  objectiveDistance() {
    if (!this.mission || !this.player) return Infinity;
    if (this.mission.phase === 'collect') {
      let best = Infinity;
      for (const shard of this.mission.shards) {
        if (shard.collected) continue;
        best = Math.min(best, dist2D(this.player.pos.x, this.player.pos.z, shard.x, shard.z));
      }
      return best;
    }
    if (this.mission.phase === 'extract' || this.mission.phase === 'extracting') {
      return dist2D(this.player.pos.x, this.player.pos.z, this.mission.extraction.x, this.mission.extraction.z);
    }
    return 0;
  }

  positionMenuCamera(dt) {
    this.menuAngle += dt * 0.028;
    const radius = 92;
    this.camera.position.set(
      Math.sin(this.menuAngle) * radius,
      30 + Math.sin(this.menuAngle * 0.7) * 8,
      Math.cos(this.menuAngle) * radius,
    );
    this.camera.lookAt(0, 15, 0);
    this.camera.fov = 62;
    this.camera.updateProjectionMatrix();
  }

  updateNetworking(dt) {
    if (!this.session?.online || !this.network?.connected) return;
    this.playerStateTimer += dt;
    if (this.playerStateTimer > 0.08) {
      this.playerStateTimer = 0;
      this.sendPlayerState();
    }
  }

  copyInvite() {
    const code = this.session?.roomCode;
    if (!code) {
      this.ui.toast('Solo patrols have no room code. Host a city to invite a partner.', 'info', 3600);
      return;
    }
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('room', code);
    const text = url.toString();
    const fallback = () => {
      const area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
        this.ui.toast('Invite link copied. Send it to your partner.', 'ok', 2800);
      } catch {
        this.ui.toast(`Room code: ${code}`, 'info', 5000);
      }
      area.remove();
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => this.ui.toast('Invite link copied. Send it to your partner.', 'ok', 2800))
        .catch(fallback);
    } else {
      fallback();
    }
  }

  leaveGame() {
    this.ui.setPaused(false);
    this.ui.hideDisconnect();
    this.ui.hideResult();
    this.ui.hideDeath();
    this.ui.setControls(false);
    this.keys.clear();
    this.mouseDown = false;
    this.aiming = false;
    this.session = null;
    this.status = 'menu';
    this.ignoreUnlock = true;
    this.network?.close();
    this.network = null;
    window.location.href = window.location.pathname;
  }

  update(dt, elapsed, fps) {
    this.elapsed = elapsed;
    if (Number.isFinite(fps) && fps > 1) this.fps = fps;
    if (!this.session || this.status === 'menu') {
      this.positionMenuCamera(dt);
      return;
    }
    if (this.status === 'disconnected') return;

    const frozen = (this.paused || this.chatOpen) && !this.session.online;
    if (frozen) {
      this.updateCamera(dt, elapsed);
      this.updateHUD(dt, elapsed);
      this.ui.setLockHint(false);
      return;
    }

    this.updateRemotes(dt, elapsed);
    this.updatePlayer(dt, elapsed);
    if (this.currentMode === 'car') this.updateVehicle(dt, elapsed);
    this.updateCamera(dt, elapsed);
    this.updateWeapon(dt, elapsed);
    this.updateInteractions();
    if (this.isHost) this.updateEnemies(dt, elapsed);
    else this.updateRemoteEnemies(dt, elapsed);
    this.updateMission(dt, elapsed);
    this.updateCars(dt);
    this.updateShardVisuals(dt, elapsed);
    this.updatePings();
    this.updateNetworking(dt);
    this.updateHUD(dt, elapsed);
  }
}
