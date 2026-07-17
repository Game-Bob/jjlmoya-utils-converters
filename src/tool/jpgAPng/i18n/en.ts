import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-to-png-converter';
const title = 'Convert JPG to PNG Online and Free';
const description =
  'Convert JPG images to PNG in your browser without uploading files. Lossless conversion, free and completely private.';

const ui: ImageConverterUI = {
  dragText: 'Drag JPG files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'When should I use JPG to PNG?',
    answer:
      'Whenever you plan to edit text or logos within a photograph. If you save a JPG multiple times, it degrades. PNG freezes the compression.',
  },
  {
    question: 'Will the PNG file have a transparent background immediately?',
    answer:
      'No. The original JPG was flat and without that type of structural channel. The resulting PNG will prepare that container, then you must isolate the element using Photoshop or another editor.',
  },
  {
    question: 'Does this website have traffic limits?',
    answer:
      'Thanks to Edge technologies without cloud dependencies, your conversion has no limits because it uses your computer or mobile entirely.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Drag JPG to the panel',
    text: 'Upload static JPG images using touch mouse or computer file picker.',
  },
  {
    name: 'Lossless Execution',
    text: 'The Vanilla software pushes the frame bits into a native lossless wrapper of the PNG family.',
  },
  {
    name: 'Finish Session',
    text: 'Click the panel and your browser will deposit the downloaded web assets in your User Folders.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to PNG Converter: Edit Without Quality Loss and Add Transparency',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> is unbeatable for camera photographs, but it has a critical weakness: every time you save the file, it applies its lossy compression again, progressively degrading edges and gradients. <strong>PNG</strong> uses lossless compression - once saved, pixels are immutable. Converting a JPG to PNG is the essential step when you need to prepare an image for intensive editing, add a transparent background, or integrate it into a design workflow that requires multiple saves.',
  },
  {
    type: 'title',
    text: 'JPG or PNG? When to use each format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> is the king of photography: small files, compatible with everything. But its compression artifacts accumulate with each edit and re-save. If you need to crop, retouch, or add text to an image repeatedly, starting from JPG means introducing degradation in every cycle. JPG also lacks an alpha channel: it cannot have transparent backgrounds, which disqualifies it for logos, icons, and UI elements.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> is the right choice for corporate logos, screenshots with sharp text, interface elements, product images with white backgrounds that you will later need to cut out, or any graphic asset that will be edited more than once. Lossless compression guarantees that text edges remain perfectly defined and flat colors stay pure - no JPEG noise.',
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
          'Your images are stored on third-party servers',
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
          'Instant speed - zero network latency',
          'Complete privacy - 0 bytes sent externally',
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
    html: 'The process is entirely local: the browser creates a <strong>Blob</strong> from the selected JPG and draws it onto an in-memory <strong>HTML5 Canvas</strong>. Once rendered, it calls <code>toDataURL(\'image/png\')</code> - the browser\'s built-in PNG codec re-encodes every pixel without applying any new lossy compression. The result is a PNG that faithfully preserves the current state of the JPG: neither better nor worse, simply frozen.',
  },
  {
    type: 'paragraph',
    html: 'The resulting PNG uses lossless DEFLATE compression, the same used by professional tools like Photoshop or GIMP. Its size will be larger than the original JPG - typically 2 to 5 times - because it stores all pixels without discarding any information. This is the price paid for fidelity and infinite editability.',
  },
  {
    type: 'tip',
    title: 'Important: PNG does not recover JPEG quality',
    html: 'Converting a JPG to PNG <strong>does not recover quality lost</strong> during the original JPEG compression. If your JPG already had block artifacts or color noise, the PNG will preserve them intact - it simply prevents more from being added. Think of the conversion as "freezing" the current state of the image so that future edits do not degrade it further.',
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
      'Logos and brand elements that need a transparent background after cutting out.',
      'Screenshots with text that will be edited and re-saved multiple times.',
      'Product images for e-commerce requiring a clean, cuttable white background.',
      'Graphic assets for PowerPoint or Google Slides presentations.',
      'UI assets for web and mobile applications where edge sharpness is critical.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting JPG to PNG is the first step in any serious design workflow. It does not transform the original quality, but it protects every pixel from future edits. With this tool, the process happens instantly and completely privately - your corporate or personal images never leave your device at any point.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'en', faq, howTo }),
};
