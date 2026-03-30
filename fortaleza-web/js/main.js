import { GameEngine } from './engine/GameEngine.js';
import { loadPartData } from './data/loader.js';
import * as i18n from './i18n/i18n.js';

let engine = null;
let partData = null;
let commandHistory = [];
let historyIndex = -1;

// --- DOM Elements ---
const introScreen = document.getElementById('intro-screen');
const introTitle = document.getElementById('intro-title');
const introSubtitle = document.getElementById('intro-subtitle');
const introAuthor = document.getElementById('intro-author');
const introAdaptation = document.getElementById('intro-adaptation');
const introStory = document.getElementById('intro-story');
const startBtn = document.getElementById('start-btn');

const gameContainer = document.getElementById('game-container');
const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('command-input');
const sendBtn = document.getElementById('send-btn');
const quickActions = document.getElementById('quick-actions');

const inventoryList = document.getElementById('inventory-list');
const weightFill = document.getElementById('weight-fill');
const weightText = document.getElementById('weight-text');
const locationName = document.getElementById('location-name');
const exitsList = document.getElementById('exits-list');
const progressText = document.getElementById('progress-text');
const restartBtn = document.getElementById('restart-btn');

// --- Initialization ---

async function init() {
  // Read language from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang === 'en' || urlLang === 'es') {
    i18n.setLang(urlLang);
  }

  // Load part data (default to part1)
  const partId = urlParams.get('part') || 'part1';
  partData = await loadPartData(partId);

  // Sync button states
  const lang = i18n.getLang();
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.part-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.part === partId);
  });

  updateIntro();
  setupEventListeners();
}

function updateIntro() {
  const lang = i18n.getLang();
  introTitle.textContent = i18n.t('introTitle');
  introSubtitle.textContent = partData
    ? (lang === 'en' ? partData.config.subtitleEn : partData.config.subtitleEs)
    : i18n.t('introSubtitle');
  introAuthor.textContent = i18n.t('introAuthor');
  introAdaptation.textContent = i18n.t('introAdaptation');
  startBtn.textContent = lang === 'en' ? 'BEGIN' : 'COMENZAR';

  const story = partData
    ? (lang === 'en' ? partData.config.storyEn : partData.config.storyEs)
    : [];
  // Build intro story using safe DOM methods
  while (introStory.firstChild) introStory.removeChild(introStory.firstChild);
  for (const line of story) {
    if (line) {
      const p = document.createElement('p');
      p.textContent = line;
      introStory.appendChild(p);
    } else {
      introStory.appendChild(document.createElement('br'));
    }
  }
}

function startGame() {
  introScreen.style.display = 'none';
  gameContainer.classList.add('active');

  engine = new GameEngine(partData);
  engine.onOutput = printLine;
  engine.onStateChange = updateUI;

  // Update map link with current part
  const mapBtn = document.getElementById('map-btn');
  if (mapBtn) mapBtn.href = `map.html?part=${partData.config.id}`;

  // Greeting based on time
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = i18n.t('goodMorning');
  else if (hour < 18) greeting = i18n.t('goodAfternoon');
  else greeting = i18n.t('goodEvening');

  printLine(greeting);
  printLine('');
  engine.handleLook();
  updateUI();

  commandInput.focus();
}

// --- Language-aware command builder ---

function langCmd(action, obj) {
  const lang = i18n.getLang();
  const verbMap = {
    go:        { es: 'ir',          en: 'go' },
    take:      { es: 'tomar',       en: 'take' },
    drop:      { es: 'soltar',      en: 'drop' },
    look:      { es: 'mirar',       en: 'look' },
    see:       { es: 'ver',         en: 'examine' },
    ask:       { es: 'preguntar',   en: 'talk' },
    break:     { es: 'romper',      en: 'break' },
    inventory: { es: 'inventario',  en: 'inventory' },
    help:      { es: 'ayuda',       en: 'help' },
    save:      { es: 'salvar',      en: 'save' },
    load:      { es: 'cargar',      en: 'load' },
  };
  const verb = verbMap[action]?.[lang] || action;
  if (!obj) return verb;
  const name = i18n.objectName(obj);
  return `${verb} ${name}`;
}

// --- Terminal Output ---

function printLine(text, type = 'normal') {
  if (text === undefined || text === null) return;

  const lines = String(text).split('\n');
  for (const line of lines) {
    const div = document.createElement('div');
    div.className = `terminal-line ${type}`;
    div.textContent = line;
    terminal.appendChild(div);
  }

  // Auto-scroll
  terminal.scrollTop = terminal.scrollHeight;

  // Limit lines
  while (terminal.children.length > 500) {
    terminal.removeChild(terminal.firstChild);
  }
}

function addSeparator() {
  const div = document.createElement('div');
  div.className = 'terminal-line separator';
  terminal.appendChild(div);
}

// --- Command Processing ---

function submitCommand(input) {
  if (!input.trim()) return;
  if (engine.isGameOver || engine.isVictory) {
    if (input.toLowerCase() === 'restart' || input.toLowerCase() === 'reiniciar') {
      restartGame();
      return;
    }
    return;
  }

  addSeparator();
  printLine(input.trim(), 'input-echo');

  commandHistory.push(input.trim());
  historyIndex = commandHistory.length;

  engine.executeCommand(input.trim());
  commandInput.value = '';
  commandInput.focus();
}

// --- UI Updates ---

function updateUI() {
  if (!engine) return;
  updateInventory();
  updateLocation();
  updateQuickActions();
}

function updateInventory() {
  const lang = i18n.getLang();
  while (inventoryList.firstChild) inventoryList.removeChild(inventoryList.firstChild);

  document.getElementById('inv-title').textContent =
    lang === 'en' ? 'INVENTORY' : 'INVENTARIO';

  for (const item of engine.player.inventory) {
    const li = document.createElement('li');
    const nameSpan = document.createElement('span');
    nameSpan.className = 'inv-item-name';
    nameSpan.textContent = i18n.objectName(item);
    nameSpan.title = lang === 'en' ? 'Examine' : 'Examinar';
    nameSpan.addEventListener('click', () => submitCommand(langCmd('see', item)));
    const actionsSpan = document.createElement('span');
    actionsSpan.className = 'inv-item-actions';
    const weightSpan = document.createElement('span');
    weightSpan.className = 'item-weight';
    weightSpan.textContent = `(${item.weight})`;
    const dropBtn = document.createElement('button');
    dropBtn.className = 'inv-drop-btn';
    dropBtn.textContent = '\u2716';
    dropBtn.title = lang === 'en' ? 'Drop' : 'Soltar';
    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      submitCommand(langCmd('drop', item));
    });
    actionsSpan.appendChild(weightSpan);
    actionsSpan.appendChild(dropBtn);
    li.appendChild(nameSpan);
    li.appendChild(actionsSpan);
    inventoryList.appendChild(li);
  }

  const current = engine.player.currentWeight();
  const max = engine.config.maxWeight;
  const pct = Math.min((current / max) * 100, 100);
  weightFill.style.width = pct + '%';

  if (pct > 80) weightFill.style.background = '#ff6600';
  else if (pct > 60) weightFill.style.background = '#ffaa00';
  else weightFill.style.background = 'var(--fg)';

  weightText.textContent = `${current}/${max} ${i18n.t('weightUnit')}`;
}

function updateLocation() {
  const lang = i18n.getLang();
  const room = engine.player.currentRoom;

  document.getElementById('loc-title').textContent =
    lang === 'en' ? 'LOCATION' : 'UBICACIÓN';

  locationName.textContent = room.name(lang);

  while (exitsList.firstChild) exitsList.removeChild(exitsList.firstChild);
  for (const link of room.getLinks()) {
    const li = document.createElement('li');
    const isDanger = engine.isDangerousDoor(link);
    li.textContent = i18n.objectName(link);
    if (isDanger) li.classList.add('exit-danger');
    li.addEventListener('click', () => {
      if (isDanger) {
        const msg = lang === 'en'
          ? `This passage looks dangerous. Are you sure you want to enter "${i18n.objectName(link)}"?`
          : `Este pasaje parece peligroso. \u00BFEst\u00E1 seguro de que desea entrar por "${i18n.objectName(link)}"?`;
        if (!confirm(msg)) return;
      }
      submitCommand(langCmd('go', link));
    });
    exitsList.appendChild(li);
  }

  const totalRooms = engine.config.totalRooms;
  const visited = engine.player.visits;
  const pct = Math.round((visited / totalRooms) * 100);
  progressText.textContent = lang === 'en'
    ? `Rooms visited: ${visited}/${totalRooms} (${pct}%)`
    : `Salas visitadas: ${visited}/${totalRooms} (${pct}%)`;
}

function updateQuickActions() {
  while (quickActions.firstChild) quickActions.removeChild(quickActions.firstChild);
  const lang = i18n.getLang();
  const actions = engine.getAvailableActions();

  // Door buttons - click to go through (with danger warning)
  for (const door of actions.doors) {
    const isDanger = engine.isDangerousDoor(door);
    const icon = isDanger ? '\u26A0\uFE0F' : door.isOpen ? '\uD83D\uDEAA' : '\uD83D\uDD12';
    quickActions.appendChild(createQuickBtn(
      `${icon} ${i18n.objectName(door)}`,
      `door-btn${isDanger ? ' danger-btn' : ''}`,
      () => {
        if (isDanger) {
          const msg = lang === 'en'
            ? `This passage looks dangerous. Are you sure you want to enter "${i18n.objectName(door)}"?`
            : `Este pasaje parece peligroso. \u00BFEst\u00E1 seguro de que desea entrar por "${i18n.objectName(door)}"?`;
          if (!confirm(msg)) return;
        }
        submitCommand(langCmd('go', door));
      }
    ));
  }

  // Item buttons - click to examine then take
  for (const item of actions.items) {
    quickActions.appendChild(createQuickBtn(
      `\uD83D\uDCE6 ${i18n.objectName(item)}`,
      'item-btn',
      () => {
        submitCommand(langCmd('see', item));
        submitCommand(langCmd('take', item));
      }
    ));
  }

  // NPC buttons - click to examine then talk
  for (const npc of actions.npcs) {
    quickActions.appendChild(createQuickBtn(
      `\uD83D\uDDE3\uFE0F ${i18n.objectName(npc)}`,
      'npc-btn',
      () => {
        submitCommand(langCmd('see', npc));
        submitCommand(langCmd('ask', npc));
      }
    ));
  }

  // Hidden object buttons - click to examine
  for (const hidden of actions.hiddens) {
    quickActions.appendChild(createQuickBtn(
      `\uD83D\uDD0D ${i18n.objectName(hidden)}`,
      'hidden-btn',
      () => submitCommand(langCmd('see', hidden))
    ));
  }

  // Always-visible action buttons
  const lookLabel = lang === 'en' ? 'LOOK' : 'MIRAR';
  const invLabel  = lang === 'en' ? 'INVENTORY' : 'INVENTARIO';
  const saveLabel = lang === 'en' ? 'SAVE' : 'GUARDAR';
  const helpLabel = lang === 'en' ? 'HELP' : 'AYUDA';

  quickActions.appendChild(createQuickBtn(`\uD83D\uDC41\uFE0F ${lookLabel}`, 'action-btn', () => submitCommand(langCmd('look'))));
  quickActions.appendChild(createQuickBtn(`\uD83C\uDF92 ${invLabel}`, 'action-btn', () => submitCommand(langCmd('inventory'))));
  quickActions.appendChild(createQuickBtn(`\uD83D\uDCBE ${saveLabel}`, 'action-btn', () => submitCommand(langCmd('save'))));
  quickActions.appendChild(createQuickBtn(`\u2753 ${helpLabel}`, 'action-btn', () => submitCommand(langCmd('help'))));
}

function createQuickBtn(text, className, onClick) {
  const btn = document.createElement('button');
  btn.className = `quick-btn ${className}`;
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
}

// --- Language Toggle ---

function setLanguage(lang) {
  i18n.setLang(lang);

  // Update <html lang> attribute
  document.documentElement.lang = lang;

  // Update URL without page reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  commandInput.placeholder = lang === 'en' ? 'Type a command...' : 'Escriba un comando...';

  if (engine) {
    updateUI();
    addSeparator();
    engine.handleLook();
  } else {
    updateIntro();
  }
}

// --- Restart ---

function restartGame() {
  while (terminal.firstChild) terminal.removeChild(terminal.firstChild);
  commandHistory = [];
  historyIndex = -1;
  engine = new GameEngine(partData);
  engine.onOutput = printLine;
  engine.onStateChange = updateUI;

  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = i18n.t('goodMorning');
  else if (hour < 18) greeting = i18n.t('goodAfternoon');
  else greeting = i18n.t('goodEvening');

  printLine(greeting);
  printLine('');
  engine.handleLook();
  updateUI();
  commandInput.focus();
}

// --- Event Listeners ---

function setupEventListeners() {
  startBtn.addEventListener('click', startGame);

  commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitCommand(commandInput.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        commandInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        commandInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        commandInput.value = '';
      }
    }
  });

  sendBtn.addEventListener('click', () => {
    submitCommand(commandInput.value);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  document.querySelectorAll('.part-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const newPart = btn.dataset.part;
      if (newPart === partData.config.id) return;
      const { loadPartData: load } = await import('./data/loader.js');
      partData = await load(newPart);
      document.querySelectorAll('.part-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.part === newPart);
      });
      // Update URL
      const url = new URL(window.location);
      url.searchParams.set('part', newPart);
      history.replaceState(null, '', url);
      updateIntro();
    });
  });

  restartBtn.addEventListener('click', () => {
    if (confirm(i18n.getLang() === 'en' ? 'Start a new game?' : '¿Comenzar un nuevo juego?')) {
      restartGame();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('button') && !e.target.closest('li') && !e.target.closest('#intro-screen')) {
      commandInput.focus();
    }
  });

  // Mobile: scroll input into view when virtual keyboard opens
  commandInput.addEventListener('focus', () => {
    setTimeout(() => {
      commandInput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
  });

  // Mobile: track visual viewport for virtual keyboard handling
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      document.documentElement.style.setProperty(
        '--viewport-height',
        `${window.visualViewport.height}px`
      );
    });
    document.documentElement.style.setProperty(
      '--viewport-height',
      `${window.visualViewport.height}px`
    );
  }
}

// --- Start ---
init();
