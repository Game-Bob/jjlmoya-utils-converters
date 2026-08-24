import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { JpgToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'konwerter-jpg-na-pdf';
const title = "Konwerter JPG na PDF";
const description = "Konwertuj obrazy JPG w uporządkowany plik PDF w przeglądarce. Wybierz rozmiar papieru, orientację i marginesy bez przesyłania plików.";

const ui: ImageToPdfUI = {
  formatLabel: 'JPG',
  dropTitle: "Utwórz PDF z obrazów JPG",
  dropText: "Przeciągnij pliki JPG tutaj. Wybrana kolejność stanie się kolejnością stron.",
  selectFiles: "Wybierz pliki JPG",
  privacyNote: "Wszystko odbywa się w przeglądarce. Twoje obrazy nie są wysyłane.",
  optionsTitle: "Arkusz druku",
  settingsTitle: "Ustawienia papieru",
  pageSizeLabel: "Rozmiar papieru",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "Orientacja",
  portrait: "Pionowa",
  landscape: "Pozioma",
  marginLabel: "Marginesy",
  pagesTitle: "Strony",
  reorderHint: "Zmień kolejność stron przed eksportem.",
  page: "Strona",
  pageSingular: "strona",
  pagePlural: "strony",
  moveUp: "W górę",
  moveDown: "W dół",
  remove: "Usuń",
  emptyPages: "Wybrane obrazy pojawią się tutaj.",
  createPdf: "Utwórz PDF",
  reset: "Zacznij od nowa",
  ready: "Gotowy na obrazy",
  processing: "Przygotowywanie obrazu",
  error: "Nie można odczytać obrazu",
  downloadPdf: "Pobierz PDF",
  building: "Tworzenie PDF",
  pdfReady: "Twój PDF jest gotowy",
  invalidFile: "To narzędzie akceptuje tylko pliki JPG i JPEG.",
  bibliographyTitle: "Bibliografia",
  faqTitle: "Często zadawane pytania",
};

const faq: JpgToPdfLocaleContent['faq'] = [
  {
    "question": "Czy mogę połączyć kilka obrazów JPG w jeden PDF?",
    "answer": "Tak. Wybierz pliki JPG, ustal kolejność stron i wyeksportuj pojedynczy dokument PDF."
  },
  {
    "question": "Czy moje obrazy są wysyłane na serwer?",
    "answer": "Nie. Konwersja odbywa się lokalnie w Twojej przeglądarce."
  },
  {
    "question": "Czy mogę wybrać rozmiar papieru A4 lub Letter?",
    "answer": "Tak. Możesz wybrać format A4 lub Letter, orientację oraz marginesy."
  }
];

const howTo: JpgToPdfLocaleContent['howTo'] = [
  {
    "name": "Wybierz obrazy JPG",
    "text": "Przeciągnij pliki JPG lub wybierz je z urządzenia."
  },
  {
    "name": "Ułóż strony i papier",
    "text": "Ustaw kolejność obrazów, rozmiar A4/Letter, orientację i marginesy."
  },
  {
    "name": "Wygeneruj i pobierz PDF",
    "text": "Kliknij Utwórz PDF i pobierz gotowy dokument."
  }
];

const seo: JpgToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Zamień obrazy JPG w gotowy do druku dokument PDF",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ten konwerter JPG na PDF umożliwia połączenie zdjęć i skanów w jeden uporządkowany plik. Dostosuj kolejność stron, rozmiar papieru i marginesy."
  },
  {
    "type": "title",
    "text": "Przygotuj estetyczny plik PDF",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Ustaw kolejność stron, aby zachować właściwy układ dokumentu.",
      "Wybierz orientację pionową lub poziomą w zależności od zdjęć.",
      "Dostosuj marginesy, aby uniknąć obcięcia krawędzi przy druku."
    ]
  },
  {
    "type": "tip",
    "title": "Pełna ochrona prywatności",
    "html": "Konwersja odbywa się w Twojej przeglądarce, dzięki czemu poufne dokumenty nie opuszczają Twojego urządzenia."
  }
];

export const content: JpgToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'pl', faq, howTo }),
};
