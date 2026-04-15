import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-to-jpg-converter';
const title = 'Convert WebP to JPG Online and Free';
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
  faqTitle: 'Frequently Asked Questions',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Can I upload private images securely?',
    answer:
      'Yes. There is no upload server. Your browser processes the WebP on your computer and generates the JPG for you to download. Nobody else sees it.',
  },
  {
    author: 'Admin',
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
    text: 'WebP to JPG Converter: Universal Compatibility Without Compromising Privacy',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> is Google\'s bet on efficiency: lighter images with quality comparable to traditional JPG. However, its compatibility remains a real-world problem. Email clients like Outlook, legacy design software, messaging apps, and corporate workflows still depend on the ubiquitous <strong>JPG</strong>. Converting WebP to JPG is the bridge between the modern web and the real world.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: When to Use Each Format?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP excels in controlled environments: modern websites on Chrome, Edge or Firefox where browser compatibility can be guaranteed. Its superior compression reduces file weight by 25–35% compared to equivalent JPG, improving load times and Core Web Vitals metrics. It is the ideal format when you control the viewing environment.',
  },
  {
    type: 'paragraph',
    html: 'JPG, on the other hand, works in <em>absolutely every context</em>: email attachments, PowerPoint presentations, Word documents, home printers, legacy editing applications and social media platforms without exception. If you need someone to open your image without any technical friction, JPG is the right answer.',
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
          'Your photos travel across the internet to unknown servers',
          'Waiting time for upload and remote processing',
          'Daily limits on file size and free conversions',
          'Real risk of data retention on third-party servers',
        ],
      },
      {
        title: 'Our Local Architecture',
        description: 'Direct processing on your hardware using Vanilla JS technology.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero bytes sent: everything happens in your RAM',
          'Instant speed without depending on your connection',
          'No limits on file size or number of files',
          'Perfect for personal, medical or corporate photos',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'How It Works Technically',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'When you drag a WebP file into the tool, the browser decodes it natively using its internal rendering engine. The file is then drawn onto an invisible <strong>HTML5 Canvas</strong> element. Since JPG does not support transparency, the algorithm pre-fills the canvas with a solid white background before compositing the image on top.',
  },
  {
    type: 'paragraph',
    html: 'The final step is export: the Canvas method <code>toDataURL(\'image/jpeg\')</code> converts the canvas pixels into a high-quality compressed JPG byte stream. This stream is delivered directly to the browser\'s download system, with no network communication whatsoever. The entire process takes milliseconds even for multi-megapixel images.',
  },
  {
    type: 'tip',
    title: 'Compatibility tip',
    html: 'When sharing photos with non-technical users or sending them via email, always use JPG — zero compatibility issues across any email client, operating system or device, no exceptions and no unpleasant surprises.',
  },
  {
    type: 'title',
    text: 'Use Cases and Compatibility',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Attaching photos in emails from Outlook, Gmail or Apple Mail.',
      'Inserting images in Word documents, Excel or PowerPoint presentations.',
      'Posting on social media platforms that reject WebP.',
      'Sharing via WhatsApp or messaging apps with limited format support.',
      'Printing photographs at print services that only accept JPG or PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP is the future of web images, but JPG remains the king of universal compatibility. This tool lets you cross that bridge in seconds, completely privately and without installing anything. Your image never leaves your device.',
  },
];

export const content: WebpAJpgLocaleContent = {
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
