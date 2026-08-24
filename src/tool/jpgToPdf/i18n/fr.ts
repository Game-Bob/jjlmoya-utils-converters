import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'convertisseur-jpg-en-pdf';
const title = "Convertisseur JPG en PDF";
const description = "Transformez des images JPG en un PDF ordonné dans votre navigateur. Choisissez le format de papier, l orientation et les marges sans téléverser de fichier.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "Créez un PDF à partir de vos images JPG",
  dropText: "Déposez des fichiers JPG ici. L ordre choisi sera l ordre des pages.",
  selectFiles: "Sélectionner les fichiers JPG",
  privacyNote: "Tout reste dans le navigateur. Vos images ne sont jamais téléchargées.",
  optionsTitle: "Feuille d impression",
  settingsTitle: "Paramètres du papier",
  pageSizeLabel: "Taille du papier",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientation",
  portrait: "Portrait",
  landscape: "Paysage",
  marginLabel: "Marges",
  pagesTitle: "Pages",
  reorderHint: "Déplacez les pages avant l exportation.",
  page: "Page",
  pageSingular: "page",
  pagePlural: "pages",
  moveUp: "Monter",
  moveDown: "Descendre",
  remove: "Supprimer",
  emptyPages: "Vos images sélectionnées apparaîtront ici.",
  createPdf: "Créer le PDF",
  reset: "Recommencer",
  ready: "Prêt pour vos images",
  processing: "Préparation de l image",
  error: "Impossible de lire l image",
  downloadPdf: "Télécharger le PDF",
  building: "Création du PDF",
  pdfReady: "Votre PDF est prêt",
  invalidFile: "Cet outil accepte uniquement les fichiers JPG et JPEG.",
  bibliographyTitle: "Références",
  faqTitle: "Foire aux questions",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Puis-je regrouper plusieurs images JPG dans un seul PDF ?",
    "answer": "Oui. Sélectionnez autant de fichiers JPG que nécessaire, réorganisez les pages et exportez un PDF unique."
  },
  {
    "question": "Mes images sont-elles téléversées sur un serveur ?",
    "answer": "Non. La conversion s effectue localement dans votre navigateur."
  },
  {
    "question": "Puis-je choisir le format de papier ?",
    "answer": "Oui. Vous pouvez définir le format A4 ou Lettre, l orientation et les marges."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "Sélectionnez les images JPG",
    "text": "Glissez vos fichiers JPG ou choisissez-les depuis votre appareil."
  },
  {
    "name": "Organisez les pages",
    "text": "Ajustez l ordre des pages, choisissez le format A4/Lettre et les marges."
  },
  {
    "name": "Créez et téléchargez",
    "text": "Cliquez sur Créer le PDF puis téléchargez votre document."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Convertissez vos images JPG en un PDF prêt à imprimer",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ce convertisseur JPG en PDF permet d assembler plusieurs photos ou numérisations dans un seul document fluide. Ajustez la disposition des pages et les marges selon vos besoins."
  },
  {
    "type": "title",
    "text": "Un rendu propre et professionnel",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Reclassez facilement vos images avant l exportation.",
      "Choisissez l orientation portrait ou paysage adaptée à vos visuels.",
      "Définissez des marges adaptées à votre imprimante."
    ]
  },
  {
    "type": "tip",
    "title": "Confidentialité totale",
    "html": "Le traitement est effectué en local sur votre appareil, garantissant la sécurité de vos fichiers."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'fr', faq, howTo }),
};
