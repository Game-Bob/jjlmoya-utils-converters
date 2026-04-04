import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import WebpAJpgCalculator from './component.astro';
import WebpAJpgSEO from './seo.astro';
import WebpAJpgBibliography from './bibliography.astro';

export type WebpAJpgLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const webpAJpg: ConvertersToolEntry<ImageConverterUI> = {
  id: 'webp-a-jpg',
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

export { WebpAJpgCalculator, WebpAJpgSEO, WebpAJpgBibliography };

export const WEBP_A_JPG_TOOL: ToolDefinition = {
  entry: webpAJpg,
  Component: WebpAJpgCalculator,
  SEOComponent: WebpAJpgSEO,
  BibliographyComponent: WebpAJpgBibliography,
};
