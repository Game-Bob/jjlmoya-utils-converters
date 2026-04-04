import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-to-webp-converter';
const title = 'Convert AVIF to WebP Online - Security and Speed';
const description =
  'Convert AVIF images to WebP with better compatibility. Local processing without servers. Free, private and unlimited.';

const ui: ImageConverterUI = {
  dragText: 'Drag AVIF files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'What is the real difference between converting to WebP vs other formats?',
    answer:
      'WebP offers the best of both worlds: compression as impressive as JPG but maintaining the ability to hold clean transparencies like PNG. Changing your AVIF to WebP maximizes web compatibility while preserving all its advantages.',
  },
  {
    question: 'How do you manage to convert without a server and quickly?',
    answer:
      'We leverage built-in decoding modules and the HTML5 JavaScript Image object, which allows reading your AVIF in local memory and extracting an optimized WebP file in record time.',
  },
  {
    question: 'Is WebP fully compatible today?',
    answer:
      'Unlike the nascent AVIF, the WebP format enjoys very wide support among browsers like Chrome, Firefox and Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Insert your photo files',
    text: 'Move and drop all your AVIF format selections onto our canvas.',
  },
  {
    name: 'Algorithmic byte translation',
    text: 'Our engine assimilates the algorithms without uploading anything and creates exact iterations based on compressed WebP.',
  },
  {
    name: 'Collect your ready downloads',
    text: 'Click the panel and receive batches in ZIP boxes or individual files to publish directly.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online AVIF to WebP Converter',
  },
  {
    type: 'paragraph',
    html:
      'Converting AVIF to WebP is a smart choice when you need to broaden the compatibility of your images without sacrificing compression efficiency. While AVIF offers the best possible compression, WebP has much wider compatibility across browsers, devices and applications.',
  },
  {
    type: 'paragraph',
    html:
      'WebP maintains several features that make it superior to JPG for web use: it supports the alpha channel for transparency, can use both lossy and lossless compression, and has universal support in all modern browsers. By converting from AVIF to WebP, you get a file compatible with virtually the entire current web ecosystem.',
  },
  {
    type: 'tip',
    html:
      'If you manage images for a website and need the best balance between compatibility and performance, WebP is the ideal choice. Convert your AVIFs to WebP to serve modern web images with universal support.',
  },
  {
    type: 'paragraph',
    html:
      'WebP has support in more than 96% of all web browsers globally, while AVIF is around 80-85%. This compatibility difference makes WebP safer for production deployment.',
  },
  {
    type: 'paragraph',
    html:
      'Convert AVIF to WebP for free with transparency support and better web compatibility. Processed locally without sending data to external servers.',
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

export const content: AvifAWebpLocaleContent = {
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
