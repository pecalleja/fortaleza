import es from './es.js';
import en from './en.js';

const languages = { es, en };

let currentLang = 'es';
let allVerbs = null;

export function setLang(lang) {
  if (languages[lang]) {
    currentLang = lang;
    allVerbs = null; // invalidate cache
  }
}

export function getLang() {
  return currentLang;
}

export function t(key) {
  const msg = languages[currentLang]?.messages?.[key];
  return msg !== undefined ? msg : key;
}

export function format(key, ...args) {
  let msg = t(key);
  args.forEach((arg, i) => {
    msg = msg.replace(`{${i}}`, arg);
  });
  return msg;
}

export function objectName(obj) {
  return currentLang === 'en' ? (obj.nameEn || obj.nameEs) : obj.nameEs;
}

export function objectDesc(obj) {
  return currentLang === 'en' ? (obj.descEn || obj.descEs) : obj.descEs;
}

export function getVerbs() {
  return languages[currentLang]?.verbs || {};
}

export function getPrepositions() {
  return languages[currentLang]?.prepositions || {};
}

export function getNoiseWords() {
  return languages[currentLang]?.noiseWords || [];
}

// Get all verbs from both languages for the parser
export function getAllVerbs() {
  if (allVerbs) return allVerbs;
  allVerbs = {};
  for (const lang of Object.values(languages)) {
    for (const [action, words] of Object.entries(lang.verbs)) {
      if (!allVerbs[action]) allVerbs[action] = [];
      allVerbs[action].push(...words);
    }
  }
  return allVerbs;
}

// Get all prepositions from both languages
export function getAllPrepositions() {
  const all = { with: [], to: [], saying: [] };
  for (const lang of Object.values(languages)) {
    for (const [prep, words] of Object.entries(lang.prepositions)) {
      all[prep].push(...words);
    }
  }
  return all;
}

// Get all noise words from both languages
export function getAllNoiseWords() {
  const all = new Set();
  for (const lang of Object.values(languages)) {
    for (const word of lang.noiseWords) {
      all.add(word);
    }
  }
  return all;
}
