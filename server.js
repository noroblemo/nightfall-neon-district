/* Nightfall multiplayer relay + static host. */
'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { WebSocketServer } = require('ws');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const MAX_PLAYERS = 4;
const PLAYER_COLORS = [0x36ecff, 0xff2d95, 0xffb44d, 0xa86bff];
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.mp3': 'audio/mpeg',
  '.glb': 'model/gltf-binary',
  '.wasm': 'application/wasm',
};

const rooms = new Map();

function randomId(length = 10) {
  const bytes = crypto.randomBytes(length);
  let out = '';
  for (const b of bytes) out += 'abcdefghijklmnopqrstuvwxyz0123456789'[b % 36];
  return out;
}

function makeCode() {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const bytes = crypto.randomBytes(5);
    let code = '';
    for (const b of bytes) code += CODE_CHARS[b % CODE_CHARS.length];
    if (!rooms.has(code)) return code;
  }
  return randomId(6).toUpperCase();
}

function cleanName(value) {
  return String(value || 'OPERATIVE')
    .replace(/[^\w .\-']/g, '')
    .trim()
    .slice(0, 16) || 'OPERATIVE';
}

function roomSnapshot(room) {
  return [...room.players.values()].map((p) => ({ id: p.id, name: p.name, color: p.color }));
}

function send(ws, payload) {
  if (ws.readyState === ws.OPEN) {
    try {
      ws.send(JSON.stringify(payload));
    } catch (err) {
      console.warn('send failed', err.message);
    }
  }
}

function broadcast(room, payload, exceptId = null) {
  for (const player of room.players.values()) {
    if (player.id === exceptId) continue;
    send(player.ws, payload);
  }
}

function promoteHost(room) {
  if (room.players.size === 0) {
    rooms.delete(room.code);
    return;
  }
  if (room.players.has(room.hostId)) return;
  const next = room.players.values().next().value;
  room.hostId = next.id;
  broadcast(room, { type: 'host-changed', hostId: next.id });
}

function joinRoom(room, ws, name) {
  const color = PLAYER_COLORS[room.players.size % PLAYER_COLORS.length];
  const player = {
    id: `p_${randomId(9)}`,
    name: cleanName(name),
    color,
    ws,
    joinedAt: Date.now(),
  };
  const existing = roomSnapshot(room);
  if (!room.hostId) room.hostId = player.id;
  room.players.set(player.id, player);
  ws.playerId = player.id;
  ws.roomCode = room.code;

  send(ws, {
    type: 'welcome',
    selfId: player.id,
    roomCode: room.code,
    hostId: room.hostId,
    players: existing.concat({ id: player.id, name: player.name, color: player.color }),
    server: true,
  });
  broadcast(room, {
    type: 'peer-join',
    player: { id: player.id, name: player.name, color: player.color },
  }, player.id);
  console.log(`[room ${room.code}] ${player.name} joined (${room.players.size}/${MAX_PLAYERS})`);
  return player;
}

const server = http.createServer((req, res) => {
  let url;
  try {
    url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  if (url.pathname === '/api/health') {
    const players = [...rooms.values()].reduce((n, r) => n + r.players.size, 0);
    const body = JSON.stringify({
      ok: true,
      game: 'nightfall',
      rooms: rooms.size,
      players,
      uptime: Math.round(process.uptime()),
    });
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(body);
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405);
    res.end('Method not allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }
  if (pathname === '/') pathname = '/index.html';
  const filePath = path.resolve(ROOT, `.${pathname}`);
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== path.join(ROOT, 'index.html')) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      // Single-page fallback for room links.
      if (!path.extname(pathname)) {
        const indexPath = path.join(ROOT, 'index.html');
        fs.createReadStream(indexPath)
          .on('error', () => { res.writeHead(500); res.end('Server error'); })
          .pipe(res.writeHead(200, { 'Content-Type': MIME['.html'], 'Cache-Control': 'no-cache' }));
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ['.html', '.js', '.css'].includes(ext) ? 'no-cache' : 'public, max-age=86400',
      'X-Content-Type-Options': 'nosniff',
    };
    if (req.method === 'HEAD') {
      res.writeHead(200, headers);
      res.end();
      return;
    }
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

const wss = new WebSocketServer({ noServer: true, maxPayload: 64 * 1024 });

server.on('upgrade', (req, socket, head) => {
  let url;
  try {
    url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch {
    socket.destroy();
    return;
  }
  if (url.pathname !== '/ws') {
    socket.destroy();
    return;
  }
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req, url);
  });
});

wss.on('connection', (ws, req, url) => {
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  const action = url.searchParams.get('action') || 'join';
  const name = cleanName(url.searchParams.get('name'));

  if (action === 'create') {
    const code = makeCode();
    const room = {
      code,
      players: new Map(),
      hostId: null,
      createdAt: Date.now(),
      lastActivity: Date.now(),
    };
    rooms.set(code, room);
    joinRoom(room, ws, name);
    console.log(`[room ${code}] created by ${name}`);
  } else {
    const code = String(url.searchParams.get('room') || '').toUpperCase().slice(0, 6);
    const room = rooms.get(code);
    if (!room) {
      send(ws, { type: 'error', message: 'No city found with that code. Ask your cousin for a fresh invite.' });
      setTimeout(() => ws.close(), 120);
      return;
    }
    if (room.players.size >= MAX_PLAYERS) {
      send(ws, { type: 'error', message: 'That district is full (4 operatives max).' });
      setTimeout(() => ws.close(), 120);
      return;
    }
    joinRoom(room, ws, name);
  }

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw.toString());
    } catch {
      return;
    }
    if (!msg || typeof msg !== 'object' || !ws.roomCode) return;
    const room = rooms.get(ws.roomCode);
    if (!room) return;
    room.lastActivity = Date.now();

    if (msg.type === 'ping') {
      send(ws, { type: 'pong', t: msg.t });
      return;
    }
    if (['welcome', 'peer-join', 'peer-leave', 'host-changed', 'room-info'].includes(msg.type)) return;
    const player = room.players.get(ws.playerId);
    if (!player) return;
    const relay = { ...msg, from: player.id };
    broadcast(room, relay, player.id);
  });

  ws.on('close', () => {
    if (!ws.roomCode) return;
    const room = rooms.get(ws.roomCode);
    if (!room) return;
    room.players.delete(ws.playerId);
    broadcast(room, { type: 'peer-leave', id: ws.playerId });
    if (room.players.size === 0) {
      rooms.delete(room.code);
      console.log(`[room ${room.code}] closed`);
    } else {
      promoteHost(room);
      console.log(`[room ${room.code}] player left (${room.players.size} remain)`);
    }
  });

  ws.on('error', (err) => {
    console.warn('WebSocket error', err.message);
  });
});

const heartbeat = setInterval(() => {
  for (const ws of wss.clients) {
    if (ws.isAlive === false) {
      ws.terminate();
      continue;
    }
    ws.isAlive = false;
    ws.ping();
  }
  const cutoff = Date.now() - 1000 * 60 * 60 * 4;
  for (const [code, room] of rooms) {
    if (room.players.size === 0 && room.lastActivity < cutoff) rooms.delete(code);
  }
}, 30000);

wss.on('close', () => clearInterval(heartbeat));

server.listen(PORT, HOST, () => {
  console.log('');
  console.log('  NIGHTFALL // NEON DISTRICT');
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Network: http://<your-lan-ip>:${PORT}`);
  console.log('  Multiplayer relay ready on /ws');
  console.log('');
});

process.on('SIGINT', () => {
  clearInterval(heartbeat);
  wss.close();
  server.close(() => process.exit(0));
});
process.on('SIGTERM', () => {
  clearInterval(heartbeat);
  wss.close();
  server.close(() => process.exit(0));
});
