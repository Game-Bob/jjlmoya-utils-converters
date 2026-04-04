import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'convertidor-svg-a-jpg';
const title = 'Convertir SVG a JPG Online y Gratis - Alta Resolución';
const description =
  'Convierte archivos SVG vectoriales a JPG en tu navegador. Renderizado 2x de alta resolución. Sin subir archivos. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos SVG...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir SVG a JPG?',
    answer:
      'JPG ofrece la máxima compatibilidad en todo tipo de dispositivos; convertir un SVG a JPG es la mejor forma de asegurar que todos puedan ver tu diseño sin fallos de renderizado.',
  },
  {
    question: '¿Qué ocurre con la transparencia del SVG?',
    answer:
      'Al convertir a JPG (que no soporta transparencias), se añadirá automáticamente un fondo blanco opaco a tu composición vectorial.',
  },
  {
    question: '¿Qué resolución tendrá el JPG resultante?',
    answer:
      'La herramienta renderiza el SVG a doble escala (2x) para garantizar una alta resolución adecuada para pantallas Retina y uso profesional.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Inserta tus archivos de vectores',
    text: 'Pega tus archivos SVG en la zona superior para preparar el listado de exportación.',
  },
  {
    name: 'Rasterizado a JPG',
    text: 'La herramienta convertirá los vectores en píxeles de alta resolución y generará tu JPG al instante.',
  },
  {
    name: 'Descarga los resultados',
    text: 'Obtén tus archivos JPG uno a uno o como paquete ZIP.',
  },
];

const bibliography: SvgAJpgLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG Specification',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'JPEG Standard Overview',
    url: 'https://jpeg.org/jpeg/',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor SVG a JPG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'Mientras que el formato SVG es perfectamente escalable y ligero para su uso en la web, en ocasiones necesitas una versión JPG de tu gráfico vectorial. El JPG es el formato fotográfico más compatible del mundo y puede ser abierto sin problemas por cualquier dispositivo, sistema operativo o programa de visualización de imágenes.',
  },
  {
    type: 'paragraph',
    html:
      'La conversión de SVG a JPG implica un proceso de rasterización: el gráfico vectorial se convierte en una cuadrícula de píxeles. Durante este proceso, las transparencias del SVG se fusionan con un fondo blanco sólido, ya que el formato JPG no soporta el canal alfa. Nuestro convertidor realiza esta rasterización a doble resolución (2x) para producir JPGs nítidos aptos para cualquier uso.',
  },
  {
    type: 'paragraph',
    html:
      'Todo el proceso ocurre en tu navegador sin necesidad de conectarse a ningún servidor. El SVG se carga en un elemento Image, se dibuja sobre un canvas HTML5 con fondo blanco a escala 2x y se exporta como JPG de alta calidad.',
  },
  {
    type: 'tip',
    html:
      'Si tu SVG tiene texto o fuentes personalizadas, asegúrate de que estén incrustados o convertidos a trayectorias antes de convertir. Las fuentes del sistema pueden no estar disponibles en el motor de renderizado.',
  },
  {
    type: 'paragraph',
    html:
      'Un SVG de 100KB convertido a JPG a 2x puede producir un archivo de entre 50KB y 500KB dependiendo de la complejidad del diseño y los colores utilizados.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte SVG a JPG de alta resolución de forma gratuita y privada. Renderizado 2x para máxima nitidez, fondo blanco automático para compatibilidad total con JPG.',
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

export const content: SvgAJpgLocaleContent = {
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
