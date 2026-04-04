import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import PngAJpgCalculator from './component.astro';
import PngAJpgSEO from './seo.astro';
import PngAJpgBibliography from './bibliography.astro';

export type PngAJpgLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const pngAJpg: ConvertersToolEntry<ImageConverterUI> = {
  id: 'png-a-jpg',
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

export { PngAJpgCalculator, PngAJpgSEO, PngAJpgBibliography };

export const PNG_A_JPG_TOOL: ToolDefinition = {
  entry: pngAJpg,
  Component: PngAJpgCalculator,
  SEOComponent: PngAJpgSEO,
  BibliographyComponent: PngAJpgBibliography,
};
