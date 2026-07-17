import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'konwerter-jpg-na-webp';
const title = 'Konwertuj JPG na WebP Online i Za Darmo';
const description =
  'Konwertuj obrazy JPG na WebP w swojej przeglądarce. Doskonała kompresja bez widocznej utraty jakości. Bez przesyłania plików. Za darmo, bez limitów i prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki JPG...',
  convertText: 'Aby błyskawicznie przekonwertować je na WebP',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować zdjęcia JPG na WebP?',
    answer:
      'WebP pozwala na znacznie lepszą kompresję tradycyjnych plików JPG bez dostrzegalnej przez ludzkie oko różnicy, co skutkuje szybszymi i nowocześniejszymi stronami internetowymi.',
  },
  {
    question: 'Czy muszę płacić za każdy obraz?',
    answer:
      'Nie, narzędzie jest darmowe, a wszystko jest przetwarzane bezpośrednio na Twoim komputerze. Jest ono nielimitowane zarówno do użytku domowego, jak i profesjonalnego.',
  },
  {
    question: 'Czy konwersja jest bezpieczna?',
    answer:
      'Tak, całkowicie. Całe przetwarzanie odbywa się w HTML5 Canvas Twojej lokalnej przeglądarki bez wysyłania jakichkolwiek danych na zewnętrzne serwery.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Wstaw swoje zdjęcia JPG',
    text: 'Upuść pliki JPG lub przeciągnij je bezpośrednio do górnego obszaru. Wykrywanie jest natychmiastowe.',
  },
  {
    name: 'Przetwarzanie na WebP',
    text: 'Lokalny silnik renderujący przekonwertuje każdy plik obrazu na ultra-zoptymalizowany WebP gotowy do publikacji w sieci.',
  },
  {
    name: 'Pobierz wyniki',
    text: 'Zapisz każdy plik WebP z osobna lub pobierz paczkę ZIP ze wszystkimi skonwertowanymi plikami.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter JPG na WebP: Przyspiesz swoją stronę dzięki nowoczesnemu formatowi Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>JPG</strong> przez dziesięciolecia dominował w fotografii cyfrowej - uniwersalnie kompatybilny i powszechnie obsługiwany. Jednak Google stworzyło <strong>WebP</strong>, aby pokonać JPG na jego własnym polu: ta sama jakość wizualna przy rozmiarze pliku mniejszym o 25-35%. Dla programistów i zespołów marketingowych walczących z powolnym ładowaniem stron, konwersja JPG na WebP to pojedyncza optymalizacja o najwyższym zwrocie, którą można zastosować bez ingerencji w projekt.',
  },
  {
    type: 'title',
    text: 'JPG czy WebP? Kiedy używać każdego formatu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> pozostaje właściwym wyborem, gdy potrzebujesz uniwersalnej kompatybilności: e-maile do klientów, dokumenty Word, starsze platformy społecznościowe lub systemy CMS, które nie akceptują jeszcze WebP. Jego trzydziestoletni ekosystem gwarantuje, że każdy ekran, drukarka czy przeglądarka otworzy go bez problemów. Główną wadą jest rozmiar - JPG w nagłówku o rozmiarze 1,5 MB może obniżyć wynik LCP Twojej strony i nie spełnić progów Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> to inteligentny wybór dla wszystkich treści na Twojej stronie. Chrome, Firefox, Safari i Edge obsługują go natywnie od lat. Zdjęcia produktów w e-commerce, banery na blogach, miniatury wideo i wszelkie zdjęcia publikowane online odnoszą bezpośrednie korzyści: lżejsze strony, lepsze wyniki Google PageSpeed Insights i płynniejsze wrażenia użytkownika - szczególnie na wolnych połączeniach mobilnych.',
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
          'Twoje zdjęcia są przechowywane na serwerach osób trzecich',
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
    html: 'Gdy przeciągasz plik JPG do narzędzia, przeglądarka tworzy <strong>obiekt Blob</strong>, który znajduje się tylko w Twojej pamięci RAM. Ten Blob jest dekodowany i rysowany na niewidocznym elemencie <strong>HTML5 Canvas</strong>. Ponieważ JPG nie ma kanału alfa, konwersja na WebP jest bezpośrednia: silnik eksportuje płótno, wywołując <code>toDataURL(\'image/webp\')</code>, generując strumień bajtów, który Twój system operacyjny natychmiast pobiera - bez udziału serwera.',
  },
  {
    type: 'paragraph',
    html: 'Algorytm kompresji WebP łączy techniki przewidywania bloków (podobne do tych w VP8, kodeku wideo Google) z transformacjami kolorów i kodowaniem arytmetycznym. Wynikiem jest plik, który zawiera te same informacje percepcyjne co oryginalny JPG, ale zapakowany znacznie wydajniej - co oznacza mniej przesłanych kilobajtów przy każdej wizycie na stronie.',
  },
  {
    type: 'tip',
    title: 'Wskazówka Core Web Vitals: LCP i waga obrazu',
    html: '<strong>Largest Contentful Paint (LCP)</strong> to wskaźnik Google, który mierzy, ile czasu zajmuje załadowanie największego elementu wizualnego na Twojej stronie. JPG w nagłówku o rozmiarze 1,5 MB może stać się plikiem WebP o rozmiarze zaledwie 900 KB - a nawet 600 KB - bez zauważalnej różnicy wizualnej. Ta <strong>oszczędność rzędu 25-35%</strong> może zmienić Twój wynik LCP z "Wymaga poprawy" na "Dobry" i podnieść Twoją pozycję w wynikach wyszukiwania.',
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
      'Zdjęcia produktów w sklepach WooCommerce lub Shopify: mniejsza waga, więcej konwersji.',
      'Fotografia na blogach i w artykułach: lepszy wynik PageSpeed bez potrzeby rebrandingu.',
      'Banery internetowe i kreacje reklamowe: lżejsze pliki przy zachowaniu tej samej ostrości.',
      'Galerie portfolio dla studiów architektonicznych, fotograficznych lub projektowych.',
      'Miniatury wideo na stronach streamingowych lub platformach kursów online.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja plików JPG na WebP to dziś jedna z najprostszych i najbardziej opłacalnych optymalizacji, jakie można zastosować na dowolnej stronie internetowej. Dzięki temu narzędziu zrobisz to w kilka sekund, za darmo i bez przesyłania swoich obrazów poza urządzenie. Mniej kilobajtów, lepszy LCP, szybsze strony - wszystko przy dokładnie tym samym wyglądzie, który już miałeś.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
