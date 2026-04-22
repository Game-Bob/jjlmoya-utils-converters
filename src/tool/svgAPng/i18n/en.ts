import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-to-png-converter';
const title = 'Convert SVG to PNG Online and Free';
const description =
  'Convert SVG vector files to PNG in your browser. Double-scale HD output. Preserves transparency. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag SVG files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending': 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Why convert SVG files to PNG?',
    answer:
      'SVG is vector-based and ideal for logos, but sometimes you need the rasterized PNG format for use in applications that do not support vectors, or to share via messaging apps or social media.',
  },
  {
    question: 'Can I choose the output size?',
    answer:
      'We currently double the scale of the source SVG so the PNG output is crisp and suitable for Retina or 4K screens.',
  },
  {
    question: 'Are SVG transparencies maintained?',
    answer:
      'Yes, the resulting PNG preserves the alpha channel of the original SVG, keeping all transparent backgrounds intact.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Insert your SVG files',
    text: 'Drop your SVG files or drag them directly to the upper area.',
  },
  {
    name: 'HD PNG Generation',
    text: 'In milliseconds our local engine will recreate each vector as an HD pixel layer in transparent PNG format.',
  },
  {
    name: 'Download the files',
    text: 'Save the generated PNGs individually or as a ZIP package.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG to PNG Converter: From Infinite Vector to Universal Raster',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) is the perfect choice for web design: infinitely scalable, lightweight and editable with any code editor. But when you need to use that logo or icon in a mobile app, share it on social media or insert it into a PowerPoint presentation, you hit a wall: most of these platforms don\'t support SVG. The <strong>PNG</strong> format is the universal solution: rasterised, with an alpha channel, and compatible in absolutely every context.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vectors for the Web, Raster for the World',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG stores the image as mathematical instructions: a Bézier curve, a gradient, a polygon. This means the same file looks perfect at 16px or 16,000px. It is the ideal format for your web code, CSS animations and any element that needs to adapt to different screen resolutions without any quality loss.',
  },
  {
    type: 'paragraph',
    html: 'PNG stores the image as a pixel grid with colour and transparency information for each pixel. It is a <strong>lossless</strong> format, meaning quality is preserved entirely. Once an SVG is rasterised to PNG, the resolution is fixed. That\'s why choosing the right export size is critical: our tool renders at double scale (2x) to ensure sharpness on Retina and 4K screens.',
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
          'Your SVG code travels to external servers',
          'Remote rendering with inconsistent quality',
          'Waiting time for upload and processing',
          'Limitations on SVG file size',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Your SVG never leaves your browser',
          'Native browser engine rendering for maximum fidelity',
          '2x resolution PNG for high-density screens',
          'Transparency preserved with full alpha channel',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How It Works Technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The process begins by loading the SVG file into a JavaScript <strong>Image</strong> element. Once the browser engine has parsed and rendered the vector XML, the resulting image is drawn onto an <strong>HTML5 Canvas</strong> whose dimensions are double the original SVG size (2x scale). This produces a PNG with twice the pixels per dimension, ideal for high-resolution screens.',
  },
  {
    type: 'paragraph',
    html: 'Unlike conversion to JPG, when exporting to PNG the canvas retains the full alpha channel: transparent areas in the original SVG become fully transparent pixels in the resulting PNG — no white background fill. The export uses the <code>toDataURL(\'image/png\')</code> method with lossless compression.',
  },
  {
    type: 'tip',
    title: 'Tip before rasterising',
    html: 'Choose your PNG export size carefully — rasterising an SVG is a one-way process: you cannot recover the vectors from the resulting PNG. Always keep the original SVG as the master source, and generate PNGs at the highest resolution you may ever need.',
  },
  {
    type: 'title',
    text: 'Use Cases and Compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Exporting vector logos for PowerPoint or Google Slides presentations.',
      'Creating PNG icons for iOS, Android or Progressive Web Apps.',
      'Sharing SVG designs on Instagram, LinkedIn or other social media.',
      'Inserting vector illustrations into Word documents or PDFs.',
      'Generating PNG thumbnails of SVG graphics for CMS preview.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG is the language of vectors; PNG is the passport to the rest of the digital world. This tool rasterises your SVGs at 2x resolution with transparency intact, directly in your browser, without a single byte of your design travelling to any external server.',
  },
];

export const content: SvgAPngLocaleContent = {
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
    inLanguage: 'en',
    faq,
    howTo,
  }),
};
