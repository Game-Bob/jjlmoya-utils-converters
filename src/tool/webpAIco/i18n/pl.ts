import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'konwerter-webp-na-ico';
const title = 'Konwertuj WebP na ICO';
const description =
  'Konwertuj obrazy WebP na oficjalny format ICO z zachowaniem przezroczystości. Bez przesyłania plików. Prawdziwe nagłówki binarne Microsoft. Za darmo i prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki WebP...',
  convertText: 'Aby błyskawicznie przekonwertować je na ICO',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Czy mogę przekonwertować projekty naklejek WebP na oficjalny format Favicon ICO dla stron WWW?',
    answer:
      'Dokładnie. Favicon wciąż wymaga klasycznego rozszerzenia Microsoft ICO dla zachowania ekstremalnej uniwersalnej kompatybilności. To narzędzie wstrzyknie nagłówki binarne, tworząc w 100% legalną ikonę.',
  },
  {
    question: 'Czy muszę czekać w kolejkach online podczas tworzenia ogromnej partii ikon firmowych?',
    answer:
      'Wcale nie. Nasz konwerter ładuje skrypt JavaScript i odcina wszelką sieć przesyłania. Procesor Twojego urządzenia przetwarza asynchronicznie sto lub więcej zdjęć.',
  },
  {
    question: 'Czy wynikowy plik ICO będzie obsługiwał przezroczystość mojego oryginalnego obrazu WebP?',
    answer:
      'Tak. Nasz silnik pracuje wewnętrznie z API HTML5 canvas z pełnym wsparciem 32-bitowym, każdy przezroczysty element zostanie czysto przeniesiony do pliku ikonograficznego.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij wszystkie swoje lokalne naklejki WebP',
    text: 'Przesyłaj duże partie zdjęć bez obawy o nasycenie limitów sieciowych.',
  },
  {
    name: 'Logiczne asynchroniczne tłumaczenie i bezpośredni montaż',
    text: 'Szybko zauważysz, jak pasek i elementy uzupełniają się automatycznie, podczas gdy pamięć przetwarza blok bajt po bajcie z klatki.',
  },
  {
    name: 'Zabierz swój pakiet do tworzenia systemów i stron WWW',
    text: 'Kliknij swobodnie ogromny przycisk pobierania wspólnego pliku lub pobieraj ręcznie, jeśli potrzebujesz tylko jednego.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter WebP na ICO: Twórz Idealne Favikony ze swoich Nowoczesnych Zasobów',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Nowoczesne procesy projektowania stron internetowych generują zasoby v formacie <strong>WebP</strong>: zoptymalizowane logo, ikony interfejsu i elementy marki. Ale kiedy przychodzi czas na skonfigurowanie <strong>favikony</strong> strony lub ikon dla aplikacji desktopowej Windows, wymaganym formatem jest wciąż <strong>ICO</strong>. Konwersja WebP na ICO pozwala na ponowne wykorzystanie zasobów najwyższej jakości bez utraty oryginalnego źródła.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Formaty o Różnych Przeznaczeniach',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP to format obrazu ogólnego przeznaczenia, doskonały do fotografii, ilustracji i ikon interfejsu WWW. Jego wydajna kompresja sprawia, że idealnie nadaje się do przyspieszania ładowania stron. Brakuje mu jednak specyficznej struktury binarnej, której systemy operacyjne i przeglądarki wymagają do rozpoznawania i wyświetlania ikony aplikacji lub favikony.',
  },
  {
    type: 'paragraph',
    html: 'ICO to format kontenera Microsoft zaprojektowany specjalnie dla ikon. Może przechowywać wiele rozdzielczości w jednym pliku i obsługuje pełną przezroczystość za pośrednictwem 32-bitowego kanału alfa. Przeglądarki szukają pliku <code>favicon.ico</code> z natury rzeczy, a ten format zapewnia, że Twoja ikona wygląda ostro zarówno na standardowych ekranach, jak i wyświetlaczach Retina i 4K.',
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
          'Twoje logo firmowe trafia na serwery stron trzecich',
          'Połączenie internetowe wymagane do każdej konwersji',
          'Zmienna jakość wyjściowa w zależności od serwera',
          'Limity liczby codziennych konwersji',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Twoje logo nigdy nie opuszcza przeglądarki',
          'Nagłówki binarne ICO generowane zgodnie ze standardem Microsoft',
          '32-bitowa przezroczystość zachowana w całości',
          'Wsadowa konwersja kompletnych zestawów ikon',
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
    html: 'Przeglądarka natywnie dekoduje plik WebP i rysuje go na <strong>HTML5 Canvas</strong> o 32-bitowej głębi kolorów, zachowując oryginalny kanał alfa. Nasz silnik JavaScript wyodrębnia następnie dane pikseli za pomocą metody <code>getImageData()</code> i buduje binarną strukturę ICO z nagłówkami ICONDIR i ICONDIRENTRY określonymi przez standard Microsoft.',
  },
  {
    type: 'paragraph',
    html: 'Wynikiem jest legalny plik ICO, a nie prosta zmiana nazwy pliku. Dane pikseli są spakowane w poprawnej strukturze, której systemy Windows, macOS i wszystkie nowoczesne przeglądarki oczekują podczas ładowania favikony lub ikony aplikacji.',
  },
  {
    type: 'tip',
    title: 'Wskazówka dotycząca ostrych favikon',
    html: 'Zawsze generuj plik ICO z pliku źródłowego o najwyższej dostępnej rozdzielczości. WebP o wymiarach 512×512 lub większych pozwoli uzyskać idealnie ostrą favikonę na wyświetlaczach Retina i 4K, gdzie ikony o niskiej rozdzielce wyglądają na rozmyte.',
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
      'Tworzenie pliku favicon.ico dla dowolnej strony internetowej lub aplikacji WWW.',
      'Generowanie ikon aplikacji dla instalatorów oprogramowania Windows.',
      'Produkcja ikon pulpitu dla aplikacji Electron lub podobnych frameworków.',
      'Tworzenie zestawów ikon dla rozszerzeń przeglądarek Chrome i Firefox.',
      'Konwersja logo marki WebP na ikony dla aplikacji korporacyjnych.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Twój nowoczesny proces projektowania generuje WebP; ekosystem aplikacji wciąż wymaga formatu ICO. To narzędzie wypełnia tę lukę w kilka sekund, generując ikony z poprawną strukturą binarną i nienaruszoną przezroczystością, bez opuszczania przeglądarki przez zasoby Twojej marki.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'pl',
    faq,
    howTo,
  }),
};
