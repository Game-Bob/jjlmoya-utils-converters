import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'konwerter-svg-na-png';
const title = 'Konwertuj SVG na PNG Online i Za Darmo';
const description =
  'Konwertuj pliki wektorowe SVG na PNG w swojej przeglądarce. Wyjście HD w podwójnej skali. Zachowuje przezroczystość. Za darmo i w 100% prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki SVG...',
  convertText: 'Aby błyskawicznie przekonwertować je na PNG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować pliki SVG na PNG?',
    answer:
      'SVG jest oparty na wektorach i idealny dla logo, ale czasami potrzebujesz rastrowego formatu PNG do użytku w aplikacjach, które nie obsługują wektorów, lub do udostępniania za pośrednictwem komunikatorów lub mediów społecznościowych.',
  },
  {
    question: 'Czy mogę wybrać rozmiar wyjściowy?',
    answer:
      'Obecnie podwajamy skalę źródłowego pliku SVG, aby wyjściowy obraz PNG był ostry i odpowiedni dla ekranów Retina lub 4K.',
  },
  {
    question: 'Czy przezroczystości SVG są zachowane?',
    answer:
      'Tak, wynikowy plik PNG zachowuje kanał alfa oryginalnego pliku SVG, utrzymując wszystkie przezroczyste tła w nienaruszonym stanie.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Wstaw pliki SVG',
    text: 'Upuść pliki SVG lub przeciągnij je bezpośrednio do górnego obszaru.',
  },
  {
    name: 'Generowanie HD PNG',
    text: 'W ciągu milisekund nasz lokalny silnik odtworzy każdy wektor jako warstwę pikseli HD w przezroczystym formacie PNG.',
  },
  {
    name: 'Pobierz pliki',
    text: 'Zapisz wygenerowane pliki PNG pojedynczo lub jako pakiet ZIP.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'Specyfikacja W3C SVG',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: Samouczek SVG',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter SVG na PNG: Od nieskończonego wektora do uniwersalnego rastra',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) to doskonały wybór do projektowania stron internetowych: nieskończenie skalowalny, lekki i edytowalny w dowolnym edytorze kodu. Ale kiedy musisz użyć tego logo lub ikony w aplikacji mobilnej, udostępnić je w mediach społecznościowych lub wstawić do prezentacji PowerPoint, napotykasz barierę: większość tych platform nie obsługuje formatu SVG. Format <strong>PNG</strong> jest uniwersalnym rozwiązaniem: rastrowy, z kanałem alfa i kompatybilny w absolutnie każdym kontekście.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Wektory dla sieci, raster dla świata',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG przechowuje obraz jako instrukcje matematyczne: krzywa Béziera, gradient, wielokąt. Oznacza to, że ten sam plik wygląda idealnie przy 16 px lub 16 000 px. Jest to idealny format dla kodu strony internetowej, animacji CSS i wszelkich elementów, które muszą dostosowywać się do różnych rozdzielczości ekranu bez utraty jakości.',
  },
  {
    type: 'paragraph',
    html: 'PNG przechowuje obraz jako siatkę pikseli z informacjami o kolorze i przezroczystości dla każdego piksela. Jest to format <strong>bezystratny</strong> (lossless), co oznacza pełne zachowanie jakości. Po zrasteryzowaniu formatu SVG do PNG rozdzielczość jest ustalona. Dlatego wybór odpowiedniego rozmiaru eksportu jest kluczowy: nasze narzędzie renderuje w podwójnej skali (2x), aby zapewnić ostrość na ekranach Retina i 4K.',
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
          'Twój kod SVG trafia na zewnętrzne serwery',
          'Zdalne renderowanie o niespójnej jakości',
          'Czas oczekiwania na przesłanie i przetworzenie',
          'Ograniczenia dotyczące rozmiaru pliku SVG',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Twój plik SVG nigdy nie opuszcza przeglądarki',
          'Renderowanie natywnym silnikiem przeglądarki dla maksymalnej wierności',
          'Format PNG w rozdzielczości 2x dla ekranów o wysokiej gęstości',
          'Przezroczystość zachowana dzięki pełnemu kanałowi alfa',
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
    html: 'Proces rozpoczyna się od załadowania pliku SVG do elementu JavaScript <strong>Image</strong>. Gdy silnik przeglądarki przeanalizuje i wyrenderuje wektorowy kod XML, wynikowy obraz jest rysowany na <strong>HTML5 Canvas</strong>, którego wymiary są dwukrotnie większe od oryginalnego rozmiaru SVG (skala 2x). Daje to plik PNG o dwukrotnie większej liczbie pikseli na wymiar, idealny dla ekranów o wysokiej rozdzielczości.',
  },
  {
    type: 'paragraph',
    html: 'W przeciwieństwie do konwersji na JPG, podczas eksportu do PNG płótno zachowuje pełny kanał alfa: przezroczyste obszary w oryginalnym SVG stają się w pełni przezroczystymi pikselami w wynikowym pliku PNG — bez wypełnienia tła na biało. Eksport wykorzystuje metodę <code>toDataURL(\'image/png\')</code> z bezstratną kompresją.',
  },
  {
    type: 'tip',
    title: 'Wskazówka przed rasteryzacją',
    html: 'Dokładnie wybierz rozmiar eksportu PNG — rasteryzacja pliku SVG jest procesem jednokierunkowym: nie można odzyskać wektorów z wynikowego pliku PNG. Zawsze zachowuj oryginalny plik SVG jako źródło master i generuj pliki PNG w najwyższej rozdzielczości, jakiej możesz kiedykolwiek potrzebować.',
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
      'Eksportowanie logo wektorowych do prezentacji PowerPoint lub Google Slides.',
      'Tworzenie ikon PNG dla systemów iOS, Android lub Progressive Web Apps.',
      'Udostępnianie projektów SVG na Instagramie, LinkedInie lub w innych mediach społecznościowych.',
      'Wstawianie ilustracji wektorowych do dokumentów Word lub PDF.',
      'Generowanie miniatur PNG grafiki SVG dla podglądu w systemie CMS.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG to język wektorów; PNG to paszport do reszty cyfrowego świata. To narzędzie rasteryzuje Twoje pliki SVG w rozdzielczości 2x z nienaruszoną przezroczystością, bezpośrednio w przeglądarce, bez wysyłania ani jednego bajta Twojego projektu na żaden zewnętrzny serwer.',
  },
];


export const content: SvgAPngLocaleContent = {
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
