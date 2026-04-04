import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-to-ico-converter';
const title = 'Convert WebP to ICO | Install Your Favicons and Logos in Windows';
const description =
  'Convert WebP images to official ICO with transparency. No file uploads. Real Microsoft binary headers. Free and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag WebP files...',
  convertText: 'To convert them to ICO instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Can I convert WebP sticker designs to an official web Favicon ICO?',
    answer:
      'Exactly. The Favicon still demands the classic Microsoft ICO extension for extreme universal compatibility. This tool will inject binary headers building a 100% legitimate icon.',
  },
  {
    question: 'Do I have to wait in online queues when making my huge batch of corporate icons?',
    answer:
      'Not at all. Our converter loads the Javascript and cuts any upload network. Your same phone CPU processes a hundred photos or more asynchronously.',
  },
  {
    question: 'Will the resulting ICO support the transparency of my original WebP?',
    answer:
      'Yes. Our engine works internally with the HTML5 canvas API at 32-bit full support, every transparent hole will cleanly transfer to the iconographic file.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Drag all your local WebP stickers',
    text: 'Move the heavy photo batches without fear of the web limit saturating.',
  },
  {
    name: 'Logical asynchronous translation and direct assembly',
    text: 'Quickly notice how the bar and elements autocomplete while memory processes the block byte by byte from the frame.',
  },
  {
    name: 'Take your pack for systems and web development',
    text: 'Freely click a massive downloadable button in a joint file or download manually if you only need one.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'ICO Web Header General Documentation',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online WebP to ICO Converter',
  },
  {
    type: 'paragraph',
    html:
      'WebP is the preferred modern image format for the web, frequently used for logos, UI icons and application graphics. When you need to convert these WebP designs into real icons for Windows or Favicons for websites, you need the ICO format with the correct binary structure.',
  },
  {
    type: 'paragraph',
    html:
      'A key advantage of converting WebP to ICO (instead of JPG to ICO) is the preservation of transparencies. WebP supports the alpha channel just like PNG, so our converter can transfer those transparencies to the resulting ICO. You will get a perfectly functional transparent background icon both in Windows and web browsers.',
  },
  {
    type: 'tip',
    html:
      'If you have a logo or sticker in WebP format with transparent background and want to use it as a Favicon for your website, convert directly to ICO for the best result with preserved transparency.',
  },
  {
    type: 'paragraph',
    html:
      'The ICO Favicon format is supported by 100% of web browsers for displaying the browser tab icon. While PNG also works, ICO offers maximum compatibility including Internet Explorer and older browsers.',
  },
  {
    type: 'paragraph',
    html:
      'The entire process happens in your browser. The WebP file is decoded using the browser\'s native support, rendered on an HTML5 canvas and encoded as ICO with the correct Microsoft binary headers. No data is transferred to external servers.',
  },
  {
    type: 'paragraph',
    html:
      'Convert WebP to ICO with preserved transparency and real binary headers. Free, private and unlimited. The best converter for Favicons and Windows icons from WebP.',
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

export const content: WebpAIcoLocaleContent = {
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
