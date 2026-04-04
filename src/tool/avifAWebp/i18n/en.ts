import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-to-webp-converter';
const title = 'Convert AVIF to WebP Online - Security and Speed';
const description =
  'Convert AVIF images to WebP with better compatibility. Local processing without servers. Free, private and unlimited.';

const ui: ImageConverterUI = {
  dragText: 'Drag AVIF files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'What is the real difference between converting to WebP vs other formats?',
    answer:
      'WebP offers the best of both worlds: compression as impressive as JPG but maintaining the ability to hold clean transparencies like PNG. Changing your AVIF to WebP maximizes web compatibility while preserving all its advantages.',
  },
  {
    question: 'How do you manage to convert without a server and quickly?',
    answer:
      'We leverage built-in decoding modules and the HTML5 JavaScript Image object, which allows reading your AVIF in local memory and extracting an optimized WebP file in record time.',
  },
  {
    question: 'Is WebP fully compatible today?',
    answer:
      'Unlike the nascent AVIF, the WebP format enjoys very wide support among browsers like Chrome, Firefox and Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Insert your photo files',
    text: 'Move and drop all your AVIF format selections onto our canvas.',
  },
  {
    name: 'Algorithmic byte translation',
    text: 'Our engine assimilates the algorithms without uploading anything and creates exact iterations based on compressed WebP.',
  },
  {
    name: 'Collect your ready downloads',
    text: 'Click the panel and receive batches in ZIP boxes or individual files to publish directly.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF to WebP Converter: The Modern and Safe Alternative for the Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF is the most advanced image format available today: smaller than WebP, smaller than JPG, with superior visual quality. However, its adoption has been uneven — Safari did not support it until 2024, and many older mobile devices do not recognize it. WebP, on the other hand, has been established as the modern web standard for years with over 95% global support. Converting AVIF to WebP is the pragmatic decision when you need modernity without risking compatibility.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: The Newest vs The Most Reliable',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF delivers the most advanced compression available — typically 20-30% smaller than WebP at the same quality. Its AV1-based technology is the most modern in the industry. However, AVIF support still has blind spots: older Safari versions, some browsers on older Android devices, and certain desktop image viewers do not recognize it. For production web with broad and diverse audiences, this poses a risk.',
  },
  {
    type: 'paragraph',
    html: 'WebP has a much stronger support history. Chrome adopted it in 2010, Firefox and Edge followed, and Safari incorporated it in 2020. With over 95% global browser coverage, WebP is the safe choice for any website that does not want to serve fallback formats. It supports transparency, lossy and lossless compression, and achieves files much smaller than JPG or PNG.',
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
          'Your private images transit through external servers',
          'Network latency that slows down the workflow',
          'File limits per free conversion',
          'Dependency on third-party services that may change',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing in your browser using Vanilla JS and Canvas API technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Total privacy — 0 bytes leave your device',
          'Instant speed without network dependency',
          'No size or file count limits',
          'Works without an internet connection',
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
    html: 'Chrome, Firefox and Edge include native AVIF decoders. When loading the file, the browser\'s image engine decodes it in RAM maintaining the alpha channel information. The image is painted onto an invisible HTML5 <code>Canvas</code> element using the 2D context, which preserves transparency correctly.',
  },
  {
    type: 'paragraph',
    html: 'The export is done with <code>toBlob(\'image/webp\', quality)</code>. The browser applies the WebP compression algorithm internally, generating a Blob that includes the alpha channel if the original image had one. This Blob is converted into a direct download link. The complete process happens in microseconds without any communication with external servers.',
  },
  {
    type: 'tip',
    title: 'WebP: the pragmatic choice of the modern developer',
    html: 'WebP has over 95% browser support — AVIF is growing but has not reached that figure yet. For production sites without adaptive format detection, WebP is the safe choice that covers almost any audience. Convert your AVIFs to WebP and serve modern images with confidence.',
  },
  {
    type: 'title',
    text: 'Use cases: when to choose WebP over AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Websites that need browser support from 2020 onwards without polyfills.',
      'CDNs and image delivery systems that accept WebP but not AVIF.',
      'Hybrid mobile apps with WebViews that may not support AVIF.',
      'Modern HTML emails where WebP has wider support than AVIF.',
      'CMS platforms and ecommerce with established WebP image support.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: Modernity with guaranteed compatibility',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF is the cutting edge of image compression, but WebP is the reliable and universal choice of the modern web ecosystem. With our tool, you convert from the newest to the most supported in an instant — without uploading anything to any server, with total privacy and no size limits.',
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

export const content: AvifAWebpLocaleContent = {
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
