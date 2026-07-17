import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'convertidor-png-a-webp';
const title = 'Convertir PNG a WebP Online y Gratis';
const description =
  'Convierte imágenes PNG a WebP en tu navegador. Hasta 40% menos peso. Conserva transparencias. Sin subir archivos. Gratis y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos PNG...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir PNG a WebP?',
    answer:
      'WebP ofrece una compresión hasta un 40% superior a PNG a igual calidad, soportando también transparencias Alpha. Es el formato recomendado por Google PageSpeed Insights.',
  },
  {
    question: '¿Se pierde la transparencia en el proceso?',
    answer:
      'No. La implementación técnica de WebP soporta el canal alfa. Las transparencias del PNG original se conservarán en el nuevo archivo WebP.',
  },
  {
    question: '¿Mis imágenes van a algún servidor?',
    answer:
      'No. El código se ejecuta únicamente en tu navegador (Client-Side). Nunca vemos, registramos ni guardamos las imágenes que conviertes.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserta tus PNG',
    text: 'Arroja tus pesados archivos PNG al área de carga o utiliza el selector tradicional interactivo.',
  },
  {
    name: 'Detección de canales',
    text: 'El motor de renderizado local detectará y exportará la composición de píxeles al formato WebP optimizado.',
  },
  {
    name: 'Descarga Directa',
    text: 'Descarga individualmente tus WebP hiper-comprimidos o llévalos juntos usando el conversor a paquete ZIP.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de PNG a WebP: Transparencia y Compresión Moderna para la Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El <strong>PNG</strong> ha sido el formato de referencia para imágenes web con transparencia durante décadas - logos, iconos, elementos de UI, imágenes de producto sobre fondo recortado. Su problema es el peso: la compresión sin pérdida que garantiza su calidad también genera archivos notablemente grandes. El <strong>WebP</strong> de Google resuelve esta contradicción: soporta canal alfa (transparencias) <em>y</em> comprime mucho mejor que PNG, haciendo que cambiar PNG por WebP en tu web sea la optimización perfecta que no sacrifica nada.',
  },
  {
    type: 'title',
    text: '¿PNG o WebP? Cuándo usar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>PNG</strong> sigue siendo el formato correcto cuando la compatibilidad es crítica: herramientas de diseño como Photoshop o Figma, sistemas de impresión, aplicaciones de escritorio antiguas o cualquier contexto donde no se garantice soporte de WebP. También es el formato ideal para guardar capas de trabajo en flujos de edición, ya que su compresión sin pérdida preserva cada píxel. El coste: archivos que pueden pesar 3-8 veces más que su equivalente WebP.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> es el reemplazo natural del PNG para todo el contenido web moderno. Chrome, Firefox, Safari y Edge lo soportan de forma nativa. Una imagen WebP en modo sin pérdida es un 26% más pequeña que el PNG equivalente; en modo con pérdida puede ser hasta un 40% más pequeña, con una calidad visual prácticamente indistinguible. Y lo más importante para el diseño web: <strong>WebP conserva las transparencias alfa</strong> igual que PNG, sin ningún compromiso visual.',
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
          'Latencia de red en upload y download',
          'Tus logos e imágenes en servidores ajenos',
          'Límites de tamaño y conversiones diarias',
          'Publicidad intrusiva y rastreadores de terceros',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidad instantánea - cero latencia de red',
          'Privacidad total - 0 bytes enviados al exterior',
          'Sin límites de MB ni de número de archivos',
          'Interfaz limpia, sin anuncios ni rastreos',
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
    html: 'El PNG se carga localmente y se decodifica en un <strong>Canvas HTML5</strong> en memoria. El Canvas API preserva el canal alfa del PNG original - todos los píxeles transparentes y semitransparentes se mantienen intactos en el buffer de píxeles RGBA. A continuación se exporta llamando a <code>toDataURL(\'image/webp\')</code>, que aplica el codec WebP del navegador (basado en libwebp de Google) para generar un archivo más compacto sin alterar la información de transparencia.',
  },
  {
    type: 'paragraph',
    html: 'WebP utiliza dos modos de compresión: el modo sin pérdida (<em>lossless</em>) para imágenes donde cada píxel debe ser exactamente fiel al original, y el modo con pérdida (<em>lossy</em>) para fotografías y elementos donde pequeñas diferencias son imperceptibles. El modo sin pérdida produce archivos un 26% más pequeños que PNG; el modo con pérdida puede lograr reducciones de hasta un 40% respecto a PNG manteniendo una calidad visual excelente.',
  },
  {
    type: 'tip',
    title: 'Consejo: WebP supera a PNG y a JPG en la web',
    html: 'WebP en modo sin pérdida es más pequeño que PNG. WebP en modo con pérdida es más pequeño que JPG. Esto convierte a WebP en el <strong>único formato que reemplaza a ambos</strong> en el contexto web. Convierte tus PNGs con transparencia a WebP antes de subirlos: Google PageSpeed Insights lo detecta y lo puntúa positivamente en las auditorías de "Serve images in modern formats".',
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
      'Logos e iconos con fondo transparente para sitios web y aplicaciones.',
      'Imágenes de producto con fondo recortado en tiendas e-commerce.',
      'Sprites CSS y elementos de interfaz de usuario con transparencia alfa.',
      'Ilustraciones y gráficos vectoriales rasterizados para landing pages.',
      'Miniaturas de artículo con fondo transparente en blogs y portales de noticias.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El paso de PNG a WebP es la optimización de imágenes web más completa disponible: consigues archivos más ligeros, preservas las transparencias y mejoras las métricas Core Web Vitals sin cambiar nada del diseño visual. Esta herramienta lo hace de forma instantánea, gratuita y completamente privada - tus imágenes se procesan en tu navegador y no viajan a ningún servidor externo.',
  },
];


export const content: PngAWebpLocaleContent = {
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
