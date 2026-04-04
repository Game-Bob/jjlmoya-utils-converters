import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'convertidores-imagen',
  title: 'Convertidores de Imagen Online',
  description: 'Herramientas gratuitas para convertir imágenes entre formatos PNG, JPG, WebP, SVG, AVIF, GIF, BMP e ICO. Todo se procesa localmente en tu navegador sin subir nada a internet.',
  seo: [
    {
      type: 'summary',
      title: 'Por qué usar nuestros convertidores',
      items: [
        'Conversión 100% local: tus imágenes nunca salen de tu dispositivo.',
        'Soporte para 21 combinaciones de formatos: PNG, JPG, WebP, SVG, AVIF, GIF, BMP e ICO.',
        'Procesamiento por lotes con descarga en ZIP.',
        'Sin registro, sin límites, sin publicidad intrusiva.',
      ],
    },
    {
      type: 'title',
      text: 'Conversión de Imágenes: Guía Completa de Formatos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La elección del formato de imagen adecuado tiene un impacto directo en el rendimiento web, la compatibilidad con dispositivos y la calidad visual percibida. Nuestros <strong>convertidores de imagen online</strong> cubren las rutas de conversión más demandadas por diseñadores, desarrolladores web y fotógrafos, todo ello sin depender de servidores externos que podrían comprometer la privacidad de tus archivos.',
    },
    {
      type: 'title',
      text: 'PNG, JPG y WebP: Los Tres Pilares del Diseño Web Moderno',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>formato PNG</strong> destaca por su compresión sin pérdida y soporte para transparencias (canal alfa), siendo el estándar para logotipos, iconos y gráficos con bordes nítidos. El <strong>formato JPG</strong> ofrece la máxima compatibilidad universal y tamaños reducidos para fotografías, pero sacrifica calidad en cada guardado. El <strong>formato WebP</strong>, desarrollado por Google, combina lo mejor de ambos: compresión un 30-40% superior a PNG/JPG con soporte de transparencias y animaciones, siendo hoy el formato recomendado por Core Web Vitals para mejorar el LCP.',
    },
    {
      type: 'table',
      headers: ['Formato', 'Transparencia', 'Compresión', 'Mejor para'],
      rows: [
        ['PNG', 'Sí', 'Sin pérdida', 'Logos, gráficos, capturas'],
        ['JPG', 'No', 'Con pérdida', 'Fotografías, imágenes grandes'],
        ['WebP', 'Sí', 'Sin/Con pérdida', 'Web moderna, rendimiento'],
        ['SVG', 'Sí', 'Vectorial', 'Iconos escalables, animaciones'],
        ['AVIF', 'Sí', 'Superior', 'Siguiente generación web'],
        ['ICO', 'Sí', 'Bitmap', 'Favicons, iconos Windows'],
      ],
    },
    {
      type: 'title',
      text: 'Formatos de Nueva Generación: AVIF y WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>formato AVIF</strong> (AV1 Image File Format) es el sucesor tecnológico del WebP, ofreciendo hasta un 50% menos de peso que el JPG a igual calidad subjetiva. Aunque su adopción crece rápidamente, la compatibilidad limitada en sistemas antiguos hace que convertir AVIF a formatos más establecidos como JPG, PNG o WebP sea una necesidad frecuente en flujos de trabajo de producción.',
    },
    {
      type: 'tip',
      title: 'Consejo de rendimiento web',
      html: 'Para maximizar la velocidad de carga, usa WebP como formato principal en tu web con fallbacks JPG/PNG para navegadores antiguos. Herramientas como <code>picture</code> con múltiples <code>source</code> te permiten servir el formato óptimo según el soporte del navegador visitante.',
    },
    {
      type: 'title',
      text: 'SVG, BMP e ICO: Casos de Uso Especiales',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los <strong>archivos SVG</strong> son vectores matemáticos que escalan sin pérdida a cualquier resolución, perfectos para logotipos y diseño gráfico. Sin embargo, muchas plataformas y aplicaciones de edición no los soportan directamente, lo que hace necesario rasterizarlos a PNG o JPG para distribución. Los <strong>archivos BMP</strong>, aunque obsoletos para uso web, siguen siendo comunes en entornos Windows y software de edición legacy. Finalmente, el <strong>formato ICO</strong> es el estándar para favicons web y personalización de iconos en Windows, requiriendo una estructura de cabecera binaria específica que nuestro convertidor genera de forma nativa.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Combinaciones', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privacidad', value: '100% local', icon: 'mdi:shield-lock' },
        { label: 'Formatos', value: '8 tipos', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Privacidad Total: Conversión sin Servidores',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A diferencia de otras herramientas online que suben tus imágenes a servidores remotos (con los riesgos de privacidad y seguridad que eso implica), nuestros convertidores utilizan exclusivamente las APIs nativas del navegador: <strong>Canvas 2D API</strong> para la rasterización, <strong>FileReader API</strong> para leer los archivos localmente y <strong>Blob/URL.createObjectURL</strong> para las descargas. Esto significa que puedes convertir imágenes confidenciales, logos corporativos o documentos privados con total seguridad.',
    },
  ],
};
