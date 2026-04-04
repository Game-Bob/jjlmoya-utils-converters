import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAPngLocaleContent } from '../index';

const slug = 'convertidor-gif-a-png';
const title = 'Convertir GIF a PNG Online | Extrae un fotograma estático sin pérdida';
const description =
  'Extrae el primer fotograma de tus GIF y conviértelo a PNG preservando transparencias. Sin servidor. Procesado local. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos GIF...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir un formato animado como GIF a un formato estático como PNG?',
    answer:
      'Muchas redes sociales o avatares no admiten fotografías que cambian. Extraer el primer cuadro de un GIF complejo hacia un PNG de alta calidad soluciona las barreras y reduce pesos inservibles.',
  },
  {
    question: '¿Se conservan las transparencias del viejo GIF en el PNG resultante?',
    answer:
      'Sí, a diferencia del JPG, el formato PNG mantiene el canal alfa. Si el GIF tenía un fondo transparente, el PNG lo conservará con bordes nítidos.',
  },
  {
    question: '¿Mantienes mis imágenes en los servidores un tiempo tras el procesamiento?',
    answer:
      'Ningún servidor retiene tu GIF; toda la extracción es local debido al Canvas Web API. Es el procesador de tu PC quien decodifica de forma segura tu archivo sin contacto con red alguna.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Acércanos la Animación',
    text: 'Pasa los pesados archivos GIF en el recuadro de inserción.',
  },
  {
    name: 'Foto Extraída Perfecta',
    text: 'El sistema paralizará al origen exacto del movimiento, sacando la copia impecable en milisegundos.',
  },
  {
    name: 'Guarda tu Estático',
    text: 'Almacena masivamente en ZIP todo aquel volumen de avatares GIFs estáticos convertidos a PNG.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor GIF a PNG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'Convertir GIF a PNG tiene una ventaja significativa sobre convertir a JPG: la preservación de la transparencia. El formato PNG, al igual que algunos GIFs, soporta el canal alfa. Si tu GIF tiene un fondo transparente, el PNG resultante lo conservará con total fidelidad. Esto es especialmente importante para logos, avatares, iconos y cualquier gráfico que se vaya a usar sobre fondos de diferentes colores.',
  },
  {
    type: 'paragraph',
    html:
      'Otra ventaja del PNG sobre el JPG para este tipo de conversión es la calidad sin pérdida. PNG utiliza compresión sin pérdida, lo que significa que la imagen extraída del GIF mantendrá todos sus detalles sin los artefactos de compresión que introduciría el formato JPG.',
  },
  {
    type: 'paragraph',
    html:
      'La conversión se realiza íntegramente en el navegador. El GIF se carga en memoria, se renderiza el primer fotograma en un canvas HTML5 y se exporta como PNG. No se establece ninguna conexión de red durante todo el proceso.',
  },
  {
    type: 'tip',
    html:
      'Si tienes un GIF de avatar para Discord, Telegram u otras plataformas y necesitas la versión estática en PNG, este convertidor es la herramienta perfecta para obtenerla en segundos.',
  },
  {
    type: 'paragraph',
    html:
      'Un GIF animado de 500 KB puede producir un PNG del primer fotograma de entre 50 KB y 200 KB, dependiendo de la complejidad y colores de la imagen. Si tiene transparencias, el PNG las preservará perfectamente.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte GIF a PNG preservando transparencias y sin pérdida de calidad. Extracción del primer fotograma de forma gratuita, privada y local en tu navegador.',
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

export const content: GifAPngLocaleContent = {
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
