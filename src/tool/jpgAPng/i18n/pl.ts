import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'konwerter-jpg-na-png';
const title = 'Konwertuj JPG na PNG Online i Za Darmo';
const description =
  'Konwertuj obrazy JPG na PNG w swojej przeglądarce bez przesyłania plików. Konwersja bezstratna, darmowa i całkowicie prywatna.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki JPG...',
  convertText: 'Aby błyskawicznie konwertować je na PNG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Kiedy powinienem używać konwersji z JPG na PNG?',
    answer:
      'Zawsze wtedy, gdy zamierzasz edytować tekst lub logo na zdjęciu. Jeśli zapisujesz JPG kilka razy, staje się on "brudny". PNG zamraża kompresję.',
  },
  {
    question: 'Czy plik PNG będzie miał od razu przezroczyste tło?',
    answer:
      'Nie. Oryginalny plik JPG był płaski i nie posiadał tego typu kanału strukturalnego. Wynikowy plik PNG przygotuje ten kontener, a następnie będziesz musiał wyodrębnić element za pomocą Photoshopa lub innego edytora.',
  },
  {
    question: 'Czy ta strona ma limity ruchu?',
    answer:
      'Dzięki technologiom Edge bez zależności w chmurze, rozmiar Twojej konwersji nie nakłada żadnych limitów, ponieważ w całości wykorzystuje Twój komputer lub telefon komórkowy.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij JPG do panelu',
    text: 'Prześlij statyczne obrazy w formacie JPG za pomocą myszy lub selektora plików w komputerze.',
  },
  {
    name: 'Bezstratne wykonanie',
    text: 'Oprogramowanie Vanilla wypycha bity obrazu do bezstratnego opakowania natywnego dla rodziny PNG.',
  },
  {
    name: 'Zakończ sesję',
    text: 'Kliknij panel, a Twoja przeglądarka zapisze pobrane zasoby internetowe w Twoich folderach użytkownika.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter JPG na PNG: Edycja bezstratna i przezroczystość',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>JPG</strong> jest bezkonkurencyjny w przypadku zdjęć z aparatu, ale ma słaby punkt: za każdym razem, gdy zapisujesz plik, ponownie stosowana jest kompresja stratna, co stopniowo pogarsza krawędzie i gradienty. <strong>PNG</strong> wykorzystuje kompresję bezstratną - raz zapisane piksele są niezmienne. Konwersja JPG na PNG to kluczowa operacja, gdy musisz przygotować obraz do intensywnej edycji, dodać przezroczyste tło lub zintegrować go z procesem projektowania wymagającym wielokrotnego zapisywania.',
  },
  {
    type: 'title',
    text: 'JPG czy PNG? Kiedy używać każdego formatu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> to król fotografii: mała waga, kompatybilność ze wszystkim. Jednak artefakty kompresji kumulują się przy każdej edycji i ponownym zapisie. Jeśli musisz wielokrotnie przycinać, retuszować lub dodawać tekst do obrazu, rozpoczęcie od JPG oznacza wprowadzanie pogorszenia jakości w każdym cyklu. Ponadto JPG nie posiada kanału alfa: nie może mieć przezroczystego tła, co dyskwalifikuje go w przypadku logo, ikon i elementów interfejsu użytkownika.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> to właściwy wybór dla logo firmowych, zrzutów ekranu z ostrym tekstem, elementów interfejsu, zdjęć produktów z białym tłem, które będziesz musiał później wyciąć, lub wszelkich zasobów graficznych, które będą edytowane więcej niż raz. Kompresja bezstratna gwarantuje, że krawędzie tekstu pozostają idealnie zdefiniowane, a jednolite kolory pozostają czyste, bez szumu JPEG.',
  },
  {
    type: 'title',
    text: 'Porównanie: Konwersja Lokalna kontra Chmurowa',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Narzędzia przesyłające Twoje pliki na zdalny serwer.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Opóźnienia sieciowe przy przesyłaniu i pobieraniu',
          'Twoje obrazy pozostają na serwerach innych osób',
          'Limity rozmiaru i dziennej liczby konwersji',
          'Intruzywne reklamy i trackery stron trzecich',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio na Twoim sprzęcie za pomocą technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Natychmiastowa prędkość - zero opóźnień sieciowych',
          'Całkowita prywatność - 0 bajtów wysłanych na zewnątrz',
          'Brak limitów MB i liczby plików',
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
    html: 'Proces jest czysto lokalny: przeglądarka tworzy <strong>Blob</strong> z wybranym JPG i rysuje go na <strong>HTML5 Canvas</strong> w pamięci. Po wyrenderowaniu wywoływana jest funkcja <code>toDataURL(\'image/png\')</code> - zintegrowany z przeglądarką kodek PNG ponownie koduje każdy piksel bez stosowania żadnej nowej kompresji stratnej. Wynikiem jest plik PNG, który wiernie zachowuje obecny stan JPG: ani lepszy, ani gorszy, po prostu zamrożony.',
  },
  {
    type: 'paragraph',
    html: 'Wynikowy plik PNG będzie wykorzystywał bezstratną kompresję DEFLATE, taką samą jak w profesjonalnych narzędziach takich jak Photoshop czy GIMP. Jego rozmiar będzie większy niż oryginalnego JPG - zazwyczaj od 2 do 5 razy - ponieważ przechowuje wszystkie piksele bez odrzucania informacji. To cena za wierność i nieskończone możliwości edycji.',
  },
  {
    type: 'tip',
    title: 'Ważne: PNG nie przywraca jakości JPEG',
    html: 'Konwersja z JPG na PNG <strong>nie przywraca jakości utraconej</strong> podczas oryginalnej kompresji JPEG. Jeśli Twój JPG posiadał już artefakty blokowe lub szum kolorów, PNG zachowa je w stanie nienaruszonym - po prostu zapobiega dodawaniu kolejnych. Myśl o konwersji jako o "zamrożeniu" obecnego stanu obrazu, tak aby przyszłe edycje nie degradowały go bardziej.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia i kompatybilność',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo i elementy marki wymagające przezroczystego tła po wycięciu.',
      'Zrzuty ekranu z tekstem, które będą edytowane i ponownie zapisywane kilka razy.',
      'Zdjęcia produktów dla e-commerce wymagające czystego i dającego się wyciąć białego tła.',
      'Zasoby graficzne do prezentacji PowerPoint lub Google Slides.',
      'Elementy interfejsu dla aplikacji internetowych i mobilnych, gdzie ostrość krawędzi jest krytyczna.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja JPG na PNG to pierwszy krok w każdym poważnym procesie projektowania. Nie transformuje oryginalnej jakości, ale chroni każdy piksel przed przyszłymi edycjami. Dzięki temu narzędziu proces odbywa się natychmiastowo i całkowicie prywatnie, bez przesyłania Twoich obrazów firmowych lub osobistych z Twojego urządzenia.',
  },
];


export const content: JpgAPngLocaleContent = {
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
