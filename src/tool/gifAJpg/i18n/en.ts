import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-to-jpg-converter';
const title = 'Convert GIF to JPG Online';
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
  faqTitle: 'Frequently Asked Questions',
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
    text: 'GIF to JPG Converter: Extract Frames as High',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Animated GIFs have dominated short-form animation on the web for decades. But their animated nature makes them completely useless as thumbnails, social media previews, or document images. When you need to extract a specific frame from a GIF and turn it into a high-quality static image, converting to JPG is the most practical and universally compatible solution.',
  },
  {
    type: 'title',
    text: 'GIF vs JPG: Two formats with opposite purposes',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF (Graphics Interchange Format) was designed in 1987 with a severe limitation that persists today: it can only represent 256 colors per frame. This technical constraint did not matter for simple animations with limited palettes, but it makes it a visually poor format for real photography. JPG, on the other hand, can render millions of colors using advanced perceptual compression algorithms.',
  },
  {
    type: 'paragraph',
    html: 'Extracting a frame from a GIF and saving it as JPG has many practical uses: generating thumbnails for video players, creating previews for content management systems, obtaining static images for presentations, or simply archiving a visual moment from a complex animation. The resulting JPG will be much lighter than the original GIF and universally compatible.',
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
        description: 'Tools that upload your files to a remote server for processing.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Your GIFs travel over the internet to third-party servers',
          'Network latency on upload and download',
          'Size limits and file quotas per session',
          'Risk of data retention on external servers',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'The GIF never leaves your device',
          'Instant speed with no network wait',
          'No size limits or file quotas',
          'Total privacy: 0 bytes sent externally',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the frame extraction works technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The local conversion relies on the HTML5 Canvas API. When you load a GIF, the browser decodes it in memory as a native Image element. By rendering it onto an invisible canvas, the browser\'s graphics engine automatically captures the first frame of the animation sequence.',
  },
  {
    type: 'paragraph',
    html: 'Since JPG does not support transparency, our algorithm applies a solid white background before exporting. The canvas <code>toDataURL(\'image/jpeg\')</code> method generates the JPG byte stream directly in your computer\'s RAM, with no network connection. The resulting file is immediately downloaded to your device.',
  },
  {
    type: 'tip',
    title: 'GIF\'s limited color palette',
    html: 'GIF can only contain 256 colors per frame. The extracted JPG will inherit that reduced palette from the original: if the GIF contained gradients or photography, it may appear with some posterization. For best results, use GIFs with simple colors or illustrations.',
  },
  {
    type: 'title',
    text: 'Use cases and compatibility of the resulting JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Thumbnails and previews for video platforms and CMS.',
      'Cover images for social media posts.',
      'Insertion into Word, PowerPoint or PDF documents.',
      'Presentation files and marketing materials.',
      'Universal compatibility with viewers on Windows, macOS and mobile.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: the frame worth more than the animation',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'A 2 MB animated GIF can produce a JPG of the first frame of just 50-200 KB, depending on resolution. Our tool performs this conversion instantly, privately, and without limits, directly in your browser. No servers, no accounts, no waiting.',
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
