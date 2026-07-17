import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'convertidor-svg-a-jpg';
const title = 'Convertir SVG a JPG Online y Gratis';
const description =
  'Convierte archivos SVG vectoriales a JPG en tu navegador. Renderizado 2x de alta resolución. Sin subir archivos. Gratis y 100% privado.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos SVG...',
  convertText: 'Para convertirlos a JPG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: '¿Por qué convertir SVG a JPG?',
    answer:
      'JPG ofrece la máxima compatibilidad en todo tipo de dispositivos; convertir un SVG a JPG es la mejor forma de asegurar que todos puedan ver tu diseño sin fallos de renderizado.',
  },
  {
    question: '¿Qué ocurre con la transparencia del SVG?',
    answer:
      'Al convertir a JPG (que no soporta transparencias), se añadirá automáticamente un fondo blanco opaco a tu composición vectorial.',
  },
  {
    question: '¿Qué resolución tendrá el JPG resultante?',
    answer:
      'La herramienta renderiza el SVG a doble escala (2x) para garantizar una alta resolución adecuada para pantallas Retina y uso profesional.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Inserta tus archivos de vectores',
    text: 'Pega tus archivos SVG en la zona superior para preparar el listado de exportación.',
  },
  {
    name: 'Rasterizado a JPG',
    text: 'La herramienta convertirá los vectores en píxeles de alta resolución y generará tu JPG al instante.',
  },
  {
    name: 'Descarga los resultados',
    text: 'Obtén tus archivos JPG uno a uno o como paquete ZIP.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor SVG a JPG: Lleva tus Vectores a Cualquier Plataforma',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El formato <strong>SVG</strong> es el lenguaje nativo de la web moderna: ligero, escalable, editable. Pero hay plataformas enteras que simplemente no entienden vectores. Las redes sociales, los clientes de correo electrónico, los documentos Word, las aplicaciones de impresión y la inmensa mayoría del software del mundo real trabajan con imágenes rasterizadas. El <strong>JPG</strong> es el denominador común universal: aceptado en todos partes, sin excepciones, sin necesidad de plugins ni conversiones adicionales.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Cuando el Vector Necesita Convertirse en Foto',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG almacena la imagen como instrucciones matemáticas. Esta naturaleza vectorial lo hace perfecto para la web pero invisible para el mundo analógico y el software heredado. Un archivo SVG enviado por correo electrónico puede aparecer como texto XML incomprensible en el cliente del destinatario. Un SVG adjunto a un documento Word puede no renderizarse en absoluto en versiones antiguas de Office.',
  },
  {
    type: 'paragraph',
    html: 'JPG convierte cada imagen en una matriz de píxeles con información de color comprimida mediante el algoritmo JPEG. Al no admitir canal alfa, el convertidor fusiona automáticamente el fondo con blanco sólido. A cambio, obtienes un archivo que se abre en <em>cualquier dispositivo del planeta</em>: móviles antiguos, impresoras, televisores inteligentes, aplicaciones de edición de hace veinte años. Es el formato del mínimo común denominador, y en muchos contextos, el más valioso.',
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
          'Tu código SVG (con datos de diseño propietario) viaja a servidores externos',
          'Renderizado inconsistente de fuentes y gradientes',
          'Necesitas conexión a Internet para cada conversión',
          'Calidad JPG de salida no siempre configurable',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Cero bytes de tu SVG salen del navegador',
          'Renderizado fiel usando el motor nativo del navegador',
          'JPG a 2x de resolución para máxima nitidez',
          'Fondo blanco aplicado automáticamente por el estándar JPG',
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
    html: 'El archivo SVG se carga en un elemento <strong>Image</strong> del navegador, que utiliza su propio motor de renderizado vectorial para interpretar el XML. El resultado visual se dibuja sobre un <strong>Canvas HTML5</strong> con fondo blanco previo (necesario porque JPG no admite transparencias) a doble escala para maximizar la resolución de salida.',
  },
  {
    type: 'paragraph',
    html: 'El método <code>toDataURL(\'image/jpeg\', 0.92)</code> convierte los píxeles del canvas en un archivo JPG de alta calidad. Los colores del SVG pueden experimentar ligeras variaciones debido a la conversión del espacio de color de la compresión JPEG. Por ello es recomendable previsualizar el resultado antes de usarlo en trabajos de impresión profesional donde la fidelidad cromática es crítica.',
  },
  {
    type: 'tip',
    title: 'Consejo para impresión',
    html: 'Los fondos y degradados SVG pueden lucir ligeramente diferentes en JPG debido al perfil de color de la compresión JPEG. Previsualiza siempre el resultado antes de enviarlo a imprenta o usarlo en materiales de marketing impresos donde el color exacto de marca es importante.',
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
      'Compartir logos e ilustraciones SVG en Facebook, Twitter o LinkedIn.',
      'Adjuntar gráficos vectoriales en correos electrónicos con Outlook o Gmail.',
      'Insertar diseños SVG en documentos Word, Excel o presentaciones.',
      'Publicar imágenes de producto en tiendas online que no soportan SVG.',
      'Preparar archivos para servicios de impresión bajo demanda.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El mundo real todavía habla en píxeles. Esta herramienta traduce tus vectores SVG al lenguaje universal del JPG en segundos, con renderizado de alta resolución y sin que tus diseños propietarios abandonen jamás tu navegador.',
  },
];

export const content: SvgAJpgLocaleContent = {
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
