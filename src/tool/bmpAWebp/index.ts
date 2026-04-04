import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import BmpAWebpCalculator from './component.astro';
import BmpAWebpSEO from './seo.astro';
import BmpAWebpBibliography from './bibliography.astro';

export type BmpAWebpLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const bmpAWebp: ConvertersToolEntry<ImageConverterUI> = {
  id: 'bmp-a-webp',
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

export { BmpAWebpCalculator, BmpAWebpSEO, BmpAWebpBibliography };

export const BMP_A_WEBP_TOOL: ToolDefinition = {
  entry: bmpAWebp,
  Component: BmpAWebpCalculator,
  SEOComponent: BmpAWebpSEO,
  BibliographyComponent: BmpAWebpBibliography,
};
