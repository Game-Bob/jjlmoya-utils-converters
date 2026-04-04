import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-to-webp-converter';
const title = 'Convert GIF to Static WebP | Save File Weight Offline';
const description =
  'Convert animated GIFs to static WebP. Preserves transparency. No server. Processed locally in your browser. Free.';

const ui: ImageConverterUI = {
  dragText: 'Drag GIF files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Why freeze an animated file to modern static WebP format?',
    answer:
      'WebP is Google\'s compression standard; it is remarkably lightweight and retains transparency cleanly. Moving from GIF to WebP eliminates the heavy animation and achieves an abysmal gain in web speed.',
  },
  {
    question: 'Will the original avatar remain transparent?',
    answer:
      'Yes, unlike JPEG, the WebP container respects the complex Alpha channel. All its silhouettes will remain perfect as they were natively.',
  },
  {
    question: 'Where will files be uploaded to?',
    answer:
      'There is no upload. Processing is performed entirely by the browser\'s Javascript on your PC, with zero remote sending.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Launch an animated avalanche',
    text: 'Move and drop dozens of memes to the delimited zone without remote connection.',
  },
  {
    name: 'Witness the great invisible change',
    text: 'Watch a progressive indicator change at each millisecond as the local canvas decoder generates the output.',
  },
  {
    name: 'Compress or save your clean resulting arsenal',
    text: 'Take the extracted files individually or press Download Zip to package everything.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'GIF89a Specification',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online GIF to WebP Converter',
  },
  {
    type: 'paragraph',
    html:
      'Converting GIF to WebP combines the best features of both formats. GIF can have transparency and multiple frames, while WebP can be static, lighter and with better quality. By extracting the first frame of the GIF and exporting it as WebP, you get a modern, ultra-lightweight image with full transparency support.',
  },
  {
    type: 'paragraph',
    html:
      'The WebP format offers superior compression both lossy and lossless. For images extracted from GIFs with few colors or large uniform areas, lossless WebP compression can produce extraordinarily small files while maintaining perfect quality.',
  },
  {
    type: 'tip',
    html:
      'Use GIF to WebP conversion to modernize your collection of animated avatars or stickers: you\'ll get ultra-compressed static images with perfect transparency, ideal for the web.',
  },
  {
    type: 'paragraph',
    html:
      'A 300 KB GIF can produce a static WebP of the first frame of just 15-50 KB if it has uniform areas and transparency. The size reduction can exceed 80%.',
  },
  {
    type: 'paragraph',
    html:
      'The entire conversion process happens locally in your browser. The GIF file is decoded in memory, the first frame is rendered on an HTML5 canvas and exported as WebP. No servers are involved, guaranteeing maximum privacy.',
  },
  {
    type: 'paragraph',
    html:
      'Convert GIF to static WebP for free and offline. Better compression than PNG and JPG, with transparency support. Processed locally without server contact.',
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

export const content: GifAWebpLocaleContent = {
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
