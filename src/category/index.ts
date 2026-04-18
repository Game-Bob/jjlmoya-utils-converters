import type { ConvertersCategoryEntry } from '../types';
import { pngAJpg } from '../tool/pngAJpg';
import { jpgAPng } from '../tool/jpgAPng';
import { webpAPng } from '../tool/webpAPng';
import { webpAJpg } from '../tool/webpAJpg';
import { pngAWebp } from '../tool/pngAWebp';
import { jpgAWebp } from '../tool/jpgAWebp';
import { svgAPng } from '../tool/svgAPng';
import { svgAJpg } from '../tool/svgAJpg';
import { imagenBase64 } from '../tool/imagenBase64';
import { bmpAJpg } from '../tool/bmpAJpg';
import { bmpAPng } from '../tool/bmpAPng';
import { bmpAWebp } from '../tool/bmpAWebp';
import { avifAJpg } from '../tool/avifAJpg';
import { avifAPng } from '../tool/avifAPng';
import { avifAWebp } from '../tool/avifAWebp';
import { gifAJpg } from '../tool/gifAJpg';
import { gifAPng } from '../tool/gifAPng';
import { gifAWebp } from '../tool/gifAWebp';
import { pngAIco } from '../tool/pngAIco';
import { jpgAIco } from '../tool/jpgAIco';
import { webpAIco } from '../tool/webpAIco';

export const convertersCategory: ConvertersCategoryEntry = {
  icon: 'mdi:image-sync',
  tools: [
    pngAJpg, jpgAPng, webpAPng, webpAJpg, pngAWebp, jpgAWebp,
    svgAPng, svgAJpg, imagenBase64,
    bmpAJpg, bmpAPng, bmpAWebp,
    avifAJpg, avifAPng, avifAWebp,
    gifAJpg, gifAPng, gifAWebp,
    pngAIco, jpgAIco, webpAIco,
  ],
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
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
