import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'convertitore-da-jpg-a-pdf';
const title = "Convertitore da JPG a PDF";
const description = "Converti immagini JPG in un PDF ordinato nel tuo browser. Scegli formato carta, orientamento e margini senza caricare file.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "Crea un PDF dalle tue immagini JPG",
  dropText: "Trascina qui i file JPG. L ordine scelto sarà l ordine delle pagine.",
  selectFiles: "Seleziona file JPG",
  privacyNote: "Tutto viene elaborato nel browser. Le tue immagini non vengono caricate.",
  optionsTitle: "Foglio di stampa",
  settingsTitle: "Impostazioni carta",
  pageSizeLabel: "Formato carta",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientamento",
  portrait: "Verticale",
  landscape: "Orizzontale",
  marginLabel: "Margini",
  pagesTitle: "Pagine",
  reorderHint: "Sposta le pagine prima di esportare.",
  page: "Pagina",
  pageSingular: "pagina",
  pagePlural: "pagine",
  moveUp: "Sposta su",
  moveDown: "Sposta giù",
  remove: "Rimuovi",
  emptyPages: "Le immagini selezionate appariranno qui.",
  createPdf: "Crea PDF",
  reset: "Ricomincia",
  ready: "Pronto per le tue immagini",
  processing: "Preparazione immagine",
  error: "Impossibile leggere l immagine",
  downloadPdf: "Scarica PDF",
  building: "Creazione PDF",
  pdfReady: "Il tuo PDF è pronto",
  invalidFile: "Questo strumento accetta solo file JPG e JPEG.",
  bibliographyTitle: "Riferimenti",
  faqTitle: "Domande frequenti",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Posso unire più immagini JPG in un unico PDF?",
    "answer": "Sì. Seleziona i file JPG desiderati, ordina le pagine ed esporta un unico documento PDF."
  },
  {
    "question": "Le mie immagini vengono caricate su un server?",
    "answer": "No. Tutto il processo avviene localmente nel tuo browser."
  },
  {
    "question": "Posso scegliere il formato A4 o Lettera?",
    "answer": "Sì. Puoi selezionare A4 o Letter, l orientamento e i margini."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "Seleziona le immagini JPG",
    "text": "Trascina i file JPG o sceglili dal tuo dispositivo."
  },
  {
    "name": "Organizza le pagine",
    "text": "Ordina le immagini e imposta formato A4/Letter, orientamento e margini."
  },
  {
    "name": "Crea e scarica",
    "text": "Clicca su Crea PDF e scarica il documento finale."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Trasforma le tue immagini JPG in un PDF pronto per la stampa",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Questo convertitore da JPG a PDF ti permette di unire scansioni e foto in un unico documento organizzato. Personalizza l ordine delle pagine e la disposizione del foglio."
  },
  {
    "type": "title",
    "text": "Documenti ordinati in pochi clic",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Riordina le immagini prima di generare il file definitivo.",
      "Scegli l orientamento verticale o orizzontale ideale.",
      "Imposta i margini per una stampa senza tagli indesiderati."
    ]
  },
  {
    "type": "tip",
    "title": "Massima privacy per i tuoi file",
    "html": "I file vengono elaborati direttamente sul tuo dispositivo senza essere trasmessi online."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'it', faq, howTo }),
};
