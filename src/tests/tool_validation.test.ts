import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { convertersCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 24 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(24);
    });

    it('convertersCategory should be defined', () => {
      expect(convertersCategory).toBeDefined();
      expect(convertersCategory.i18n).toBeDefined();
    });
  });
});

