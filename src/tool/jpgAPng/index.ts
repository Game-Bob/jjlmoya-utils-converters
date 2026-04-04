import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import JpgAPngCalculator from './component.astro';
import JpgAPngSEO from './seo.astro';
import JpgAPngBibliography from './bibliography.astro';

export type JpgAPngLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const jpgAPng: ConvertersToolEntry<ImageConverterUI> = {
  id: 'jpg-a-png',
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

export { JpgAPngCalculator, JpgAPngSEO, JpgAPngBibliography };

export const JPG_A_PNG_TOOL: ToolDefinition = {
  entry: jpgAPng,
  Component: JpgAPngCalculator,
  SEOComponent: JpgAPngSEO,
  BibliographyComponent: JpgAPngBibliography,
};
