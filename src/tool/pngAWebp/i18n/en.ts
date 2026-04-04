import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-to-webp-converter';
const title = 'Convert PNG to WebP Online and Free - High Quality';
const description =
  'Convert PNG images to WebP in your browser. Up to 40% less file size. Preserves transparency. No file uploads. Free and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag PNG files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Why convert PNG to WebP?',
    answer:
      'WebP offers up to 40% better compression than PNG at the same quality, while also supporting Alpha transparency. It is the format recommended by Google PageSpeed Insights.',
  },
  {
    question: 'Is transparency lost in the process?',
    answer:
      'No. The technical implementation of WebP supports the alpha channel. The transparencies of the original PNG will be preserved in the new WebP file.',
  },
  {
    question: 'Do my images go to any server?',
    answer:
      'No. The code runs exclusively in your browser (Client-Side). We never see, record or save the images you convert.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Insert your PNGs',
    text: 'Drop your large PNG files into the upload area or use the traditional interactive selector.',
  },
  {
    name: 'Channel detection',
    text: 'The local rendering engine will detect and export the pixel composition to the optimized WebP format.',
  },
  {
    name: 'Direct Download',
    text: 'Download your highly compressed WebP files individually or bundle them together using the ZIP package converter.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebP Implementation Details',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitals Guidance',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Image Formats',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online PNG to WebP Converter',
  },
  {
    type: 'paragraph',
    html:
      'WebP has become Google\'s recommended standard for web images. When your page uses WebP images instead of PNG, Google PageSpeed Insights recognizes it as a positive optimization that can significantly improve your performance score and page load time.',
  },
  {
    type: 'paragraph',
    html:
      'A key technical feature of WebP is that it supports both lossy and lossless compression, and also supports the alpha channel for transparency. This means you can convert PNG to WebP without losing the transparent areas of your image, getting a significantly lighter file with the same visual quality.',
  },
  {
    type: 'tip',
    html:
      'Before uploading images to your website or blog, convert all your PNGs to WebP to improve load times and user experience, especially on slow mobile connections.',
  },
  {
    type: 'paragraph',
    html:
      'According to Google, lossless WebP images are 26% smaller than equivalent PNGs. Lossy WebP images are 25-34% smaller than comparable JPGs at the same visual quality.',
  },
  {
    type: 'paragraph',
    html:
      'The tool is completely free, with no file limits or registrations. All conversion happens locally, ensuring your original images remain private and secure on your device.',
  },
  {
    type: 'paragraph',
    html:
      'Convert PNG to WebP for free, with transparency support and without sending images to servers. Reduce image weight by up to 40% and improve web performance.',
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

export const content: PngAWebpLocaleContent = {
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
