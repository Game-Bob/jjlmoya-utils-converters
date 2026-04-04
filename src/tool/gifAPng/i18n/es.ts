import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAPngLocaleContent } from '../index';

const slug = 'convertidor-gif-a-png';
const title = 'Convertir GIF a PNG Online';
const description =
  'Extrae el primer fotograma de tus GIF y conviértelo a PNG preservando transparencias. Sin servidor. Procesado local. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos GIF...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir un formato animado como GIF a un formato estático como PNG?',
    answer:
      'Muchas redes sociales o avatares no admiten fotografías que cambian. Extraer el primer cuadro de un GIF complejo hacia un PNG de alta calidad soluciona las barreras y reduce pesos inservibles.',
  },
  {
    question: '¿Se conservan las transparencias del viejo GIF en el PNG resultante?',
    answer:
      'Sí, a diferencia del JPG, el formato PNG mantiene el canal alfa. Si el GIF tenía un fondo transparente, el PNG lo conservará con bordes nítidos.',
  },
  {
    question: '¿Mantienes mis imágenes en los servidores un tiempo tras el procesamiento?',
    answer:
      'Ningún servidor retiene tu GIF; toda la extracción es local debido al Canvas Web API. Es el procesador de tu PC quien decodifica de forma segura tu archivo sin contacto con red alguna.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Acércanos la Animación',
    text: 'Pasa los pesados archivos GIF en el recuadro de inserción.',
  },
  {
    name: 'Foto Extraída Perfecta',
    text: 'El sistema paralizará al origen exacto del movimiento, sacando la copia impecable en milisegundos.',
  },
  {
    name: 'Guarda tu Estático',
    text: 'Almacena masivamente en ZIP todo aquel volumen de avatares GIFs estáticos convertidos a PNG.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de GIF a PNG: Supera los Límites de Color y Transparencia del GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El GIF fue diseñado en una época en que los monitores apenas podían mostrar 256 colores. Décadas después, esa limitación sigue siendo su mayor debilidad. El PNG nació precisamente para reemplazar al GIF en todos los casos de uso donde la calidad y la transparencia importan: logos, iconos, gráficos de interfaz y cualquier imagen con fondo transparente que deba lucir perfecta sobre cualquier color de fondo.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: la revolución de los 16 millones de colores',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La diferencia más crítica entre GIF y PNG no es solo el número de colores. El GIF soporta transparencia binaria: cada píxel es opaco o completamente transparente, sin gradaciones. El PNG, en cambio, soporta canal alfa completo, con 256 niveles de opacidad por píxel. Esto significa que los bordes de un logo en PNG pueden ser perfectamente suavizados, mientras que los del GIF muestran un dentado característico sobre fondos de colores.',
  },
  {
    type: 'paragraph',
    html: 'Además de la transparencia superior, el PNG elimina el límite de 256 colores del GIF. Capturas de pantalla, ilustraciones con degradados, logotipos con sombras: todos se ven significativamente mejor en PNG. Y al ser compresión sin pérdida, cada píxel conserva exactamente el valor original, sin los artefactos que introduciría una conversión a JPG.',
  },
  {
    type: 'title',
    text: 'Comparativa de Arquitectura: Local vs Nube',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertidores Cloud',
        description: 'Herramientas que procesan tus imágenes en servidores remotos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tus logos e iconos viajan por internet',
          'Tiempo de espera por latencia de red',
          'Límites de tamaño y número de archivos',
          'Tus imágenes pueden quedar en cachés de terceros',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'El GIF nunca abandona tu dispositivo',
          'Conversión instantánea sin red',
          'Sin límites de archivos ni de tamaño',
          'Privacidad absoluta: 0 bytes enviados',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión local GIF a PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversión utiliza el Canvas API del navegador. El GIF se decodifica en memoria como un elemento Image nativo. Al renderizarlo sobre un canvas HTML5, el motor gráfico del navegador captura el primer fotograma con toda su información de transparencia original intacta.',
  },
  {
    type: 'paragraph',
    html: 'A diferencia de la conversión a JPG, con PNG no es necesario añadir un fondo blanco. El canal alfa del GIF original se preserva directamente en el PNG exportado. El método <code>toDataURL(\'image/png\')</code> genera el flujo de bytes PNG en la RAM de tu ordenador, sin ninguna transmisión de red, y el archivo se descarga directamente.',
  },
  {
    type: 'tip',
    title: 'Transparencia binaria del GIF vs canal alfa del PNG',
    html: 'El GIF solo soporta transparencia binaria (opaco o transparente). Al convertir a PNG, los píxeles semi-transparentes del GIF se mantienen tal como el navegador los interpreta. Si tu GIF tiene bordes dentados, el PNG los conservará — pero podrás editarlos con suavizado de bordes en cualquier editor, algo imposible con el GIF original.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad del PNG resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logos e iconos para uso sobre cualquier color de fondo.',
      'Avatares para Discord, Telegram, Slack y plataformas de gaming.',
      'Gráficos de interfaz para aplicaciones web y móviles.',
      'Stickers y emojis personalizados con fondo transparente.',
      'Capturas de pantalla y elementos UI para documentación técnica.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: PNG es lo que el GIF siempre quiso ser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir de GIF a PNG no es solo cambiar de formato: es actualizar una imagen al estándar moderno que el GIF nunca pudo alcanzar. Más colores, mejor transparencia, menos peso. Nuestra herramienta realiza esta conversión en milisegundos, directamente en tu navegador, sin enviar ningún dato al exterior.',
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

export const content: GifAPngLocaleContent = {
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
