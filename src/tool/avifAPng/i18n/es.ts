import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'convertidor-avif-a-png';
const title = 'Convertir AVIF a PNG Online - Rápido, local y 100% privado';
const description =
  'Convierte imágenes AVIF a PNG preservando transparencias. Sin subir archivos. Procesado local en tu navegador. Gratis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos AVIF...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué debería convertir AVIF a PNG?',
    answer:
      'AVIF es genial para compresión, pero su compatibilidad es limitada en navegadores antiguos y editores clásicos. Al convertir de AVIF a PNG, te aseguras de que tu archivo mantendrá la transparencia original y todas las aplicaciones podrán abrirlo.',
  },
  {
    question: '¿Se mantienen las transparencias del archivo AVIF original?',
    answer:
      'Sí. A diferencia de JPG que elimina el fondo transparente, al exportar a PNG nuestro convertidor mantiene intacto el canal alfa.',
  },
  {
    question: '¿Es verdad que no suben mis imágenes a internet?',
    answer:
      'Absolutamente cierto. Nuestro convertidor se ejecuta de manera 100% local en tu dispositivo utilizando el motor interno de JavaScript.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Añade tus archivos AVIF',
    text: 'Puedes arrastrarlos directamente al área delimitada o usar el botón para explorar las carpetas de tu equipo.',
  },
  {
    name: 'Procesamiento inmediato',
    text: 'Deja que el procesador HTML5 renderice la imagen; el formato cambiará a PNG de forma automática en microsegundos.',
  },
  {
    name: 'Hazte con tus PNGs',
    text: 'Descarga las imágenes convertidas una a una o baja un bloque completo mediante el botón ZIP.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: Formato AVIF',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Portable Network Graphics (PNG) Specification',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor AVIF a PNG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'El formato AVIF es uno de los más avanzados disponibles hoy, capaz de comprimir imágenes con una eficiencia notable. Sin embargo, la adopción de AVIF en herramientas de edición, visores de imágenes y sistemas operativos más antiguos es aún limitada. PNG, en cambio, es un formato ampliamente compatible, soportado por prácticamente cualquier herramienta de software.',
  },
  {
    type: 'paragraph',
    html:
      'La conversión de AVIF a PNG tiene una ventaja fundamental sobre la conversión a JPG: la preservación del canal alfa. Si tu imagen AVIF tiene áreas transparentes, al convertir a PNG estas se mantienen intactas. Esto es crucial para logos, iconos, pegatinas y cualquier gráfico donde la transparencia es esencial para el diseño.',
  },
  {
    type: 'paragraph',
    html:
      'Toda la conversión ocurre en tu navegador web. Los navegadores modernos ya incluyen soporte nativo para AVIF, lo que permite decodificar el archivo localmente, renderizarlo en un canvas y exportarlo como PNG sin ninguna comunicación con servidores externos.',
  },
  {
    type: 'tip',
    html:
      'Si recibes un archivo AVIF que necesitas editar en Photoshop o GIMP, conviértelo primero a PNG para garantizar compatibilidad total y preservar cualquier transparencia presente.',
  },
  {
    type: 'paragraph',
    html:
      'PNG tiene soporte universal en todos los editores de imagen, sistemas operativos y navegadores web. AVIF, a pesar de su eficiencia, todavía no está soportado en Internet Explorer, versiones antiguas de Safari y muchos programas de edición.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte AVIF a PNG preservando transparencias, de forma gratuita y local. Obtén la compatibilidad universal de PNG sin sacrificar la calidad de imagen de tu AVIF.',
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

export const content: AvifAPngLocaleContent = {
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
