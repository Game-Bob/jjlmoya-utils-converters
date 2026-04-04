import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'convertidor-webp-a-ico';
const title = 'Convertir WebP a ICO | Instala tus Favicons y logos en Windows';
const description =
  'Convierte imágenes WebP a ICO oficial con transparencias. Sin subir archivos. Cabeceras binarias reales de Microsoft. Gratis y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos WebP...',
  convertText: 'Para convertirlos a ICO al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: '¿Puedo pasar diseños de stickers WebP a un Favicon ICO oficial web?',
    answer:
      'Exacto. El Favicon todavía demanda la clásica extensión de Microsoft ICO para compatibilidad extrema universal. Esta herramienta inyectará cabeceras binarias construyendo un icono 100% lícito.',
  },
  {
    question: '¿Tengo que esperar colas online al hacer mi lote enorme de iconos corporativos?',
    answer:
      'De ninguna manera. Nuestro conversor carga el Javascript y corta cualquier red de subida. Tu mismo celular CPU procesa cien fotos o más de forma asíncrona.',
  },
  {
    question: '¿Soportará las transparencias de mi WebP original el nuevo ICO resultante?',
    answer:
      'Así es. Nuestro motor funciona internamente con el lienzo API de HTML5 a 32 bits de soporte completo, todo agujero transparente saltará limpio al archivo iconográfico.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Arrastra Todas Tus Pegatinas Locales WebP',
    text: 'Mueve los pesados lotes fotográficos sin temor a que el límite web sature.',
  },
  {
    name: 'Traducción Asíncrona Lógica Y Ensamblaje Directo',
    text: 'Fíjate velozmente cómo la barra y los elementos se autocompletan mientras la memoria procesa el bloque byte por byte del marco.',
  },
  {
    name: 'Lleva Tú Pack Para Sistemas y Desarrollo Web',
    text: 'Pincha libre un botón masivo descargable en fichero conjunto o baja manual si necesitas apenas uno.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'Registro y Documento General Web ICO Header',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a ICO Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'El formato WebP es el formato de imagen moderno preferido para la web, utilizado frecuentemente para logos, iconos de interfaz y gráficos de aplicaciones. Cuando necesitas convertir estos diseños WebP en iconos reales para Windows o Favicons para sitios web, necesitas el formato ICO con la estructura binaria correcta.',
  },
  {
    type: 'paragraph',
    html:
      'Una ventaja clave de convertir WebP a ICO (en lugar de JPG a ICO) es la preservación de las transparencias. El WebP soporta el canal alfa igual que PNG, por lo que nuestro convertidor puede transferir esas transparencias al ICO resultante. Obtendrás un icono con fondo transparente perfectamente funcional tanto en Windows como en navegadores web.',
  },
  {
    type: 'paragraph',
    html:
      'El proceso completo ocurre en tu navegador. El archivo WebP se decodifica usando el soporte nativo del navegador, se renderiza en un canvas HTML5 y se codifica como ICO con las cabeceras binarias de Microsoft correctas. No hay transferencia de datos a servidores externos.',
  },
  {
    type: 'tip',
    html:
      'Si tienes un logo o sticker en formato WebP con fondo transparente y quieres usarlo como Favicon de tu sitio web, convierte directamente a ICO para obtener el mejor resultado con transparencia preservada.',
  },
  {
    type: 'paragraph',
    html:
      'El formato Favicon ICO es el estándar soportado por el 100% de los navegadores web para mostrar el icono de la pestaña del navegador. Aunque PNG también funciona, ICO ofrece compatibilidad máxima incluyendo Internet Explorer y navegadores más antiguos.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte WebP a ICO con transparencias preservadas y cabeceras binarias reales. Gratis, privado y sin límites. El mejor conversor para Favicons y iconos de Windows desde WebP.',
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

export const content: WebpAIcoLocaleContent = {
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
