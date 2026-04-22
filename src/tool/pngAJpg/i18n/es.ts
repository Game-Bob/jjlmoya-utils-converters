import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convertidor-png-a-jpg';
const title = 'Convertir PNG a JPG Online';
const description =
  'Convierte tus imágenes PNG a formato JPG de compresión rápida al instante en tu propio ordenador. Sin subir fotos a internet. Optimización por lotes.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos PNG...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente': 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué elegir nuestro convertidor local de PNG a JPG?',
    answer:
      'A diferencia de las herramientas convencionales, nuestra utilidad procesa los archivos íntegramente en tu navegador. Tus imágenes nunca tocan un disco duro ajeno, garantizando la total soberanía y privacidad de tus datos.',
  },
  {
    question: '¿JPG o PNG? ¿Cuál es mejor para mi caso?',
    answer:
      'El PNG es ideal para logotipos y elementos con transparencia. Sin embargo, el JPG es el estándar de oro para fotografías y banners web, ya que logra pesos mucho más reducidos, mejorando drásticamente la velocidad de carga de un sitio.',
  },
  {
    question: '¿Cómo funciona la conversión técnica sin subir nada?',
    answer:
      'Utilizamos la potencia del Canvas de HTML5. El navegador recrea la imagen en un lienzo virtual invisible, rellena las transparencias con blanco y genera un flujo de bytes que descargas directamente al instante.',
  },
  {
    question: '¿Es seguro para documentos confidenciales?',
    answer:
      'Sí, es la opción más segura para profesionales de la banca, salud o derecho. Al ser una "caja negra" que solo usa tu RAM, lo que pasa dentro muere al cerrar la pestaña, evitando filtraciones en nubes de terceros.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Selección de archivos',
    text: 'Prepara tus archivos PNG en una carpeta y arrástralos todos juntos al área de procesamiento o búscalos con el explorador.',
  },
  {
    name: 'Procesamiento instantáneo',
    text: 'Verifica que el estado cambie a "Listo" para cada archivo mientras el navegador optimiza el peso localmente.',
  },
  {
    name: 'Descarga optimizada',
    text: 'Guarda tus nuevos JPG uno a uno o usa el botón "Descargar Todo" para obtener un archivo ZIP comprimido con todas las imágenes.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de PNG a JPG: La Guía Definitiva para la Optimización de Imágenes',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'En el mundo del diseño digital y el desarrollo web, la eficiencia lo es todo. El formato PNG (Portable Network Graphics) es amado por su capacidad de mantener transparencias y su compresión sin pérdida, pero tiene un gran enemigo: el peso del archivo. Cuando necesitas que tu sitio web vuele o que tus emails carguen instantáneamente, el paso de PNG a JPG es la decisión técnica más inteligente.',
  },
  {
    type: 'title',
    text: '¿JPG o PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'No existe un formato mejor que otro, sino una herramienta para cada necesidad. El PNG es un formato sin pérdida, ideal para maquetas de interfaces, logotipos con texto pequeño y elementos visuales que requieren un fondo transparente. Sin embargo, esta fidelidad tiene un coste: archivos que pueden ser 5 o 10 veces más pesados que su equivalente comprimido.',
  },
  {
    type: 'paragraph',
    html: 'El JPG (Joint Photographic Experts Group), por otro lado, utiliza algoritmos de discretización para eliminar información que el ojo humano apenas percibe, logrando pesos pluma. Es el estándar de oro para fotografías, banners publicitarios y redes sociales. Al convertir tus PNG a JPG, estás traduciendo fidelidad geométrica por velocidad de red.',
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
        description: 'Herramientas tradicionales que suben tus fotos a un servidor remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latencia de red (Upload/Download)',
          'Riesgo de filtración de datos privados',
          'Límites de tamaño por archivo',
          'Publicidad y rastreadores',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocidad instantánea sin red',
          'Privacidad garantizada (0 bytes enviados)',
          'Sin límites de MB por archivo',
          'Interfaz profesional y limpia',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión técnica',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Probablemente te preguntes cómo es posible convertir una imagen sin enviarla a un servidor. La magia reside en la potencia de los navegadores modernos. Cuando seleccionas un archivo, generamos un Blob que solo existe en tu RAM. Ese Blob se dibuja en un elemento HTML5 Canvas invisible.',
  },
  {
    type: 'paragraph',
    html: 'Dado que el JPG no soporta transparencias, nuestro algoritmo rellena el fondo con un color blanco sólido antes de "pintar" el PNG encima. Una vez compuesta la imagen, ejecutamos el método de exportación nativo, generando un flujo de bytes que tu ordenador descarga directamente.',
  },
  {
    type: 'tip',
    title: 'Consejo SEO: El Peso Ideal',
    html: 'Google penaliza activamente los sitios web lentos. Si tu Largest Contentful Paint (LCP) es alto por culpa de un PNG de cabecera de 2MB, convertirlo a un JPG de 200KB puede mejorar tus métricas de PageSpeed instantáneamente sin diferencias visuales.',
  },
  {
    type: 'title',
    text: 'Seguridad para Empresas y Profesionales',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Si trabajas en sectores sensibles como la banca, la salud o el derecho, subir archivos a conversores online es una violación de seguridad. Nuestra herramienta funciona como una "caja negra": lo que pasa dentro se queda en tu RAM. Es la única forma segura de trabajar con documentos confidenciales.',
  },
  {
    type: 'title',
    text: 'Compatibilidad del Resultado',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Visores de Windows, macOS y dispositivos móviles.',
      'Redes sociales (Instagram, LinkedIn, etc).',
      'Herramientas de ofimática (Word, PowerPoint).',
      'Gestores de contenido (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: Optimiza como un Pro',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Este convertidor no es solo una página más; es una pieza de ingeniería diseñada para facilitarte la vida. Ya seas un desarrollador o un usuario doméstico, aquí tienes la solución definitiva para ahorrar megabytes y mantener tus datos a salvo.',
  },
];


export const content: PngAJpgLocaleContent = {
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
