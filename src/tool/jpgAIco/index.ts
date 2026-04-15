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
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

export { JpgAIcoCalculator, JpgAIcoSEO, JpgAIcoBibliography };

export const JPG_A_ICO_TOOL: ToolDefinition = {
  entry: jpgAIco,
  Component: JpgAIcoCalculator,
  SEOComponent: JpgAIcoSEO,
  BibliographyComponent: JpgAIcoBibliography,
};
