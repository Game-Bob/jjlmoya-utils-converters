import type { ConvertersCategoryEntry } from '../types';
import { pngAJpg } from '../tool/pngAJpg/entry';
import { jpgAPng } from '../tool/jpgAPng/entry';
import { webpAPng } from '../tool/webpAPng/entry';
import { webpAJpg } from '../tool/webpAJpg/entry';
import { pngAWebp } from '../tool/pngAWebp/entry';
import { jpgAWebp } from '../tool/jpgAWebp/entry';
import { svgAPng } from '../tool/svgAPng/entry';
import { svgAJpg } from '../tool/svgAJpg/entry';
import { imagenBase64 } from '../tool/imagenBase64';
import { bmpAJpg } from '../tool/bmpAJpg/entry';
import { bmpAPng } from '../tool/bmpAPng/entry';
import { bmpAWebp } from '../tool/bmpAWebp/entry';
import { avifAJpg } from '../tool/avifAJpg/entry';
import { avifAPng } from '../tool/avifAPng/entry';
import { avifAWebp } from '../tool/avifAWebp/entry';
import { gifAJpg } from '../tool/gifAJpg/entry';
import { gifAPng } from '../tool/gifAPng/entry';
import { gifAWebp } from '../tool/gifAWebp/entry';
import { pngAIco } from '../tool/pngAIco/entry';
import { jpgAIco } from '../tool/jpgAIco/entry';
import { webpAIco } from '../tool/webpAIco/entry';

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
