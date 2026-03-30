import { GameObject } from './GameObject.js';
import { Room } from './Room.js';
import { Player } from './Player.js';
import { Linking, OpenLink, DangerLink, DangerLink2, RiddleLink } from './Linking.js';
import { Troll, Guard, Daughter, Hidden } from './NPC.js';
import { CommandParser } from './CommandParser.js';
import * as i18n from '../i18n/i18n.js';

export class GameEngine {
  constructor(partData) {
    this.config = partData.config;
    this.player = new Player(this.config.maxWeight);
    this.rooms = {};
    this.parser = new CommandParser();
    this.isGameOver = false;
    this.isVictory = false;
    this.commandHistory = [];
    this.onOutput = null; // callback: (text, type) => void
    this.onStateChange = null; // callback: () => void

    this.initializeWorld(partData);
  }

  initializeWorld(partData) {
    const { rooms: roomsData, items: itemsData, npcs: npcsData,
            links: linksData, hiddenObjects: hiddenData } = partData;

    // Create rooms
    for (const data of roomsData) {
      this.rooms[data.roomId] = new Room(data);
    }

    // Create and place items
    for (const data of itemsData) {
      const item = new GameObject(data);
      const room = this.rooms[data.roomId];
      if (room) room.add(item);
    }

    // Create and place NPCs (skip hidden ones - they're inside Hidden containers)
    for (const data of npcsData) {
      if (data.isHidden) continue; // Will be revealed when hidden container is broken
      let npc;
      if (data.type === 'troll') {
        npc = new Troll(data);
      } else if (data.type === 'daughter') {
        npc = new Daughter(data);
      } else if (data.type === 'guard') {
        npc = new Guard(data);
      }
      if (npc) {
        const room = this.rooms[data.roomId];
        if (room) room.add(npc);
      }
    }

    // Create and place links
    for (const data of linksData) {
      const link = this.createLink(data);
      if (link) {
        const room = this.rooms[data.fromRoomId];
        if (room) room.add(link);
      }
    }

    // Create and place hidden objects
    for (const data of (hiddenData || [])) {
      const hidden = this.createHidden(data);
      if (hidden) {
        const room = this.rooms[data.roomId];
        if (room) room.add(hidden);
      }
    }

    // Place player in start room
    this.player.go(this.rooms[this.config.startRoom]);
  }

  createLink(data) {
    switch (data.type) {
      case 'openLink':
        return new OpenLink(data);
      case 'dangerLink':
        return new DangerLink(data);
      case 'dangerLink2':
        return new DangerLink2(data);
      case 'riddleLink':
        return new RiddleLink(data);
      case 'linking':
      default:
        return new Linking(data);
    }
  }

  createHidden(data) {
    const hidden = new Hidden(data);
    // Create the revealed thing from data
    if (data.revealedThingData) {
      const rd = data.revealedThingData;
      const linkTypes = ['linking', 'openLink', 'dangerLink', 'dangerLink2', 'riddleLink'];
      if (linkTypes.includes(rd.type)) {
        hidden.revealedThing = this.createLink(rd);
      } else if (rd.type === 'troll') {
        hidden.revealedThing = new Troll(rd);
      } else if (rd.type === 'daughter') {
        hidden.revealedThing = new Daughter(rd);
      } else if (rd.type === 'hidden') {
        hidden.revealedThing = this.createHidden(rd);
      } else {
        hidden.revealedThing = new GameObject(rd);
      }
    }
    return hidden;
  }

  output(text, type = 'normal') {
    if (this.onOutput) this.onOutput(text, type);
  }

  executeCommand(input) {
    if (this.isGameOver || this.isVictory) return;

    const cmd = this.parser.parse(input);
    this.commandHistory.push(input);

    if (!cmd.verb) {
      this.output(i18n.t('dontUnderstand'));
      this.notifyState();
      return;
    }

    switch (cmd.verb) {
      case 'go': this.handleGo(cmd.object); break;
      case 'take': this.handleTake(cmd.object); break;
      case 'drop': this.handleDrop(cmd.object); break;
      case 'open': this.handleOpen(cmd.object, cmd.modifier); break;
      case 'kill': this.handleKill(cmd.object, cmd.modifier); break;
      case 'look': cmd.object ? this.handleSee(cmd.object) : this.handleLook(); break;
      case 'see': this.handleSee(cmd.object); break;
      case 'break': this.handleBreak(cmd.object, cmd.modifier); break;
      case 'ask': this.handleAsk(cmd.object); break;
      case 'give': this.handleGive(cmd.object, cmd.modifier, cmd.prepType); break;
      case 'inventory': this.handleInventory(); break;
      case 'weigh': this.handleWeigh(cmd.object); break;
      case 'percent': this.handlePercent(); break;
      case 'save': this.handleSave(); break;
      case 'load': this.handleLoad(); break;
      case 'help': this.handleHelp(); break;
      case 'quit': this.handleQuit(); break;
      default: this.output(i18n.t('dontUnderstand'));
    }

    // Check turn effects (e.g. item-in-room kills player)
    this.checkTurnEffects();

    // Check win/lose
    if (this.player.isDead && !this.isGameOver) {
      this.isGameOver = true;
      this.output(i18n.t('funeral'), 'death');
    } else if (this.checkVictory() && !this.isVictory) {
      this.isVictory = true;
      this.output(i18n.t('victory'), 'victory');
      this.output(i18n.t('victoryMsg1'));
      this.output(i18n.t('victoryMsg2'));
      this.output(i18n.t('victoryMsg3'));
      this.output(i18n.t('victoryAuthor'));
    }

    this.notifyState();
  }

  notifyState() {
    if (this.onStateChange) this.onStateChange();
  }

  // --- Command Handlers ---

  handleLook() {
    const room = this.player.currentRoom;
    const lang = i18n.getLang();
    this.output(i18n.t('youAreIn') + room.name(lang) + '.', 'room-name');
    this.output(room.description(lang), 'room-desc');

    const visible = room.getAllVisible();
    if (visible.length > 0) {
      this.output(i18n.t('youSee'), 'list-header');
      for (const obj of visible) {
        const prefix = obj.isLinking ? '>' : obj.isNPC ? '*' : '-';
        this.output(`  ${prefix} ${i18n.objectName(obj)}`, 'list-item');
      }
    }
  }

  handleSee(name) {
    if (!name) { this.handleLook(); return; }

    const lang = i18n.getLang();
    // Search room first, then inventory
    let obj = this.player.currentRoom.findObject(name, lang);
    if (!obj) obj = this.player.findItem(name);

    if (!obj) {
      this.output(i18n.t('notHere'));
      return;
    }

    this.output(`${i18n.objectName(obj)}: ${i18n.objectDesc(obj)}`);
  }

  handleGo(doorName) {
    if (!doorName) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    const lang = i18n.getLang();
    const room = this.player.currentRoom;
    const door = room.findObject(doorName, lang);

    if (!door || !door.isLinking) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    // Auto-open if closed and no password needed
    if (!door.isOpen) {
      if (!door.password && !(door instanceof RiddleLink)) {
        door.isOpen = true;
      } else {
        this.output(i18n.t('doorClosed'));
        return;
      }
    }

    // Get destination
    const dest = this.rooms[door.destinationId];
    if (!dest) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    // Try to pass (DangerLink checks happen here)
    const result = door.pass(this.player, lang);
    if (result.message) {
      this.output(result.message, result.success ? 'passage' : 'death');
    }

    if (!result.success) {
      return;
    }

    // Move player
    this.player.go(dest);

    // Check for one-way door (no return link)
    const returnLink = dest.getLinks().find(l =>
      l.destinationId === room.roomId
    );
    if (!returnLink && dest.getLinks().length > 0) {
      this.output(i18n.t('oneWayWarning'), 'warning');
    }

    // Auto-look
    this.handleLook();
  }

  handleTake(name) {
    if (!name) { this.output(i18n.t('cantDoThat')); return; }

    const lang = i18n.getLang();
    const room = this.player.currentRoom;
    const obj = room.findObject(name, lang);

    if (!obj) {
      this.output(i18n.t('notHere'));
      return;
    }

    if (obj.isLinking || obj.isNPC || obj.isHidden) {
      this.output(i18n.t('cantCarry'));
      return;
    }

    if (obj.weight > this.config.maxWeight) {
      this.output(i18n.t('cantCarry'));
      return;
    }

    if (!this.player.canCarry(obj)) {
      this.output(i18n.t('tooHeavy'));
      return;
    }

    room.remove(obj);
    this.player.take(obj);
    this.output(i18n.t('taken'));
  }

  handleDrop(name) {
    if (!name) { this.output(i18n.t('cantDoThat')); return; }

    const lang = i18n.getLang();

    // Check for "drop all"
    if (GameObject.normalize(name) === 'todo' || GameObject.normalize(name) === 'all' || GameObject.normalize(name) === 'everything') {
      if (this.player.inventory.length === 0) {
        this.output(i18n.t('emptyInventory'));
        return;
      }
      const items = [...this.player.inventory];
      for (const item of items) {
        this.player.drop(item);
        this.player.currentRoom.add(item);
      }
      this.output(i18n.t('dropAll'));
      return;
    }

    const item = this.player.findItem(name);
    if (!item) {
      this.output(i18n.t('dontHaveIt'));
      return;
    }

    this.player.drop(item);
    this.player.currentRoom.add(item);
    this.output(i18n.t('dropped'));
  }

  handleOpen(doorName, key) {
    if (!doorName) { this.output(i18n.t('cantDoThat')); return; }

    const lang = i18n.getLang();
    const room = this.player.currentRoom;
    const door = room.findObject(doorName, lang);

    if (!door || !door.isLinking) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    if (door.isOpen) {
      this.output(i18n.t('doorAlreadyOpen'));
      return;
    }

    // Handle riddle links
    if (door instanceof RiddleLink) {
      if (!key) {
        this.output(door.riddle(lang));
        return;
      }
      const result = door.open(key);
      if (result.riddleSolved) {
        this.output(i18n.t('riddleSolved'));
        // Also open return link if exists
        this.openReturnLink(door);
      } else {
        this.output(i18n.t('wrongAnswer'));
        this.output(door.riddle(lang));
      }
      return;
    }

    // Handle password links
    if (door.password && !key) {
      this.output(i18n.t('needMagicWords'));
      return;
    }

    const result = door.open(key || '');
    if (result.success) {
      this.output(i18n.t('doorOpened'));
      // Open return link in destination room
      this.openReturnLink(door);
    } else {
      this.output(i18n.t('wrongPassword'));
    }
  }

  openReturnLink(door) {
    const destRoom = this.rooms[door.destinationId];
    if (!destRoom) return;
    const returnLink = destRoom.children.find(c =>
      c.isLinking && c.destinationId === this.player.currentRoom.roomId &&
      GameObject.normalize(c.nameEs) === GameObject.normalize(door.nameEs)
    );
    if (returnLink && !returnLink.isOpen) {
      returnLink.isOpen = true;
    }
  }

  handleKill(targetName, weaponName) {
    if (!targetName) { this.output(i18n.t('killWhat')); return; }

    const lang = i18n.getLang();
    const room = this.player.currentRoom;
    const target = room.findObject(targetName, lang);

    if (!target || !target.isNPC) {
      this.output(i18n.t('cantKill'));
      return;
    }

    if (target.isDead) {
      this.output(i18n.t('cantKill'));
      return;
    }

    if (!weaponName) { this.output(i18n.t('killWith')); return; }

    // Check player has weapon
    const weapon = this.player.findItem(weaponName);
    if (!weapon) {
      this.output(i18n.t('dontHaveIt'));
      return;
    }

    if (target instanceof Guard) {
      // Always use Spanish name for comparison since lethalWeapon is stored in Spanish
      const result = target.die(weapon.nameEs);
      if (result.success) {
        this.output(i18n.t('npcDeath'), 'combat');
        this.output(target.confession(lang), 'combat');
        // If killing this NPC drops an item (e.g. Daughter), place it in the room
        if (result.droppedItem) {
          const droppedObj = new GameObject(result.droppedItem);
          this.player.currentRoom.add(droppedObj);
          this.output(i18n.t('discovered'), 'effect');
        }
      } else {
        this.output(i18n.t('guardLaugh'), 'combat');
      }
    } else if (target instanceof Troll) {
      // Trolls can be killed with any weapon
      const result = target.die(weapon.nameEs);
      if (result.success) {
        this.output(i18n.t('npcDeath'), 'combat');
      }
    } else {
      this.output(i18n.t('cantKill'));
    }
  }

  handleGive(itemName, recipientName, prepType) {
    // Handle "give X to Y" and "give Y X" patterns
    if (!itemName) { this.output(i18n.t('giveWhat')); return; }

    const lang = i18n.getLang();
    let item, recipient;

    if (prepType === 'to' && recipientName) {
      // "dar objeto a personaje"
      item = this.player.findItem(itemName);
      recipient = this.player.currentRoom.findObject(recipientName, lang);
    } else if (recipientName) {
      // Try both orders
      item = this.player.findItem(itemName);
      recipient = this.player.currentRoom.findObject(recipientName, lang);
      if (!item && !recipient) {
        item = this.player.findItem(recipientName);
        recipient = this.player.currentRoom.findObject(itemName, lang);
      }
    } else {
      this.output(i18n.t('giveToWhom'));
      return;
    }

    if (!item) {
      this.output(i18n.t('dontHaveIt'));
      return;
    }

    if (!recipient || !recipient.isNPC) {
      this.output(i18n.t('giveToWhom'));
      return;
    }

    if (!(recipient instanceof Troll)) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    const result = recipient.accept(item);
    if (result.success) {
      this.player.drop(item);
      // Item is consumed (not placed in room)
      this.output(i18n.t('thankYou'));
      this.output(recipient.speak(lang), 'hint');
    } else {
      this.output(i18n.t('giftRejected'));
    }
  }

  handleAsk(npcName) {
    if (!npcName) { this.output(i18n.t('cantDoThat')); return; }

    const lang = i18n.getLang();
    const npc = this.player.currentRoom.findObject(npcName, lang);

    if (!npc || !npc.isNPC) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    if (npc.isDead) {
      this.output(i18n.t('cantDoThat'));
      return;
    }

    this.output(npc.speak(lang));
  }

  handleBreak(containerName, toolName) {
    if (!containerName) { this.output(i18n.t('breakWhat')); return; }

    const lang = i18n.getLang();
    const room = this.player.currentRoom;
    const container = room.findObject(containerName, lang);

    if (!container) {
      this.output(i18n.t('notHere'));
      return;
    }

    if (!container.isHidden) {
      this.output(i18n.t('cantBreak'));
      return;
    }

    if (!toolName) { this.output(i18n.t('breakWith')); return; }

    // Find the actual tool item to get its Spanish name
    let tool = this.player.findItem(toolName);
    let toolSpanishName = null;

    if (tool) {
      // Player has the tool in inventory
      toolSpanishName = tool.nameEs;
    } else {
      // Check if the tool is in the room
      tool = room.findObject(toolName, lang);
      if (tool && !tool.isLinking && !tool.isNPC && !tool.isHidden) {
        toolSpanishName = tool.nameEs;
      }
    }

    if (!toolSpanishName) {
      this.output(i18n.t('dontHaveIt'));
      return;
    }

    // Always use Spanish name for comparison since breakerItem is stored in Spanish
    const result = container.breakWith(toolSpanishName);
    if (result.success && container.revealedThing) {
      this.output(i18n.t('crash'), 'effect');
      this.output(i18n.t('discovered'), 'effect');

      // Replace hidden with revealed thing
      room.remove(container);
      room.add(container.revealedThing);
    } else {
      this.output(i18n.t('cantBreak'));
    }
  }

  handleInventory() {
    const lang = i18n.getLang();
    if (this.player.inventory.length === 0) {
      this.output(i18n.t('emptyInventory'));
      return;
    }

    this.output(i18n.t('inventoryTitle'), 'list-header');
    for (const item of this.player.inventory) {
      this.output(`  - ${i18n.objectName(item)} (${item.weight})`, 'list-item');
    }

    const remaining = this.player.remainingCapacity();
    if (remaining <= 0) {
      this.output(i18n.t('completelyFull'));
    } else if (remaining === 1) {
      this.output(i18n.t('almostFull'));
    } else {
      this.output(i18n.format('canCarryMore', remaining));
    }
  }

  handleWeigh(name) {
    if (!name) { this.output(i18n.t('cantDoThat')); return; }

    // Check player has scale
    if (!this.player.hasItem('Balanza') && !this.player.hasItem('Scale')) {
      this.output(i18n.t('needScale'));
      return;
    }

    const lang = i18n.getLang();
    let obj = this.player.findItem(name);
    if (!obj) obj = this.player.currentRoom.findObject(name, lang);

    if (!obj) {
      this.output(i18n.t('notHere'));
      return;
    }

    this.output(i18n.format('weighs', i18n.objectName(obj), obj.weight));
  }

  handlePercent() {
    const pct = Math.round((this.player.visits / this.config.totalRooms) * 100);
    this.output(i18n.format('progress', pct));
  }

  handleHelp() {
    this.output(i18n.t('helpTitle'), 'list-header');
    const commands = i18n.t('helpCommands');
    if (Array.isArray(commands)) {
      for (const cmd of commands) {
        this.output(`  ${cmd}`, 'list-item');
      }
    }
  }

  handleQuit() {
    this.player.die();
    this.output(i18n.t('youDied'), 'death');
  }

  handleSave() {
    try {
      const state = this.serializeState();
      localStorage.setItem(`fortaleza_save_${this.config.id}`, JSON.stringify(state));
      this.output(i18n.t('gameSaved'));
    } catch (e) {
      this.output('Error: ' + e.message);
    }
  }

  handleLoad() {
    try {
      const data = localStorage.getItem(`fortaleza_save_${this.config.id}`);
      if (!data) {
        this.output(i18n.t('noSaveFound'));
        return;
      }
      const state = JSON.parse(data);
      this.deserializeState(state);
      this.output(i18n.t('gameLoaded'));
      this.handleLook();
    } catch (e) {
      this.output('Error: ' + e.message);
    }
  }

  // --- Turn Effects ---

  checkTurnEffects() {
    const effects = this.config.turnEffects;
    if (!effects) return;
    for (const eff of effects) {
      if (eff.type === 'itemPresenceKills') {
        const room = this.rooms[eff.roomId];
        if (room && this.player.currentRoom === room && room.findObject(eff.itemName)) {
          this.player.die();
          this.output(eff.messageEs && eff.messageEn
            ? (i18n.getLang() === 'en' ? eff.messageEn : eff.messageEs)
            : i18n.t('youDied'), 'death');
        }
      }
    }
  }

  // --- Victory Check ---

  checkVictory() {
    return this.config.victoryConditions.every(cond => {
      if (cond.type === 'gone') {
        const room = this.rooms[cond.roomId];
        if (!room) return false;
        const obj = room.findObject(cond.name);
        return !obj || obj.isDead || obj.isHappy;
      }
      if (cond.type === 'itemInRoom') {
        const room = this.rooms[cond.roomId];
        return room?.findObject(cond.itemName) != null;
      }
      return false;
    });
  }

  // --- Serialization ---

  serializeState() {
    const itemLocations = {};
    // Track all items' current locations
    for (const [roomId, room] of Object.entries(this.rooms)) {
      for (const child of room.children) {
        if (!child.isLinking && !child.isNPC && !child.isHidden && child.id) {
          itemLocations[child.id] = { location: 'room', roomId: parseInt(roomId) };
        }
      }
    }
    for (const item of this.player.inventory) {
      if (item.id) itemLocations[item.id] = { location: 'inventory' };
    }

    // Track NPC states
    const npcStates = {};
    for (const room of Object.values(this.rooms)) {
      for (const child of room.children) {
        if (child.isNPC && child.id) {
          npcStates[child.id] = {
            isDead: child.isDead,
            isHappy: child.isHappy || false,
          };
        }
      }
    }

    // Track link states
    const linkStates = {};
    for (const room of Object.values(this.rooms)) {
      for (const child of room.children) {
        if (child.isLinking && child.id) {
          linkStates[child.id] = { isOpen: child.isOpen };
        }
      }
    }

    // Track room visited states
    const roomStates = {};
    for (const [roomId, room] of Object.entries(this.rooms)) {
      roomStates[roomId] = { visited: room.visited };
    }

    return {
      version: 1,
      partId: this.config.id,
      timestamp: Date.now(),
      playerRoomId: this.player.currentRoom.roomId,
      playerVisits: this.player.visits,
      itemLocations,
      npcStates,
      linkStates,
      roomStates,
      lang: i18n.getLang(),
    };
  }

  deserializeState(state) {
    // Reset the world
    this.isGameOver = false;
    this.isVictory = false;
    this.player.isDead = false;

    // Restore room visited states
    for (const [roomId, data] of Object.entries(state.roomStates || {})) {
      if (this.rooms[roomId]) {
        this.rooms[roomId].visited = data.visited;
      }
    }

    // Restore NPC states
    for (const room of Object.values(this.rooms)) {
      for (const child of room.children) {
        if (child.isNPC && child.id && state.npcStates?.[child.id]) {
          const ns = state.npcStates[child.id];
          child.isDead = ns.isDead;
          if ('isHappy' in ns) child.isHappy = ns.isHappy;
        }
      }
    }

    // Restore link states
    for (const room of Object.values(this.rooms)) {
      for (const child of room.children) {
        if (child.isLinking && child.id && state.linkStates?.[child.id]) {
          child.isOpen = state.linkStates[child.id].isOpen;
        }
      }
    }

    // Restore item locations - move items to correct rooms/inventory
    this.player.inventory = [];
    for (const [itemId, loc] of Object.entries(state.itemLocations || {})) {
      // Find the item across all rooms and inventory
      let foundItem = null;
      let foundIn = null;
      for (const room of Object.values(this.rooms)) {
        const item = room.children.find(c => c.id === itemId);
        if (item) {
          foundItem = item;
          foundIn = room;
          break;
        }
      }

      if (foundItem) {
        if (loc.location === 'inventory') {
          if (foundIn) foundIn.remove(foundItem);
          this.player.inventory.push(foundItem);
        } else if (loc.location === 'room' && loc.roomId !== foundIn?.roomId) {
          if (foundIn) foundIn.remove(foundItem);
          this.rooms[loc.roomId]?.add(foundItem);
        }
      }
    }

    // Restore player position
    this.player.visits = state.playerVisits || 0;
    this.player.currentRoom = this.rooms[state.playerRoomId] || this.rooms[1];

    // Restore language
    if (state.lang) i18n.setLang(state.lang);
  }

  // --- Utility ---

  getAvailableActions() {
    const room = this.player.currentRoom;
    return {
      doors: room.getLinks().filter(l => !l.isDead),
      items: room.getItems().filter(i => i.weight <= this.config.maxWeight),
      npcs: room.getNPCs(),
      hiddens: room.getHiddenObjects(),
    };
  }

  isDangerousDoor(door) {
    if (!door || !door.isLinking) return false;
    if (door.talisman && !this.player.hasItem(door.talisman)) return true;
    if (door.forbiddenItem && this.player.hasItem(door.forbiddenItem)) return true;
    return false;
  }

  restart(partData) {
    this.player = new Player(this.config.maxWeight);
    this.rooms = {};
    this.isGameOver = false;
    this.isVictory = false;
    this.commandHistory = [];
    this.initializeWorld(partData);
  }
}
