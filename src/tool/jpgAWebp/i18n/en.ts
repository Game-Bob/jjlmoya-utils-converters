import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-to-webp-converter';
const title = 'Convert JPG to WebP Online and Free - High Quality';
const description =
  'Convert JPG images to WebP in your browser. Superior compression without visible loss. No file uploads. Free, unlimited and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag JPG files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Why convert JPG photos to WebP?',
    answer:
      'WebP allows significantly better compression of traditional JPG files without the human eye noticing the difference, resulting in faster and more modern websites.',
  },
  {
    question: 'Do I have to pay per image?',
    answer:
      'No, the tool is free and everything is processed directly on your computer. It is unlimited for home or professional use.',
  },
  {
    question: 'Is the conversion secure?',
    answer:
      'Yes, totally. All processing occurs in the HTML5 Canvas of your local browser without sending any data to external servers.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Insert your JPG photos',
    text: 'Drop your JPG files or drag them directly to the upper area. Detection is instantaneous.',
  },
  {
    name: 'Processing to WebP',
    text: 'The local rendering engine will convert each image file to an ultra-optimized WebP ready for the web.',
  },
  {
    name: 'Download the results',
    text: 'Save each WebP individually or download the ZIP with all converted files.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP Compression Study',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Serve images in modern formats',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online JPG to WebP Converter',
  },
  {
    type: 'paragraph',
    html:
      'JPG has been the standard for web photographs for decades. However, Google\'s modern WebP format offers a better quality-to-size ratio, allowing JPG file sizes to be reduced by 25% to 35% while maintaining virtually identical visual quality. For any website looking to improve loading speed, converting JPG to WebP is one of the most impactful optimizations available.',
  },
  {
    type: 'paragraph',
    html:
      'The JPG to WebP conversion process preserves all the color information of the original image. Unlike PNG which can be affected by transparency handling, JPG is a purely flat format, meaning conversion to WebP is straightforward with no alpha channel complications.',
  },
  {
    type: 'tip',
    html:
      'Use WebP for product images in e-commerce, blog photographs and any image on your website. Modern browsers like Chrome, Firefox and Safari fully support WebP.',
  },
  {
    type: 'paragraph',
    html:
      'According to studies by Google, lossy WebP images are between 25% and 34% smaller than comparable JPG files, which can speed up web page load time by several seconds.',
  },
  {
    type: 'paragraph',
    html:
      'Convert JPG to WebP at no cost, without limits and with complete privacy. Reduce the weight of your images and improve your website performance immediately.',
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

export const content: JpgAWebpLocaleContent = {
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
