import Peer from 'peerjs';
import { makeId, makeRoomCode } from './utils.js';

const PLAYER_COLORS = [0x36ecff, 0xff2d95, 0xffb44d, 0xa86bff];
const PEER_PREFIX = 'nightfall-nx-v1-';
const ROOM_ALPHABET = /^[A-Z0-9]{4,6}$/;

const ICE_SERVERS = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:global.stun.twilio.com:3478' },
];

export async function detectGameServer() {
  if (typeof window === 'undefined' || window.location.protocol === 'file:') return false;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1800);
    const res = await fetch('/api/health', { signal: controller.signal, cache: 'no-store' });
    clearTimeout(timer);
    if (!res.ok) return false;
    const data = await res.json();
    return data && data.ok === true;
  } catch {
    return false;
  }
}

export function sanitizeRoom(code) {
  return String(code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}

export class Network {
  constructor() {
    this.handlers = new Map();
    this.mode = null;
    this.selfId = null;
    this.roomCode = null;
    this.hostId = null;
    this.players = new Map();
    this.connected = false;
    this.ws = null;
    this.peer = null;
    this.connections = new Map();
    this.p2pGuest = null;
    this.pingTimer = null;
    this.pingSentAt = 0;
    this.latency = null;
    this.server = false;
    this._closed = false;
  }

  on(event, handler) {
    if (!this.handlers.has(event)) this.handlers.set(event, new Set());
    this.handlers.get(event).add(handler);
    return () => this.handlers.get(event)?.delete(handler);
  }

  emit(event, data) {
    const set = this.handlers.get(event);
    if (!set) return;
    for (const handler of set) {
      try {
        handler(data);
      } catch (err) {
        console.error('Network handler error', event, err);
      }
    }
  }

  get isHost() {
    return this.selfId !== null && this.selfId === this.hostId;
  }

  get playerCount() {
    return this.players.size + 1;
  }

  getPlayer(id) {
    return this.players.get(id);
  }

  async connect({ mode, room, name, useServer }) {
    this.name = (name || 'OPERATIVE').slice(0, 16);
    this._closed = false;
    if (useServer) {
      this.server = true;
      this.mode = 'server';
      return this._connectServer({ mode, room });
    }
    this.server = false;
    this.mode = 'p2p';
    return this._connectP2P({ mode, room });
  }

  _connectServer({ mode, room }) {
    return new Promise((resolve, reject) => {
      const proto = window.location.protocol === 'https:' ? 'wss' : 'ws';
      const action = mode === 'host' ? 'create' : 'join';
      let code = action === 'join' ? sanitizeRoom(room) : '';
      if (action === 'join' && !ROOM_ALPHABET.test(code)) {
        reject(new Error('That room code is not valid.'));
        return;
      }
      const params = new URLSearchParams({
        action,
        name: this.name,
      });
      if (code) params.set('room', code);
      const ws = new WebSocket(`${proto}://${window.location.host}/ws?${params.toString()}`);
      this.ws = ws;
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        try { ws.close(); } catch {}
        reject(new Error('The city server did not answer. Try again or use Peer-to-Peer.'));
      }, 12000);

      const fail = (message) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        try { ws.close(); } catch {}
        reject(new Error(message));
      };

      ws.onopen = () => {
        this.emit('transport-open');
        this._startPing();
      };
      ws.onerror = () => {
        fail('Could not reach the multiplayer server.');
      };
      ws.onclose = () => {
        if (!settled) {
          fail('The room closed before the connection completed.');
          return;
        }
        if (this._closed) return;
        this.connected = false;
        this.emit('close', { reason: 'The server connection was lost.' });
      };
      ws.onmessage = (event) => {
        let msg;
        try { msg = JSON.parse(event.data); } catch { return; }
        if (msg.type === 'welcome') {
          settled = true;
          clearTimeout(timer);
          this.selfId = msg.selfId;
          this.roomCode = msg.roomCode;
          this.hostId = msg.hostId;
          this.players = new Map((msg.players || []).filter((p) => p.id !== this.selfId).map((p) => [p.id, p]));
          this.selfPlayer = (msg.players || []).find((p) => p.id === this.selfId) || {
            id: this.selfId,
            name: this.name,
            color: PLAYER_COLORS[0],
          };
          this.connected = true;
          this.latency = 0;
          this.emit('ready', {
            selfId: this.selfId,
            self: this.selfPlayer,
            roomCode: this.roomCode,
            hostId: this.hostId,
            players: [...this.players.values()],
            server: true,
          });
          return;
        }
        if (msg.type === 'pong') {
          this.latency = Math.max(1, Math.round(performance.now() - this.pingSentAt));
          this.emit('latency', this.latency);
          return;
        }
        if (msg.type === 'peer-join') {
          this.players.set(msg.player.id, msg.player);
          this.emit('playerJoin', msg.player);
          return;
        }
        if (msg.type === 'peer-leave') {
          const player = this.players.get(msg.id);
          this.players.delete(msg.id);
          this.emit('playerLeave', { id: msg.id, player });
          return;
        }
        if (msg.type === 'host-changed') {
          this.hostId = msg.hostId;
          this.emit('hostChanged', msg.hostId);
          return;
        }
        if (msg.type === 'error') {
          this.emit('notice', { text: msg.message, level: 'error' });
          if (!settled) fail(msg.message || 'Could not join the room.');
          return;
        }
        if (msg.type === 'ping') {
          this._sendRaw({ type: 'pong' });
          return;
        }
        if (msg.type === 'pong') return;
        if (msg.type === 'room-info') {
          this.emit('roomInfo', msg);
          return;
        }
        if (msg.from) {
          this.emit('message', msg);
        }
      };
    });
  }

  _stopPing() {
    if (this.pingTimer) clearInterval(this.pingTimer);
    this.pingTimer = null;
  }

  _connectP2P({ mode, room }) {
    return new Promise((resolve, reject) => {
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        this._teardown();
        reject(new Error('Timed out creating the peer link. Move to a different network or deploy the included server.'));
      }, 14000);
      const done = (result) => {
        settled = true;
        clearTimeout(timer);
        this.connected = true;
        this.latency = null;
        this.emit('ready', result);
        resolve(result);
      };

      const buildPeer = (id) => {
        try {
          return new Peer(id, {
            debug: 0,
            config: { iceServers: ICE_SERVERS },
          });
        } catch (err) {
          reject(new Error('WebRTC is unavailable in this browser.'));
          return null;
        }
      };

      if (mode === 'host') {
        let code = sanitizeRoom(room) || makeRoomCode(5);
        this.selfId = 'host';
        this.roomCode = code;
        this.hostId = 'host';
        this.players = new Map();
        this.p2pPlayers = new Map();
        this.p2pHostInfo = { id: 'host', name: this.name, color: PLAYER_COLORS[0] };
        const peer = buildPeer(PEER_PREFIX + code);
        if (!peer) return;
        this.peer = peer;
        peer.on('open', () => {
          done({
            selfId: 'host',
            self: this.p2pHostInfo,
            roomCode: code,
            hostId: 'host',
            players: [],
            server: false,
          });
        });
        peer.on('connection', (conn) => {
          if (this.p2pGuest) {
            conn.on('open', () => {
              try { conn.send({ type: 'error', message: 'This room already has two players.' }); } catch {}
              setTimeout(() => conn.close(), 350);
            });
            return;
          }
          const attach = () => this._handleP2PConnection(conn, 'guest');
          if (conn.open) attach();
          else conn.on('open', attach);
          conn.on('error', (err) => {
            this.emit('notice', { text: 'Peer link error. Check your network.', level: 'error' });
            console.warn('P2P connection error', err);
          });
        });
        peer.on('error', (err) => {
          console.warn('Peer error', err);
          let text = 'Peer-to-peer connection failed.';
          if (err?.type === 'unavailable-id') text = 'That room code is already in use. Try again.';
          else if (err?.type === 'network' || err?.type === 'server-error') text = 'The public matchmaking service is unreachable. Deploy the included server for a reliable online game.';
          else if (err?.type === 'peer-unavailable') text = 'No city found with that code. Check the code and try again.';
          if (!settled) {
            clearTimeout(timer);
            settled = true;
            reject(new Error(text));
          } else {
            this.emit('notice', { text, level: 'error' });
          }
        });
      } else {
        const code = sanitizeRoom(room);
        if (!ROOM_ALPHABET.test(code)) {
          reject(new Error('That room code is not valid.'));
          return;
        }
        this.roomCode = code;
        this.selfId = 'guest';
        this.hostId = 'host';
        this.p2pPlayers = new Map();
        this.p2pHostInfo = null;
        const peer = buildPeer();
        if (!peer) return;
        this.peer = peer;
        let conn = null;
        peer.on('open', () => {
          conn = peer.connect(PEER_PREFIX + code, {
            reliable: true,
            metadata: { name: this.name, color: PLAYER_COLORS[1] },
          });
          this.p2pGuest = conn;
          this.connections.set('host', conn);
          conn.on('open', () => {
            this._startPing();
            this._sendToConnection('host', {
              type: 'hello',
              name: this.name,
              color: PLAYER_COLORS[1],
            });
          });
          conn.on('data', (data) => this._receiveP2P(data, 'host'));
          conn.on('close', () => {
            if (this._closed) return;
            this.connected = false;
            this.emit('close', { reason: 'The host closed the city link.' });
          });
          conn.on('error', (err) => {
            console.warn('P2P guest connection error', err);
            if (!settled) {
              clearTimeout(timer);
              settled = true;
              reject(new Error('The peer link dropped. Check both networks and retry.'));
            }
          });
        });
        peer.on('error', (err) => {
          console.warn('Peer error', err);
          let text = 'Could not join the peer city.';
          if (err?.type === 'peer-unavailable') text = 'No city found with that code. Ask your cousin to check the code.';
          else if (err?.type === 'network' || err?.type === 'server-error') text = 'The public matchmaking service is unreachable. Try again or use the deployed server.';
          if (!settled) {
            clearTimeout(timer);
            settled = true;
            this._teardown();
            reject(new Error(text));
          } else {
            this.emit('notice', { text, level: 'error' });
          }
        });
        // Guest resolves in _handleP2PWecomeGuest once the welcome arrives.
        this._resolveGuest = done;
      }
    });
  }

  _handleP2PConnection(conn, id) {
    this.p2pGuest = conn;
    this.p2pGuestMeta = null;
    this.connections.set(id, conn);
    conn.on('data', (data) => {
      if (data && data.type === 'hello') {
        const guest = {
          id,
          name: (data.name || 'OPERATIVE').slice(0, 16),
          color: PLAYER_COLORS[1],
        };
        this.p2pGuestMeta = guest;
        this.players.set(id, guest);
        const players = [this.p2pHostInfo, guest];
        conn.send({
          type: 'welcome',
          selfId: 'guest',
          roomCode: this.roomCode,
          hostId: 'host',
          players,
          server: false,
        });
        this.emit('playerJoin', guest);
        this.emit('notice', { text: `${guest.name} linked into the district.`, level: 'ok' });
        return;
      }
      this._receiveP2P(data, id);
    });
    conn.on('close', () => {
      if (this._closed) return;
      this.connections.delete(id);
      this.players.delete(id);
      this.p2pGuest = null;
      this.emit('playerLeave', { id, player: null });
      this.emit('notice', { text: 'Your co-op partner disconnected.', level: 'warn' });
    });
  }

  _receiveP2P(data, from) {
    if (!data || typeof data !== 'object') return;
    if (data.type === 'welcome') {
      this.selfId = data.selfId;
      this.roomCode = data.roomCode;
      this.hostId = data.hostId;
      this.players = new Map((data.players || []).filter((p) => p.id !== this.selfId).map((p) => [p.id, p]));
      this.selfPlayer = (data.players || []).find((p) => p.id === this.selfId) || {
        id: this.selfId,
        name: this.name,
        color: PLAYER_COLORS[1],
      };
      this.connected = true;
      if (this._resolveGuest) {
        this._resolveGuest({
          selfId: this.selfId,
          self: this.selfPlayer,
          roomCode: this.roomCode,
          hostId: this.hostId,
          players: [...this.players.values()],
          server: false,
        });
        this._resolveGuest = null;
      }
      this.emit('notice', { text: 'Peer city linked.', level: 'ok' });
      return;
    }
    if (data.type === 'ping') {
      this._sendToConnection(from, { type: 'pong' });
      return;
    }
    if (data.type === 'pong') {
      this.latency = this.pingSentAt ? Math.max(1, Math.round(performance.now() - this.pingSentAt)) : null;
      this.emit('latency', this.latency);
      return;
    }
    if (data.type === 'error') {
      this.emit('notice', { text: data.message || 'Peer error.', level: 'error' });
      return;
    }
    this.emit('message', { ...data, from });
  }

  _startPing() {
    this._stopPing();
    this.pingTimer = setInterval(() => {
      if (!this.connected) return;
      this.pingSentAt = performance.now();
      if (this.mode === 'server') {
        this._sendRaw({ type: 'ping' });
      } else {
        this._sendRaw({ type: 'ping' });
      }
    }, 2600);
  }

  _sendToConnection(id, msg) {
    if (this.mode === 'server') {
      this._sendRaw(msg);
      return;
    }
    if (this.isHost) {
      const conn = this.connections.get(id);
      if (conn?.open) {
        try { conn.send(msg); } catch (err) { console.warn(err); }
      }
    } else {
      const conn = this.connections.get('host');
      if (conn?.open) {
        try { conn.send(msg); } catch (err) { console.warn(err); }
      }
    }
  }

  _sendRaw(msg) {
    if (this.mode === 'server') {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify(msg));
        return true;
      }
      return false;
    }
    if (this.isHost) {
      let sent = false;
      for (const conn of this.connections.values()) {
        if (conn?.open) {
          try { conn.send(msg); sent = true; } catch {}
        }
      }
      return sent;
    }
    const conn = this.connections.get('host');
    if (conn?.open) {
      try { conn.send(msg); return true; } catch { return false; }
    }
    return false;
  }

  send(type, payload = {}) {
    if (!this.connected) return false;
    return this._sendRaw({ type, ...payload });
  }

  _teardown() {
    this._closed = true;
    this._stopPing();
    try { this.ws?.close(); } catch {}
    try { this.peer?.destroy(); } catch {}
    for (const conn of this.connections.values()) {
      try { conn.close(); } catch {}
    }
    this.connections.clear();
    this.ws = null;
    this.peer = null;
  }

  close() {
    this._teardown();
    this.connected = false;
  }
}

export function makeInviteCode() {
  return sanitizeRoom(makeRoomCode(5)) || makeId('X').slice(0, 5);
}
