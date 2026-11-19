# NIGHTFALL // NEON DISTRICT

A browser-based co-op open-world action game with Forza-style arcade driving, built with Three.js. Neon-noir city, heist contract, hostile security drones and guards, drivable supercars — play solo or online with a friend.

**▶ Play now: https://noroblemo.github.io/nightfall-neon-district/**

> The original calculator app lives on in [`legacy-calculator/`](legacy-calculator/) and keeps its own repo.

## Features

- **Open world** — a procedural neon city (~436m across) with buildings, plaza, metro landmarks, dynamic lights and bloom post-processing.
- **Switchable weather** — rain, clear skies, dense fog, electric storms and snow, with smooth transitions. Press `V` in-game or use the **WEATHER** toggle in the pause menu (the host picks for the room).
- **Contract ladder** — six escalating heist contracts, from GHOST PROTOCOL to LAST SIGNAL, with more caches, tighter security and longer extractions each run. Clear one and the next begins automatically.
- **Driving** — arcade supercar physics with boost, handbrake drifts, tire trails, chase camera and engine audio.
- **Combat** — third-person over-shoulder shooting with tracers, hitmarkers, reloads, guards and scout drones with detection/leash AI.
- **Online multiplayer** — room codes, up to 4 operatives per room on the WebSocket relay (2 on P2P fallback). Host-authoritative mission/enemy simulation with client prediction for movement.
- **Performance** — dynamic resolution scaling, quality presets, ACES tone mapping; targets 60 FPS on laptops.

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
| `R` | Reload (foot) / flip car (driving) |
| `Q` | Map ping for your partner |
| `V` | Cycle weather (or use the pause-menu weather toggle) |
| `T` | Chat |
| `M` | Mute |

## Multiplayer architecture

- `server.js` — static file host + WebSocket relay (`/ws`). Relays gameplay messages inside rooms; no game simulation server-side. `/api/health` for status.
- Host client owns the mission: the contract ladder, shards, enemies, extraction and weather. Guests send intents (`shard-request`, `shot`, `weather-request`, `chat`, `map-ping`, `player-state`); the host validates (range + line-of-sight anti-cheat) and broadcasts authoritative state at ~11 Hz.
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
