import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-to-webp-converter';
const title = 'Convert JPG to WebP Online and Free';
const description =
  'Convert JPG images to WebP in your browser. Superior compression without visible loss. No file uploads. Free, unlimited and private.';

const ui: ImageConverterUI = {
  dragText: 'Drag JPG files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Why convert JPG photos to WebP?',
    answer:
      'WebP allows significantly better compression of traditional JPG files without the human eye noticing the difference, resulting in faster and more modern websites.',
  },
  {
    question: 'Do I have to pay per image?',
    answer:
      'No, the tool is free and everything is processed directly on your computer. It is unlimited for home or professional use.',
  },
  {
    question: 'Is the conversion secure?',
    answer:
      'Yes, totally. All processing occurs in the HTML5 Canvas of your local browser without sending any data to external servers.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Insert your JPG photos',
    text: 'Drop your JPG files or drag them directly to the upper area. Detection is instantaneous.',
  },
  {
    name: 'Processing to WebP',
    text: 'The local rendering engine will convert each image file to an ultra-optimized WebP ready for the web.',
  },
  {
    name: 'Download the results',
    text: 'Save each WebP individually or download the ZIP with all converted files.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to WebP Converter: Speed Up Your Site with Google\'s Modern Format',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'The <strong>JPG</strong> format has dominated digital photography for decades - universally compatible and widely supported. But Google engineered <strong>WebP</strong> to beat JPG at its own game: the same visual quality at 25-35% less file size. For developers and marketing teams fighting slow page loads, converting JPG to WebP is the single highest-return optimization you can apply without touching your design.',
  },
  {
    type: 'title',
    text: 'JPG or WebP? When to use each format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> remains the right choice when you need universal compatibility: client emails, Word documents, legacy social media platforms, or CMS systems that do not yet accept WebP. Its thirty-year ecosystem guarantees that any screen, printer, or viewer will open it without issues. The main drawback is size - a 1.5 MB header JPG can drag down your page\'s LCP score and fail Core Web Vitals thresholds.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> is the smart choice for all content that lives on your website. Chrome, Firefox, Safari and Edge have supported it natively for years. Product images in e-commerce, blog banners, video thumbnails, and any photo published online all benefit directly: lighter pages, better Google PageSpeed Insights scores, and a smoother user experience - especially on slow mobile connections.',
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
          'Your photos are stored on third-party servers',
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
          'Instant speed - zero network latency',
          'Complete privacy - 0 bytes sent externally',
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
    html: 'When you drag a JPG into the tool, the browser creates a <strong>Blob object</strong> that lives only in your RAM. That Blob is decoded and drawn onto an invisible <strong>HTML5 Canvas</strong> element. Since JPG has no alpha channel, the conversion to WebP is direct: the engine exports the canvas by calling <code>toDataURL(\'image/webp\')</code>, generating a byte stream that your OS downloads instantly - no server involved.',
  },
  {
    type: 'paragraph',
    html: 'The WebP compression algorithm combines block prediction techniques (similar to those in VP8, Google\'s video codec) with color transforms and arithmetic coding. The result is a file that contains the same perceptual information as the original JPG but packaged far more efficiently - meaning fewer kilobytes transferred with every page visit.',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals Tip: LCP and image weight',
    html: 'The <strong>Largest Contentful Paint (LCP)</strong> is the Google metric that measures how long it takes to load the largest visual element on your page. A 1.5 MB header JPG can become a WebP of just 900 KB - or even 600 KB - with no noticeable visual difference. That <strong>25-35% saving</strong> can move your LCP from "Needs Improvement" to "Good" and push you up the search rankings.',
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
      'Product images on WooCommerce or Shopify stores: less weight, more conversions.',
      'Blog and article photography: better PageSpeed score without redesigning anything.',
      'Web banners and display advertising creatives: lighter files with the same sharpness.',
      'Portfolio galleries for architecture, photography, or design studios.',
      'Video thumbnails on streaming sites or online course platforms.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting your JPGs to WebP is today one of the simplest and most cost-effective optimizations you can apply to any website. With this tool you do it in seconds, for free, and without your images ever leaving your device. Fewer kilobytes, better LCP, faster pages - all with the exact same visual appearance you already had.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
