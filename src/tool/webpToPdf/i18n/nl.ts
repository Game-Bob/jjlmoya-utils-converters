import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { WebpToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'jpg-naar-pdf-omzetten';
const title = "WebP naar PDF Omzetter";
const description = "Zet WebP-afbeeldingen in uw browser om naar een geordende PDF. Kies papierformaat, oriëntatie en marges zonder bestanden te uploaden.";

const ui: ImageToPdfUI = {
  formatLabel: 'WebP',
  dropTitle: "Maak een PDF van uw WebP-afbeeldingen",
  dropText: "Sleep WebP-bestanden hier naartoe. De gekozen volgorde wordt de paginavolgorde.",
  selectFiles: "WebP-bestanden selecteren",
  privacyNote: "Alles blijft in de browser. Uw afbeeldingen worden nooit geüpload.",
  optionsTitle: "Afdrukblad",
  settingsTitle: "Papierinstellingen",
  pageSizeLabel: "Papierformaat",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Oriëntatie",
  portrait: "Staand",
  landscape: "Liggend",
  marginLabel: "Marges",
  pagesTitle: "Pagina s",
  reorderHint: "Verplaats pagina s voor het exporteren.",
  page: "Pagina",
  pageSingular: "pagina",
  pagePlural: "pagina s",
  moveUp: "Omhoog",
  moveDown: "Omlaag",
  remove: "Verwijderen",
  emptyPages: "Uw geselecteerde afbeeldingen verschijnen hier.",
  createPdf: "PDF maken",
  reset: "Opnieuw beginnen",
  ready: "Klaar voor uw afbeeldingen",
  processing: "Afbeelding voorbereiden",
  error: "Kan afbeelding niet lezen",
  downloadPdf: "PDF downloaden",
  building: "PDF wordt gemaakt",
  pdfReady: "Uw PDF is klaar",
  invalidFile: "Deze tool accepteert alleen WebP- en JPEG-bestanden.",
  bibliographyTitle: "Referenties",
  faqTitle: "Veelgestelde vragen",
};

const faq: WebpToPdfLocaleContent['faq'] = [
  {
    "question": "Kan ik meerdere WebP-afbeeldingen samenvoegen tot één PDF?",
    "answer": "Ja. Selecteer de WebP-bestanden, pas de volgorde aan en exporteer één PDF-document."
  },
  {
    "question": "Worden mijn afbeeldingen geüpload?",
    "answer": "Nee. De verwerking vindt volledig lokaal plaats in uw browser."
  },
  {
    "question": "Kan ik A4 of Letter kiezen?",
    "answer": "Ja. U kunt kiezen uit A4 of Letter en de oriëntatie en marges aanpassen."
  }
];

const howTo: WebpToPdfLocaleContent['howTo'] = [
  {
    "name": "Selecteer WebP-afbeeldingen",
    "text": "Sleep uw WebP-bestanden of kies ze vanaf uw apparaat."
  },
  {
    "name": "Schik de pagina s",
    "text": "Pas de volgorde aan en kies papierformaat A4/Letter, oriëntatie en marges."
  },
  {
    "name": "Maak en download de PDF",
    "text": "Klik op PDF maken en download het bestand."
  }
];

const seo: WebpToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Maak een printklare PDF van uw WebP-afbeeldingen",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Deze WebP naar PDF omzetter is ideaal om meerdere foto s of scans samen te voegen tot één overzichtelijk document. Stel eenvoudig volgorde en paginaformaat in."
  },
  {
    "type": "title",
    "text": "Nette documenten in een handomdraai",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Orden de pagina s zodat het document logisch opbouwt.",
      "Kies staand of liggend afhankelijk van de foto-oriëntatie.",
      "Pas marges aan voor een optimaal afdrukresultaat op uw printer."
    ]
  },
  {
    "type": "tip",
    "title": "100% Privacy gegarandeerd",
    "html": "De bestanden blijven op uw eigen apparaat en worden niet naar externe servers gestuurd."
  }
];

export const content: WebpToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'nl', faq, howTo }),
};
