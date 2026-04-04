import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-to-jpg-converter';
const title = 'Convert SVG to JPG Online and Free - High Resolution';
const description =
  'Convert SVG vector files to JPG in your browser. 2x high resolution rendering. No file uploads. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag SVG files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Why convert SVG to JPG?',
    answer:
      'JPG offers maximum compatibility across all types of devices; converting SVG to JPG is the best way to ensure everyone can view your design without rendering issues.',
  },
  {
    question: 'What happens to the SVG transparency?',
    answer:
      'When converting to JPG (which does not support transparency), an opaque white background will automatically be added to your vector composition.',
  },
  {
    question: 'What resolution will the resulting JPG have?',
    answer:
      'The tool renders the SVG at double scale (2x) to guarantee high resolution suitable for Retina screens and professional use.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Insert your vector files',
    text: 'Drop your SVG files in the upper area to prepare the export list.',
  },
  {
    name: 'Rasterization to JPG',
    text: 'The tool will convert the vectors to high-resolution pixels and generate your JPG instantly.',
  },
  {
    name: 'Download the results',
    text: 'Get your JPG files one by one or as a ZIP package.',
  },
];

const bibliography: SvgAJpgLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG Specification',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'JPEG Standard Overview',
    url: 'https://jpeg.org/jpeg/',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online SVG to JPG Converter',
  },
  {
    type: 'paragraph',
    html:
      'While SVG is perfectly scalable and lightweight for web use, sometimes you need a JPG version of your vector graphic. JPG is the world\'s most compatible photographic format and can be opened without issues by any device, operating system or image viewing program.',
  },
  {
    type: 'paragraph',
    html:
      'Converting SVG to JPG involves a rasterization process: the vector graphic is converted into a pixel grid. During this process, SVG transparencies are merged with a solid white background, since JPG does not support the alpha channel. Our converter performs this rasterization at double resolution (2x) to produce crisp JPGs suitable for any use.',
  },
  {
    type: 'tip',
    html:
      'If your SVG has text or custom fonts, make sure they are embedded or converted to paths before converting. System fonts may not be available in the rendering engine.',
  },
  {
    type: 'paragraph',
    html:
      'A 100KB SVG converted to JPG at 2x can produce a file between 50KB and 500KB depending on the complexity of the design and colors used.',
  },
  {
    type: 'paragraph',
    html:
      'Convert SVG to high-resolution JPG for free and privately. 2x rendering for maximum sharpness, automatic white background for full JPG compatibility.',
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

export const content: SvgAJpgLocaleContent = {
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
