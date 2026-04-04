import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-to-ico-converter';
const title = 'Convert PNG to ICO Online | Create 100% Real Icons for PC and Web';
const description =
  'Convert PNG to ICO with real binary headers. Transparencies preserved. No file uploads. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag PNG files...',
  convertText: 'To convert them to ICO instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Is your converter a creator of simple disguised PNG files or a genuine ICO?',
    answer:
      'We make a real ICO. We extract data from your PNG, create the standardized Microsoft hexadecimal header (Header + Directory of 22 bytes), resize to the ideal square format locally and assemble a final file validated as native.',
  },
  {
    question: 'Are transparencies preserved when my logo is placed in the icon?',
    answer:
      'Absolutely yes. Our engine reads your PNG at 32 bits, anchoring it while precisely preserving any transparent passthrough holes so they stand out in the universal web address bar (Favicon).',
  },
  {
    question: 'Is my company logo stored on your servers?',
    answer:
      'This service guarantees zero external network contact. The converter works anchored in your internal HTML5 Canvas; the manufacturing of your icon takes place one hundred percent inside your machine in purely secret local memory.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Drag files to transfer',
    text: 'Place your photo matrices (square 512x512 PNG is ideal) on the interactive local frame.',
  },
  {
    name: 'Automatic bytecode compilation',
    text: 'You will see the bar run internally loading and manufacturing the local matrix of purified ICO hexadecimal headers.',
  },
  {
    name: 'Accumulate or escape with your ZIP',
    text: 'Download them by clicking a mega compilation for your websites (global ZIP buttons) or download the thumbnail for the Windows executable.',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Microsoft ICO Format Technical Structure',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Favicon Standard - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online PNG to ICO Converter',
  },
  {
    type: 'paragraph',
    html:
      'The ICO (Icon) format is Microsoft\'s standard for Windows application icons and web page Favicons. Unlike simply renaming a PNG as .ico, a genuine ICO file requires a specific binary structure with 22-byte headers, an image directory and image data encoded in a particular way.',
  },
  {
    type: 'paragraph',
    html:
      'Our converter creates authentic ICO files, not simple renames. The process includes: reading the PNG in an HTML5 canvas, creating the standard Microsoft binary ICO header with the correct magic number (00 00 01 00), generating the image directory and combining everything into a valid binary .ico file. The result is natively recognized by Windows, macOS and all web browsers.',
  },
  {
    type: 'tip',
    html:
      'For best results as a Favicon, use a square PNG of 512x512 or 256x256 pixels as source. Our converter will resize it to the standard ICO size preserving proportion and transparency.',
  },
  {
    type: 'paragraph',
    html:
      'A standard ICO file takes between 1 KB and 100 KB depending on resolution and included layers. 16x16 and 32x32 ICO Favicons are the most common for websites.',
  },
  {
    type: 'paragraph',
    html:
      'PNG transparencies are completely preserved in the resulting ICO. This is crucial for Favicons where the icon is displayed on different backgrounds. A 32-bit alpha channel ICO works perfectly in all contexts.',
  },
  {
    type: 'paragraph',
    html:
      'Convert PNG to authentic ICO with real binary headers. Free, private and with transparency support. Perfect for web Favicons and Windows icons.',
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

export const content: PngAIcoLocaleContent = {
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
