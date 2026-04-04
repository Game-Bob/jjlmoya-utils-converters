import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'convertidor-avif-a-webp';
const title = 'Convertir AVIF a WebP Online - Seguridad y Velocidad';
const description =
  'Convierte imágenes AVIF a WebP con mejor compatibilidad. Procesado local sin servidores. Gratis, privado e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos AVIF...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: '¿Cuál es la diferencia real entre convertir a WebP y a otros formatos?',
    answer:
      'WebP ofrece lo mejor de ambos mundos: compresiones tan asombrosas como el JPG pero conservando la capacidad de albergar transparencias limpias como un PNG. Cambiar tu AVIF a WebP maximiza su compatibilidad para la web preservando todas sus ventajas.',
  },
  {
    question: '¿Cómo logran cambiar esto sin servidor y de forma rápida?',
    answer:
      'Aprovechamos los módulos de decodificación incorporados y el objeto Image de JavaScript HTML5, lo que permite leer tu AVIF en memoria local y extraer un archivo WebP optimizado en tiempo récord.',
  },
  {
    question: '¿Es el formato WebP completamente compatible hoy en día?',
    answer:
      'A diferencia del naciente AVIF, el formato WebP disfruta de un amplísimo soporte entre navegadores como Chrome, Firefox y Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserta tus archivos fotográficos',
    text: 'Mueve y suelta todas las selecciones de formato AVIF hasta nuestro lienzo.',
  },
  {
    name: 'Traducción de Bytes Algorítmicos',
    text: 'Nuestro motor asimila los algoritmos sin subir nada y crea iteraciones exactas basadas en WebP comprimido.',
  },
  {
    name: 'Acumula tus Descargas Listas',
    text: 'Pulsa el panel y recibe lotes en cajas ZIP o sueltos para publicarlas directamente.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor AVIF a WebP Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'La conversión de AVIF a WebP es una elección inteligente cuando necesitas ampliar la compatibilidad de tus imágenes sin sacrificar la eficiencia de compresión. Mientras que AVIF ofrece la mejor compresión posible, WebP tiene una compatibilidad mucho más amplia en navegadores, dispositivos y aplicaciones.',
  },
  {
    type: 'paragraph',
    content:
      'WebP mantiene varias características que lo hacen superior al JPG para uso web: soporta el canal alfa para transparencias, puede usar compresión tanto con pérdida como sin pérdida, y tiene soporte universal en todos los navegadores modernos. Al convertir de AVIF a WebP, obtienes un archivo compatible con prácticamente todo el ecosistema web actual.',
  },
  {
    type: 'paragraph',
    content:
      'El proceso de conversión utiliza el soporte nativo de AVIF en navegadores modernos para decodificar el archivo en memoria. Después, el canvas API de HTML5 renderiza la imagen y la exporta como WebP. Todo el proceso ocurre localmente sin comunicación externa.',
  },
  {
    type: 'tip',
    content:
      'Si gestionas imágenes para un sitio web y necesitas el mejor balance entre compatibilidad y rendimiento, WebP es la elección ideal. Convierte tus AVIF a WebP para servir imágenes web modernas con soporte universal.',
  },
  {
    type: 'stats',
    content:
      'WebP tiene soporte en más del 96% de todos los navegadores web globalmente, mientras que AVIF ronda el 80-85%. Esta diferencia de compatibilidad hace que WebP sea más seguro para implementación en producción.',
  },
  {
    type: 'summary',
    content:
      'Convierte AVIF a WebP gratuitamente con soporte de transparencias y mejor compatibilidad web. Procesado localmente sin enviar datos a servidores externos.',
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

export const content: AvifAWebpLocaleContent = {
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
