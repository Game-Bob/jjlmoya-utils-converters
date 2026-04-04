import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-to-jpg-converter';
const title = 'Convert AVIF to JPG Online - No Photo Uploads Required';
const description =
  'Convert AVIF images to JPG in your browser. No server. 100% private local processing. Free and unlimited.';

const ui: ImageConverterUI = {
  dragText: 'Drag AVIF files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Why convert AVIF to JPG?',
    answer:
      'The AVIF format offers superior compression, but not all programs or viewers support it. Converting it to JPG ensures the image can be viewed on 100% of devices worldwide.',
  },
  {
    question: 'How do we protect your AVIF images?',
    answer:
      'Your photos never leave your phone or PC. The entire drawing and JPEG encoding process runs in the JavaScript environment of your browser.',
  },
  {
    question: 'Will I lose quality when going from AVIF to JPG?',
    answer:
      'Our tool processes pixels at standard Canvas quality (0.9 to 0.95), making changes barely perceptible.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Drag files or click',
    text: 'Move all the AVIF photos you want to convert to the delimited processing box.',
  },
  {
    name: 'Instant Transformation',
    text: 'Watch in less than a second as AVIF is re-encoded to JPG, replacing any alpha channels with a solid background.',
  },
  {
    name: 'Save or Download ZIP',
    text: 'Download your new JPG images individually or by clicking Download All if you processed in batch.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'JPEG Overview',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Free Online AVIF to JPG Converter',
  },
  {
    type: 'paragraph',
    content:
      'AVIF (AV1 Image File Format) is the most modern and efficient image format currently available. Developed by the Alliance for Open Media, it offers significantly superior compression to WebP, PNG and JPG. However, its adoption is still limited: many desktop applications, image editors, and especially photo viewers on older devices are unable to open AVIF files.',
  },
  {
    type: 'paragraph',
    content:
      'Converting AVIF to JPG is the solution to maximize compatibility. JPG has universal support on all devices and operating systems worldwide. By converting from AVIF to JPG, you ensure anyone can view your image without compatibility issues.',
  },
  {
    type: 'tip',
    content:
      'If you share images with people using older devices or programs, always convert from AVIF to JPG to ensure they can view them without installing additional software.',
  },
  {
    type: 'stats',
    content:
      'AVIF can achieve images 50-60% smaller than JPEG at equivalent visual quality. However, the universal compatibility of JPG still makes it essential for mass distribution.',
  },
  {
    type: 'paragraph',
    content:
      'Our converter performs the entire process in the browser. The AVIF file is decoded by the browser\'s native image engine, rendered on an HTML5 canvas and exported as high-quality JPG. All this without sending any data to the internet.',
  },
  {
    type: 'summary',
    content:
      'Convert AVIF to JPG for free, locally and without limits. Maximum universal compatibility for your images without compromising your file privacy.',
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

export const content: AvifAJpgLocaleContent = {
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
