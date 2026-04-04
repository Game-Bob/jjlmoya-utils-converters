import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertidor-webp-a-jpg';
const title = 'Convertir WebP a JPG Online y Gratis - Sin Subir a Internet';
const description =
  'Convierte imágenes WebP a JPG sin subir archivos. Procesamiento local 100% privado. Los fondos transparentes se sustituyen por blanco automáticamente.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos WebP...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: '¿Puedo subir imágenes privadas de forma segura?',
    answer:
      'Sí. No hay un servidor de subida. Tu navegador procesa el WebP en tu ordenador y genera el JPG para que lo descargues. Nadie más lo ve.',
  },
  {
    question: '¿Qué ocurre con el fondo de mi WebP si es transparente?',
    answer:
      'Como el formato JPG no soporta transparencias, el convertidor rellenará automáticamente las zonas transparentes con un fondo blanco sólido.',
  },
  {
    question: '¿Hay límite de conversiones o tamaño?',
    answer:
      'No imponemos restricciones. Puedes convertir cientos de imágenes siempre que tu ordenador tenga la potencia y la memoria RAM suficiente.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra tus Archivos',
    text: 'Pega tus WebP modernos al área de carga o selecciónalos usando el explorador de archivos interactivo.',
  },
  {
    name: 'Conversión Local',
    text: 'Disfruta mientras el motor local de la utilidad aplica un fondo e interpreta cada píxel al universal JPG.',
  },
  {
    name: 'Obtén tus Resultados',
    text: 'Descarga individualmente o usa el paquete ZIP para consolidar todas tus nuevas fotografías.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: The JPEG standards',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'WebP to JPEG compatibility',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a JPG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'El formato WebP es el estándar moderno de Google para imágenes web, pero su compatibilidad con software antiguo y dispositivos más limitados puede ser problemática. Convertir WebP a JPG garantiza que tus imágenes puedan ser abiertas por prácticamente cualquier programa, dispositivo o plataforma del mundo, ya que JPG es el formato fotográfico más universalmente soportado.',
  },
  {
    type: 'paragraph',
    html:
      'Un aspecto técnico importante a considerar es el manejo de las transparencias. El formato JPG no soporta el canal alfa, por lo que cualquier área transparente presente en el archivo WebP original será sustituida automáticamente por un fondo blanco sólido durante la conversión. Si necesitas preservar la transparencia, considera usar el formato PNG como destino en su lugar.',
  },
  {
    type: 'paragraph',
    html:
      'La conversión se realiza completamente en tu navegador mediante JavaScript y el Canvas API de HTML5. No se requiere ninguna instalación de software adicional y los archivos nunca se envían a ningún servidor externo, lo que garantiza una privacidad total para imágenes personales, corporativas o de cualquier naturaleza sensible.',
  },
  {
    type: 'tip',
    html:
      'Para mejores resultados, convierte WebP a JPG cuando necesites compartir fotos por email o redes sociales donde el tamaño importa. Si necesitas transparencia, usa WebP a PNG en su lugar.',
  },
  {
    type: 'paragraph',
    html:
      'El formato JPG tiene una compatibilidad del 100% entre todos los navegadores, sistemas operativos y dispositivos, mientras que WebP puede no ser compatible con algunos lectores de imágenes y editores más antiguos.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte WebP a JPG de forma local, gratuita y sin límites. Sin servidores, sin registro, compatible con todos tus dispositivos y archivos.',
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

export const content: WebpAJpgLocaleContent = {
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
