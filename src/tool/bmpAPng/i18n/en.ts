import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-to-png-converter';
const title = 'BMP to PNG Converter | Lossless Local Format';
const description =
  'Convert BMP images to PNG without quality loss. Modern compression without artifacts. No file uploads. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag BMP files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'What is the main difference between BMP and PNG?',
    answer:
      'Both BMP and PNG are lossless formats. The difference lies in optimization: PNG uses modern compression algorithms to store the same image taking up 5 to 10 times less memory than BMP.',
  },
  {
    question: 'Is the conversion truly private?',
    answer:
      'Yes. Your computer handles all the photographic processing. Absolutely nobody accesses your files during local processing.',
  },
  {
    question: 'Why PNG over JPEG in this case?',
    answer:
      'If you have a BMP file, it is because the image has precise colors. Converting a BMP to the destructive JPG standard would dirty your clean colors. PNG protects that fidelity.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Load your photo',
    text: 'Calmly move the BMP source files to our web element drop zone.',
  },
  {
    name: 'Translate without network transmission',
    text: 'Experience in just one second the clean processing done locally by your HTML5 JS.',
  },
  {
    name: 'Get pure PNGs',
    text: 'Download the PNG replicas individually or via a compressed package.',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online BMP to PNG Converter',
  },
  {
    type: 'paragraph',
    html:
      'Both BMP and PNG are lossless image formats, meaning no visual information is discarded during storage. However, there is a fundamental difference in efficiency: BMP stores data raw without any compression, while PNG uses the Deflate compression algorithm to reduce file size without losing a single pixel of information.',
  },
  {
    type: 'paragraph',
    html:
      'Converting BMP to PNG is particularly useful when working with screenshots, UI graphics, flat-color designs or any image where color accuracy is a priority. PNG will preserve every color value exactly the same as the original BMP, but with a considerably smaller file size.',
  },
  {
    type: 'tip',
    html:
      'If you need maximum editing software compatibility and perfect color accuracy, convert BMP to PNG instead of JPG. Lossless PNG guarantees colors never deteriorate.',
  },
  {
    type: 'paragraph',
    html:
      'A typical full-screen BMP (1920x1080) takes about 6 MB. The same content in PNG can take 1-3 MB, achieving a 50-85% reduction without any quality loss.',
  },
  {
    type: 'paragraph',
    html:
      'Our converter performs all processing locally. The BMP file is decoded in memory, drawn on an HTML5 canvas and exported as PNG using the browser\'s native compression algorithm. No data is transferred to external servers.',
  },
  {
    type: 'paragraph',
    html:
      'Convert BMP to PNG without quality loss, for free and with complete privacy. The best option for preserving exact colors with an optimized file size.',
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

export const content: BmpAPngLocaleContent = {
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
