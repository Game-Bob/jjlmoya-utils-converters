import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'convertidor-png-a-ico';
const title = 'Convertir PNG a ICO Online | Fabrica iconos 100% reales para PC y web';
const description =
  'Convierte PNG a ICO con cabeceras binarias reales. Transparencias preservadas. Sin subir archivos. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos PNG...',
  convertText: 'Para convertirlos a ICO al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: '¿Es tu conversor un creador de simples archivos PNG disfrazados o un ICO verídico?',
    answer:
      'Hacemos un ICO real. Extraemos los datos de tu PNG, creamos la cabecera hexadecimal estandarizada propia de Microsoft (Header + Directory de 22 bytes), redimensionamos al formato cuadrado ideal localmente y armamos un archivo informático final validado como nativo.',
  },
  {
    question: '¿Se conservan las transparencias cuando mi logo se asimile en el icono?',
    answer:
      'Absolutamente sí. Nuestro motor lee tu PNG a 32 bits, lo ancla conservando milimétricamente cualquier agujero pasante transparente para que resalte en la barra de direcciones universal web (Favicon).',
  },
  {
    question: '¿Queda guardado el logo de mi empresa en sus servidores?',
    answer:
      'Este servicio garantiza un contacto cero red exterior. El convertidor funciona anclado en tu Canvas interno HTML5; la fabricación de tu icono transcurre cien por ciento dentro de tu equipo en memoria local puramente secreta.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Arrastra Archivos A Trasladar',
    text: 'Sitúa las matrices de tu foto (es deseable usar cuadrangulares 512x512 PNG) sobre el marco local interactivo.',
  },
  {
    name: 'Compilación Automática del Bytecode',
    text: 'Verás a fondo la barra correr cargando internamente y fabricando la matriz local de cabeceras Hexadecimales purificadas ICO.',
  },
  {
    name: 'Acumula o Escapa con tu ZIP',
    text: 'Asímilalos pinchando un mega compilado para tus sitios web (botones ZIP globales) o baja la miniatura para el ejecutable Windows.',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Estructura Técnica del Microsoft ICO Format',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Favicon Standard - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor PNG a ICO Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'El formato ICO (Icon) es el estándar de Microsoft para iconos de aplicaciones de Windows y Favicons de páginas web. A diferencia de simplemente renombrar un PNG como .ico, un archivo ICO genuino requiere una estructura binaria específica con cabeceras de 22 bytes, un directorio de imágenes y los datos de imagen codificados de forma particular.',
  },
  {
    type: 'paragraph',
    content:
      'Nuestro convertidor crea archivos ICO auténticos, no simples renombrados. El proceso incluye: leer el PNG en un canvas HTML5, crear la cabecera ICO binaria estándar de Microsoft con el magic number correcto (00 00 01 00), generar el directorio de imagen y combinar todo en un archivo .ico binario válido. El resultado es reconocido nativamente por Windows, macOS y todos los navegadores web.',
  },
  {
    type: 'paragraph',
    content:
      'Las transparencias del PNG se preservan completamente en el ICO resultante. Esto es crucial para Favicons donde el icono se muestra sobre diferentes fondos (la barra de favoritos puede ser clara u oscura). Un ICO con canal alfa de 32 bits funciona perfectamente en todos los contextos.',
  },
  {
    type: 'tip',
    content:
      'Para mejores resultados como Favicon, usa un PNG cuadrado de 512x512 o 256x256 píxeles como fuente. Nuestro convertidor lo redimensionará al tamaño estándar ICO preservando la proporción y la transparencia.',
  },
  {
    type: 'stats',
    content:
      'Un archivo ICO estándar ocupa entre 1 KB y 100 KB dependiendo de la resolución y las capas incluidas. Los Favicons ICO de 16x16 y 32x32 son los más comunes para sitios web.',
  },
  {
    type: 'summary',
    content:
      'Convierte PNG a ICO auténtico con cabeceras binarias reales. Gratis, privado y con soporte de transparencias. Perfecto para Favicons web e iconos de Windows.',
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

export const content: PngAIcoLocaleContent = {
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
