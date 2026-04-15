import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'konwerter-bmp-na-jpg';
const title = 'Konwertuj BMP na JPG Online';
const description =
  'Konwertuj obrazy BMP na JPG w swojej przeglądarce. Drastycznie zmniejsz rozmiar plików. Bez przesyłania plików na serwery. Darmowy i w 100% prywatny.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki BMP...',
  convertText: 'Aby błyskawicznie konwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować BMP na JPG?',
    answer:
      'Format BMP nie kompresuje danych, co skutkuje ekstremalnie dużymi plikami. Format JPG drastycznie kompresuje obraz, zachowując przy tym doskonałą jakość wizualną dla sieci i dystrybucji.',
  },
  {
    question: 'Czy konwersja moich obrazów tutaj jest bezpieczna?',
    answer:
      'W 100% bezpieczna. Twoja prywatność jest gwarantowana, ponieważ przetwarzanie odbywa się w całości lokalnie, przy użyciu silnika Twojej własnej przeglądarki internetowej.',
  },
  {
    question: 'Jak działa to narzędzie?',
    answer:
      'Po prostu przeciągnij pliki BMP, a nasz skrypt JavaScript odczyta piksele, aby ponownie narysować je na płótnie HTML i natychmiast wyeksportować w kodowaniu JPEG.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Prześlij pliki BMP',
    text: 'Przeciągnij i upuść lub wybierz obrazy w formacie BMP w wyznaczonym obszarze.',
  },
  {
    name: 'Automatyczne przetwarzanie',
    text: 'Narzędzie rasteryzuje obraz i w ciągu milisekund stosuje optymalny poziom kompresji w formacie JPG.',
  },
  {
    name: 'Pobieranie pojedyncze lub zbiorcze',
    text: 'Pobieraj nowe, zoptymalizowane pod kątem sieci obrazy pojedynczo lub jako plik ZIP.',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format Specification',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter BMP na JPG: Zmniejsz gigantyczny plik w kilka sekund',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP (Bitmap) to najbardziej prymitywny format w informatyce: przechowuje każdy piksel w postaci niezmienionej, bez żadnej kompresji. Zrzut ekranu o rozdzielczości 1920x1080 w formacie BMP waży około 6 MB. Ten sam obraz w formacie JPG zajmuje od 200 do 400 KB przy wizualnie nieodróżnialnej jakości. Różnica jest kolosalna, a nasze narzędzie pozwala na wykonanie tej konwersji w kilka sekund, bezpośrednio w przeglądarce, bez przesyłania czegokolwiek na serwer.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: surowe dane kontra inteligentna kompresja',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format BMP został stworzony przez firmę Microsoft w erze systemu Windows 3.1. Jego filozofia jest tak prosta, jak to tylko możliwe: każdy piksel zajmuje 3 bajty (czerwony, zielony, niebieski), a piksele są przechowywane w rzędach bez żadnego dodatkowego przetwarzania. Ten całkowity brak kompresji sprawia, że pliki BMP są od 50 do 100 razy większe niż ich odpowiedniki w formacie JPG w przypadku rzeczywistych zdjęć i zrzutów ekranu.',
  },
  {
    type: 'paragraph',
    html: 'Z kolei JPG wykorzystuje dyskretną transformatę kosinusową (DCT) do analizy każdego bloku 8x8 pikseli i wyeliminowania informacji o wysokiej częstotliwości, których ludzkie oko prawie nie dostrzega. Rezultatem jest obraz, który wygląda identycznie, ale waży ułamek oryginału. W przypadku plików BMP pochodzących ze zrzutów ekranu, skanerów lub starszych aplikacji systemu Windows, konwersja na JPG jest najskuteczniejszym możliwym działaniem optymalizacyjnym.',
  },
  {
    type: 'title',
    text: 'Porównanie architektury: lokalna kontra chmurowa',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Usługi przesyłające pliki BMP na zdalne serwery w celu ich przetworzenia.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Przesłanie pliku BMP o rozmiarze 10 MB zajmuje dużo czasu przy wolnych połączeniach',
          'Twoje poufne zrzuty ekranu i obrazy wędrują po internecie',
          'Częste limity rozmiaru w darmowych planach',
          'Podwójne opóźnienie: przesyłanie i pobieranie przekonwertowanego pliku',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio na Twoim sprzęcie za pomocą technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Plik BMP jest przetwarzany w Twojej pamięci RAM i nie wędruje na serwer',
          'Natychmiastowa konwersja bez czekania',
          'Brak limitów rozmiaru na plik',
          'Całkowita prywatność: 0 bajtów wysłanych na zewnątrz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa techniczna konwersja z BMP na JPG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Po przeciągnięciu pliku BMP do narzędzia przeglądarka odczytuje go za pomocą interfejsu API <code>FileReader</code> i dekoduje jako obiekt Blob w pamięci. Ten Blob jest renderowany na niewidocznym płótnie HTML5. Następnie metoda <code>toDataURL(\'image/jpeg\')</code> stosuje algorytm kompresji JPEG na danych z płótna i generuje wynikowy plik JPG.',
  },
  {
    type: 'paragraph',
    html: 'Ponieważ format BMP nie posiada kanału alfa (nie obsługuje przezroczystości), konwersja na JPG jest bezpośrednia, bez konieczności składania z białym tłem. Cały proces odbywa się w pamięci RAM komputera, bez przesyłania danych przez sieć, w ciągu milisekund, nawet w przypadku plików o rozmiarze kilku megabajtów.',
  },
  {
    type: 'tip',
    title: 'Pliki BMP z Windows mogą być ogromne',
    html: 'Pliki BMP generowane przez zrzuty ekranu (klawisz Print Screen w systemie Windows) lub przez starsze aplikacje, takie jak Paint, mogą ważyć od 50 do 100 razy więcej niż ich odpowiedniki w formacie JPG. Pojedynczy plik BMP o rozdzielczości Full HD może przekraczać 6 MB. Konwertowanie ich na JPG przed wysłaniem e-mailem lub przesłaniem na dowolną platformę to niezbędna praktyka.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia i kompatybilność wynikowego pliku JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optymalizacja zrzutów ekranu systemu Windows do wysyłki e-mailem.',
      'Konwersja obrazów wyeksportowanych przez starsze oprogramowanie (CAD, stare skanery).',
      'Zmniejszanie wagi obrazów przesyłanych na platformy internetowe i portale społecznościowe.',
      'Przygotowanie plików do wstawienia do dokumentów Word, PowerPoint lub PDF.',
      'Uniwersalna kompatybilność ze wszystkimi nowoczesnymi przeglądarkami i systemami.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: 10 MB BMP, 500 KB JPG, ten sam obraz',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja z BMP na JPG to jedno z najbardziej opłacalnych ćwiczeń optymalizacyjnych w zarządzaniu plikami graficными. Nasze narzędzie wykonuje tę transformację w kilka sekund, bez przesyłania plików i bez zakładania konta, bezpośrednio w przeglądarce. Wynikiem jest wysokiej jakości plik JPG, uniwersalnie kompatybilny i o wadze do 97% mniejszej niż oryginalny plik BMP.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
