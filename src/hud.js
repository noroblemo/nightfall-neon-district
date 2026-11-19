import { clamp, formatTime, formatNumber, projectToScreen, TAU } from './utils.js';

const $ = (id) => document.getElementById(id);
const cache = new Map();
const setText = (el, value) => {
  if (!el) return;
  if (cache.get(el) === value) return;
  cache.set(el, value);
  el.textContent = value;
};
const fmtDistance = (meters) => {
  if (!Number.isFinite(meters)) return '— M';
  if (meters < 1000) return `${Math.max(0, Math.round(meters))} M`;
  return `${(meters / 1000).toFixed(2)} KM`;
};

export class UI {
  constructor() {
    this.loading = $('loading');
    this.loadingBar = $('loadingBar');
    this.loadingStatus = $('loadingStatus');
    this.landing = $('landing');
    this.hud = $('hud');
    this.pauseOverlay = $('pauseOverlay');
    this.deathOverlay = $('deathOverlay');
    this.resultOverlay = $('resultOverlay');
    this.controlsModal = $('controlsModal');
    this.disconnectOverlay = $('disconnectOverlay');
    this.feedEl = $('feed');
    this.toastStack = $('toastStack');
    this.worldLabels = $('worldLabels');
    this.markers = new Map();
    this.minimapCache = null;
    this.minimapTime = 0;
    this.minimapCanvas = $('minimap');
    this.minimapCtx = this.minimapCanvas.getContext('2d');
    this.speedoCanvas = $('speedoCanvas');
    this.speedoCtx = this.speedoCanvas.getContext('2d');
    this.lastSpeed = -1;
    this.lastBoost = -1;
    this.missionBannerTimer = null;
    this.damageTimer = null;
    this.feedItems = [];
    this.isChatOpen = false;
  }

  setLoading(progress, text) {
    if (this.loadingBar) this.loadingBar.style.width = `${clamp(progress, 0, 1) * 100}%`;
    if (text && this.loadingStatus) this.loadingStatus.textContent = text;
  }

  finishLoading() {
    this.loading?.classList.add('is-done');
    setTimeout(() => this.loading?.classList.add('hidden'), 800);
  }

  showLanding() {
    this.landing?.classList.remove('hidden');
    this.hud?.classList.add('hidden');
  }

  enterGame() {
    this.landing?.classList.add('hidden');
    this.hud?.classList.remove('hidden');
    this.pauseOverlay?.classList.add('hidden');
    this.controlsModal?.classList.add('hidden');
    this.disconnectOverlay?.classList.add('hidden');
  }

  setServerStatus(state, text) {
    const badge = $('serverBadge');
    if (!badge) return;
    badge.dataset.state = state;
    setText($('serverBadgeText'), text);
    const note = $('connectionText');
    if (state === 'online') {
      note.textContent = 'Dedicated relay online — host a city, then share the code.';
    } else if (state === 'p2p') {
      note.textContent = 'Peer-to-peer mode — host a city, share the code, and keep this tab open.';
    } else if (state === 'offline') {
      note.textContent = 'Static build detected — online play uses encrypted WebRTC peer links.';
    }
  }

  showStartError(message) {
    const el = $('startError');
    if (!el) return;
    el.textContent = message || '';
  }

  setBusy(busy, message = 'LINKING TO THE DISTRICT') {
    const ids = ['hostBtn', 'joinBtn', 'soloBtn'];
    for (const id of ids) {
      const el = $(id);
      if (el) el.disabled = busy;
    }
    const host = $('hostBtn');
    if (host) {
      const strong = host.querySelector('strong');
      if (strong) strong.textContent = busy ? message : 'HOST THE CITY';
    }
    if (busy) this.showStartError('');
  }

  setName(name) {
    const el = $('nameInput');
    if (el) el.value = name;
    setText($('vitalsName'), name);
    setText($('vitalsAvatar'), name.slice(0, 1).toUpperCase());
  }

  setRoomCode(code, isServer) {
    setText($('roomCode'), code || 'SOLO');
    setText($('networkLatency'), isServer ? 'LINKING' : 'P2P');
  }

  setLatency(value, fps) {
    const label = value === null || value === undefined ? 'P2P' : `${Math.round(value)} MS`;
    setText($('networkLatency'), fps ? `${label} · ${fps} FPS` : label);
  }

  updateRemoteLabels(camera, width, height, remotes) {
    const active = new Set();
    for (const remote of remotes) {
      if (!remote.visible || !remote.position) continue;
      const id = `remote-${remote.id}`;
      active.add(id);
      let entry = this.markers.get(id);
      if (!entry) {
        const el = document.createElement('div');
        el.className = 'remote-label';
        const name = document.createElement('div');
        name.className = 'remote-label__name';
        name.textContent = (remote.name || 'ALLY').toUpperCase();
        name.style.color = remote.cssColor || '#ff8ac1';
        name.style.borderBottomColor = remote.cssColor || '#ff2d95';
        const diamond = document.createElement('div');
        diamond.className = 'remote-label__diamond';
        diamond.style.background = remote.cssColor || '#ff2d95';
        diamond.style.boxShadow = `0 0 8px ${remote.cssColor || '#ff2d95'}`;
        el.append(name, diamond);
        this.worldLabels.append(el);
        entry = { el };
        this.markers.set(id, entry);
      }
      const target = remote.position.clone();
      target.y += remote.inCar ? 2.4 : 2.1;
      const screen = projectToScreen(target, camera, width, height);
      const onScreen = screen.visible && screen.x > 0 && screen.x < width && screen.y > 0 && screen.y < height;
      entry.el.style.display = onScreen ? '' : 'none';
      if (onScreen) {
        entry.el.style.left = `${screen.x}px`;
        entry.el.style.top = `${screen.y}px`;
      }
    }
    for (const [id, entry] of this.markers) {
      if (id.startsWith('remote-') && !active.has(id)) {
        entry.el.remove();
        this.markers.delete(id);
      }
    }
  }

  updatePingLabels(camera, width, height, pings) {
    const active = new Set();
    for (const ping of pings) {
      const id = `ping-${ping.id}`;
      active.add(id);
      let entry = this.markers.get(id);
      if (!entry) {
        const el = document.createElement('div');
        el.className = 'ping-label';
        const ring = document.createElement('div');
        ring.className = 'ping-label__ring';
        const label = document.createElement('span');
        label.textContent = `${(ping.name || 'ALLY').toUpperCase()} // HERE`;
        el.append(ring, label);
        this.worldLabels.append(el);
        entry = { el };
        this.markers.set(id, entry);
      }
      const screen = projectToScreen(ping.position, camera, width, height);
      const onScreen = screen.visible && screen.x > 0 && screen.x < width && screen.y > 0 && screen.y < height;
      entry.el.style.display = onScreen ? '' : 'none';
      if (onScreen) {
        entry.el.style.left = `${screen.x}px`;
        entry.el.style.top = `${screen.y}px`;
      }
    }
    for (const [id, entry] of this.markers) {
      if (id.startsWith('ping-') && !active.has(id)) {
        entry.el.remove();
        this.markers.delete(id);
      }
    }
  }

  updateRoster(self, players, hostId) {
    const el = $('playerList');
    if (!el) return;
    el.replaceChildren();
    const all = [{ ...self, self: true }, ...players];
    for (const p of all) {
      const row = document.createElement('div');
      row.className = `player-chip${p.self ? ' is-self' : ''}`;
      const dot = document.createElement('i');
      dot.style.background = `#${(p.color ?? 0x4df4ff).toString(16).padStart(6, '0')}`;
      dot.style.color = dot.style.background;
      const name = document.createElement('span');
      name.textContent = p.name || 'OPERATIVE';
      const role = document.createElement('b');
      role.textContent = p.self ? 'YOU' : (p.id === hostId ? 'HOST' : 'ALLY');
      row.append(dot, name, role);
      el.append(row);
    }
  }

  showMissionBanner(title, sub, tag = 'NEW CONTRACT', duration = 4200) {
    const el = $('missionBanner');
    if (!el) return;
    el.querySelector('strong').textContent = title;
    el.querySelector('small').textContent = sub;
    el.querySelector('.mission-banner__tag').textContent = tag;
    el.classList.add('show');
    clearTimeout(this.missionBannerTimer);
    this.missionBannerTimer = setTimeout(() => el.classList.remove('show'), duration);
  }

  toast(text, level = 'info', duration = 3200) {
    if (!this.toastStack) return;
    const el = document.createElement('div');
    el.className = `toast toast--${level}`;
    el.textContent = text;
    this.toastStack.append(el);
    while (this.toastStack.children.length > 4) this.toastStack.firstElementChild.remove();
    setTimeout(() => {
      el.classList.add('is-out');
      setTimeout(() => el.remove(), 300);
    }, duration);
  }

  feed(text, level = '', prefix = null) {
    if (!this.feedEl) return;
    const el = document.createElement('div');
    el.className = `feed__item${level ? ` is-${level}` : ''}`;
    if (prefix) {
      const strong = document.createElement('strong');
      strong.textContent = `${prefix} `;
      el.append(strong, document.createTextNode(text));
    } else {
      el.textContent = text;
    }
    this.feedEl.append(el);
    this.feedItems.push(el);
    while (this.feedItems.length > 5) {
      this.feedItems.shift()?.remove();
    }
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 400);
    }, 8000);
  }

  chat(name, text, color = 0xff2d95) {
    const hex = `#${color.toString(16).padStart(6, '0')}`;
    if (this.feedEl) {
      const el = document.createElement('div');
      el.className = 'feed__item is-chat';
      const strong = document.createElement('strong');
      strong.textContent = `${name}: `;
      strong.style.color = hex;
      el.append(strong, document.createTextNode(text));
      this.feedEl.append(el);
      this.feedItems.push(el);
      while (this.feedItems.length > 6) this.feedItems.shift()?.remove();
      setTimeout(() => {
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 400);
      }, 12000);
    }
  }

  setMission(state, distance) {
    if (!state) return;
    const contractName = state.contractName || 'GHOST PROTOCOL';
    const cacheCount = state.shards?.length || 3;
    let title = contractName;
    let objective = `Breach ${cacheCount} data caches across the district.`;
    let eyebrow = state.contractTotal
      ? `CONTRACT ${String((state.contractIndex || 0) + 1).padStart(2, '0')}/${String(state.contractTotal).padStart(2, '0')}`
      : 'ACTIVE CONTRACT';
    if (state.phase === 'extract') {
      objective = 'All caches secured. Return to the plaza for extraction.';
      eyebrow = 'EXTRACTION READY';
    } else if (state.phase === 'extracting') {
      objective = 'Hold the extraction zone — stay inside the ring.';
      eyebrow = 'EXTRACTION IN PROGRESS';
    } else if (state.phase === 'complete') {
      objective = 'Contract complete. The district is yours.';
      eyebrow = 'CONTRACT COMPLETE';
    } else if (state.phase === 'idle') {
      objective = 'Stand by for the next contract.';
      eyebrow = 'STANDBY';
    }
    setText($('missionEyebrow'), eyebrow);
    setText($('missionTitle'), title);
    setText($('missionObjective'), objective);
    setText($('missionDistance'), fmtDistance(distance));
    setText($('missionTimer'), formatTime(state.elapsed || 0));
    setText($('scoreValue'), formatNumber(state.score || 0));
    const dots = $('missionDots')?.children;
    if (dots) {
      if (dots.length !== cacheCount) {
        const wrap = $('missionDots');
        wrap.replaceChildren();
        for (let i = 0; i < cacheCount; i += 1) wrap.appendChild(document.createElement('span'));
      }
      const collected = state.shards?.filter((s) => s.collected).length || 0;
      const liveDots = $('missionDots').children;
      for (let i = 0; i < liveDots.length; i += 1) {
        liveDots[i].classList.toggle('done', i < collected);
        liveDots[i].classList.toggle('next', i === collected && state.phase === 'collect');
      }
    }
  }

  setWeather(label, tagline, id) {
    const el = $('weatherTag');
    if (!el) return;
    const weatherId = String(id || label || 'rain').toLowerCase();
    setText(el, label || 'RAIN');
    el.dataset.weather = weatherId;
    el.title = tagline ? `${tagline} — click to change weather (V)` : 'Change weather (V)';
    const group = $('weatherGroup');
    if (group) {
      for (const btn of group.querySelectorAll('button[data-weather]')) {
        const active = btn.dataset.weather === weatherId;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
    }
  }

  setVitals(health, stamina) {
    const h = clamp(health, 0, 100);
    const s = clamp(stamina, 0, 100);
    const bar = $('healthBar');
    if (bar) {
      bar.style.width = `${h}%`;
      bar.classList.toggle('is-low', h < 34);
    }
    const sb = $('staminaBar');
    if (sb) {
      sb.style.width = `${s}%`;
      sb.classList.toggle('is-low', s < 20);
    }
    setText($('healthText'), String(Math.round(h)));
    setText($('staminaText'), String(Math.round(s)));
  }

  setMode(mode) {
    setText($('vitalsState'), mode === 'car' ? 'BEHIND THE WHEEL' : 'ON FOOT');
    $('speedometer')?.classList.toggle('hidden', mode !== 'car');
    $('vehiclePrompt')?.classList.toggle('hidden', mode !== 'car');
    $('weaponPanel')?.classList.toggle('is-hidden', mode === 'car');
    if (mode === 'car') $('speedLines')?.classList.remove('is-boosting');
  }

  setAmmo(ammo, reserve, reloadProgress = 0) {
    setText($('ammoValue'), String(ammo));
    const bar = $('reloadBar');
    if (bar) bar.style.width = `${clamp(reloadProgress, 0, 1) * 100}%`;
    const reserveEl = document.querySelector('.weapon-panel__ammo span');
    if (reserveEl) setText(reserveEl, `/ ${reserve}`);
  }

  setInteraction(text, visible, key = 'F') {
    const el = $('interactionPrompt');
    if (!el) return;
    el.classList.toggle('hidden', !visible);
    if (text) setText($('interactionText'), text);
    const kbd = el.querySelector('kbd');
    if (kbd) setText(kbd, key);
  }

  setAlert(count) {
    const el = $('alertBadge');
    if (!el) return;
    el.classList.toggle('show', count > 0);
    if (count > 0) setText($('alertCount'), String(count));
  }

  setCrosshair(visible, aiming = false, blocked = false) {
    const el = $('crosshair');
    if (!el) return;
    el.style.display = visible ? '' : 'none';
    el.classList.toggle('is-aiming', aiming);
    el.classList.toggle('is-blocked', blocked);
  }

  hitmarker() {
    const el = $('crosshair')?.querySelector('.crosshair__hit');
    if (!el) return;
    el.classList.remove('is-hit');
    void el.offsetWidth;
    el.classList.add('is-hit');
  }

  damage() {
    const el = $('damageFlash');
    if (!el) return;
    el.classList.add('is-hit');
    clearTimeout(this.damageTimer);
    this.damageTimer = setTimeout(() => el.classList.remove('is-hit'), 130);
  }

  setBoosting(active) {
    $('speedLines')?.classList.toggle('is-boosting', active);
  }

  setCarStats(speed, boost, gear, throttle = 0) {
    const kmh = Math.round(Math.abs(speed) * 3.6);
    setText($('speedValue'), String(kmh));
    setText($('gearValue'), gear);
    const boostPct = clamp(boost, 0, 1) * 100;
    const bar = $('boostBar');
    if (bar) bar.style.width = `${boostPct}%`;
    if (Math.abs(this.lastSpeed - kmh) > 1 || Math.abs(this.lastBoost - boostPct) > 1) {
      this.lastSpeed = kmh;
      this.lastBoost = boostPct;
      this.drawSpeedometer(Math.min(1, kmh / 240), boostPct / 100, throttle);
    }
  }

  drawSpeedometer(speedNorm, boost, throttle) {
    const ctx = this.speedoCtx;
    const w = 440;
    const h = 300;
    ctx.clearRect(0, 0, w, h);
    const cx = 220;
    const cy = 216;
    const r = 156;
    const start = Math.PI * 0.78;
    const end = Math.PI * 2.22;
    ctx.lineCap = 'butt';
    // Outer guide
    ctx.beginPath();
    ctx.arc(cx, cy, r, start, end);
    ctx.strokeStyle = 'rgba(130, 190, 230, 0.13)';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Redline
    ctx.beginPath();
    ctx.arc(cx, cy, r, end - (end - start) * 0.18, end);
    ctx.strokeStyle = 'rgba(255, 66, 96, 0.3)';
    ctx.lineWidth = 3;
    ctx.stroke();
    // Ticks
    for (let i = 0; i <= 12; i += 1) {
      const t = i / 12;
      const a = start + (end - start) * t;
      const inner = i % 3 === 0 ? r - 20 : r - 11;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
      ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      ctx.strokeStyle = i % 3 === 0 ? 'rgba(196, 236, 255, 0.55)' : 'rgba(150, 187, 215, 0.22)';
      ctx.lineWidth = i % 3 === 0 ? 1.6 : 1;
      ctx.stroke();
      if (i % 3 === 0) {
        ctx.save();
        ctx.translate(cx + Math.cos(a) * (r - 38), cy + Math.sin(a) * (r - 38));
        ctx.fillStyle = 'rgba(191, 226, 246, 0.55)';
        ctx.font = '500 17px "Barlow Condensed", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(i * 20), 0, 0);
        ctx.restore();
      }
    }
    // Speed arc with glow
    if (speedNorm > 0.005) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r - 4, start, start + (end - start) * speedNorm);
      ctx.strokeStyle = '#5df6ff';
      ctx.lineWidth = 4;
      ctx.shadowColor = '#38eaff';
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.restore();
    }
    // Throttle micro bar
    ctx.beginPath();
    ctx.arc(cx, cy, r - 14, start, start + (end - start) * (0.05 + Math.abs(throttle) * 0.1));
    ctx.strokeStyle = 'rgba(255, 187, 99, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Center dial lines
    ctx.beginPath();
    ctx.moveTo(cx - 20, cy + 3);
    ctx.lineTo(cx + 20, cy + 3);
    ctx.strokeStyle = 'rgba(158, 214, 240, 0.22)';
    ctx.stroke();
  }

  setBoost(boost, active) {
    const bar = $('boostBar');
    if (bar) bar.style.width = `${clamp(boost, 0, 1) * 100}%`;
    this.setBoosting(active);
  }

  initMinimap(world) {
    const dpr = 2;
    const size = 440;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const bounds = world.metro.bounds;
    const scale = size / (bounds * 2);
    const cx = size / 2;
    const cy = size / 2;
    const toX = (x) => cx + x * scale;
    const toY = (z) => cy + z * scale;

    ctx.fillStyle = '#050912';
    ctx.fillRect(0, 0, size, size);
    // subtle grid
    ctx.strokeStyle = 'rgba(77, 244, 255, 0.035)';
    ctx.lineWidth = 1;
    for (let i = 0; i < size; i += 55) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(size, i);
      ctx.stroke();
    }
    // roads
    ctx.strokeStyle = 'rgba(88, 121, 148, 0.4)';
    ctx.lineWidth = 16 * scale;
    for (const line of world.metro.roads) {
      ctx.beginPath();
      ctx.moveTo(toX(line), 0);
      ctx.lineTo(toX(line), size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, toY(line));
      ctx.lineTo(size, toY(line));
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(143, 188, 216, 0.12)';
    ctx.lineWidth = 1;
    for (const line of world.metro.roads) {
      ctx.beginPath();
      ctx.moveTo(toX(line), 0);
      ctx.lineTo(toX(line), size);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, toY(line));
      ctx.lineTo(size, toY(line));
      ctx.stroke();
    }
    // blocks
    for (const block of world.metro.blocks) {
      const w = 44 * scale;
      ctx.fillStyle = 'rgba(16, 29, 43, 0.92)';
      ctx.strokeStyle = 'rgba(66, 116, 145, 0.28)';
      ctx.lineWidth = 1;
      ctx.fillRect(toX(block.cx) - w / 2, toY(block.cz) - w / 2, w, w);
      ctx.strokeRect(toX(block.cx) - w / 2, toY(block.cz) - w / 2, w, w);
    }
    // plaza
    ctx.beginPath();
    ctx.arc(toX(0), toY(0), 28 * scale, 0, TAU);
    ctx.fillStyle = 'rgba(30, 77, 91, 0.26)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(77, 244, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
    // spire
    ctx.save();
    ctx.translate(toX(60), toY(0));
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = 'rgba(77, 244, 255, 0.2)';
    ctx.fillRect(-7, -7, 14, 14);
    ctx.strokeStyle = 'rgba(77, 244, 255, 0.55)';
    ctx.strokeRect(-7, -7, 14, 14);
    ctx.restore();
    // north arrow / border
    ctx.strokeStyle = 'rgba(77, 244, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, size - 2, size - 2);
    this.minimapCache = canvas;
  }

  drawMinimap(world, player, remotes, mission, enemies, pings, now) {
    if (!this.minimapCache) return;
    if (now - this.minimapTime < 45) return;
    this.minimapTime = now;
    const ctx = this.minimapCtx;
    const size = 440;
    ctx.clearRect(0, 0, size, size);
    ctx.drawImage(this.minimapCache, 0, 0);
    const bounds = world.metro.bounds;
    const scale = size / (bounds * 2);
    const cx = size / 2;
    const cy = size / 2;
    const toX = (x) => cx + x * scale;
    const toY = (z) => cy + z * scale;
    const pulse = (Math.sin(now / 280) + 1) / 2;

    // Shards
    if (mission?.shards) {
      for (const shard of mission.shards) {
        if (shard.collected) continue;
        const x = toX(shard.x);
        const y = toY(shard.z);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = '#5cf7ff';
        ctx.shadowColor = '#5cf7ff';
        ctx.shadowBlur = 11;
        const s = 7 + pulse * 2;
        ctx.fillRect(-s / 2, -s / 2, s, s);
        ctx.restore();
      }
    }

    // Extraction
    if (mission && (mission.phase === 'extract' || mission.phase === 'extracting' || mission.phase === 'complete')) {
      const x = toX(mission.extraction.x);
      const y = toY(mission.extraction.z);
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, 12 + pulse * 5, 0, TAU);
      ctx.strokeStyle = 'rgba(255, 187, 99, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = '#ffbb63';
      ctx.shadowColor = '#ffbb63';
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, TAU);
      ctx.fill();
      ctx.restore();
    }

    // Enemies
    if (enemies) {
      for (const e of enemies) {
        ctx.fillStyle = 'rgba(255, 67, 88, 0.85)';
        ctx.beginPath();
        ctx.arc(toX(e.x), toY(e.z), 3.5, 0, TAU);
        ctx.fill();
      }
    }

    // Pings
    if (pings) {
      for (const p of pings) {
        ctx.strokeStyle = 'rgba(255, 45, 149, 0.75)';
        ctx.beginPath();
        ctx.arc(toX(p.x), toY(p.z), 7, 0, TAU);
        ctx.stroke();
      }
    }

    // Remote players
    if (remotes) {
      for (const r of remotes) {
        const x = toX(r.x);
        const y = toY(r.z);
        drawArrow(ctx, x, y, r.rot, r.colorHex || '#ff2d95', 7);
      }
    }

    // Local player
    drawArrow(ctx, toX(player.x), toY(player.z), player.rot, '#5df6ff', 9, true);
  }

  updateLabels(camera, width, height, entries, dt) {
    const active = new Set();
    for (const entry of entries) {
      const id = entry.id;
      active.add(id);
      let marker = this.markers.get(id);
      if (!marker) {
        marker = this.createMarker(entry);
        this.markers.set(id, marker);
        this.worldLabels.append(marker.el);
      }
      const screen = projectToScreen(entry.position, camera, width, height);
      const camPos = camera.position;
      const behind = screen.visible === false;
      const dist = camPos.distanceTo(entry.position);
      const onScreen = !behind && screen.x > -40 && screen.x < width + 40 && screen.y > -40 && screen.y < height + 40;
      marker.el.classList.toggle('visible', onScreen);
      if (onScreen) {
        marker.el.style.left = `${screen.x}px`;
        marker.el.style.top = `${screen.y}px`;
        if (marker.distEl) setText(marker.distEl, fmtDistance(dist));
        if (marker.dynamicLabel) setText(marker.dynamicLabel, entry.label || '');
      }
    }
    for (const [id, marker] of this.markers) {
      if (!active.has(id) && !id.startsWith('remote-') && !id.startsWith('ping-')) {
        marker.el.remove();
        this.markers.delete(id);
      }
    }
  }

  createMarker(entry) {
    const el = document.createElement('div');
    el.className = `world-marker ${entry.className || ''}`;
    const icon = document.createElement('div');
    icon.className = 'world-marker__icon';
    const label = document.createElement('div');
    label.className = 'world-marker__label';
    label.textContent = entry.label || '';
    const distEl = document.createElement('div');
    distEl.className = 'world-marker__dist';
    el.append(icon, label, distEl);
    return { el, labelEl: label, distEl, dynamicLabel: entry.dynamicLabel ? label : null };
  }

  setFps(fps, latency) {
    // The map header doubles as a light debug readout.
    const value = latency == null ? `${Math.round(fps)} FPS` : `${Math.round(latency)} MS · ${Math.round(fps)} FPS`;
    setText($('networkLatency'), value);
  }

  setChatOpen(open) {
    this.isChatOpen = open;
    $('chatPanel')?.classList.toggle('hidden', !open);
    if (open) setTimeout(() => $('chatInput')?.focus(), 10);
    else if ($('chatInput')) $('chatInput').value = '';
  }

  setPaused(paused) {
    this.pauseOverlay?.classList.toggle('hidden', !paused);
    if (!paused) this.controlsModal?.classList.add('hidden');
  }

  setControls(open) {
    this.controlsModal?.classList.toggle('hidden', !open);
  }

  showDeath(seconds) {
    this.deathOverlay?.classList.remove('hidden');
    setText($('respawnTimer'), String(Math.max(0, Math.ceil(seconds))));
  }

  updateDeath(seconds) {
    if (!this.deathOverlay?.classList.contains('hidden')) {
      setText($('respawnTimer'), String(Math.max(0, Math.ceil(seconds))));
    }
  }

  hideDeath() {
    this.deathOverlay?.classList.add('hidden');
  }

  showResult({ time, score, countdown, caches, contractName }) {
    this.resultOverlay?.classList.remove('hidden');
    setText($('resultTime'), formatTime(time));
    setText($('resultScore'), formatNumber(score));
    setText($('resultCaches'), `${caches} SECURED`);
    setText($('resultCountdown'), String(Math.max(0, Math.ceil(countdown))));
    if (contractName) setText($('resultName'), contractName);
  }

  updateResultCountdown(seconds) {
    setText($('resultCountdown'), String(Math.max(0, Math.ceil(seconds))));
  }

  hideResult() {
    this.resultOverlay?.classList.add('hidden');
  }

  showDisconnect(reason) {
    setText($('disconnectReason'), reason || 'The link to your partner was lost.');
    this.disconnectOverlay?.classList.remove('hidden');
    this.pauseOverlay?.classList.add('hidden');
  }

  hideDisconnect() {
    this.disconnectOverlay?.classList.add('hidden');
  }

  setLockHint(visible) {
    $('lockHint')?.classList.toggle('hidden', !visible);
  }

  clearLabels() {
    for (const [, marker] of this.markers) marker.el.remove();
    this.markers.clear();
  }
}

function drawArrow(ctx, x, y, rot, color, size = 7, glow = false) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.atan2(Math.cos(rot), Math.sin(rot)));
  ctx.beginPath();
  ctx.moveTo(size, 0);
  ctx.lineTo(-size * 0.7, size * 0.6);
  ctx.lineTo(-size * 0.35, 0);
  ctx.lineTo(-size * 0.7, -size * 0.6);
  ctx.closePath();
  if (glow) {
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
  }
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}
