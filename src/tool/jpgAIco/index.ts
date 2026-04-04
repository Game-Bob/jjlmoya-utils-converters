import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import JpgAIcoCalculator from './component.astro';
import JpgAIcoSEO from './seo.astro';
import JpgAIcoBibliography from './bibliography.astro';

export type JpgAIcoLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const jpgAIco: ConvertersToolEntry<ImageConverterUI> = {
  id: 'jpg-a-ico',
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

export { JpgAIcoCalculator, JpgAIcoSEO, JpgAIcoBibliography };

export const JPG_A_ICO_TOOL: ToolDefinition = {
  entry: jpgAIco,
  Component: JpgAIcoCalculator,
  SEOComponent: JpgAIcoSEO,
  BibliographyComponent: JpgAIcoBibliography,
};
