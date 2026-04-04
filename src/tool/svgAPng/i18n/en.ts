import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-to-png-converter';
const title = 'Convert SVG to PNG Online and Free - High Resolution';
const description =
  'Convert SVG vector files to PNG in your browser. Double-scale HD output. Preserves transparency. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag SVG files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Why convert SVG files to PNG?',
    answer:
      'SVG is vector-based and ideal for logos, but sometimes you need the rasterized PNG format for use in applications that do not support vectors, or to share via messaging apps or social media.',
  },
  {
    question: 'Can I choose the output size?',
    answer:
      'We currently double the scale of the source SVG so the PNG output is crisp and suitable for Retina or 4K screens.',
  },
  {
    question: 'Are SVG transparencies maintained?',
    answer:
      'Yes, the resulting PNG preserves the alpha channel of the original SVG, keeping all transparent backgrounds intact.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Insert your SVG files',
    text: 'Drop your SVG files or drag them directly to the upper area.',
  },
  {
    name: 'HD PNG Generation',
    text: 'In milliseconds our local engine will recreate each vector as an HD pixel layer in transparent PNG format.',
  },
  {
    name: 'Download the files',
    text: 'Save the generated PNGs individually or as a ZIP package.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG Specification',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: SVG Tutorial',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online SVG to PNG Converter',
  },
  {
    type: 'paragraph',
    html:
      'SVG (Scalable Vector Graphics) is an XML-based image format that describes vector graphics. Its main advantages are that it scales perfectly to any size without quality loss and files are generally small. However, not all programs, applications or social media platforms support SVG directly.',
  },
  {
    type: 'paragraph',
    html:
      'Converting SVG to PNG is the solution when you need a rasterized version of your vector graphic. The resulting PNG is universally compatible and, thanks to its alpha channel support, preserves all transparencies from the original SVG. Our converter renders the SVG at double resolution (2x) to ensure the PNG is crisp even on high-density screens like Retina or 4K.',
  },
  {
    type: 'tip',
    html:
      'For best quality in the resulting PNG, ensure your SVG has defined dimensions (width and height attributes or viewBox). An SVG without defined dimensions might render at an incorrect size.',
  },
  {
    type: 'paragraph',
    html:
      'SVG files are infinitely scalable, but a PNG at 2x resolution from a 256x256 SVG will produce a 512x512 pixel image, suitable for most uses on modern high-density screens.',
  },
  {
    type: 'paragraph',
    html:
      'Common use cases: exporting vector logos for PowerPoint or Word presentations, creating PNG icon versions for mobile apps, sharing SVG designs on platforms that don\'t support them, and generating PNG favicons from your SVG logo.',
  },
  {
    type: 'paragraph',
    html:
      'Convert SVG to HD PNG for free, privately and with transparency preservation. Rendered at double scale for Retina and 4K screens.',
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

export const content: SvgAPngLocaleContent = {
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
