import { GameObject } from './GameObject.js';

export class Room extends GameObject {
  constructor(data) {
    super({ ...data, weight: 999 });
    this.roomId = data.roomId;
    this.visited = false;
  }

  getItems() {
    return this.children.filter(c => !c.isLinking && !c.isNPC && !c.isHidden);
  }

  getLinks() {
    return this.children.filter(c => c.isLinking);
  }

  getNPCs() {
    return this.children.filter(c => c.isNPC && !c.isDead);
  }

  getHiddenObjects() {
    return this.children.filter(c => c.isHidden);
  }

  getAllVisible() {
    return this.children.filter(c => !(c.isNPC && c.isDead));
  }
}
