import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'convertidor-gif-a-jpg';
const title = 'Convertir GIF a JPG Online | Vuelve tus animaciones fotos estáticas';
const description =
  'Extrae el primer fotograma de tus GIF y conviértelo a JPG. Sin servidor. Procesado local en tu navegador. Gratis e ilimitado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos GIF...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: '¿Qué ocurre con las animaciones cuando paso a JPG?',
    answer:
      'El formato JPG es estrictamente estático y no soporta múltiples fotogramas. Nuestro convertidor extrae únicamente la primera imagen o fotograma que aparece en la secuencia del GIF.',
  },
  {
    question: '¿Perderé algún efecto especial o fondo transparente?',
    answer:
      'Sí, es el comportamiento natural del estándar JPG. Si subes un GIF con fondo libre, insertamos automáticamente una capa sólida blanca subyacente para evitar colores corruptos.',
  },
  {
    question: '¿Puedo extraer fotos JPG de un GIF sin que la web guarde mi contenido?',
    answer:
      'Absolutamente sí. La herramienta es una App Web basada en el Canvas del HTML5. Toda la decodificación la ejecuta el procesador de tu propio dispositivo físico.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Arrastra Archivos Pesados Movibles',
    text: 'Sitúa o arrastra desde tu carpeta ese GIF hasta arrojarlo a nuestra caja de procesamiento.',
  },
  {
    name: 'Cálculo Limpio de Fotograma Primero',
    text: 'En fracciones de tiempo se extrae la animación creando el JPG blanco sólido sin contactar servidores.',
  },
  {
    name: 'Captúralos Empaquetados en Masa ZIP',
    text: 'Descarga a los botones o usando el Zip si procesaste un centenar largo de archivos.',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Especificación Técnica Joint Photographic Experts Group',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor GIF a JPG Online Gratuito',
  },
  {
    type: 'paragraph',
    html:
      'Los archivos GIF son ampliamente conocidos por su capacidad de reproducir animaciones cortas. Sin embargo, hay situaciones en que necesitas una imagen estática del contenido de un GIF: para usarla como miniatura, para enviarla por correo, o simplemente para obtener una versión de alta calidad de un momento específico de la animación.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir GIF a JPG extrae el primer fotograma de la animación y lo convierte en una imagen JPG estática. Durante este proceso, cualquier área transparente del GIF original (frecuente en GIFs animados con fondos transparentes) se sustituye por un fondo blanco sólido, ya que el formato JPG no soporta transparencias.',
  },
  {
    type: 'paragraph',
    html:
      'Nuestro convertidor carga el GIF en el elemento Image nativo del navegador, lo dibuja en un canvas HTML5 y lo exporta como JPG. Este proceso es completamente local: no se envían datos a ningún servidor. Puedes convertir GIFs con total privacidad.',
  },
  {
    type: 'tip',
    html:
      'Si necesitas extraer múltiples fotogramas de un GIF animado (no solo el primero), considera usar una herramienta especializada en edición de GIFs. Este convertidor está optimizado para obtener la imagen estática del primer fotograma de forma rápida.',
  },
  {
    type: 'paragraph',
    html:
      'Un GIF animado de 2 MB puede producir un JPG del primer fotograma de apenas 50-200 KB, dependiendo de la resolución y complejidad de la imagen.',
  },
  {
    type: 'paragraph',
    html:
      'Convierte GIF a JPG extrayendo el primer fotograma. Gratis, privado y local. Fondos transparentes sustituidos automáticamente por blanco para compatibilidad total con JPG.',
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

export const content: GifAJpgLocaleContent = {
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
