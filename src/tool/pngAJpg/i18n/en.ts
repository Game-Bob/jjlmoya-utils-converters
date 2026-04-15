import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-to-jpg-converter';
const title = 'Convert PNG to JPG Online';
const description =
  'Convert PNG images to JPG directly in your browser. No file uploads to servers. Fast, free and completely private.';

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
    question: 'Why convert PNG to JPG?',
    answer:
      'PNG maintains high quality and transparency but results in large files. Converting to JPG is perfect when you need lightweight photos for emails or fast websites and a solid background is acceptable.',
  },
  {
    question: 'Will I lose details during the conversion?',
    answer:
      'We apply a balanced high-quality compression ratio, so differences in photographs and gradients will be almost imperceptible to the eye, but you will notice the savings in the final file size.',
  },
  {
    question: 'Are my photos processed securely?',
    answer:
      'Absolutely yes. We do not use cloud servers; the conversion algorithm runs through the HTML5 Canvas of your own web browser in an isolated environment.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Drag PNG Files',
    text: 'Send your static PNG images to the local processing box by dropping them there.',
  },
  {
    name: 'White Re-Rendering',
    text: 'Each photo automatically adapts its transparency with an underlying white layer to make it compatible with the JPG environment.',
  },
  {
    name: 'Direct Export',
    text: 'Click the green download icons and save your new JPG files.',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'PNG Consortium Specifications',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'The JPEG committee',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Free Online PNG to JPG Converter',
  },
  {
    type: 'paragraph',
    html:
      'PNG (Portable Network Graphics) is widely used for its lossless quality and transparency (alpha channel) support. However, this fidelity comes at a cost: PNG files are considerably larger than their JPG equivalents, especially for photographs or images with complex gradients.',
  },
  {
    type: 'paragraph',
    html:
      'JPG (or JPEG) uses a lossy compression algorithm that drastically reduces file size. For photographs and images where a small loss of detail is acceptable, JPG is the standard choice. A 2 MB PNG can become a 200 KB JPG with virtually identical visual quality.',
  },
  {
    type: 'paragraph',
    html:
      'Our PNG to JPG converter works entirely in your web browser using the HTML5 Canvas API. The process is simple: the PNG image is loaded into memory, drawn on a virtual canvas, and exported as JPG at optimal quality. Transparent areas in the PNG are replaced with a solid white background, as the JPG format does not support the alpha channel.',
  },
  {
    type: 'tip',
    html:
      'For images with text or logos requiring transparent backgrounds, consider using WebP instead of JPG. WebP offers similar compression but retains transparency support.',
  },
  {
    type: 'paragraph',
    html:
      'JPG can reduce the size of a photographic image by 70% to 90% compared to PNG, depending on image complexity and the quality settings applied.',
  },
  {
    type: 'paragraph',
    html:
      'Typical use cases for converting PNG to JPG include: preparing images for email where size matters, optimizing product photos for online stores, reducing screenshot weight before sharing, and compressing images for faster web page loading.',
  },
  {
    type: 'paragraph',
    html:
      'Privacy is a priority in our tool. Unlike online converters that upload your files to remote servers, our converter processes everything locally on your device. Your images never leave your computer, which is especially important for corporate documents, personal photos, or any sensitive material.',
  },
  {
    type: 'paragraph',
    html:
      'Convert PNG to JPG instantly, for free, and privately directly in your browser. No registration, no limits, and without compromising the security of your files.',
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
