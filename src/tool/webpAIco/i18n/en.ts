import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-to-ico-converter';
const title = 'Convert WebP to ICO';
const description =
  'Convert WebP images to official ICO with transparency. No file uploads. Real Microsoft binary headers. Free and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag WebP files...',
  convertText: 'To convert them to ICO instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Can I convert WebP sticker designs to an official web Favicon ICO?',
    answer:
      'Exactly. The Favicon still demands the classic Microsoft ICO extension for extreme universal compatibility. This tool will inject binary headers building a 100% legitimate icon.',
  },
  {
    question: 'Do I have to wait in online queues when making my huge batch of corporate icons?',
    answer:
      'Not at all. Our converter loads the Javascript and cuts any upload network. Your same phone CPU processes a hundred photos or more asynchronously.',
  },
  {
    question: 'Will the resulting ICO support the transparency of my original WebP?',
    answer:
      'Yes. Our engine works internally with the HTML5 canvas API at 32-bit full support, every transparent hole will cleanly transfer to the iconographic file.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Drag all your local WebP stickers',
    text: 'Move the heavy photo batches without fear of the web limit saturating.',
  },
  {
    name: 'Logical asynchronous translation and direct assembly',
    text: 'Quickly notice how the bar and elements autocomplete while memory processes the block byte by byte from the frame.',
  },
  {
    name: 'Take your pack for systems and web development',
    text: 'Freely click a massive downloadable button in a joint file or download manually if you only need one.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'ICO Web Header General Documentation',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to ICO Converter: Create Perfect Favicons from Your Modern Assets',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Modern web design workflows produce assets in <strong>WebP</strong> format: optimised logos, UI icons and brand elements. But when it\'s time to configure your site\'s <strong>favicon</strong> or the icons for a Windows desktop application, the required format is still <strong>ICO</strong>. Converting WebP to ICO lets you reuse your highest-quality assets without losing the original source.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Formats with Different Purposes',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP is a general-purpose image format, excellent for photographs, illustrations and web UI icons. Its efficient compression makes it ideal for speeding up page loads. However, it lacks the specific binary structure that operating systems and browsers require to recognise and display an application icon or favicon.',
  },
  {
    type: 'paragraph',
    html: 'ICO is a Microsoft container format designed specifically for icons. It can store multiple resolutions in a single file and supports full transparency via a 32-bit alpha channel. Browsers look for a <code>favicon.ico</code> file by convention, and this format ensures your icon looks crisp on both standard screens and Retina and 4K displays.',
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
          'Your company logo travels to third-party servers',
          'Internet connection required for every conversion',
          'Variable output quality depending on the server',
          'Limits on the number of daily conversions',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Your logo never leaves your browser',
          'ICO binary headers generated to Microsoft standard',
          '32-bit transparency preserved in full',
          'Batch conversion of complete icon sets',
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
    html: 'The browser decodes the WebP file natively and draws it onto a 32-bit colour-depth <strong>HTML5 Canvas</strong>, preserving the original alpha channel. Our JavaScript engine then extracts the pixel data via the <code>getImageData()</code> method and builds the ICO binary structure with the ICONDIR and ICONDIRENTRY headers specified by the Microsoft standard.',
  },
  {
    type: 'paragraph',
    html: 'The result is a legitimate ICO file, not a simple file rename. The pixel data is packed with the correct structure that Windows, macOS and all modern browsers expect when loading a favicon or application icon.',
  },
  {
    type: 'tip',
    title: 'Tip for crisp favicons',
    html: 'Always generate your ICO from the highest resolution source available. A 512×512 or larger WebP will produce a perfectly sharp favicon on Retina and 4K displays, where low-resolution icons look blurry.',
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
      'Creating the favicon.ico file for any website or web application.',
      'Generating application icons for Windows software installers.',
      'Producing desktop icons for Electron apps or similar frameworks.',
      'Creating icon sets for Chrome and Firefox browser extensions.',
      'Converting brand WebP logos to icons for corporate applications.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Your modern design workflow produces WebP; the application ecosystem still demands ICO. This tool closes that gap in seconds, generating icons with the correct binary structure and intact transparency, without your brand assets ever leaving your browser.',
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

export const content: WebpAIcoLocaleContent = {
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
