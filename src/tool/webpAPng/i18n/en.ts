import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-to-png-converter';
const title = 'Convert WebP to PNG Online and Free - 100% Private';
const description =
  'Convert WebP images to PNG in your browser. Preserves transparency. No file uploads to servers. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag WebP files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Why do I need to convert my WebP files to PNG?',
    answer:
      'Despite being lighter, WebP files can cause incompatibilities in editing programs like older Photoshop. PNG ensures 100% universal compatibility.',
  },
  {
    question: 'Are transparencies lost when converting from WebP to PNG?',
    answer:
      'Not at all. Unlike conversion to JPG, PNG supports the alpha channel. Our utility will preserve any transparent area from the original file.',
  },
  {
    question: 'Can I upload confidential company files?',
    answer:
      'You can and should. Since everything runs locally via JavaScript, your company images will never leave your computer or be stored on external servers.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Drag your WebP files',
    text: 'Move and drop your WebP files onto the main panel or select the images traditionally.',
  },
  {
    name: 'High Fidelity Conversion',
    text: 'Your browser will redraw the image pixel by pixel and generate an exact copy in PNG format, maintaining the original color gamut.',
  },
  {
    name: 'Individual or Bulk Download',
    text: 'Save each file individually or, if you processed a batch, click the ZIP button to download them all packaged together.',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'WebP API and Library Documentation',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'HTML Canvas 2D Context Specification',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: WebP image format',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Free Online WebP to PNG Converter',
  },
  {
    type: 'paragraph',
    content:
      'WebP was developed by Google as a modern alternative to PNG and JPG, offering superior compression with or without quality loss. However, its adoption in professional editing tools like older versions of Photoshop, Illustrator, or specialized image editors can be limited, making it necessary to convert WebP to PNG to ensure universal compatibility.',
  },
  {
    type: 'paragraph',
    content:
      'A key advantage of WebP to PNG conversion is the preservation of the alpha channel. Unlike conversion to JPG where transparent backgrounds are filled with white, PNG fully maintains any transparent areas present in the original WebP file. This is especially valuable for logos, icons, illustrations and any graphics with transparency.',
  },
  {
    type: 'tip',
    content:
      'If your WebP file has transparency and you need to edit it in Photoshop, always convert to PNG rather than JPG to preserve the alpha channel.',
  },
  {
    type: 'stats',
    content:
      'The WebP format can reduce PNG file sizes by up to 26% and JPG files by up to 34%, according to Google\'s official documentation for lossless and lossy images respectively.',
  },
  {
    type: 'paragraph',
    content:
      'The tool supports batch conversion. You can drag multiple WebP files simultaneously and download all resulting PNGs in a single compressed ZIP file, saving time when converting entire image collections.',
  },
  {
    type: 'summary',
    content:
      'Convert WebP to PNG with complete privacy and quality, preserving transparencies. Free, unlimited and processed locally in your browser.',
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

export const content: WebpAPngLocaleContent = {
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
