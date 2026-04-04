import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-to-jpg-converter';
const title = 'Convert BMP to JPG Online - Fast, Free and Private';
const description =
  'Convert BMP images to JPG in your browser. Drastically reduce file size. No file uploads to servers. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag BMP files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Why convert BMP to JPG?',
    answer:
      'BMP does not compress data, resulting in extremely large files. JPG compresses the image drastically while maintaining excellent visual quality for web and distribution.',
  },
  {
    question: 'Is it safe to convert my images here?',
    answer:
      '100% safe. Your privacy is guaranteed since processing is done entirely locally using your own web browser engine.',
  },
  {
    question: 'How does the tool work?',
    answer:
      'Simply drag your BMP files, and our JavaScript script will read the pixels to redraw them on an HTML canvas and export them in JPEG encoding instantly.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Upload your BMP files',
    text: 'Drag and drop or select your BMP format images in the designated area.',
  },
  {
    name: 'Automatic Processing',
    text: 'The tool rasterizes the image and applies the optimal level of JPG compression in milliseconds.',
  },
  {
    name: 'Individual or Batch Download',
    text: 'Get your new web-optimized images one at a time or by downloading a ZIP file.',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format Specification',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP to JPG Converter: Shrink a Giant File in Seconds',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap) is the most naive image format in computing: it stores every pixel as-is, with no compression whatsoever. A 1920x1080 screenshot in BMP weighs approximately 6 MB. That same image in JPG takes between 200 and 400 KB with visually indistinguishable quality. The difference is enormous, and our tool lets you perform that conversion in seconds, directly in your browser, without uploading anything to any server.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: raw pixel data against intelligent compression',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP was created by Microsoft in the Windows 3.1 era. Its philosophy is the simplest possible: each pixel takes 3 bytes (red, green, blue), and pixels are stored row by row with no additional processing. This complete lack of compression makes BMP files between 50 and 100 times larger than their JPG equivalent for real photographs and screenshots.',
  },
  {
    type: 'paragraph',
    html: 'JPG, by contrast, uses the Discrete Cosine Transform (DCT) to analyze each 8x8 pixel block and discard high-frequency information that the human eye barely perceives. The result is an image that looks identical but weighs a fraction of the original. For BMP files from screenshots, scanners, or legacy Windows applications, converting to JPG is the single most impactful optimization action available.',
  },
  {
    type: 'title',
    text: 'Architecture Comparison: Local vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Services that upload your BMP files to remote servers for processing.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Uploading a 10 MB BMP takes time on slow connections',
          'Your screenshots and confidential images travel over the internet',
          'Frequent size limits in free plans',
          'Double latency: upload and download of the converted file',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP is processed in your RAM, never travels to any server',
          'Instant conversion with no waiting',
          'No file size limits',
          'Total privacy: 0 bytes sent externally',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the BMP to JPG conversion works technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'When you drag a BMP file into the tool, the browser reads it with the <code>FileReader</code> API and decodes it as a Blob object in memory. That Blob is rendered onto an invisible HTML5 canvas. Then the <code>toDataURL(\'image/jpeg\')</code> method applies the JPEG compression algorithm to the canvas data and generates the resulting JPG file.',
  },
  {
    type: 'paragraph',
    html: 'Since BMP has no alpha channel (no transparency support), conversion to JPG is straightforward without needing any white background compositing. The entire process happens in your computer\'s RAM, with no data transmission over the network, in milliseconds even for files several megabytes in size.',
  },
  {
    type: 'tip',
    title: 'Windows BMP files can be enormous',
    html: 'BMP files generated by Windows screenshots (Print Screen key) or legacy apps like Paint can weigh 50 to 100 times more than an equivalent JPG. A single Full HD BMP can exceed 6 MB. Converting them to JPG before emailing or uploading to any platform is an essential practice.',
  },
  {
    type: 'title',
    text: 'Use cases and compatibility of the resulting JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optimizing Windows screenshots for sending by email.',
      'Converting images exported by legacy software (CAD, old scanners).',
      'Reducing file weight for uploading to web platforms and social media.',
      'Preparing files for insertion in Word, PowerPoint or PDF documents.',
      'Universal compatibility with all modern viewers and browsers.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: 10 MB of BMP, 500 KB of JPG, same image',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting BMP to JPG is one of the most rewarding optimization exercises in image file management. Our tool performs that transformation in seconds, without uploading any file, without creating any account, directly in your browser. The result is a high-quality JPG, universally compatible, weighing up to 97% less than the original BMP.',
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
  inLanguage: 'en',
};

export const content: BmpAJpgLocaleContent = {
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
