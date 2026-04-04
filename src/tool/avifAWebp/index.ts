import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import AvifAWebpCalculator from './component.astro';
import AvifAWebpSEO from './seo.astro';
import AvifAWebpBibliography from './bibliography.astro';

export type AvifAWebpLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const avifAWebp: ConvertersToolEntry<ImageConverterUI> = {
  id: 'avif-a-webp',
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

export { AvifAWebpCalculator, AvifAWebpSEO, AvifAWebpBibliography };

export const AVIF_A_WEBP_TOOL: ToolDefinition = {
  entry: avifAWebp,
  Component: AvifAWebpCalculator,
  SEOComponent: AvifAWebpSEO,
  BibliographyComponent: AvifAWebpBibliography,
};
