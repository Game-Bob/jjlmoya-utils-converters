import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import BmpAJpgCalculator from './component.astro';
import BmpAJpgSEO from './seo.astro';
import BmpAJpgBibliography from './bibliography.astro';

export type BmpAJpgLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const bmpAJpg: ConvertersToolEntry<ImageConverterUI> = {
  id: 'bmp-a-jpg',
  icons: {
    bg: 'mdi:file-image',
    fg: 'mdi:file-export',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { BmpAJpgCalculator, BmpAJpgSEO, BmpAJpgBibliography };

export const BMP_A_JPG_TOOL: ToolDefinition = {
  entry: bmpAJpg,
  Component: BmpAJpgCalculator,
  SEOComponent: BmpAJpgSEO,
  BibliographyComponent: BmpAJpgBibliography,
};
