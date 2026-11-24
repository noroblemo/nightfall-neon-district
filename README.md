# NIGHTFALL // NEON DISTRICT

A browser-based co-op open-world action game with Forza-style arcade driving, built with Three.js. Neon-noir city, heist contract, hostile security drones and guards, drivable supercars — play solo or online with a friend.

**▶ Play now: https://noroblemo.github.io/nightfall-neon-district/**

> The original calculator app lives on in [`legacy-calculator/`](legacy-calculator/) and keeps its own repo.

## Features

- **Open world** — a procedural neon city (~436m across) with buildings, plaza, metro landmarks, dynamic lights, bloom post-processing and a finished, collidable perimeter.
- **Switchable weather** — rain, clear skies, dense fog, electric storms and snow, with smooth transitions and a distinct soundscape for each: rain patter, city air, foghorns, lightning-triggered thunder and icy wind. Press `V` in-game or use the **WEATHER** toggle in the pause menu (the host picks for the room).
- **Adaptive audio** — an original synthwave score during contracts, plus positional foley for weapons, footsteps, vehicles and pickups. `M` or the pause-menu button mutes everything.
- **Contract ladder** — nine escalating contracts, from GHOST PROTOCOL through timed circuits, courier runs and bounties to LAST SIGNAL. Clear one and the next begins automatically.
- **Random races** — BIKE RACE and CAR RACE gates sit beside the parked vehicles at the plaza. Press `G` at a gate (or request one as a guest) to launch a timed checkpoint sprint along one of two randomly chosen road-grid routes. Credits and ammo are awarded on a win; races never alter the nine-contract ladder.
- **Driving** — arcade supercar physics and Tron-style light cycles with boost, handbrake drifts, tire trails, chase cameras and engine audio. Oriented car/bike hulls stop vehicles and pedestrians from cutting through parked or moving traffic.
- **Operator progression** — choose a male or female Blender-rigged operator on the landing screen or in Options, then spend credits earned from contracts on Vitality, Endurance, Firepower and Overdrive upgrades. Selections and upgrades persist locally and sync to co-op partners.
- **Combat** — third-person over-shoulder shooting with tracers, hitmarkers, controlled recoil, tighter ADS accuracy, wall impacts and faster reloads. Larger magazines and recoverable reserves come from kills, caches, race gates and mission resets. Guards and scout drones use detection/leash AI.
- **Online multiplayer** — room codes, up to 4 operatives per room on the WebSocket relay (2 on P2P fallback). Host-authoritative mission/enemy simulation with client prediction for movement.
- **Performance** — instanced traffic and static geometry merges, partial effect-buffer uploads, frame-time-driven dynamic resolution, and quality presets that reduce real geometry/particle/light work. BALANCED targets a locked 60 FPS on laptops.

## Quick start

```bash
npm install
npm run build     # minified bundle into dist/game.js
npm start         # serves the game + multiplayer relay on http://localhost:3000
```

For development with auto-rebuild on save:

```bash
npm run dev       # esbuild watch (unminified + sourcemap)
npm start         # in another terminal
```

Open `http://localhost:3000` and click **CONTINUE SOLO**, or host/join a room for online co-op.

## Operator asset

Two selectable operatives and the light cycle are rigged Blender GLBs:

- `assets/operator_male.glb` / `assets/operator_female.glb` — lean tactical suits, Tron-style helmets with player-coloured light lines, and a thigh holster. Both carry `Idle`, `Walk`, `Sprint`, `Aim`, `AimWalk`, `Air` and the seated `Ride` clip.
- `assets/bike.glb` — a 2.5m light cycle with `wheel_front` / `wheel_rear` steer-and-roll pivots and `Idle`, `Ride`, `Boost` chassis animations.

Rebuild them with:

```bash
/Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup \
  --python tools/build_operator.py -- --render
/Applications/Blender.app/Contents/MacOS/Blender -b --factory-startup \
  --python tools/build_bike.py -- --render
```

`tools/build_operator.py` exports both variants (and keeps `assets/operator.glb` as a male alias). Bump `ASSET_VERSION` in `src/main.js` after rebuilding so browsers and CDNs fetch the new GLBs. Each asset loads independently; missing files fall back to the procedural operator/bike without breaking gameplay.

## Audio and contracts

The soundtrack is fully procedural WebAudio: a 16-bar, 84 BPM D-minor night-drive loop with a weather-adaptive lowpass and dotted-eighth delay. All five weather presets have their own always-running ambience beds with smooth crossfades and unique incidental events (rain drips, clear-sky car passes, foghorns, lightning-triggered thunder and ice chimes). A crossfaded 6-second noise buffer, held gain ramps, and a musical clock that keeps running while the music is faded out keep loops and pause/resume free of clicks or restart bursts.

The nine contracts are distinct missions, not scaled copies of one objective:

1. **GHOST PROTOCOL** — stealth cache breach.
2. **BLACKOUT RUN** — cut three grid nodes in order.
3. **CROWN HEIST** — lift executive caches, then exfil by marked car.
4. **SILENT AUCTION** — purge security before the lots unlock.
5. **ZERO HOUR** — survive a timed security sweep, then breach caches.
6. **LAST SIGNAL** — hold inside signal relays until each upload completes.
7. **NEON CIRCUIT** — a checkpoint time trial on foot is not allowed: take a car or light cycle and hit the gates in order. Running out of time forfeits the bonus and calls in backup.
8. **DATA COURIER** — collect the package and deliver it to a chain of ordered drops across the grid.
9. **BOUNTY HUNT** — neutralize five marked security units, then secure the bounty files. The clock protects your completion bonus.

The host remains authoritative for mission state, weather and enemy spawns in co-op.

## Playing with a friend (Mac ↔ Windows)

Both players just need a modern browser (Chrome/Edge/Firefox/Safari). Three ways to connect, easiest first:

### 0. Straight from GitHub Pages (zero setup)

Share **https://noroblemo.github.io/nightfall-neon-district/** with your friend. The static site has no game relay, so online play uses the built-in **Peer-to-Peer** mode (2 players, WebRTC via PeerJS): one of you clicks **HOST THE CITY**, the other enters the room code and clicks **JOIN**. Works across the internet as long as your network allows WebRTC; no install needed.

### 1. Same Wi-Fi / LAN (fastest, relay rooms up to 4)

On the Mac (host machine):

```bash
npm start
```

Find the Mac's local IP (**System Settings → Wi-Fi → Details**, or `ipconfig getifaddr en0`) — e.g. `192.168.1.42`. On the Windows laptop, open:

```
http://192.168.1.42:3000
```

One of you clicks **01 HOST THE CITY** and shares the room code; the other enters the code and clicks **JOIN**. If the page doesn't load, allow Node.js through the macOS firewall (System Settings → Network → Firewall) or forward port 3000.

### 2. Play over the internet with a tunnel

If you're not on the same network, expose your local server temporarily:

```bash
npx cloudflared tunnel --url http://localhost:3000
```

(any tunnel works — cloudflared, ngrok `npx ngrok http 3000`, Tailscale Funnel). Share the printed URL with your friend; the WebSocket relay at `/ws` works through it automatically. The Mac stays the host; no accounts or deployment needed.

### 3. Deploy it (always-on)

Any Node host works:

- **Render / Railway / Fly.io**: `npm run build` then `npm start`. The server honors `PORT`. For Render: build command `npm install && npm run build`, start command `npm start`, web service.
- **Any static host + separate relay**: static hosts (GitHub Pages etc.) can serve the game itself, but the WebSocket relay needs a Node process, so pair it with a small VM/server and point `server.js`'s `PORT`/proxy at it. Without a relay the game falls back to browser-to-browser P2P via PeerJS (2 players max, NAT permitting).

## Controls

| Input | Action |
| --- | --- |
| `W A S D` / arrows | Move / drive |
| `Shift` | Sprint on foot (uses stamina) / Boost in a car |
| `Space` | Jump (foot) / Handbrake (car) |
| `Mouse` | Aim; `LMB` fire |
| `F` | Enter / exit vehicle |
| `E` | Interact — breach data cache |
| `G` | Start a random bike/car race while standing at a plaza gate |
| `R` | Reload (foot) / flip car (driving) |
| `Q` | Map ping for your partner |
| `V` | Cycle weather (or use the pause-menu weather toggle) |
| `T` | Chat |
| `M` | Mute |

## Multiplayer architecture

- `server.js` — static file host + WebSocket relay (`/ws`). Relays gameplay messages inside rooms; no game simulation server-side. `/api/health` for status.
- Host client owns the mission and optional races: the contract ladder, shards, enemies, extraction, weather, race ownership/timers/routes and storm strikes. Guests send intents (`shard-request`, `activity-request`, `shot`, `weather-request`, `chat`, `map-ping`, `player-state`); the host validates (range + line-of-sight anti-cheat, assigned racer only, mount acknowledgement) and broadcasts authoritative state at ~11 Hz. Remote shots use base weapon damage, not the host's upgrades.
- If the relay is unreachable, `src/network.js` falls back to PeerJS WebRTC mesh (2 players).

## Project layout

```
index.html          entry page + HUD markup
style.css           all UI styling
server.js           static host + WS relay
src/main.js         renderer bootstrap, quality presets
src/game.js         gameplay: player, vehicles, enemies, mission, networking glue
src/world.js        procedural city, shard sites, car spawns
src/models.js       character/car/guard/drone builders
src/effects.js      particles, tracers, explosions
src/textures.js     canvas-generated textures
src/hud.js          HUD, minimap, toasts, feed
src/audio.js        WebAudio music, ambience, SFX
src/network.js      WS relay + PeerJS transports
src/utils.js        math/RNG helpers
dist/game.js        esbuild bundle (committed build output)
legacy-calculator/  the original calculator app, preserved
```

## Notes

- Committed `dist/game.js` means the game also works on purely static hosts (solo + P2P mode); the relay just adds 4-player rooms.
- Audio starts on first user gesture (browser policy).
- Works best in Chrome/Edge; Safari is supported but slightly heavier on CPU.
