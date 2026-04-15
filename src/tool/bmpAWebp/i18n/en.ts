import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'bmp-to-webp-converter';
const title = 'Convert BMP to WebP Free';
const description =
  'Convert BMP images to WebP offline. Reduce huge files to kilobytes. No file uploads. Free, offline and completely private.';

const ui: ImageConverterUI = {
  dragText: 'Drag BMP files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Why do my BMP files take up 10 times more space and what do I gain with WebP?',
    answer:
      'BMP stores uncompressed pixel maps. WebP uses mathematical compression to reduce huge BMPs to under a megabyte while keeping the image highly recognizable.',
  },
  {
    question: 'Do I have to register an account?',
    answer:
      'We require no email and your material will remain isolated, since processing is performed by the JavaScript of the browser installed on your PC, with no remote sending.',
  },
  {
    question: 'Can I drag many files simultaneously?',
    answer:
      'Yes, you can drag 50 or 100 files as long as your hardware can handle processing them all without queuing.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identify raw files',
    text: 'Place your bitmap collections in windows ready for transfer.',
  },
  {
    name: 'Native batch activation',
    text: 'Project or drag all files to our digital workspace.',
  },
  {
    name: 'WebP batch output',
    text: 'Click the results and get the micro-weight images on disk separately or as immediate compressed packages.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP to WebP Converter: The Most Extreme File Size Reduction Possible',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Converting BMP to WebP is undoubtedly the most spectacular transformation you can make with an image. The BMP (Bitmap) format is the oldest and heaviest format in the digital ecosystem: it stores every pixel without any compression, resulting in files that can weigh 20, 50 or even 100 times more than their modern equivalent. WebP, developed by Google, applies state-of-the-art compression algorithms that reduce the size to the minimum possible while maintaining excellent visual quality.',
  },
  {
    type: 'title',
    text: 'Why is BMP so heavy and WebP so efficient?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The BMP format was born in the 1980s for Windows, when disk space was abundant and compression was not a priority. Every pixel is stored as-is, with no reduction algorithm: a 1920x1080 pixel image in BMP takes up exactly 5.93 MB regardless of its content. This makes it ideal for internal screenshots or lossless editing, but completely inappropriate for the web or modern storage.',
  },
  {
    type: 'paragraph',
    html: 'WebP uses block-based predictive compression and DCT transforms (the same technology underlying digital video), allowing the same 1920x1080 image to occupy between 80 KB and 300 KB. That is a reduction of 95 to 99% compared to the original BMP. In addition, WebP supports an alpha channel for transparency and both lossy and lossless compression, offering total versatility.',
  },
  {
    type: 'title',
    text: 'Comparison: Cloud Converters vs Our Local Architecture',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools that upload your BMP files to a remote server for processing.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Uploading a 20 MB BMP takes minutes on a slow connection',
          'Your images remain stored on third-party servers',
          'File size limits that exclude large BMP files',
          'Intrusive advertising and data trackers',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing in your browser using Vanilla JS and Canvas API technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Instant conversion with no network transfer',
          'Absolute privacy — 0 bytes leave your device',
          'No file size limits',
          'Works without an internet connection',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the technical conversion works in the browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'When you drag a BMP file, the browser reads it as a binary Blob in RAM. This Blob is loaded into a JavaScript <code>Image</code> element, which decodes it using the native image engine. The image is then painted onto an invisible HTML5 <code>Canvas</code> element. The Canvas acts as a virtual canvas where the image exists in its pixel-by-pixel form.',
  },
  {
    type: 'paragraph',
    html: 'Once painted on the Canvas, we execute the <code>toBlob()</code> method with the MIME type <code>image/webp</code> and the desired quality level. The browser internally applies the WebP compression algorithm and generates a new Blob with the resulting file. This Blob is converted into a direct download URL that your browser saves to disk. At no point is any network connection established.',
  },
  {
    type: 'tip',
    title: 'The biggest compression leap possible',
    html: 'Converting BMP to WebP can achieve a 99% reduction in file size. A 20 MB BMP can become a WebP of just 200 KB with virtually identical visual quality. It is the most efficient transformation available between standard image formats.',
  },
  {
    type: 'title',
    text: 'Use cases and WebP compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Web publishing — Chrome, Firefox, Safari, Edge and all modern browsers.',
      'Social media — Instagram, Twitter, Facebook natively accept WebP.',
      'Web apps and PWAs — minimal sizes for instant loading.',
      'Efficient archiving — replace legacy BMP collections saving gigabytes.',
      'Email marketing — lightweight images that load fast in any modern mail client.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: The most impactful conversion in a single click',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'If you have legacy BMP files from Windows, uncompressed screenshots or images from old tools, converting them to WebP is the most impactful action you can take to optimize your storage and web performance. With our tool, the conversion is instant, private and unlimited — exactly as it should be.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
