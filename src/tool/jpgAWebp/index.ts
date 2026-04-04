import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import JpgAWebpCalculator from './component.astro';
import JpgAWebpSEO from './seo.astro';
import JpgAWebpBibliography from './bibliography.astro';

export type JpgAWebpLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const jpgAWebp: ConvertersToolEntry<ImageConverterUI> = {
  id: 'jpg-a-webp',
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

export { JpgAWebpCalculator, JpgAWebpSEO, JpgAWebpBibliography };

export const JPG_A_WEBP_TOOL: ToolDefinition = {
  entry: jpgAWebp,
  Component: JpgAWebpCalculator,
  SEOComponent: JpgAWebpSEO,
  BibliographyComponent: JpgAWebpBibliography,
};
