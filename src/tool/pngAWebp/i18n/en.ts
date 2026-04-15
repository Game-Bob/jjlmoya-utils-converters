import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-to-webp-converter';
const title = 'Convert PNG to WebP Online and Free';
const description =
  'Convert PNG images to WebP in your browser. Up to 40% less file size. Preserves transparency. No file uploads. Free and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag PNG files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Why convert PNG to WebP?',
    answer:
      'WebP offers up to 40% better compression than PNG at the same quality, while also supporting Alpha transparency. It is the format recommended by Google PageSpeed Insights.',
  },
  {
    question: 'Is transparency lost in the process?',
    answer:
      'No. The technical implementation of WebP supports the alpha channel. The transparencies of the original PNG will be preserved in the new WebP file.',
  },
  {
    question: 'Do my images go to any server?',
    answer:
      'No. The code runs exclusively in your browser (Client-Side). We never see, record or save the images you convert.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Insert your PNGs',
    text: 'Drop your large PNG files into the upload area or use the traditional interactive selector.',
  },
  {
    name: 'Channel detection',
    text: 'The local rendering engine will detect and export the pixel composition to the optimized WebP format.',
  },
  {
    name: 'Direct Download',
    text: 'Download your highly compressed WebP files individually or bundle them together using the ZIP package converter.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebP Implementation Details',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitals Guidance',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Image Formats',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to WebP Converter: Transparency and Modern Compression for the Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> has been the reference format for web images with transparency for decades — logos, icons, UI elements, product images on cut-out backgrounds. Its problem is file size: the lossless compression that guarantees quality also generates noticeably large files. Google\'s <strong>WebP</strong> solves this contradiction: it supports the alpha channel (transparency) <em>and</em> compresses far better than PNG, making the switch from PNG to WebP on your website a perfect optimization that sacrifices nothing.',
  },
  {
    type: 'title',
    text: 'PNG or WebP? When to use each format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> remains the right format when compatibility is critical: design tools like Photoshop or Figma, print workflows, legacy desktop applications, or any context where WebP support is not guaranteed. It is also the ideal format for saving working layers in editing pipelines, since its lossless compression preserves every pixel. The cost: files that can weigh 3–8 times more than their WebP equivalent.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> is the natural replacement for PNG for all modern web content. Chrome, Firefox, Safari, and Edge all support it natively. A lossless WebP image is 26% smaller than the equivalent PNG; in lossy mode it can be up to 40% smaller with virtually indistinguishable visual quality. And crucially for web design: <strong>WebP preserves alpha transparency</strong> exactly like PNG, with no visual compromise.',
  },
  {
    type: 'title',
    text: 'Comparison: Local vs Cloud Conversion',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools that upload your files to a remote server.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Network latency on upload and download',
          'Your logos and images stored on third-party servers',
          'File size limits and daily conversion caps',
          'Intrusive ads and third-party trackers',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Instant speed — zero network latency',
          'Complete privacy — 0 bytes sent externally',
          'No MB limits or file count restrictions',
          'Clean interface, no ads or tracking',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How it works technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The PNG is loaded locally and decoded into an in-memory <strong>HTML5 Canvas</strong>. The Canvas API preserves the alpha channel from the original PNG — all transparent and semi-transparent pixels are maintained intact in the RGBA pixel buffer. The canvas is then exported by calling <code>toDataURL(\'image/webp\')</code>, which applies the browser\'s WebP codec (based on Google\'s libwebp) to generate a more compact file without altering the transparency data.',
  },
  {
    type: 'paragraph',
    html: 'WebP uses two compression modes: lossless mode for images where every pixel must be exactly faithful to the original, and lossy mode for photos and elements where small differences are imperceptible. Lossless mode produces files 26% smaller than PNG; lossy mode can achieve reductions of up to 40% compared to PNG while maintaining excellent visual quality.',
  },
  {
    type: 'tip',
    title: 'Tip: WebP beats both PNG and JPG on the web',
    html: 'WebP in lossless mode is smaller than PNG. WebP in lossy mode is smaller than JPG. This makes WebP the <strong>only format that replaces both</strong> in the web context. Convert your transparent PNGs to WebP before uploading: Google PageSpeed Insights detects it and scores it positively in "Serve images in modern formats" audits.',
  },
  {
    type: 'title',
    text: 'Use cases and compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logos and icons with transparent backgrounds for websites and apps.',
      'Product images with cut-out backgrounds in e-commerce stores.',
      'CSS sprites and UI elements with alpha transparency.',
      'Rasterized illustrations and vector graphics for landing pages.',
      'Article thumbnails with transparent backgrounds in blogs and news portals.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The move from PNG to WebP is the most complete web image optimization available: you get lighter files, preserve transparency, and improve Core Web Vitals metrics without changing anything about your visual design. This tool does it instantly, for free, and completely privately — your images are processed in your browser and never travel to any external server.',
  },
];


export const content: PngAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'en', faq, howTo }),
};
