import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-to-jpg-converter';
const title = 'Convert GIF to JPG Online | Turn Your Animations into Static Photos';
const description =
  'Extract the first frame of your GIFs and convert to JPG. No server. Processed locally in your browser. Free and unlimited.';

const ui: ImageConverterUI = {
  dragText: 'Drag GIF files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'What happens to animations when converting to JPG?',
    answer:
      'JPG is strictly static and does not support multiple frames. Our converter extracts only the first image or frame appearing in the GIF sequence.',
  },
  {
    question: 'Will I lose any special effects or transparent backgrounds?',
    answer:
      'Yes, this is the natural behavior of the JPG standard. If you upload a GIF with a transparent background, we automatically insert a solid white underlying layer to avoid corrupted colors.',
  },
  {
    question: 'Can I extract JPG photos from a GIF without the website saving my content?',
    answer:
      'Absolutely yes. The tool is a Web App based on the HTML5 Canvas. All decoding is executed by the processor of your own physical device.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Drag your animated GIF files',
    text: 'Place or drag from your folder that GIF into our processing box.',
  },
  {
    name: 'Clean first-frame extraction',
    text: 'In fractions of time the animation is extracted creating the solid white JPG without contacting servers.',
  },
  {
    name: 'Download them in bulk ZIP',
    text: 'Download via the buttons or using Zip if you processed a large number of files.',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Joint Photographic Experts Group Technical Specification',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Free Online GIF to JPG Converter',
  },
  {
    type: 'paragraph',
    content:
      'GIF files are widely known for their ability to play short animations. However, there are situations where you need a static image from GIF content: to use it as a thumbnail, send it by email, or simply to get a high-quality version of a specific moment in the animation.',
  },
  {
    type: 'paragraph',
    content:
      'Converting GIF to JPG extracts the first frame of the animation and converts it into a static JPG image. During this process, any transparent areas in the original GIF are replaced with a solid white background, since JPG does not support transparency.',
  },
  {
    type: 'tip',
    content:
      'If you need to extract multiple frames from an animated GIF (not just the first), consider using a specialized GIF editing tool. This converter is optimized for quickly getting the static image of the first frame.',
  },
  {
    type: 'stats',
    content:
      'A 2 MB animated GIF can produce a JPG of the first frame of just 50-200 KB, depending on the resolution and complexity of the image.',
  },
  {
    type: 'paragraph',
    content:
      'Our converter loads the GIF into the browser\'s native Image element, draws it on an HTML5 canvas and exports it as JPG. This process is completely local: no data is sent to any server. You can convert GIFs with complete privacy.',
  },
  {
    type: 'summary',
    content:
      'Convert GIF to JPG by extracting the first frame. Free, private and local. Transparent backgrounds automatically replaced with white for full JPG compatibility.',
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

export const content: GifAJpgLocaleContent = {
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
