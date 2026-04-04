import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'convertidor-bmp-a-png';
const title = 'Convertidor de BMP a PNG | Formato Sin Pérdida Local';
const description =
  'Convierte imágenes BMP a PNG sin pérdida de calidad. Compresión moderna sin artefactos. Sin subir archivos. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos BMP...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: '¿Cuál es la principal diferencia entre BMP y PNG?',
    answer:
      'Tanto BMP como PNG son formatos sin pérdida. La diferencia radica en la optimización: PNG entiende de algoritmos de compresión modernos para guardar la misma imagen ocupando 5 o 10 veces menos memoria que el BMP.',
  },
  {
    question: '¿Es la conversión realmente privada?',
    answer:
      'Sí. Toda la red fotográfica la hace tu ordenador. Absolutamente nadie accede a tus archivos en tránsito local.',
  },
  {
    question: '¿Por qué PNG sobre JPEG en este caso?',
    answer:
      'Si tienes un archivo BMP, es porque la imagen tiene colores precisos. Pasar un BMP al estándar destructivo JPG ensuciaría tus colores netos. El PNG protege esa fidelidad.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Acopla tu Fotografía',
    text: 'Mueve tranquilamente los archivos de origen BMP a nuestra zona para soltar elementos web.',
  },
  {
    name: 'Traduce Sin Transmisión de Red',
    text: 'Percibe en apenas un segundo el procesado limpio hecho localmente por tu JS de HTML5.',
  },
  {
    name: 'Consigue PNGs Puros',
    text: 'Baja las réplicas en PNG individualmente o mediante un paquete comprimido.',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de BMP a PNG: El Reemplazo Sin Pérdida del Formato BMP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El BMP es un formato sin compresión que ocupa enormes cantidades de espacio sin ningún beneficio técnico frente al PNG. Ambos son formatos sin pérdida: guardan cada píxel con exactitud absoluta. Pero el PNG añade compresión lossless mediante el algoritmo Deflate, lo que reduce el tamaño del archivo entre 3 y 5 veces sin sacrificar ni un solo bit de información visual. El PNG es, en esencia, lo que el BMP siempre quiso ser.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: misma calidad, tamaño radicalmente diferente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La diferencia fundamental entre BMP y PNG no está en la calidad de imagen — ambos son sin pérdida — sino en la eficiencia de almacenamiento. El BMP almacena píxeles en bruto: sin compresión, sin optimización, sin consideración por el espacio. El PNG analiza los patrones de píxeles repetidos y los codifica de forma compacta mediante Deflate, el mismo algoritmo que usa ZIP.',
  },
  {
    type: 'paragraph',
    html: 'Además de la compresión superior, el PNG añade una característica que el BMP nunca tuvo: canal alfa completo para transparencias. Capturas de pantalla, gráficos de interfaz, logotipos, diagramas técnicos: todos estos tipos de imágenes se benefician enormemente de la conversión a PNG, que mantiene cada valor de color exacto mientras reduce el peso del archivo a una fracción del original.',
  },
  {
    type: 'title',
    text: 'Comparativa de Arquitectura: Local vs Nube',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertidores Cloud',
        description: 'Servicios que procesan tus archivos BMP en servidores de terceros.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tus imágenes de trabajo viajan por internet',
          'Tiempo de espera proporcional al tamaño del BMP',
          'Límites de tamaño en planes gratuitos',
          'Riesgo de análisis o retención de tus archivos',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'El BMP se procesa localmente, nunca sale de tu dispositivo',
          'Conversión instantánea en milisegundos',
          'Sin límites de tamaño ni de número de archivos',
          'Privacidad total: 0 bytes enviados al exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión local de BMP a PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El proceso utiliza el Canvas API de HTML5. El archivo BMP se lee con la API <code>FileReader</code> del navegador y se decodifica como un Blob en memoria. Ese Blob se dibuja sobre un canvas HTML5 invisible. A continuación, el método <code>toDataURL(\'image/png\')</code> aplica el algoritmo de compresión PNG nativo del navegador y genera el archivo resultante.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de la conversión a JPG, la conversión a PNG es completamente lossless: cada valor de color del BMP original se preserva exactamente en el PNG resultante. No hay artefactos, no hay suavizado de bordes, no hay pérdida de información. El archivo final es visualmente idéntico al BMP pero ocupa entre 3 y 5 veces menos espacio en disco.',
  },
  {
    type: 'tip',
    title: 'PNG es el estándar moderno donde BMP se usaba antes',
    html: 'Si trabajas con software antiguo que exporta BMP (maquinaria industrial, sistemas de control, software de diagnóstico médico), convertir a PNG es la mejor decisión. PNG es compatible con absolutamente todos los programas modernos, mantiene la fidelidad de color perfecta y ocupa hasta 5 veces menos espacio. Es la migración más sencilla y segura posible.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad del PNG resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Capturas de pantalla y gráficos de interfaz con colores exactos preservados.',
      'Imágenes de documentación técnica y diagramas de software.',
      'Exportaciones de CAD, sistemas industriales y software legacy.',
      'Logotipos y elementos de identidad visual con transparencia añadida.',
      'Compatible con Adobe Photoshop, GIMP, Figma y todos los editores modernos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: el PNG es lo que el BMP siempre debió ser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir BMP a PNG es la modernización más natural de un archivo de imagen: misma calidad sin pérdida, mayor compatibilidad, soporte de transparencia y entre 3 y 5 veces menos peso. Nuestra herramienta realiza esta conversión en milisegundos, directamente en tu navegador, sin subir ningún archivo a ningún servidor.',
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

export const content: BmpAPngLocaleContent = {
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
