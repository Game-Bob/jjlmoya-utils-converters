import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-to-png-converter';
const title = 'Convert JPG to PNG Online and Free - Private';
const description =
  'Convert JPG images to PNG in your browser without uploading files. Lossless conversion, free and completely private.';

const ui: ImageConverterUI = {
  dragText: 'Drag JPG files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'When should I use JPG to PNG?',
    answer:
      'Whenever you plan to edit text or logos within a photograph. If you save a JPG multiple times, it degrades. PNG freezes the compression.',
  },
  {
    question: 'Will the PNG file have a transparent background immediately?',
    answer:
      'No. The original JPG was flat and without that type of structural channel. The resulting PNG will prepare that container, then you must isolate the element using Photoshop or another editor.',
  },
  {
    question: 'Does this website have traffic limits?',
    answer:
      'Thanks to Edge technologies without cloud dependencies, your conversion has no limits because it uses your computer or mobile entirely.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Drag JPG to the panel',
    text: 'Upload static JPG images using touch mouse or computer file picker.',
  },
  {
    name: 'Lossless Execution',
    text: 'The Vanilla software pushes the frame bits into a native lossless wrapper of the PNG family.',
  },
  {
    name: 'Finish Session',
    text: 'Click the panel and your browser will deposit the downloaded web assets in your User Folders.',
  },
];

const bibliography: JpgAPngLocaleContent['bibliography'] = [
  {
    name: 'The W3C PNG Graphics',
    url: 'https://www.w3.org/Graphics/PNG/',
  },
  {
    name: 'Understanding Digital Image Compression',
    url: 'https://en.wikipedia.org/wiki/Image_compression',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online JPG to PNG Converter',
  },
  {
    type: 'paragraph',
    html:
      'Converting JPG to PNG is a frequent operation in the workflow of designers, web developers and content editors. The JPG format, while efficient for photographs, applies a lossy compression algorithm that introduces visual artifacts every time the file is re-saved. PNG, on the other hand, uses lossless compression, meaning the image maintains its original fidelity without degrading with each save.',
  },
  {
    type: 'paragraph',
    html:
      'One of the main reasons to convert from JPG to PNG is to prepare an image for editing. When working with overlaid text, logos or precise graphic elements, PNG prevents the accumulation of JPEG artifacts that would make text edges look blurry or flat colors lose definition.',
  },
  {
    type: 'paragraph',
    html:
      'Our converter uses the HTML5 Canvas API to perform the conversion entirely in your browser. The JPG file is decoded in memory, drawn on a virtual canvas and exported as lossless PNG. This process ensures you get the best possible result starting from the original JPG file.',
  },
  {
    type: 'tip',
    html:
      'Remember that converting a JPG to PNG does not recover quality lost by the original JPEG compression. PNG simply freezes the image in its current state without introducing more losses.',
  },
  {
    type: 'paragraph',
    html:
      'PNG files are typically 2 to 5 times larger than their JPG equivalents. This size difference is the price of lossless compression and transparency support.',
  },
  {
    type: 'paragraph',
    html:
      'The conversion process is completely private. Our converter does not send any data to external servers; everything happens locally on your device. You can convert corporate images, personal photographs or any sensitive material without worrying about privacy.',
  },
  {
    type: 'paragraph',
    html:
      'Convert JPG to PNG for free, securely and without limits directly in your browser. Ideal for preparing images for editing or preserving quality in workflows that require multiple saves.',
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

export const content: JpgAPngLocaleContent = {
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
