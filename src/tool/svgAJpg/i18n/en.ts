import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-to-jpg-converter';
const title = 'Convert SVG to JPG Online and Free';
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
  faqTitle: 'Frequently Asked Questions',
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
    text: 'SVG to JPG Converter: Take Your Vectors to Any Platform',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'The <strong>SVG</strong> format is the native language of the modern web: lightweight, scalable, editable. But there are entire platforms that simply don\'t understand vectors. Social media, email clients, Word documents, print applications and the vast majority of real-world software work with rasterised images. <strong>JPG</strong> is the universal common denominator: accepted everywhere, with no exceptions, no plugins and no additional conversions needed.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: When the Vector Needs to Become a Photo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG stores the image as mathematical instructions. This vector nature makes it perfect for the web but invisible to the analogue world and legacy software. An SVG file sent by email can appear as incomprehensible XML text in the recipient\'s client. An SVG attached to a Word document may not render at all in older versions of Office.',
  },
  {
    type: 'paragraph',
    html: 'JPG converts each image into a pixel matrix with colour information compressed by the JPEG algorithm. Since it doesn\'t support an alpha channel, the converter automatically merges the background with solid white. In return, you get a file that opens on <em>any device on the planet</em>: old mobile phones, printers, smart TVs, editing apps from twenty years ago. It\'s the lowest-common-denominator format, and in many contexts, the most valuable one.',
  },
  {
    type: 'title',
    text: 'Comparison: Local vs Cloud Conversion',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools that upload your files to a remote server.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Your SVG code (with proprietary design data) travels to external servers',
          'Inconsistent rendering of fonts and gradients',
          'Internet connection needed for every conversion',
          'JPG output quality not always configurable',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero bytes of your SVG leave the browser',
          'Faithful rendering using the native browser engine',
          '2x resolution JPG for maximum sharpness',
          'White background automatically applied per JPG standard',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How It Works Technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The SVG file is loaded into a browser <strong>Image</strong> element, which uses its own vector rendering engine to interpret the XML. The visual result is drawn onto an <strong>HTML5 Canvas</strong> with a prior white background fill (required because JPG doesn\'t support transparency) at double scale to maximise output resolution.',
  },
  {
    type: 'paragraph',
    html: 'The method <code>toDataURL(\'image/jpeg\', 0.92)</code> converts the canvas pixels into a high-quality JPG file. SVG colours may experience slight variations due to colour space conversion in JPEG compression. It is therefore advisable to preview the result before using it in professional print jobs where chromatic fidelity is critical.',
  },
  {
    type: 'tip',
    title: 'Tip for print use',
    html: 'SVG backgrounds and gradients can look slightly different in JPG due to colour profile differences in JPEG compression. Always preview the result before sending to a printer or using it in printed marketing materials where exact brand colour accuracy matters.',
  },
  {
    type: 'title',
    text: 'Use Cases and Compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Sharing SVG logos and illustrations on Facebook, Twitter or LinkedIn.',
      'Attaching vector graphics in emails via Outlook or Gmail.',
      'Inserting SVG designs into Word documents, Excel or presentations.',
      'Publishing product images on online shops that don\'t support SVG.',
      'Preparing files for on-demand print services.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The real world still speaks in pixels. This tool translates your SVG vectors into the universal language of JPG in seconds, with high-resolution rendering and without your proprietary designs ever leaving your browser.',
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
