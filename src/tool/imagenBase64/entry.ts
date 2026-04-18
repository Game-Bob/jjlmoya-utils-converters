import type { ConvertersToolEntry, ToolLocaleContent } from '../../types';

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
