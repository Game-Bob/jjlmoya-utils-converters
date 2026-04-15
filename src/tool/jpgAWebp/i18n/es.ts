import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'convertidor-jpg-a-webp';
const title = 'Convertir JPG a WebP Online y Gratis';
const description =
  'Convierte imágenes JPG a WebP en tu navegador. Compresión superior sin pérdida visible. Sin subir archivos. Gratuito, ilimitado y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos JPG...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir fotos JPG a WebP?',
    answer:
      'WebP permite comprimir significativamente más los archivos JPG tradicionales sin que el ojo humano note la diferencia, resultando en sitios web más rápidos y modernos.',
  },
  {
    question: '¿Tengo que pagar por imagen?',
    answer:
      'No, la herramienta es gratis y todo se procesa directamente en tu ordenador. Es ilimitada para uso doméstico o profesional.',
  },
  {
    question: '¿Es segura la conversión?',
    answer:
      'Sí, totalmente. Todo el procesamiento ocurre en el Canvas HTML5 de tu navegador local sin enviar ningún dato a servidores externos.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserta tus fotografías JPG',
    text: 'Pega tus archivos JPG o arrástralos directamente al área superior. La detección es instantánea.',
  },
  {
    name: 'Procesado a WebP',
    text: 'El motor de renderizado local convertirá cada archivo de imagen a un WebP ultra optimizado listo para la web.',
  },
  {
    name: 'Descarga los resultados',
    text: 'Guarda cada WebP individualmente o descarga el ZIP con todos los archivos convertidos.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP Compression Study',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Serve images in modern formats',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de JPG a WebP: Acelera tu Web con el Formato de Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El formato <strong>JPG</strong> ha dominado la fotografía digital durante décadas: universal, compacto y compatible con cualquier dispositivo. Sin embargo, Google diseñó <strong>WebP</strong> para superar al JPG en su propio terreno: mismo nivel visual, un 25-35% menos de peso. Para los desarrolladores web y los equipos de marketing que luchan contra tiempos de carga lentos, convertir JPG a WebP es la palanca de optimización con mayor retorno por esfuerzo.',
  },
  {
    type: 'title',
    text: '¿JPG o WebP? Cuándo usar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>JPG</strong> sigue siendo la opción correcta cuando necesitas compatibilidad universal: correos electrónicos a clientes, documentos de Word, redes sociales heredadas o sistemas CMS que no aceptan WebP. Su ecosistema de treinta años garantiza que cualquier pantalla, impresora o visor lo abrirá sin problemas. El mayor inconveniente es su tamaño: un JPG de cabecera de 1,5 MB puede lastrar el LCP de tu página hasta hacerlo reprobar en Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> es la elección inteligente para todo el contenido que vive en tu sitio web. Chrome, Firefox, Safari y Edge lo soportan de forma nativa desde hace años. Las imágenes de producto en e-commerce, los banners de blog, las miniaturas de vídeo y cualquier fotografía publicada en línea se benefician directamente: páginas más ligeras, mejor puntuación en Google PageSpeed Insights y una experiencia de usuario más fluida, especialmente en conexiones móviles.',
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
          'Tus fotografías quedan en servidores ajenos',
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
          'Velocidad instantánea: cero latencia de red',
          'Privacidad total — 0 bytes enviados al exterior',
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
    html: 'Cuando arrastras un JPG a la herramienta, el navegador crea un objeto <strong>Blob</strong> que reside únicamente en tu RAM. Ese Blob se decodifica y se dibuja sobre un elemento <strong>Canvas de HTML5</strong> invisible. Como el JPG no tiene canal alfa, la conversión a WebP es directa: el motor exporta el canvas llamando a <code>toDataURL(\'image/webp\')</code>, generando un flujo de bytes que tu sistema operativo descarga al instante sin pasar por ningún servidor.',
  },
  {
    type: 'paragraph',
    html: 'El algoritmo de compresión WebP combina técnicas de predicción de bloques (similares a las de VP8, el codec de vídeo de Google) con transformadas de color y codificación aritmética. El resultado es un archivo que contiene la misma información perceptual que el JPG original pero empaquetada de forma mucho más eficiente, lo que se traduce directamente en menos kilobytes transferidos por cada visita a tu página.',
  },
  {
    type: 'tip',
    title: 'Consejo Core Web Vitals: LCP y el peso de las imágenes',
    html: 'El <strong>Largest Contentful Paint (LCP)</strong> es la métrica de Google que mide cuánto tarda en cargarse el elemento visual más grande de tu página. Un JPG de cabecera de 1,5 MB puede convertirse en un WebP de apenas 900 KB — o incluso 600 KB — sin diferencia visual apreciable. Ese ahorro del <strong>25-35%</strong> puede mover tu LCP de "Necesita mejorar" a "Bueno" y subir posiciones en los resultados de búsqueda.',
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
      'Imágenes de producto en tiendas WooCommerce o Shopify: menos peso, más conversiones.',
      'Fotografías de blog y artículos de contenido: mejor puntuación PageSpeed sin retocar el diseño.',
      'Banners y creatividades publicitarias web: archivos más ligeros con la misma nitidez.',
      'Galerías de portfolio o portafolios de arquitectura/fotografía con muchas imágenes.',
      'Miniaturas de vídeo en sitios de streaming o plataformas de cursos online.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir tus JPG a WebP es hoy una de las optimizaciones más sencillas y rentables que puedes aplicar a cualquier sitio web. Con esta herramienta lo haces en segundos, de forma gratuita y sin que tus imágenes salgan de tu dispositivo. Menos kilobytes, mejor LCP, más velocidad — y todo eso con el mismo aspecto visual que ya tenías.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
