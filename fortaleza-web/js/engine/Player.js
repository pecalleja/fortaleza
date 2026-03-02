import { GameObject } from './GameObject.js';

const MAX_WEIGHT = 40;

export class Player {
  constructor() {
    this.currentRoom = null;
    this.inventory = [];
    this.visits = 0;
    this.isDead = false;
  }

  go(room) {
    this.currentRoom = room;
    if (!room.visited) {
      room.visited = true;
      this.visits++;
    }
  }

  currentWeight() {
    return this.inventory.reduce((sum, item) => sum + item.weight, 0);
  }

  remainingCapacity() {
    return MAX_WEIGHT - this.currentWeight();
  }

  canCarry(item) {
    return item.weight <= MAX_WEIGHT && (this.currentWeight() + item.weight) <= MAX_WEIGHT;
  }

  take(item) {
    this.inventory.push(item);
  }

  drop(item) {
    const idx = this.inventory.indexOf(item);
    if (idx !== -1) {
      this.inventory.splice(idx, 1);
      return true;
    }
    return false;
  }

  hasItem(name) {
    const normalized = GameObject.normalize(name);
    return this.inventory.some(item =>
      GameObject.normalize(item.nameEs) === normalized ||
      GameObject.normalize(item.nameEn) === normalized ||
      GameObject.normalize(item.nameEs).includes(normalized) ||
      GameObject.normalize(item.nameEn).includes(normalized)
    );
  }

  findItem(name) {
    const normalized = GameObject.normalize(name);
    return this.inventory.find(item =>
      GameObject.normalize(item.nameEs) === normalized ||
      GameObject.normalize(item.nameEn) === normalized
    ) || this.inventory.find(item =>
      GameObject.normalize(item.nameEs).includes(normalized) ||
      GameObject.normalize(item.nameEn).includes(normalized)
    ) || null;
  }

  die() {
    this.isDead = true;
  }
}
