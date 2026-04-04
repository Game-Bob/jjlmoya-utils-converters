import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'convertidor-svg-a-png';
const title = 'Convertir SVG a PNG Online y Gratis - Alta Resolución';
const description =
  'Convierte archivos SVG vectoriales a PNG en tu navegador. Salida a doble escala HD. Conserva transparencias. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos SVG...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir archivos SVG a PNG?',
    answer:
      'SVG es vectorial e ideal para logos, pero a veces necesitas el formato rasterizado PNG para usarlo en aplicaciones que no soportan vectores o para enviarlos por WhatsApp o redes sociales.',
  },
  {
    question: '¿Puedo elegir el tamaño de salida?',
    answer:
      'Actualmente duplicamos la escala del SVG de origen para que la salida PNG sea nítida y apta para pantallas Retina o 4K.',
  },
  {
    question: '¿Se mantienen las transparencias del SVG?',
    answer:
      'Sí, el PNG resultante conserva el canal alfa del SVG original, manteniendo todos los fondos transparentes intactos.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Inserta tus archivos SVG',
    text: 'Pega tus archivos SVG o arrástralos directamente al área superior.',
  },
  {
    name: 'Generación del PNG HD',
    text: 'En milisegundos nuestro motor local recreará cada vector en una capa de píxeles HD en formato PNG transparente.',
  },
  {
    name: 'Descarga los archivos',
    text: 'Guarda los PNG generados individualmente o en un paquete ZIP.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG Specification',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: SVG Tutorial',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor SVG a PNG Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'SVG (Scalable Vector Graphics) es un formato de imagen basado en XML que describe gráficos vectoriales. Sus principales ventajas son que escala perfectamente a cualquier tamaño sin perder calidad y que los archivos son generalmente pequeños. Sin embargo, no todos los programas, aplicaciones o plataformas de redes sociales soportan SVG directamente.',
  },
  {
    type: 'paragraph',
    content:
      'Convertir SVG a PNG es la solución cuando necesitas una versión rasterizada de tu gráfico vectorial. El PNG resultante es universalmente compatible y, gracias a su soporte para canal alfa, preserva todas las transparencias que tuviera el SVG original. Nuestro convertidor renderiza el SVG a doble resolución (2x) para garantizar que el PNG sea nítido incluso en pantallas de alta densidad como Retina o 4K.',
  },
  {
    type: 'paragraph',
    content:
      'El proceso de conversión utiliza el elemento Image nativo del navegador para cargar el SVG, lo dibuja sobre un Canvas HTML5 a escala 2x y exporta el resultado como PNG. Todo esto ocurre localmente en tu dispositivo sin ninguna comunicación con servidores externos.',
  },
  {
    type: 'tip',
    content:
      'Para obtener la mejor calidad en el PNG resultante, asegúrate de que tu SVG tenga definidas las dimensiones (atributos width y height o viewBox). Un SVG sin dimensiones definidas podría renderizarse a un tamaño incorrecto.',
  },
  {
    type: 'stats',
    content:
      'Los archivos SVG son escalables infinitamente, pero un PNG a 2x resolución de un SVG de 256x256 producirá una imagen de 512x512 píxeles, apta para la mayoría de los usos en pantallas modernas de alta densidad.',
  },
  {
    type: 'paragraph',
    content:
      'Casos de uso habituales: exportar logos vectoriales para usarlos en presentaciones de PowerPoint o Word, crear versiones PNG de iconos para aplicaciones móviles, compartir diseños SVG en plataformas que no los soportan, y generar favicons PNG a partir de tu logo SVG.',
  },
  {
    type: 'summary',
    content:
      'Convierte SVG a PNG HD de forma gratuita, privada y con preservación de transparencias. Renderizado a doble escala para pantallas Retina y 4K.',
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

export const content: SvgAPngLocaleContent = {
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
