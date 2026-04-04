import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('FAQ Content Validation', () => {
  it('all tools have i18n defined', () => {
    ALL_TOOLS.forEach((tool) => {
      expect(tool.entry.i18n).toBeDefined();
    });
  });
});
