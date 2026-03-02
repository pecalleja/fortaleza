import { GameObject } from './GameObject.js';
import { getAllVerbs, getAllPrepositions, getAllNoiseWords } from '../i18n/i18n.js';

export class CommandParser {
  parse(input) {
    if (!input || !input.trim()) {
      return { verb: null, object: '', modifier: '' };
    }

    const allVerbs = getAllVerbs();
    const allPreps = getAllPrepositions();
    const noiseWords = getAllNoiseWords();

    // Normalize input
    let normalized = GameObject.normalize(input);

    // Tokenize
    let tokens = normalized.split(/\s+/).filter(t => t.length > 0);

    // Remove noise words (but not if they're the only token)
    if (tokens.length > 1) {
      tokens = tokens.filter(t => !noiseWords.has(t));
    }

    if (tokens.length === 0) {
      return { verb: null, object: '', modifier: '' };
    }

    // Find verb
    const firstToken = tokens[0];
    let verb = null;
    for (const [action, words] of Object.entries(allVerbs)) {
      if (words.some(w => GameObject.normalize(w) === firstToken)) {
        verb = action;
        break;
      }
    }

    if (!verb) {
      return { verb: null, object: input.trim(), modifier: '' };
    }

    // Collect all preposition words
    const withPreps = new Set(allPreps.with.map(w => GameObject.normalize(w)));
    const toPreps = new Set(allPreps.to.map(w => GameObject.normalize(w)));
    const sayingPreps = new Set(allPreps.saying.map(w => GameObject.normalize(w)));
    const allPrepWords = new Set([...withPreps, ...toPreps, ...sayingPreps]);

    // Extract object and modifier
    const remaining = tokens.slice(1);
    let objectParts = [];
    let modifierParts = [];
    let foundPrep = false;
    let prepType = null;

    for (const token of remaining) {
      if (!foundPrep && allPrepWords.has(token)) {
        foundPrep = true;
        if (withPreps.has(token)) prepType = 'with';
        else if (toPreps.has(token)) prepType = 'to';
        else if (sayingPreps.has(token)) prepType = 'saying';
        continue;
      }

      if (foundPrep) {
        modifierParts.push(token);
      } else {
        objectParts.push(token);
      }
    }

    return {
      verb,
      object: objectParts.join(' '),
      modifier: modifierParts.join(' '),
      prepType: prepType || null,
    };
  }
}
