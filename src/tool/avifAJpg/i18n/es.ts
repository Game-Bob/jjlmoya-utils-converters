import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convertidor-avif-a-jpg';
const title = 'Convertir AVIF a JPG Online';
const description =
  'Convierte imágenes AVIF a JPG en tu navegador. Sin servidor. Procesamiento local 100% privado. Gratis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos AVIF...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir AVIF a JPG?',
    answer:
      'El formato AVIF ofrece una compresión superior, pero no todos los programas o visores lo soportan. Convertirlo a JPG asegura que la imagen podrá ser vista en el 100% de los dispositivos del mundo.',
  },
  {
    question: '¿Cómo protegemos tus imágenes AVIF?',
    answer:
      'Tus fotos jamás salen de tu móvil o PC. Todo el proceso de dibujo y codificación a JPEG se ejecuta en el entorno de Javascript de tu navegador.',
  },
  {
    question: '¿Perderé calidad al pasar de AVIF a JPG?',
    answer:
      'Nuestra herramienta procesa los píxeles con una calidad estándar de Canvas (0.9 a 0.95), logrando que los cambios apenas sean perceptibles.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra archivos o haz clic',
    text: 'Mueve todas las fotografías AVIF que quieras convertir al cuadro de procesamiento delimitado.',
  },
  {
    name: 'Transformación Instantánea',
    text: 'Observa en menos de un segundo cómo se recodifica el AVIF a JPG eliminando posibles canales alfa por un fondo sólido.',
  },
  {
    name: 'Guarda o Descarga el ZIP',
    text: 'Baja tus nuevas imágenes JPG de manera individual o pulsando Descargar Todo si procesaste en lote.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor AVIF a JPG: Compatibilidad Universal para Tus Imágenes Modernas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) es el formato de imagen más eficiente disponible hoy en día. Desarrollado por la Alliance for Open Media y basado en el códec de video AV1, ofrece una compresión un 50% superior a JPG a la misma calidad visual. Sin embargo, esta ventaja técnica tiene un precio: AVIF no está soportado por Photoshop, Lightroom, el Visor de Fotos de Windows, ni por la mayoría de herramientas de edición y visualización tradicionales. Convertir a JPG resuelve este problema de raíz.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Eficiencia frente a Compatibilidad Universal',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF comprime de forma extraordinaria: una foto de alta resolución que en JPG ocupa 4 MB puede pesar apenas 2 MB en AVIF manteniendo la misma calidad percibida. Esto lo hace perfecto para la entrega web donde el rendimiento de carga es crítico. Sin embargo, fuera del navegador, AVIF es prácticamente invisible: ni Windows Explorer lo previsualiza, ni las cámaras lo exportan, ni los diseñadores lo reciben con agrado en sus flujos de trabajo.',
  },
  {
    type: 'paragraph',
    html: 'El JPG lleva más de 30 años siendo el estándar universal de la fotografía digital. Está soportado por el 100% de los dispositivos, sistemas operativos, aplicaciones de oficina, redes sociales, impresoras y cualquier software que haya visto una imagen alguna vez. Cuando necesitas compartir, imprimir, editar o enviar por email, JPG es la garantía de que todo funcionará sin fricción.',
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
          'Tus fotos privadas viajan por internet a servidores externos',
          'Tiempos de espera por subida y bajada del archivo',
          'Límites de tamaño y número de conversiones gratuitas',
          'Riesgo de retención de imágenes en servidores de terceros',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu navegador mediante tecnología Vanilla JS y Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tus imágenes nunca salen de tu dispositivo',
          'Conversión instantánea sin latencia de red',
          'Sin límites de archivos ni de tamaño',
          'Apto para imágenes médicas, legales o confidenciales',
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
    html: 'Los navegadores modernos como Chrome, Firefox y Edge incluyen soporte nativo para AVIF gracias a sus decodificadores integrados de AV1. Cuando cargas un archivo AVIF, el navegador lo decodifica en memoria y lo convierte a una representación de mapa de bits en RAM. Esta representación se pinta sobre un elemento <code>Canvas</code> HTML5 invisible.',
  },
  {
    type: 'paragraph',
    html: 'A continuación, el Canvas exporta la imagen usando <code>toBlob(\'image/jpeg\', quality)</code>, aplicando la compresión JPG estándar. Dado que JPG no soporta transparencias, cualquier canal alfa presente en el AVIF se rellena con fondo blanco antes de la exportación. El resultado es un archivo JPG de alta calidad listo para descarga directa, sin que ningún byte haya salido de tu navegador.',
  },
  {
    type: 'tip',
    title: 'El equilibrio perfecto entre compresión y compatibilidad',
    html: 'AVIF es un 50% más pequeño que JPG a igual calidad — pero JPG tiene compatibilidad del 100% con cualquier software. Si recibes imágenes AVIF del servidor y necesitas editarlas, enviarlas por email o abrirlas en herramientas de escritorio, conviértelas a JPG primero.',
  },
  {
    type: 'title',
    text: 'Casos de uso: cuándo convertir AVIF a JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Editar en Photoshop, Lightroom, GIMP u otro software de escritorio.',
      'Compartir imágenes con usuarios en dispositivos o sistemas operativos antiguos.',
      'Adjuntar en emails para garantizar visualización en cualquier cliente de correo.',
      'Publicar en plataformas que no aceptan AVIF como formato de subida.',
      'Imprimir: los servicios de impresión profesional trabajan con JPG de forma nativa.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: La compatibilidad universal en un solo paso',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF es el futuro de la compresión de imágenes, pero el presente exige compatibilidad. Nuestro convertidor te permite obtener lo mejor de ambos mundos: recibe y almacena imágenes en AVIF para máxima eficiencia, y conviértelas a JPG al instante cuando necesites que funcionen en cualquier contexto. Todo de forma privada, gratuita y sin límites.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
