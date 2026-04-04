import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convertidor-avif-a-jpg';
const title = 'Convertir AVIF a JPG Online - Sin Subir Fotos a Internet';
const description =
  'Convierte imágenes AVIF a JPG en tu navegador. Sin servidor. Procesamiento local 100% privado. Gratis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos AVIF...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir AVIF a JPG?',
    answer:
      'El formato AVIF ofrece una compresión superior, pero no todos los programas o visores lo soportan. Convertirlo a JPG asegura que la imagen podrá ser vista en el 100% de los dispositivos del mundo.',
  },
  {
    question: '¿Cómo protegemos tus imágenes AVIF?',
    answer:
      'Tus fotos jamás salen de tu móvil o PC. Todo el proceso de dibujo y codificación a JPEG se ejecuta en el entorno de Javascript de tu navegador.',
  },
  {
    question: '¿Perderé calidad al pasar de AVIF a JPG?',
    answer:
      'Nuestra herramienta procesa los píxeles con una calidad estándar de Canvas (0.9 a 0.95), logrando que los cambios apenas sean perceptibles.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra archivos o haz clic',
    text: 'Mueve todas las fotografías AVIF que quieras convertir al cuadro de procesamiento delimitado.',
  },
  {
    name: 'Transformación Instantánea',
    text: 'Observa en menos de un segundo cómo se recodifica el AVIF a JPG eliminando posibles canales alfa por un fondo sólido.',
  },
  {
    name: 'Guarda o Descarga el ZIP',
    text: 'Baja tus nuevas imágenes JPG de manera individual o pulsando Descargar Todo si procesaste en lote.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Información General del JPG',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor AVIF a JPG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'AVIF (AV1 Image File Format) es el formato de imagen más moderno y eficiente disponible actualmente. Desarrollado por la Alliance for Open Media, ofrece una compresión significativamente superior a WebP, PNG y JPG. Sin embargo, su adopción aún es limitada: muchas aplicaciones de escritorio, editores de imágenes, y especialmente lectores de fotos en dispositivos más antiguos, no son capaces de abrir archivos AVIF.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir AVIF a JPG es la solución para maximizar la compatibilidad. El formato JPG tiene soporte universal en todos los dispositivos y sistemas operativos del mundo, desde smartphones de gama baja hasta televisores inteligentes. Al convertir de AVIF a JPG, garantizas que cualquier persona puede ver tu imagen sin problemas de compatibilidad.',
  },
  {
    type: 'paragraph',
    html:
      'Nuestro convertidor realiza el proceso completamente en el navegador. El archivo AVIF se decodifica por el motor de imagen nativo del navegador (los navegadores modernos soportan AVIF), se renderiza en un canvas HTML5 y se exporta como JPG de alta calidad. Todo esto sin enviar ningún dato a internet.',
  },
  {
    type: 'tip',
    html:
      'Si compartes imágenes con personas que usan dispositivos o programas más antiguos, convierte siempre de AVIF a JPG para garantizar que puedan verlas sin instalar software adicional.',
  },
  {
    type: 'paragraph',
    html:
      'AVIF puede lograr imágenes entre un 50% y un 60% más pequeñas que JPEG a calidad visual equivalente. Sin embargo, la compatibilidad universal de JPG lo sigue haciendo imprescindible para distribución masiva.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte AVIF a JPG de forma gratuita, local y sin límites. Máxima compatibilidad universal para tus imágenes sin comprometer la privacidad de tus archivos.',
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

export const content: AvifAJpgLocaleContent = {
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
