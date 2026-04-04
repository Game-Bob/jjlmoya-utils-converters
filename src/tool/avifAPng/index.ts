import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import AvifAPngCalculator from './component.astro';
import AvifAPngSEO from './seo.astro';
import AvifAPngBibliography from './bibliography.astro';

export type AvifAPngLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const avifAPng: ConvertersToolEntry<ImageConverterUI> = {
  id: 'avif-a-png',
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

export { AvifAPngCalculator, AvifAPngSEO, AvifAPngBibliography };

export const AVIF_A_PNG_TOOL: ToolDefinition = {
  entry: avifAPng,
  Component: AvifAPngCalculator,
  SEOComponent: AvifAPngSEO,
  BibliographyComponent: AvifAPngBibliography,
};
