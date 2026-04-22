import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'convertidor-avif-a-png';
const title = 'Convertir AVIF a PNG Online';
const description =
  'Convierte imágenes AVIF a PNG preservando transparencias. Sin subir archivos. Procesado local en tu navegador. Gratis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos AVIF...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué debería convertir AVIF a PNG?',
    answer:
      'AVIF es genial para compresión, pero su compatibilidad es limitada en navegadores antiguos y editores clásicos. Al convertir de AVIF a PNG, te aseguras de que tu archivo mantendrá la transparencia original y todas las aplicaciones podrán abrirlo.',
  },
  {
    question: '¿Se mantienen las transparencias del archivo AVIF original?',
    answer:
      'Sí. A diferencia de JPG que elimina el fondo transparente, al exportar a PNG nuestro convertidor mantiene intacto el canal alfa.',
  },
  {
    question: '¿Es verdad que no suben mis imágenes a internet?',
    answer:
      'Absolutamente cierto. Nuestro convertidor se ejecuta de manera 100% local en tu dispositivo utilizando el motor interno de JavaScript.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Añade tus archivos AVIF',
    text: 'Puedes arrastrarlos directamente al área delimitada o usar el botón para explorar las carpetas de tu equipo.',
  },
  {
    name: 'Procesamiento inmediato',
    text: 'Deja que el procesador HTML5 renderice la imagen; el formato cambiará a PNG de forma automática en microsegundos.',
  },
  {
    name: 'Hazte con tus PNGs',
    text: 'Descarga las imágenes convertidas una a una o baja un bloque completo mediante el botón ZIP.',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor AVIF a PNG: De la Entrega Web a la Edición Profesional',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF es el formato ideal para servir imágenes en la web — pequeño, eficiente y de alta calidad. Pero cuando llega el momento de editar, retocar o trabajar con esas imágenes en herramientas de diseño, el AVIF se convierte en un obstáculo. Figma, Photoshop, Illustrator, Sketch y prácticamente cualquier herramienta de diseño profesional esperan recibir PNG para el trabajo con transparencias y edición sin pérdida. Convertir AVIF a PNG es el puente entre el mundo de la entrega web y el de la edición creativa.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Entrega vs Edición',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF destaca como formato de entrega: archivos pequeños, carga rápida, soporte de canal alfa y calidad visual excepcional. Sin embargo, su ecosistema de herramientas es limitado. La mayoría de software de diseño no puede importar AVIF directamente, lo que interrumpe los flujos de trabajo creativos. Intentar abrir un AVIF en Figma o importarlo como capa en Photoshop simplemente no funciona.',
  },
  {
    type: 'paragraph',
    html: 'PNG es el formato nativo del diseño digital. Con compresión sin pérdida, soporte completo de canal alfa y compatibilidad universal con todas las herramientas creativas, PNG es el formato de trabajo por excelencia. Cuando necesitas escalar, retocar, exportar a múltiples formatos o trabajar en capas, PNG garantiza que no perderás ningún detalle ni pixel en el proceso.',
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
        description: 'Herramientas que suben tus archivos AVIF a un servidor remoto para procesarlos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tus imágenes de diseño viajan a servidores de terceros',
          'Tiempo de espera por latencia de red',
          'Posible pérdida o alteración del canal alfa',
          'Límites de tamaño que complican la conversión por lotes',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu navegador mediante tecnología Vanilla JS y Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Canal alfa preservado con fidelidad perfecta',
          'Conversión instantánea sin transferencia de datos',
          'Sin límites de archivos, tamaño ni lotes',
          'Privacidad total para activos de diseño propietarios',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión técnica con transparencias',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Los navegadores modernos decodifican AVIF de forma nativa gracias a sus motores AV1 integrados. Al cargar el archivo, el navegador lo decodifica en memoria preservando toda la información del canal alfa. La imagen decodificada — incluyendo sus transparencias — se dibuja sobre un elemento <code>Canvas</code> HTML5 con el modo de composición correcto para preservar el canal alfa.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de la exportación a JPG (que destruye las transparencias rellenando con blanco), la exportación a PNG mediante <code>toBlob(\'image/png\')</code> preserva íntegramente el canal alfa. El resultado es un PNG con compresión sin pérdida que mantiene cada pixel, cada semitransparencia y cada detalle del AVIF original.',
  },
  {
    type: 'tip',
    title: 'El paso previo obligatorio para cualquier herramienta de diseño',
    html: 'Convierte tus AVIF a PNG antes de importarlos a Figma, Photoshop, Illustrator o cualquier herramienta de diseño. Estas aplicaciones no leen AVIF directamente, pero PNG funciona de forma nativa en todas ellas, preservando transparencias y calidad perfectamente.',
  },
  {
    type: 'title',
    text: 'Casos de uso: cuándo necesitas AVIF convertido a PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importar en Figma, Sketch, Adobe XD u otras herramientas de diseño UI.',
      'Editar como capa en Photoshop, Affinity Photo o GIMP preservando transparencias.',
      'Usar como fuente para la generación de iconos o sprites.',
      'Enviar a clientes o colaboradores que trabajan con software de diseño estándar.',
      'Archivar imágenes con transparencias en formato de edición sin pérdida.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: El puente entre la web y el diseño',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF y PNG son compañeros perfectos en un flujo de trabajo moderno: AVIF para la entrega eficiente en web, PNG para la edición y colaboración en herramientas de diseño. Con nuestro convertidor, el paso de uno a otro es instantáneo, privado y preserva cada detalle — exactamente lo que necesitas cuando tus activos visuales importan.',
  },
];


export const content: AvifAPngLocaleContent = {
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
