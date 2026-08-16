import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-to-jpg-converter';
const title = 'Convert PNG to JPG Online';
const description =
  'Convert PNG images to JPG format directly in your browser. No server uploads. Fast batch image optimization and guaranteed privacy.';

const ui: ImageConverterUI = {
  dragText: 'Drag PNG files...',
  convertText: 'To convert them to JPG instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Why choose our local PNG to JPG converter?',
    answer:
      'Unlike conventional online converters, our tool processes all images locally inside your web browser. Your files never touch external servers, guaranteeing total data sovereignty and security.',
  },
  {
    question: 'JPG vs PNG: Which format is best for your use case?',
    answer:
      'PNG is ideal for logos, icons, and graphics requiring transparent backgrounds. JPG is the gold standard for photos and web banners because of its higher compression ratio and significantly smaller file sizes.',
  },
  {
    question: 'How does client-side technical conversion work?',
    answer:
      'We utilize HTML5 Canvas element technology. The browser draws the PNG onto an invisible virtual canvas, fills transparent pixels with solid white, and exports a clean JPEG byte stream directly to your memory.',
  },
  {
    question: 'Is it safe for confidential documents and enterprise data?',
    answer:
      'Yes, it is the safest choice for banking, legal, and healthcare professionals. Since processing stays entirely within browser RAM, data vanishes completely when the browser tab is closed.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'File Selection',
    text: 'Drag your PNG files into the processing box or click to select them from your file explorer.',
  },
  {
    name: 'Instant Local Conversion',
    text: 'Observe as each file turns to "Ready" status while your browser converts the images locally.',
  },
  {
    name: 'Optimized Download',
    text: 'Download your newly generated JPG files individually or click "Download All (.zip)" to save everything at once.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to JPG Converter: The Definitive Image Optimization Guide',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In digital design and web development, efficiency is everything. The PNG (Portable Network Graphics) format is loved for transparency and lossless compression, but its main drawback is file size. When you need fast websites or instant email attachments, converting PNG to JPG is the smartest choice.',
  },
  {
    type: 'title',
    text: 'JPG or PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'There is no universally superior format, only the right tool for each job. PNG is lossless and ideal for UI mockups, logos with small text, and graphics requiring transparent backgrounds. However, this fidelity results in files 5 to 10 times larger than compressed equivalents.',
  },
  {
    type: 'paragraph',
    html: 'JPG (Joint Photographic Experts Group) uses lossy compression algorithms to remove details barely noticeable to the human eye, delivering lightweight files. It is the gold standard for photos, web banners, and social media. Converting PNG to JPG trades micro-fidelity for network speed.',
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
        description: 'Traditional tools that upload your files to remote servers.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Network latency (Upload/Download)',
          'Privacy leak risks',
          'File size upload limits',
          'Ads and tracking scripts',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct browser hardware processing via Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Instant speed without network delays',
          'Guaranteed privacy (0 bytes uploaded)',
          'No file size limits',
          'Clean, ad-free interface',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How Local Technical Conversion Works',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'You might wonder how images are converted without a server. The process leverages modern browser APIs. When you select a file, a local Blob is instantiated in your RAM and drawn onto an invisible HTML5 Canvas element.',
  },
  {
    type: 'paragraph',
    html: 'Since JPG does not support alpha channels, our algorithm fills transparent areas with a solid white background before rendering. The canvas exports a native JPEG byte stream directly to your device storage.',
  },
  {
    type: 'tip',
    title: 'SEO Performance Tip',
    html: 'Search engines penalize slow websites. Converting a 2MB hero PNG into a 200KB JPG significantly improves Largest Contentful Paint (LCP) and PageSpeed metrics without noticeable visual loss.',
  },
  {
    type: 'title',
    text: 'Security for Enterprise & Sensitive Data',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'For financial, medical, or legal professionals, uploading files to third-party conversion sites is a compliance risk. Our local web worker model operates in an isolated environment where data vanishes when the tab closes.',
  },
  {
    type: 'title',
    text: 'Output Format Compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Built-in image viewers on Windows, macOS, iOS and Android.',
      'Social platforms (Instagram, LinkedIn, X, Facebook).',
      'Office productivity suites (Microsoft Office, Google Workspace).',
      'Content Management Systems (WordPress, Shopify, Webflow).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: Optimize Like a Pro',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'This converter is an engineering solution built for speed and privacy. Whether you are a web developer or home user, it provides the ultimate way to save bandwidth while keeping data safe.',
  },
];

export const content: PngAJpgLocaleContent = {
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
