import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'convertidor-imagen-base64';
const title = 'Convertidor de Imagen a Base64 Online';
const description =
  'Convierte cualquier imagen a código Base64 y Data URI directamente en tu navegador. Sin subir archivos. Gratis, privado e instantáneo.';

const ui: ImageToBase64UI = {
  dragTitle: 'Arrastra tu imagen aquí',
  dragSubtext: 'o haz clic para explorar tus archivos',
  formatBadge: 'Soporta JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Listo para CSS / HTML src="")',
  base64Label: 'Solo Base64 (Texto plano codificado)',
  copyBtn: 'Copiar',
  dataUriPlaceholder: 'Sube una imagen para ver el código Data URI...',
  base64Placeholder: 'Sube una imagen para ver el código Base64 puro...',
  toastMessage: '¡Código copiado al portapapeles!',
  invalidImageAlert: 'Por favor sube un archivo de imagen válido.': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: '¿Qué es Base64 y para qué sirve en el desarrollo web?',
    answer:
      'Base64 es un sistema de codificación que convierte datos binarios en una cadena de texto ASCII. En desarrollo web, se utiliza para incrustar imágenes directamente dentro de los archivos HTML o CSS mediante Data URIs, reduciendo el número de peticiones HTTP al servidor.',
  },
  {
    question: '¿Es seguro convertir mis imágenes a Base64 aquí?',
    answer:
      'Absolutamente seguro y privado. Nuestra herramienta funciona 100% de manera local en tu navegador. Tus imágenes nunca se suben ni se procesan en ningún servidor externo.',
  },
  {
    question: '¿Qué formatos de imagen soporta el convertidor a Base64?',
    answer:
      'La herramienta es compatible con JPG, PNG, GIF, WebP, e incluso archivos vectoriales SVG. Al cargar la imagen, automáticamente detectará su tipo MIME para generar el código Data URI exacto.',
  },
  {
    question: '¿Cuándo NO debería usar imágenes en Base64?',
    answer:
      'Debes evitar usar imágenes en Base64 para fotografías grandes o imágenes de alta resolución. El código Base64 ocupa aproximadamente un 33% más de peso que el archivo binario original, lo que puede inflar excesivamente tus hojas de estilo CSS o documentos HTML.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Arrastra o Selecciona tu Imagen',
    text: 'Mueve cualquier imagen (JPG, PNG, WebP, SVG, GIF) al área de carga para iniciar la conversión.',
  },
  {
    name: 'Copia el Código Generado',
    text: 'Verás dos textareas: el Data URI completo (listo para usar en src="" o CSS) y el Base64 puro para otros usos.',
  },
  {
    name: 'Usa el Código en tu Proyecto',
    text: 'Pega directamente el Data URI en el src de una etiqueta img o en tu CSS como background-image sin necesidad de archivos externos.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de Imagen a Base64: Incrusta Imágenes Sin Peticiones HTTP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 es una técnica de codificación que transforma datos binarios — como una imagen — en una cadena de texto ASCII puro. El resultado es un Data URI: una URL auto-contenida que empieza por <code>data:image/png;base64,...</code> y contiene toda la imagen codificada. Al incrustar este código directamente en tu HTML, CSS o JSON, la imagen se carga sin ninguna petición HTTP adicional al servidor — cero latencia de red, carga instantánea.',
  },
  {
    type: 'title',
    text: 'Cuándo usar imágenes en Base64',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El principal argumento a favor de Base64 es la eliminación de peticiones de red. Cada imagen en una página web supone una petición HTTP con su overhead de conexión, DNS, handshake TLS y latencia. Para imágenes críticas muy pequeñas — el logo principal de la aplicación, el favicon, un icono de UI — incrustarlas en Base64 en el CSS o HTML elimina ese coste y garantiza que se muestren de forma instantánea incluso antes de que el navegador haya cacheado nada.',
  },
  {
    type: 'paragraph',
    html: 'Esta técnica es especialmente poderosa en aplicaciones SPA (Single Page Applications) donde el bundle JavaScript y CSS se genera en tiempo de compilación: incrustar imágenes pequeñas en el bundle garantiza que se cargan junto con el código sin peticiones adicionales. También es indispensable para emails HTML, donde los clientes de correo bloquean imágenes externas pero siempre muestran Data URIs incrustados.',
  },
  {
    type: 'title',
    text: 'Casos de uso para imágenes en Base64',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> para iconos críticos.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> para SVGs de UI.',
      'JSON y APIs REST: enviar imágenes como datos de texto en payloads JSON.',
      'Emails HTML: imágenes incrustadas que se muestran aunque el cliente bloquee URLs externas.',
      'SVG embedding: incrustar imágenes rasterizadas dentro de archivos SVG como datos inline.',
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión en el navegador',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Cuando seleccionas o arrastras una imagen, la API <code>FileReader</code> del navegador la lee directamente desde el disco como datos binarios en memoria RAM. El método <code>readAsDataURL()</code> convierte esos bytes binarios a su representación Base64 usando el algoritmo de RFC 4648 — cada 3 bytes de datos originales se representan como 4 caracteres ASCII del alfabeto Base64. El resultado incluye el tipo MIME correcto detectado automáticamente.',
  },
  {
    type: 'tip',
    title: 'Úsalo solo para imágenes pequeñas (menos de 10 KB)',
    html: 'Base64 aumenta el tamaño del archivo en aproximadamente un 33%: una imagen de 10 KB se convierte en ~13.3 KB de texto. Para iconos y logos pequeños este coste es mínimo y la eliminación de la petición HTTP lo compensa. Para fotografías o imágenes grandes, el overhead de tamaño es significativo — usa siempre un CDN para imágenes grandes.',
  },
  {
    type: 'title',
    text: 'Cuándo NO usar Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Evita Base64 para imágenes grandes — usa un CDN',
    html: 'Si tienes imágenes de más de 10-20 KB, Base64 perjudica el rendimiento: infla el tamaño del HTML/CSS, impide que el navegador cachee la imagen de forma independiente, y bloquea el render mientras el parser procesa el string gigante. Para imágenes grandes, sirve siempre desde un CDN con headers de caché apropiados.',
  },
  {
    type: 'title',
    text: 'Compatibilidad y privacidad',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Los Data URIs son compatibles con el 100% de los navegadores modernos y la mayoría de clientes de email. Nuestra herramienta procesa todo localmente mediante la API FileReader — tus imágenes nunca salen de tu dispositivo. Esto la hace adecuada para imágenes corporativas, capturas de pantalla privadas o cualquier contenido visual confidencial que necesites convertir a Base64.',
  },
  {
    type: 'title',
    text: 'Conclusión: La herramienta de incrustación más rápida y privada',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir imágenes a Base64 es una técnica puntual pero muy poderosa cuando se aplica correctamente. Úsala para imágenes pequeñas y críticas donde cero peticiones HTTP marca la diferencia, y evítala para imágenes grandes donde un CDN siempre gana. Con nuestra herramienta, obtienes el Data URI en un instante, sin subir nada a ningún servidor.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
