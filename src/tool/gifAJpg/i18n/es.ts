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
  faqTitle: 'Preguntas Frecuentes',
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
    text: 'Convertidor de GIF a JPG: Extrae Fotogramas como Imágenes de Alta Calidad',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Los archivos GIF llevan décadas dominando el mundo de las animaciones cortas en internet. Sin embargo, su naturaleza animada los hace completamente inútiles como miniatura, vista previa para redes sociales o imagen para documentos. Cuando necesitas extraer un fotograma concreto de un GIF y convertirlo en una imagen estática de alta calidad, la conversión a JPG es la solución más práctica y compatible.',
  },
  {
    type: 'title',
    text: '¿GIF o JPG? Formatos con propósitos opuestos',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El GIF (Graphics Interchange Format) fue diseñado en 1987 con una limitación severa que persiste hoy: solo puede representar 256 colores por fotograma. Esta restricción técnica no importaba para animaciones simples con paletas reducidas, pero la convierte en un formato visualmente pobre para capturas de fotografía real. El JPG, en cambio, puede renderizar millones de colores con algoritmos de compresión perceptual avanzados.',
  },
  {
    type: 'paragraph',
    html: 'Extraer un fotograma de un GIF y guardarlo como JPG tiene múltiples aplicaciones: generar thumbnails para reproductores de video, crear previsualizaciones para plataformas de gestión de contenidos, obtener imágenes estáticas para presentaciones o simplemente archivar un momento visual de una animación compleja. El JPG resultante será mucho más ligero que el GIF original y universalmente compatible.',
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
        description: 'Herramientas que suben tus archivos a un servidor remoto para procesarlos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tus GIFs viajan por internet a servidores de terceros',
          'Latencia de red en subida y bajada',
          'Límites de tamaño y de archivos por sesión',
          'Riesgo de retención de datos en servidores ajenos',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'El GIF nunca abandona tu dispositivo',
          'Velocidad instantánea sin espera de red',
          'Sin límites de tamaño ni de archivos',
          'Privacidad total: 0 bytes enviados al exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la extracción técnica del fotograma',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversión local se apoya en la potencia del Canvas API de HTML5. Cuando cargas un GIF, el navegador lo decodifica en memoria como un elemento Image nativo. Al renderizarlo sobre un canvas invisible, el motor gráfico del navegador captura automáticamente el primer fotograma de la secuencia de animación.',
  },
  {
    type: 'paragraph',
    html: 'Dado que el formato JPG no soporta transparencias, nuestro algoritmo aplica un fondo blanco sólido antes de exportar. El método <code>toDataURL(\'image/jpeg\')</code> del canvas genera el flujo de bytes JPG directamente en la RAM de tu ordenador, sin ninguna conexión de red. El archivo resultante se descarga inmediatamente a tu dispositivo.',
  },
  {
    type: 'tip',
    title: 'Paleta de colores limitada del GIF',
    html: 'El GIF solo puede contener 256 colores por fotograma. El JPG extraído heredará esa paleta reducida del original: si el GIF tenía degradados o fotografías, puede verse con cierta posterización. Para obtener el mejor resultado, usa GIFs con colores simples o ilustraciones.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad del JPG resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Thumbnails y vistas previas para plataformas de video y CMS.',
      'Imágenes de portada para publicaciones en redes sociales.',
      'Inserción en documentos Word, PowerPoint o PDF.',
      'Archivos de presentación y materiales de marketing.',
      'Compatibilidad universal con visores en Windows, macOS y móviles.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: el fotograma que vale más que la animación',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Un GIF animado de 2 MB puede producir un JPG del primer fotograma de apenas 50-200 KB, dependiendo de la resolución. Nuestra herramienta realiza esta conversión de forma instantánea, privada y sin límites, directamente en tu navegador. Sin servidores, sin cuentas, sin esperas.',
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
