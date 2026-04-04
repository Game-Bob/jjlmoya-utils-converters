import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'convertidor-gif-a-webp';
const title = 'Convertir GIF a WebP estático';
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
  faqTitle: 'Preguntas Frecuentes',
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
    text: 'Convertidor de GIF a WebP: El Reemplazo Moderno para las Animaciones Pesadas',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Los GIFs animados son los dinosaurios del contenido web moderno: consumen un ancho de banda desproporcionado, degradan el PageSpeed de cualquier página y son responsables de un porcentaje significativo del peso total en miles de sitios web. Un GIF animado típico de 5 MB puede convertirse a WebP animado con menos de 1 MB manteniendo la misma calidad visual. WebP es el sucesor moderno que Google diseñó específicamente para reemplazar al GIF en la web.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: la diferencia entre el pasado y el presente de la web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'El GIF es un formato de 1987 que no fue diseñado para animaciones: esa característica llegó como un hack posterior. Su paleta de 256 colores, su falta de compresión eficiente y su incapacidad para audio lo convierten en un formato obsoleto. WebP, desarrollado por Google en 2010, ofrece compresión superior tanto con pérdida como sin pérdida, soporte de animación nativo y canal alfa completo.',
  },
  {
    type: 'paragraph',
    html: 'Para un desarrollador web, reemplazar GIFs por WebP en las páginas puede suponer una mejora de 10-30 puntos en el score de PageSpeed de Google. Menos peso de página significa mejor Core Web Vitals, mejor posicionamiento SEO y menor coste de ancho de banda en servidores. No es solo una mejora estética: es una decisión de arquitectura técnica.',
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
        description: 'Plataformas que procesan tus GIFs en servidores remotos.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Tus animaciones viajan por internet a servidores de terceros',
          'Espera por latencia de red en subida y bajada',
          'Límites de tamaño (los GIFs grandes suelen rechazarse)',
          'Riesgo de retención y análisis de tus archivos',
        ],
      },
      {
        title: 'Nuestra Arquitectura Local',
        description: 'Procesamiento directo en tu hardware mediante tecnología Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'El GIF nunca sale de tu dispositivo',
          'Conversión instantánea sin espera de red',
          'Sin límites de tamaño: procesa GIFs de cualquier peso',
          'Privacidad total: 0 bytes enviados al exterior',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Cómo funciona la conversión local GIF a WebP',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversión local utiliza el Canvas API de HTML5. El GIF se carga como un elemento Image nativo del navegador. Al dibujarlo sobre un canvas, el motor gráfico captura el primer fotograma de la animación con toda su información de transparencia. El método <code>toDataURL(\'image/webp\')</code> exporta el fotograma como WebP directamente en la RAM.',
  },
  {
    type: 'paragraph',
    html: 'El formato WebP soporta canal alfa completo, por lo que las transparencias del GIF se preservan en el WebP resultante sin necesidad de añadir fondo. Los algoritmos de compresión WebP son significativamente más eficientes que los del GIF o PNG, lo que explica la drástica reducción de tamaño del archivo final.',
  },
  {
    type: 'tip',
    title: 'Ganancia de PageSpeed garantizada',
    html: 'Un GIF animado de 5 MB puede convertirse en un WebP de menos de 1 MB. Si tienes GIFs en las páginas de tu sitio web, reemplazarlos por WebP puede mejorar tu Largest Contentful Paint (LCP) y tu Total Blocking Time (TBT) de forma inmediata, impactando directamente en el posicionamiento SEO.',
  },
  {
    type: 'title',
    text: 'Casos de uso y compatibilidad del WebP resultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Sustitución de GIFs en páginas web para mejorar PageSpeed.',
      'Avatares y stickers optimizados para Discord, Slack y plataformas modernas.',
      'Banners y elementos visuales para campañas de marketing digital.',
      'Animaciones en aplicaciones web progresivas (PWA).',
      'Compatible con Chrome, Edge, Firefox, Safari 14+ y todos los navegadores modernos.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusión: migra tus GIFs al siglo XXI',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Cada GIF en tu sitio web es una oportunidad de optimización perdida. Nuestra herramienta convierte GIFs a WebP de forma instantánea, privada y sin límites, directamente en tu navegador. El resultado: archivos hasta 5 veces más pequeños, transparencias perfectas y compatibilidad con todos los navegadores modernos.',
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
