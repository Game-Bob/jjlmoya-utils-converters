import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-to-webp-converter';
const title = 'Convert GIF to Static WebP | Save File Weight Offline';
const description =
  'Convert animated GIFs to static WebP. Preserves transparency. No server. Processed locally in your browser. Free.';

const ui: ImageConverterUI = {
  dragText: 'Drag GIF files...',
  convertText: 'To convert them to WebP instantly',
  selectFiles: 'Select files',
  processedFiles: 'Processed files',
  downloadAll: 'Download All (.zip)',
  pending: 'Pending',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Why freeze an animated file to modern static WebP format?',
    answer:
      'WebP is Google\'s compression standard; it is remarkably lightweight and retains transparency cleanly. Moving from GIF to WebP eliminates the heavy animation and achieves an abysmal gain in web speed.',
  },
  {
    question: 'Will the original avatar remain transparent?',
    answer:
      'Yes, unlike JPEG, the WebP container respects the complex Alpha channel. All its silhouettes will remain perfect as they were natively.',
  },
  {
    question: 'Where will files be uploaded to?',
    answer:
      'There is no upload. Processing is performed entirely by the browser\'s Javascript on your PC, with zero remote sending.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Launch an animated avalanche',
    text: 'Move and drop dozens of memes to the delimited zone without remote connection.',
  },
  {
    name: 'Witness the great invisible change',
    text: 'Watch a progressive indicator change at each millisecond as the local canvas decoder generates the output.',
  },
  {
    name: 'Compress or save your clean resulting arsenal',
    text: 'Take the extracted files individually or press Download Zip to package everything.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'GIF89a Specification',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to WebP Converter: The Modern Replacement for Heavy Animations',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Animated GIFs are the dinosaurs of modern web content: they consume disproportionate bandwidth, degrade the PageSpeed of any page, and are responsible for a significant percentage of total weight on thousands of websites. A typical 5 MB animated GIF can become a WebP animation under 1 MB with the same visual quality. WebP is the modern successor Google specifically designed to replace GIF on the web.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: the gap between the past and present of the web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF is a 1987 format not originally designed for animations — that feature arrived as a later hack. Its 256-color palette, inefficient compression, and inability to handle audio make it an obsolete format. WebP, developed by Google in 2010, offers superior compression both lossy and lossless, native animation support, and full alpha channel.',
  },
  {
    type: 'paragraph',
    html: 'For a web developer, replacing GIFs with WebP on pages can mean a 10-30 point improvement in Google PageSpeed score. Less page weight means better Core Web Vitals, better SEO rankings, and lower bandwidth costs on servers. It is not just an aesthetic improvement — it is a technical architecture decision.',
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
        description: 'Platforms that process your GIFs on remote servers.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Your animations travel over the internet to third-party servers',
          'Waiting time due to network latency on upload and download',
          'Size limits (large GIFs are often rejected)',
          'Risk of file retention and analysis',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'The GIF never leaves your device',
          'Instant conversion with no network wait',
          'No size limits: process GIFs of any weight',
          'Total privacy: 0 bytes sent externally',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How the local GIF to WebP conversion works',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The local conversion uses the HTML5 Canvas API. The GIF is loaded as a native browser Image element. By drawing it onto a canvas, the graphics engine captures the first animation frame with all its transparency information. The <code>toDataURL(\'image/webp\')</code> method exports the frame as WebP directly in RAM.',
  },
  {
    type: 'paragraph',
    html: 'WebP supports full alpha channel, so GIF transparencies are preserved in the resulting WebP without needing to add a background. WebP compression algorithms are significantly more efficient than GIF or PNG, which explains the drastic file size reduction of the final output.',
  },
  {
    type: 'tip',
    title: 'Guaranteed PageSpeed improvement',
    html: 'A 5 MB animated GIF can become a WebP under 1 MB. If you have GIFs on your website pages, replacing them with WebP can immediately improve your Largest Contentful Paint (LCP) and Total Blocking Time (TBT), directly impacting SEO rankings.',
  },
  {
    type: 'title',
    text: 'Use cases and compatibility of the resulting WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Replacing GIFs on web pages to improve PageSpeed scores.',
      'Optimized avatars and stickers for Discord, Slack and modern platforms.',
      'Banners and visuals for digital marketing campaigns.',
      'Animations in progressive web applications (PWA).',
      'Compatible with Chrome, Edge, Firefox, Safari 14+ and all modern browsers.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: migrate your GIFs to the 21st century',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Every GIF on your website is a missed optimization opportunity. Our tool converts GIFs to WebP instantly, privately, and without limits, directly in your browser. The result: files up to 5 times smaller, perfect transparency, and compatibility with all modern browsers.',
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

export const content: GifAWebpLocaleContent = {
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
