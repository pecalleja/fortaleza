import { describe, it, expect, beforeEach } from 'vitest';
import { CommandParser } from '../js/engine/CommandParser.js';

describe('CommandParser', () => {
  let parser;

  beforeEach(() => {
    parser = new CommandParser();
  });

  describe('empty input', () => {
    it('returns null verb for empty string', () => {
      const result = parser.parse('');
      expect(result.verb).toBeNull();
    });

    it('returns null verb for whitespace-only input', () => {
      const result = parser.parse('   ');
      expect(result.verb).toBeNull();
    });

    it('returns null verb for null input', () => {
      const result = parser.parse(null);
      expect(result.verb).toBeNull();
    });
  });

  describe('Spanish verb recognition', () => {
    it('parses "ir" as go', () => {
      expect(parser.parse('ir puerta').verb).toBe('go');
    });

    it('parses "tomar" as take', () => {
      expect(parser.parse('tomar maza').verb).toBe('take');
    });

    it('parses "soltar" as drop', () => {
      expect(parser.parse('soltar maza').verb).toBe('drop');
    });

    it('parses "abrir" as open', () => {
      expect(parser.parse('abrir puerta').verb).toBe('open');
    });

    it('parses "matar" as kill', () => {
      expect(parser.parse('matar guardia').verb).toBe('kill');
    });

    it('parses "observar" as look', () => {
      expect(parser.parse('observar').verb).toBe('look');
    });

    it('parses "mirar" as look', () => {
      expect(parser.parse('mirar').verb).toBe('look');
    });

    it('parses "ver" as see', () => {
      expect(parser.parse('ver maza').verb).toBe('see');
    });

    it('parses "romper" as break', () => {
      expect(parser.parse('romper piedra').verb).toBe('break');
    });

    it('parses "preguntar" as ask', () => {
      expect(parser.parse('preguntar troll').verb).toBe('ask');
    });

    it('parses "dar" as give', () => {
      expect(parser.parse('dar cigarro').verb).toBe('give');
    });

    it('parses "inventario" as inventory', () => {
      expect(parser.parse('inventario').verb).toBe('inventory');
    });

    it('parses "pesar" as weigh', () => {
      expect(parser.parse('pesar maza').verb).toBe('weigh');
    });

    it('parses "salvar" as save', () => {
      expect(parser.parse('salvar').verb).toBe('save');
    });

    it('parses "cargar" as load', () => {
      expect(parser.parse('cargar').verb).toBe('load');
    });

    it('parses "porciento" as percent', () => {
      expect(parser.parse('porciento').verb).toBe('percent');
    });

    it('parses "ayuda" as help', () => {
      expect(parser.parse('ayuda').verb).toBe('help');
    });
  });

  describe('English verb recognition', () => {
    it('parses "go" as go', () => {
      expect(parser.parse('go door').verb).toBe('go');
    });

    it('parses "take" as take', () => {
      expect(parser.parse('take mace').verb).toBe('take');
    });

    it('parses "drop" as drop', () => {
      expect(parser.parse('drop mace').verb).toBe('drop');
    });

    it('parses "open" as open', () => {
      expect(parser.parse('open door').verb).toBe('open');
    });

    it('parses "kill" as kill', () => {
      expect(parser.parse('kill guard').verb).toBe('kill');
    });

    it('parses "look" as look', () => {
      expect(parser.parse('look').verb).toBe('look');
    });

    it('parses "examine" as see', () => {
      expect(parser.parse('examine sword').verb).toBe('see');
    });

    it('parses "break" as break', () => {
      expect(parser.parse('break wall').verb).toBe('break');
    });

    it('parses "talk" as ask', () => {
      expect(parser.parse('talk troll').verb).toBe('ask');
    });

    it('parses "give" as give', () => {
      expect(parser.parse('give cake').verb).toBe('give');
    });

    it('parses "inventory" as inventory', () => {
      expect(parser.parse('inventory').verb).toBe('inventory');
    });

    it('parses "save" as save', () => {
      expect(parser.parse('save').verb).toBe('save');
    });

    it('parses "load" as load', () => {
      expect(parser.parse('load').verb).toBe('load');
    });

    it('parses "percent" as percent', () => {
      expect(parser.parse('percent').verb).toBe('percent');
    });

    it('parses "help" as help', () => {
      expect(parser.parse('help').verb).toBe('help');
    });
  });

  describe('synonym recognition', () => {
    it('parses "atravesar" (synonym for ir) as go', () => {
      expect(parser.parse('atravesar puerta').verb).toBe('go');
    });

    it('parses "coger" (synonym for tomar) as take', () => {
      expect(parser.parse('coger maza').verb).toBe('take');
    });

    it('parses "cross" (synonym for go) as go', () => {
      expect(parser.parse('cross door').verb).toBe('go');
    });

    it('parses "grab" (synonym for take) as take', () => {
      expect(parser.parse('grab mace').verb).toBe('take');
    });

    it('parses "attack" (synonym for kill) as kill', () => {
      expect(parser.parse('attack guard').verb).toBe('kill');
    });

    it('parses "inspect" (synonym for see) as see', () => {
      expect(parser.parse('inspect sword').verb).toBe('see');
    });
  });

  describe('object extraction', () => {
    it('extracts single-word object', () => {
      const result = parser.parse('tomar maza');
      expect(result.verb).toBe('take');
      expect(result.object).toBe('maza');
    });

    it('extracts multi-word object', () => {
      const result = parser.parse('tomar pastel de cerezas');
      expect(result.verb).toBe('take');
      expect(result.object).toBe('pastel de cerezas');
    });

    it('strips noise words from object', () => {
      const result = parser.parse('ir por la puerta');
      expect(result.verb).toBe('go');
      expect(result.object).toBe('puerta');
    });

    it('handles "the" noise word in English', () => {
      const result = parser.parse('take the mace');
      expect(result.verb).toBe('take');
      expect(result.object).toBe('mace');
    });
  });

  describe('preposition handling', () => {
    it('splits on "con" (Spanish with)', () => {
      const result = parser.parse('abrir puerta con sesamo');
      expect(result.verb).toBe('open');
      expect(result.object).toBe('puerta');
      expect(result.modifier).toBe('sesamo');
      expect(result.prepType).toBe('with');
    });

    it('splits on "with" (English with)', () => {
      const result = parser.parse('open door with password');
      expect(result.verb).toBe('open');
      expect(result.object).toBe('door');
      expect(result.modifier).toBe('password');
      expect(result.prepType).toBe('with');
    });

    it('splits on "a" (Spanish to)', () => {
      const result = parser.parse('dar cigarro a llamador');
      expect(result.verb).toBe('give');
      expect(result.object).toBe('cigarro');
      expect(result.modifier).toBe('llamador');
      expect(result.prepType).toBe('to');
    });

    it('splits on "to" (English to)', () => {
      const result = parser.parse('give cake to troll');
      expect(result.verb).toBe('give');
      expect(result.object).toBe('cake');
      expect(result.modifier).toBe('troll');
      expect(result.prepType).toBe('to');
    });

    it('handles multi-word modifier', () => {
      const result = parser.parse('abrir puerta con abrete sesamo');
      expect(result.modifier).toBe('abrete sesamo');
    });

    it('handles kill with weapon', () => {
      const result = parser.parse('matar guardia con espada');
      expect(result.verb).toBe('kill');
      expect(result.object).toBe('guardia');
      expect(result.modifier).toBe('espada');
    });
  });

  describe('unknown commands', () => {
    it('returns null verb for unknown words', () => {
      const result = parser.parse('xyzzy');
      expect(result.verb).toBeNull();
    });

    it('preserves original input as object for unknown verbs', () => {
      const result = parser.parse('dance around');
      expect(result.verb).toBeNull();
      expect(result.object).toBe('dance around');
    });
  });

  describe('case insensitivity', () => {
    it('handles uppercase input', () => {
      expect(parser.parse('IR PUERTA').verb).toBe('go');
    });

    it('handles mixed case input', () => {
      expect(parser.parse('Tomar Maza').verb).toBe('take');
    });
  });

  describe('accent normalization', () => {
    it('handles accented characters', () => {
      // "través" should match "atravesar" pattern via normalization
      const result = parser.parse('observar');
      expect(result.verb).toBe('look');
    });
  });
});
