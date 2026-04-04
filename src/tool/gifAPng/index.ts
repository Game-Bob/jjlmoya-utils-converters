import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import GifAPngCalculator from './component.astro';
import GifAPngSEO from './seo.astro';
import GifAPngBibliography from './bibliography.astro';

export type GifAPngLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const gifAPng: ConvertersToolEntry<ImageConverterUI> = {
  id: 'gif-a-png',
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

export { GifAPngCalculator, GifAPngSEO, GifAPngBibliography };

export const GIF_A_PNG_TOOL: ToolDefinition = {
  entry: gifAPng,
  Component: GifAPngCalculator,
  SEOComponent: GifAPngSEO,
  BibliographyComponent: GifAPngBibliography,
};
