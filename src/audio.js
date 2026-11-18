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
      this.master.gain.value = this.muted ? 0 : 0.8;
      this.master.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.16;
      this.musicGain.connect(this.master);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.value = 0.16;
      this.ambientGain.connect(this.master);

      this.noiseBuffer = this._makeNoise(2.5);
      this._buildAmbience();
      this._buildEngine();
      this._startMusic();
      this.setMuted(this.muted);
      // Only flag as started once the whole graph exists, so no sound can
      // fire into a half-built node chain during the resume() await.
      this.started = true;
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
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.8, this.ctx.currentTime + 0.12);
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

  _buildAmbience() {
    const ctx = this.ctx;
    const rain = this._noiseSource(2.5);
    const rainFilter = ctx.createBiquadFilter();
    rainFilter.type = 'highpass';
    rainFilter.frequency.value = 900;
    const rainFilter2 = ctx.createBiquadFilter();
    rainFilter2.type = 'lowpass';
    rainFilter2.frequency.value = 5400;
    const rainGain = ctx.createGain();
    rainGain.gain.value = 0.085;
    rain.connect(rainFilter).connect(rainFilter2).connect(rainGain).connect(this.ambientGain);
    rain.start();
    this.rainGain = rainGain;

    const rumble = this._noiseSource(2.5);
    const rumbleFilter = ctx.createBiquadFilter();
    rumbleFilter.type = 'lowpass';
    rumbleFilter.frequency.value = 160;
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.value = 0.14;
    rumble.connect(rumbleFilter).connect(rumbleGain).connect(this.ambientGain);
    rumble.start();

    for (const freq of [43, 54.5]) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.value = 0.045;
      osc.connect(gain).connect(this.ambientGain);
      osc.start();
    }

    // Distant siren shimmer.
    const siren = ctx.createOscillator();
    siren.type = 'sine';
    siren.frequency.value = 620;
    const sirenLfo = ctx.createOscillator();
    sirenLfo.type = 'sine';
    sirenLfo.frequency.value = 0.09;
    const sirenLfoGain = ctx.createGain();
    sirenLfoGain.gain.value = 90;
    sirenLfo.connect(sirenLfoGain).connect(siren.frequency);
    const sirenGain = ctx.createGain();
    sirenGain.gain.value = 0.006;
    const sirenPan = ctx.createStereoPanner();
    sirenPan.pan.value = 0.55;
    siren.connect(sirenGain).connect(sirenPan).connect(this.ambientGain);
    siren.start();
    sirenLfo.start();
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
    const schedule = () => {
      if (!this.ctx) return;
      while (this.nextNoteTime < this.ctx.currentTime + 0.3) {
        this._scheduleStep(this.step, this.nextNoteTime);
        this.nextNoteTime += 60 / 96 / 4;
        this.step = (this.step + 1) % 64;
      }
    };
    this.musicTimer = setInterval(schedule, 50);
    schedule();
  }

  _scheduleStep(step, time) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const bar = Math.floor(step / 16);
    const sixteenth = step % 16;
    const chordRoots = [55, 43.65, 65.41, 49];
    const root = chordRoots[bar];
    // Kick
    if (sixteenth === 0 || sixteenth === 8 || (bar === 3 && sixteenth === 14)) {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, time);
      osc.frequency.exponentialRampToValueAtTime(42, time + 0.14);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.17, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.24);
      osc.connect(gain).connect(this.musicGain);
      osc.start(time);
      osc.stop(time + 0.26);
    }
    // Snare on backbeat
    if (sixteenth === 4 || sixteenth === 12) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1900;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.045, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);
      src.connect(filter).connect(gain).connect(this.musicGain);
      src.start(time, Math.random() * 1.4, 0.2);
    }
    // Hats
    if (sixteenth % 2 === 0) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 7000;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(sixteenth % 4 === 0 ? 0.014 : 0.007, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.055);
      src.connect(filter).connect(gain).connect(this.musicGain);
      src.start(time, Math.random() * 1.7, 0.08);
    }
    // Synth bass eighths
    if (sixteenth % 2 === 0) {
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      const octave = sixteenth % 8 === 6 ? 1.5 : 1;
      osc.frequency.value = root * octave;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, time);
      filter.frequency.exponentialRampToValueAtTime(180, time + 0.22);
      filter.Q.value = 3;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.035, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.22);
      osc.connect(filter).connect(gain).connect(this.musicGain);
      osc.start(time);
      osc.stop(time + 0.24);
    }
    // Arpeggio
    if (sixteenth % 2 === 1 || bar === 2) {
      const arpNotes = [0, 3, 7, 10, 12, 10, 7, 3];
      const semis = arpNotes[(step + bar * 2) % arpNotes.length];
      const freq = root * Math.pow(2, semis / 12) * 4;
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 2400;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.013, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.2);
      const pan = ctx.createStereoPanner();
      pan.pan.value = Math.sin(step * 0.6) * 0.5;
      osc.connect(filter).connect(gain).connect(pan).connect(this.musicGain);
      osc.start(time);
      osc.stop(time + 0.22);
    }
    // Pad on each bar
    if (sixteenth === 0) {
      for (const semi of [0, 3, 7]) {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = root * Math.pow(2, semi / 12) * 2;
        osc.detune.value = (Math.random() - 0.5) * 10;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, time);
        gain.gain.linearRampToValueAtTime(0.009, time + 0.5);
        gain.gain.linearRampToValueAtTime(0.0001, time + 3.8);
        osc.connect(filter).connect(gain).connect(this.musicGain);
        osc.start(time);
        osc.stop(time + 4);
      }
    }
  }
}
