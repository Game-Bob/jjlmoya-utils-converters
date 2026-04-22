import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'konwerter-webp-na-jpg';
const title = 'Konwertuj WebP na JPG Online i Za Darmo';
const description =
  'Konwertuj obrazy WebP na JPG bez przesyłania plików. 100% prywatne przetwarzanie lokalne. Przezroczyste tła są automatycznie zastępowane kolorem białym.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki WebP...',
  convertText: 'Aby błyskawicznie przekonwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące': 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Czy mogę bezpiecznie przesyłać prywatne obrazy?',
    answer:
      'Tak. Nie używamy serwera do przesyłania plików. Twoja przeglądarka przetwarza plik WebP bezpośrednio na Twoim komputerze i generuje plik JPG do pobrania. Nikt inny go nie widzi.',
  },
  {
    question: 'Co dzieje się z moją przezroczystością w formacie WebP?',
    answer:
      'Ponieważ format JPG nie obsługuje przezroczystości, konwerter automatycznie wypełni przezroczyste obszary jednolitym białym tłem.',
  },
  {
    question: 'Czy istnieje limit konwersji lub rozmiaru pliku?',
    answer:
      'Nie nakładamy żadnych ograniczeń. Możesz konwertować setki obrazów, o ile Twój komputer posiada wystarczającą moc obliczeniową i pamięć RAM.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij pliki',
    text: 'Upuść nowoczesne pliki WebP w obszarze przesyłania lub wybierz je za pomocą interaktywnej przeglądarki plików.',
  },
  {
    name: 'Konwersja lokalna',
    text: 'Obserwuj, jak lokalny silnik nakłada tło i interpretuje każdy piksel do uniwersalnego formatu JPG.',
  },
  {
    name: 'Odbierz wyniki',
    text: 'Pobieraj pojedynczo lub użyj pakietu ZIP, aby skonsolidować wszystkie nowe fotografie.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter WebP na JPG: Uniwersalna kompatybilność bez kompromisów w zakresie prywatności',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> to propozycja Google w zakresie wydajności: lżejsze obrazy o jakości porównywalnej z tradycyjnym JPG. Jednak jego kompatybilność pozostaje problemem w świecie rzeczywistym. Klienci poczty e-mail, tacy jak Outlook, starsze oprogramowanie do projektowania, aplikacje do przesyłania wiadomości i firmowe procesy pracy wciąż zależą od wszechobecnego formatu <strong>JPG</strong>. Konwersja WebP na JPG to pomost między nowoczesną siecią a światem rzeczywistym.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: Kiedy używać każdego z formatów?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP doskonale sprawdza się w kontrolowanych środowiskach: nowoczesnych stronach internetowych w przeglądarkach Chrome, Edge lub Firefox, gdzie można zagwarantować kompatybilność. Jego doskonała kompresja zmniejsza wagę plików o 25–35% w porównaniu z odpowiednikiem JPG, poprawiając czas ładowania i wskaźniki Core Web Vitals. Jest to idealny format, gdy kontrolujesz środowisko wyświetlania.',
  },
  {
    type: 'paragraph',
    html: 'JPG z drugiej strony działa w <em>absolutnie każdym kontekście</em>: załącznikach e-mail, prezentacjach PowerPoint, dokumentach Word, drukarkach domowych, starszych aplikacjach do edycji i platformach społecznościowych bez wyjątku. Jeśli potrzebujesz, aby ktoś otworzył Twój obraz bez żadnych problemów technicznych, JPG jest właściwą odpowiedzią.',
  },
  {
    type: 'title',
    text: 'Porównanie: Konwersja lokalna vs w chmurze',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Narzędzia, które przesyłają Twoje pliki na zdalny serwer.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Twoje zdjęcia podróżują przez internet na nieznane serwery',
          'Czas oczekiwania na przesłanie i zdalne przetwarzanie',
          'Codzienne limity rozmiaru plików i darmowych konwersji',
          'Realne ryzyko przechowywania danych na serwerach stron trzecich',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Przesłano zero bajtów: wszystko dzieje się w Twojej pamięci RAM',
          'Natychmiastowa szybkość bez zależności od połączenia internetowego',
          'Brak limitów rozmiaru plików ani liczby plików',
          'Idealne dla zdjęć osobistych, medycznych lub firmowych',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak to działa technicznie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Gdy przeciągniesz plik WebP do narzędzia, przeglądarka natywnie go dekoduje przy użyciu wewnętrznego silnika renderowania. Następnie obraz jest rysowany na niewidocznym elemencie <strong>HTML5 Canvas</strong>. Ponieważ format JPG nie obsługuje przezroczystości, algorytm wstępnie wypełnia płótno jednolitym białym tłem przed nałożeniem obrazu.',
  },
  {
    type: 'paragraph',
    html: 'Ostatnim krokiem jest eksport: metoda Canvas <code>toDataURL(\'image/jpeg\')</code> konwertuje piksele płótna na wysokiej jakości skompresowany strumień bajtów JPG. Strumień ten jest dostarczany bezpośrednio do systemu pobierania przeglądarki, bez jakiejkolwiek komunikacji sieciowej. Cały proces trwa milisekundy, nawet w przypadku obrazów o dużej liczbie megapikseli.',
  },
  {
    type: 'tip',
    title: 'Wskazówka dotycząca kompatybilności',
    html: 'Podczas udostępniania zdjęć nietechnicznym użytkownikom lub wysyłania ich pocztą e-mail, zawsze używaj formatu JPG — brak problemów z kompatybilnością w dowolnym kliencie pocztowym, systemie operacyjnym lub urządzeniu, bez wyjątków i przykrych niespodzianek.',
  },
  {
    type: 'title',
    text: 'Zastosowania i kompatybilność',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Doczepianie zdjęć w e-mailach z programów Outlook, Gmail lub Apple Mail.',
      'Wstawianie obrazów w dokumentach Word, Excel lub prezentacjach PowerPoint.',
      'Publikowanie na platformach społecznościowych, które odrzucają format WebP.',
      'Udostępnianie przez WhatsApp lub komunikatory z ograniczoną obsługą formatów.',
      'Drukowanie zdjęć w serwisach fotograficznych, które akceptują tylko JPG lub PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP to przyszłość obrazów internetowych, ale JPG pozostaje królem uniwersalnej kompatybilności. To narzędzie pozwala pokonać ten pomost w kilka sekund, całkowicie prywatnie i bez instalowania czegokolwiek. Twój obraz nigdy nie opuszcza Twojego urządzenia.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
