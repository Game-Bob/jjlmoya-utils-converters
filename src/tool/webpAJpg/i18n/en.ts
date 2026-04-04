import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-to-jpg-converter';
const title = 'Convert WebP to JPG Online and Free - No Upload Required';
const description =
  'Convert WebP images to JPG without uploading files. 100% private local processing. Transparent backgrounds are automatically replaced with white.';

const ui: ImageConverterUI = {
  dragText: 'Drag WebP files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Can I upload private images securely?',
    answer:
      'Yes. There is no upload server. Your browser processes the WebP on your computer and generates the JPG for you to download. Nobody else sees it.',
  },
  {
    question: 'What happens to my WebP background if it is transparent?',
    answer:
      'Since JPG does not support transparency, the converter will automatically fill transparent areas with a solid white background.',
  },
  {
    question: 'Is there a limit on conversions or file size?',
    answer:
      'We impose no restrictions. You can convert hundreds of images as long as your computer has sufficient processing power and RAM.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Drag your files',
    text: 'Drop your modern WebP files into the upload area or select them using the interactive file browser.',
  },
  {
    name: 'Local Conversion',
    text: 'Watch as the local engine applies a background and interprets each pixel to the universal JPG format.',
  },
  {
    name: 'Get your results',
    text: 'Download individually or use the ZIP package to consolidate all your new photographs.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: The JPEG standards',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'WebP to JPEG compatibility',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online WebP to JPG Converter',
  },
  {
    type: 'paragraph',
    html:
      'WebP is Google\'s modern web image standard, but compatibility with older software and more limited devices can be problematic. Converting WebP to JPG ensures your images can be opened by virtually any program, device or platform in the world, since JPG is the most universally supported photographic format.',
  },
  {
    type: 'paragraph',
    html:
      'An important technical aspect to consider is transparency handling. The JPG format does not support the alpha channel, so any transparent area in the original WebP file will automatically be replaced with a solid white background during conversion. If you need to preserve transparency, consider using PNG as the target format instead.',
  },
  {
    type: 'tip',
    html:
      'For best results, convert WebP to JPG when you need to share photos by email or social media where size matters. If you need transparency, use WebP to PNG instead.',
  },
  {
    type: 'paragraph',
    html:
      'The JPG format has 100% compatibility across all browsers, operating systems and devices, while WebP may not be compatible with some older image viewers and editors.',
  },
  {
    type: 'paragraph',
    html:
      'Convert WebP to JPG locally, for free and without limits. No servers, no registration, compatible with all your devices and files.',
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

export const content: WebpAJpgLocaleContent = {
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
