import type { ConvertersToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ImagenBase64Calculator from './component.astro';
import ImagenBase64SEO from './seo.astro';
import ImagenBase64Bibliography from './bibliography.astro';

export interface ImageToBase64UI {
  [key: string]: string;
  dragTitle: string;
  dragSubtext: string;
  formatBadge: string;
  dataUriLabel: string;
  base64Label: string;
  copyBtn: string;
  dataUriPlaceholder: string;
  base64Placeholder: string;
  toastMessage: string;
  invalidImageAlert: string;
  bibliographyTitle: string;
}

export type ImagenBase64LocaleContent = ToolLocaleContent<ImageToBase64UI>;

export const imagenBase64: ConvertersToolEntry<ImageToBase64UI> = {
  id: 'imagen-base64',
  icons: {
    bg: 'mdi:file-image',
    fg: 'mdi:code-tags',
  },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { ImagenBase64Calculator, ImagenBase64SEO, ImagenBase64Bibliography };

export const IMAGEN_BASE64_TOOL: ToolDefinition = {
  entry: imagenBase64,
  Component: ImagenBase64Calculator,
  SEOComponent: ImagenBase64SEO,
  BibliographyComponent: ImagenBase64Bibliography,
};
