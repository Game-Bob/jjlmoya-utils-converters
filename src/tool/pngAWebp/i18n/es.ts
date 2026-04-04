import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'convertidor-png-a-webp';
const title = 'Convertir PNG a WebP Online y Gratis - Alta Calidad';
const description =
  'Convierte imágenes PNG a WebP en tu navegador. Hasta 40% menos peso. Conserva transparencias. Sin subir archivos. Gratis y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos PNG...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir PNG a WebP?',
    answer:
      'WebP ofrece una compresión hasta un 40% superior a PNG a igual calidad, soportando también transparencias Alpha. Es el formato recomendado por Google PageSpeed Insights.',
  },
  {
    question: '¿Se pierde la transparencia en el proceso?',
    answer:
      'No. La implementación técnica de WebP soporta el canal alfa. Las transparencias del PNG original se conservarán en el nuevo archivo WebP.',
  },
  {
    question: '¿Mis imágenes van a algún servidor?',
    answer:
      'No. El código se ejecuta únicamente en tu navegador (Client-Side). Nunca vemos, registramos ni guardamos las imágenes que conviertes.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserta tus PNG',
    text: 'Arroja tus pesados archivos PNG al área de carga o utiliza el selector tradicional interactivo.',
  },
  {
    name: 'Detección de canales',
    text: 'El motor de renderizado local detectará y exportará la composición de píxeles al formato WebP optimizado.',
  },
  {
    name: 'Descarga Directa',
    text: 'Descarga individualmente tus WebP hiper-comprimidos o llévalos juntos usando el conversor a paquete ZIP.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebP Implementation Details',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitals Guidance',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Image Formats',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor PNG a WebP Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'El formato WebP se ha convertido en el estándar recomendado por Google para imágenes web. Cuando tu página usa imágenes WebP en lugar de PNG, Google PageSpeed Insights lo reconoce como una optimización positiva que puede mejorar significativamente la puntuación de rendimiento y el tiempo de carga de la página.',
  },
  {
    type: 'paragraph',
    content:
      'Una característica técnica clave de WebP es que soporta tanto compresión con pérdida como sin pérdida, además de admitir el canal alfa para transparencias. Esto significa que puedes convertir PNG a WebP sin perder las áreas transparentes de tu imagen, obteniendo un archivo significativamente más ligero con la misma calidad visual y sin comprometer las transparencias.',
  },
  {
    type: 'paragraph',
    content:
      'Nuestro convertidor procesa todo en el lado del cliente. La imagen PNG se carga en el Canvas API de HTML5, se renderiza y se exporta como WebP mediante el método toDataURL del canvas con el tipo MIME correspondiente. No hay transferencia de datos a ningún servidor externo.',
  },
  {
    type: 'tip',
    content:
      'Antes de subir imágenes a tu sitio web o blog, convierte todos tus PNG a WebP para mejorar los tiempos de carga y la experiencia del usuario, especialmente en conexiones móviles lentas.',
  },
  {
    type: 'stats',
    content:
      'Según Google, las imágenes WebP sin pérdida son un 26% más pequeñas que los PNG equivalentes. Las imágenes WebP con pérdida son un 25-34% más pequeñas que los JPG comparables a la misma calidad visual.',
  },
  {
    type: 'paragraph',
    content:
      'La herramienta es completamente gratuita, sin límites de archivos ni registros. Toda la conversión ocurre localmente, garantizando que tus imágenes originales permanezcan privadas y seguras en tu dispositivo.',
  },
  {
    type: 'summary',
    content:
      'Convierte PNG a WebP gratuitamente, con soporte para transparencias y sin enviar imágenes a servidores. Reduce el peso de tus imágenes hasta un 40% y mejora el rendimiento web.',
  },
];

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: PngAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema as any],
};
