// Touch controls for the native wrappers and coarse-pointer browsers. The
// controls feed the same virtual key set as the keyboard so gameplay code does
// not need a second movement model.

const KEY_CODES = {
  boost: 'ShiftLeft',
  brake: 'Space',
};

export function isTouchDevice() {
  if (typeof window === 'undefined') return false;
  if (new URLSearchParams(window.location.search).get('touch') === '1') return true;
  if (window.Capacitor?.isNative) return true;
  if (navigator.maxTouchPoints > 0) return true;
  return typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;
}

function element(tag, className, html = '') {
  const node = document.createElement(tag);
  node.className = className;
  if (html) node.innerHTML = html;
  return node;
}

function capturePointer(node, id) {
  try {
    node.setPointerCapture?.(id);
  } catch {
    // Synthetic events and some WebViews do not support capture; dragging still
    // works through the element's own pointermove listeners.
  }
}

function makeButton(label, className, dataset = {}) {
  const button = element('button', `touch-btn ${className}`, `<span>${label}</span>`);
  button.type = 'button';
  button.setAttribute('aria-label', label);
  for (const [key, value] of Object.entries(dataset)) button.dataset[key] = value;
  return button;
}

export function createMobileControls(game, canvas) {
  const enabled = isTouchDevice();
  if (!enabled) {
    return { enabled: false, update() {}, releaseAll() {} };
  }

  game.touchMode = true;
  canvas.style.touchAction = 'none';
  document.body.classList.add('touch-mode');

  const root = element('div', 'touch-controls hidden');
  root.id = 'touchControls';
  root.setAttribute('aria-label', 'Touch controls');
  root.dataset.mode = 'foot';

  // The pause control lives outside the gameplay-only layer so it stays
  // reachable while chat is open and when the pause panel is showing.
  const menuButton = element('button', 'touch-menu-btn hidden', '<span>PAUSE</span>');
  menuButton.id = 'touchMenuButton';
  menuButton.type = 'button';
  menuButton.setAttribute('aria-label', 'Pause game');

  const look = element('div', 'touch-look', '<span>DRAG TO LOOK</span>');
  const stick = element('div', 'touch-stick', '<i class="touch-stick__ring"></i><i class="touch-stick__knob"></i>');
  const aimGroup = element('div', 'touch-aim-group');
  const fireGroup = element('div', 'touch-fire-group');
  const actionsToggle = element('button', 'touch-actions-toggle', '<span>ACTIONS</span><i aria-hidden="true">▾</i>');
  actionsToggle.id = 'touchActionsToggle';
  actionsToggle.type = 'button';
  actionsToggle.setAttribute('aria-label', 'Open quick actions');
  actionsToggle.setAttribute('aria-expanded', 'false');
  actionsToggle.setAttribute('aria-controls', 'touchActionsDrawer');

  const drawer = element('div', 'touch-drawer hidden');
  drawer.id = 'touchActionsDrawer';
  drawer.setAttribute('aria-label', 'Quick actions');
  const drawerHead = element('div', 'touch-drawer__head', '<span>QUICK ACTIONS</span>');
  const drawerClose = element('button', 'touch-drawer__close', 'CLOSE');
  drawerClose.type = 'button';
  drawerClose.setAttribute('aria-label', 'Close quick actions');
  drawerHead.append(drawerClose);
  const drawerGrid = element('div', 'touch-drawer__grid');
  drawer.append(drawerHead, drawerGrid);

  const fireButton = makeButton('FIRE', 'touch-btn--fire touch-btn--foot', { hold: 'fire' });
  const aimButton = makeButton('AIM', 'touch-btn--aim touch-btn--foot', { hold: 'aim' });
  aimGroup.append(aimButton);
  fireGroup.append(fireButton);

  const buttons = [
    makeButton('BOOST', 'touch-btn--boost', { hold: 'boost' }),
    makeButton('JUMP', 'touch-btn--jump touch-btn--foot', { hold: 'brake', action: 'jump' }),
    makeButton('USE', 'touch-btn--use', { action: 'interact' }),
    makeButton('CAR', 'touch-btn--car', { action: 'vehicle' }),
    makeButton('RELOAD', 'touch-btn--reload', { action: 'reload' }),
    makeButton('PING', 'touch-btn--ping', { action: 'ping' }),
    makeButton('RACE', 'touch-btn--race', { action: 'race' }),
    makeButton('WX', 'touch-btn--weather', { action: 'weather' }),
    makeButton('CHAT', 'touch-btn--chat', { action: 'chat' }),
  ];
  for (const button of buttons) drawerGrid.append(button);

  root.append(look, stick, aimGroup, fireGroup, actionsToggle, drawer);
  document.body.append(menuButton, root);

  const heldButtons = new Set();
  let drawerOpen = false;

  function releaseButton(button) {
    heldButtons.delete(button);
    button.classList.remove('is-active');
    const hold = button.dataset.hold;
    if (hold === 'fire' || hold === 'aim') game.setVirtualHold(hold, false);
    else if (hold) game.setVirtualKey(KEY_CODES[hold] || hold, false);
  }

  function setDrawerOpen(open, releaseHeld = true) {
    const next = !!open && game.status === 'playing' && !game.paused && !game.chatOpen && !game.controlsOpen;
    if (drawerOpen === next) return;
    drawerOpen = next;
    drawer.classList.toggle('hidden', !next);
    document.body.classList.toggle('touch-actions-open', next);
    actionsToggle.classList.toggle('is-open', next);
    actionsToggle.setAttribute('aria-expanded', String(next));
    actionsToggle.setAttribute('aria-label', next ? 'Close quick actions' : 'Open quick actions');
    if (!next && releaseHeld) {
      for (const button of buttons) if (heldButtons.has(button)) releaseButton(button);
    }
  }

  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    releaseAll();
    game.togglePause();
  });

  actionsToggle.addEventListener('click', (event) => {
    event.preventDefault();
    setDrawerOpen(!drawerOpen);
  });

  drawerClose.addEventListener('click', (event) => {
    event.preventDefault();
    setDrawerOpen(false);
  });

  const directionKeys = ['KeyW', 'KeyA', 'KeyS', 'KeyD'];
  const stickState = { id: null, x: 0, y: 0, radius: 52 };
  const knob = stick.querySelector('.touch-stick__knob');

  function releaseDirections() {
    for (const code of directionKeys) game.setVirtualKey(code, false);
    stickState.id = null;
    stickState.x = 0;
    stickState.y = 0;
    if (knob) knob.style.transform = 'translate(-50%, -50%)';
  }

  function moveStick(clientX, clientY) {
    const rect = stick.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    const length = Math.hypot(dx, dy);
    const scale = length > stickState.radius ? stickState.radius / length : 1;
    const x = dx * scale;
    const y = dy * scale;
    stickState.x = x / stickState.radius;
    stickState.y = y / stickState.radius;
    if (knob) knob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

    const dead = 0.24;
    game.setVirtualKey('KeyW', stickState.y < -dead);
    game.setVirtualKey('KeyS', stickState.y > dead);
    game.setVirtualKey('KeyA', stickState.x < -dead);
    game.setVirtualKey('KeyD', stickState.x > dead);
  }

  stick.addEventListener('pointerdown', (event) => {
    if (game.status !== 'playing' || game.paused || game.chatOpen || game.controlsOpen) return;
    event.preventDefault();
    stickState.id = event.pointerId;
    capturePointer(stick, event.pointerId);
    moveStick(event.clientX, event.clientY);
  });
  stick.addEventListener('pointermove', (event) => {
    if (event.pointerId !== stickState.id) return;
    event.preventDefault();
    moveStick(event.clientX, event.clientY);
  });
  const endStick = (event) => {
    if (event.pointerId !== stickState.id) return;
    event.preventDefault();
    releaseDirections();
  };
  stick.addEventListener('pointerup', endStick);
  stick.addEventListener('pointercancel', endStick);

  const lookState = { id: null, x: 0, y: 0 };
  look.addEventListener('pointerdown', (event) => {
    if (game.status !== 'playing' || game.paused || game.chatOpen || game.controlsOpen) return;
    event.preventDefault();
    lookState.id = event.pointerId;
    lookState.x = event.clientX;
    lookState.y = event.clientY;
    capturePointer(look, event.pointerId);
    look.classList.add('is-active');
  });
  look.addEventListener('pointermove', (event) => {
    if (event.pointerId !== lookState.id) return;
    event.preventDefault();
    const dx = event.clientX - lookState.x;
    const dy = event.clientY - lookState.y;
    lookState.x = event.clientX;
    lookState.y = event.clientY;
    game.applyLook(dx, dy, 1.45);
  });
  const endLook = (event) => {
    if (event.pointerId !== lookState.id) return;
    event.preventDefault();
    lookState.id = null;
    look.classList.remove('is-active');
  };
  look.addEventListener('pointerup', endLook);
  look.addEventListener('pointercancel', endLook);

  for (const button of [...buttons, fireButton, aimButton]) {
    button.addEventListener('pointerdown', (event) => {
      if (game.status !== 'playing' || game.paused || game.chatOpen || game.controlsOpen) return;
      event.preventDefault();
      capturePointer(button, event.pointerId);
      heldButtons.add(button);
      button.classList.add('is-active');
      const hold = button.dataset.hold;
      if (hold === 'fire' || hold === 'aim') game.setVirtualHold(hold, true);
      else if (hold) game.setVirtualKey(KEY_CODES[hold] || hold, true);
      if (button.dataset.action) game.triggerVirtualAction(button.dataset.action);
    });
    const endButton = (event) => {
      event.preventDefault();
      releaseButton(button);
      if (button.parentElement === drawerGrid) setDrawerOpen(false, false);
    };
    button.addEventListener('pointerup', endButton);
    button.addEventListener('pointercancel', endButton);
    button.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  function releaseAll() {
    releaseDirections();
    for (const button of [...heldButtons]) releaseButton(button);
    game.setVirtualHold('fire', false);
    game.setVirtualHold('aim', false);
    setDrawerOpen(false, false);
    lookState.id = null;
    look.classList.remove('is-active');
  }

  window.addEventListener('blur', releaseAll);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) releaseAll();
  });

  const resumeCopy = document.querySelector('#resumeBtn small');
  if (resumeCopy) resumeCopy.textContent = 'Return to the district';

  let lastMode = '';
  function update() {
    const visible = game.status === 'playing' && !game.paused && !game.chatOpen && !game.controlsOpen;
    root.classList.toggle('hidden', !visible);
    if (!visible) releaseAll();

    const inRun = game.status === 'playing' || game.status === 'paused';
    menuButton.classList.toggle('hidden', !inRun || game.controlsOpen);
    const label = game.paused ? 'RESUME' : 'PAUSE';
    const labelNode = menuButton.querySelector('span');
    if (labelNode && labelNode.textContent !== label) labelNode.textContent = label;
    menuButton.setAttribute('aria-label', game.paused ? 'Resume game' : 'Pause game');

    const mode = game.currentMode === 'car' ? 'car' : 'foot';
    if (mode !== lastMode) {
      lastMode = mode;
      root.dataset.mode = mode;
      setDrawerOpen(false);
      const carButton = root.querySelector('.touch-btn--car span');
      if (carButton) carButton.textContent = mode === 'car' ? 'EXIT' : 'CAR';
      const reloadButton = root.querySelector('.touch-btn--reload span');
      if (reloadButton) reloadButton.textContent = mode === 'car' ? 'RESET' : 'RELOAD';
    }
  }

  return { enabled: true, update, releaseAll };
}
