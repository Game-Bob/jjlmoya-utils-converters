import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImagenBase64LocaleContent } from '../index';
import type { ImageToBase64UI } from '../index';

const slug = 'convertidor-imagen-base64';
const title = 'Convertidor de Imagen a Base64 Online - Gratis y 100% Privado';
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
  invalidImageAlert: 'Por favor sube un archivo de imagen válido.',
  bibliographyTitle: 'Referencias Bibliográficas',
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

const bibliography: ImagenBase64LocaleContent['bibliography'] = [
  {
    name: 'MDN Web Docs: Data URIs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
  },
  {
    name: 'Base64 Encoding RFC 4648',
    url: 'https://datatracker.ietf.org/doc/html/rfc4648',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de Imagen a Base64 Online',
  },
  {
    type: 'paragraph',
    html:
      'La codificación Base64 es una técnica fundamental en el desarrollo web moderno. Permite representar datos binarios (como imágenes) como texto ASCII, lo que hace posible incrustar imágenes directamente en código HTML, CSS o JavaScript sin necesidad de archivos separados. Esto se realiza mediante los llamados Data URIs (Uniform Resource Identifiers de datos).',
  },
  {
    type: 'paragraph',
    html:
      'Un Data URI para una imagen sigue el formato: data:[tipo MIME];base64,[datos codificados]. Por ejemplo, una imagen PNG pequeña podría representarse como data:image/png;base64,iVBORw0KGgo... Nuestra herramienta genera automáticamente el tipo MIME correcto según el formato de la imagen que subas.',
  },
  {
    type: 'paragraph',
    html:
      'Los principales casos de uso para imágenes en Base64 incluyen: iconos SVG en CSS, logotipos pequeños en aplicaciones SPA (Single Page Applications), imágenes críticas para carga inicial que no deben causar peticiones adicionales de red, y datos de imagen en JSON o APIs REST.',
  },
  {
    type: 'tip',
    html:
      'El código Base64 es aproximadamente un 33% más grande que el archivo original. Para imágenes pequeñas (iconos, logos, pequeños sprites) es eficiente. Para fotografías grandes, es mejor usar archivos separados y aprovechar la caché del navegador.',
  },
  {
    type: 'paragraph',
    html:
      'Una imagen PNG de 1KB se convierte en aproximadamente 1.37KB de Base64. Una imagen de 100KB resultaría en unos 137KB de texto Base64. Este factor de 1.33x es constante para cualquier tipo de archivo.',
  },
  {
    type: 'paragraph',
    html:
      'Nuestra herramienta procesa todo localmente. La imagen se lee mediante la API FileReader del navegador, que la convierte directamente a Base64 sin ningún envío de datos a servidores externos. Esto garantiza la privacidad total de tus imágenes, sean personales o corporativas.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte imágenes a Base64 y Data URI de forma gratuita y privada. Soporte para JPG, PNG, WebP, SVG y GIF. Resultado inmediato en tu navegador sin procesamiento en servidores.',
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

export const content: ImagenBase64LocaleContent = {
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
