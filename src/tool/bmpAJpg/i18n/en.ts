import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-to-jpg-converter';
const title = 'Convert BMP to JPG Online - Fast, Free and Private';
const description =
  'Convert BMP images to JPG in your browser. Drastically reduce file size. No file uploads to servers. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag BMP files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Why convert BMP to JPG?',
    answer:
      'BMP does not compress data, resulting in extremely large files. JPG compresses the image drastically while maintaining excellent visual quality for web and distribution.',
  },
  {
    question: 'Is it safe to convert my images here?',
    answer:
      '100% safe. Your privacy is guaranteed since processing is done entirely locally using your own web browser engine.',
  },
  {
    question: 'How does the tool work?',
    answer:
      'Simply drag your BMP files, and our JavaScript script will read the pixels to redraw them on an HTML canvas and export them in JPEG encoding instantly.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Upload your BMP files',
    text: 'Drag and drop or select your BMP format images in the designated area.',
  },
  {
    name: 'Automatic Processing',
    text: 'The tool rasterizes the image and applies the optimal level of JPG compression in milliseconds.',
  },
  {
    name: 'Individual or Batch Download',
    text: 'Get your new web-optimized images one at a time or by downloading a ZIP file.',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format Specification',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online BMP to JPG Converter',
  },
  {
    type: 'paragraph',
    html:
      'BMP (Bitmap) is one of the oldest image formats, originally developed by Microsoft for Windows. Its main characteristic is that it stores image data without compression, meaning a BMP file of a standard photograph can take up tens or even hundreds of megabytes. This makes it completely unsuitable for sharing on the internet or by email.',
  },
  {
    type: 'paragraph',
    html:
      'Converting BMP to JPG is the most practical solution to drastically reduce the size of these files. JPG applies intelligent compression that can reduce a BMP by 95% or more while maintaining excellent visual quality for photographs.',
  },
  {
    type: 'tip',
    html:
      'If you have very large BMP files, convert one first to verify that the resulting JPG quality is satisfactory, then process the full batch.',
  },
  {
    type: 'paragraph',
    html:
      'An uncompressed BMP for a 1920x1080 image takes approximately 6 MB. The same content in high-quality JPG can take only 200-400 KB, a reduction of 93-97%.',
  },
  {
    type: 'paragraph',
    html:
      'The conversion happens entirely in your browser. The BMP file is read via FileReader API, decoded by the browser\'s native image engine, drawn on an HTML5 canvas and exported as JPG. All this happens locally without any data transfer to the internet.',
  },
  {
    type: 'paragraph',
    html:
      'Convert BMP to JPG for free, privately and without limits directly in your browser. Reduce your image sizes by up to 97% without noticeable visual quality loss.',
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

export const content: BmpAJpgLocaleContent = {
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
