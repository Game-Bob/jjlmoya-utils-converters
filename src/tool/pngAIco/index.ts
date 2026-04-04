import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import PngAIcoCalculator from './component.astro';
import PngAIcoSEO from './seo.astro';
import PngAIcoBibliography from './bibliography.astro';

export type PngAIcoLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const pngAIco: ConvertersToolEntry<ImageConverterUI> = {
  id: 'png-a-ico',
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

export { PngAIcoCalculator, PngAIcoSEO, PngAIcoBibliography };

export const PNG_A_ICO_TOOL: ToolDefinition = {
  entry: pngAIco,
  Component: PngAIcoCalculator,
  SEOComponent: PngAIcoSEO,
  BibliographyComponent: PngAIcoBibliography,
};
