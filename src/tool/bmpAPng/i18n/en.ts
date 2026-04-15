import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-to-png-converter';
const title = 'BMP to PNG Converter';
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
    text: 'BMP to PNG Converter: The Lossless Replacement for BMP Files',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP is an uncompressed format that occupies enormous amounts of space with no technical benefit over PNG. Both are lossless formats: they store every pixel with absolute precision. But PNG adds lossless compression via the Deflate algorithm, reducing file size by 3 to 5 times without sacrificing a single bit of visual information. PNG is, in essence, what BMP always wanted to be.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: same quality, radically different file size',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The fundamental difference between BMP and PNG is not image quality — both are lossless — but storage efficiency. BMP stores pixels raw: no compression, no optimization, no consideration for space. PNG analyzes repeated pixel patterns and encodes them compactly using Deflate, the same algorithm used by ZIP.',
  },
  {
    type: 'paragraph',
    html: 'Beyond superior compression, PNG adds a feature BMP never had: full alpha channel for transparency. Screenshots, UI graphics, logos, technical diagrams — all these image types benefit enormously from conversion to PNG, which preserves every exact color value while reducing file weight to a fraction of the original.',
  },
  {
    type: 'title',
    text: 'Architecture Comparison: Local vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Services that process your BMP files on third-party servers.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Your work images travel over the internet',
          'Waiting time proportional to the BMP size',
          'Size limits in free plans',
          'Risk of analysis or retention of your files',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP is processed locally, never leaves your device',
          'Instant conversion in milliseconds',
          'No size or file count limits',
          'Total privacy: 0 bytes sent externally',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the local BMP to PNG conversion works',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The process uses the HTML5 Canvas API. The BMP file is read with the browser\'s <code>FileReader</code> API and decoded as a Blob in memory. That Blob is drawn onto an invisible HTML5 canvas. Then the <code>toDataURL(\'image/png\')</code> method applies the browser\'s native PNG compression algorithm and generates the resulting file.',
  },
  {
    type: 'paragraph',
    html: 'Unlike JPG conversion, PNG conversion is completely lossless: every color value from the original BMP is preserved exactly in the resulting PNG. No artifacts, no edge smoothing, no information loss. The final file is visually identical to the BMP but takes 3 to 5 times less disk space.',
  },
  {
    type: 'tip',
    title: 'PNG is the modern standard for everywhere BMP was used',
    html: 'If you work with legacy software that exports BMP (industrial machinery, control systems, medical diagnostic software), converting to PNG is the best decision. PNG is compatible with every modern application, maintains perfect color fidelity, and takes up to 5 times less space. It is the simplest and safest migration possible.',
  },
  {
    type: 'title',
    text: 'Use cases and compatibility of the resulting PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Screenshots and UI graphics with exact colors preserved.',
      'Technical documentation images and software diagrams.',
      'Exports from CAD, industrial systems and legacy software.',
      'Logos and brand identity elements with added transparency support.',
      'Compatible with Adobe Photoshop, GIMP, Figma and all modern editors.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: PNG is what BMP always should have been',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting BMP to PNG is the most natural modernization of an image file: same lossless quality, greater compatibility, transparency support, and 3 to 5 times less weight. Our tool performs this conversion in milliseconds, directly in your browser, without uploading any file to any server.',
  },
];


export const content: BmpAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'en', faq, howTo }),
};
