import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import PngAWebpCalculator from './component.astro';
import PngAWebpSEO from './seo.astro';
import PngAWebpBibliography from './bibliography.astro';

export type PngAWebpLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const pngAWebp: ConvertersToolEntry<ImageConverterUI> = {
  id: 'png-a-webp',
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

export { PngAWebpCalculator, PngAWebpSEO, PngAWebpBibliography };

export const PNG_A_WEBP_TOOL: ToolDefinition = {
  entry: pngAWebp,
  Component: PngAWebpCalculator,
  SEOComponent: PngAWebpSEO,
  BibliographyComponent: PngAWebpBibliography,
};
