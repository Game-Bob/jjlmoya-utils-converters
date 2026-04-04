import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import AvifAJpgCalculator from './component.astro';
import AvifAJpgSEO from './seo.astro';
import AvifAJpgBibliography from './bibliography.astro';

export type AvifAJpgLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const avifAJpg: ConvertersToolEntry<ImageConverterUI> = {
  id: 'avif-a-jpg',
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

export { AvifAJpgCalculator, AvifAJpgSEO, AvifAJpgBibliography };

export const AVIF_A_JPG_TOOL: ToolDefinition = {
  entry: avifAJpg,
  Component: AvifAJpgCalculator,
  SEOComponent: AvifAJpgSEO,
  BibliographyComponent: AvifAJpgBibliography,
};
