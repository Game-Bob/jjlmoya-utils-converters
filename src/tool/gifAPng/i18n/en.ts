import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-to-png-converter';
const title = 'Convert GIF to PNG Online | Extract a Static Frame Without Loss';
const description =
  'Extract the first frame of your GIFs and convert to PNG preserving transparency. No server. Local processing. Free.';

const ui: ImageConverterUI = {
  dragText: 'Drag GIF files...',
  convertText: 'To convert them to PNG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
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

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online GIF to PNG Converter',
  },
  {
    type: 'paragraph',
    html:
      'Converting GIF to PNG has a significant advantage over converting to JPG: transparency preservation. PNG, like some GIFs, supports the alpha channel. If your GIF has a transparent background, the resulting PNG will preserve it with complete fidelity. This is especially important for logos, avatars, icons and any graphic that will be used on different colored backgrounds.',
  },
  {
    type: 'paragraph',
    html:
      'Another advantage of PNG over JPG for this type of conversion is lossless quality. PNG uses lossless compression, meaning the image extracted from the GIF will maintain all its details without the compression artifacts that JPG format would introduce.',
  },
  {
    type: 'tip',
    html:
      'If you have an animated GIF avatar for Discord, Telegram or other platforms and need the static PNG version, this converter is the perfect tool to get it in seconds.',
  },
  {
    type: 'paragraph',
    html:
      'A 500 KB animated GIF can produce a PNG of the first frame between 50 KB and 200 KB, depending on image complexity and colors. If it has transparency, the PNG will preserve it perfectly.',
  },
  {
    type: 'paragraph',
    html:
      'The conversion is done entirely in the browser. The GIF is loaded into memory, the first frame is rendered on an HTML5 canvas and exported as PNG. No network connection is established throughout the process.',
  },
  {
    type: 'paragraph',
    html:
      'Convert GIF to PNG preserving transparency and without quality loss. First frame extraction for free, privately and locally in your browser.',
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

export const content: GifAPngLocaleContent = {
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
