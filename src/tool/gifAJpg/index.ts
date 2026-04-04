import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import GifAJpgCalculator from './component.astro';
import GifAJpgSEO from './seo.astro';
import GifAJpgBibliography from './bibliography.astro';

export type GifAJpgLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const gifAJpg: ConvertersToolEntry<ImageConverterUI> = {
  id: 'gif-a-jpg',
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

export { GifAJpgCalculator, GifAJpgSEO, GifAJpgBibliography };

export const GIF_A_JPG_TOOL: ToolDefinition = {
  entry: gifAJpg,
  Component: GifAJpgCalculator,
  SEOComponent: GifAJpgSEO,
  BibliographyComponent: GifAJpgBibliography,
};
