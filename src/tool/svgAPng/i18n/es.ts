import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'convertidor-svg-a-png';
const title = 'Convertir SVG a PNG Online y Gratis';
const description =
  'Convierte archivos SVG vectoriales a PNG en tu navegador. Salida HD a doble escala. Conserva transparencias. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos SVG...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir archivos SVG a PNG?',
    answer:
      'SVG es un formato vectorial ideal para logos, pero a veces necesitas el formato PNG rasterizado para usarlo en aplicaciones que no soportan vectores, o para compartir por apps de mensajería o redes sociales.',
  },
  {
    question: '¿Puedo elegir el tamaño de salida?',
    answer:
      'Actualmente duplicamos la escala del SVG de origen para que el PNG de salida sea nítido y adecuado para pantallas Retina o 4K.',
  },
  {
    question: '¿Se mantienen las transparencias del SVG?',
    answer:
      'Sí, el PNG resultante conserva el canal alfa del SVG original, manteniendo todos los fondos transparentes intactos.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Inserta tus archivos SVG',
    text: 'Suelta tus archivos SVG o arrástralos directamente a la zona superior.',
  },
  {
    name: 'Generación de PNG HD',
    text: 'En milisegundos nuestro motor local recreará cada vector como una capa de píxeles HD en formato PNG transparente.',
  },
  {
    name: 'Descarga los ficheros',
    text: 'Guarda los PNG generados uno a uno o como paquete ZIP.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor SVG a PNG: Del Vector Infinito al Raster Universal',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El <strong>SVG</strong> (Scalable Vector Graphics) es la elección perfecta para el diseño web: infinitamente escalable, ligero y editable con cualquier editor de código. Pero cuando necesitas usar ese logo o icono en una app móvil, compartirlo en redes sociales o insertarlo en una presentación PowerPoint, te topas con un muro: la mayoría de estas plataformas no soportan SVG. El formato <strong>PNG</strong> es la solución universal: rasterizado, con canal alfa y compatible en absolutamente todos los contextos.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vectores para la Web, Raster para el Mundo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG almacena la imagen como instrucciones matemáticas: una curva de Bézier, un degradado, un polígono. Esto significa que el mismo archivo se ve perfecto a 16px o a 16,000px. Es el formato ideal para tu código web, animaciones CSS y cualquier elemento que deba adaptarse a distintas resoluciones de pantalla sin perder ni un ápice de calidad.',
  },
  {
    type: 'paragraph',
    html: 'PNG almacena la imagen como una rejilla de píxeles con información de color y transparencia para cada uno. Es un formato <strong>lossless</strong> (sin pérdida), lo que significa que la calidad se preserva íntegramente. Una vez que un SVG se convierte a PNG, la resolución es fija. Por eso, elegir el tamaño de exportación correcto es crítico: nuestra herramienta renderiza a doble escala (2x) para asegurar la nitidez en pantallas Retina y 4K.',
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
          'Tu código SVG viaja a servidores externos',
          'Renderizado remoto con calidad inconsistente',
          'Tiempo de espera por la subida y el procesado',
          'Limitaciones en el tamaño del archivo SVG',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tu SVG nunca abandona tu navegador',
          'Renderizado con el motor nativo del navegador para máxima fidelidad',
          'PNG a resolución 2x para pantallas de alta densidad',
          'Transparencia preservada con canal alfa completo',
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
    html: 'El proceso comienza cargando el archivo SVG en un elemento <strong>Image</strong> de JavaScript. Una vez que el motor del navegador ha interpretado y renderizado el XML vectorial, la imagen resultante se dibuja sobre un <strong>Canvas HTML5</strong> cuyas dimensiones son el doble del tamaño original del SVG (escala 2x). Esto produce un PNG con el doble de píxeles por dimensión, ideal para pantallas de alta resolución.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de la conversión a JPG, al exportar a PNG el canvas conserva el canal alfa completo: las zonas transparentes del SVG original se convierten en píxeles totalmente transparentes en el PNG resultante, sin relleno de fondo blanco. La exportación utiliza el método <code>toDataURL(\'image/png\')</code> con compresión sin pérdida.',
  },
  {
    type: 'tip',
    title: 'Consejo antes de rasterizar',
    html: 'Elige bien el tamaño de exportación a PNG; rasterizar un SVG es un proceso de una sola dirección: no puedes recuperar los vectores a partir del PNG resultante. Mantén siempre el SVG original como fuente maestra y genera PNGs a la máxima resolución que vayas a necesitar.',
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
      'Exportar logos vectoriales para presentaciones PowerPoint o Google Slides.',
      'Crear iconos PNG para apps de iOS, Android o Progressive Web Apps.',
      'Compartir diseños SVG en Instagram, LinkedIn u otras redes sociales.',
      'Insertar ilustraciones vectoriales en documentos Word o PDFs.',
      'Generar miniaturas PNG de gráficos SVG para previsualización en CMS.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG es el lenguaje de los vectores; PNG es el pasaporte al resto del mundo digital. Esta herramienta rasteriza tus SVGs a resolución 2x con la transparencia intacta, directamente en tu navegador, sin que un solo byte de tu diseño viaje a ningún servidor externo.',
  },
];

export const content: SvgAPngLocaleContent = {
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
