import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'konwerter-webp-na-png';
const title = 'Konwertuj WebP na PNG Online i Za Darmo';
const description =
  'Konwertuj obrazy WebP na PNG w przeglądarce. Zachowuje przezroczystość. Brak przesyłania plików na serwery. Darmowe i w 100% prywatne.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki WebP...',
  convertText: 'Aby błyskawicznie przekonwertować je na PNG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Dlaczego muszę konwertować pliki WebP na PNG?',
    answer:
      'Mimo że są lżejsze, pliki WebP mogą powodować niekompatybilność w programach do edycji, takich jak starsze wersje Photoshop. Format PNG zapewnia 100% uniwersalną kompatybilność.',
  },
  {
    question: 'Czy przezroczystość zostanie utracona podczas konwersji z WebP na PNG?',
    answer:
      'Zdecydowanie nie. W przeciwieństwie do konwersji na JPG, format PNG obsługuje kanał alfa. Nasze narzędzie zachowa każdy przezroczysty obszar z oryginalnego pliku.',
  },
  {
    question: 'Czy mogę bezpiecznie przesyłać poufne pliki firmowe?',
    answer:
      'Możesz i powinieneś. Ponieważ wszystko działa lokalnie za pośrednictwem JavaScript, obrazy Twojej firmy nigdy nie opuszczą Twojego komputera ani nie będą przechowywane na zewnętrznych serwerach.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij pliki WebP',
    text: 'Przenieś i upuść pliki WebP na panel główny lub wybierz obrazy w tradycyjny sposób.',
  },
  {
    name: 'Konwersja wysokiej wierności',
    text: 'Twoja przeglądarka przerysuje obraz piksel po pikselu i wygeneruje dokładną kopię w formacie PNG, zachowując oryginalną gamę kolorów.',
  },
  {
    name: 'Pobieranie pojedyncze lub zbiorcze',
    text: 'Zapisz każdy plik z osobna lub, jeśli przetworzyłeś partię, kliknij przycisk ZIP, aby pobrać je wszystkie spakowane razem.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter WebP na PNG: Profesjonalny wybór do edycji i projektowania',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Gdy projektant pobiera zasób graficzny w formacie <strong>WebP</strong> i próbuje otworzyć go w programie Photoshop, Figma lub Illustrator, wynik może być frustrujący: plik nie ładuje się lub traci na jakości. Format <strong>PNG</strong> jest niekwestionowanym standardem profesjonalnej edycji: bezstratna kompresja, pełny kanał alfa i gwarantowana kompatybilność w całym łańcuchu produkcji kreatywnej.',
  },
  {
    type: 'title',
    text: 'WebP do sieci, PNG do studia',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP to format do produkcji internetowej: jego algorytmy kompresji są zoptymalizowane pod kątem zmniejszenia wagi transferu, a nie zachowania maksymalnej wierności podczas iteracyjnych przepływów pracy związanych z edycją. Za każdym razem, gdy zapisujesz edytowany plik WebP, kodek ponownie stosuje kompresję. W przypadku projektów, w których plik będzie modyfikowany wiele razy, oznacza to skumulowaną utratę jakości.',
  },
  {
    type: 'paragraph',
    html: 'PNG wykorzystuje <strong>bezstratną kompresję</strong>: dane każdego piksela są zachowywane w całości bez względu na to, ile razy zapisujesz plik. Jest to format wybierany przez projektantów UI/UX, ilustratorów cyfrowych i zespoły brandingowe, które muszą zachować spójność wizualną podczas dziesiątek poprawek. Narzędzia takie jak Photoshop, Figma, Sketch i Illustrator traktują PNG jako swój podstawowy format eksportu.',
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
          'Twoje zasoby projektowe są przechowywane na serwerach osób trzecich',
          'Powolne przetwarzanie zdalne dużych plików',
          'Ryzyko wycieku poufnych projektów klientów',
          'Konwersja wsadowa ograniczona lub płatna',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Twoje projekty nigdy nie opuszczają Twojej maszyny',
          'Błyskawiczna konwersja wsadowa dziesiątek plików',
          'Pełne zachowanie kanału alfa i gamy kolorów',
          'Absolutna prywatność dla projektów klientów',
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
    html: 'Nowoczesne przeglądarki potrafią dekodować format WebP natywnie. Nasze narzędzie wykorzystuje tę możliwość do załadowania pliku do elementu JavaScript <strong>Image</strong>, a następnie rysuje go na płótnie HTML5 o tych samych wymiarach co oryginał. W przeciwieństwie do konwersji na JPG, tutaj nie jest potrzebne wypełnianie tła: płótno zachowuje pełny kanał alfa.',
  },
  {
    type: 'paragraph',
    html: 'Ostateczny eksport wykorzystuje metodę <code>toDataURL(\'image/png\')</code>, która generuje bezstratny plik PNG wierny oryginałowi. Rezultatem jest plik gotowy do bezpośredniego importu do dowolnego profesjonalnego oprogramowania do projektowania bez etapów pośrednich, degradacji kolorów czy utraty przezroczystości.',
  },
  {
    type: 'tip',
    title: 'Wskazówka dla edytorów',
    html: 'Używaj formatu PNG, gdy chcesz kontynuować edycję obrazu. Bezstratna kompresja gwarantuje brak utraty jakości przy wielokrotnym zapisie - co jest kluczowe podczas pracy z warstwami, maskami lub korekcją kolorów w programie Photoshop lub Figma.',
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
      'Importowanie zasobów WebP do programów Photoshop, Figma, Sketch lub Illustrator.',
      'Zachowanie przezroczystości w logo i ikonach do użytku na wielu tłach.',
      'Tworzenie kopii wzorcowych grafik na potrzeby długotrwałych projektów.',
      'Eksportowanie zasobów dla aplikacji mobilnych wymagających formatu PNG z kanałem alfa.',
      'Używanie obrazów w makietach projektowych i prezentacjach ze zmiennym tłem.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Jeśli WebP jest formatem serwera WWW, to PNG jest formatem studia projektowego. To narzędzie konwertuje Twoje zasoby WebP na gotowe do produkcji pliki PNG, z nienaruszoną przezroczystością i maksymalną jakością - wszystko w Twojej przeglądarce i bez opuszczania maszyny przez Twoje pliki.',
  },
];


export const content: WebpAPngLocaleContent = {
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
