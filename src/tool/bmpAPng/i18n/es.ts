import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'convertidor-bmp-a-png';
const title = 'Convertidor de BMP a PNG | Formato Sin Pérdida Local';
const description =
  'Convierte imágenes BMP a PNG sin pérdida de calidad. Compresión moderna sin artefactos. Sin subir archivos. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos BMP...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: '¿Cuál es la principal diferencia entre BMP y PNG?',
    answer:
      'Tanto BMP como PNG son formatos sin pérdida. La diferencia radica en la optimización: PNG entiende de algoritmos de compresión modernos para guardar la misma imagen ocupando 5 o 10 veces menos memoria que el BMP.',
  },
  {
    question: '¿Es la conversión realmente privada?',
    answer:
      'Sí. Toda la red fotográfica la hace tu ordenador. Absolutamente nadie accede a tus archivos en tránsito local.',
  },
  {
    question: '¿Por qué PNG sobre JPEG en este caso?',
    answer:
      'Si tienes un archivo BMP, es porque la imagen tiene colores precisos. Pasar un BMP al estándar destructivo JPG ensuciaría tus colores netos. El PNG protege esa fidelidad.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Acopla tu Fotografía',
    text: 'Mueve tranquilamente los archivos de origen BMP a nuestra zona para soltar elementos web.',
  },
  {
    name: 'Traduce Sin Transmisión de Red',
    text: 'Percibe en apenas un segundo el procesado limpio hecho localmente por tu JS de HTML5.',
  },
  {
    name: 'Consigue PNGs Puros',
    text: 'Baja las réplicas en PNG individualmente o mediante un paquete comprimido.',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor BMP a PNG Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'Tanto BMP como PNG son formatos de imagen sin pérdida, lo que significa que no se descarta información visual durante el almacenamiento. Sin embargo, existe una diferencia fundamental en cuanto a eficiencia: BMP almacena los datos de manera cruda sin ningún tipo de compresión, mientras que PNG utiliza el algoritmo de compresión Deflate para reducir el tamaño del archivo sin perder un solo píxel de información.',
  },
  {
    type: 'paragraph',
    content:
      'La conversión de BMP a PNG es especialmente útil cuando trabajas con capturas de pantalla, gráficos de interfaz de usuario, diseños con colores planos o cualquier imagen donde la exactitud de color es prioritaria. PNG preservará cada valor de color exactamente igual que el BMP original, pero con un tamaño de archivo considerablemente más pequeño.',
  },
  {
    type: 'paragraph',
    content:
      'Nuestro convertidor realiza todo el proceso localmente. El archivo BMP se decodifica en memoria, se dibuja en un canvas HTML5 y se exporta como PNG usando el algoritmo de compresión nativo del navegador. No hay transferencia de datos a servidores externos.',
  },
  {
    type: 'tip',
    content:
      'Si necesitas máxima compatibilidad con software de edición y precisión de color perfecta, convierte BMP a PNG en lugar de JPG. El PNG lossless garantiza que los colores no se deterioren nunca.',
  },
  {
    type: 'stats',
    content:
      'Un archivo BMP típico de pantalla completa (1920x1080) ocupa unos 6 MB. El mismo contenido en PNG puede ocupar entre 1 y 3 MB, logrando una reducción del 50-85% sin ninguna pérdida de calidad.',
  },
  {
    type: 'summary',
    content:
      'Convierte BMP a PNG sin pérdida de calidad, gratuitamente y con total privacidad. La mejor opción para preservar colores exactos con un tamaño de archivo optimizado.',
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

export const content: BmpAPngLocaleContent = {
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
