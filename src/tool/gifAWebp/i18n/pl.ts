import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'konwerter-gif-na-webp';
const title = 'Konwertuj GIF na statyczne WebP Online';
const description =
  'Konwertuj animowane pliki GIF na statyczne WebP. Zachowuje przezroczystość. Bez serwera. Przetwarzane lokalnie w przeglądarce. Za darmo.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki GIF...',
  convertText: 'Aby natychmiast przekonwertować je na WebP',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto zamrozić animowany plik do nowoczesnego statycznego formatu WebP?',
    answer:
      'WebP to standard kompresji od Google; jest niezwykle lekki i czysto zachowuje przezroczystość. Przejście z GIF na WebP eliminuje ciężką animację i zapewnia ogromny wzrost szybkości ładowania stron.',
  },
  {
    question: 'Czy oryginalny awatar pozostanie przezroczysty?',
    answer:
      'Tak, w przeciwieństwie do JPEG, kontener WebP respektuje złożony kanał alfa. Wszystkie sylwetki pozostaną idealne, tak jak w oryginale.',
  },
  {
    question: 'Gdzie przesyłane są pliki?',
    answer:
      'Pliki nie są nigdzie przesyłane. Przetwarzanie odbywa się w całości przez JavaScript przeglądarki na Twoim komputerze, bez wysyłania danych na serwer.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Uruchom animowaną lawinę',
    text: 'Przenieś i upuść dziesiątki memów do wyznaczonej strefy bez połączenia z serwerem.',
  },
  {
    name: 'Świadectwo wielkiej niewidzialnej zmiany',
    text: 'Obserwuj, jak wskaźnik postępu zmienia się co milisekundę, podczas gdy lokalny dekoder canvas generuje wynik.',
  },
  {
    name: 'Zapisz swój czysty arsenał wyników',
    text: 'Pobierz wyekstrahowane pliki pojedynczo lub naciśnij Pobierz Zip, aby spakować wszystko.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter GIF na WebP: Nowoczesny zamiennik dla ciężkich animacji',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Animowane pliki GIF to dinozaury współczesnego internetu: zużywają nieproporcjonalnie dużą szerokość pasma, pogarszają wynik PageSpeed każdej strony i odpowiadają za znaczny procent całkowitej wagi tysięcy witryn. Typowy animowany GIF o rozmiarze 5 MB może stać się animacją WebP o wadze poniżej 1 MB przy zachowaniu tej samej jakości wizualnej. WebP to nowoczesny następca, którego Google zaprojektowało specjalnie w celu zastąpienia formatu GIF w sieci.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: przepaść między przeszłością a teraźniejszością sieci',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF to format z 1987 roku, który pierwotnie nie był projektowany z myślą o animacjach - ta funkcja pojawiła się później jako rozwiązanie tymczasowe. Paleta 256 kolorów, niewydajna kompresja i brak obsługi dźwięku sprawiają, że jest to format przestarzały. WebP, opracowany przez Google w 2010 roku, oferuje doskonałą kompresję zarówno stratną, jak i bezstratną, natywną obsługę animacji oraz pełny kanał alfa.',
  },
  {
    type: 'paragraph',
    html: 'Dla web developera zastąpienie plików GIF formatem WebP na stronach może oznaczać poprawę wyniku Google PageSpeed o 10 do 30 punktów. Mniejsza waga strony oznacza lepsze wskaźniki Core Web Vitals, wyższe pozycje w SEO i niższe koszty transferu na serwerach. To nie tylko poprawa estetyczna - to decyzja dotycząca architektury technicznej.',
  },
  {
    type: 'title',
    text: 'Porównanie architektury: Lokalnie vs Chmura',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Platformy, które przetwarzają pliki GIF na zdalnych serwerach.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Twoje animacje przesyłane są przez internet na serwery osób trzecich',
          'Czas oczekiwania wynikający z opóźnień sieci przy wysyłaniu i pobieraniu',
          'Limity rozmiaru (duże pliki GIF są często odrzucane)',
          'Ryzyko przechowywania i analizy plików przez serwis',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Plik GIF nigdy nie opuszcza Twojego urządzenia',
          'Natychmiastowa konwersja bez oczekiwania na sieć',
          'Brak limitów rozmiaru: przetwarzaj pliki GIF o dowolnej wadze',
          'Pełna prywatność: 0 bajtów wysyłanych na zewnątrz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa lokalna konwersja GIF na WebP',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Lokalna konwersja wykorzystuje API HTML5 Canvas. Plik GIF jest ładowany jako natywny element Image przeglądarki. Poprzez narysowanie go na płótnie (canvas), silnik graficzny przechwytuje pierwszą klatkę animacji wraz ze wszystkimi informacjami o przezroczystości. Metoda <code>toDataURL(\'image/webp\')</code> eksportuje klatkę jako WebP bezpośrednio w pamięci RAM.',
  },
  {
    type: 'paragraph',
    html: 'WebP obsługuje pełny kanał alfa, więc przezroczystości GIF są zachowywane w wynikowym pliku WebP bez konieczności dodawania tła. Algorytmy kompresji WebP są znacznie wydajniejsze niż te w GIF czy PNG, co tłumaczy drastyczną redukcję rozmiaru pliku końcowego.',
  },
  {
    type: 'tip',
    title: 'Gwarantowana poprawa PageSpeed',
    html: 'Animowany GIF o rozmiarze 5 MB może stać się plikiem WebP o wadze poniżej 1 MB. Jeśli masz pliki GIF na swoich stronach, zastąpienie ich formatem WebP może natychmiast poprawić wskaźniki Largest Contentful Paint (LCP) i Total Blocking Time (TBT), co bezpośrednio wpływa na rankingi SEO.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia i kompatybilność wynikowego formatu WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Zastępowanie plików GIF na stronach internetowych w celu poprawy wyników PageSpeed.',
      'Zoptymalizowane awatary i naklejki dla Discorda, Slacka i nowoczesnych platform.',
      'Bannery i materiały wizualne do cyfrowych kampanii marketingowych.',
      'Animacje w progresywnych aplikacjach internetowych (PWA).',
      'Kompatybilność z Chrome, Edge, Firefox, Safari 14+ i wszystkimi nowoczesnymi przeglądarkami.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: przenieś swoje pliki GIF w XXI wiek',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Każdy GIF na Twojej stronie to niewykorzystana okazja do optymalizacji. Nasze narzędzie konwertuje pliki GIF na WebP natychmiast, prywatnie i bez limitów, bezpośrednio w przeglądarce. Wynik: pliki do 5 razy mniejsze, idealna przezroczystość i kompatybilność ze wszystkimi nowoczesnymi przeglądarkami.',
  },
];


export const content: GifAWebpLocaleContent = {
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
