import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'omvandla-jpg-till-pdf';
const title = "Omvandla JPG till PDF";
const description = "Omvandla JPG-bilder till en ordnad PDF i din webbläsare. Välj pappersstorlek, orientering och marginaler utan att ladda upp filer.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "Skapa en PDF från dina JPG-bilder",
  dropText: "Dra JPG-filer hit. Ordningen du väljer blir sidordningen.",
  selectFiles: "Välj JPG-filer",
  privacyNote: "Allt sker i webbläsaren. Dina bilder laddas aldrig upp.",
  optionsTitle: "Utskriftsark",
  settingsTitle: "Pappersinställningar",
  pageSizeLabel: "Pappersstorlek",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientering",
  portrait: "Stående",
  landscape: "Liggande",
  marginLabel: "Marginaler",
  pagesTitle: "Sidor",
  reorderHint: "Ändra ordning på sidorna före export.",
  page: "Sida",
  pageSingular: "sida",
  pagePlural: "sidor",
  moveUp: "Flytta upp",
  moveDown: "Flytta ned",
  remove: "Ta bort",
  emptyPages: "Dina valda bilder visas här.",
  createPdf: "Skapa PDF",
  reset: "Börja om",
  ready: "Redo för dina bilder",
  processing: "Förbereder bild",
  error: "Kunde inte läsa bilden",
  downloadPdf: "Ladda ned PDF",
  building: "Skapar PDF",
  pdfReady: "Din PDF är klar",
  invalidFile: "Det här verktyget accepterar endast JPG- och JPEG-filer.",
  bibliographyTitle: "Referenser",
  faqTitle: "Vanliga frågor",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Kan jag slå ihop flera JPG-bilder till en PDF?",
    "answer": "Ja. Välj dina JPG-filer, ordna sidorna och exportera en samlad PDF-fil."
  },
  {
    "question": "Laddas mina bilder upp till någon server?",
    "answer": "Nej. Hela konverteringen sker lokalt i din webbläsare."
  },
  {
    "question": "Kan jag välja pappersstorlek som A4 eller Letter?",
    "answer": "Ja. Du kan välja A4 eller Letter samt ställa in orientering och marginaler."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "Välj JPG-bilder",
    "text": "Dra dina JPG-filer eller välj dem från din enhet."
  },
  {
    "name": "Ordna sidor och papper",
    "text": "Justera sidordningen, välj A4/Letter, orientering och marginaler."
  },
  {
    "name": "Skapa och ladda ned PDF",
    "text": "Klicka på Skapa PDF och ladda ned den färdiga filen."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Skapa ett utskriftsklart PDF-dokument från dina JPG-bilder",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Denna JPG till PDF-omvandlare samlar dina foton eller skannade filer i ett strukturerat PDF-dokument. Anpassa ordning och pappersinställningar snabbt."
  },
  {
    "type": "title",
    "text": "Enkelt och snyggt resultat",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Sortera sidorna så att dokumentet får rätt följd.",
      "Välj stående eller liggande format utifrån bildernas form.",
      "Justera marginalerna för perfekt utskrift på din skrivare."
    ]
  },
  {
    "type": "tip",
    "title": "Trygg och privat hantering",
    "html": "Bearbetningen sker helt i din webbläsare så dina privata bilder stannar hos dig."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'sv', faq, howTo }),
};
