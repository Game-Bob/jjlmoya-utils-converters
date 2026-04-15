import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'konwerter-jpg-na-ico';
const title = 'Konwerter JPG na ICO';
const description =
  'Konwertuj zdjęcia JPG na ICO z prawdziwymi nagłówkami binarnymi Microsoft. Automatyczne przycinanie do kwadratu. Bez przesyłania plików. Za darmo i prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki JPG...',
  convertText: 'Aby błyskawicznie przekonwertować je na ICO',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Czy wynikowy plik ICO jest natywnie kompatybilny z dostosowywaniem folderów Windows?',
    answer:
      'Tak, tworzymy w 100% autentyczny plik w formacie Microsoft Icon, wstawiając ustandaryzowany nagłówek binarny na niskim poziomie do macierzy obrazu.',
  },
  {
    question: 'Co dzieje się z proporcjami, jeśli mój oryginalny plik JPG jest panoramicznym zdjęciem poziomym?',
    answer:
      'Rygorystyczny globalny standard ICO bezwzględnie wymaga idealnie kwadratowego obrazu. Nasz silnik HTML5 JS wycentruje zdjęcie i przytnie nadmiar, gwarantując zrównoważony wynik.',
  },
  {
    question: 'Czy przesyłanie korporacyjnych lub osobistych logo JPG do konwertera jest bezpieczne?',
    answer:
      'Silnik Canvas w JavaScript znajduje się w Twojej własnej przeglądarce. Konwertowanie setek zdjęć na ICO nie wysyła ani jednego megabajta do żadnej chmury w wątpliwych krajach.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Zbierz oryginalne zdjęcia JPG',
    text: 'Znajdź i zbierz konwencjonalne zdjęcia, a następnie umieść je, przeciągając do naszego przyjaznego kwadratu.',
  },
  {
    name: 'Obserwuj binarną puryfikację',
    text: 'Rekodowanie natywnie i szybko wstawi metadane i nagłówki asynchronicznie, generując w pamięci ściśle czystą ikonę.',
  },
  {
    name: 'Skompiluj wiele projektów ZIP',
    text: 'Zakończ pracę, pobierając wszystko masowo w kompaktowym pakiecie w zaledwie kilka sekund.',
  },
];

const bibliography: JpgAIcoLocaleContent['bibliography'] = [
  {
    name: 'Struktura ikonograficzna ICO i użycie w systemie',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Standardy JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter JPG na ICO: Twórz favikony i ikony Windows ze swoich zdjęć',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>ICO</strong> to standard firmy Microsoft dla ikon aplikacji Windows i favikon stron internetowych. W przeciwieństwie do zwykłej zmiany nazwy pliku JPG na .ico, autentyczny plik ICO wymaga specyficznej struktury binarnej z 22-bajtowymi nagłówkami i wbudowanym katalogiem obrazów. <strong>JPG</strong> jest najczęstszym punktem wyjścia do tworzenia tych ikon — logo firmy, zdjęcia profilowego lub dowolnego obrazu, który chcesz zamienić w wizualny symbol swojej aplikacji lub strony internetowej.',
  },
  {
    type: 'title',
    text: 'JPG czy ICO? Kiedy używać każdego formatu',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> to format źródłowy, a nie docelowy dla ikon. Idealny do zdjęć i banerów, ale niekompatybilny z systemami wymagającymi ikon: Eksploratorem plików Windows, paskiem zakładek przeglądarki, skrótami na pulpicie czy manifestami aplikacji PWA. System operacyjny lub przeglądarka szukająca ikony oczekuje formatu ICO — a jeśli go nie znajdzie, wyświetli ikonę ogólną lub uszkodzony kwadrat.',
  },
  {
    type: 'paragraph',
    html: 'Format <strong>ICO</strong> został zaprojektowany tak, aby zawierał wiele rozdzielczości w jednym pliku: <strong>16×16</strong> dla paska zakładek, <strong>32×32</strong> dla skrótów, <strong>48×48</strong> dla eksploratora plików i <strong>256×256</strong> dla wyświetlaczy o wysokiej gęstości. Przeglądarki i systemy operacyjne automatycznie wybierają odpowiednią rozdzielczość w zależności od kontekstu wyświetlania — użytkownik nie musi niczym zarządzać.',
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
          'Twoje logotypy korporacyjne przechowywane na serwerach osób trzecich',
          'Limiti rozmiaru plików i dzienne limity konwersji',
          'Intruzywne reklamy i skrypty śledzące osób trzecich',
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
    html: 'Plik JPG jest dekodowany i rysowany na <strong>HTML5 Canvas</strong> w pamięci. Ponieważ format ICO wymaga kwadratowego obrazu, silnik automatycznie wykrywa, czy plik JPG jest prostokątny i przycina go, centrując najważniejszą część. Następnie buduje standardowy nagłówek Microsoft ICO z poprawną sygnaturą (<code>00 00 01 00</code>), katalogiem obrazów i zakodowanymi danymi pikseli. Wynikiem jest autentyczny binarny plik .ico — a nie zmieniony format PNG.',
  },
  {
    type: 'paragraph',
    html: 'Ponieważ w formacie JPG brakuje kanału alfa, wynikowy plik ICO również nie będzie miał przezroczystości — będzie miał jednolite tło odziedziczone po oryginalnym zdjęciu. Jeśli potrzebujesz favikony z przezroczystym tłem (na przykład, aby dostosować ją do ciemnych lub jasnych pasków zakładek), zalecanym sposobem pracy jest: usunięcie tła w edytorze, zapisanie jako PNG und użycie konwertera PNG na ICO.',
  },
  {
    type: 'tip',
    title: 'Wskazówka: wiele rozdzielczości w jednym pliku ICO',
    html: 'Pliki ICO mogą zawierać <strong>wiele rozdzielczości</strong> w jednym pliku — przeglądarka lub system operacyjny automatycznie wybierają najbardziej odpowiednią dla każdego kontekstu. Aby uzyskać najlepszy możliwy wynik, użyj jako źródła kwadratowego zdjęcia JPG o rozdzielczości co najmniej <strong>256×256 pikseli</strong>: daje to konwerterowi wystarczającą ilość informacji do wygenerowania ostrych rozmiarów 16×16, 32×32 und 48×48 bez pikselozy.',
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
      'Favikona strony internetowej: kompatybilna ze wszystkimi przeglądarkami, w tym Internet Explorer.',
      'Dostosowywanie ikon folderów und pulpitu w systemie Windows 10/11.',
      'Ikona skrótu dla aplikacji desktopowych lub instalatorów.',
      'Ikona aplikacji dla projektów Electron lub aplikacji PWA.',
      'Ikony dla systemów zarządzania plikami und eksploratorów korporacyjnych.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja JPG na ICO to technicznie niezbędny krok dla każdego projektu internetowego lub desktopowego, który potrzebuje rozpoznawalnej tożsamości wizualnej. To narzędzie generuje autentyczne pliki ICO z poprawną strukturą binarną w kilka sekund, bez przesyłania Twojego logo na żaden zewnętrzny serwer. Wynik działa we wszystkich przeglądarkach, w Eksploratorze plików Windows und w każdym systemie korzystającym ze standardu ICO firmy Microsoft.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
