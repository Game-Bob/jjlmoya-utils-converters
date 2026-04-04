import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-to-png-converter';
const title = 'Convert AVIF to PNG Online - Fast, Local and 100% Private';
const description =
  'Convert AVIF images to PNG preserving transparency. No file uploads. Processed locally in your browser. Free and unlimited.';

const ui: ImageConverterUI = {
  dragText: 'Drag AVIF files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Why should I convert AVIF to PNG?',
    answer:
      'AVIF is great for compression, but its compatibility is limited in older browsers and classic editors. By converting from AVIF to PNG, you ensure your file will maintain the original transparency and all applications can open it.',
  },
  {
    question: 'Are the transparencies from the original AVIF file maintained?',
    answer:
      'Yes. Unlike JPG which removes the transparent background, when exporting to PNG our converter keeps the alpha channel intact.',
  },
  {
    question: 'Is it true that my images are not uploaded to the internet?',
    answer:
      'Absolutely true. Our converter runs 100% locally on your device using the internal JavaScript engine.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Add your AVIF files',
    text: 'You can drag them directly to the delimited area or use the button to browse your computer folders.',
  },
  {
    name: 'Immediate processing',
    text: 'Let the HTML5 processor render the image; the format will change to PNG automatically in microseconds.',
  },
  {
    name: 'Get your PNGs',
    text: 'Download the converted images one by one or download a complete batch via the ZIP button.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: AVIF Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Portable Network Graphics (PNG) Specification',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Free Online AVIF to PNG Converter',
  },
  {
    type: 'paragraph',
    content:
      'AVIF is one of the most advanced formats available today, capable of compressing images with remarkable efficiency. However, AVIF adoption in editing tools, image viewers and older operating systems is still limited. PNG, on the other hand, is a widely compatible format supported by virtually any software tool.',
  },
  {
    type: 'paragraph',
    content:
      'Converting AVIF to PNG has a fundamental advantage over converting to JPG: the preservation of the alpha channel. If your AVIF image has transparent areas, when converting to PNG these are kept intact. This is crucial for logos, icons, stickers and any graphic where transparency is essential for the design.',
  },
  {
    type: 'tip',
    content:
      'If you receive an AVIF file that you need to edit in Photoshop or GIMP, convert it first to PNG to ensure full compatibility and preserve any transparency present.',
  },
  {
    type: 'stats',
    content:
      'PNG has universal support in all image editors, operating systems and web browsers. AVIF, despite its efficiency, is still not supported in Internet Explorer, older Safari versions and many editing programs.',
  },
  {
    type: 'summary',
    content:
      'Convert AVIF to PNG preserving transparency, for free and locally. Get the universal compatibility of PNG without sacrificing the image quality of your AVIF.',
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

export const content: AvifAPngLocaleContent = {
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
