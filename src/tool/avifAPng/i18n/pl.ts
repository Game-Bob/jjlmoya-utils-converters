import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'konwerter-avif-na-png';
const title = 'Konwertuj AVIF na PNG Online';
const description =
  'Konwertuj obrazy AVIF na PNG z zachowaniem przezroczystości. Bez przesyłania plików. Przetwarzanie lokalne w Twojej przeglądarce. Darmowe i nielimitowane.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki AVIF...',
  convertText: 'Aby błyskawicznie konwertować je na PNG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować AVIF na PNG?',
    answer:
      'Format AVIF świetnie nadaje się do kompresji, ale jego kompatybilność jest ograniczona w starszych przeglądarkach i klasycznych edytorach. Konwertując AVIF na PNG, masz pewność, że plik zachowa oryginalną przezroczystość i będzie mógł zostać otwarty przez wszystkie aplikacje.',
  },
  {
    question: 'Czy przezroczystości z oryginalnego pliku AVIF zostaną zachowane?',
    answer:
      'Tak. W przeciwieństwie do formatu JPG, który usuwa przezroczyste tło, nasz konwerter eksportując do PNG zachowuje kanał alfa w nienaruszonym stanie.',
  },
  {
    question: 'Czy to prawda, że moje obrazy nie są przesyłane do Internetu?',
    answer:
      'Jak najbardziej. Nasz konwerter działa w 100% lokalnie na Twoim urządzeniu, korzystając z wewnętrznego silnika JavaScript.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Dodaj pliki AVIF',
    text: 'Możesz przeciągnąć je bezpośrednio do wyznaczonego obszaru lub użyć przycisku do przeglądania folderów na Twoim komputerze.',
  },
  {
    name: 'Natychmiastowe przetwarzanie',
    text: 'Pozwól procesorowi HTML5 wyrenderować obraz; format zmieni się na PNG automatycznie w ciągu mikrosekund.',
  },
  {
    name: 'Pobierz swoje pliki PNG',
    text: 'Pobieraj przekonwertowane obrazy jeden po jednym lub pobierz cały pakiet za pomocą przycisku ZIP.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: Format AVIF',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Specyfikacja formatu Portable Network Graphics (PNG)',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter AVIF na PNG: Od Dystrybucji Internetowej po Profesjonalną Edycję',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF to format idealny do dostarczania obrazów w sieci — małe pliki, wysoka jakość. Kiedy jednak przychodzi czas na edycję, retusz lub pracę z tymi obrazami w narzędziach projektowych, AVIF staje się przeszkodą. Figma, Photoshop, Illustrator, Sketch i praktycznie każde profesjonalne narzędzie do projektowania oczekują przesyłania plików PNG do pracy z przezroczystościami i bezstratnej edycji. Konwersja AVIF na PNG to most między światem dystrybucji internetowej a światem kreatywnej edycji.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Dystrybucja vs Edycja',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format AVIF wyróżnia się w dystrybucji: małe pliki, szybkie ładowanie, obsługa kanału alfa i wyjątkowa jakość wizualna. Jednak jego ekosystem narzędzi jest ograniczony. Większość oprogramowania do projektowania nie potrafi bezpośrednio importować formatu AVIF, co przerywa kreatywne procesy robocze. Próba otwarcia pliku AVIF w Figmie lub zaimportowania go jako warstwy w Photoshopie po prostu nie działa.',
  },
  {
    type: 'paragraph',
    html: 'PNG to natywny format cyfrowego projektowania. Dzięki bezstratnej kompresji, pełnej obsłudze kanału alfa i uniwersalnej kompatybilności ze wszystkimi kreatywnymi narzędziami, PNG jest formatem roboczym par excellence. Kiedy musisz skalować, retuszować, eksportować do wielu formatów lub pracować na warstwach, PNG gwarantuje, że nie stracisz żadnego detalu ani piksela w tym procesie.',
  },
  {
    type: 'title',
    text: 'Porównanie: Konwertery w chmurze vs nasza lokalna architektura',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Narzędzia przesyłające Twoje pliki AVIF na zdalny serwer w celu ich przetworzenia.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Twoje obrazy projektowe wędrują do serwerów zewnętrznych',
          'Czas oczekiwania przez opóźnienia sieciowe',
          'Możliwa utrata lub zmiana kanału alfa',
          'Limity rozmiaru utrudniające konwersję wsadową',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio w przeglądarce za pomocą technologii Vanilla JS i Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Kanał alfa zachowany z idealną wiernością',
          'Natychmiastowa konwersja bez przesyłania danych',
          'Brak limitów liczby plików, rozmiaru czy pakietów',
          'Pełna prywatność projektów chronionych prawem autorskim',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa techniczna konwersja z przezroczystościami',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nowoczesne przeglądarki dekodują format AVIF natywnie dzięki wbudowanym silnikom AV1. Przy ładowaniu pliku przeglądarka dekoduje go w pamięci, zachowując wszystkie informacje o kanale alfa. Zdekodowany obraz — wraz z przezroczystościami — jest rysowany na elemencie <code>Canvas</code> HTML5 z odpowiednim trybem kompozycji w celu zachowania kanału alfa.',
  },
  {
    type: 'paragraph',
    html: 'W przeciwieństwie do eksportu do JPG (który niszczy przezroczystości, wypełniając je kolorem białym), eksport do PNG za pomocą <code>toBlob(\'image/png\')</code> w pełni zachowuje kanał alfa. Rezultatem jest plik PNG z bezstratną kompresją, który zachowuje każdy piksel, każdą półprzezroczystość i każdy detal oryginalnego formatu AVIF.',
  },
  {
    type: 'tip',
    title: 'Obowiązkowy etap wstępny dla każdego narzędzia projektowego',
    html: 'Konwertuj pliki AVIF na PNG przed ich zaimportowaniem do Figmy, Photoshopa, Illustratora czy jakiegokolwiek narzędzia projektowego. Aplikacje te nie czytają bezpośrednio formatu AVIF, ale PNG działa natywnie we wszystkich z nich, zachowując przezroczystości i jakość w sposób perfekcyjny.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia: kiedy potrzebujesz konwersji AVIF na PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importowanie do Figmy, Sketch, Adobe XD lub innych narzędzi do projektowania UI.',
      'Edycja na warstwach w Photoshopie, Affinity Photo lub GIMP z zachowaniem przezroczystości.',
      'Używanie jako źródła do generowania ikon lub duszków (sprites).',
      'Wysyłanie do klientów lub współpracowników pracujących w standardowym oprogramowaniu projektowym.',
      'Archiwizacja obrazów z przezroczystościami w bezstratnym formacie edycyjnym.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: Most między internetem a projektowaniem',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF i PNG to idealni partnerzy w nowoczesnym procesie roboczym: AVIF do wydajnej dystrybucji w sieci, PNG do edycji i współpracy w narzędziach projektowych. Dzięki naszemu konwerterowi przejście z jednego formatu do drugiego jest natychmiastowe, prywatne i zachowuje każdy detal — dokładnie to, czego potrzebujesz, gdy Twoje zasoby wizualne mają znaczenie.',
  },
];


export const content: AvifAPngLocaleContent = {
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
