import { GameObject } from './GameObject.js';

export class Troll extends GameObject {
  constructor(data) {
    super({ ...data, weight: 100 });
    this.isNPC = true;
    this.isDead = false;
    this.wantsItem = data.wantsItem;
    this.happyMsgEs = data.happyMsgEs;
    this.happyMsgEn = data.happyMsgEn || data.happyMsgEs;
    this.unhappyMsgEs = data.unhappyMsgEs;
    this.unhappyMsgEn = data.unhappyMsgEn || data.unhappyMsgEs;
    this.isHappy = false;
  }

  speak(lang) {
    if (this.isHappy) {
      return lang === 'en' ? this.happyMsgEn : this.happyMsgEs;
    }
    return lang === 'en' ? this.unhappyMsgEn : this.unhappyMsgEs;
  }

  accept(item) {
    if (GameObject.normalize(item.nameEs) === GameObject.normalize(this.wantsItem) ||
        GameObject.normalize(item.nameEn) === GameObject.normalize(this.wantsItem)) {
      this.isHappy = true;
      return { success: true };
    }
    return { success: false };
  }

  die(weapon) {
    this.isDead = true;
    return { success: true };
  }
}

export class Guard extends GameObject {
  constructor(data) {
    super({ ...data, weight: 100 });
    this.isNPC = true;
    this.isDead = false;
    this.lethalWeapon = data.lethalWeapon;
    this.lethalWeaponEn = data.lethalWeaponEn;
    this.confessionEs = data.confessionEs;
    this.confessionEn = data.confessionEn || data.confessionEs;
  }

  speak(lang) {
    return lang === 'en'
      ? 'Does not wish to speak with you.'
      : 'No desea hablar con usted.';
  }

  die(weaponName) {
    const normalizedWeapon = GameObject.normalize(weaponName);
    // Check against both Spanish and English weapon names
    if (normalizedWeapon === GameObject.normalize(this.lethalWeapon) ||
        (this.lethalWeaponEn && normalizedWeapon === GameObject.normalize(this.lethalWeaponEn))) {
      this.isDead = true;
      return { success: true };
    }
    return { success: false };
  }

  confession(lang) {
    return lang === 'en' ? this.confessionEn : this.confessionEs;
  }
}

export class Hidden extends GameObject {
  constructor(data) {
    super({ ...data, weight: 999 });
    this.isHidden = true;
    this.breakerItem = data.breakerItem;
    this.revealedThing = data.revealedThing; // will be set during world init
    this.revealedThingData = data.revealedThingData;
  }

  breakWith(toolName) {
    if (!this.breakerItem) {
      return { success: true };
    }
    if (GameObject.normalize(toolName) === GameObject.normalize(this.breakerItem)) {
      return { success: true };
    }
    return { success: false };
  }
}
