import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertidor-webp-a-jpg';
const title = 'Convertir WebP a JPG Online y Gratis';
const description =
  'Convierte imágenes WebP a JPG sin subir archivos. Procesamiento local 100% privado. Los fondos transparentes se reemplazan automáticamente por blanco.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos WebP...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: '¿Puedo subir imágenes privadas de forma segura?',
    answer:
      'Sí. No existe un servidor de subida. Tu navegador procesa el WebP en tu equipo y genera el JPG para descargar. Nadie más lo ve.',
  },
  {
    question: '¿Qué pasa con el fondo de mi WebP si es transparente?',
    answer:
      'Como JPG no admite transparencias, el conversor rellenará automáticamente las zonas transparentes con un fondo blanco sólido.',
  },
  {
    question: '¿Hay límite de conversiones o de tamaño de archivo?',
    answer:
      'No imponemos restricciones. Puedes convertir cientos de imágenes siempre que tu equipo tenga potencia y RAM suficiente.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra tus archivos',
    text: 'Suelta tus archivos WebP modernos en la zona de subida o selecciónalos con el explorador.',
  },
  {
    name: 'Conversión Local',
    text: 'Observa cómo el motor local aplica fondo e interpreta cada píxel al formato JPG universal.',
  },
  {
    name: 'Obtén los resultados',
    text: 'Descarga individualmente o usa el paquete ZIP para consolidar todas tus nuevas fotografías.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a JPG: Compatibilidad Universal sin Comprometer la Privacidad',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> es la apuesta de Google por la eficiencia: imágenes más ligeras con una calidad comparable al JPG tradicional. Sin embargo, su compatibilidad sigue siendo un problema en el mundo real. Clientes de correo como Outlook, software de diseño antiguo, apps de mensajería y flujos de trabajo corporativos siguen dependiendo del ubicuo <strong>JPG</strong>. Convertir WebP a JPG es el puente entre la web moderna y el mundo real.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: ¿Cuándo usar cada formato?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP brilla en entornos controlados: sitios web modernos en Chrome, Edge o Firefox donde se puede garantizar la compatibilidad del navegador. Su compresión superior reduce el peso de los archivos entre un 25-35% respecto a un JPG equivalente, mejorando tiempos de carga y métricas Core Web Vitals. Es el formato ideal cuando tú controlas el entorno de visualización.',
  },
  {
    type: 'paragraph',
    html: 'JPG, por otro lado, funciona en <em>absolutamente todos los contextos</em>: adjuntos de email, presentaciones PowerPoint, documentos Word, impresoras domésticas, aplicaciones de edición legacy y plataformas sociales sin excepción. Si necesitas que alguien abra tu imagen sin fricciones técnicas, JPG es la respuesta correcta.',
  },
  {
    type: 'title',
    text: 'Comparativa: Conversión Local vs Nube',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertidores Cloud',
        description: 'Herramientas que suben tus archivos a un servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tus fotos viajan por internet a servidores desconocidos',
          'Tiempo de espera por la subida y el procesado remoto',
          'Límites diarios de tamaño y número de conversiones gratis',
          'Riesgo real de retención de datos en servidores de terceros',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Cero bytes enviados: todo sucede en tu memoria RAM',
          'Velocidad instantánea sin depender de tu conexión',
          'Sin límites de tamaño de archivo ni cantidad de ficheros',
          'Ideal para fotos personales, médicas o corporativas',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona técnicamente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Al arrastrar un WebP a la herramienta, el navegador lo decodifica de forma nativa usando su motor de renderizado interno. A continuación, el archivo se dibuja sobre un elemento <strong>Canvas HTML5</strong> invisible. Dado que JPG no admite transparencia, el algoritmo rellena previamente el lienzo con un fondo blanco sólido antes de componer la imagen encima.',
  },
  {
    type: 'paragraph',
    html: 'El paso final es la exportación: el método <code>toDataURL(\'image/jpeg\')</code> del Canvas convierte los píxeles del lienzo en un flujo de bytes JPG comprimido de alta calidad. Este flujo se entrega directamente al sistema de descargas del navegador, sin comunicación de red alguna. Todo el proceso toma milisegundos incluso para imágenes de varios megapíxeles.',
  },
  {
    type: 'tip',
    title: 'Consejo de compatibilidad',
    html: 'Cuando compartas fotos con usuarios no técnicos o las envíes por email, usa siempre JPG: cero problemas de compatibilidad en cualquier cliente de correo, sistema operativo o dispositivo, sin excepciones ni sorpresas desagradables.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Adjuntar fotos en emails desde Outlook, Gmail o Apple Mail.',
      'Insertar imágenes en documentos Word, Excel o presentaciones PowerPoint.',
      'Publicar en redes sociales que rechazan el formato WebP.',
      'Compartir por WhatsApp o apps de mensajería con soporte limitado.',
      'Imprimir fotografías en servicios de revelado que solo aceptan JPG o PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP es el futuro de las imágenes web, pero JPG sigue siendo el rey de la compatibilidad universal. Esta herramienta te permite cruzar ese puente en segundos, de forma totalmente privada y sin instalar nada. Tu imagen nunca sale de tu equipo.',
  },
];

export const content: WebpAJpgLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'es',
    faq,
    howTo,
  }),
};
