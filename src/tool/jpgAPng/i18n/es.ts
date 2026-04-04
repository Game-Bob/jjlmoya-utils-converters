import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'convertidor-jpg-a-png';
const title = 'Convertir JPG a PNG Online y Gratis - Privado';
const description =
  'Convierte imágenes JPG a PNG en tu navegador sin subir archivos. Conversión lossless, gratuita y totalmente privada.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos JPG...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: '¿Cuándo debería usar JPG a PNG?',
    answer:
      'Siempre que vayas a editar texto o logos dentro de una fotografía. Si guardas un JPG varias veces, este se ensucia. El PNG congela la compresión.',
  },
  {
    question: '¿El archivo PNG tendrá el fondo transparente de inmediato?',
    answer:
      'No. El JPG original venía plano y sin ese tipo de canal estructural. El PNG resultante preparará ese contenedor, luego deberás aislar la pieza usando Photoshop u otro editor.',
  },
  {
    question: '¿Tiene esta web límites de tráfico?',
    answer:
      'Gracias a tecnologías Edge sin dependencias cloud, el peso de tu conversión no supone límites porque usa íntegramente tu terminal informático o móvil.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Arrastra JPG al panel',
    text: 'Sube imágenes estáticas en formato JPG usando ratón táctil o selector del ordenador.',
  },
  {
    name: 'Ejecución Lossless',
    text: 'El software de Vanilla empuja los bits del cuadro hacia un envoltorio sin perdidas nativo de la familia PNG.',
  },
  {
    name: 'Terminar Sesión',
    text: 'Pulsa el panel y tu navegador depositará los activos web descargados en tus Carpetas de Usuario.',
  },
];

const bibliography: JpgAPngLocaleContent['bibliography'] = [
  {
    name: 'The W3C PNG Graphics',
    url: 'https://www.w3.org/Graphics/PNG/',
  },
  {
    name: 'Understanding Digital Image Compression',
    url: 'https://en.wikipedia.org/wiki/Image_compression',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor JPG a PNG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'Convertir JPG a PNG es una operación frecuente en el flujo de trabajo de diseñadores, desarrolladores web y editores de contenido. El formato JPG, aunque eficiente para fotografías, aplica un algoritmo de compresión con pérdida que introduce artefactos visuales cada vez que se vuelve a guardar el archivo. El PNG, en cambio, utiliza compresión sin pérdida, lo que significa que la imagen mantiene su fidelidad original sin degradarse con cada guardado.',
  },
  {
    type: 'paragraph',
    html:
      'Una de las principales razones para convertir de JPG a PNG es preparar una imagen para su edición. Cuando se trabaja con texto superpuesto, logotipos o elementos gráficos precisos, el formato PNG evita la acumulación de artefactos JPEG que harían que los bordes del texto se vean borrosos o que los colores planos pierdan definición.',
  },
  {
    type: 'paragraph',
    html:
      'Nuestro convertidor utiliza el Canvas API de HTML5 para realizar la conversión completamente en tu navegador. El archivo JPG se decodifica en memoria, se dibuja en un canvas virtual y se exporta como PNG sin pérdida. Este proceso garantiza que obtienes el mejor resultado posible partiendo del archivo JPG original.',
  },
  {
    type: 'tip',
    html:
      'Recuerda que convertir un JPG a PNG no recupera la calidad perdida por la compresión JPEG original. El PNG simplemente congela la imagen en su estado actual sin introducir más pérdidas.',
  },
  {
    type: 'paragraph',
    html:
      'Los archivos PNG suelen ser entre 2 y 5 veces más grandes que sus equivalentes JPG. Esta diferencia de tamaño es el precio de la compresión sin pérdida y soporte de transparencia.',
  },
  {
    type: 'paragraph',
    html:
      'El proceso de conversión es completamente privado. Nuestro convertidor no envía ningún dato a servidores externos; todo ocurre localmente en tu dispositivo. Puedes convertir imágenes corporativas, fotografías personales o cualquier material sensible sin preocuparte por la privacidad.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte JPG a PNG de forma gratuita, segura y sin límites directamente en tu navegador. Ideal para preparar imágenes para edición o para preservar la calidad en flujos de trabajo que requieren múltiples guardados.',
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

export const content: JpgAPngLocaleContent = {
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
