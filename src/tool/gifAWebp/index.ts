import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import GifAWebpCalculator from './component.astro';
import GifAWebpSEO from './seo.astro';
import GifAWebpBibliography from './bibliography.astro';

export type GifAWebpLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const gifAWebp: ConvertersToolEntry<ImageConverterUI> = {
  id: 'gif-a-webp',
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

export { GifAWebpCalculator, GifAWebpSEO, GifAWebpBibliography };

export const GIF_A_WEBP_TOOL: ToolDefinition = {
  entry: gifAWebp,
  Component: GifAWebpCalculator,
  SEOComponent: GifAWebpSEO,
  BibliographyComponent: GifAWebpBibliography,
};
