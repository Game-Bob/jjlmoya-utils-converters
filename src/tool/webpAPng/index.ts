import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import WebpAPngCalculator from './component.astro';
import WebpAPngSEO from './seo.astro';
import WebpAPngBibliography from './bibliography.astro';

export type WebpAPngLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const webpAPng: ConvertersToolEntry<ImageConverterUI> = {
  id: 'webp-a-png',
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

export { WebpAPngCalculator, WebpAPngSEO, WebpAPngBibliography };

export const WEBP_A_PNG_TOOL: ToolDefinition = {
  entry: webpAPng,
  Component: WebpAPngCalculator,
  SEOComponent: WebpAPngSEO,
  BibliographyComponent: WebpAPngBibliography,
};
