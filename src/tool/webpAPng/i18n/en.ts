import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-to-png-converter';
const title = 'Convert WebP to PNG Online and Free';
const description =
  'Convert WebP images to PNG in your browser. Preserves transparency. No file uploads to servers. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag WebP files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Why do I need to convert my WebP files to PNG?',
    answer:
      'Despite being lighter, WebP files can cause incompatibilities in editing programs like older Photoshop. PNG ensures 100% universal compatibility.',
  },
  {
    question: 'Are transparencies lost when converting from WebP to PNG?',
    answer:
      'Not at all. Unlike conversion to JPG, PNG supports the alpha channel. Our utility will preserve any transparent area from the original file.',
  },
  {
    question: 'Can I upload confidential company files?',
    answer:
      'You can and should. Since everything runs locally via JavaScript, your company images will never leave your computer or be stored on external servers.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Drag your WebP files',
    text: 'Move and drop your WebP files onto the main panel or select the images traditionally.',
  },
  {
    name: 'High Fidelity Conversion',
    text: 'Your browser will redraw the image pixel by pixel and generate an exact copy in PNG format, maintaining the original color gamut.',
  },
  {
    name: 'Individual or Bulk Download',
    text: 'Save each file individually or, if you processed a batch, click the ZIP button to download them all packaged together.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to PNG Converter: The Professional Choice for Editing and Design',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'When a designer downloads a graphic asset in <strong>WebP</strong> format and tries to open it in Photoshop, Figma or Illustrator, the result can be frustrating: the file fails to load or loses quality. The <strong>PNG</strong> format is the undisputed standard of professional editing: lossless compression, full alpha channel, and guaranteed compatibility across the entire creative production chain.',
  },
  {
    type: 'title',
    text: 'WebP for the Web, PNG for the Studio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP is a web production format: its compression algorithms are optimised to reduce transfer weight, not to preserve maximum fidelity across iterative editing workflows. Every time you save an edited WebP, the codec applies compression again. For projects where a file will be modified many times, this means cumulative quality degradation.',
  },
  {
    type: 'paragraph',
    html: 'PNG uses <strong>lossless compression</strong>: every pixel\'s data is preserved entirely no matter how many times you save the file. It is the format chosen by UI/UX designers, digital illustrators and branding teams who need to maintain visual integrity across dozens of revisions. Tools like Photoshop, Figma, Sketch and Illustrator treat PNG as their primary export format.',
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
          'Your design assets are stored on third-party servers',
          'Slow remote processing for large files',
          'Risk of leaks for confidential client projects',
          'Batch conversion limited or paywalled',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Your designs never leave your machine',
          'Batch-convert dozens of files instantly',
          'Full alpha channel and colour gamut preservation',
          'Absolute privacy for client projects',
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
    html: 'Modern browsers can decode WebP natively. Our tool leverages this capability to load the file into a JavaScript <strong>Image</strong> element, then draws it onto an HTML5 canvas with the same dimensions as the original. Unlike conversion to JPG, no background fill is needed here: the canvas retains the full alpha channel.',
  },
  {
    type: 'paragraph',
    html: 'The final export uses the <code>toDataURL(\'image/png\')</code> method, which generates a lossless PNG faithful to the original. The result is a file ready to import directly into any professional design software without intermediate steps, colour degradation or transparency loss.',
  },
  {
    type: 'tip',
    title: 'Tip for editors',
    html: 'Use PNG when you need to continue editing the image. Lossless compression guarantees no quality degradation from repeated saves - critical when working with layers, masks or colour adjustments in Photoshop or Figma.',
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
      'Importing WebP assets into Photoshop, Figma, Sketch or Illustrator.',
      'Preserving transparency in logos and icons for use on multiple backgrounds.',
      'Creating master copies of graphics for long-running projects.',
      'Exporting assets for mobile apps that require PNG with alpha channel.',
      'Using images in design mockups and presentations with variable backgrounds.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'If WebP is the web server format, PNG is the design studio format. This tool converts your WebP assets into production-ready PNGs, with transparency intact and maximum quality - all in your browser and without your files ever leaving your machine.',
  },
];

export const content: WebpAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'en',
    faq,
    howTo,
  }),
};
