import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'image-to-base64-converter';
const title = 'Image to Base64 Converter Online';
const description =
  'Convert any image to Base64 code and Data URI directly in your browser. No file uploads. Free, private and instant.';

const ui: ImageToBase64UI = {
  dragTitle: 'Drag your image here',
  dragSubtext: 'or click to browse your files',
  formatBadge: 'Supports JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Ready for CSS / HTML src="")',
  base64Label: 'Base64 only (Plain encoded text)',
  copyBtn: 'Copy',
  dataUriPlaceholder: 'Upload an image to see the Data URI code...',
  base64Placeholder: 'Upload an image to see the pure Base64 code...',
  toastMessage: 'Code copied to clipboard!',
  invalidImageAlert: 'Please upload a valid image file.',
  bibliographyTitle: 'Bibliographic References',
  faqTitle: 'Frequently Asked Questions',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'What is Base64 and what is it used for in web development?',
    answer:
      'Base64 is an encoding system that converts binary data into an ASCII text string. In web development, it is used to embed images directly within HTML or CSS files via Data URIs, reducing the number of HTTP requests to the server.',
  },
  {
    question: 'Is it safe to convert my images to Base64 here?',
    answer:
      'Absolutely safe and private. Our tool works 100% locally in your browser. Your images are never uploaded or processed on any external server.',
  },
  {
    question: 'What image formats does the Base64 converter support?',
    answer:
      'The tool is compatible with JPG, PNG, GIF, WebP, and even SVG vector files. When loading the image, it will automatically detect its MIME type to generate the exact Data URI code.',
  },
  {
    question: 'When should I NOT use Base64 images?',
    answer:
      'You should avoid using Base64 images for large photographs or high-resolution images. Base64 code takes up approximately 33% more weight than the original binary file, which can excessively inflate your CSS stylesheets or HTML documents.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Drag or Select your Image',
    text: 'Move any image (JPG, PNG, WebP, SVG, GIF) to the upload area to start the conversion.',
  },
  {
    name: 'Copy the Generated Code',
    text: 'You will see two textareas: the complete Data URI (ready to use in src="" or CSS) and the pure Base64 for other uses.',
  },
  {
    name: 'Use the Code in your Project',
    text: 'Paste the Data URI directly into the src of an img tag or in your CSS as background-image without needing external files.',
  },
];

const bibliography: ImagenBase64LocaleContent['bibliography'] = [
  {
    name: 'MDN Web Docs: Data URIs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
  },
  {
    name: 'Base64 Encoding RFC 4648',
    url: 'https://datatracker.ietf.org/doc/html/rfc4648',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Image to Base64 Converter: Embed Images Without HTTP Requests',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 is an encoding technique that transforms binary data — like an image — into a pure ASCII text string. The result is a Data URI: a self-contained URL that starts with <code>data:image/png;base64,...</code> and contains the entire encoded image. By embedding this code directly in your HTML, CSS or JSON, the image loads without any additional HTTP request to the server — zero network latency, instant loading.',
  },
  {
    type: 'title',
    text: 'When to use Base64 images',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'The main argument for Base64 is the elimination of network requests. Every image on a web page means an HTTP request with its overhead of connection, DNS, TLS handshake and latency. For very small critical images — the main application logo, favicon, a UI icon — embedding them in Base64 in the CSS or HTML eliminates that cost and guarantees they display instantly even before the browser has cached anything.',
  },
  {
    type: 'paragraph',
    html: 'This technique is especially powerful in SPA (Single Page Application) apps where the JavaScript and CSS bundle is generated at build time: embedding small images in the bundle guarantees they load together with the code without additional requests. It is also indispensable for HTML emails, where mail clients block external images but always display embedded Data URIs.',
  },
  {
    type: 'title',
    text: 'Use cases for Base64 images',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> for critical icons.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> for UI SVGs.',
      'JSON and REST APIs: send images as text data in JSON payloads.',
      'HTML emails: embedded images that display even when the client blocks external URLs.',
      'SVG embedding: embed raster images inside SVG files as inline data.',
    ],
  },
  {
    type: 'title',
    text: 'How the conversion works in the browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'When you select or drag an image, the browser\'s <code>FileReader</code> API reads it directly from disk as binary data in RAM. The <code>readAsDataURL()</code> method converts those binary bytes to their Base64 representation using the RFC 4648 algorithm — every 3 bytes of original data are represented as 4 ASCII characters from the Base64 alphabet. The result includes the automatically detected correct MIME type.',
  },
  {
    type: 'tip',
    title: 'Use it only for small images (under 10 KB)',
    html: 'Base64 increases file size by approximately 33%: a 10 KB image becomes ~13.3 KB of text. For small icons and logos this cost is minimal and the elimination of the HTTP request compensates for it. For photographs or large images, the size overhead is significant — always use a CDN for large images.',
  },
  {
    type: 'title',
    text: 'When NOT to use Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Avoid Base64 for large images — use a CDN instead',
    html: 'If you have images larger than 10-20 KB, Base64 hurts performance: it inflates HTML/CSS size, prevents the browser from caching the image independently, and blocks rendering while the parser processes the giant string. For large images, always serve from a CDN with appropriate cache headers.',
  },
  {
    type: 'title',
    text: 'Compatibility and privacy',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URIs are compatible with 100% of modern browsers and most email clients. Our tool processes everything locally via the FileReader API — your images never leave your device. This makes it suitable for corporate images, private screenshots or any confidential visual content that you need to convert to Base64.',
  },
  {
    type: 'title',
    text: 'Conclusion: The fastest and most private embedding tool',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converting images to Base64 is a targeted but very powerful technique when applied correctly. Use it for small, critical images where zero HTTP requests makes a difference, and avoid it for large images where a CDN always wins. With our tool, you get the Data URI in an instant, without uploading anything to any server.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
