import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'convertidor-avif-a-webp';
const title = 'Convertir AVIF a WebP Online';
const description =
  'Convierte imágenes AVIF a WebP con mejor compatibilidad. Procesado local sin servidores. Gratis, privado e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos AVIF...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: '¿Cuál es la diferencia real entre convertir a WebP y a otros formatos?',
    answer:
      'WebP ofrece lo mejor de ambos mundos: compresiones tan asombrosas como el JPG pero conservando la capacidad de albergar transparencias limpias como un PNG. Cambiar tu AVIF a WebP maximiza su compatibilidad para la web preservando todas sus ventajas.',
  },
  {
    question: '¿Cómo logran cambiar esto sin servidor y de forma rápida?',
    answer:
      'Aprovechamos los módulos de decodificación incorporados y el objeto Image de JavaScript HTML5, lo que permite leer tu AVIF en memoria local y extraer un archivo WebP optimizado en tiempo récord.',
  },
  {
    question: '¿Es el formato WebP completamente compatible hoy en día?',
    answer:
      'A diferencia del naciente AVIF, el formato WebP disfruta de un amplísimo soporte entre navegadores como Chrome, Firefox y Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserta tus archivos fotográficos',
    text: 'Mueve y suelta todas las selecciones de formato AVIF hasta nuestro lienzo.',
  },
  {
    name: 'Traducción de Bytes Algorítmicos',
    text: 'Nuestro motor asimila los algoritmos sin subir nada y crea iteraciones exactas basadas en WebP comprimido.',
  },
  {
    name: 'Acumula tus Descargas Listas',
    text: 'Pulsa el panel y recibe lotes en cajas ZIP o sueltos para publicarlas directamente.',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor AVIF a WebP: La Alternativa Moderna y Segura para la Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF es el formato de imagen más avanzado disponible hoy: más pequeño que WebP, más pequeño que JPG, con calidad visual superior. Sin embargo, su adopción ha sido irregular - Safari no lo soportó hasta 2024, y muchos dispositivos móviles más antiguos lo desconocen. WebP, en cambio, lleva años consolidado como el estándar moderno de la web con más del 95% de soporte global. Convertir AVIF a WebP es la decisión pragmática cuando necesitas modernidad sin arriesgar la compatibilidad.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: El Más Nuevo vs El Más Seguro',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF ofrece la compresión más avanzada disponible - típicamente un 20-30% más pequeño que WebP a la misma calidad. Su tecnología basada en AV1 es la más moderna del sector. Sin embargo, el soporte de AVIF todavía tiene puntos ciegos: versiones antiguas de Safari, algunos navegadores en Android más antiguo, y ciertos reproductores de imagen de escritorio no lo reconocen. Para producción web con audiencias amplias y diversas, esto supone un riesgo.',
  },
  {
    type: 'paragraph',
    html: 'WebP tiene una historia de soporte mucho más sólida. Chrome lo adoptó en 2010, Firefox y Edge siguieron, y Safari lo incorporó en 2020. Con más del 95% de cobertura global en navegadores, WebP es la elección segura para cualquier sitio web que no quiera servir formatos de reserva. Soporta transparencias, compresión con y sin pérdida, y logra archivos mucho más pequeños que JPG o PNG.',
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
          'Tus imágenes privadas transitan por servidores externos',
          'Latencia de red que ralentiza el flujo de trabajo',
          'Límites de archivos por conversión gratuita',
          'Dependencia de servicios de terceros que pueden cambiar',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu navegador mediante tecnología Vanilla JS y Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Privacidad total - 0 bytes salen de tu dispositivo',
          'Velocidad instantánea sin dependencia de red',
          'Sin límites de tamaño ni de número de archivos',
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
    html: 'Chrome, Firefox y Edge incluyen decodificadores AVIF nativos. Al cargar el archivo, el motor de imágenes del navegador lo decodifica en RAM manteniendo la información de canal alfa. La imagen se pinta sobre un <code>Canvas</code> HTML5 invisible usando el contexto 2D, que preserva las transparencias correctamente.',
  },
  {
    type: 'paragraph',
    html: 'La exportación se realiza con <code>toBlob(\'image/webp\', quality)</code>. El navegador aplica el algoritmo de compresión WebP internamente, generando un Blob que incluye canal alfa si la imagen original lo tenía. Este Blob se convierte en enlace de descarga directa. El proceso completo ocurre en microsegundos sin ninguna comunicación con servidores externos.',
  },
  {
    type: 'tip',
    title: 'WebP: la elección pragmática del desarrollador moderno',
    html: 'WebP tiene más del 95% de soporte en navegadores - AVIF está creciendo pero aún no llega a esa cifra. Para sitios en producción sin detección de formato adaptativa, WebP es la elección segura que cubre casi cualquier audiencia. Convierte tus AVIF a WebP y sirve imágenes modernas con confianza.',
  },
  {
    type: 'title',
    text: 'Casos de uso: cuándo elegir WebP sobre AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Sitios web que necesitan soporte en navegadores desde 2020 sin polyfills.',
      'CDNs y sistemas de entrega de imágenes que aceptan WebP pero no AVIF.',
      'Aplicaciones móviles híbridas con WebViews que pueden no soportar AVIF.',
      'Emails HTML modernos donde WebP tiene mayor soporte que AVIF.',
      'Plataformas CMS y ecommerce con soporte de imagen WebP establecido.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: Modernidad con compatibilidad garantizada',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF es la vanguardia de la compresión de imágenes, pero WebP es la elección fiable y universal del ecosistema web moderno. Con nuestra herramienta, conviertes de lo más nuevo a lo más soportado en un instante - sin subir nada a ningún servidor, con privacidad total y sin límites de tamaño.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
