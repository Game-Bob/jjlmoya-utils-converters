import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import WebpAIcoCalculator from './component.astro';
import WebpAIcoSEO from './seo.astro';
import WebpAIcoBibliography from './bibliography.astro';

export type WebpAIcoLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const webpAIco: ConvertersToolEntry<ImageConverterUI> = {
  id: 'webp-a-ico',
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

export { WebpAIcoCalculator, WebpAIcoSEO, WebpAIcoBibliography };

export const WEBP_A_ICO_TOOL: ToolDefinition = {
  entry: webpAIco,
  Component: WebpAIcoCalculator,
  SEOComponent: WebpAIcoSEO,
  BibliographyComponent: WebpAIcoBibliography,
};
