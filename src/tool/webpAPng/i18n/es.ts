import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'convertidor-webp-a-png';
const title = 'Convertir WebP a PNG Online y Gratis - Privado al 100%';
const description =
  'Convierte imágenes WebP a PNG en tu navegador. Conserva la transparencia. Sin subir archivos a servidores. Gratis y 100% privado.';

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
      'A pesar de ser más ligeros, los WebP pueden causar incompatibilidades en programas de edición como Photoshop antiguo. El PNG asegura un 100% de compatibilidad universalmente.',
  },
  {
    question: '¿Se pierden las transparencias si paso de WebP a PNG?',
    answer:
      'No, en absoluto. A diferencia de la conversión a JPG, el PNG soporta el canal alfa. Nuestra utilidad preservará cualquier zona transparente del archivo original.',
  },
  {
    question: '¿Puedo subir archivos confidenciales de mi empresa?',
    answer:
      'Puedes y debes. Como todo se ejecuta localmente mediante JavaScript, las imágenes de tu empresa nunca saldrán de tu ordenador ni se guardarán en servidores ajenos.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Arrastra tus WebP',
    text: 'Mueve y suelta tus archivos WebP sobre el panel principal o selecciona las imágenes de forma tradicional.',
  },
  {
    name: 'Conversión de Alta Fidelidad',
    text: 'Tu navegador redibujará píxel a píxel la imagen y generará su copia exacta en formato PNG, manteniendo la gama de colores original.',
  },
  {
    name: 'Descarga Individual o Masiva',
    text: 'Guarda cada fichero suelto o, si has procesado un lote, haz clic en el botón ZIP para bajarlos todos empaquetados.',
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
    text: 'Convertidor WebP a PNG: La Opción Profesional para Edición y Diseño',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Cuando un diseñador descarga un recurso gráfico en formato <strong>WebP</strong> y lo intenta abrir en Photoshop, Figma o Illustrator, el resultado puede ser frustrante: el archivo no se carga o pierde calidad. El formato <strong>PNG</strong> es el estándar indiscutible de la edición profesional: compresión sin pérdida, canal alfa completo y compatibilidad garantizada con toda la cadena de producción creativa.',
  },
  {
    type: 'title',
    text: 'WebP para la Web, PNG para el Estudio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP es un formato de producción web: sus algoritmos de compresión están optimizados para reducir el peso de transferencia, no para preservar la fidelidad máxima en flujos de edición iterativa. Cada vez que guardas un WebP editado, el codec aplica de nuevo la compresión. Para proyectos donde el archivo va a ser modificado varias veces, esto supone una degradación acumulativa de la calidad.',
  },
  {
    type: 'paragraph',
    html: 'PNG emplea compresión <strong>sin pérdida</strong>: los datos de cada píxel se conservan íntegramente sin importar cuántas veces guardes el archivo. Es el formato elegido por diseñadores de interfaces (UI/UX), ilustradores digitales y equipos de branding que necesitan mantener la integridad visual a lo largo de decenas de revisiones. Herramientas como Photoshop, Figma, Sketch e Illustrator tratan PNG como su formato de exportación principal.',
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
          'Tus activos de diseño se almacenan en servidores ajenos',
          'Procesamiento remoto lento para archivos de gran tamaño',
          'Riesgo de filtraciones en proyectos confidenciales de clientes',
          'Conversión por lotes limitada o de pago',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tus diseños nunca salen de tu máquina',
          'Conversión por lotes de decenas de archivos al instante',
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
    html: 'El navegador moderno es capaz de decodificar WebP de forma nativa. Nuestra herramienta aprovecha esta capacidad para cargar el archivo en un elemento <strong>Image</strong> de JavaScript y, a continuación, dibujarlo sobre un canvas HTML5 con las mismas dimensiones que el original. Al contrario que la conversión a JPG, aquí no es necesario rellenar el fondo: el canvas mantiene el canal alfa completo.',
  },
  {
    type: 'paragraph',
    html: 'La exportación final utiliza el método <code>toDataURL(\'image/png\')</code>, que genera un PNG con compresión sin pérdida fiel al original. El resultado es un archivo listo para importar directamente en cualquier software de diseño profesional sin pasos intermedios, degradación de color ni pérdida de transparencias.',
  },
  {
    type: 'tip',
    title: 'Consejo para editores',
    html: 'Usa PNG cuando necesites continuar editando la imagen. La compresión sin pérdida garantiza que no habrá degradación de calidad por guardado repetido, algo crítico cuando trabajas con capas, máscaras o ajustes de color en Photoshop o Figma.',
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
      'Preservar transparencias en logos e iconos para uso en múltiples fondos.',
      'Crear versiones maestras de gráficos para proyectos de larga duración.',
      'Exportar assets para aplicaciones móviles que requieren PNG con canal alfa.',
      'Usar imágenes en maquetas y presentaciones de diseño con fondos variables.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Si WebP es el formato del servidor web, PNG es el formato del estudio de diseño. Esta herramienta convierte tus recursos WebP en PNG de producción, con transparencias intactas y calidad máxima, todo en tu navegador y sin que tus archivos abandonen tu equipo.',
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

export const content: WebpAPngLocaleContent = {
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
