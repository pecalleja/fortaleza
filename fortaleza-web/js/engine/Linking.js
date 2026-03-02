import { GameObject } from './GameObject.js';

export class Linking extends GameObject {
  constructor(data) {
    super({ ...data, weight: 999 });
    this.isLinking = true;
    this.destinationId = data.destinationId;
    this.isOpen = data.isOpen || false;
    this.password = data.password || '';
    this.passageMsgEs = data.passageMsgEs || '';
    this.passageMsgEn = data.passageMsgEn || '';
  }

  passageMessage(lang) {
    return lang === 'en' ? this.passageMsgEn : this.passageMsgEs;
  }

  open(key) {
    if (this.isOpen) return { alreadyOpen: true };
    if (!this.password) {
      this.isOpen = true;
      return { success: true };
    }
    if (GameObject.normalize(key) === GameObject.normalize(this.password)) {
      this.isOpen = true;
      return { success: true };
    }
    return { success: false };
  }

  pass(player, lang) {
    return { success: true, message: this.passageMessage(lang) };
  }
}

export class OpenLink extends Linking {
  constructor(data) {
    super({ ...data, isOpen: true });
  }

  open() {
    return { alreadyOpen: true };
  }
}

export class DangerLink extends Linking {
  constructor(data) {
    super(data);
    this.talisman = data.talisman;
    this.isOpen = true;
  }

  pass(player, lang) {
    if (!player.hasItem(this.talisman)) {
      player.die();
      return {
        success: false,
        message: lang === 'en'
          ? 'You should not have crossed unprotected. You have died.'
          : 'No debio cruzar desprotegido. Usted ha muerto.'
      };
    }
    return { success: true, message: this.passageMessage(lang) };
  }
}

export class DangerLink2 extends Linking {
  constructor(data) {
    super(data);
    this.forbiddenItem = data.forbiddenItem;
    this.isOpen = true;
  }

  pass(player, lang) {
    if (player.hasItem(this.forbiddenItem)) {
      player.die();
      return {
        success: false,
        message: lang === 'en'
          ? 'You were carrying an object that prevented you from crossing. You have died.'
          : 'Usted llevaba un objeto que le impidio cruzar. Usted ha muerto.'
      };
    }
    return { success: true, message: this.passageMessage(lang) };
  }
}

export class RiddleLink extends Linking {
  constructor(data) {
    super(data);
    this.riddleEs = data.riddleEs;
    this.riddleEn = data.riddleEn || data.riddleEs;
    this.answer = data.answer;
  }

  riddle(lang) {
    return lang === 'en' ? this.riddleEn : this.riddleEs;
  }

  open(key) {
    if (this.isOpen) return { alreadyOpen: true };
    if (!key) {
      return { success: false, needsRiddle: true };
    }
    if (GameObject.normalize(key) === GameObject.normalize(this.answer)) {
      this.isOpen = true;
      return { success: true, riddleSolved: true };
    }
    return { success: false, wrongAnswer: true };
  }
}
