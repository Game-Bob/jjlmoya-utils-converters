import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'convertidor-bmp-a-jpg';
const title = 'Convertir BMP a JPG Online';
const description =
  'Convierte imágenes BMP a JPG en tu navegador. Reduce el tamaño drásticamente. Sin subir archivos a servidores. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos BMP...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir BMP a JPG?',
    answer:
      'El formato BMP no comprime los datos, resultando en archivos extremadamente grandes. El formato JPG comprime la imagen drásticamente manteniendo una calidad visual excelente para web y distribución.',
  },
  {
    question: '¿Es seguro convertir mis imágenes aquí?',
    answer:
      '100% seguro. Tu privacidad está garantizada ya que el procesamiento se realiza íntegramente de forma local usando el motor de tu propio navegador web.',
  },
  {
    question: '¿Cómo funciona la herramienta?',
    answer:
      'Simplemente arrastra tus archivos BMP, y nuestro script en JavaScript leerá los píxeles para re-dibujarlos sobre un canvas HTML y exportarlos en codificación JPEG al instante.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Sube tus archivos BMP',
    text: 'Arrastra y suelta o selecciona tus imágenes en formato BMP en la zona designada.',
  },
  {
    name: 'Procesamiento Automático',
    text: 'La herramienta rasteriza la imagen y aplica el nivel óptimo de compresión en formato JPG en milisegundos.',
  },
  {
    name: 'Descarga Individual o en Lote',
    text: 'Obtén tus nuevas imágenes optimizadas para web ya sea una a una o descargando un archivo ZIP.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de BMP a JPG: Reduce un Archivo Gigante en Segundos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El BMP (Bitmap) es el formato más ingenuo de la informática: almacena cada píxel tal cual, sin ningún tipo de compresión. Una captura de pantalla de 1920x1080 en BMP pesa aproximadamente 6 MB. Esa misma imagen en JPG ocupa entre 200 y 400 KB con una calidad visualmente indistinguible. La diferencia es abismal, y nuestra herramienta te permite realizar esa conversión en segundos, directamente en tu navegador, sin subir nada a ningún servidor.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: datos en bruto contra compresión inteligente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El formato BMP fue creado por Microsoft en la era de Windows 3.1. Su filosofía es la más simple posible: cada píxel ocupa 3 bytes (rojo, verde, azul), y los píxeles se almacenan en fila sin ningún procesamiento adicional. Esta ausencia total de compresión hace que los archivos BMP sean entre 50 y 100 veces más grandes que su equivalente en JPG, para fotografías y capturas de pantalla reales.',
  },
  {
    type: 'paragraph',
    html: 'El JPG, por contraste, utiliza la Transformada Discreta del Coseno (DCT) para analizar cada bloque de 8x8 píxeles y eliminar la información de alta frecuencia que el ojo humano apenas percibe. El resultado es una imagen que se ve idéntica pero que pesa una fracción del original. Para archivos BMP provenientes de capturas de pantalla, escáneres o aplicaciones legacy de Windows, la conversión a JPG es la acción de optimización más impactante posible.',
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
        description: 'Servicios que suben tus archivos BMP a servidores remotos para procesarlos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Subir un BMP de 10 MB tarda tiempo en conexiones lentas',
          'Tus capturas e imágenes confidenciales viajan por internet',
          'Límites de tamaño frecuentes en planes gratuitos',
          'Latencia doble: subida y bajada del archivo convertido',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'El BMP se procesa en tu RAM, no viaja a ningún servidor',
          'Conversión instantánea sin esperas',
          'Sin límites de tamaño por archivo',
          'Privacidad total: 0 bytes enviados al exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión técnica de BMP a JPG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Cuando arrastras un archivo BMP a la herramienta, el navegador lo lee con la API <code>FileReader</code> y lo decodifica como un objeto Blob en memoria. Ese Blob se renderiza sobre un canvas HTML5 invisible. A continuación, el método <code>toDataURL(\'image/jpeg\')</code> aplica el algoritmo de compresión JPEG sobre los datos del canvas y genera el archivo JPG resultante.',
  },
  {
    type: 'paragraph',
    html: 'Dado que el BMP no tiene canal alfa (no soporta transparencias), la conversión a JPG es directa sin necesidad de composición con fondo blanco. El proceso completo ocurre en la memoria RAM de tu ordenador, sin ninguna transmisión de datos a través de la red, en milisegundos incluso para archivos de varios megabytes.',
  },
  {
    type: 'tip',
    title: 'Los BMP de Windows pueden ser enormes',
    html: 'Los archivos BMP generados por capturas de pantalla (tecla Impr Pant en Windows) o por aplicaciones legacy como Paint pueden pesar entre 50 y 100 veces más que un JPG equivalente. Un único BMP de resolución Full HD puede superar los 6 MB. Convertirlos a JPG antes de enviarlos por email o subirlos a cualquier plataforma es una práctica esencial.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad del JPG resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optimización de capturas de pantalla de Windows para enviar por email.',
      'Conversión de imágenes exportadas por software legacy (CAD, escáneres antiguos).',
      'Reducción de peso para subir imágenes a plataformas web y redes sociales.',
      'Preparación de archivos para inserción en documentos Word, PowerPoint o PDF.',
      'Compatibilidad universal con todos los visores y navegadores modernos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: 10 MB de BMP, 500 KB de JPG, misma imagen',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversión de BMP a JPG es uno de los ejercicios de optimización más rentables en el manejo de archivos de imagen. Nuestra herramienta realiza esa transformación en segundos, sin subir ningún archivo, sin crear ninguna cuenta, directamente en tu navegador. El resultado es un JPG de alta calidad, universalmente compatible y con un peso hasta 97% inferior al BMP original.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
