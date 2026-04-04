import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-to-jpg-converter';
const title = 'Convert AVIF to JPG Online';
const description =
  'Convert AVIF images to JPG in your browser. No server. 100% private local processing. Free and unlimited.';

const ui: ImageConverterUI = {
  dragText: 'Drag AVIF files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Why convert AVIF to JPG?',
    answer:
      'The AVIF format offers superior compression, but not all programs or viewers support it. Converting it to JPG ensures the image can be viewed on 100% of devices worldwide.',
  },
  {
    question: 'How do we protect your AVIF images?',
    answer:
      'Your photos never leave your phone or PC. The entire drawing and JPEG encoding process runs in the JavaScript environment of your browser.',
  },
  {
    question: 'Will I lose quality when going from AVIF to JPG?',
    answer:
      'Our tool processes pixels at standard Canvas quality (0.9 to 0.95), making changes barely perceptible.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Drag files or click',
    text: 'Move all the AVIF photos you want to convert to the delimited processing box.',
  },
  {
    name: 'Instant Transformation',
    text: 'Watch in less than a second as AVIF is re-encoded to JPG, replacing any alpha channels with a solid background.',
  },
  {
    name: 'Save or Download ZIP',
    text: 'Download your new JPG images individually or by clicking Download All if you processed in batch.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'JPEG Overview',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF to JPG Converter: Universal Compatibility for Your Modern Images',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) is the most efficient image format available today. Developed by the Alliance for Open Media and based on the AV1 video codec, it offers compression 50% better than JPG at the same visual quality. However, this technical advantage comes at a price: AVIF is not supported by Photoshop, Lightroom, Windows Photo Viewer, or most traditional editing and viewing tools. Converting to JPG solves this problem at its root.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Efficiency vs Universal Compatibility',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF compresses extraordinarily well: a high-resolution photo that weighs 4 MB in JPG can be just 2 MB in AVIF at the same perceived quality. This makes it perfect for web delivery where load performance is critical. However, outside the browser, AVIF is practically invisible: Windows Explorer does not preview it, cameras do not export it, and designers do not welcome it in their workflows.',
  },
  {
    type: 'paragraph',
    html: 'JPG has been the universal standard of digital photography for over 30 years. It is supported by 100% of devices, operating systems, office applications, social networks, printers and any software that has ever handled an image. When you need to share, print, edit or send by email, JPG is the guarantee that everything will work without friction.',
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
          'Your private photos travel over the internet to external servers',
          'Waiting times for file upload and download',
          'Size limits and restricted free conversions',
          'Risk of image retention on third-party servers',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing in your browser using Vanilla JS and Canvas API technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Your images never leave your device',
          'Instant conversion with no network latency',
          'No file or size limits',
          'Suitable for medical, legal or confidential images',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the technical conversion works in the browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Modern browsers like Chrome, Firefox and Edge include native AVIF support through their built-in AV1 decoders. When you load an AVIF file, the browser decodes it in memory and converts it to a bitmap representation in RAM. This representation is painted onto an invisible HTML5 <code>Canvas</code> element.',
  },
  {
    type: 'paragraph',
    html: 'The Canvas then exports the image using <code>toBlob(\'image/jpeg\', quality)</code>, applying standard JPG compression. Since JPG does not support transparency, any alpha channel present in the AVIF is filled with a white background before export. The result is a high-quality JPG file ready for direct download, without a single byte leaving your browser.',
  },
  {
    type: 'tip',
    title: 'The perfect balance between compression and compatibility',
    html: 'AVIF is 50% smaller than JPG at equal quality — but JPG has 100% compatibility with any software. If you receive AVIF images from the server and need to edit them, send them by email or open them in desktop tools, convert them to JPG first.',
  },
  {
    type: 'title',
    text: 'Use cases: when to convert AVIF to JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Editing in Photoshop, Lightroom, GIMP or other desktop software.',
      'Sharing images with users on older devices or operating systems.',
      'Attaching to emails to ensure viewing in any mail client.',
      'Publishing on platforms that do not accept AVIF as an upload format.',
      'Printing: professional print services work with JPG natively.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: Universal compatibility in a single step',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF is the future of image compression, but the present demands compatibility. Our converter lets you get the best of both worlds: receive and store images in AVIF for maximum efficiency, and convert them to JPG instantly when you need them to work in any context. All privately, free and without limits.',
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

export const content: AvifAJpgLocaleContent = {
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
