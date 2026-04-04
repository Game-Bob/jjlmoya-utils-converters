import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'convertidor-bmp-a-jpg';
const title = 'Convertir BMP a JPG Online - Rápido, Gratis y Privado';
const description =
  'Convierte imágenes BMP a JPG en tu navegador. Reduce el tamaño drásticamente. Sin subir archivos a servidores. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos BMP...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir BMP a JPG?',
    answer:
      'El formato BMP no comprime los datos, resultando en archivos extremadamente grandes. El formato JPG comprime la imagen drásticamente manteniendo una calidad visual excelente para web y distribución.',
  },
  {
    question: '¿Es seguro convertir mis imágenes aquí?',
    answer:
      '100% seguro. Tu privacidad está garantizada ya que el procesamiento se realiza íntegramente de forma local usando el motor de tu propio navegador web.',
  },
  {
    question: '¿Cómo funciona la herramienta?',
    answer:
      'Simplemente arrastra tus archivos BMP, y nuestro script en JavaScript leerá los píxeles para re-dibujarlos sobre un canvas HTML y exportarlos en codificación JPEG al instante.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Sube tus archivos BMP',
    text: 'Arrastra y suelta o selecciona tus imágenes en formato BMP en la zona designada.',
  },
  {
    name: 'Procesamiento Automático',
    text: 'La herramienta rasteriza la imagen y aplica el nivel óptimo de compresión en formato JPG en milisegundos.',
  },
  {
    name: 'Descarga Individual o en Lote',
    text: 'Obtén tus nuevas imágenes optimizadas para web ya sea una a una o descargando un archivo ZIP.',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format Specification',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor BMP a JPG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'El formato BMP (Bitmap) es uno de los formatos de imagen más antiguos, desarrollado originalmente por Microsoft para Windows. Su característica principal es que almacena los datos de imagen sin compresión, lo que significa que un archivo BMP de una fotografía estándar puede ocupar decenas o incluso cientos de megabytes. Esto lo hace completamente inadecuado para compartir en internet o por email.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir BMP a JPG es la solución más práctica para reducir drásticamente el tamaño de estos archivos. El formato JPG aplica compresión inteligente que puede reducir el tamaño de un BMP en un 95% o más, manteniendo una calidad visual excelente para fotografías. Un BMP de 10 MB puede convertirse fácilmente en un JPG de apenas 500 KB.',
  },
  {
    type: 'paragraph',
    html:
      'La conversión se realiza completamente en tu navegador. El archivo BMP se lee mediante la API FileReader, se decodifica por el motor de imagen nativo del navegador, se dibuja sobre un canvas HTML5 y se exporta como JPG. Todo esto ocurre localmente sin ninguna transferencia de datos a internet.',
  },
  {
    type: 'tip',
    html:
      'Si tienes archivos BMP muy grandes, convierte primero uno para verificar que la calidad JPG resultante es satisfactoria, luego procesa el lote completo.',
  },
  {
    type: 'paragraph',
    html:
      'Un archivo BMP sin comprimir para una imagen de 1920x1080 píxeles ocupa aproximadamente 6 MB. El mismo contenido en JPG de alta calidad puede ocupar solo 200-400 KB, una reducción del 93-97%.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte BMP a JPG de forma gratuita, privada e ilimitada directamente en tu navegador. Reduce el tamaño de tus imágenes hasta un 97% sin perder calidad visual apreciable.',
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

export const content: BmpAJpgLocaleContent = {
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
