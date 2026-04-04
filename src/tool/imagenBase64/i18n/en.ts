import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImagenBase64LocaleContent } from '../index';
import type { ImageToBase64UI } from '../index';

const slug = 'image-to-base64-converter';
const title = 'Image to Base64 Converter Online - Free and 100% Private';
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
    content: 'Online Image to Base64 Converter',
  },
  {
    type: 'paragraph',
    content:
      'Base64 encoding is a fundamental technique in modern web development. It allows representing binary data (like images) as ASCII text, making it possible to embed images directly in HTML, CSS or JavaScript code without separate files. This is done through what are called Data URIs (Data Uniform Resource Identifiers).',
  },
  {
    type: 'paragraph',
    content:
      'A Data URI for an image follows the format: data:[MIME type];base64,[encoded data]. Our tool automatically generates the correct MIME type based on the image format you upload, whether it is PNG, JPG, WebP, GIF or SVG.',
  },
  {
    type: 'paragraph',
    content:
      'Main use cases for Base64 images include: SVG icons in CSS, small logos in SPA (Single Page Application) apps, critical images for initial page load that should not cause additional network requests, and image data in JSON or REST APIs.',
  },
  {
    type: 'tip',
    content:
      'Base64 code is approximately 33% larger than the original file. For small images (icons, logos, small sprites) it is efficient. For large photographs, it is better to use separate files and take advantage of browser caching.',
  },
  {
    type: 'stats',
    content:
      'A 1KB PNG image converts to approximately 1.37KB of Base64. A 100KB image would result in about 137KB of Base64 text. This 1.33x factor is constant for any file type.',
  },
  {
    type: 'paragraph',
    content:
      'Our tool processes everything locally. The image is read via the browser\'s FileReader API, which converts it directly to Base64 without any data being sent to external servers. This guarantees complete privacy for your images, whether personal or corporate.',
  },
  {
    type: 'summary',
    content:
      'Convert images to Base64 and Data URI for free and privately. Support for JPG, PNG, WebP, SVG and GIF. Immediate result in your browser without server-side processing.',
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

export const content: ImagenBase64LocaleContent = {
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
