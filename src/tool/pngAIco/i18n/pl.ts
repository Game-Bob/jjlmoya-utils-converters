import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'konwerter-png-na-ico';
const title = 'Konwertuj PNG na ICO Online';
const description =
  'Konwertuj PNG na ICO z prawdziwymi nagłówkami binarnymi. Przezroczystość zachowana. Bez przesyłania plików. Za darmo i w 100% prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki PNG...',
  convertText: 'Aby błyskawicznie przekonwertować je na ICO',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące': 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Czy Twój konwerter tworzy proste, zamaskowane pliki PNG, czy autentyczne ICO?',
    answer:
      'Tworzymy prawdziwe ICO. Wyodrębniamy dane z pliku PNG, tworzymy ustandaryzowany nagłówek szesnastkowy Microsoft (Header + Directory o rozmiarze 22 bajtów), lokalnie zmieniamy rozmiar na idealny format kwadratowy i składamy końcowy plik zweryfikowany jako natywny.',
  },
  {
    question: 'Czy przezroczystość zostaje zachowana, gdy moje logo zostanie umieszczone w ikonie?',
    answer:
      'Zdecydowanie tak. Nasz silnik odczytuje plik PNG w formacie 32-bitowym, kotwicząc go i precyzyjnie zachowując wszelkie przezroczyste obszary, dzięki czemu wyróżniają się one w uniwersalnym pasku adresu przeglądarki (Favicon).',
  },
  {
    question: 'Czy logo mojej firmy jest przechowywane na Twoich serwerach?',
    answer:
      'Ta usługa gwarantuje brak kontaktu z sieciami zewnętrznymi. Konwerter pracuje zakotwiczony w Twoim wewnętrznym HTML5 Canvas; tworzenie ikony odbywa się w stu procentach wewnątrz Twojej maszyny, w całkowicie bezpiecznej, lokalnej pamięci.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij pliki do przetworzenia',
    text: 'Umieść swoje obrazy źródłowe (idealny jest kwadratowy plik PNG 512x512) w interaktywnej ramce lokalnej.',
  },
  {
    name: 'Automatyczna kompilacja bajtkodu',
    text: 'Zobaczysz pasek postępu pokazujący proces ładowania i tworzenia lokalnej macierzy oczyszczonych szesnastkowych nagłówków ICO.',
  },
  {
    name: 'Pobierz ZIP',
    text: 'Pobierz wyniki jednym kliknięciem (przyciski zbiorczego ZIP) lub pobierz miniaturę dla pliku wykonywalnego Windows.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter PNG na ICO: Najlepsze źródło Favikon z idealną przezroczystością',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG z przezroczystością</strong> to idealny materiał wyjściowy do tworzenia profesjonalnych ikon ICO. W przeciwieństwie do JPG (który nie posiada kanału alfa) lub formatów stratnych, PNG daje dokładnie to, czego wymaga format ICO: ostre piksele, wyraźne krawędzie i 32-bitowy kanał alfa, który pozwala ikonie idealnie wtopić się w dowolne tło — czy to biały pasek zakładek Safari, ciemny pasek Firefoxa czy pulpit Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG czy ICO? Kiedy używać każdego formatu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> to format roboczy: to w nim projektujesz logo, eksportujesz z Figmy lub Illustratora i zapisujesz wersje edytowalne. Jego przezroczystość, precyzja pikseli i bezstratna kompresja sprawiają, że jest bezkonkurencyjny w procesie projektowania. Jednak przeglądarki, systemy operacyjne und aplikacje Windows szukające favikony lub ikony aplikacji nie akceptują bezpośrednio PNG — wymagają formatu ICO.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> to format dystrybucji ikon w środowiskach Microsoft oraz w sieci. Zawiera specyficzną strukturę binarną, która pozwala na spakowanie wielu rozdzielczości w jednym pliku: przeglądarka odczytuje wewnętrzny katalog ICO und automatycznie wybiera <strong>16x16</strong> dla karty przeglądarki, <strong>32x32</strong> dla skrótów, <strong>48x48</strong> dla eksploratora plików oraz <strong>256x256</strong> dla ekranów Retina und 4K. Rozpoczęcie od przezroczystego PNG gwarantuje, że wszystkie te rozdzielczości będą miały idealne krawędzie bez białej obwódki.',
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
          'Opóźnienia sieciowe podczas przesyłania und pobierania',
          'Twoje logo korporacyjne przechowywane na serwerach osób trzecich',
          'Limity rozmiaru plików und dzienne limity konwersji',
          'Intruzywne reklamy und skrypty śledzące osób trzecich',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Błyskawiczna prędkość — zero opóźnień sieciowych',
          'Pełna prywatność — 0 bajtów wysłanych na zewnątrz',
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
    html: 'Plik PNG jest dekodowany do <strong>HTML5 Canvas</strong> w pamięci z pełną obsługą 32-bitowego kanału alfa. Silnik buduje standardowy nagłówek Microsoft ICO z poprawną sygnaturą (<code>00 00 01 00</code>), katalogiem obrazów z wymiarami und przesunięciem danych oraz danymi pikseli przy jednoczesnym zachowaniu informacji o przezroczystości. Rezultatem jest autentyczny binarny plik .ico, który systemy Windows, macOS und wszystkie przeglądarki rozpoznają natywnie.',
  },
  {
    type: 'paragraph',
    html: 'Przezroczystość pliku PNG jest w pełni zachowana w wynikowym pliku ICO — przezroczyste piksele pozostają przezroczyste, półprzezroczyste zachowują swoją dokładną wartość alfa, und nieprzezroczyste zachowują swój pierwotny kolor. Jest to kluczowe dla logotypów na zmiennym tle: Twoja favikona będzie wyglądać poprawnie w trybie jasnym, ciemnym oraz w dowolnym połączeniu kolorów interfejsu przeglądarki.',
  },
  {
    type: 'tip',
    title: 'Wskazówka: użyj PNG 512x512 jako źródła',
    html: 'Aby uzyskać najlepszy możliwy wynik, jako obrazu źródłowego użyj <strong>kwadratowego pliku PNG o wymiarach 512x512</strong>. Taka rozdzielczość daje konwerterowi wystarczającą ilość informacji do wygenerowania wszystkich standardowych rozmiarów ICO z doskonałą ostrością — od favikony 16x16 po ikonę 256x256 dla ekranów o wysokiej gęstości — bez pikselozy i utraty detali na krawędziach. Im większy źródłowy PNG, tym lepiej będą wyglądać małe rozmiary ikon.',
  },
  {
    type: 'title',
    text: 'Zastosowania und kompatybilność',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Przezroczysta favikona dla stron internetowych: działa w Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'Ikona aplikacji PWA: manifest.json odwołuje się do pliku ICO w celu instalacji na pulpicie.',
      'Dostosowywanie folderów Windows 10/11 con logo korporacyjnym bez białego tła.',
      'Ikona skrótu dla aplikacji desktopowych, instalatorów und plików wykonywalnych.',
      'Ikona rozszerzenia przeglądarki dla rozszerzeń Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG z przezroczystością to bez wątpienia najlepszy punkt wyjścia do tworzenia profesjonalnej jakości ikon ICO. Dzięki temu narzędziu konwersja jest natychmiastowa, kanały alfa są w pełni zachowane und wynikiem jest autentyczne ICO z poprawną strukturą binarną. Bez przesyłania logo na żaden serwer, bez znaków wodnych i limitów — oraz z idealną przezroczystością we wszystkich rozmiarach.',
  },
];

export const content: PngAIcoLocaleContent = {
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
