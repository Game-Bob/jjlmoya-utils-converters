import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'convertidor-png-a-ico';
const title = 'Convertir PNG a ICO Online';
const description =
  'Convierte PNG a ICO con cabeceras binarias reales. Transparencias preservadas. Sin subir archivos. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos PNG...',
  convertText: 'Para convertirlos a ICO al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográfica',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: '¿Es tu conversor un creador de simples archivos PNG disfrazados o un ICO verídico?',
    answer:
      'Hacemos un ICO real. Extraemos los datos de tu PNG, creamos la cabecera hexadecimal estandarizada propia de Microsoft (Header + Directory de 22 bytes), redimensionamos al formato cuadrado ideal localmente y armamos un archivo informático final validado como nativo.',
  },
  {
    question: '¿Se conservan las transparencias cuando mi logo se asimile en el icono?',
    answer:
      'Absolutamente sí. Nuestro motor lee tu PNG a 32 bits, lo ancla conservando milimétricamente cualquier agujero pasante transparente para que resalte en la barra de direcciones universal web (Favicon).',
  },
  {
    question: '¿Queda guardado el logo de mi empresa en sus servidores?',
    answer:
      'Este servicio garantiza un contacto cero red exterior. El convertidor funciona anclado en tu Canvas interno HTML5; la fabricación de tu icono transcurre cien por ciento dentro de tu equipo en memoria local puramente secreta.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Arrastra Archivos A Trasladar',
    text: 'Sitúa las matrices de tu foto (es deseable usar cuadrangulares 512x512 PNG) sobre el marco local interactivo.',
  },
  {
    name: 'Compilación Automática del Bytecode',
    text: 'Verás a fondo la barra correr cargando internamente y fabricando la matriz local de cabeceras Hexadecimales purificadas ICO.',
  },
  {
    name: 'Acumula o Escapa con tu ZIP',
    text: 'Asímilalos pinchando un mega compilado para tus sitios web (botones ZIP globales) o baja la miniatura para el ejecutable Windows.',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Estructura Técnica del Microsoft ICO Format',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Favicon Standard - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de PNG a ICO: El Mejor Origen para Favicons con Transparencia Perfecta',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El <strong>PNG con transparencia</strong> es el material de partida ideal para crear iconos ICO profesionales. A diferencia del JPG (que no tiene canal alfa) o de formatos con pérdida, el PNG te da exactamente lo que el formato ICO necesita: píxeles nítidos, bordes limpios y un canal alfa de 32 bits que permite que el icono se integre perfectamente sobre cualquier fondo — ya sea la barra de favoritos blanca de Safari, la barra oscura de Firefox o el escritorio de Windows 11.',
  },
  {
    type: 'title',
    text: '¿PNG o ICO? Cuándo usar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>PNG</strong> es el formato de trabajo: es donde diseñas tu logo, exportas desde Figma o Illustrator y guardas las versiones editables. Sus transparencias, precisión de píxeles y compresión sin pérdida lo hacen insuperable para el proceso de diseño. Pero los navegadores, sistemas operativos y aplicaciones de Windows que buscan un favicon o un icono de aplicación no aceptan PNG directamente — necesitan ICO.',
  },
  {
    type: 'paragraph',
    html: 'El <strong>ICO</strong> es el formato de distribución para iconos en entornos Microsoft y web. Contiene una estructura binaria específica que permite empaquetar múltiples resoluciones en un solo archivo: el navegador lee el directorio interno del ICO und selecciona automáticamente <strong>16×16</strong> para la pestaña del navegador, <strong>32×32</strong> para accesos directos, <strong>48×48</strong> para el explorador de archivos und <strong>256×256</strong> para pantallas Retina und 4K. Partir de un PNG con transparencia garantiza que todas esas resoluciones tendrán bordes perfectos sin fleco blanco.',
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
          'Latencia de red en upload und download',
          'Tu logo corporativo queda en servidores ajenos',
          'Límites de tamaño und conversiones diarias',
          'Publicidad intrusiva und rastreadores de terceros',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidad instantánea — cero latencia de red',
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
    html: 'El PNG se decodifica en un <strong>Canvas HTML5</strong> en memoria con soporte completo del canal alfa de 32 bits. El motor construye la cabecera ICO estándar de Microsoft con el número mágico correcto (<code>00 00 01 00</code>), el directorio de imágenes con las dimensiones und el offset de datos, und los píxeles codificados manteniendo la información de transparencia. El resultado es un archivo .ico binario genuino que Windows, macOS und todos los navegadores reconocen de forma nativa.',
  },
  {
    type: 'paragraph',
    html: 'La transparencia del PNG se preserva de forma completa en el ICO resultante — los píxeles transparentes siguen siendo transparentes, los semitransparentes mantienen su valor alfa exacto und los opacos conservan su color original. Esto es crítico para logos sobre fondos variables: tu favicon se verá correctamente en modo claro, modo oscuro und cualquier combinación de colores de la interfaz del navegador.',
  },
  {
    type: 'tip',
    title: 'Consejo: usa un PNG de 512×512 como fuente',
    html: 'Para el mejor resultado posible, usa un <strong>PNG cuadrado de 512×512 píxeles</strong> como imagen de origen. Esta resolución da al convertidor suficiente información para generar con nitidez todos los tamaños ICO estándar — desde el 16×16 del favicon hasta el 256×256 para pantallas de alta densidad — sin pixelado ni pérdida de detalle en los bordes. Cuanto mayor sea el PNG de partida, mejores serán los iconos pequeños resultantes.',
  },
  {
    type: 'title',
    text: 'Casos de uso und compatibilidad',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Favicon con transparencia para sitios web: funciona en Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'Icono de aplicación PWA: el manifest.json referencia el ICO para la instalación en escritorio.',
      'Personalización de carpetas en Windows 10/11 con logo corporativo sin fondo blanco.',
      'Icono de acceso directo para aplicaciones de escritorio, instaladores und ejecutables.',
      'Icono de extensiones de navegador Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El PNG con transparencia es, sin duda, el mejor punto de partida para crear iconos ICO de calidad profesional. Con esta herramienta, la conversión es instantánea, los canales alfa se preservan íntegramente und el archivo resultante es un ICO genuino con la estructura binaria correcta. Sin subir tu logo a ningún servidor, sin marcas de agua, sin límites — und con transparencia perfecta en todos los tamaños.',
  },
];

export const content: PngAIcoLocaleContent = {
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
