import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convertidor-bmp-a-webp';
const title = 'Convertir BMP a WebP Gratis | Tu Compresor Nativo Offline';
const description =
  'Convierte imágenes BMP a WebP sin conexión. Reduce archivos enormes a kilobytes. Sin subir archivos. Gratis, offline y completamente privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos BMP...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué mis archivos BMP ocupan 10 veces más y qué gano al tenerlos en WebP?',
    answer:
      'El BMP guarda mapas de píxeles sin comprimir. WebP usa compresión matemática para bajar enormes BMPs a menos de un megabyte manteniendo la imagen sumamente reconocible.',
  },
  {
    question: '¿Tengo que registrar una cuenta?',
    answer:
      'No exigimos correo y tu material permanecerá aislado, puesto que el procesamiento lo realiza el Javascript del navegador instalado en tu PC, sin envío remoto.',
  },
  {
    question: '¿Puedo arrastrar muchos archivos simultáneamente?',
    answer:
      'Sí, puedes arrastrar 50 o 100 archivos si tu hardware aguanta procesar todos sin hacer colas.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identificar Archivos Brutos',
    text: 'Sitúa tus colecciones de mapa de bit en ventanas listas al traslado.',
  },
  {
    name: 'Activación Nativa del Lote',
    text: 'Proyecta o arrastra todos los archivos a nuestra mesa digital.',
  },
  {
    name: 'Evacuación del Lote WebP',
    text: 'Pulsa los resultados y obtendrás por separado la imagen en disco de micro-pesos o como comprimidos inmediatos.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor BMP a WebP Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'Convertir BMP a WebP representa una de las reducciones de tamaño más dramáticas posibles entre formatos de imagen. Un archivo BMP sin comprimir puede ocupar 10, 20 o incluso 50 veces más espacio que su equivalente en WebP. El formato WebP de Google utiliza compresión avanzada tanto con pérdida como sin pérdida, logrando archivos extremadamente ligeros que mantienen una calidad visual excelente.',
  },
  {
    type: 'paragraph',
    html:
      'El proceso funciona completamente offline en tu navegador. Los archivos BMP se decodifican mediante el API nativo del navegador, se renderizan en un canvas HTML5 y se exportan como WebP. No se establece ninguna conexión de red durante la conversión, garantizando la confidencialidad total de tus archivos.',
  },
  {
    type: 'paragraph',
    html:
      'WebP también soporta el canal alfa para transparencias, lo que lo hace versátil para cualquier tipo de imagen. Si tus BMPs tienen fondos de colores uniformes, la compresión WebP sin pérdida puede generar archivos especialmente pequeños al aprovechar la redundancia de los datos.',
  },
  {
    type: 'tip',
    html:
      'Si tienes una colección de imágenes BMP antiguas de Windows, convertirlas a WebP es la manera más eficiente de modernizarlas para uso web manteniendo toda su calidad visual.',
  },
  {
    type: 'paragraph',
    html:
      'Un archivo BMP típico de pantalla de escritorio a 1920x1080 puede convertirse de sus 6 MB originales a un WebP de entre 100 KB y 500 KB, representando reducciones de hasta el 98%.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte BMP a WebP offline, gratis y sin límites. La conversión más eficiente disponible: de archivos enormes sin comprimir a WebP ultra-comprimido, con privacidad total garantizada.',
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

export const content: BmpAWebpLocaleContent = {
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
