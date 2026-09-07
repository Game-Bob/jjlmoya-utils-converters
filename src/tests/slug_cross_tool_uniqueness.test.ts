import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Cross-tool slug uniqueness validation', () => {
  it('every locale must map each tool to a distinct URL slug', async () => {
    const locales = [...new Set(ALL_TOOLS.flatMap((tool) => Object.keys(tool.entry.i18n)))];

    for (const locale of locales) {
      const slugs = new Map<string, string>();

      for (const tool of ALL_TOOLS) {
        const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
        if (!loader) continue;

        const content = (await loader()) as ToolLocaleContent;
        const previousTool = slugs.get(content.slug);

        expect(
          previousTool,
          `Locale "${locale}" maps both "${previousTool ?? ''}" and "${tool.entry.id}" to slug "${content.slug}"`,
        ).toBeUndefined();

        slugs.set(content.slug, tool.entry.id);
      }
    }
  });
});
