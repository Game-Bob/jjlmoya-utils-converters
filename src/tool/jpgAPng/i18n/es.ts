import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'convertidor-jpg-a-png';
const title = 'Convertir JPG a PNG Online y Gratis';
const description =
  'Convierte imágenes JPG a PNG en tu navegador sin subir archivos. Conversión lossless, gratuita y totalmente privada.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos JPG...',
  convertText: 'Para convertirlos a PNG al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
  faqTitle: 'Preguntas Frecuentes',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: '¿Cuándo debería usar JPG a PNG?',
    answer:
      'Siempre que vayas a editar texto o logos dentro de una fotografía. Si guardas un JPG varias veces, este se ensucia. El PNG congela la compresión.',
  },
  {
    question: '¿El archivo PNG tendrá el fondo transparente de inmediato?',
    answer:
      'No. El JPG original venía plano y sin ese tipo de canal estructural. El PNG resultante preparará ese contenedor, luego deberás aislar la pieza usando Photoshop u otro editor.',
  },
  {
    question: '¿Tiene esta web límites de tráfico?',
    answer:
      'Gracias a tecnologías Edge sin dependencias cloud, el peso de tu conversión no supone límites porque usa íntegramente tu terminal informático o móvil.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Arrastra JPG al panel',
    text: 'Sube imágenes estáticas en formato JPG usando ratón táctil o selector del ordenador.',
  },
  {
    name: 'Ejecución Lossless',
    text: 'El software de Vanilla empuja los bits del cuadro hacia un envoltorio sin perdidas nativo de la familia PNG.',
  },
  {
    name: 'Terminar Sesión',
    text: 'Pulsa el panel y tu navegador depositará los activos web descargados en tus Carpetas de Usuario.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertidor de JPG a PNG: Edición sin Pérdidas y Transparencia',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'El <strong>JPG</strong> es insuperable para fotografías de cámara, pero tiene un talón de Aquiles: cada vez que guardas el archivo aplica de nuevo su compresión con pérdida, degradando progresivamente los bordes y los degradados. El <strong>PNG</strong> usa compresión sin pérdida - una vez guardado, los píxeles son inmutables. Convertir un JPG a PNG es la operación clave cuando necesitas preparar una imagen para edición intensiva, añadir un fondo transparente o integrarla en un flujo de diseño que requiere múltiples guardados.',
  },
  {
    type: 'title',
    text: '¿JPG o PNG? Cuándo usar cada formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El <strong>JPG</strong> es el rey de la fotografía: pesos reducidos, compatible con todo. Pero sus artefactos de compresión se acumulan con cada edición y re-guardado. Si necesitas recortar, retocar o añadir texto a una imagen repetidamente, empezar desde JPG significa introducir degradación en cada ciclo. Además, el JPG carece de canal alfa: no puede tener fondos transparentes, lo que lo descalifica para logotipos, iconos y elementos de UI.',
  },
  {
    type: 'paragraph',
    html: 'El <strong>PNG</strong> es la elección correcta para logos corporativos, capturas de pantalla con texto nítido, elementos de interfaz, imágenes de producto con fondo blanco que luego necesitarás recortar, o cualquier recurso gráfico que vaya a ser editado más de una vez. La compresión sin pérdida garantiza que los bordes del texto se mantienen perfectamente definidos y que los colores planos permanecen puros, sin ruido JPEG.',
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
          'Tus imágenes quedan en servidores ajenos',
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
    html: 'El proceso es puramente local: el navegador crea un <strong>Blob</strong> con el JPG seleccionado y lo dibuja sobre un <strong>Canvas HTML5</strong> en memoria. Una vez renderizado, se llama a <code>toDataURL(\'image/png\')</code> - el codec PNG integrado en el navegador recodifica cada píxel sin aplicar ninguna nueva compresión con pérdida. El resultado es un PNG que preserva fielmente el estado actual del JPG: ni mejor ni peor, simplemente congelado.',
  },
  {
    type: 'paragraph',
    html: 'El PNG resultante utilizará compresión DEFLATE sin pérdida, la misma que emplean herramientas profesionales como Photoshop o GIMP. Su tamaño será mayor que el JPG original - normalmente entre 2 y 5 veces - porque almacena todos los píxeles sin descartar información. Es el precio que se paga por la fidelidad y la editabilidad infinita.',
  },
  {
    type: 'tip',
    title: 'Importante: el PNG no recupera la calidad JPEG',
    html: 'Convertir un JPG a PNG <strong>no recupera la calidad perdida</strong> durante la compresión JPEG original. Si tu JPG ya tenía artefactos de bloque o ruido de color, el PNG los conservará intactos - simplemente evita que se añadan más. Piensa en la conversión como "congelar" el estado actual de la imagen para que ediciones futuras no la degraden más.',
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
      'Logos y elementos de marca que necesitan fondo transparente tras el recorte.',
      'Capturas de pantalla con texto que serán editadas y re-guardadas varias veces.',
      'Imágenes de producto para e-commerce que requieren fondo blanco limpio y recortable.',
      'Recursos gráficos para presentaciones de PowerPoint o Google Slides.',
      'Activos de UI para aplicaciones web y móviles donde la nitidez de bordes es crítica.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversión de JPG a PNG es el primer paso en cualquier flujo de trabajo de diseño serio. No transforma la calidad original, pero sí protege cada píxel de ediciones futuras. Con esta herramienta, el proceso ocurre al instante y de forma completamente privada, sin que tus imágenes corporativas o personales salgan en ningún momento de tu dispositivo.',
  },
];


export const content: JpgAPngLocaleContent = {
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
