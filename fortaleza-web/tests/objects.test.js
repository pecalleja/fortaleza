import { describe, it, expect, beforeEach } from 'vitest';
import { GameObject } from '../js/engine/GameObject.js';
import { Room } from '../js/engine/Room.js';
import { Player } from '../js/engine/Player.js';
import { Linking, OpenLink, DangerLink, DangerLink2, RiddleLink } from '../js/engine/Linking.js';
import { Troll, Guard, Hidden } from '../js/engine/NPC.js';

describe('GameObject', () => {
  it('stores bilingual names', () => {
    const obj = new GameObject({
      id: 'test',
      nameEs: 'Espada',
      nameEn: 'Sword',
      descEs: 'Una espada.',
      descEn: 'A sword.',
    });
    expect(obj.name('es')).toBe('Espada');
    expect(obj.name('en')).toBe('Sword');
  });

  it('falls back to Spanish name when English is missing', () => {
    const obj = new GameObject({
      id: 'test',
      nameEs: 'Espada',
      descEs: 'Una espada.',
    });
    expect(obj.name('en')).toBe('Espada');
  });

  it('adds and removes children', () => {
    const parent = new GameObject({ id: 'p', nameEs: 'P', descEs: '' });
    const child = new GameObject({ id: 'c', nameEs: 'C', descEs: '' });

    parent.add(child);
    expect(parent.children).toContain(child);

    parent.remove(child);
    expect(parent.children).not.toContain(child);
  });

  it('remove returns false if child not found', () => {
    const parent = new GameObject({ id: 'p', nameEs: 'P', descEs: '' });
    const other = new GameObject({ id: 'o', nameEs: 'O', descEs: '' });
    expect(parent.remove(other)).toBe(false);
  });

  describe('findObject', () => {
    let container;
    let sword;
    let cake;

    beforeEach(() => {
      container = new GameObject({ id: 'room', nameEs: 'Room', descEs: '' });
      sword = new GameObject({ id: 'espada', nameEs: 'Espada', nameEn: 'Sword', descEs: '' });
      cake = new GameObject({ id: 'pastel', nameEs: 'Pastel de cerezas', nameEn: 'Cherry cake', descEs: '' });
      container.add(sword);
      container.add(cake);
    });

    it('finds by exact Spanish name', () => {
      expect(container.findObject('Espada')).toBe(sword);
    });

    it('finds by exact English name', () => {
      expect(container.findObject('Sword')).toBe(sword);
    });

    it('finds by partial name', () => {
      expect(container.findObject('cerezas')).toBe(cake);
    });

    it('finds with case insensitivity', () => {
      expect(container.findObject('espada')).toBe(sword);
    });

    it('returns null for nonexistent object', () => {
      expect(container.findObject('shield')).toBeNull();
    });

    it('returns null for empty name', () => {
      expect(container.findObject('')).toBeNull();
    });
  });

  describe('normalize', () => {
    it('lowercases', () => {
      expect(GameObject.normalize('HELLO')).toBe('hello');
    });

    it('removes accents', () => {
      expect(GameObject.normalize('café')).toBe('cafe');
    });

    it('handles ñ', () => {
      expect(GameObject.normalize('niño')).toBe('nino');
    });

    it('trims whitespace', () => {
      expect(GameObject.normalize('  hello  ')).toBe('hello');
    });

    it('handles null', () => {
      expect(GameObject.normalize(null)).toBe('');
    });
  });
});

describe('Room', () => {
  let room;
  let item;
  let link;
  let npc;
  let hidden;

  beforeEach(() => {
    room = new Room({ roomId: 1, id: 'room1', nameEs: 'Sala', nameEn: 'Hall', descEs: '', descEn: '' });
    item = new GameObject({ id: 'item1', nameEs: 'Espada', nameEn: 'Sword', descEs: '', weight: 5 });
    link = new OpenLink({ id: 'link1', nameEs: 'Puerta', nameEn: 'Door', descEs: '', destinationId: 2 });
    npc = new Troll({
      id: 'npc1', nameEs: 'Troll', nameEn: 'Troll', descEs: '',
      wantsItem: 'Espada', happyMsgEs: 'Gracias', unhappyMsgEs: 'Dame',
    });
    hidden = new Hidden({
      id: 'h1', nameEs: 'Roca', nameEn: 'Rock', descEs: '',
      breakerItem: 'Maza',
    });
    room.add(item);
    room.add(link);
    room.add(npc);
    room.add(hidden);
  });

  it('starts not visited', () => {
    expect(room.visited).toBe(false);
  });

  it('getItems returns only regular items', () => {
    const items = room.getItems();
    expect(items).toHaveLength(1);
    expect(items[0]).toBe(item);
  });

  it('getLinks returns only links', () => {
    const links = room.getLinks();
    expect(links).toHaveLength(1);
    expect(links[0]).toBe(link);
  });

  it('getNPCs returns only living NPCs', () => {
    const npcs = room.getNPCs();
    expect(npcs).toHaveLength(1);
    expect(npcs[0]).toBe(npc);
  });

  it('getNPCs excludes dead NPCs', () => {
    npc.isDead = true;
    expect(room.getNPCs()).toHaveLength(0);
  });

  it('getHiddenObjects returns only hidden objects', () => {
    const hiddens = room.getHiddenObjects();
    expect(hiddens).toHaveLength(1);
    expect(hiddens[0]).toBe(hidden);
  });

  it('getAllVisible excludes dead NPCs', () => {
    npc.isDead = true;
    const visible = room.getAllVisible();
    expect(visible).not.toContain(npc);
  });
});

describe('Player', () => {
  let player;
  let room1;
  let room2;
  let lightItem;
  let heavyItem;

  beforeEach(() => {
    player = new Player();
    room1 = new Room({ roomId: 1, id: 'r1', nameEs: 'Sala 1', descEs: '' });
    room2 = new Room({ roomId: 2, id: 'r2', nameEs: 'Sala 2', descEs: '' });
    lightItem = new GameObject({ id: 'light', nameEs: 'Pluma', nameEn: 'Feather', descEs: '', weight: 1 });
    heavyItem = new GameObject({ id: 'heavy', nameEs: 'Yunque', nameEn: 'Anvil', descEs: '', weight: 35 });
  });

  it('starts with empty inventory', () => {
    expect(player.inventory).toHaveLength(0);
  });

  it('go() sets current room and marks visited', () => {
    player.go(room1);
    expect(player.currentRoom).toBe(room1);
    expect(room1.visited).toBe(true);
    expect(player.visits).toBe(1);
  });

  it('go() does not double-count visited rooms', () => {
    player.go(room1);
    player.go(room1);
    expect(player.visits).toBe(1);
  });

  it('take() adds item to inventory', () => {
    player.take(lightItem);
    expect(player.inventory).toContain(lightItem);
  });

  it('drop() removes item from inventory', () => {
    player.take(lightItem);
    const result = player.drop(lightItem);
    expect(result).toBe(true);
    expect(player.inventory).not.toContain(lightItem);
  });

  it('drop() returns false when item not in inventory', () => {
    expect(player.drop(lightItem)).toBe(false);
  });

  it('currentWeight() sums item weights', () => {
    player.take(lightItem);
    player.take(heavyItem);
    expect(player.currentWeight()).toBe(36);
  });

  it('canCarry() returns true when under limit', () => {
    expect(player.canCarry(lightItem)).toBe(true);
  });

  it('canCarry() returns false when would exceed limit', () => {
    player.take(heavyItem); // 35
    const anotherHeavy = new GameObject({ id: 'h2', nameEs: 'X', descEs: '', weight: 10 });
    expect(player.canCarry(anotherHeavy)).toBe(false);
  });

  it('remainingCapacity() returns correct value', () => {
    player.take(lightItem); // 1
    expect(player.remainingCapacity()).toBe(39);
  });

  it('hasItem() finds by Spanish name', () => {
    player.take(lightItem);
    expect(player.hasItem('Pluma')).toBe(true);
  });

  it('hasItem() finds by English name', () => {
    player.take(lightItem);
    expect(player.hasItem('Feather')).toBe(true);
  });

  it('hasItem() is case-insensitive', () => {
    player.take(lightItem);
    expect(player.hasItem('pluma')).toBe(true);
  });

  it('findItem() returns item by name', () => {
    player.take(lightItem);
    expect(player.findItem('Pluma')).toBe(lightItem);
  });

  it('findItem() returns null when not found', () => {
    expect(player.findItem('Espada')).toBeNull();
  });

  it('die() sets isDead', () => {
    player.die();
    expect(player.isDead).toBe(true);
  });
});

describe('Linking', () => {
  describe('password door', () => {
    let door;

    beforeEach(() => {
      door = new Linking({
        id: 'd1', nameEs: 'Puerta', nameEn: 'Door', descEs: '',
        destinationId: 2, password: 'abrete sesamo', isOpen: false,
      });
    });

    it('starts closed', () => {
      expect(door.isOpen).toBe(false);
    });

    it('opens with correct password', () => {
      const result = door.open('abrete sesamo');
      expect(result.success).toBe(true);
      expect(door.isOpen).toBe(true);
    });

    it('open is case-insensitive', () => {
      const result = door.open('Abrete Sesamo');
      expect(result.success).toBe(true);
    });

    it('rejects wrong password', () => {
      const result = door.open('wrong');
      expect(result.success).toBe(false);
      expect(door.isOpen).toBe(false);
    });

    it('returns alreadyOpen when already opened', () => {
      door.isOpen = true;
      const result = door.open('anything');
      expect(result.alreadyOpen).toBe(true);
    });

    it('pass succeeds when open', () => {
      door.isOpen = true;
      const player = new Player();
      const result = door.pass(player, 'es');
      expect(result.success).toBe(true);
    });
  });

  describe('OpenLink', () => {
    it('is always open', () => {
      const link = new OpenLink({
        id: 'ol1', nameEs: 'Pasaje', nameEn: 'Passage', descEs: '',
        destinationId: 3,
      });
      expect(link.isOpen).toBe(true);
    });

    it('open() returns alreadyOpen', () => {
      const link = new OpenLink({
        id: 'ol1', nameEs: 'Pasaje', descEs: '', destinationId: 3,
      });
      const result = link.open();
      expect(result.alreadyOpen).toBe(true);
    });
  });

  describe('DangerLink', () => {
    let dangerLink;
    let player;

    beforeEach(() => {
      dangerLink = new DangerLink({
        id: 'dl1', nameEs: 'Puerta peligrosa', descEs: '',
        destinationId: 5, talisman: 'Talismán',
      });
      player = new Player();
    });

    it('kills player without talisman', () => {
      const result = dangerLink.pass(player, 'es');
      expect(result.success).toBe(false);
      expect(player.isDead).toBe(true);
    });

    it('lets player pass with talisman', () => {
      const talisman = new GameObject({ id: 't', nameEs: 'Talismán', descEs: '', weight: 1 });
      player.take(talisman);
      const result = dangerLink.pass(player, 'es');
      expect(result.success).toBe(true);
      expect(player.isDead).toBe(false);
    });
  });

  describe('DangerLink2', () => {
    let dangerLink2;
    let player;

    beforeEach(() => {
      dangerLink2 = new DangerLink2({
        id: 'dl2', nameEs: 'Puerta trampa', descEs: '',
        destinationId: 6, forbiddenItem: 'Veneno',
      });
      player = new Player();
    });

    it('kills player with forbidden item', () => {
      const forbidden = new GameObject({ id: 'v', nameEs: 'Veneno', descEs: '', weight: 1 });
      player.take(forbidden);
      const result = dangerLink2.pass(player, 'es');
      expect(result.success).toBe(false);
      expect(player.isDead).toBe(true);
    });

    it('lets player pass without forbidden item', () => {
      const result = dangerLink2.pass(player, 'es');
      expect(result.success).toBe(true);
      expect(player.isDead).toBe(false);
    });
  });

  describe('RiddleLink', () => {
    let riddleLink;

    beforeEach(() => {
      riddleLink = new RiddleLink({
        id: 'rl1', nameEs: 'Puerta enigma', descEs: '',
        destinationId: 7, riddleEs: 'Cuantas patas?', riddleEn: 'How many legs?',
        answer: 'cuatro',
      });
    });

    it('starts closed', () => {
      expect(riddleLink.isOpen).toBe(false);
    });

    it('shows riddle when no answer provided', () => {
      const result = riddleLink.open();
      expect(result.needsRiddle).toBe(true);
    });

    it('opens with correct answer', () => {
      const result = riddleLink.open('cuatro');
      expect(result.riddleSolved).toBe(true);
      expect(riddleLink.isOpen).toBe(true);
    });

    it('rejects wrong answer', () => {
      const result = riddleLink.open('cinco');
      expect(result.wrongAnswer).toBe(true);
      expect(riddleLink.isOpen).toBe(false);
    });

    it('riddle() returns localized riddle', () => {
      expect(riddleLink.riddle('es')).toBe('Cuantas patas?');
      expect(riddleLink.riddle('en')).toBe('How many legs?');
    });
  });
});

describe('Troll', () => {
  let troll;

  beforeEach(() => {
    troll = new Troll({
      id: 't1', nameEs: 'Duende', nameEn: 'Elf', descEs: '',
      wantsItem: 'Cigarro',
      happyMsgEs: 'Gracias!', happyMsgEn: 'Thanks!',
      unhappyMsgEs: 'Dame un cigarro.', unhappyMsgEn: 'Give me a cigarette.',
    });
  });

  it('has isNPC flag', () => {
    expect(troll.isNPC).toBe(true);
  });

  it('starts unhappy', () => {
    expect(troll.isHappy).toBe(false);
  });

  it('speaks unhappy message when not happy', () => {
    expect(troll.speak('es')).toBe('Dame un cigarro.');
    expect(troll.speak('en')).toBe('Give me a cigarette.');
  });

  it('accepts the wanted item', () => {
    const cigarro = new GameObject({ id: 'c', nameEs: 'Cigarro', nameEn: 'Cigarette', descEs: '', weight: 1 });
    const result = troll.accept(cigarro);
    expect(result.success).toBe(true);
    expect(troll.isHappy).toBe(true);
  });

  it('rejects unwanted items', () => {
    const sword = new GameObject({ id: 's', nameEs: 'Espada', nameEn: 'Sword', descEs: '', weight: 5 });
    const result = troll.accept(sword);
    expect(result.success).toBe(false);
    expect(troll.isHappy).toBe(false);
  });

  it('speaks happy message after accepting', () => {
    const cigarro = new GameObject({ id: 'c', nameEs: 'Cigarro', descEs: '', weight: 1 });
    troll.accept(cigarro);
    expect(troll.speak('es')).toBe('Gracias!');
    expect(troll.speak('en')).toBe('Thanks!');
  });

  it('die() always succeeds', () => {
    const result = troll.die('any');
    expect(result.success).toBe(true);
    expect(troll.isDead).toBe(true);
  });
});

describe('Guard', () => {
  let guard;

  beforeEach(() => {
    guard = new Guard({
      id: 'g1', nameEs: 'Guardia', nameEn: 'Guard', descEs: '',
      lethalWeapon: 'Espada',
      confessionEs: 'Me has derrotado...', confessionEn: 'You defeated me...',
    });
  });

  it('has isNPC flag', () => {
    expect(guard.isNPC).toBe(true);
  });

  it('dies with correct weapon', () => {
    const result = guard.die('Espada');
    expect(result.success).toBe(true);
    expect(guard.isDead).toBe(true);
  });

  it('survives wrong weapon', () => {
    const result = guard.die('Palo');
    expect(result.success).toBe(false);
    expect(guard.isDead).toBe(false);
  });

  it('weapon check is case-insensitive', () => {
    const result = guard.die('espada');
    expect(result.success).toBe(true);
  });

  it('speak() returns silent message', () => {
    expect(guard.speak('es')).toBe('No desea hablar con usted.');
    expect(guard.speak('en')).toBe('Does not wish to speak with you.');
  });

  it('confession() returns localized message', () => {
    expect(guard.confession('es')).toBe('Me has derrotado...');
    expect(guard.confession('en')).toBe('You defeated me...');
  });
});

describe('Hidden', () => {
  let hidden;

  beforeEach(() => {
    hidden = new Hidden({
      id: 'h1', nameEs: 'Monolito', nameEn: 'Monolith', descEs: '',
      breakerItem: 'Maza',
      revealedThingData: {
        id: 'revealed', nameEs: 'Trebol', nameEn: 'Clover', descEs: '',
      },
    });
  });

  it('has isHidden flag', () => {
    expect(hidden.isHidden).toBe(true);
  });

  it('breaks with correct tool', () => {
    const result = hidden.breakWith('Maza');
    expect(result.success).toBe(true);
  });

  it('does not break with wrong tool', () => {
    const result = hidden.breakWith('Palo');
    expect(result.success).toBe(false);
  });

  it('breakWith is case-insensitive', () => {
    const result = hidden.breakWith('maza');
    expect(result.success).toBe(true);
  });

  it('breaks without breaker when no breaker specified', () => {
    const noBreaker = new Hidden({
      id: 'h2', nameEs: 'Caja', descEs: '', breakerItem: null,
    });
    const result = noBreaker.breakWith('anything');
    expect(result.success).toBe(true);
  });
});
