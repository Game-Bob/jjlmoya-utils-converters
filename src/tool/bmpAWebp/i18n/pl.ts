import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'konwerter-bmp-na-webp';
const title = 'Darmowa Konwersja BMP na WebP';
const description =
  'Konwertuj obrazy BMP na WebP offline. Zmniejsz ogromne pliki do kilobajtów. Bez przesyłania plików. Darmowy, offline i całkowicie prywatny.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki BMP...',
  convertText: 'Aby błyskawicznie konwertować je na WebP',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Dlaczego moje pliki BMP zajmują 10 razy więcej miejsca i co zyskam, mając je w formacie WebP?',
    answer:
      'Format BMP przechowuje mapy pikseli bez kompresji. WebP wykorzystuje kompresję matematyczną, aby zmniejszyć ogromne pliki BMP do mniej niż jednego megabajta, zachowując przy tym wysoką jakość obrazu.',
  },
  {
    question: 'Czy muszę rejestrować konto?',
    answer:
      'Nie wymagamy podawania adresu e-mail, a Twoje materiały pozostaną odizolowane, ponieważ przetwarzanie odbywa się za pomocą skryptu JavaScript w przeglądarce zainstalowanej na Twoim komputerze, bez wysyłania plików na serwer.',
  },
  {
    question: 'Czy mogę przeciągnąć wiele plików jednocześnie?',
    answer:
      'Tak, możesz przeciągnąć 50 lub 100 plików, o ile Twój sprzęt poradzi sobie z przetwarzaniem ich wszystkich bez tworzenia kolejek.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Zidentyfikuj pliki surowe',
    text: 'Umieść swoje kolekcje map bitowych w oknach gotowych do przeniesienia.',
  },
  {
    name: 'Natywna aktywacja wsadowa',
    text: 'Przemieść lub przeciągnij wszystkie pliki na nasz cyfrowy stół.',
  },
  {
    name: 'Ewakuacja wsadowa WebP',
    text: 'Kliknij wyniki, a otrzymasz osobno obrazy o mikrowadze lub jako natychmiastowe paczki ZIP.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter BMP na WebP: Najbardziej ekstremalna redukcja rozmiaru, jaka jest możliwa',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Konwersja BMP na WebP to bez wątpienia najbardziej spektakularna transformacja, jaką możesz przeprowadzić z obrazem. Format BMP (Bitmap) to jeden z najstarszych i najcięższych formatów w cyfrowym ekosystemie: przechowuje każdy piksel bez żadnego rodzaju kompresji, co skutkuje plikami, które mogą ważyć 20, 50, a nawet 100 razy więcej niż ich nowoczesny odpowiednik. WebP, opracowany przez Google, stosuje algorytmy kompresji najnowszej generacji, które redukują rozmiar do absolutnego minimum, zachowując przy tym doskonałą jakość wizualną.',
  },
  {
    type: 'title',
    text: 'Dlaczego BMP jest tak ciężki, a WebP tak wydajny?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format BMP powstał w latach 80. dla systemu Windows, kiedy miejsce na dysku było ogromne, a kompresja nie była priorytetem. Każdy piksel jest zapisywany w postaci surowej, bez żadnego algorytmu redukcji: obraz o rozmiarze 1920x1080 pikseli w formacie BMP zajmuje dokładnie 5,93 MB, niezależnie od jego treści. Dzięki temu idealnie nadaje się do wewnętrznych zrzutów ekranu lub edycji bezstratnej, ale jest całkowicie nieodpowiedni do internetu lub nowoczesnego przechowywania.',
  },
  {
    type: 'paragraph',
    html: 'WebP wykorzystuje kompresję predykcyjną opartą na blokach i transformatach DCT (ta sama technologia, która leży u podstaw wideo cyfrowego), sprawiając, że ten sam obraz 1920x1080 zajmuje od 80 KB do 300 KB. Oznacza to redukcję od 95 do 99% w stosunku do oryginalnego pliku BMP. Ponadto WebP obsługuje kanał alfa dla przezroczystości oraz kompresję zarówno stratną, jak i bezstratną, oferując pełną wszechstronność.',
  },
  {
    type: 'title',
    text: 'Porównanie: Konwertery w chmurze vs Nasza lokalna architektura',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Narzędzia przesyłające Twoje pliki BMP na zdalny serwer w celu ich przetworzenia.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Przesłanie pliku BMP o rozmiarze 20 MB trwa minuty przy wolnym połączeniu',
          'Twoje obrazy pozostają zapisane na cudzych serwerach',
          'Limity rozmiaru wykluczające duże pliki BMP',
          'Inwazyjne reklamy i trackery danych',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio w przeglądarce za pomocą technologii Vanilla JS i interfejsu Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Natychmiastowa konwersja bez transmisji sieciowej',
          'Absolutna prywatność - 0 bajtów opuszcza Twoje urządzenie',
          'Brak limitów rozmiaru na plik',
          'Działa bez połączenia z internetem',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak technicznie działa konwersja w przeglądarce',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Podczas przeciągania pliku BMP przeglądarka odczytuje go jako binarny obiekt Blob w pamięci RAM. Ten Blob jest ładowany do elementu <code>Image</code> języka JavaScript, który dekoduje go przy użyciu natywnego silnika obrazów. Następnie obraz jest rysowany na niewidocznym elemencie <code>Canvas</code> HTML5. Canvas działa jako wirtualne płótno, na którym obraz istnieje w swojej postaci piksel po pikselu.',
  },
  {
    type: 'paragraph',
    html: 'Po narysowaniu na Canvas wykonujemy metodę <code>toBlob()</code> z typem MIME <code>image/webp</code> i pożądanym poziomem jakości. Przeglądarka stosuje wewnętrznie algorytm kompresji WebP i generuje nowy obiekt Blob z wynikowym plikiem. Ten Blob przekształca się w adres URL do bezpośredniego pobierania, który przeglądarka zapisuje na dysku. W żadnym momencie nie jest nawiązywane połączenie sieciowe.',
  },
  {
    type: 'tip',
    title: 'Największy możliwy skok kompresji',
    html: 'Konwersja BMP na WebP może przynieść redukcję rozmiaru pliku o 99%. Plik BMP o rozmiarze 20 MB może stać się plikiem WebP o rozmiarze zaledwie 200 KB przy niemal identycznej jakości wizualnej. To najbardziej wydajna transformacja dostępna wśród standardowych formatów obrazów.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia i kompatybilność WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Publikowanie w internecie - Chrome, Firefox, Safari, Edge i wszystkie nowoczesne przeglądarki.',
      'Media społecznościowe - Instagram, Twitter, Facebook natywnie akceptują format WebP.',
      'Aplikacje internetowe i PWA - minimalne rozmiary dla natychmiastowego ładowania.',
      'Wydajne archiwizowanie - zastępuje kolekcje starych plików BMP, oszczędzając gigabajty.',
      'Marketing e-mailowy - lekkie obrazy, które ładują się szybko w każdym nowoczesnym kliencie pocztowym.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: najbardziej uderzająca konwersja za jednym kliknięciem',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jeśli posiadasz stare pliki BMP z systemu Windows, nieskompresowane zrzuty ekranu lub obrazy ze starych narzędzi, konwersja ich na format WebP to najbardziej uderzające działanie, jakie możesz podjąć, aby zoptymalizować miejsce na dysku i wydajność strony internetowej. Dzięki naszemu narzędziu konwersja jest natychmiastowa, prywatna i bez limitów - dokładnie tak, jak powinno być.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
