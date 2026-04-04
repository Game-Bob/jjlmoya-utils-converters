import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertidor-webp-a-jpg';
const title = 'Convertir WebP a JPG Online y Gratis - Sin Subir a Internet';
const description =
  'Convierte imágenes WebP a JPG sin subir archivos. Procesamiento local 100% privado. Los fondos transparentes se sustituyen por blanco automáticamente.';

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
      'Sí. No hay un servidor de subida. Tu navegador procesa el WebP en tu ordenador y genera el JPG para que lo descargues. Nadie más lo ve.',
  },
  {
    question: '¿Qué ocurre con el fondo de mi WebP si es transparente?',
    answer:
      'Como el formato JPG no soporta transparencias, el convertidor rellenará automáticamente las zonas transparentes con un fondo blanco sólido.',
  },
  {
    question: '¿Hay límite de conversiones o tamaño?',
    answer:
      'No imponemos restricciones. Puedes convertir cientos de imágenes siempre que tu ordenador tenga la potencia y la memoria RAM suficiente.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra tus Archivos',
    text: 'Pega tus WebP modernos al área de carga o selecciónalos usando el explorador de archivos interactivo.',
  },
  {
    name: 'Conversión Local',
    text: 'Disfruta mientras el motor local de la utilidad aplica un fondo e interpreta cada píxel al universal JPG.',
  },
  {
    name: 'Obtén tus Resultados',
    text: 'Descarga individualmente o usa el paquete ZIP para consolidar todas tus nuevas fotografías.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: The JPEG standards',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'WebP to JPEG compatibility',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor WebP a JPG: Compatibilidad Universal sin Comprometer tu Privacidad',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El formato <strong>WebP</strong> es la apuesta de Google por la eficiencia: imágenes más ligeras con calidad comparable al JPG tradicional. Sin embargo, su compatibilidad sigue siendo un problema real. Clientes de correo electrónico como Outlook, software de diseño heredado, aplicaciones de mensajería y flujos de trabajo corporativos todavía dependen del omnipresente <strong>JPG</strong>. Convertir WebP a JPG es el puente entre la web moderna y el mundo real.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: ¿Cuándo usar cada formato?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP brilla en entornos controlados: sitios web modernos con Chrome, Edge o Firefox donde se puede garantizar la compatibilidad del navegador. Su compresión superior reduce el peso de los archivos entre un 25 y un 35 % respecto a JPG equivalente, mejorando los tiempos de carga y las métricas Core Web Vitals. Es el formato ideal cuando controlas el entorno de visualización.',
  },
  {
    type: 'paragraph',
    html: 'JPG, por otro lado, funciona en <em>absolutamente todos los contextos</em>: correos electrónicos adjuntos, presentaciones de PowerPoint, documentos Word, impresoras domésticas, aplicaciones de edición antiguas y plataformas de redes sociales sin excepción. Si necesitas que alguien abra tu imagen sin fricción técnica alguna, JPG es la respuesta correcta.',
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
          'Tus fotos viajan por Internet a servidores desconocidos',
          'Tiempo de espera por subida y procesamiento remoto',
          'Límites de tamaño y conversiones gratuitas por día',
          'Riesgo real de retención de datos en servidores de terceros',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Cero bytes enviados: todo ocurre en tu RAM',
          'Velocidad instantánea sin depender de tu conexión',
          'Sin límites de tamaño ni número de archivos',
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
    html: 'Cuando arrastras un archivo WebP a la herramienta, el navegador lo decodifica de forma nativa usando su motor de renderizado interno. A continuación, el archivo se dibuja sobre un elemento <strong>Canvas HTML5</strong> invisible. Dado que JPG no admite transparencias, el algoritmo rellena previamente el canvas con un fondo blanco sólido antes de componer la imagen encima.',
  },
  {
    type: 'paragraph',
    html: 'El paso final es la exportación: el método <code>toDataURL(\'image/jpeg\')</code> del Canvas convierte los píxeles del lienzo en un flujo de bytes JPG comprimido con alta calidad. Este flujo se entrega directamente al sistema de descarga del navegador, sin ninguna comunicación de red. El proceso completo dura milisegundos incluso para imágenes de varios megapíxeles.',
  },
  {
    type: 'tip',
    title: 'Consejo de compatibilidad',
    html: 'Cuando compartas fotos con usuarios no técnicos o las envíes por correo electrónico, usa siempre JPG. Es el formato con compatibilidad garantizada al 100 % en cualquier cliente de correo, sistema operativo o dispositivo, sin excepciones ni sorpresas desagradables.',
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
      'Adjuntar fotos en correos electrónicos desde Outlook, Gmail o Apple Mail.',
      'Insertar imágenes en documentos Word, Excel o presentaciones PowerPoint.',
      'Publicar en plataformas de redes sociales que rechazan WebP.',
      'Compartir por WhatsApp o aplicaciones de mensajería con soporte limitado de formatos.',
      'Imprimir fotografías en servicios de impresión que solo aceptan JPG o PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP es el futuro de la imagen web, pero JPG sigue siendo el rey de la compatibilidad universal. Esta herramienta te permite cruzar ese puente en segundos, de forma completamente privada y sin instalar nada. Tu imagen nunca abandona tu dispositivo.',
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

export const content: WebpAJpgLocaleContent = {
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
