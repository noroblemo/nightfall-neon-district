import { clamp } from './utils.js';

// The score is a 16-bar night-drive loop at 84 BPM. Keeping the sequencer
// running on a musical clock even while the music is faded out avoids
// restarts and bar-boundary hiccups when the game pauses or resumes.
const MUSIC_BPM = 84;
const STEPS_PER_BAR = 16;
const LOOP_BARS = 16;
const LOOP_STEPS = STEPS_PER_BAR * LOOP_BARS;
const STEP_SECONDS = 60 / MUSIC_BPM / 4;
const MUSIC_LEVEL = 0.58;
const MASTER_LEVEL = 0.8;

const WEATHER_MUSIC = {
  rain: { cutoff: 4600, delay: 0.3 },
  clear: { cutoff: 6400, delay: 0.22 },
  fog: { cutoff: 2400, delay: 0.46 },
  storm: { cutoff: 3000, delay: 0.34 },
  snow: { cutoff: 5400, delay: 0.4 },
};

// D minor, with the last two bars resolving back into the loop point.
const CHORDS = [
  { root: 73.42, notes: [0, 3, 7, 10] },
  { root: 58.27, notes: [0, 4, 7, 11] },
  { root: 87.31, notes: [0, 4, 7, 11] },
  { root: 65.41, notes: [0, 4, 7, 10] },
  { root: 73.42, notes: [0, 3, 7, 10] },
  { root: 58.27, notes: [0, 4, 7, 11] },
  { root: 98.0, notes: [0, 3, 7, 10] },
  { root: 110.0, notes: [0, 4, 7, 10] },
  { root: 73.42, notes: [0, 3, 7, 10] },
  { root: 58.27, notes: [0, 4, 7, 11] },
  { root: 87.31, notes: [0, 4, 7, 11] },
  { root: 65.41, notes: [0, 4, 7, 10] },
  { root: 98.0, notes: [0, 3, 7, 10] },
  { root: 110.0, notes: [0, 4, 7, 10] },
  { root: 73.42, notes: [0, 3, 7, 10] },
  { root: 73.42, notes: [0, 3, 7, 10] },
];

const LEAD = {
  128: [74, 2.6], 144: [72, 1.5], 152: [69, 1.0], 160: [69, 2.0],
  176: [65, 1.8], 184: [67, 1.0], 192: [67, 2.0], 208: [69, 1.5],
  216: [72, 1.0], 224: [74, 2.6], 240: [72, 1.6], 248: [69, 1.4],
};

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
    this.musicFilter = null;
    this.musicDelayWet = null;
    this.unlockBound = false;
    this._weatherInit = false;
    this._lastMusicGain = 0;
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
      this.master.gain.value = 0;
      // A gentle limiter keeps the denser mix from clipping when thunder,
      // gunfire and the score land on the same beat.
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.value = -12;
      this.limiter.knee.value = 10;
      this.limiter.ratio.value = 8;
      this.limiter.attack.value = 0.003;
      this.limiter.release.value = 0.24;
      this.master.connect(this.limiter).connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0;
      this.musicFilter = this.ctx.createBiquadFilter();
      this.musicFilter.type = 'lowpass';
      this.musicFilter.frequency.value = WEATHER_MUSIC[this.pendingWeather]?.cutoff || 4600;
      this.musicFilter.Q.value = 0.45;
      this.musicGain.connect(this.musicFilter).connect(this.master);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.value = 0.5;
      this.ambientGain.connect(this.master);

      // A seamless, crossfaded noise bed shared by every weather layer.
      this.noiseBuffer = this._makeNoise(6, 0.4);
      this._buildMusicFx();
      this._buildWeatherScenes();
      this._buildEngine();
      this._startMusic();
      this._bindUnlock();
      // Only flag as started once the whole graph exists, so no sound can
      // fire into a half-built node chain during the resume() await.
      this.started = true;
      this._ramp(this.master.gain, this.muted ? 0 : MASTER_LEVEL, this.ctx.currentTime, 0.7);
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
      this._ramp(this.master.gain, muted ? 0 : MASTER_LEVEL, this.ctx.currentTime, 0.2);
    }
  }

  _ramp(param, value, now, seconds) {
    const duration = Math.max(0.02, seconds);
    if (typeof param.cancelAndHoldAtTime === 'function') {
      param.cancelAndHoldAtTime(now);
    } else {
      const current = param.value;
      param.cancelScheduledValues(now);
      param.setValueAtTime(current, now);
    }
    param.linearRampToValueAtTime(value, now + duration);
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
    const target = this.musicWanted ? MUSIC_LEVEL : 0;
    const fade = instant ? 0.5 : (this.musicWanted ? 0.8 : 0.4);
    this._ramp(this.musicGain.gain, target, this.ctx.currentTime, fade);
    if (this.musicWanted) this.unlock();
  }

  _makeNoise(seconds = 6, fade = 0.4) {
    // A raw noise loop has a discontinuity at the loop point that filters as
    // a periodic tick. Fold a faded tail into the head so the buffer wraps
    // sample-continuously and can be looped forever without a seam.
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * seconds);
    const fadeLength = Math.max(1, Math.floor(sampleRate * fade));
    const raw = new Float32Array(length + fadeLength);
    for (let i = 0; i < raw.length; i += 1) raw[i] = Math.random() * 2 - 1;
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < fadeLength; i += 1) {
      const t = i / fadeLength;
      data[i] = raw[i] * t + raw[length + i] * (1 - t);
    }
    data.set(raw.subarray(fadeLength, length), fadeLength);
    return buffer;
  }

  _noiseSource() {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    return src;
  }

  _buildMusicFx() {
    const ctx = this.ctx;
    this.musicDelay = ctx.createDelay(1);
    this.musicDelay.delayTime.value = (60 / MUSIC_BPM) * 0.75;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.28;
    this.musicDelay.connect(feedback).connect(this.musicDelay);
    this.musicDelayWet = ctx.createGain();
    this.musicDelayWet.gain.value = 0.3;
    this.musicDelay.connect(this.musicDelayWet).connect(this.musicGain);
    this.musicDelaySend = ctx.createGain();
    this.musicDelaySend.gain.value = 0.42;
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

    const noiseLayer = (scene, { highpass, lowpass, bandpass, q = 0.8, gain = 0.05, rate = 0, depth = 0.3, pan = 0, panRate = 0, panDepth = 0.25 } = {}) => {
      const src = this._noiseSource();
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
      const panner = ctx.createStereoPanner();
      panner.pan.value = pan;
      node.connect(level).connect(panner).connect(scene.gain);
      if (rate) {
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = rate;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = gain * depth;
        lfo.connect(lfoGain).connect(level.gain);
        lfo.start();
      }
      if (panRate) {
        const panLfo = ctx.createOscillator();
        panLfo.type = 'sine';
        panLfo.frequency.value = panRate;
        const panGain = ctx.createGain();
        panGain.gain.value = panDepth;
        panLfo.connect(panGain).connect(panner.pan);
        panLfo.start();
      }
      src.start(ctx.currentTime, Math.random() * Math.max(0.05, this.noiseBuffer.duration - 0.2));
      return level;
    };

    const drone = (scene, freq, gain, type = 'sine', detune = 0, { rate = 0, depth = 0.25, pan = 0 } = {}) => {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.detune.value = detune;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = Math.max(320, freq * 6);
      const level = ctx.createGain();
      level.gain.value = gain;
      const panner = ctx.createStereoPanner();
      panner.pan.value = pan;
      osc.connect(filter).connect(level).connect(panner).connect(scene.gain);
      if (rate) {
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = rate;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = gain * depth;
        lfo.connect(lfoGain).connect(level.gain);
        lfo.start();
      }
      osc.start();
      return osc;
    };

    // RAIN — wide downpour, bright close patter, warm roof rumble.
    const rain = makeScene('rain', 1);
    noiseLayer(rain, { highpass: 700, lowpass: 7000, gain: 0.05, rate: 0.11, depth: 0.2, pan: -0.15, panRate: 0.03, panDepth: 0.3 });
    noiseLayer(rain, { bandpass: 2300, q: 0.45, gain: 0.02, pan: 0.25 });
    noiseLayer(rain, { lowpass: 170, gain: 0.028, rate: 0.04, depth: 0.3 });
    drone(rain, 55, 0.005, 'sine', 0, { rate: 0.04, depth: 0.3 });

    // CLEAR — airy night breeze over a distant city hum; sirens and car
    // passes arrive as occasional events instead of a constant loop.
    const clear = makeScene('clear', 0.85);
    noiseLayer(clear, { bandpass: 420, q: 0.45, gain: 0.011, rate: 0.05, depth: 0.55, pan: -0.18, panRate: 0.02, panDepth: 0.3 });
    noiseLayer(clear, { highpass: 3600, lowpass: 9000, gain: 0.0025, rate: 0.07, depth: 0.5, pan: 0.25 });
    drone(clear, 55, 0.007, 'sine', 0, { rate: 0.04, depth: 0.35 });
    drone(clear, 82.41, 0.0035, 'triangle', 4, { rate: 0.03, depth: 0.4 });

    // FOG — muffled close air, sub drone, bell-like foghorn events.
    const fog = makeScene('fog', 0.95);
    noiseLayer(fog, { lowpass: 140, gain: 0.05, rate: 0.04, depth: 0.25 });
    noiseLayer(fog, { bandpass: 380, q: 0.35, gain: 0.009, rate: 0.025, depth: 0.6, pan: 0.2, panRate: 0.02, panDepth: 0.3 });
    noiseLayer(fog, { highpass: 2800, lowpass: 6000, gain: 0.0018, rate: 0.06, depth: 0.6 });
    drone(fog, 41.2, 0.026, 'sine', 0, { rate: 0.03, depth: 0.2 });
    drone(fog, 61.74, 0.012, 'triangle', -5, { rate: 0.045, depth: 0.4 });

    // STORM — heavy rain, gusting wind and a deep rolling bed under thunder.
    const storm = makeScene('storm', 1.05);
    noiseLayer(storm, { highpass: 600, lowpass: 7600, gain: 0.075, rate: 0.15, depth: 0.28, pan: -0.1, panRate: 0.04, panDepth: 0.2 });
    noiseLayer(storm, { bandpass: 280, q: 0.4, gain: 0.04, rate: 0.055, depth: 0.7, pan: 0.2, panRate: 0.03, panDepth: 0.4 });
    noiseLayer(storm, { lowpass: 95, gain: 0.045, rate: 0.03, depth: 0.35 });
    drone(storm, 36.7, 0.018, 'sine', 0, { rate: 0.04, depth: 0.3 });
    drone(storm, 55, 0.008, 'triangle', 5, { rate: 0.06, depth: 0.4 });

    // SNOW — hushed wind, icy air and a thin high shimmer.
    const snow = makeScene('snow', 0.9);
    noiseLayer(snow, { bandpass: 850, q: 0.5, gain: 0.012, rate: 0.04, depth: 0.6, pan: -0.2, panRate: 0.02, panDepth: 0.35 });
    noiseLayer(snow, { highpass: 3200, lowpass: 9000, gain: 0.0025, rate: 0.07, depth: 0.5, pan: 0.25 });
    noiseLayer(snow, { lowpass: 260, gain: 0.007, rate: 0.03, depth: 0.3 });
    drone(snow, 164.81, 0.004, 'sine', 0, { rate: 0.05, depth: 0.4 });
    drone(snow, 110, 0.0035, 'triangle', -4, { rate: 0.04, depth: 0.5 });

    this.nextAmbientEvent = ctx.currentTime + 3;
    this.ambientTimer = setInterval(() => this._ambientTick(), 400);
  }

  setWeather(id, instant = false) {
    const next = this.weatherScenes[id] ? id : 'rain';
    this.pendingWeather = next;
    this.weather = next;
    if (!this.started || !this.weatherScenes[next]) return;
    const now = this.ctx.currentTime;
    // Never hard-cut scenes. A held ramp keeps a fast weather toggle from
    // snapping the bed and gives every preset a smooth 1.5s crossfade.
    for (const [key, scene] of Object.entries(this.weatherScenes)) {
      this._ramp(scene.gain.gain, key === next ? scene.level : 0, now, instant ? 0.4 : 1.5);
    }
    const music = WEATHER_MUSIC[next] || WEATHER_MUSIC.rain;
    this._ramp(this.musicFilter.frequency, music.cutoff, now, 1.8);
    this._ramp(this.musicDelayWet.gain, music.delay, now, 1.8);
    // Storm thunder is tied to the world's visible lightning instead of this
    // ambient event clock, so it never drifts away from the flash.
    this.nextAmbientEvent = next === 'storm' ? Number.POSITIVE_INFINITY : now + this._weatherEventDelay(next);
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
    // Storm thunder arrives through thunder() when lightning strikes.
    if (id === 'storm') return;
    if (id === 'fog') this._foghorn();
    else if (id === 'rain') this._droplet();
    else if (id === 'snow') this._iceChime();
    else if (id === 'clear') this._distantPass();
  }

  _scene(id) {
    return this.weatherScenes[id]?.gain || this.ambientGain;
  }

  // Public entry point for the world's lightning flash. Still fully
  // procedural WebAudio: no sample or downloaded asset is involved.
  thunder() {
    if (!this.started || this.muted || !this.ctx) return;
    this._thunder();
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

    const tireNoise = this._noiseSource();
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

  dryFire() {
    if (!this.started) return;
    this._noiseBurst(0.025, 2800, 0.012);
    this._tone(180, 0.03, 0.014, 'square', 120);
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
    this.nextNoteTime = this.ctx.currentTime + 0.15;
    this.step = 0;
    this.musicTimer = setInterval(() => this._musicTick(), 25);
    this._musicTick();
  }

  _musicTick() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const horizon = now + 0.28;
    if (!this.musicWanted || this.muted) {
      // The clock keeps running through pauses and mutes, but no audio is
      // scheduled. Resuming therefore rejoins the loop at the current bar
      // instead of restarting or dumping a backlog of overdue notes.
      if (this.nextNoteTime < now) {
        const missed = Math.ceil((now - this.nextNoteTime) / STEP_SECONDS);
        this.step = (this.step + missed) % LOOP_STEPS;
        this.nextNoteTime += missed * STEP_SECONDS;
      }
      return;
    }
    if (this.nextNoteTime < now - STEP_SECONDS * 2) {
      // A backgrounded tab can stall the timer for many seconds. Skip the
      // missed steps rather than firing them all in one audible burst.
      const missed = Math.ceil((now - this.nextNoteTime) / STEP_SECONDS);
      this.step = (this.step + missed) % LOOP_STEPS;
      this.nextNoteTime += missed * STEP_SECONDS;
    }
    while (this.nextNoteTime < horizon) {
      this._scheduleStep(this.step, this.nextNoteTime);
      this.nextNoteTime += STEP_SECONDS;
      this.step = (this.step + 1) % LOOP_STEPS;
    }
  }

  _scheduleStep(step, time) {
    if (!this.ctx || !this.musicGain) return;
    const ctx = this.ctx;
    const dest = this.musicGain;
    const send = this.musicDelaySend;
    const bar = Math.floor(step / STEPS_PER_BAR);
    const beat = step % STEPS_PER_BAR;
    const chord = CHORDS[bar % CHORDS.length];
    const root = chord.root;

    const tone = (freq, type, level, duration, { attack = 0.006, cutoff = 0, pan = 0, echo = false } = {}) => {
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
      osc.stop(time + duration + 0.03);
    };

    const noise = (type, frequency, duration, level, q = 1, pan = 0) => {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = type;
      filter.frequency.value = frequency;
      filter.Q.value = q;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(level, time + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
      if (pan) {
        const panner = ctx.createStereoPanner();
        panner.pan.value = pan;
        src.connect(filter).connect(gain).connect(panner).connect(dest);
      } else {
        src.connect(filter).connect(gain).connect(dest);
      }
      const offset = Math.random() * Math.max(0.1, this.noiseBuffer.duration - duration - 0.1);
      src.start(time, offset, duration + 0.03);
    };

    // Warm half-time kick with a softened transient.
    if (beat === 0 || beat === 10) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(135, time);
      osc.frequency.exponentialRampToValueAtTime(46, time + 0.14);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(0.5, time + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.34);
      osc.connect(gain).connect(dest);
      osc.start(time);
      osc.stop(time + 0.36);
    }

    // Hats and backbeat; the final bar of each half lifts into a fill.
    if (beat === 8) {
      noise('bandpass', 1750, 0.22, 0.12, 0.8);
      tone(190, 'triangle', 0.05, 0.12, { attack: 0.004 });
    }
    if (beat % 2 === 0) {
      const open = beat === 6 || beat === 14;
      noise('highpass', open ? 6800 : 8200, open ? 0.19 : 0.055, open ? 0.018 : 0.011, 0.7, beat % 4 ? 0.18 : -0.18);
    }
    if (bar % 8 === 7 && beat >= 12) {
      noise('bandpass', 2300 + (beat - 12) * 380, 0.12, 0.025 + (beat - 12) * 0.012, 1.2);
    }

    // Driving offbeat bass with a gentle filter sweep on every note.
    if (beat === 0 || beat === 3 || beat === 6 || beat === 8 || beat === 11 || beat === 14) {
      const octave = beat === 11 || beat === 14 ? 2 : 1;
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = root * octave;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.Q.value = 4;
      filter.frequency.setValueAtTime(620, time);
      filter.frequency.exponentialRampToValueAtTime(180, time + 0.22);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(0.12, time + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.25);
      osc.connect(filter).connect(gain).connect(dest);
      osc.start(time);
      osc.stop(time + 0.27);
    }

    // Detuned pad on each bar change, swelling into the next bar.
    if (beat === 0) {
      const swell = bar % 8 === 0 ? 0.026 : 0.019;
      for (const semi of chord.notes) {
        const freq = root * 4 * Math.pow(2, semi / 12);
        for (const detune of [-7, 6]) {
          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.value = freq;
          osc.detune.value = detune;
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 1150;
          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.0001, time);
          gain.gain.linearRampToValueAtTime(swell, time + 0.5);
          gain.gain.linearRampToValueAtTime(0.0001, time + 2.55);
          osc.connect(filter).connect(gain).connect(dest);
          osc.start(time);
          osc.stop(time + 2.6);
        }
      }
    }

    // Sparse arpeggio through the tempo-synced dotted-eighth delay.
    if (beat % 2 === 0) {
      const pattern = [0, 2, 1, 3, 2, 1, 0, 2];
      const semi = chord.notes[pattern[(step / 2) % pattern.length] % chord.notes.length];
      tone(root * 8 * Math.pow(2, semi / 12), 'triangle', 0.022, 0.24, {
        cutoff: 4200,
        pan: beat % 4 === 0 ? -0.35 : 0.35,
        echo: true,
      });
    }

    // Melody arrives in the second half and resolves before the loop seam.
    const lead = LEAD[step];
    if (lead) {
      const [midi, duration] = lead;
      const freq = 440 * Math.pow(2, (midi - 69) / 12);
      for (const detune of [-6, 6]) {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        osc.detune.value = detune;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 3000;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.0001, time);
        gain.gain.linearRampToValueAtTime(0.016, time + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
        osc.connect(filter).connect(gain).connect(dest);
        gain.connect(send);
        osc.start(time);
        osc.stop(time + duration + 0.03);
      }
      tone(freq / 2, 'sine', 0.012, Math.min(duration, 1.4));
    }

    // Soft cymbal wash plus a short reverse-ish swell mask the loop point.
    if (step % 128 === 0) {
      noise('highpass', 5200, 1.3, 0.04, 0.7);
      noise('bandpass', 900, 0.9, 0.018, 0.4, -0.3);
    }
  }
}
