import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'konwerter-png-na-jpg';
const title = 'Konwertuj PNG na JPG Online';
const description =
  'Błyskawicznie konwertuj swoje obrazy PNG do formatu JPG z szybką kompresją na własnym komputerze. Bez przesyłania zdjęć do Internetu. Optymalizacja wsadowa.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki PNG...',
  convertText: 'Aby błyskawicznie konwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie': 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto wybrać nasz lokalny konwerter PNG na JPG?',
    answer:
      'W przeciwieństwie do konwencjonalnych narzędzi, nasz program przetwarza pliki w całości w Twojej przeglądarce. Twoje obrazy nigdy nie trafiają na obcy dysk twardy, co gwarantuje pełną suwerenność i prywatność Twoich danych.',
  },
  {
    question: 'JPG czy PNG? Co jest lepsze w moim przypadku?',
    answer:
      'PNG jest idealny do logotypów i elementów z przezroczystością. Jednak JPG jest złotym standardem dla fotografii i banerów internetowych, ponieważ osiąga znacznie mniejszą wagę, co drastycznie poprawia prędkość ładowania strony.',
  },
  {
    question: 'Jak działa techniczna konwersja bez przesyłania czegokolwiek?',
    answer:
      'Wykorzystujemy moc Canvas HTML5. Przeglądarka odtwarza obraz na niewidocznym wirtualnym płótnie, wypełnia przezroczystości kolorem białym i generuje strumień bajtów, który pobierasz bezpośrednio w mgnieniu oka.',
  },
  {
    question: 'Czy jest to bezpieczne dla dokumentów poufnych?',
    answer:
      'Tak, to najbezpieczniejsza opcja dla profesjonalistów z branży bankowej, służby zdrowia czy prawa. Będąc „czarną skrzynką”, która używa tylko Twojej pamięci RAM, to, co dzieje się wewnątrz, znika wraz z zamknięciem karty, co zapobiega wyciekom w chmurach zewnętrznych.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Wybór plików',
    text: 'Przygotuj swoje pliki PNG w folderze i przeciągnij je wszystkie razem do obszaru przetwarzania lub wyszukaj je za pomocą eksploratora.',
  },
  {
    name: 'Błyskawiczne przetwarzanie',
    text: 'Sprawdź, czy status zmieni się na „Gotowe” dla każdego pliku, podczas gdy przeglądarka optymalizuje wagę lokalnie.',
  },
  {
    name: 'Zoptymalizowane pobieranie',
    text: 'Zapisz swoje nowe pliki JPG jeden po drugim lub użyj przycisku „Pobierz wszystko”, aby uzyskać skompresowany plik ZIP ze wszystkimi obrazami.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter PNG na JPG: Ostateczny Przewodnik po Optymalizacji Obrazów',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'W świecie cyfrowego projektowania i tworzenia stron internetowych wydajność jest wszystkim. Format PNG (Portable Network Graphics) jest ceniony za zdolność zachowania przezroczystości i kompresję bezstratną, ale ma jednego wielkiego wroga: wagę pliku. Gdy chcesz, aby Twoja strona internetowa „latała” lub Twoje e-maile ładowały się błyskawicznie, przejście z PNG na JPG jest najmądrzejszą decyzją techniczną.',
  },
  {
    type: 'title',
    text: 'JPG czy PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nie ma formatu lepszego od innego, istnieje tylko narzędzie do konkretnej potrzeby. PNG to format bezstratny, idealny do makiet interfejsów, logotypów z małym tekstem i elementów wizualnych wymagających przezroczystego tła. Jednak ta wierność ma swoją cenę: pliki mogą być 5 lub 10 razy cięższe niż ich skompresowane odpowiedniki.',
  },
  {
    type: 'paragraph',
    html: 'Z drugiej strony JPG (Joint Photographic Experts Group) używa algorytmów dyskretyzacji, aby usunąć informacje, których oko ludzkie prawie nie zauważa, osiągając wagę piórkową. Jest to złoty standard dla fotografii, banerów reklamowych i mediów społecznościowych. Konwertując swoje PNG na JPG, wymieniasz wierność geometryczną na prędkość sieci.',
  },
  {
    type: 'title',
    text: 'Porównanie architektury: Lokalna vs Chmura',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Tradycyjne narzędzia, które przesyłają Twoje zdjęcia na zdalny serwer.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Opóźnienie sieci (Upload/Download)',
          'Ryzyko wycieku prywatnych danych',
          'Limity rozmiaru pliku',
          'Reklamy i trackery',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie za pomocą technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Natychmiastowa prędkość bez sieci',
          'Gwarantowana prywatność (0 bajtów przesłanych)',
          'Brak limitów MB na plik',
          'Profesjonalny i czysty interfejs',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa techniczna konwersja',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Pewnie zastanawiasz się, jak to możliwe, aby konwertować obraz bez wysyłania go na serwer. Magia tkwi w mocy nowoczesnych przeglądarek. Gdy wybierasz plik, generujemy Blob, który istnieje tylko w Twojej pamięci RAM. Ten Blob jest rysowany na niewidocznym elemencie HTML5 Canvas.',
  },
  {
    type: 'paragraph',
    html: 'Ponieważ JPG nie obsługuje przezroczystości, nasz algorytm wypełnia tło jednolitym białym kolorem przed „namalowaniem” na nim obrazu PNG. Po skomponowaniu obrazu uruchamiamy natywną metodę eksportu, generując strumień bajtów, który Twój komputer pobiera bezpośrednio.',
  },
  {
    type: 'tip',
    title: 'Wskazówka SEO: Idealna waga',
    html: 'Google aktywnie karze wolne witryny internetowe. Jeśli Twój Largest Contentful Paint (LCP) jest wysoki z powodu nagłówka PNG o rozmiarze 2MB, konwersja na JPG o rozmiarze 200KB może natychmiast poprawić Twoje wskaźniki PageSpeed bez różnic wizualnych.',
  },
  {
    type: 'title',
    text: 'Bezpieczeństwo dla firm i profesjonalistów',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jeśli pracujesz w sektorach wrażliwych, takich jak bankowość, służba zdrowia czy prawo, przesyłanie plików do konwerterów online jest naruszeniem bezpieczeństwa. Nasze narzędzie działa jak „czarna skrzynka”: to, co dzieje się wewnątrz, pozostaje w Twojej pamięci RAM. To jedyny bezpieczny sposób pracy z poufnymi dokumentami.',
  },
  {
    type: 'title',
    text: 'Kompatybilność wyniku',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Przeglądarki w Windows, macOS i urządzeniach mobilnych.',
      'Media społecznościowe (Instagram, LinkedIn itp.).',
      'Narzędzia biurowe (Word, PowerPoint).',
      'Systemy zarządzania treścią (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: Optymalizuj jak profesjonalista',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ten konwerter to nie tylko kolejna strona; to dzieło inżynierii zaprojektowane, aby ułatwić Ci życie. Niezależnie od tego, czy jesteś programistą, czy użytkownikiem domowym, masz tutaj ostateczne rozwiązanie pozwalające zaoszczędzić megabajty i zachować bezpieczeństwo swoich danych.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'pl', faq, howTo }),
};
