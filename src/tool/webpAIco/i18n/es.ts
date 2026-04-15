import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'convertidor-webp-a-ico';
const title = 'Convertir WebP a ICO';
const description =
  'Convierte imágenes WebP a ICO oficial con transparencias. Sin subir archivos. Cabeceras binarias reales de Microsoft. Gratis y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos WebP...',
  convertText: 'Para convertirlos a ICO al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: '¿Puedo pasar diseños de stickers WebP a un Favicon ICO oficial web?',
    answer:
      'Exacto. El Favicon todavía demanda la clásica extensión de Microsoft ICO para compatibilidad extrema universal. Esta herramienta inyectará cabeceras binarias construyendo un icono 100% lícito.',
  },
  {
    question: '¿Tengo que esperar colas online al hacer mi lote enorme de iconos corporativos?',
    answer:
      'De ninguna manera. Nuestro conversor carga el Javascript y corta cualquier red de subida. Tu mismo celular CPU procesa cien fotos o más de forma asíncrona.',
  },
  {
    question: '¿Soportará las transparencias de mi WebP original el nuevo ICO resultante?',
    answer:
      'Así es. Nuestro motor funciona internamente con el lienzo API de HTML5 a 32 bits de soporte completo, todo agujero transparente saltará limpio al archivo iconográfico.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Arrastra Todas Tus Pegatinas Locales WebP',
    text: 'Mueve los pesados lotes fotográficos sin temor a que el límite web sature.',
  },
  {
    name: 'Traducción Asíncrona Lógica Y Ensamblaje Directo',
    text: 'Fíjate velozmente cómo la barra y los elementos se autocompletan mientras la memoria procesa el bloque byte por byte del marco.',
  },
  {
    name: 'Lleva Tú Pack Para Sistemas y Desarrollo Web',
    text: 'Pincha libre un botón masivo descargable en fichero conjunto o baja manual si necesitas apenas uno.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'Registro y Documento General Web ICO Header',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a ICO: Crea Favicons Perfectos desde tus Assets Modernos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El flujo de trabajo moderno de diseño web genera recursos en formato <strong>WebP</strong>: logos optimizados, iconos de interfaz y elementos de marca. Pero cuando llega el momento de configurar el <strong>favicon</strong> de tu sitio o los iconos de una aplicación de escritorio en Windows, el formato requerido sigue siendo <strong>ICO</strong>. Convertir WebP a ICO te permite reutilizar tus assets de mayor calidad sin perder la fuente original.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Formatos con Propósitos Distintos',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP es un formato de imagen de propósito general, excelente para fotografías, ilustraciones e iconos de interfaz en la web. Su compresión eficiente lo hace ideal para acelerar la carga de páginas. Sin embargo, no tiene la estructura binaria específica que requieren los sistemas operativos y los navegadores para reconocer y mostrar un icono de aplicación o favicon.',
  },
  {
    type: 'paragraph',
    html: 'ICO es un formato contenedor de Microsoft diseñado específicamente para iconos. Puede almacenar múltiples resoluciones en un único archivo y soporta transparencia total mediante canal alfa de 32 bits. Los navegadores buscan un archivo <code>favicon.ico</code> por convención, y este formato garantiza que tu icono se muestre nítido tanto en pantallas estándar como en displays Retina y 4K.',
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
          'Tu logo de empresa viaja a servidores de terceros',
          'Dependencia de conexión a Internet para cada conversión',
          'Calidad de salida variable según el servidor',
          'Limitaciones en el número de conversiones diarias',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Tu logo nunca abandona tu navegador',
          'Cabeceras binarias ICO generadas al estándar de Microsoft',
          'Transparencia de 32 bits preservada íntegramente',
          'Conversión por lotes de sets completos de iconos',
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
    html: 'El navegador decodifica el archivo WebP de forma nativa y lo dibuja sobre un <strong>Canvas HTML5</strong> a 32 bits de profundidad de color, conservando el canal alfa original. A continuación, nuestro motor JavaScript extrae los datos de píxeles mediante el método <code>getImageData()</code> y construye la estructura binaria del archivo ICO con las cabeceras ICONDIR e ICONDIRENTRY que especifica el estándar de Microsoft.',
  },
  {
    type: 'paragraph',
    html: 'El resultado es un archivo ICO legítimo, no un simple renombrado de archivo. Los datos de píxeles están empaquetados con la estructura correcta que Windows, macOS y todos los navegadores modernos esperan encontrar al cargar un favicon o icono de aplicación.',
  },
  {
    type: 'tip',
    title: 'Consejo para favicons nítidos',
    html: 'Genera siempre tu ICO a partir de la fuente de mayor resolución disponible. Un WebP de 512×512 o mayor producirá un favicon perfectamente nítido en pantallas Retina y 4K, donde los iconos de baja resolución se ven borrosos.',
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
      'Crear el archivo favicon.ico para cualquier sitio web o aplicación web.',
      'Generar iconos de aplicación para instaladores de software Windows.',
      'Producer iconos de escritorio para aplicaciones Electron o similares.',
      'Crear sets de iconos para extensiones de navegador Chrome y Firefox.',
      'Convertir logos de marca WebP en iconos para aplicaciones corporativas.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Tu flujo de diseño moderno produce WebP; el ecosistema de aplicaciones todavía exige ICO. Esta herramienta cierra esa brecha en segundos, generando iconos con la estructura binaria correcta y transparencias intactas, sin que tus assets de marca abandonen tu navegador.',
  },
];

export const content: WebpAIcoLocaleContent = {
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
