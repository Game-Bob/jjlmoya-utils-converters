import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'convertidor-jpg-a-ico';
const title = 'Convertidor de JPG a ICO | Crea iconos oficiales para Windows y Web';
const description =
  'Convierte fotos JPG a ICO con cabeceras binarias reales de Microsoft. Recorte automático cuadrado. Sin subir archivos. Gratis y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos JPG...',
  convertText: 'Para convertirlos a ICO al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: '¿El archivo ICO que resulta es compatible nativamente para personalizar carpetas Windows?',
    answer:
      'Sí, creamos un archivo Microsoft Icon Format 100% auténtico insertando a bajo nivel una cabecera binaria estandarizada a la matriz de imagen.',
  },
  {
    question: '¿Qué pasa con la proporción si mi JPG original es una foto horizontal panorámica?',
    answer:
      'El estándar rígido global del ICO requiere obligatoriamente una imagen perfectamente cuadrada. Nuestro motor JS HTML5 centrará tu foto y recortará los excedentes garantizando un resultado equilibrado.',
  },
  {
    question: '¿Es peligroso subir corporativos o logotipos personales JPG al conversor?',
    answer:
      'El motor Canvas en JavaScript descansa en tu propio explorador físico. Convertir cientos de fotos a ICO no manda un solo megabyte hacia ninguna nube en países dudosos.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Junta las Fotocopias JPG Originales',
    text: 'Busca y acapara las fotos convencionales y deposítalas tirándolas en nuestro cuadrado amigable.',
  },
  {
    name: 'Observa la Purificación Hexadecimal Ciega',
    text: 'La recodificación insertará nativa y velozmente los metadatos y encabezados generando asincrónico por memoria un estricto icono puro.',
  },
  {
    name: 'Compila Múltiples Diseños ZIP',
    text: 'Termina la labor descargando todo masivamente en paquete compacto en pocos segundos.',
  },
];

const bibliography: JpgAIcoLocaleContent['bibliography'] = [
  {
    name: 'Estructura Iconográfica y Uso en Sistemas ICO',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'JPEG.org Standards',
    url: 'https://jpeg.org/',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor JPG a ICO Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'Convertir JPG a ICO es necesario cuando quieres crear iconos personalizados para Windows, Favicons para sitios web o identificadores visuales para aplicaciones. El formato ICO de Microsoft es el estándar para todos estos usos y nuestro convertidor genera archivos ICO genuinos con la estructura binaria correcta.',
  },
  {
    type: 'paragraph',
    html:
      'Una consideración técnica importante al convertir JPG a ICO es la proporción de la imagen. El formato ICO requiere imágenes cuadradas. Si tu foto JPG original es rectangular (horizontal o vertical), nuestro convertidor la centrará y recortará automáticamente para que quepa en un formato cuadrado, preservando la parte central de la imagen.',
  },
  {
    type: 'paragraph',
    html:
      'Como el JPG no tiene canal alfa, el ICO resultante no tendrá transparencia. Para iconos con transparencia, te recomendamos primero eliminar el fondo en un editor de imágenes, guardar como PNG y luego convertir de PNG a ICO para obtener un icono con transparencia perfecta.',
  },
  {
    type: 'tip',
    html:
      'Para iconos de mejor calidad, usa siempre una imagen JPG cuadrada de alta resolución (al menos 256x256) como fuente. El convertidor redimensionará al tamaño ICO estándar manteniendo la máxima nitidez posible.',
  },
  {
    type: 'paragraph',
    html:
      'Los archivos ICO para Windows pueden contener múltiples resoluciones (16x16, 32x32, 48x48, 256x256) en un mismo archivo. Nuestro convertidor genera el ICO en la resolución óptima según tu imagen de origen.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte JPG a ICO auténtico con cabeceras binarias reales. Recorte automático para formato cuadrado. Gratis, privado y compatible con Windows y todos los navegadores.',
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

export const content: JpgAIcoLocaleContent = {
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
