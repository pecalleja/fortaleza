export class GameObject {
  constructor({ id, nameEs, nameEn, descEs, descEn, weight = 0 }) {
    this.id = id;
    this.nameEs = nameEs;
    this.nameEn = nameEn || nameEs;
    this.descEs = descEs;
    this.descEn = descEn || descEs;
    this.weight = weight;
    this.children = [];
  }

  name(lang) {
    return lang === 'en' ? this.nameEn : this.nameEs;
  }

  description(lang) {
    return lang === 'en' ? this.descEn : this.descEs;
  }

  add(child) {
    this.children.push(child);
  }

  remove(child) {
    const idx = this.children.indexOf(child);
    if (idx !== -1) {
      this.children.splice(idx, 1);
      return true;
    }
    return false;
  }

  findObject(name, lang) {
    if (!name) return null;
    const normalized = GameObject.normalize(name);

    // Exact match first (either language)
    let found = this.children.find(c =>
      GameObject.normalize(c.nameEs) === normalized ||
      GameObject.normalize(c.nameEn) === normalized
    );
    if (found) return found;

    // Partial match (contains)
    found = this.children.find(c =>
      GameObject.normalize(c.nameEs).includes(normalized) ||
      GameObject.normalize(c.nameEn).includes(normalized)
    );
    if (found) return found;

    // Word subsequence match: all search words appear in order in the name.
    // Handles cases where noise words (la, los, las...) were stripped from input
    // but remain in the object name, e.g. "ruta de camellos" matches "Ruta de los camellos".
    const searchWords = normalized.split(/\s+/);
    if (searchWords.length > 1) {
      found = this.children.find(c =>
        GameObject.wordsSubsequence(searchWords, GameObject.normalize(c.nameEs)) ||
        GameObject.wordsSubsequence(searchWords, GameObject.normalize(c.nameEn))
      );
      if (found) return found;
    }

    // Reverse partial (search term contains object name)
    found = this.children.find(c =>
      normalized.includes(GameObject.normalize(c.nameEs)) ||
      normalized.includes(GameObject.normalize(c.nameEn))
    );
    return found || null;
  }

  static wordsSubsequence(searchWords, nameFull) {
    const nameWords = nameFull.split(/\s+/);
    let ni = 0;
    for (const sw of searchWords) {
      while (ni < nameWords.length && nameWords[ni] !== sw) ni++;
      if (ni >= nameWords.length) return false;
      ni++;
    }
    return true;
  }

  static normalize(str) {
    if (!str) return '';
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove accents
      .replace(/ñ/g, 'n').replace(/Ñ/g, 'n')
      .trim();
  }
}
