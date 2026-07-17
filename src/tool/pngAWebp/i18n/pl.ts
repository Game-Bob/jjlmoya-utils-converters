import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'konwerter-png-na-webp';
const title = 'Konwertuj PNG na WebP Online i Za Darmo';
const description =
  'Konwertuj obrazy PNG na WebP w swojej przeglądarce. Do 40% mniejszy rozmiar pliku. Zachowuje przezroczystość. Bez przesyłania plików. Za darmo i prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki PNG...',
  convertText: 'Aby błyskawicznie przekonwertować je na WebP',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować PNG na WebP?',
    answer:
      'WebP oferuje do 40% lepszą kompresję niż PNG przy tej samej jakości, jednocześnie obsługując przezroczystość alfa. Jest to format zalecany przez Google PageSpeed Insights.',
  },
  {
    question: 'Czy podczas procesu tracona jest przezroczystość?',
    answer:
      'Nie. Techniczna implementacja WebP obsługuje kanał alfa. Przezroczystość oryginalnego pliku PNG zostanie zachowana w nowym pliku WebP.',
  },
  {
    question: 'Czy moje obrazy trafiają na jakikolwiek serwer?',
    answer:
      'Nie. Kod działa wyłącznie w Twojej przeglądarce (po stronie klienta). Nigdy nie widzimy, nie rejestrujemy ani nie zapisujemy obrazów, które konwertujesz.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Wstaw swoje pliki PNG',
    text: 'Upuść duże pliki PNG w obszarze przesyłania lub użyj tradycyjnego interaktywnego selektora.',
  },
  {
    name: 'Wykrywanie kanałów',
    text: 'Lokalny silnik renderujący wykryje i wyeksportuje kompozycję pikseli do zoptymalizowanego formatu WebP.',
  },
  {
    name: 'Bezpośrednie pobieranie',
    text: 'Pobierz swoje wysoko skompresowane pliki WebP pojedynczo lub spakuj je razem za pomocą konwertera ZIP.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter PNG na WebP: Przezroczystość i nowoczesna kompresja dla sieci',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> od dziesięcioleci był formatem referencyjnym dla obrazów internetowych z przezroczystością - logo, ikon, elementów interfejsu użytkownika, zdjęć produktów na wyciętych tłach. Problemem jest rozmiar pliku: kompresja bezstratna, która gwarantuje jakość, generuje również zauważalnie duże pliki. <strong>WebP</strong> od Google rozwiązuje tę sprzeczność: obsługuje kanał alfa (przezroczystość) <em>i</em> kompresuje znacznie lepiej niż PNG, co sprawia, że przejście z PNG na WebP na Twojej stronie internetowej jest idealną optymalizacją, która nie wymaga żadnych poświęceń.',
  },
  {
    type: 'title',
    text: 'PNG czy WebP? Kiedy używać każdego formatu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> pozostaje właściwym formatem, gdy kluczowa jest kompatybilność: narzędzia do projektowania, takie jak Photoshop czy Figma, procesy drukowania, starsze aplikacje desktopowe lub dowolny kontekst, w którym obsługa WebP nie jest gwarantowana. Jest to również idealny format do zapisywania warstw roboczych w procesach edycji, ponieważ kompresja bezstratna zachowuje każdy piksel. Koszt: pliki, które mogą ważyć 3-8 razy więcej niż ich odpowiednik w WebP.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> jest naturalnym następcą PNG dla wszystkich nowoczesnych treści internetowych. Chrome, Firefox, Safari i Edge obsługują go natywnie. Obraz WebP bezstratny jest o 26% mniejszy niż odpowiedni plik PNG; w trybie stratnym może być do 40% mniejszy przy praktycznie nieodróżnialnej jakości wizualnej. Co kluczowe dla projektowania stron internetowych: <strong>WebP zachowuje przezroczystość alfa</strong> dokładnie tak jak PNG, bez wizualnych kompromisów.',
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
        description: 'Narzędzia, które przesyłają pliki na zdalny serwer.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Opóźnienia sieciowe podczas przesyłania i pobierania',
          'Twoje logo i obrazy przechowywane na serwerach osób trzecich',
          'Limity rozmiaru plików i dzienne limity konwersji',
          'Intruzywne reklamy i skrypty śledzące osób trzecich',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Błyskawiczna prędkość - zero opóźnień sieciowych',
          'Pełna prywatność - 0 bajtów wysłanych na zewnątrz',
          'Brak limitów MB lub ograniczeń liczby plików',
          'Czysty interfejs, bez reklam i śledzenia',
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
    html: 'Plik PNG jest ładowany lokalnie i dekodowany do <strong>HTML5 Canvas</strong> w pamięci. Interfejs API Canvas zachowuje kanał alfa z oryginalnego pliku PNG - wszystkie przezroczyste i półprzezroczyste piksele zostają zachowane w nienaruszonym stanie w buforze pikseli RGBA. Następnie płótno jest eksportowane przez wywołanie <code>toDataURL(\'image/webp\')</code>, co powoduje zastosowanie kodeka WebP przeglądarki (opartego na libwebp firmy Google) w celu wygenerowania bardziej zwartego pliku bez zmiany danych o przezroczystości.',
  },
  {
    type: 'paragraph',
    html: 'WebP wykorzystuje dwa tryby kompresji: tryb bezstratny dla obrazów, w których każdy piksel musi być dokładnie wierny oryginałowi, oraz tryb stratny dla zdjęć i elementów, w których małe różnice są niezauważalne. Tryb bezstratny generuje pliki o 26% mniejsze niż PNG; tryb stratny pozwala uzyskać oszczędności do 40% w porównaniu z PNG przy zachowaniu doskonałej jakości wizualnej.',
  },
  {
    type: 'tip',
    title: 'Wskazówka: WebP pokonuje zarówno PNG, jak i JPG w internecie',
    html: 'WebP w trybie bezstratnym jest mniejszy niż PNG. WebP w trybie stratnym jest mniejszy niż JPG. Dzięki temu WebP jest <strong>jedynym formatem, który zastępuje oba</strong> w kontekście internetowym. Konwertuj swoje przezroczyste pliki PNG na WebP przed przesłaniem: Google PageSpeed Insights wykrywa to i ocenia pozytywnie w audytach "Serwuj obrazy w nowoczesnych formatach".',
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
      'Logo i ikony z przezroczystym tłem dla stron internetowych i aplikacji.',
      'Zdjęcia produktów na wyciętych tłach w sklepach e-commerce.',
      'Sprite\'y CSS i elementy interfejsu z przezroczystością alfa.',
      'Ilustracje rastrowe i grafika wektorowa dla stron docelowych.',
      'Miniatury artykułów z przezroczystym tłem na blogach i portalach informacyjnych.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Przejście z PNG na WebP to najbardziej kompletna optymalizacja obrazów internetowych: otrzymujesz lżejsze pliki, zachowujesz przezroczystość i poprawiasz wskaźniki Core Web Vitals bez żadnych zmian w projekcie wizualnym. To narzędzie robi to natychmiastowo, za darmo i całkowicie prywatnie - Twoje zdjęcia są przetwarzane w przeglądarce i nigdy nie trafiają na żaden zewnętrzny serwer.',
  },
];


export const content: PngAWebpLocaleContent = {
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
