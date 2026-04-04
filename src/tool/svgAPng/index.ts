import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import type { ImageConverterUI } from '../../shared/ImageConverter.astro';
import SvgAPngCalculator from './component.astro';
import SvgAPngSEO from './seo.astro';
import SvgAPngBibliography from './bibliography.astro';

export type SvgAPngLocaleContent = ToolLocaleContent<ImageConverterUI>;

export const svgAPng: ConvertersToolEntry<ImageConverterUI> = {
  id: 'svg-a-png',
  icons: {
    bg: 'mdi:svg',
    fg: 'mdi:file-export',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { SvgAPngCalculator, SvgAPngSEO, SvgAPngBibliography };

export const SVG_A_PNG_TOOL: ToolDefinition = {
  entry: svgAPng,
  Component: SvgAPngCalculator,
  SEOComponent: SvgAPngSEO,
  BibliographyComponent: SvgAPngBibliography,
};
