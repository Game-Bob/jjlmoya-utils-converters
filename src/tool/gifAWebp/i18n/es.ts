import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'convertidor-gif-a-webp';
const title = 'Convertir GIF a WebP estático | Ahorra peso offline';
const description =
  'Convierte GIF animados a WebP estático. Conserva transparencias. Sin servidor. Procesado local en tu navegador. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Arrastra archivos GIF...',
  convertText: 'Para convertirlos a WebP al instante',
  selectFiles: 'Seleccionar archivos',
  processedFiles: 'Archivos procesados',
  downloadAll: 'Descargar Todo (.zip)',
  pending: 'Pendiente',
  bibliographyTitle: 'Referencias Bibliográficas',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: '¿Por qué congelar un archivo movible al formato estático moderno WebP?',
    answer:
      'El formato WebP es el estándar de compresión de Google; es asombrosamente ligero y retiene transparencias limpiamente. Pasar de GIF a WebP elimina la pesada animación y logra una ganancia abismal en velocidad web.',
  },
  {
    question: '¿Seguirá siendo transparente el avatar originario?',
    answer:
      'Sí, frente al JPEG, el contenedor WebP respeta el complejo canal Alpha. Todas sus siluetas quedarán perfectas tal como procedían de forma nativa.',
  },
  {
    question: '¿A dónde subirán los archivos?',
    answer:
      'No hay subida. El procesamiento lo realiza íntegramente el Javascript del navegador en tu PC, en cero envío remoto.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Lanza Un Aluvión Animado',
    text: 'Mueve y suelta decenas de memes a la zona pautada demarcadora sin conexión remota.',
  },
  {
    name: 'Contempla El Magno Cambio Invisible',
    text: 'Percibe una placa progresiva que cambia al milisegundo al generar el decodificador local de lienzo.',
  },
  {
    name: 'Comprime O Guarda Tu Arsenal Resultante Limpio',
    text: 'Llévate individualmente los archivos extraídos o presiona Descargar Zip empaquetando todo.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'GIF89a Specification',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertidor GIF a WebP Online Gratuito',
  },
  {
    type: 'paragraph',
    content:
      'Convertir GIF a WebP combina las mejores características de ambos formatos. El GIF puede tener transparencias y múltiples fotogramas, mientras que WebP puede ser estático, más ligero y con mejor calidad. Al extraer el primer fotograma del GIF y exportarlo como WebP, obtienes una imagen moderna, ultraligera y con soporte completo para transparencias.',
  },
  {
    type: 'paragraph',
    content:
      'El formato WebP ofrece compresión superior tanto con pérdida como sin pérdida. Para imágenes extraídas de GIFs con pocos colores o grandes áreas uniformes, la compresión WebP sin pérdida puede producir archivos extraordinariamente pequeños manteniendo una calidad perfecta.',
  },
  {
    type: 'paragraph',
    content:
      'Todo el proceso de conversión ocurre localmente en tu navegador. El archivo GIF se decodifica en memoria, se renderiza el primer fotograma en un canvas HTML5 y se exporta como WebP. No hay servidores involucrados, garantizando la máxima privacidad.',
  },
  {
    type: 'tip',
    content:
      'Usa la conversión GIF a WebP para modernizar tu colección de avatares o stickers animados: obtendrás imágenes estáticas ultra-comprimidas con transparencias perfectas, ideales para web.',
  },
  {
    type: 'stats',
    content:
      'Un GIF de 300 KB puede producir un WebP estático del primer fotograma de apenas 15-50 KB si tiene áreas uniformes y transparencias. La reducción de tamaño puede superar el 80%.',
  },
  {
    type: 'summary',
    content:
      'Convierte GIF a WebP estático gratis y offline. Mejor compresión que PNG y JPG, con soporte de transparencias. Procesado localmente sin contacto con servidores.',
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

export const content: GifAWebpLocaleContent = {
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
