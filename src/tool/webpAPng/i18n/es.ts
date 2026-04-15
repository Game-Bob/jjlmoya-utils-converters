import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'convertidor-webp-a-png';
const title = 'Convertir WebP a PNG Online y Gratis';
const description =
  'Convierte imágenes WebP a PNG en tu navegador. Conserva transparencias. Sin subir archivos a servidores. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos WebP...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué necesito convertir mis archivos WebP a PNG?',
    answer:
      'Pese a ser más ligeros, los archivos WebP pueden dar incompatibilidades en programas de edición como Photoshop antiguos. El PNG asegura una compatibilidad universal al 100%.',
  },
  {
    question: '¿Se pierden las transparencias al pasar de WebP a PNG?',
    answer:
      'En absoluto. A diferencia de la conversión a JPG, el PNG soporta el canal alfa. Nuestra utilidad preservará cualquier zona transparente del archivo original.',
  },
  {
    question: '¿Puedo subir archivos confidenciales de empresa?',
    answer:
      'Puedes y debes. Como todo corre localmente por JavaScript, tus imágenes de empresa nunca abandonarán tu equipo ni se guardarán en servidores externos.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Arrastra tus archivos WebP',
    text: 'Mueve y suelta tus archivos WebP sobre el panel principal o selecciona las imágenes de forma tradicional.',
  },
  {
    name: 'Conversión de Alta Fidelidad',
    text: 'Tu navegador redibujará píxel a píxel la imagen y generará una copia exacta en formato PNG, manteniendo la gama de colores original.',
  },
  {
    name: 'Descarga Individual o en Lote',
    text: 'Guarda cada archivo individualmente o, si procesaste un lote, pulsa el botón ZIP para bajarlos todos empaquetados.',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'WebP API and Library Documentation',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'HTML Canvas 2D Context Specification',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: WebP image format',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a PNG: La Elección Profesional para Edición y Diseño',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Cuando un diseñador descarga un recurso gráfico en formato <strong>WebP</strong> e intenta abrirlo en Photoshop, Figma o Illustrator, el resultado puede ser frustrante: el archivo no carga o pierde calidad. El formato <strong>PNG</strong> es el estándar indiscutible de la edición profesional: compresión sin pérdida, canal alfa completo y compatibilidad garantizada en toda la cadena de producción creativa.',
  },
  {
    type: 'title',
    text: 'WebP para la Web, PNG para el Estudio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP es un formato de producción web: sus algoritmos de compresión están optimizados para reducir el peso de transferencia, no para preservar la máxima fidelidad en flujos de edición iterativos. Cada vez que guardas un WebP editado, el códec aplica compresión de nuevo. Para proyectos donde un archivo se modificará muchas veces, esto supone una degradación de calidad acumulativa.',
  },
  {
    type: 'paragraph',
    html: 'PNG utiliza <strong>compresión sin pérdida</strong> (lossless): los datos de cada píxel se preservan íntegramente sin importar cuántas veces guardes el archivo. Es el formato elegido por diseñadores UI/UX, ilustradores digitales y equipos de branding que necesitan mantener la integridad visual a través de decenas de revisiones. Herramientas como Photoshop, Figma, Sketch e Illustrator tratan al PNG como su formato nativo de exportación primario.',
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
          'Tus assets de diseño se almacenan en servidores de terceros',
          'Procesamiento remoto lento para archivos pesados',
          'Riesgo de filtraciones en proyectos confidenciales de clientes',
          'Conversión por lotes limitada o bajo pago',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tus diseños nunca abandonan tu máquina',
          'Convierte por lotes decenas de archivos al instante',
          'Preservación total del canal alfa y la gama de colores',
          'Privacidad absoluta para proyectos de clientes',
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
    html: 'Los navegadores modernos pueden decodificar WebP de forma nativa. Nuestra herramienta aprovecha esta capacidad para cargar el archivo en un elemento <strong>Image</strong> de JavaScript y, posteriormente, lo dibuja sobre un lienzo HTML5 con las mismas dimensiones del original. A diferencia de la conversión a JPG, aquí no hace falta relleno de fondo: el lienzo conserva el canal alfa completo.',
  },
  {
    type: 'paragraph',
    html: 'La exportación final utiliza el método <code>toDataURL(\'image/png\')</code>, que genera un PNG sin pérdida fiel al original. El resultado es un archivo listo para importar directamente en cualquier software de diseño profesional sin pasos intermedios, degradación de color o pérdida de transparencia.',
  },
  {
    type: 'tip',
    title: 'Consejo para editores',
    html: 'Utiliza PNG cuando necesites seguir editando la imagen. La compresión sin pérdida garantiza que no habrá degradación de calidad por guardados repetidos, algo crítico al trabajar con capas, máscaras o ajustes de color en Photoshop o Figma.',
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
      'Importar recursos WebP en Photoshop, Figma, Sketch o Illustrator.',
      'Preservar la transparencia en logos e iconos para uso en múltiples fondos.',
      'Crear copias maestras de gráficos para proyectos de larga duración.',
      'Exportar assets para apps móviles que requieren PNG con canal alfa.',
      'Uso de imágenes en maquetas de diseño y presentaciones con fondos variables.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Si WebP es el formato del servidor web, PNG es el formato del estudio de diseño. Esta herramienta convierte tus recursos WebP en PNGs listos para producción, con transparencia intacta y máxima calidad, todo en tu navegador y sin que tus archivos salgan nunca de tu equipo.',
  },
];

export const content: WebpAPngLocaleContent = {
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
