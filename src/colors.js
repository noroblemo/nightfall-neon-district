import palette from '../shared/player-colors.json';

export const PLAYER_COLOR_OPTIONS = palette.map((entry) => ({
  name: entry.name,
  hex: entry.hex,
  value: Number(entry.hex),
  css: entry.hex.replace(/^0x/, '#'),
}));

export const PLAYER_COLORS = PLAYER_COLOR_OPTIONS.map((option) => option.value);

const byValue = new Map(PLAYER_COLOR_OPTIONS.map((option) => [option.value, option]));

export function normalizePlayerColor(value, fallback = PLAYER_COLORS[0]) {
  let parsed = value;
  if (typeof parsed === 'string') {
    const trimmed = parsed.trim();
    if (/^#[0-9a-f]{6}$/i.test(trimmed)) parsed = Number(`0x${trimmed.slice(1)}`);
    else if (/^0x[0-9a-f]{6}$/i.test(trimmed)) parsed = Number(trimmed);
    else if (/^\d+$/.test(trimmed)) parsed = Number(trimmed);
  }
  return byValue.has(parsed) ? parsed : fallback;
}

export function playerColorName(value, fallback = 'OPERATIVE') {
  return byValue.get(normalizePlayerColor(value, null))?.name || fallback;
}

export function playerColorHex(value, fallback = PLAYER_COLORS[0]) {
  return `#${normalizePlayerColor(value, fallback).toString(16).padStart(6, '0')}`;
}
