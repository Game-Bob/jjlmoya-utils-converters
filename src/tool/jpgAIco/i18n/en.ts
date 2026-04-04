import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-to-ico-converter';
const title = 'JPG to ICO Converter | Create Official Icons for Windows and Web';
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
    content: 'Free Online JPG to ICO Converter',
  },
  {
    type: 'paragraph',
    content:
      'Converting JPG to ICO is necessary when you want to create custom icons for Windows, Favicons for websites or visual identifiers for applications. Microsoft\'s ICO format is the standard for all these uses and our converter generates genuine ICO files with the correct binary structure.',
  },
  {
    type: 'paragraph',
    content:
      'An important technical consideration when converting JPG to ICO is image proportion. The ICO format requires square images. If your original JPG is rectangular, our converter will center and automatically crop it to fit in a square format, preserving the central part of the image.',
  },
  {
    type: 'tip',
    content:
      'For better quality icons, always use a high-resolution square JPG (at least 256x256) as source. The converter will resize to the standard ICO size maintaining maximum possible sharpness.',
  },
  {
    type: 'stats',
    content:
      'ICO files for Windows can contain multiple resolutions (16x16, 32x32, 48x48, 256x256) in a single file. Our converter generates the ICO at the optimal resolution based on your source image.',
  },
  {
    type: 'paragraph',
    content:
      'Since JPG has no alpha channel, the resulting ICO will not have transparency. For icons with transparency, we recommend first removing the background in an image editor, saving as PNG and then converting from PNG to ICO to get an icon with perfect transparency.',
  },
  {
    type: 'summary',
    content:
      'Convert JPG to authentic ICO with real binary headers. Automatic crop for square format. Free, private and compatible with Windows and all browsers.',
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

export const content: JpgAIcoLocaleContent = {
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
