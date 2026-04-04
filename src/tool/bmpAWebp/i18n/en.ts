import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'bmp-to-webp-converter';
const title = 'Convert BMP to WebP Free | Your Native Offline Compressor';
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
    text: 'Free Online BMP to WebP Converter',
  },
  {
    type: 'paragraph',
    html:
      'Converting BMP to WebP represents one of the most dramatic size reductions possible between image formats. An uncompressed BMP file can take up 10, 20 or even 50 times more space than its WebP equivalent. Google\'s WebP format uses advanced compression both lossy and lossless, achieving extremely lightweight files that maintain excellent visual quality.',
  },
  {
    type: 'paragraph',
    html:
      'The process works completely offline in your browser. BMP files are decoded via the browser\'s native API, rendered on an HTML5 canvas and exported as WebP. No network connection is established during conversion, guaranteeing complete confidentiality of your files.',
  },
  {
    type: 'tip',
    html:
      'If you have a collection of old Windows BMP images, converting them to WebP is the most efficient way to modernize them for web use while maintaining all their visual quality.',
  },
  {
    type: 'paragraph',
    html:
      'A typical desktop screenshot BMP at 1920x1080 can be converted from its original 6 MB to a WebP of between 100 KB and 500 KB, representing reductions of up to 98%.',
  },
  {
    type: 'paragraph',
    html:
      'Convert BMP to WebP offline, for free and without limits. The most efficient conversion available: from huge uncompressed files to ultra-compressed WebP, with guaranteed total privacy.',
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

export const content: BmpAWebpLocaleContent = {
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
