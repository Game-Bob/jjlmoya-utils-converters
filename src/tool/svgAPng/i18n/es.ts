import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'convertidor-svg-a-png';
const title = 'Convertir SVG a PNG Online y Gratis';
const description =
  'Convierte archivos SVG vectoriales a PNG en tu navegador. Salida a doble escala HD. Conserva transparencias. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos SVG...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir archivos SVG a PNG?',
    answer:
      'SVG es vectorial e ideal para logos, pero a veces necesitas el formato rasterizado PNG para usarlo en aplicaciones que no soportan vectores o para enviarlos por WhatsApp o redes sociales.',
  },
  {
    question: '¿Puedo elegir el tamaño de salida?',
    answer:
      'Actualmente duplicamos la escala del SVG de origen para que la salida PNG sea nítida y apta para pantallas Retina o 4K.',
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
    text: 'Pega tus archivos SVG o arrástralos directamente al área superior.',
  },
  {
    name: 'Generación del PNG HD',
    text: 'En milisegundos nuestro motor local recreará cada vector en una capa de píxeles HD en formato PNG transparente.',
  },
  {
    name: 'Descarga los archivos',
    text: 'Guarda los PNG generados individualmente o en un paquete ZIP.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG Specification',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: SVG Tutorial',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
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
    html: '<strong>SVG</strong> (Scalable Vector Graphics) es la elección perfecta para el diseño web: escalable al infinito, ligero y editable con cualquier editor de código. Pero cuando necesitas usar ese logo o icono en una aplicación móvil, compartirlo en redes sociales o insertarlo en una presentación de PowerPoint, te topas con una barrera: la mayoría de estas plataformas no soportan SVG. El formato <strong>PNG</strong> es la solución universal: rasterizado, con canal alfa y compatible en absolutamente todos los contextos.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vectores para la Web, Raster para el Mundo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG almacena la imagen como instrucciones matemáticas: una curva de Bézier, un gradiente, un polígono. Esto significa que el mismo archivo luce perfectamente a 16px o a 16.000px. Es el formato ideal para el código de tu web, para animaciones CSS y para cualquier elemento que necesite adaptarse a diferentes resoluciones de pantalla sin pérdida de calidad.',
  },
  {
    type: 'paragraph',
    html: 'PNG almacena la imagen como una cuadrícula de píxeles con información de color y transparencia para cada uno. Es un formato <strong>sin pérdida</strong>, lo que significa que la calidad se preserva íntegramente. Una vez que un SVG se rasteriza a PNG, la resolución queda fijada. Por eso es crucial elegir bien el tamaño de exportación: nuestra herramienta renderiza a doble escala (2x) para garantizar nitidez en pantallas Retina y 4K.',
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
          'Tiempo de espera por subida y procesamiento',
          'Limitaciones en el tamaño de archivo SVG',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tu SVG nunca abandona tu navegador',
          'Renderizado nativo del motor del navegador, máxima fidelidad',
          'PNG a 2x de resolución para pantallas de alta densidad',
          'Transparencias preservadas con canal alfa completo',
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
    html: 'El proceso comienza cargando el archivo SVG en un elemento <strong>Image</strong> de JavaScript. Una vez que el motor del navegador ha parseado y renderizado el XML vectorial, la imagen resultante se dibuja sobre un <strong>Canvas HTML5</strong> cuyas dimensiones son el doble del tamaño original del SVG (escala 2x). Esto produce un PNG con el doble de píxeles por dimensión, ideal para pantallas de alta resolución.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de la conversión a JPG, al exportar a PNG el canvas retiene el canal alfa completo: las zonas transparentes del SVG original se convierten en píxeles totalmente transparentes en el PNG resultante. No hay relleno de fondo blanco. La exportación usa el método <code>toDataURL(\'image/png\')</code> con compresión sin pérdida.',
  },
  {
    type: 'tip',
    title: 'Consejo antes de rasterizar',
    html: 'Elige bien el tamaño de exportación PNG porque la rasterización es un proceso de un solo sentido: no podrás recuperar los vectores desde el PNG resultante. Guarda siempre el SVG original como fuente maestra y genera los PNG a la resolución más alta que puedas necesitar.',
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
      'Crear iconos PNG para aplicaciones iOS, Android o Progressive Web Apps.',
      'Compartir diseños SVG en Instagram, LinkedIn u otras redes sociales.',
      'Insertar ilustraciones vectoriales en documentos Word o PDF.',
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
    html: 'SVG es el lenguaje de los vectores; PNG es el pasaporte al resto del mundo digital. Esta herramienta rasteriza tus SVG a resolución 2x con transparencias intactas, directamente en tu navegador, sin que ningún byte de tu diseño viaje a ningún servidor externo.',
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

export const content: SvgAPngLocaleContent = {
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
