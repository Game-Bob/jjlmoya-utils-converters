import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-to-ico-converter';
const title = 'Convert PNG to ICO Online';
const description =
  'Convert PNG to ICO with real binary headers. Transparencies preserved. No file uploads. Free and 100% private.';

const ui: ImageConverterUI = {
  dragText: 'Drag PNG files...',
  convertText: 'To convert them to ICO instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending': 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Is your converter a creator of simple disguised PNG files or a genuine ICO?',
    answer:
      'We make a real ICO. We extract data from your PNG, create the standardized Microsoft hexadecimal header (Header + Directory of 22 bytes), resize to the ideal square format locally and assemble a final file validated as native.',
  },
  {
    question: 'Are transparencies preserved when my logo is placed in the icon?',
    answer:
      'Absolutely yes. Our engine reads your PNG at 32 bits, anchoring it while precisely preserving any transparent passthrough holes so they stand out in the universal web address bar (Favicon).',
  },
  {
    question: 'Is my company logo stored on your servers?',
    answer:
      'This service guarantees zero external network contact. The converter works anchored in your internal HTML5 Canvas; the manufacturing of your icon takes place one hundred percent inside your machine in purely secret local memory.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Drag files to transfer',
    text: 'Place your photo matrices (square 512x512 PNG is ideal) on the interactive local frame.',
  },
  {
    name: 'Automatic bytecode compilation',
    text: 'You will see the bar run internally loading and manufacturing the local matrix of purified ICO hexadecimal headers.',
  },
  {
    name: 'Accumulate or escape with your ZIP',
    text: 'Download them by clicking a mega compilation for your websites (global ZIP buttons) or download the thumbnail for the Windows executable.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to ICO Converter: The Best Source for Favicons with Perfect Transparency',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG with transparency</strong> is the ideal starting material for creating professional ICO icons. Unlike JPG (which has no alpha channel) or lossy formats, PNG gives you exactly what the ICO format needs: crisp pixels, clean edges, and a 32-bit alpha channel that lets the icon integrate perfectly over any background — whether Safari\'s white bookmark bar, Firefox\'s dark bar, or the Windows 11 desktop.',
  },
  {
    type: 'title',
    text: 'PNG or ICO? When to use each format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> is the working format: it\'s where you design your logo, export from Figma or Illustrator, and save your editable versions. Its transparency, pixel precision, and lossless compression make it unbeatable for the design process. But browsers, operating systems, and Windows applications looking for a favicon or app icon don\'t accept PNG directly — they need ICO.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> is the distribution format for icons in Microsoft environments and the web. It contains a specific binary structure that allows multiple resolutions to be packed into a single file: the browser reads the ICO\'s internal directory and automatically selects <strong>16×16</strong> for the browser tab, <strong>32×32</strong> for shortcuts, <strong>48×48</strong> for the file explorer, and <strong>256×256</strong> for Retina and 4K screens. Starting from a transparent PNG guarantees that all those resolutions will have perfect edges without any white fringe.',
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
          'Network latency on upload and download',
          'Your corporate logo stored on third-party servers',
          'File size limits and daily conversion caps',
          'Intrusive ads and third-party trackers',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Instant speed — zero network latency',
          'Complete privacy — 0 bytes sent externally',
          'No MB limits or file count restrictions',
          'Clean interface, no ads or tracking',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How it works technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The PNG is decoded into an in-memory <strong>HTML5 Canvas</strong> with full 32-bit alpha channel support. The engine builds the standard Microsoft ICO header with the correct magic number (<code>00 00 01 00</code>), the image directory with dimensions and data offset, and the pixel data while maintaining transparency information. The result is a genuine binary .ico file that Windows, macOS, and all browsers recognize natively.',
  },
  {
    type: 'paragraph',
    html: 'The transparency of the PNG is fully preserved in the resulting ICO — transparent pixels remain transparent, semi-transparent pixels retain their exact alpha value, and opaque pixels keep their original color. This is critical for logos on variable backgrounds: your favicon will look correct in light mode, dark mode, and any combination of browser interface colors.',
  },
  {
    type: 'tip',
    title: 'Tip: use a 512×512 PNG as your source',
    html: 'For the best possible result, use a <strong>512×512 square PNG</strong> as your source image. This resolution gives the converter enough information to generate all standard ICO sizes with sharpness — from the 16×16 favicon up to the 256×256 for high-density screens — without pixelation or edge detail loss. The larger the source PNG, the better the small icon sizes will look.',
  },
  {
    type: 'title',
    text: 'Use cases and compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Transparent favicon for websites: works in Chrome, Firefox, Safari, Edge, and Internet Explorer.',
      'PWA application icon: manifest.json references the ICO for desktop installation.',
      'Windows 10/11 folder customization with a corporate logo and no white background.',
      'Shortcut icon for desktop applications, installers, and executables.',
      'Browser extension icon for Chrome and Firefox extensions.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG with transparency is undoubtedly the best starting point for creating professional-quality ICO icons. With this tool, the conversion is instant, alpha channels are fully preserved, and the resulting file is a genuine ICO with the correct binary structure. No uploading your logo to any server, no watermarks, no limits — and perfect transparency at all sizes.',
  },
];

export const content: PngAIcoLocaleContent = {
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
