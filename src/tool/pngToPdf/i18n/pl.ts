import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { PngToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'konwerter-png-na-pdf';
const title = "Konwerter PNG na PDF";
const description = "Konwertuj obrazy PNG w uporządkowany plik PDF w przeglądarce. Wybierz rozmiar papieru, orientację i marginesy bez przesyłania plików.";

const ui: ImageToPdfUI = {
  formatLabel: 'PNG',
  dropTitle: "Utwórz PDF z obrazów PNG",
  dropText: "Przeciągnij pliki PNG tutaj. Wybrana kolejność stanie się kolejnością stron.",
  selectFiles: "Wybierz pliki PNG",
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
  invalidFile: "To narzędzie akceptuje tylko pliki PNG i JPEG.",
  bibliographyTitle: "Bibliografia",
  faqTitle: "Często zadawane pytania",
};

const faq: PngToPdfLocaleContent['faq'] = [
  {
    "question": "Czy mogę połączyć kilka obrazów PNG w jeden PDF?",
    "answer": "Tak. Wybierz pliki PNG, ustal kolejność stron i wyeksportuj pojedynczy dokument PDF."
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

const howTo: PngToPdfLocaleContent['howTo'] = [
  {
    "name": "Wybierz obrazy PNG",
    "text": "Przeciągnij pliki PNG lub wybierz je z urządzenia."
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

const seo: PngToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "Zamień obrazy PNG w gotowy do druku dokument PDF",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ten konwerter PNG na PDF umożliwia połączenie zdjęć i skanów w jeden uporządkowany plik. Dostosuj kolejność stron, rozmiar papieru i marginesy."
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

export const content: PngToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'pl', faq, howTo }),
};
