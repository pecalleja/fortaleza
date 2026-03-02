import { GameEngine } from './engine/GameEngine.js';
import * as i18n from './i18n/i18n.js';

let engine = null;
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

// Intro story text
const storyEs = [
  'Usted es un hombre común, sumergido en una vida rutinaria y mediocre.',
  'Día tras día espera que algo interesante aparezca en su camino.',
  'Una mañana, luego de haber leído el periódico, encuentra una carta junto a la puerta.',
  '',
  '"Estimado señor:',
  'Tengo el alto honor de comunicarle que usted ha sido designado para cumplir una de las misiones más importantes de la historia del hombre: Eliminar a la Bestia.',
  '',
  'La Bestia es una de las criaturas más temidas y misteriosas del universo. Según varios informes, habita un lugar llamado la Fortaleza, aunque hay quienes dicen que la Bestia y la Fortaleza son una misma cosa.',
  '',
  'Su misión es: adentrarse en la Fortaleza y matar a la Bestia. Nada más.',
  '',
  '                                    General X',
  '                         Jefe de la Oficina de Casualidades"',
];

const storyEn = [
  'You are an ordinary man, submerged in a routine and mediocre life.',
  'Day after day you wait for something interesting to appear in your path.',
  'One morning, after reading the newspaper, you find a letter by the door.',
  '',
  '"Dear sir:',
  'I have the high honor of informing you that you have been designated to fulfill one of the most important missions in the history of mankind: To eliminate the Beast.',
  '',
  'The Beast is one of the most feared and mysterious creatures in the universe. According to several reports, it inhabits a place called the Fortress, although some say the Beast and the Fortress are one and the same.',
  '',
  'Your mission is: to enter the Fortress and kill the Beast. Nothing more.',
  '',
  '                                    General X',
  '                         Chief of the Office of Casualties"',
];

// --- Initialization ---

function init() {
  updateIntro();
  setupEventListeners();
}

function updateIntro() {
  const lang = i18n.getLang();
  introTitle.textContent = i18n.t('introTitle');
  introSubtitle.textContent = i18n.t('introSubtitle');
  introAuthor.textContent = i18n.t('introAuthor');
  introAdaptation.textContent = i18n.t('introAdaptation');
  startBtn.textContent = lang === 'en' ? 'BEGIN' : 'COMENZAR';

  const story = lang === 'en' ? storyEn : storyEs;
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

  engine = new GameEngine();
  engine.onOutput = printLine;
  engine.onStateChange = updateUI;

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
    nameSpan.textContent = i18n.objectName(item);
    const weightSpan = document.createElement('span');
    weightSpan.className = 'item-weight';
    weightSpan.textContent = `(${item.weight})`;
    li.appendChild(nameSpan);
    li.appendChild(weightSpan);
    inventoryList.appendChild(li);
  }

  const current = engine.player.currentWeight();
  const max = 40;
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
    li.textContent = i18n.objectName(link);
    li.addEventListener('click', () => {
      submitCommand(`ir ${link.nameEs}`);
    });
    exitsList.appendChild(li);
  }

  const totalRooms = 50;
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

  // Door buttons
  for (const door of actions.doors) {
    quickActions.appendChild(createQuickBtn(
      `> ${i18n.objectName(door)}`,
      'door-btn',
      () => submitCommand(`ir ${door.nameEs}`)
    ));
  }

  // Item buttons (take)
  for (const item of actions.items) {
    quickActions.appendChild(createQuickBtn(
      `+ ${i18n.objectName(item)}`,
      'item-btn',
      () => submitCommand(`tomar ${item.nameEs}`)
    ));
  }

  // NPC buttons (ask)
  for (const npc of actions.npcs) {
    quickActions.appendChild(createQuickBtn(
      `? ${i18n.objectName(npc)}`,
      'npc-btn',
      () => submitCommand(`preguntar ${npc.nameEs}`)
    ));
  }

  // Always-visible action buttons
  const lookLabel = lang === 'en' ? 'LOOK' : 'MIRAR';
  const invLabel = lang === 'en' ? 'INVENTORY' : 'INVENTARIO';
  const helpLabel = lang === 'en' ? 'HELP' : 'AYUDA';

  quickActions.appendChild(createQuickBtn(lookLabel, 'action-btn', () => submitCommand('mirar')));
  quickActions.appendChild(createQuickBtn(invLabel, 'action-btn', () => submitCommand('inventario')));
  quickActions.appendChild(createQuickBtn(helpLabel, 'action-btn', () => submitCommand('ayuda')));
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
  engine = new GameEngine();
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
}

// --- Start ---
init();
