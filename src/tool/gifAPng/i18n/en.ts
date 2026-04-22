import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-to-png-converter';
const title = 'Convert GIF to PNG Online';
const description =
  'Extract the first frame of your GIFs and convert to PNG preserving transparency. No server. Local processing. Free.';

const ui: ImageConverterUI = {
  dragText: 'Drag GIF files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending': 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Why convert an animated format like GIF to a static format like PNG?',
    answer:
      'Many social networks or avatars do not accept changing photographs. Extracting the first frame of a complex GIF to a high-quality PNG solves compatibility barriers and reduces unnecessary file weight.',
  },
  {
    question: 'Are the old GIF transparencies preserved in the resulting PNG?',
    answer:
      'Yes, unlike JPG, the PNG format maintains the alpha channel. If the GIF had a transparent background, the PNG will preserve it with sharp edges.',
  },
  {
    question: 'Do you keep my images on servers after processing?',
    answer:
      'No server retains your GIF; all extraction is local thanks to the Canvas Web API. It is your PC processor that securely decodes your file without any network contact.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Bring us the animation',
    text: 'Drop the heavy GIF files in the insertion box.',
  },
  {
    name: 'Perfect extracted photo',
    text: 'The system will freeze at the exact origin of the movement, producing the impeccable copy in milliseconds.',
  },
  {
    name: 'Save your static image',
    text: 'Store in bulk ZIP all those volumes of static GIF avatars converted to PNG.',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to PNG Converter: Overcome GIF\'s Color and Transparency Limits',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF was designed in an era when monitors could barely display 256 colors. Decades later, that limitation remains its biggest weakness. PNG was created precisely to replace GIF in every use case where quality and transparency matter: logos, icons, UI graphics, and any image with a transparent background that must look perfect over any background color.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: the 16',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The most critical difference between GIF and PNG is not just the number of colors. GIF supports binary transparency: each pixel is either opaque or fully transparent, with no gradations. PNG, on the other hand, supports full alpha channel with 256 opacity levels per pixel. This means that logo edges in PNG can be perfectly smooth, while GIF edges show characteristic jaggedness over colored backgrounds.',
  },
  {
    type: 'paragraph',
    html: 'Beyond superior transparency, PNG removes GIF\'s 256-color limit. Screenshots, illustrations with gradients, logos with shadows — all look significantly better in PNG. And because it uses lossless compression, every pixel retains its exact original value, without the artifacts a JPG conversion would introduce.',
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
        description: 'Tools that process your images on remote servers.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Your logos and icons travel over the internet',
          'Waiting time due to network latency',
          'Size and file number limits',
          'Your images may remain in third-party caches',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'The GIF never leaves your device',
          'Instant conversion with no network',
          'No file or size limits',
          'Absolute privacy: 0 bytes sent',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the local GIF to PNG conversion works',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The conversion uses the browser\'s Canvas API. The GIF is decoded in memory as a native Image element. By rendering it onto an HTML5 canvas, the browser\'s graphics engine captures the first frame with all its original transparency information intact.',
  },
  {
    type: 'paragraph',
    html: 'Unlike a JPG conversion, with PNG there is no need to add a white background. The alpha channel from the original GIF is preserved directly in the exported PNG. The canvas <code>toDataURL(\'image/png\')</code> method generates the PNG byte stream in your computer\'s RAM, with no network transmission, and the file downloads directly.',
  },
  {
    type: 'tip',
    title: 'GIF binary transparency vs PNG full alpha channel',
    html: 'GIF only supports binary transparency (opaque or transparent). When converting to PNG, the semi-transparent GIF pixels are preserved as the browser interprets them. If your GIF has jagged edges, the PNG will keep them — but you can then smooth them with edge anti-aliasing in any editor, something impossible with the original GIF.',
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
      'Logos and icons for use over any background color.',
      'Avatars for Discord, Telegram, Slack and gaming platforms.',
      'UI graphics for web and mobile applications.',
      'Custom stickers and emojis with transparent backgrounds.',
      'Screenshots and UI elements for technical documentation.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: PNG is what GIF always wanted to be',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting from GIF to PNG is not just a format change: it is upgrading an image to the modern standard that GIF could never reach. More colors, better transparency, less weight. Our tool performs this conversion in milliseconds, directly in your browser, without sending any data externally.',
  },
];


export const content: GifAPngLocaleContent = {
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
