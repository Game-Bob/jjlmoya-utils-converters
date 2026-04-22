import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convertidor-bmp-a-webp';
const title = 'Convertir BMP a WebP Gratis';
const description =
  'Convierte imágenes BMP a WebP sin conexión. Reduce archivos enormes a kilobytes. Sin subir archivos. Gratis, offline y completamente privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos BMP...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué mis archivos BMP ocupan 10 veces más y qué gano al tenerlos en WebP?',
    answer:
      'El BMP guarda mapas de píxeles sin comprimir. WebP usa compresión matemática para bajar enormes BMPs a menos de un megabyte manteniendo la imagen sumamente reconocible.',
  },
  {
    question: '¿Tengo que registrar una cuenta?',
    answer:
      'No exigimos correo y tu material permanecerá aislado, puesto que el procesamiento lo realiza el Javascript del navegador instalado en tu PC, sin envío remoto.',
  },
  {
    question: '¿Puedo arrastrar muchos archivos simultáneamente?',
    answer:
      'Sí, puedes arrastrar 50 o 100 archivos si tu hardware aguanta procesar todos sin hacer colas.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identificar Archivos Brutos',
    text: 'Sitúa tus colecciones de mapa de bit en ventanas listas al traslado.',
  },
  {
    name: 'Activación Nativa del Lote',
    text: 'Proyecta o arrastra todos los archivos a nuestra mesa digital.',
  },
  {
    name: 'Evacuación del Lote WebP',
    text: 'Pulsa los resultados y obtendrás por separado la imagen en disco de micro-pesos o como comprimidos inmediatos.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor BMP a WebP: La Reducción de Tamaño Más Extrema Posible',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Convertir BMP a WebP es, sin duda, la transformación más espectacular que puedes hacer con una imagen. El formato BMP (Bitmap) es el formato más antiguo y pesado del ecosistema digital: almacena cada píxel sin ningún tipo de compresión, resultando en archivos que pueden pesar 20, 50 o incluso 100 veces más que su equivalente moderno. WebP, desarrollado por Google, aplica algoritmos de compresión de última generación que reducen el tamaño al mínimo posible manteniendo una calidad visual excelente.',
  },
  {
    type: 'title',
    text: '¿Por qué BMP es tan pesado y WebP tan eficiente?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El formato BMP nació en los años 80 para Windows, cuando el espacio en disco era enorme y la compresión no era una prioridad. Cada píxel se guarda tal cual, sin ningún algoritmo de reducción: una imagen de 1920x1080 píxeles en BMP ocupa exactamente 5,93 MB, independientemente de su contenido. Esto lo hace ideal para capturas de pantalla internas o edición sin pérdidas, pero completamente inapropiado para la web o el almacenamiento moderno.',
  },
  {
    type: 'paragraph',
    html: 'WebP utiliza compresión predictiva basada en bloques y transformadas DCT (la misma tecnología que subyace al video digital), logrando que la misma imagen de 1920x1080 ocupe entre 80 KB y 300 KB. Eso supone una reducción del 95 al 99% respecto al BMP original. Además, WebP soporta canal alfa para transparencias y compresión tanto con pérdida como sin pérdida, ofreciendo versatilidad total.',
  },
  {
    type: 'title',
    text: 'Comparativa: Convertidores Cloud vs Nuestra Arquitectura Local',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertidores Cloud',
        description: 'Herramientas que suben tus archivos BMP a un servidor remoto para procesarlos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Subir un BMP de 20 MB lleva minutos con conexión lenta',
          'Tus imágenes quedan almacenadas en servidores ajenos',
          'Límites de tamaño que excluyen archivos BMP grandes',
          'Publicidad invasiva y rastreadores de datos',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu navegador mediante tecnología Vanilla JS y Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Conversión instantánea sin transferencia de red',
          'Privacidad absoluta — 0 bytes salen de tu dispositivo',
          'Sin límites de tamaño por archivo',
          'Funciona sin conexión a internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión técnica en el navegador',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Al arrastrar un archivo BMP, el navegador lo lee como un Blob binario en memoria RAM. Este Blob se carga en un elemento <code>Image</code> de JavaScript, que lo decodifica usando el motor de imágenes nativo. A continuación, la imagen se pinta sobre un elemento <code>Canvas</code> HTML5 invisible. El Canvas actúa como lienzo virtual donde la imagen existe en su forma píxel a píxel.',
  },
  {
    type: 'paragraph',
    html: 'Una vez pintada en el Canvas, ejecutamos el método <code>toBlob()</code> con el tipo MIME <code>image/webp</code> y el nivel de calidad deseado. El navegador aplica internamente el algoritmo de compresión WebP y genera un nuevo Blob con el archivo resultante. Este Blob se convierte en una URL de descarga directa que tu navegador guarda en disco. En ningún momento se establece ninguna conexión de red.',
  },
  {
    type: 'tip',
    title: 'El mayor salto de compresión posible',
    html: 'La conversión de BMP a WebP puede lograr una reducción del 99% en el tamaño del archivo. Un BMP de 20 MB puede convertirse en un WebP de apenas 200 KB con calidad visual prácticamente idéntica. Es la transformación más eficiente disponible entre formatos de imagen estándar.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad de WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Publicación web — Chrome, Firefox, Safari, Edge y todos los navegadores modernos.',
      'Redes sociales — Instagram, Twitter, Facebook aceptan WebP de forma nativa.',
      'Aplicaciones web y PWA — tamaños mínimos para carga instantánea.',
      'Archivado eficiente — sustituye colecciones de BMPs heredados ahorrando gigabytes.',
      'Email marketing — imágenes ligeras que cargan rápido en cualquier cliente de correo moderno.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: La conversión más impactante en un solo clic',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Si tienes archivos BMP heredados de Windows, capturas de pantalla sin comprimir o imágenes de herramientas antiguas, convertirlos a WebP es la acción más impactante que puedes tomar para optimizar tu almacenamiento y rendimiento web. Con nuestra herramienta, la conversión es instantánea, privada y sin límites — exactamente como debería ser.',
  },
];


export const content: BmpAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'es', faq, howTo }),
};
