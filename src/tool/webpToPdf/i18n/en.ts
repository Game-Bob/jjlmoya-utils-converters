import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { WebpToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'webp-to-pdf-converter';
const title = 'WebP to PDF Converter';
const description = 'Turn WebP images into an ordered PDF in your browser. Set paper size, orientation and margins without uploading files.';

const ui: ImageToPdfUI = {
  formatLabel: 'WebP', dropTitle: 'Build a PDF from your WebP images', dropText: 'Drop one or more WebP files here. The order you choose becomes the page order.', selectFiles: 'Select WebP files', privacyNote: 'Everything stays in this browser. Your images are never uploaded.', optionsTitle: 'Print sheet', settingsTitle: 'Paper settings', pageSizeLabel: 'Paper size', a4: 'A4', letter: 'Letter', orientationLabel: 'Orientation', portrait: 'Portrait', landscape: 'Landscape', marginLabel: 'Margins', pagesTitle: 'Pages', reorderHint: 'Move pages up or down before exporting.', page: 'Page', pageSingular: 'page', pagePlural: 'pages', moveUp: 'Move up', moveDown: 'Move down', remove: 'Remove', emptyPages: 'Your selected images will appear here.', createPdf: 'Create PDF', reset: 'Start over', ready: 'Ready for your images', processing: 'Preparing image', error: 'Could not read this WebP', downloadPdf: 'Download PDF', building: 'Building PDF', pdfReady: 'Your PDF is ready', invalidFile: 'This tool accepts WebP files only.', bibliographyTitle: 'References', faqTitle: 'Frequently asked questions',
};

const faq: WebpToPdfLocaleContent['faq'] = [
  { question: 'Can I turn a WebP gallery into one PDF?', answer: 'Yes. Select the WebP images together, arrange their pages, and create one PDF for download.' },
  { question: 'Does converting WebP to PDF upload my images?', answer: 'No. WebP files are decoded and composed locally in your browser.' },
  { question: 'Which paper options are available?', answer: 'You can choose A4 or Letter paper, switch between portrait and landscape, and set a margin from 0 to 32 millimetres.' },
];

const howTo: WebpToPdfLocaleContent['howTo'] = [
  { name: 'Choose WebP files', text: 'Drop your WebP images into the tool or select them from your device.' },
  { name: 'Set the document order', text: 'Use the page controls to move images up or down until the PDF reads correctly.' },
  { name: 'Set paper and download', text: 'Choose paper size, orientation and margins, create the PDF, and download it locally.' },
];

const seo: WebpToPdfLocaleContent['seo'] = [
  { type: 'title', text: 'Turn a WebP image set into a printable PDF', level: 2 },
  { type: 'paragraph', html: 'WebP is convenient for the web, but a PDF is easier to print, archive or send as a fixed document. This converter keeps the workflow focused on a selected image sequence and gives you control over the paper before export.' },
  { type: 'title', text: 'Choose settings for the document you need', level: 3 },
  { type: 'list', icon: 'mdi:check-circle', items: ['Use portrait for vertical photographs and portrait documents.', 'Use landscape when the WebP files are wider than they are tall.', 'Leave a generous margin for office printers that cannot print to the edge.', 'Check the page order before export because it becomes the final PDF order.'] },
  { type: 'tip', title: 'A local conversion for private assets', html: 'The browser does the conversion on your device, so WebP assets are not copied to a remote service.' },
];

export const content: WebpToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'en', faq, howTo }),
};
