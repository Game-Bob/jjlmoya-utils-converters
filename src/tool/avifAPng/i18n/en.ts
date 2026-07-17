import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-to-png-converter';
const title = 'Convert AVIF to PNG Online';
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
  faqTitle: 'Frequently Asked Questions',
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

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF to PNG Converter: From Web Delivery to Professional Editing',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF is the ideal format for serving images on the web - small, efficient and high quality. But when the time comes to edit, retouch or work with those images in design tools, AVIF becomes an obstacle. Figma, Photoshop, Illustrator, Sketch and virtually any professional design tool expect PNG for transparency work and lossless editing. Converting AVIF to PNG is the bridge between the world of web delivery and creative editing.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Delivery vs Editing',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF excels as a delivery format: small files, fast loading, alpha channel support and exceptional visual quality. However, its tooling ecosystem is limited. Most design software cannot import AVIF directly, which disrupts creative workflows. Trying to open an AVIF in Figma or import it as a layer in Photoshop simply does not work.',
  },
  {
    type: 'paragraph',
    html: 'PNG is the native format of digital design. With lossless compression, full alpha channel support and universal compatibility with all creative tools, PNG is the go-to working format. When you need to scale, retouch, export to multiple formats or work in layers, PNG guarantees you will not lose any detail or pixel in the process.',
  },
  {
    type: 'title',
    text: 'Comparison: Cloud Converters vs Our Local Architecture',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools that upload your AVIF files to a remote server for processing.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Your design images travel to third-party servers',
          'Waiting time due to network latency',
          'Possible loss or alteration of the alpha channel',
          'Size limits that complicate batch conversion',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing in your browser using Vanilla JS and Canvas API technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Alpha channel preserved with perfect fidelity',
          'Instant conversion without data transfer',
          'No limits on files, size or batches',
          'Total privacy for proprietary design assets',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the technical conversion works with transparency',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Modern browsers decode AVIF natively thanks to their built-in AV1 engines. When loading the file, the browser decodes it in memory preserving all alpha channel information. The decoded image - including its transparencies - is drawn onto an HTML5 <code>Canvas</code> element with the correct compositing mode to preserve the alpha channel.',
  },
  {
    type: 'paragraph',
    html: 'Unlike exporting to JPG (which destroys transparencies by filling with white), exporting to PNG via <code>toBlob(\'image/png\')</code> fully preserves the alpha channel. The result is a losslessly compressed PNG that retains every pixel, every semi-transparency and every detail of the original AVIF.',
  },
  {
    type: 'tip',
    title: 'The mandatory first step for any design tool',
    html: 'Convert your AVIF files to PNG before importing them into Figma, Photoshop, Illustrator or any design tool. These applications cannot read AVIF directly, but PNG works natively in all of them, preserving transparency and quality perfectly.',
  },
  {
    type: 'title',
    text: 'Use cases: when you need AVIF converted to PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Import into Figma, Sketch, Adobe XD or other UI design tools.',
      'Edit as a layer in Photoshop, Affinity Photo or GIMP preserving transparency.',
      'Use as source for icon or sprite generation.',
      'Send to clients or collaborators working with standard design software.',
      'Archive images with transparency in a lossless editing format.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: The bridge between the web and design',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF and PNG are perfect companions in a modern workflow: AVIF for efficient web delivery, PNG for editing and collaboration in design tools. With our converter, the step from one to the other is instant, private and preserves every detail - exactly what you need when your visual assets matter.',
  },
];


export const content: AvifAPngLocaleContent = {
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
