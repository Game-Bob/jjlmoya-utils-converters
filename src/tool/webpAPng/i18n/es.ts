import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'convertidor-webp-a-png';
const title = 'Convertir WebP a PNG Online y Gratis - Privado al 100%';
const description =
  'Convierte imágenes WebP a PNG en tu navegador. Conserva la transparencia. Sin subir archivos a servidores. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos WebP...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué necesito convertir mis archivos WebP a PNG?',
    answer:
      'A pesar de ser más ligeros, los WebP pueden causar incompatibilidades en programas de edición como Photoshop antiguo. El PNG asegura un 100% de compatibilidad universalmente.',
  },
  {
    question: '¿Se pierden las transparencias si paso de WebP a PNG?',
    answer:
      'No, en absoluto. A diferencia de la conversión a JPG, el PNG soporta el canal alfa. Nuestra utilidad preservará cualquier zona transparente del archivo original.',
  },
  {
    question: '¿Puedo subir archivos confidenciales de mi empresa?',
    answer:
      'Puedes y debes. Como todo se ejecuta localmente mediante JavaScript, las imágenes de tu empresa nunca saldrán de tu ordenador ni se guardarán en servidores ajenos.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Arrastra tus WebP',
    text: 'Mueve y suelta tus archivos WebP sobre el panel principal o selecciona las imágenes de forma tradicional.',
  },
  {
    name: 'Conversión de Alta Fidelidad',
    text: 'Tu navegador redibujará píxel a píxel la imagen y generará su copia exacta en formato PNG, manteniendo la gama de colores original.',
  },
  {
    name: 'Descarga Individual o Masiva',
    text: 'Guarda cada fichero suelto o, si has procesado un lote, haz clic en el botón ZIP para bajarlos todos empaquetados.',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'WebP API and Library Documentation',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'HTML Canvas 2D Context Specification',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: WebP image format',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a PNG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'El formato WebP fue desarrollado por Google como una alternativa moderna a PNG y JPG, ofreciendo una compresión superior con o sin pérdida de calidad. Sin embargo, su adopción en herramientas de edición profesional como versiones antiguas de Photoshop, Illustrator o editores de imágenes especializados puede ser limitada, lo que hace necesario convertir WebP a PNG para garantizar la compatibilidad universal.',
  },
  {
    type: 'paragraph',
    html:
      'Una ventaja fundamental de la conversión WebP a PNG es la preservación del canal alfa. A diferencia de la conversión a JPG donde los fondos transparentes se rellenan con blanco, el formato PNG mantiene íntegramente cualquier área transparente que tenga el archivo WebP original. Esto es especialmente valioso para logos, iconos, ilustraciones y cualquier gráfico con transparencias.',
  },
  {
    type: 'paragraph',
    html:
      'Nuestro convertidor funciona completamente en el lado del cliente. No existe ningún servidor intermediario; el proceso entero ocurre dentro del motor JavaScript de tu navegador. Esto significa que tus imágenes nunca abandonan tu dispositivo, garantizando una privacidad absoluta incluso para material corporativo o confidencial.',
  },
  {
    type: 'tip',
    html:
      'Si tu archivo WebP tiene transparencias y necesitas editarlo en Photoshop, convierte siempre a PNG en lugar de JPG para conservar el canal alfa y poder editar la transparencia.',
  },
  {
    type: 'paragraph',
    html:
      'El formato WebP puede reducir el tamaño de los archivos PNG hasta un 26% y los JPG hasta un 34%, según la documentación oficial de Google para imágenes sin pérdida y con pérdida respectivamente.',
  },
  {
    type: 'paragraph',
    html:
      'La herramienta soporta la conversión en lote. Puedes arrastrar múltiples archivos WebP simultáneamente y descargar todos los PNG resultantes en un único archivo ZIP comprimido, ahorrando tiempo cuando necesitas convertir colecciones completas de imágenes.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte WebP a PNG con total privacidad y calidad, preservando transparencias. Gratis, sin límites y procesado localmente en tu navegador.',
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

export const content: WebpAPngLocaleContent = {
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
