import { GameObject } from './GameObject.js';

export class Player {
  constructor(maxWeight = 40) {
    this.maxWeight = maxWeight;
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
    return this.maxWeight - this.currentWeight();
  }

  canCarry(item) {
    return item.weight <= this.maxWeight && (this.currentWeight() + item.weight) <= this.maxWeight;
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
      item.id === name ||
      GameObject.normalize(item.nameEs) === normalized ||
      GameObject.normalize(item.nameEn) === normalized ||
      GameObject.normalize(item.nameEs).includes(normalized) ||
      GameObject.normalize(item.nameEn).includes(normalized)
    );
  }

  findItem(name) {
    const normalized = GameObject.normalize(name);
    // Check by item ID first (used by talisman/danger links)
    const byId = this.inventory.find(item => item.id === name);
    if (byId) return byId;
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
