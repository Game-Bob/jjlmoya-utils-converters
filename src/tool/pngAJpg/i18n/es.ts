import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convertidor-png-a-jpg';
const title = 'Convertir PNG a JPG Online - Rápido, Gratis y 100% Privado';
const description =
  'Convierte imágenes PNG a JPG directamente en tu navegador. Sin subir archivos a servidores. Rápido, gratuito y completamente privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos PNG...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir PNG a JPG?',
    answer:
      'El formato PNG mantiene mucha calidad y transparencias pero resulta en archivos enormes. Convertir a JPG es perfecto cuando necesitas fotos ligeras para correos o páginas web rápidas y no te importa un fondo sólido.',
  },
  {
    question: '¿Perderé detalles durante la transformación?',
    answer:
      'Aplicamos una relación de compresión equilibrada de alta calidad, por lo que las diferencias en fotografías y degradados serán casi imperceptibles al ojo, pero notarás el ahorro en el peso final del documento.',
  },
  {
    question: '¿Mis fotos son procesadas de manera segura?',
    answer:
      'Absolutamente sí. No usamos servidores en la nube; el algoritmo de conversión corre a través del Canvas de HTML5 de tu propio navegador web de forma aislada.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra Archivos PNG',
    text: 'Envía tus imágenes estáticas PNG al recuadro de procesamiento local soltándolas ahí.',
  },
  {
    name: 'Re-Renderizado Blanco',
    text: 'Cada foto adapta automáticamente sus transparencias con una capa blanca subyacente para hacerla compatible al entorno JPG.',
  },
  {
    name: 'Exportación Directa',
    text: 'Haz click en los iconos de descarga verdes y guarda tus nuevos archivos JPG.',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'Especificaciones PNG Consortium',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'The JPEG committee',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor PNG a JPG Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'El formato PNG (Portable Network Graphics) es ampliamente utilizado por su capacidad de almacenar imágenes sin pérdida de calidad y con soporte para transparencias (canal alfa). Sin embargo, esta fidelidad tiene un coste: los archivos PNG suelen ser considerablemente más grandes que sus equivalentes en JPG, especialmente cuando se trata de fotografías o imágenes con gradientes complejos.',
  },
  {
    type: 'paragraph',
    content:
      'El formato JPG (o JPEG) utiliza un algoritmo de compresión con pérdida que reduce drásticamente el tamaño del archivo. Para fotografías e imágenes donde una pequeña pérdida de detalle es aceptable, JPG es la elección estándar. Un PNG que ocupa 2 MB puede transformarse en un JPG de apenas 200 KB con una calidad visualmente idéntica para el ojo humano.',
  },
  {
    type: 'paragraph',
    content:
      'Nuestro convertidor PNG a JPG funciona íntegramente en tu navegador web mediante la API Canvas de HTML5. El proceso es sencillo: la imagen PNG se carga en memoria, se dibuja sobre un canvas virtual y se exporta como JPG con un nivel de calidad óptimo. Las zonas transparentes del PNG original son sustituidas por un fondo blanco sólido, ya que el formato JPG no soporta el canal alfa.',
  },
  {
    type: 'tip',
    content:
      'Para imágenes con texto o logotipos que requieran fondo transparente, considera usar el formato WebP en lugar de JPG. WebP ofrece compresión similar pero mantiene la transparencia.',
  },
  {
    type: 'stats',
    content:
      'El formato JPG puede reducir el tamaño de una imagen fotográfica entre un 70% y un 90% comparado con PNG, dependiendo de la complejidad de la imagen y los ajustes de calidad aplicados.',
  },
  {
    type: 'paragraph',
    content:
      'Casos de uso típicos para convertir PNG a JPG incluyen: preparar imágenes para envío por correo electrónico donde el tamaño importa, optimizar fotografías de productos para tiendas online, reducir el peso de capturas de pantalla antes de compartirlas, y comprimir imágenes para que carguen más rápido en páginas web.',
  },
  {
    type: 'paragraph',
    content:
      'La privacidad es una prioridad en nuestra herramienta. A diferencia de convertidores online que suben tus archivos a servidores remotos, nuestro convertidor procesa todo localmente en tu dispositivo. Tus imágenes nunca abandonan tu ordenador, lo que es especialmente importante cuando se trata de documentos corporativos, fotografías personales o cualquier material sensible.',
  },
  {
    type: 'summary',
    content:
      'Convierte PNG a JPG de forma instantánea, gratuita y privada directamente en tu navegador. Sin registros, sin límites y sin comprometer la seguridad de tus archivos.',
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

export const content: PngAJpgLocaleContent = {
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
