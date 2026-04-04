import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'convertidor-jpg-a-webp';
const title = 'Convertir JPG a WebP Online y Gratis - Alta Calidad';
const description =
  'Convierte imágenes JPG a WebP en tu navegador. Compresión superior sin pérdida visible. Sin subir archivos. Gratuito, ilimitado y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos JPG...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir fotos JPG a WebP?',
    answer:
      'WebP permite comprimir significativamente más los archivos JPG tradicionales sin que el ojo humano note la diferencia, resultando en sitios web más rápidos y modernos.',
  },
  {
    question: '¿Tengo que pagar por imagen?',
    answer:
      'No, la herramienta es gratis y todo se procesa directamente en tu ordenador. Es ilimitada para uso doméstico o profesional.',
  },
  {
    question: '¿Es segura la conversión?',
    answer:
      'Sí, totalmente. Todo el procesamiento ocurre en el Canvas HTML5 de tu navegador local sin enviar ningún dato a servidores externos.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserta tus fotografías JPG',
    text: 'Pega tus archivos JPG o arrástralos directamente al área superior. La detección es instantánea.',
  },
  {
    name: 'Procesado a WebP',
    text: 'El motor de renderizado local convertirá cada archivo de imagen a un WebP ultra optimizado listo para la web.',
  },
  {
    name: 'Descarga los resultados',
    text: 'Guarda cada WebP individualmente o descarga el ZIP con todos los archivos convertidos.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP Compression Study',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Serve images in modern formats',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor JPG a WebP Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'El formato JPG ha sido durante décadas el estándar para fotografías en la web. Sin embargo, el moderno formato WebP de Google ofrece una mejor relación calidad-peso, permitiendo reducir el tamaño de los archivos JPG entre un 25% y un 35% manteniendo una calidad visual prácticamente idéntica. Para cualquier sitio web que busque mejorar su velocidad de carga, la conversión de JPG a WebP es una de las optimizaciones más impactantes disponibles.',
  },
  {
    type: 'paragraph',
    content:
      'El proceso de conversión de JPG a WebP preserva toda la información de color de la imagen original. A diferencia de PNG que puede verse afectado por transparencias, el JPG es un formato puramente plano, lo que significa que la conversión a WebP es directa y sin complicaciones en cuanto al canal alfa.',
  },
  {
    type: 'paragraph',
    content:
      'Nuestro convertidor opera completamente en el navegador. Las imágenes JPG se cargan a través del Canvas API de HTML5, se renderiza su contenido y se exporta en formato WebP. Ningún archivo viaja a través de internet hacia un servidor remoto, garantizando la confidencialidad total de tu material.',
  },
  {
    type: 'tip',
    content:
      'Utiliza WebP para imágenes de productos en e-commerce, fotografías de blog y cualquier imagen en tu web. Los navegadores modernos como Chrome, Firefox y Safari soportan WebP completamente.',
  },
  {
    type: 'stats',
    content:
      'Según estudios realizados por Google, las imágenes WebP con pérdida son entre un 25% y un 34% más pequeñas que los archivos JPG comparables, lo que puede acelerar el tiempo de carga de una página web en varios segundos.',
  },
  {
    type: 'summary',
    content:
      'Convierte JPG a WebP sin coste, sin límites y con total privacidad. Reduce el peso de tus imágenes y mejora el rendimiento de tu sitio web de forma inmediata.',
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

export const content: JpgAWebpLocaleContent = {
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
