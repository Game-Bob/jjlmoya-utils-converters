import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'konwerter-gif-na-png';
const title = 'Konwersja GIF na PNG Online';
const description =
  'Wyodrębnij pierwszą klatkę ze swoich plików GIF i przekonwertuj ją na PNG z zachowaniem przezroczystości. Bez serwera. Przetwarzanie lokalne. Darmowe.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki GIF...',
  convertText: 'Aby błyskawicznie konwertować je na PNG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować format animowany, taki jak GIF, na format statyczny, taki jak PNG?',
    answer:
      'Wiele sieci społecznościowych lub awatarów nie obsługuje obrazów, które się zmieniają. Wyodrębnienie pierwszej klatki ze złożonego GIF-a do wysokiej jakości pliku PNG rozwiązuje ten problem i redukuje zbędny rozmiar pliku.',
  },
  {
    question: 'Czy przezroczystości ze starego GIF-a zostaną zachowane w wynikowym pliku PNG?',
    answer:
      'Tak, w przeciwieństwie do JPG, format PNG zachowuje kanał alfa. Jeśli GIF posiadał przezroczyste tło, plik PNG zachowa je z wyraźnymi krawędziami.',
  },
  {
    question: 'Czy przechowujecie moje obrazy na serwerach przez jakiś czas po przetworzeniu?',
    answer:
      'Żaden serwer nie przechowuje Twoich plików GIF; całe wyodrębnianie odbywa się lokalnie dzięki interfejsowi Web Canvas API. To procesor Twojego komputera bezpiecznie dekoduje plik bez kontaktu z siecią.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij Animację',
    text: 'Przemieść ciężkie pliki GIF do pola wstawiania.',
  },
  {
    name: 'Idealnie Wyodrębnione Zdjęcie',
    text: 'System zatrzyma ruch dokładnie w punkcie początkowym, tworząc nieskazitelną kopię w ciągu milisekund.',
  },
  {
    name: 'Zapisz swój Statyczny Obraz',
    text: 'Zapisz zbiorczo w formacie ZIP wszystkie awatary GIF przekonwertowane na statyczny format PNG.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter GIF na PNG: Pokonaj ograniczenia kolorów i przezroczystości GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format GIF został zaprojektowany w czasach, gdy monitory ledwo mogły wyświetlać 256 kolorów. Dziesięciolecia później to ograniczenie pozostaje jego największą słabością. PNG narodziło się właśnie po to, by zastąpić GIF we wszystkich przypadkach użycia, w których jakość i przezroczystość mają znaczenie: logo, ikony, grafiki interfejsu i wszelkie obrazy z przezroczystym tłem, które muszą wyglądać idealnie na każdym tle.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: rewolucja 16 milionów kolorów',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Najważniejsza różnica między GIF a PNG to nie tylko liczba kolorów. GIF obsługuje przezroczystość binarną: każdy piksel jest albo nieprzezroczysty, albo całkowicie przezroczysty, bez stopniowania. PNG natomiast obsługuje pełny kanał alfa, z 256 poziomami nieprzezroczystości na piksel. Oznacza to, że krawędzie logo w formacie PNG mogą być idealnie wygładzone, podczas gdy te w formacie GIF wykazują charakterystyczne ząbkowanie na kolorowych tłach.',
  },
  {
    type: 'paragraph',
    html: 'Oprócz doskonałej przezroczystości, PNG eliminuje limit 256 kolorów GIF. Zrzuty ekranu, ilustracje z gradientami, logo z cieniami – wszystkie wyglądają znacznie lepiej w formacie PNG. A ponieważ jest to kompresja bezstratna, każdy piksel zachowuje dokładnie oryginalną wartość, bez artefaktów, które wprowadziłaby konwersja do JPG.',
  },
  {
    type: 'title',
    text: 'Porównanie architektury: Lokalna kontra Chmurowa',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Narzędzia przetwarzające Twoje obrazy na zdalnych serwerach.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Twoje logo i ikony wędrują przez internet',
          'Czas oczekiwania wynikający z opóźnień sieci',
          'Limity rozmiaru i liczby plików',
          'Twoje obrazy mogą pozostać w pamięci podręcznej osób trzecich',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio na Twoim sprzęcie za pomocą technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Plik GIF nigdy nie opuszcza Twojego urządzenia',
          'Natychmiastowa konwersja bez transmisji sieciowej',
          'Brak limitów liczby plików i rozmiaru',
          'Całkowita prywatność: 0 bajtów wysyłanych na zewnątrz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa lokalna konwersja GIF na PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja wykorzystuje interfejs Canvas API przeglądarki. Plik GIF jest dekodowany w pamięci jako natywny element Image. Renderując go na płótnie HTML5, silnik graficzny przeglądarki przechwytuje pierwszą klatkę z nienaruszoną oryginalną informacją o przezroczystości.',
  },
  {
    type: 'paragraph',
    html: 'W przeciwieństwie do konwersji do JPG, w przypadku PNG nie ma potrzeby dodawania białego tła. Kanał alfa oryginalnego GIF-a jest zachowywany bezpośrednio w wyeksportowanym pliku PNG. Metoda <code>toDataURL(\'image/png\')</code> generuje strumień bajtów PNG w pamięci RAM komputera bez konieczności transmisji sieciowej, a plik jest pobierany bezpośrednio.',
  },
  {
    type: 'tip',
    title: 'Przezroczystość binarna GIF vs kanał alfa PNG',
    html: 'GIF obsługuje tylko przezroczystość binarną (nieprzezroczysty lub przezroczysty). Przy konwersji do PNG, półprzezroczyste piksele GIF są zachowywane tak, jak interpretuje je przeglądarka. Jeśli Twój GIF ma ząbkowane krawędzie, plik PNG je zachowa – ale będziesz mógł je edytować z wygładzaniem krawędzi w dowolnym edytorze, co jest niemożliwe w przypadku oryginalnego GIF-a.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia i kompatybilność wynikowego pliku PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo i ikony do użytku na dowolnym tle kolorystycznym.',
      'Awatary dla Discord, Telegram, Slack i platform gamingowych.',
      'Grafiki interfejsu dla aplikacji internetowych i mobilnych.',
      'Spersonalizowane naklejki i emoji z przezroczystym tłem.',
      'Zrzuty ekranu i elementy interfejsu użytkownika dla dokumentacji technicznej.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: PNG to forma, którą GIF zawsze chciał być',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja z formatu GIF do PNG to nie tylko zmiana formatu: to aktualizacja obrazu do nowoczesnego standardu, którego GIF nigdy nie zdołał osiągnąć. Więcej kolorów, lepsza przezroczystość, mniejszy rozmiar. Nasze narzędzie wykonuje tę konwersję w milisekundach bez przesyłania jakichkolwiek danych na zewnątrz.',
  },
];


export const content: GifAPngLocaleContent = {
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
