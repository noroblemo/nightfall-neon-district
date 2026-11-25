#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'mobile', 'www');

function copyFile(from, to) {
  const source = path.join(root, from);
  if (!fs.existsSync(source)) throw new Error(`Missing required file: ${from}`);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(source, to);
}

function copyDir(from, to) {
  const source = path.join(root, from);
  if (!fs.existsSync(source)) return;
  fs.cpSync(source, to, { recursive: true });
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

copyFile('index.html', path.join(out, 'index.html'));
copyFile('style.css', path.join(out, 'style.css'));
copyFile('dist/game.js', path.join(out, 'dist/game.js'));
copyDir('assets', path.join(out, 'assets'));
copyDir('public/fonts', path.join(out, 'public/fonts'));

const htmlPath = path.join(out, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const script = '<script src="dist/game.js"></script>';
if (!html.includes(script)) throw new Error('Could not find game script tag in index.html');
fs.writeFileSync(
  htmlPath,
  html.replace(script, `<script src="nightfall-config.js"></script>\n    ${script}`),
);

const relayUrl = process.env.NIGHTFALL_SERVER_URL || '';
fs.writeFileSync(
  path.join(out, 'nightfall-config.js'),
  `window.NIGHTFALL_SERVER_URL = ${JSON.stringify(relayUrl)};\n`,
);

console.log(`Prepared ${path.relative(root, out)} (${relayUrl ? `relay ${relayUrl}` : 'default relay discovery'})`);
