import { clamp } from './utils.js';

/**
 * Fully procedural WebAudio soundtrack and foley. No asset downloads, no
 * autoplay: every node is created behind an explicit user gesture.
 */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.started = false;
    this.muted = false;
    this.master = null;
    this.musicGain = null;
    this.ambientGain = null;
    this.engineGain = null;
    this.tireGain = null;
    this.engineOscA = null;
    this.engineOscB = null;
    this.engineFilter = null;
    this.noiseBuffer = null;
    this.musicTimer = null;
    this.nextNoteTime = 0;
    this.step = 0;
    this.lastFootstep = 0;
    this.lastSqueal = 0;
    this.limiter = null;
    this.musicWanted = false;
    this.weather = 'rain';
    this.pendingWeather = 'rain';
    this.weatherScenes = {};
    this.ambientTimer = null;
    this.nextAmbientEvent = 0;
    this.musicDelaySend = null;
    this.unlockBound = false;
  }

  async start() {
    if (this.started || this._initializing) {
      if (this.ctx?.state === 'suspended') await this.ctx.resume();
      return;
    }
    this._initializing = true;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx({ latencyHint: 'interactive' });
      await this.ctx.resume();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.82;
      // A gentle limiter keeps the denser mix from clipping when thunder,
      // gunfire and the score land on the same beat.
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.value = -14;
      this.limiter.knee.value = 12;
      this.limiter.ratio.value = 7;
      this.limiter.attack.value = 0.004;
      this.limiter.release.value = 0.24;
      this.master.connect(this.limiter).connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0;
      this.musicGain.connect(this.master);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.value = 0.5;
      this.ambientGain.connect(this.master);

      this.noiseBuffer = this._makeNoise(2.5);
      this._buildMusicFx();
      this._buildWeatherScenes();
      this._buildEngine();
      this._startMusic();
      this._bindUnlock();
      // Only flag as started once the whole graph exists, so no sound can
      // fire into a half-built node chain during the resume() await.
      this.started = true;
      this.setMuted(this.muted);
      this.setWeather(this.pendingWeather, true);
      this.setMusicActive(this.musicWanted, true);
    } catch (err) {
      console.warn('Audio failed to start', err);
      this.started = false;
    } finally {
      this._initializing = false;
    }
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master && this.ctx) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.82, this.ctx.currentTime + 0.12);
    }
  }

  unlock() {
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  _bindUnlock() {
    if (this.unlockBound) return;
    this.unlockBound = true;
    const resume = () => this.unlock();
    window.addEventListener('pointerdown', resume, { passive: true });
    window.addEventListener('keydown', resume);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) resume();
    });
  }

  setMusicActive(active, instant = false) {
    this.musicWanted = !!active;
    if (!this.musicGain || !this.ctx) return;
    const now = this.ctx.currentTime;
    const gain = this.musicGain.gain;
    gain.cancelScheduledValues(now);
    if (instant) {
      gain.setValueAtTime(this.musicWanted ? 0.62 : 0, now);
    } else {
      gain.setTargetAtTime(this.musicWanted ? 0.62 : 0, now, this.musicWanted ? 0.55 : 0.28);
    }
    if (this.musicWanted) {
      this.nextNoteTime = Math.max(this.nextNoteTime, now + 0.12);
      this.unlock();
    }
  }

  _makeNoise(seconds = 1) {
    const length = Math.floor(this.ctx.sampleRate * seconds);
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  _noiseSource(duration = 1) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    src.loopEnd = duration;
    return src;
  }

  _buildMusicFx() {
    const ctx = this.ctx;
    this.musicDelay = ctx.createDelay(1);
    this.musicDelay.delayTime.value = 0.45;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.32;
    this.musicDelay.connect(feedback).connect(this.musicDelay);
    const wet = ctx.createGain();
    wet.gain.value = 0.32;
    this.musicDelay.connect(wet).connect(this.musicGain);
    this.musicDelaySend = ctx.createGain();
    this.musicDelaySend.gain.value = 0.55;
    this.musicDelaySend.connect(this.musicDelay);
  }

  // Every preset owns a complete ambience bed. Only the active bed is audible;
  // setWeather() crossfades between them so rain, fog, storm and snow all have
  // a distinct voice instead of sharing one rain loop.
  _buildWeatherScenes() {
    const ctx = this.ctx;

    const makeScene = (id, level = 1) => {
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(this.ambientGain);
      this.weatherScenes[id] = { gain, level };
      return this.weatherScenes[id];
    };

    const noiseLayer = (scene, { highpass, lowpass, bandpass, q = 0.8, gain = 0.05, rate = 0, depth = 0.3 } = {}) => {
      const src = this._noiseSource(2.5);
      let node = src;
      if (bandpass) {
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = bandpass;
        filter.Q.value = q;
        node.connect(filter);
        node = filter;
      }
      if (highpass) {
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = highpass;
        node.connect(filter);
        node = filter;
      }
      if (lowpass) {
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = lowpass;
        node.connect(filter);
        node = filter;
      }
      const level = ctx.createGain();
      level.gain.value = gain;
      node.connect(level).connect(scene.gain);
      if (rate) {
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = rate;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = gain * depth;
        lfo.connect(lfoGain).connect(level.gain);
        lfo.start();
      }
      src.start();
      return level;
    };

    const drone = (scene, freq, gain, type = 'sine', detune = 0) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = Math.max(400, freq * 8);
      const level = ctx.createGain();
      level.gain.value = gain;
      osc.connect(filter).connect(level).connect(scene.gain);
      osc.start();
      return osc;
    };

    // RAIN — steady neon downpour with a soft low patter bed.
    const rain = makeScene('rain', 1);
    noiseLayer(rain, { highpass: 900, lowpass: 5400, gain: 0.075, rate: 0.12, depth: 0.25 });
    noiseLayer(rain, { lowpass: 190, gain: 0.03 });

    // CLEAR — night breeze, warm airy pad and a far-off city siren.
    const clear = makeScene('clear', 0.9);
    noiseLayer(clear, { bandpass: 480, q: 0.6, gain: 0.014, rate: 0.05, depth: 0.55 });
    noiseLayer(clear, { highpass: 4000, lowpass: 9000, gain: 0.004, rate: 0.07, depth: 0.5 });
    drone(clear, 110, 0.012, 'sine');
    drone(clear, 164.81, 0.007, 'triangle', 4);
    const siren = ctx.createOscillator();
    siren.type = 'sine';
    siren.frequency.value = 620;
    const sirenLfo = ctx.createOscillator();
    sirenLfo.frequency.value = 0.09;
    const sirenLfoGain = ctx.createGain();
    sirenLfoGain.gain.value = 70;
    sirenLfo.connect(sirenLfoGain).connect(siren.frequency);
    const sirenLevel = ctx.createGain();
    sirenLevel.gain.value = 0.0022;
    const sirenPan = ctx.createStereoPanner();
    sirenPan.pan.value = 0.55;
    siren.connect(sirenLevel).connect(sirenPan).connect(clear.gain);
    siren.start();
    sirenLfo.start();

    // FOG — muffled low drone and damp, close air.
    const fog = makeScene('fog', 1);
    noiseLayer(fog, { lowpass: 130, gain: 0.055 });
    noiseLayer(fog, { bandpass: 360, q: 0.4, gain: 0.01, rate: 0.035, depth: 0.65 });
    drone(fog, 49, 0.025, 'sine');
    drone(fog, 73.5, 0.014, 'triangle', -6);

    // STORM — heavier rain and wind over a rolling low rumble.
    const storm = makeScene('storm', 1);
    noiseLayer(storm, { highpass: 500, lowpass: 7000, gain: 0.12, rate: 0.17, depth: 0.3 });
    noiseLayer(storm, { bandpass: 320, q: 0.5, gain: 0.045, rate: 0.08, depth: 0.7 });
    noiseLayer(storm, { lowpass: 95, gain: 0.06 });

    // SNOW — hushed wind with an icy, almost silent high end.
    const snow = makeScene('snow', 1);
    noiseLayer(snow, { bandpass: 950, q: 0.45, gain: 0.018, rate: 0.06, depth: 0.55 });
    noiseLayer(snow, { lowpass: 300, gain: 0.012 });
    drone(snow, 220, 0.006, 'sine');

    this.nextAmbientEvent = ctx.currentTime + 2;
    this.ambientTimer = setInterval(() => this._ambientTick(), 400);
  }

  setWeather(id, instant = false) {
    const next = this.weatherScenes[id] ? id : 'rain';
    this.pendingWeather = next;
    this.weather = next;
    if (!this.started || !this.weatherScenes[next]) return;
    const now = this.ctx.currentTime;
    for (const [key, scene] of Object.entries(this.weatherScenes)) {
      const target = key === next ? scene.level : 0;
      const gain = scene.gain.gain;
      gain.cancelScheduledValues(now);
      if (instant) gain.setValueAtTime(target, now);
      else gain.setTargetAtTime(target, now, 0.9);
    }
    const delay = this._weatherEventDelay(next);
    this.nextAmbientEvent = now + (next === 'storm' ? 1.4 + Math.random() * 1.6 : delay);
  }

  _weatherEventDelay(id) {
    switch (id) {
      case 'storm': return 6 + Math.random() * 9;
      case 'fog': return 8 + Math.random() * 7;
      case 'rain': return 2 + Math.random() * 3;
      case 'snow': return 5 + Math.random() * 6;
      default: return 7 + Math.random() * 8;
    }
  }

  _ambientTick() {
    if (!this.started || !this.ctx || this.muted) return;
    const now = this.ctx.currentTime;
    if (now < this.nextAmbientEvent) return;
    this._triggerWeatherEvent(this.weather);
    this.nextAmbientEvent = now + this._weatherEventDelay(this.weather);
  }

  _triggerWeatherEvent(id) {
    if (!this.started || this.muted) return;
    if (id === 'storm') this._thunder();
    else if (id === 'fog') this._foghorn();
    else if (id === 'rain') this._droplet();
    else if (id === 'snow') this._iceChime();
    else if (id === 'clear') this._distantPass();
  }

  _scene(id) {
    return this.weatherScenes[id]?.gain || this.ambientGain;
  }

  _thunder() {
    const ctx = this.ctx;
    const dest = this._scene('storm');
    const now = ctx.currentTime + 0.02;

    const crack = ctx.createBufferSource();
    crack.buffer = this.noiseBuffer;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 900;
    const crackGain = ctx.createGain();
    crackGain.gain.setValueAtTime(0.0001, now);
    crackGain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
    crackGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
    crack.connect(hp).connect(crackGain).connect(dest);
    crack.start(now, Math.random() * 1.5, 0.36);

    const rumble = ctx.createBufferSource();
    rumble.buffer = this.noiseBuffer;
    rumble.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(180, now);
    lp.frequency.exponentialRampToValueAtTime(70, now + 2.2);
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.setValueAtTime(0.0001, now + 0.04);
    rumbleGain.gain.linearRampToValueAtTime(0.42, now + 0.3);
    rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.6);
    rumble.connect(lp).connect(rumbleGain).connect(dest);
    rumble.start(now);
    rumble.stop(now + 2.7);

    const sub = ctx.createOscillator();
    sub.type = 'sine';
    sub.frequency.setValueAtTime(52, now);
    sub.frequency.exponentialRampToValueAtTime(26, now + 1.4);
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.0001, now);
    subGain.gain.linearRampToValueAtTime(0.3, now + 0.12);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    sub.connect(subGain).connect(dest);
    sub.start(now);
    sub.stop(now + 1.7);
  }

  _foghorn() {
    const ctx = this.ctx;
    const dest = this._scene('fog');
    const now = ctx.currentTime + 0.02;
    for (const [freq, level] of [[58, 0.06], [87, 0.025]]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq * 0.97, now + 2.6);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 240;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(level, now + 0.55);
      gain.gain.setValueAtTime(level, now + 1.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);
      osc.connect(filter).connect(gain).connect(dest);
      osc.start(now);
      osc.stop(now + 3.3);
    }
  }

  _droplet() {
    const ctx = this.ctx;
    const dest = this._scene('rain');
    for (let i = 0; i < 2; i += 1) {
      const when = ctx.currentTime + 0.02 + Math.random() * 0.3;
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800 + Math.random() * 2200;
      filter.Q.value = 3;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.022, when);
      gain.gain.exponentialRampToValueAtTime(0.0001, when + 0.05);
      const pan = ctx.createStereoPanner();
      pan.pan.value = Math.random() * 1.4 - 0.7;
      src.connect(filter).connect(gain).connect(pan).connect(dest);
      src.start(when, Math.random() * 1.8, 0.06);
    }
  }

  _iceChime() {
    const ctx = this.ctx;
    const dest = this._scene('snow');
    const notes = [1046.5, 1174.7, 1396.9, 1568, 2093];
    const freq = notes[Math.floor(Math.random() * notes.length)];
    const now = ctx.currentTime + 0.02;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.012, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    const pan = ctx.createStereoPanner();
    pan.pan.value = Math.random() * 1.6 - 0.8;
    osc.connect(gain).connect(pan).connect(dest);
    osc.start(now);
    osc.stop(now + 2.3);
  }

  _distantPass() {
    const ctx = this.ctx;
    const dest = this._scene('clear');
    const now = ctx.currentTime + 0.02;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(260, now);
    filter.frequency.exponentialRampToValueAtTime(900, now + 1.6);
    filter.Q.value = 0.7;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.018, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
    const pan = ctx.createStereoPanner();
    pan.pan.setValueAtTime(-0.7, now);
    pan.pan.linearRampToValueAtTime(0.7, now + 1.8);
    src.connect(filter).connect(gain).connect(pan).connect(dest);
    src.start(now, Math.random(), 1.9);
  }

  _buildEngine() {
    const ctx = this.ctx;
    this.engineFilter = ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 500;
    this.engineFilter.Q.value = 2.5;
    this.engineGain = ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineFilter.connect(this.engineGain).connect(this.master);

    this.engineOscA = ctx.createOscillator();
    this.engineOscA.type = 'sawtooth';
    this.engineOscA.frequency.value = 50;
    this.engineOscB = ctx.createOscillator();
    this.engineOscB.type = 'square';
    this.engineOscB.frequency.value = 75;
    const gainA = ctx.createGain();
    gainA.gain.value = 0.5;
    const gainB = ctx.createGain();
    gainB.gain.value = 0.16;
    this.engineOscA.connect(gainA).connect(this.engineFilter);
    this.engineOscB.connect(gainB).connect(this.engineFilter);
    this.engineOscA.start();
    this.engineOscB.start();

    const tireNoise = this._noiseSource(2.5);
    const tireFilter = ctx.createBiquadFilter();
    tireFilter.type = 'bandpass';
    tireFilter.frequency.value = 2100;
    tireFilter.Q.value = 1.8;
    this.tireGain = ctx.createGain();
    this.tireGain.gain.value = 0;
    tireNoise.connect(tireFilter).connect(this.tireGain).connect(this.master);
    tireNoise.start();
    this.tireFilter = tireFilter;
  }

  updateCar({ active, speed = 0, throttle = 0, boosting = false, drifting = false }) {
    if (!this.started || !this.engineGain) return;
    const t = this.ctx.currentTime;
    const abs = Math.abs(speed);
    const gainTarget = active ? (0.055 + clamp(abs / 50, 0, 1) * 0.09) : 0;
    this.engineGain.gain.setTargetAtTime(gainTarget, t, 0.08);
    const freq = 46 + abs * 4.1 + Math.abs(throttle) * 16 + (boosting ? 22 : 0);
    this.engineOscA.frequency.setTargetAtTime(freq, t, 0.04);
    this.engineOscB.frequency.setTargetAtTime(freq * 1.505, t, 0.04);
    this.engineFilter.frequency.setTargetAtTime(340 + abs * 32 + (boosting ? 450 : 0), t, 0.06);
    const tire = active && drifting ? clamp(abs / 28, 0.2, 1) * 0.09 : 0;
    this.tireGain.gain.setTargetAtTime(tire, t, 0.06);
    if (this.tireFilter) this.tireFilter.frequency.setTargetAtTime(1800 + abs * 16, t, 0.1);
  }

  footstep(running = false) {
    if (!this.started) return;
    const now = performance.now();
    if (now - this.lastFootstep < (running ? 190 : 300)) return;
    this.lastFootstep = now;
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = false;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = running ? 450 : 320;
    filter.Q.value = 1.4;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(running ? 0.05 : 0.026, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.075);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(ctx.currentTime, Math.random() * 1.8, 0.09);
  }

  jump() {
    this._tone(220, 0.08, 0.02, 'sine', 110);
  }

  land() {
    this._noiseBurst(0.1, 180, 0.04);
  }

  gunshot(suppressed = true) {
    if (!this.started) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = suppressed ? 700 : 300;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = suppressed ? 2600 : 6000;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(suppressed ? 0.11 : 0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (suppressed ? 0.11 : 0.22));
    src.connect(hp).connect(lp).connect(gain).connect(this.master);
    src.start(now, Math.random(), 0.2);

    const thump = ctx.createOscillator();
    thump.type = 'sine';
    thump.frequency.setValueAtTime(120, now);
    thump.frequency.exponentialRampToValueAtTime(48, now + 0.1);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.12, now);
    tg.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
    thump.connect(tg).connect(this.master);
    thump.start(now);
    thump.stop(now + 0.13);
  }

  enemyShot() {
    if (!this.started) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(920, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.16);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1800;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    osc.connect(filter).connect(gain).connect(this.master);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  hitmarker() {
    this._tone(1350, 0.045, 0.025, 'square', 1100);
  }

  enemyHit() {
    if (!this.started) return;
    this._noiseBurst(0.08, 1200, 0.03);
    this._tone(160, 0.08, 0.025, 'square', 90);
  }

  explosion() {
    if (!this.started) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    this._noiseBurst(0.7, 240, 0.3);
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.55);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.26, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
    osc.connect(gain).connect(this.master);
    osc.start(now);
    osc.stop(now + 0.62);
  }

  pickup() {
    if (!this.started) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      setTimeout(() => this._tone(freq, 0.18, 0.04, 'triangle', freq * 1.5), i * 65);
    });
  }

  reload() {
    this._noiseBurst(0.04, 3200, 0.018);
    setTimeout(() => this._noiseBurst(0.06, 1700, 0.024), 170);
  }

  door() {
    this._noiseBurst(0.12, 300, 0.035);
    this._tone(95, 0.12, 0.03, 'sine', 60);
  }

  boost() {
    if (!this.started) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.exponentialRampToValueAtTime(3400, now + 0.35);
    filter.Q.value = 1.2;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(now, 0, 0.6);
  }

  ping() {
    this._tone(880, 0.12, 0.03, 'sine', 1320);
  }

  uiClick() {
    this._tone(520, 0.04, 0.015, 'square', 620);
  }

  damage() {
    if (!this.started) return;
    this._noiseBurst(0.16, 420, 0.06);
    this._tone(70, 0.18, 0.05, 'sine', 40);
  }

  _tone(freq, duration, volume, type = 'sine', endFreq = freq) {
    if (!this.started || !this.ctx) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq !== freq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain).connect(this.master);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  _noiseBurst(duration, frequency, volume) {
    if (!this.started || !this.ctx || !this.master) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = frequency;
    filter.Q.value = 1.5;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    src.connect(filter).connect(gain).connect(this.master);
    src.start(now, Math.random() * 1.6, duration + 0.02);
  }

  _startMusic() {
    this.nextNoteTime = this.ctx.currentTime + 0.12;
    this.step = 0;
    const secondsPerStep = 60 / 100 / 4;
    const schedule = () => {
      if (!this.ctx) return;
      if (!this.musicWanted) {
        this.nextNoteTime = this.ctx.currentTime + 0.2;
        return;
      }
      while (this.nextNoteTime < this.ctx.currentTime + 0.32) {
        this._scheduleStep(this.step, this.nextNoteTime);
        this.nextNoteTime += secondsPerStep;
        this.step = (this.step + 1) % 128;
      }
    };
    this.musicTimer = setInterval(schedule, 50);
    schedule();
  }

  _scheduleStep(step, time) {
    if (!this.ctx || !this.musicGain || this.muted) return;
    const ctx = this.ctx;
    const dest = this.musicGain;
    const send = this.musicDelaySend;
    const bar = Math.floor(step / 16);
    const beat = step % 16;
    const phraseBar = bar % 4;
    // Am – F – C – G, with seventh colours for the pads.
    const progression = [
      { root: 55, notes: [0, 3, 7, 10] },
      { root: 43.65, notes: [0, 4, 7, 11] },
      { root: 65.41, notes: [0, 4, 7, 11] },
      { root: 49, notes: [0, 4, 7, 10] },
    ];
    const chord = progression[phraseBar];
    const root = chord.root;

    const tone = (freq, type, level, duration, { attack = 0.005, cutoff = 0, pan = 0, echo = false } = {}) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      let node = osc;
      if (cutoff) {
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = cutoff;
        node.connect(filter);
        node = filter;
      }
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(level, time + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
      node.connect(gain);
      if (pan) {
        const panner = ctx.createStereoPanner();
        panner.pan.value = pan;
        gain.connect(panner).connect(dest);
        if (echo) panner.connect(send);
      } else {
        gain.connect(dest);
        if (echo) gain.connect(send);
      }
      osc.start(time);
      osc.stop(time + duration + 0.02);
    };

    // Four-on-the-floor kick.
    if (beat % 4 === 0) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, time);
      osc.frequency.exponentialRampToValueAtTime(43, time + 0.12);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.55, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.34);
      osc.connect(gain).connect(dest);
      osc.start(time);
      osc.stop(time + 0.36);
    }

    // Backbeat snare plus a rising fill at the end of each phrase.
    if (beat === 4 || beat === 12) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1850;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.13, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.18);
      src.connect(filter).connect(gain).connect(dest);
      src.start(time, Math.random() * 1.4, 0.2);

      const body = ctx.createOscillator();
      body.type = 'triangle';
      body.frequency.setValueAtTime(190, time);
      body.frequency.exponentialRampToValueAtTime(120, time + 0.08);
      const bodyGain = ctx.createGain();
      bodyGain.gain.setValueAtTime(0.06, time);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.1);
      body.connect(bodyGain).connect(dest);
      body.start(time);
      body.stop(time + 0.12);
    } else if (phraseBar === 3 && beat >= 13) {
      const fill = 0.05 + (beat - 13) * 0.025;
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 2200;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(fill, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.12);
      src.connect(filter).connect(gain).connect(dest);
      src.start(time, Math.random() * 1.5, 0.14);
    }

    // Offbeat open hats and quiet closed sixteenths.
    if (beat % 4 === 2) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 7000;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.03, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.17);
      src.connect(filter).connect(gain).connect(dest);
      src.start(time, Math.random() * 1.6, 0.2);
    } else if (beat % 2 === 1) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 8500;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.008, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
      src.connect(filter).connect(gain).connect(dest);
      src.start(time, Math.random() * 1.7, 0.05);
    }

    // Rolling saw bass with octave lifts.
    if (beat % 2 === 0) {
      const octave = beat === 6 || beat === 14 ? 2 : 1;
      const freq = root * octave;
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(460, time);
      filter.frequency.exponentialRampToValueAtTime(170, time + 0.2);
      filter.Q.value = 3;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.095, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.21);
      osc.connect(filter).connect(gain).connect(dest);
      osc.start(time);
      osc.stop(time + 0.23);
    }

    // Ping-pong-ish arpeggio through the dotted-eighth delay.
    if (beat % 2 === 0 || phraseBar >= 2) {
      const arpNotes = [0, 7, 12, 15, 19, 15, 12, 7];
      const semis = arpNotes[(step + bar) % arpNotes.length];
      const freq = root * 8 * Math.pow(2, semis / 12);
      tone(freq, 'triangle', 0.022, 0.22, {
        cutoff: 3400,
        pan: Math.sin(step * 0.8) * 0.6,
        echo: true,
      });
    }

    // Lush detuned pad on every bar change.
    if (beat === 0) {
      for (const semi of chord.notes) {
        const freq = root * 4 * Math.pow(2, semi / 12);
        for (const detune of [-7, 6]) {
          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.value = freq;
          osc.detune.value = detune;
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 980;
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.0001, time);
          gain.gain.linearRampToValueAtTime(0.026, time + 0.45);
          gain.gain.linearRampToValueAtTime(0.0001, time + 2.55);
          osc.connect(filter).connect(gain).connect(dest);
          osc.start(time);
          osc.stop(time + 2.6);
        }
      }
    }

    // Lead phrase enters for the second half of the eight-bar loop.
    const lead = {
      48: 76, 56: 74, 64: 72, 72: 69,
      80: 72, 88: 74, 96: 76, 104: 79,
      112: 76, 120: 74,
    };
    if (lead[step]) {
      const freq = 440 * Math.pow(2, (lead[step] - 69) / 12);
      for (const detune of [-6, 6]) {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        osc.detune.value = detune;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 2600;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.0001, time);
        gain.gain.linearRampToValueAtTime(0.016, time + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);
        osc.connect(filter).connect(gain).connect(dest);
        gain.connect(send);
        osc.start(time);
        osc.stop(time + 1.7);
      }
      const sub = ctx.createOscillator();
      sub.type = 'sine';
      sub.frequency.value = freq / 2;
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.0001, time);
      subGain.gain.linearRampToValueAtTime(0.012, time + 0.05);
      subGain.gain.exponentialRampToValueAtTime(0.0001, time + 1.4);
      sub.connect(subGain).connect(dest);
      sub.start(time);
      sub.stop(time + 1.5);
    }

    // Cymbal wash opens each four-bar phrase.
    if (step % 64 === 0) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 5200;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.045, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.4);
      src.connect(filter).connect(gain).connect(dest);
      src.start(time, Math.random() * 1.2, 1.5);
    }
  }
}
