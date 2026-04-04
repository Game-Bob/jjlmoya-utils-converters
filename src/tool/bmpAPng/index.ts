import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import BmpAPngCalculator from './component.astro';
import BmpAPngSEO from './seo.astro';
import BmpAPngBibliography from './bibliography.astro';

export type BmpAPngLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const bmpAPng: ConvertersToolEntry<ImageConverterUI> = {
  id: 'bmp-a-png',
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

export { BmpAPngCalculator, BmpAPngSEO, BmpAPngBibliography };

export const BMP_A_PNG_TOOL: ToolDefinition = {
  entry: bmpAPng,
  Component: BmpAPngCalculator,
  SEOComponent: BmpAPngSEO,
  BibliographyComponent: BmpAPngBibliography,
};
