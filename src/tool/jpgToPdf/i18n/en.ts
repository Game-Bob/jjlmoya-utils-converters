import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'jpg-to-pdf-converter';
const title = 'JPG to PDF Converter';
const description = 'Turn JPG images into an ordered PDF in your browser. Choose paper size, orientation and margins without uploading files.';

const ui: ImageToPdfUI = {
  formatLabel: 'JPG', dropTitle: 'Build a PDF from your JPG images', dropText: 'Drop one or more JPG files here. The order you choose becomes the page order.', selectFiles: 'Select JPG files', privacyNote: 'Everything stays in this browser. Your images are never uploaded.', optionsTitle: 'Print sheet', settingsTitle: 'Paper settings', pageSizeLabel: 'Paper size', a4: 'A4', letter: 'Letter', orientationLabel: 'Orientation', portrait: 'Portrait', landscape: 'Landscape', marginLabel: 'Margins', pagesTitle: 'Pages', reorderHint: 'Move pages up or down before exporting.', page: 'Page', pageSingular: 'page', pagePlural: 'pages', moveUp: 'Move up', moveDown: 'Move down', remove: 'Remove', emptyPages: 'Your selected images will appear here.', createPdf: 'Create PDF', reset: 'Start over', ready: 'Ready for your images', processing: 'Preparing image', error: 'Could not read this JPG', downloadPdf: 'Download PDF', building: 'Building PDF', pdfReady: 'Your PDF is ready', invalidFile: 'This tool accepts JPG and JPEG files only.', bibliographyTitle: 'References', faqTitle: 'Frequently asked questions',
};

const faq: JpgToPdfLocaleContent['faq'] = [
  { question: 'Can I put several JPG images into one PDF?', answer: 'Yes. Select as many JPG files as you need, arrange the page order with the move buttons, and export one PDF.' },
  { question: 'Are my JPG images uploaded anywhere?', answer: 'No. The images are read and composed locally by your browser. They are not sent to a server.' },
  { question: 'Can I print the PDF as A4 or Letter?', answer: 'Yes. Choose A4 or Letter, then set portrait or landscape orientation and adjust the margins before creating the PDF.' },
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  { name: 'Select JPG images', text: 'Drop JPG files into the workspace or use the file picker to choose them from your device.' },
  { name: 'Arrange and set the paper', text: 'Move pages into the desired order, then choose A4 or Letter, orientation and margins.' },
  { name: 'Create and download', text: 'Select Create PDF and download the finished document when the ready message appears.' },
];

const seo: JpgToPdfLocaleContent['seo'] = [
  { type: 'title', text: 'Make a printable PDF from JPG images', level: 2 },
  { type: 'paragraph', html: 'This JPG to PDF converter is designed for image collections that need to become one printable document. Add the files in any order, correct the sequence, and choose the paper settings before you export.' },
  { type: 'title', text: 'Prepare a clean image document', level: 3 },
  { type: 'list', icon: 'mdi:check-circle', items: ['Use the page controls to put a cover or first photograph at the front.', 'Choose portrait for most photographs and landscape for wide images.', 'Increase the margin when the PDF will be printed on a home printer.', 'Use the preview list to spot a missing or duplicated image before export.'] },
  { type: 'tip', title: 'Keep sensitive photographs private', html: 'The conversion runs in the browser, so private scans, receipts and client images stay on your device.' },
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'en', faq, howTo }),
};
