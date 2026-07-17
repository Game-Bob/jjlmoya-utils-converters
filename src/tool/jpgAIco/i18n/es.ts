import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'convertidor-jpg-a-ico';
const title = 'Convertidor de JPG a ICO';
const description =
  'Convierte fotos JPG a ICO con cabeceras binarias reales de Microsoft. Recorte automático cuadrado. Sin subir archivos. Gratis y privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos JPG...',
  convertText: 'Para convertirlos a ICO al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: '¿El archivo ICO que resulta es compatible nativamente para personalizar carpetas Windows?',
    answer:
      'Sí, creamos un archivo Microsoft Icon Format 100% auténtico insertando a bajo nivel una cabecera binaria estandarizada a la matriz de imagen.',
  },
  {
    question: '¿Qué pasa con la proporción si mi JPG original es una foto horizontal panorámica?',
    answer:
      'El estándar rígido global del ICO requiere obligatoriamente una imagen perfectamente cuadrada. Nuestro motor JS HTML5 centrará tu foto y recortará los excedentes garantizando un resultado equilibrado.',
  },
  {
    question: '¿Es peligroso subir corporativos o logotipos personales JPG al conversor?',
    answer:
      'El motor Canvas en JavaScript descansa en tu propio explorador físico. Convertir cientos de fotos a ICO no manda un solo megabyte hacia ninguna nube en países dudosos.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Junta las Fotocopias JPG Originales',
    text: 'Busca y acapara las fotos convencionales y deposítalas tirándolas en nuestro cuadrado amigable.',
  },
  {
    name: 'Observa la Purificación Hexadecimal Ciega',
    text: 'La recodificación insertará nativa y velozmente los metadatos y encabezados generando asincrónico por memoria un estricto icono puro.',
  },
  {
    name: 'Compila Múltiples Diseños ZIP',
    text: 'Termina la labor descargando todo masivamente en paquete compacto en pocos segundos.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de JPG a ICO: Crea Favicons y Iconos Windows desde tus Fotos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El formato <strong>ICO</strong> es el estándar de Microsoft para iconos de Windows y favicons de páginas web. A diferencia de simplemente renombrar un JPG como .ico, un archivo ICO genuino requiere una estructura binaria específica con cabeceras de 22 bytes y un directorio de imágenes embebido. El <strong>JPG</strong> es el punto de partida más común para crear estos iconos - un logotipo de empresa, una fotografía de perfil o cualquier imagen que quieras convertir en el icono visual de tu aplicación o sitio web.',
  },
  {
    type: 'title',
    text: '¿JPG o ICO? Cuándo usar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>JPG</strong> es el formato de origen, no el destino. Perfectamente adecuado para fotografías y banners, pero incompatible con los sistemas que exigen iconos: Windows Explorer, la barra de favoritos del navegador, los accesos directos del escritorio o los manifest de aplicaciones PWA. Un sistema operativo o navegador que busca un icono espera el formato ICO - y si no lo encuentra, mostrará un icono genérico o un cuadrado roto.',
  },
  {
    type: 'paragraph',
    html: 'El formato <strong>ICO</strong> fue diseñado para contener múltiples resoluciones en un solo archivo: <strong>16×16</strong> para la barra de favoritos, <strong>32×32</strong> para accesos directos, <strong>48×48</strong> para el explorador de archivos y <strong>256×256</strong> para pantallas de alta densidad. Los navegadores y sistemas operativos seleccionan automáticamente la resolución adecuada según el contexto de visualización, sin que el usuario tenga que gestionar nada.',
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
          'Tus logos corporativos quedan en servidores ajenos',
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
    html: 'El JPG se decodifica y se dibuja en un <strong>Canvas HTML5</strong> en memoria. Como el formato ICO exige imagen cuadrada, el motor detecta automáticamente si el JPG es rectangular und lo recorta centrando la parte más relevante. A continuación, construye la cabecera ICO estándar de Microsoft con el número mágico correcto (<code>00 00 01 00</code>), el directorio de imágenes und los datos de píxeles codificados. El resultado es un archivo .ico binario genuino, no un PNG renombrado.',
  },
  {
    type: 'paragraph',
    html: 'Dado que el JPG carece de canal alfa, el ICO resultante tampoco tendrá transparencia - tendrá un fondo sólido heredado de la fotografía original. Si necesitas un favicon con fondo transparente (por ejemplo, para que se adapte a barras de favoritos oscuras o claras), el flujo recomendado es: elimina el fondo en un editor, guarda como PNG und usa el convertidor de PNG a ICO.',
  },
  {
    type: 'tip',
    title: 'Consejo: resoluciones múltiples en un solo ICO',
    html: 'Los archivos ICO pueden empaquetar <strong>varias resoluciones</strong> en un único fichero - el navegador o el sistema operativo elige automáticamente la más adecuada según el contexto. Para el mejor resultado posible, usa como fuente un JPG cuadrado de al menos <strong>256×256 píxeles</strong>: así el convertidor tendrá suficiente información para generar con nitidez los tamaños 16×16, 32×32 und 48×48 sin pixelado.',
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
      'Favicon para sitios web: compatible con todos los navegadores incluyendo Internet Explorer.',
      'Personalización de carpetas e iconos de escritorio en Windows 10/11.',
      'Icono de acceso directo para aplicaciones de escritorio o instaladores.',
      'Icono de aplicación para proyectos Electron o aplicaciones PWA.',
      'Iconos para sistemas de gestión de archivos und exploradores corporativos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir un JPG a ICO es un paso técnico imprescindible para cualquier proyecto web o de escritorio que necesite una identidad visual reconocible. Esta herramienta genera ICO auténticos con la estructura binaria correcta, en segundos, sin subir tu logo a ningún servidor externo. El resultado funciona en todos los navegadores, en Windows Explorer und en cualquier sistema que consuma el estándar ICO de Microsoft.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
