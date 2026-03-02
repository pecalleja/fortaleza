import { describe, it, expect, beforeEach, vi } from 'vitest';
import { GameEngine } from '../js/engine/GameEngine.js';
import * as i18n from '../js/i18n/i18n.js';

describe('GameEngine', () => {
  let engine;
  let output;

  beforeEach(() => {
    i18n.setLang('es');
    engine = new GameEngine();
    output = [];
    engine.onOutput = (text, type) => output.push({ text, type });
  });

  function lastOutput() {
    return output[output.length - 1]?.text || '';
  }

  function allOutputText() {
    return output.map(o => o.text).join('\n');
  }

  describe('initialization', () => {
    it('creates rooms', () => {
      expect(Object.keys(engine.rooms).length).toBeGreaterThan(0);
    });

    it('places player in room 1', () => {
      expect(engine.player.currentRoom.roomId).toBe(1);
    });

    it('room 1 has items', () => {
      const items = engine.player.currentRoom.getItems();
      expect(items.length).toBeGreaterThan(0);
    });

    it('room 1 has links', () => {
      const links = engine.player.currentRoom.getLinks();
      expect(links.length).toBeGreaterThan(0);
    });

    it('room 1 has the main door', () => {
      const door = engine.player.currentRoom.findObject('Puerta principal');
      expect(door).not.toBeNull();
      expect(door.isLinking).toBe(true);
    });

    it('room 1 has a troll (Llamador de bronce)', () => {
      const npcs = engine.player.currentRoom.getNPCs();
      expect(npcs.length).toBeGreaterThan(0);
      const knocker = npcs.find(n => n.nameEs === 'Llamador de bronce');
      expect(knocker).toBeDefined();
    });

    it('hidden NPCs are not placed directly in rooms', () => {
      // Trebol is hidden inside Monolito in room 2, should not appear as NPC in room 2
      const room2 = engine.rooms[2];
      const trebol = room2.getNPCs().find(n => n.nameEs === 'Trebol');
      expect(trebol).toBeUndefined();
    });
  });

  describe('look command', () => {
    it('shows room name and description', () => {
      engine.executeCommand('mirar');
      expect(allOutputText()).toContain('exterior de la fortaleza');
    });

    it('shows items in room', () => {
      engine.executeCommand('mirar');
      const text = allOutputText();
      expect(text).toContain('Maza');
    });
  });

  describe('see/examine command', () => {
    it('shows item description', () => {
      engine.executeCommand('ver Maza');
      expect(allOutputText()).toContain('pesada');
    });

    it('shows not here for missing item', () => {
      engine.executeCommand('ver Unicornio');
      expect(allOutputText()).toContain(i18n.t('notHere'));
    });
  });

  describe('take command', () => {
    it('picks up an item', () => {
      engine.executeCommand('tomar pastel de cerezas');
      expect(lastOutput()).toBe(i18n.t('taken'));
      expect(engine.player.inventory.length).toBe(1);
    });

    it('removes item from room', () => {
      engine.executeCommand('tomar pastel de cerezas');
      const cake = engine.player.currentRoom.findObject('Pastel de cerezas');
      expect(cake).toBeNull();
    });

    it('cannot take links', () => {
      engine.executeCommand('tomar puerta principal');
      expect(allOutputText()).toContain(i18n.t('cantCarry'));
    });

    it('cannot take NPCs', () => {
      engine.executeCommand('tomar llamador');
      expect(allOutputText()).toContain(i18n.t('cantCarry'));
    });

    it('rejects too heavy total weight', () => {
      // Maza weighs 39, pick it up first
      engine.executeCommand('tomar maza');
      output = [];
      // Now try to take something that pushes over 40
      engine.executeCommand('tomar pastel de cerezas');
      expect(allOutputText()).toContain(i18n.t('tooHeavy'));
    });

    it('reports not here for missing items', () => {
      engine.executeCommand('tomar Unicornio');
      expect(allOutputText()).toContain(i18n.t('notHere'));
    });
  });

  describe('drop command', () => {
    it('drops an item from inventory', () => {
      engine.executeCommand('tomar pastel de cerezas');
      output = [];
      engine.executeCommand('dejar pastel de cerezas');
      expect(lastOutput()).toBe(i18n.t('dropped'));
      expect(engine.player.inventory.length).toBe(0);
    });

    it('places dropped item in current room', () => {
      engine.executeCommand('tomar pastel de cerezas');
      engine.executeCommand('dejar pastel de cerezas');
      const cake = engine.player.currentRoom.findObject('Pastel de cerezas');
      expect(cake).not.toBeNull();
    });

    it('reports not having item', () => {
      engine.executeCommand('dejar Unicornio');
      expect(allOutputText()).toContain(i18n.t('dontHaveIt'));
    });

    it('drop all empties inventory', () => {
      engine.executeCommand('tomar pastel de cerezas');
      output = [];
      engine.executeCommand('dejar todo');
      expect(allOutputText()).toContain(i18n.t('dropAll'));
      expect(engine.player.inventory.length).toBe(0);
    });
  });

  describe('open command', () => {
    it('opens door with correct password', () => {
      engine.executeCommand('abrir puerta principal con abrete sesamo');
      expect(allOutputText()).toContain(i18n.t('doorOpened'));
    });

    it('rejects wrong password', () => {
      engine.executeCommand('abrir puerta principal con password');
      expect(allOutputText()).toContain(i18n.t('wrongPassword'));
    });

    it('requires password when not provided', () => {
      engine.executeCommand('abrir puerta principal');
      expect(allOutputText()).toContain(i18n.t('needMagicWords'));
    });

    it('reports already open door', () => {
      const door = engine.player.currentRoom.findObject('Tunel');
      expect(door.isOpen).toBe(true);
      engine.executeCommand('abrir tunel');
      expect(allOutputText()).toContain(i18n.t('doorAlreadyOpen'));
    });
  });

  describe('go command', () => {
    it('moves through open link', () => {
      // Tunel is an OpenLink from room 1 to room 4
      engine.executeCommand('ir tunel');
      expect(engine.player.currentRoom.roomId).toBe(4);
    });

    it('auto-looks after moving', () => {
      engine.executeCommand('ir tunel');
      expect(allOutputText()).toContain(i18n.t('youAreIn'));
    });

    it('bumps nose on closed door', () => {
      // Puerta principal is closed and needs password
      engine.executeCommand('ir puerta principal');
      expect(allOutputText()).toContain(i18n.t('doorClosed'));
      expect(engine.player.currentRoom.roomId).toBe(1);
    });

    it('enters after opening door', () => {
      engine.executeCommand('abrir puerta principal con abrete sesamo');
      output = [];
      engine.executeCommand('ir puerta principal');
      expect(engine.player.currentRoom.roomId).toBe(2);
    });
  });

  describe('inventory command', () => {
    it('shows empty inventory message', () => {
      engine.executeCommand('inventario');
      expect(allOutputText()).toContain(i18n.t('emptyInventory'));
    });

    it('lists items after taking one', () => {
      engine.executeCommand('tomar pastel de cerezas');
      output = [];
      engine.executeCommand('inventario');
      expect(allOutputText()).toContain('Pastel de cerezas');
    });

    it('shows remaining capacity', () => {
      engine.executeCommand('tomar pastel de cerezas');
      output = [];
      engine.executeCommand('inventario');
      // Cake weighs 2, remaining = 38
      expect(allOutputText()).toContain('38');
    });
  });

  describe('ask command', () => {
    it('shows troll message', () => {
      engine.executeCommand('preguntar llamador');
      expect(allOutputText()).toContain('cigarro');
    });
  });

  describe('give command', () => {
    it('troll accepts wanted item', () => {
      // Need to find the item the Llamador wants: Cigarro
      // Cigarro is in another room, so let's create a test scenario
      // First, let's find where Cigarro is
      let cigarRoom = null;
      for (const [id, room] of Object.entries(engine.rooms)) {
        const c = room.findObject('Cigarro');
        if (c && !c.isLinking && !c.isNPC) {
          cigarRoom = id;
          break;
        }
      }

      if (cigarRoom) {
        // Move cigarro to player inventory for testing
        const room = engine.rooms[cigarRoom];
        const cigarro = room.findObject('Cigarro');
        room.remove(cigarro);
        engine.player.take(cigarro);

        output = [];
        engine.executeCommand('dar cigarro a llamador');
        expect(allOutputText()).toContain(i18n.t('thankYou'));
      }
    });

    it('troll rejects unwanted item', () => {
      engine.executeCommand('tomar pastel de cerezas');
      output = [];
      engine.executeCommand('dar pastel de cerezas a llamador');
      expect(allOutputText()).toContain(i18n.t('giftRejected'));
    });
  });

  describe('kill command', () => {
    it('asks what to kill when no target', () => {
      engine.executeCommand('matar');
      expect(allOutputText()).toContain(i18n.t('killWhat'));
    });

    it('asks with what when no weapon specified', () => {
      engine.executeCommand('matar llamador');
      expect(allOutputText()).toContain(i18n.t('killWith'));
    });
  });

  describe('break command', () => {
    it('asks what to break when no target', () => {
      engine.executeCommand('romper');
      expect(allOutputText()).toContain(i18n.t('breakWhat'));
    });

    it('asks with what when no tool', () => {
      // First navigate to room with hidden object
      // Room 2 has Monolito (hidden)
      engine.executeCommand('abrir puerta principal con abrete sesamo');
      engine.executeCommand('ir puerta principal');
      output = [];
      engine.executeCommand('romper monolito');
      expect(allOutputText()).toContain(i18n.t('breakWith'));
    });
  });

  describe('weigh command', () => {
    it('requires scale', () => {
      engine.executeCommand('tomar pastel de cerezas');
      output = [];
      engine.executeCommand('pesar pastel');
      expect(allOutputText()).toContain(i18n.t('needScale'));
    });
  });

  describe('percent command', () => {
    it('shows progress percentage', () => {
      engine.executeCommand('porciento');
      // Player has visited room 1 only = 1/50 = 2%
      expect(allOutputText()).toContain('2%');
    });

    it('increases after visiting rooms', () => {
      engine.executeCommand('ir tunel');
      output = [];
      engine.executeCommand('porciento');
      // Visited 2 rooms = 4%
      expect(allOutputText()).toContain('4%');
    });
  });

  describe('help command', () => {
    it('shows help title', () => {
      engine.executeCommand('ayuda');
      expect(allOutputText()).toContain(i18n.t('helpTitle'));
    });
  });

  describe('unknown command', () => {
    it('shows dont understand', () => {
      engine.executeCommand('xyzzy');
      expect(allOutputText()).toContain(i18n.t('dontUnderstand'));
    });
  });

  describe('quit command', () => {
    it('kills the player', () => {
      engine.executeCommand('abandonar');
      expect(engine.player.isDead).toBe(true);
      expect(engine.isGameOver).toBe(true);
    });
  });

  describe('English commands', () => {
    beforeEach(() => {
      i18n.setLang('en');
    });

    it('parses English take command', () => {
      engine.executeCommand('take cherry cake');
      expect(engine.player.inventory.length).toBe(1);
    });

    it('parses English look command', () => {
      engine.executeCommand('look');
      expect(allOutputText()).toContain('fortress exterior');
    });

    it('parses English go command', () => {
      engine.executeCommand('go tunnel');
      expect(engine.player.currentRoom.roomId).toBe(4);
    });

    it('parses English open command', () => {
      engine.executeCommand('open main door with abrete sesamo');
      expect(allOutputText()).toContain('Ok.');
    });
  });

  describe('game state', () => {
    it('blocks commands after death', () => {
      engine.executeCommand('abandonar');
      output = [];
      engine.executeCommand('mirar');
      expect(output.length).toBe(0);
    });

    it('restart resets the game', () => {
      engine.executeCommand('tomar pastel de cerezas');
      engine.restart();
      expect(engine.player.inventory.length).toBe(0);
      expect(engine.player.currentRoom.roomId).toBe(1);
      expect(engine.isGameOver).toBe(false);
    });
  });

  describe('getAvailableActions', () => {
    it('returns doors, items, npcs, hiddens', () => {
      const actions = engine.getAvailableActions();
      expect(actions.doors.length).toBeGreaterThan(0);
      expect(actions.items.length).toBeGreaterThan(0);
      expect(actions.npcs.length).toBeGreaterThan(0);
    });
  });

  describe('serialization', () => {
    it('serializes and deserializes state', () => {
      // Take an item and move
      engine.executeCommand('tomar pastel de cerezas');
      engine.executeCommand('ir tunel');

      const state = engine.serializeState();
      expect(state.version).toBe(1);
      expect(state.playerRoomId).toBe(4);

      // Restart and restore
      engine.restart();
      expect(engine.player.currentRoom.roomId).toBe(1);
      expect(engine.player.inventory.length).toBe(0);

      engine.deserializeState(state);
      expect(engine.player.currentRoom.roomId).toBe(4);
      expect(engine.player.inventory.length).toBe(1);
      expect(engine.player.inventory[0].nameEs).toBe('Pastel de cerezas');
    });
  });
});
