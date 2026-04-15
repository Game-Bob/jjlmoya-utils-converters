import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-to-ico-converter';
const title = 'JPG to ICO Converter';
const description =
  'Convert JPG photos to ICO with real Microsoft binary headers. Automatic square crop. No file uploads. Free and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag JPG files...',
  convertText: 'To convert them to ICO instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Is the resulting ICO file natively compatible to customize Windows folders?',
    answer:
      'Yes, we create a 100% authentic Microsoft Icon Format file by inserting a standardized binary header at a low level into the image matrix.',
  },
  {
    question: 'What happens to the proportion if my original JPG is a panoramic horizontal photo?',
    answer:
      'The rigid global ICO standard absolutely requires a perfectly square image. Our HTML5 JS engine will center your photo and crop the excess, guaranteeing a balanced result.',
  },
  {
    question: 'Is it dangerous to upload corporate or personal JPG logos to the converter?',
    answer:
      'The Canvas engine in JavaScript rests in your own physical browser. Converting hundreds of photos to ICO does not send a single megabyte to any cloud in questionable countries.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Gather the original JPG photos',
    text: 'Find and collect the conventional photos and deposit them by dropping them into our friendly square.',
  },
  {
    name: 'Watch the blind hexadecimal purification',
    text: 'The re-encoding will natively and quickly insert metadata and headers asynchronously generating a strict pure icon in memory.',
  },
  {
    name: 'Compile multiple ZIP designs',
    text: 'Finish the job by downloading everything massively in a compact package in just seconds.',
  },
];

const bibliography: JpgAIcoLocaleContent['bibliography'] = [
  {
    name: 'ICO Iconographic Structure and System Usage',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'JPEG.org Standards',
    url: 'https://jpeg.org/',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to ICO Converter: Create Favicons and Windows Icons from Your Photos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'The <strong>ICO</strong> format is Microsoft\'s standard for Windows application icons and website favicons. Unlike simply renaming a JPG as .ico, a genuine ICO file requires a specific binary structure with 22-byte headers and an embedded image directory. <strong>JPG</strong> is the most common starting point for creating these icons — a company logo, a profile photo, or any image you want to turn into the visual icon of your application or website.',
  },
  {
    type: 'title',
    text: 'JPG or ICO? When to use each format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> is a source format, not a destination for icons. Perfect for photographs and banners, but incompatible with systems that require icons: Windows Explorer, the browser\'s bookmark bar, desktop shortcuts, or PWA application manifests. An operating system or browser looking for an icon expects the ICO format — and if it doesn\'t find it, it will display a generic icon or a broken square.',
  },
  {
    type: 'paragraph',
    html: 'The <strong>ICO</strong> format was designed to contain multiple resolutions in a single file: <strong>16×16</strong> for the bookmark bar, <strong>32×32</strong> for shortcuts, <strong>48×48</strong> for the file explorer, and <strong>256×256</strong> for high-density displays. Browsers and operating systems automatically select the appropriate resolution based on the display context — the user doesn\'t have to manage anything.',
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
          'Your corporate logos stored on third-party servers',
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
    html: 'The JPG is decoded and drawn onto an in-memory <strong>HTML5 Canvas</strong>. Since the ICO format requires a square image, the engine automatically detects if the JPG is rectangular and crops it by centering the most relevant part. It then builds the standard Microsoft ICO header with the correct magic number (<code>00 00 01 00</code>), the image directory, and the encoded pixel data. The result is a genuine binary .ico file — not a renamed PNG.',
  },
  {
    type: 'paragraph',
    html: 'Since JPG lacks an alpha channel, the resulting ICO will also have no transparency — it will have a solid background inherited from the original photograph. If you need a favicon with a transparent background (for example, to adapt to dark or light bookmark bars), the recommended workflow is: remove the background in an editor, save as PNG, and use the PNG to ICO converter.',
  },
  {
    type: 'tip',
    title: 'Tip: multiple resolutions in a single ICO',
    html: 'ICO files can pack <strong>multiple resolutions</strong> into a single file — the browser or OS automatically picks the most appropriate one for each context. For the best possible result, use a square JPG of at least <strong>256×256 pixels</strong> as your source: this gives the converter enough information to generate sharp 16×16, 32×32, and 48×48 sizes without pixelation.',
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
      'Website favicon: compatible with all browsers including Internet Explorer.',
      'Folder and desktop icon customization in Windows 10/11.',
      'Shortcut icon for desktop applications or installers.',
      'Application icon for Electron projects or PWA applications.',
      'Icons for file management systems and corporate file explorers.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting a JPG to ICO is a technically essential step for any web or desktop project that needs a recognizable visual identity. This tool generates authentic ICOs with the correct binary structure, in seconds, without uploading your logo to any external server. The result works in all browsers, in Windows Explorer, and in any system that consumes Microsoft\'s ICO standard.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
