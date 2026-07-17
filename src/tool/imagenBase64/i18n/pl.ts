import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'konwerter-obrazu-na-base64';
const title = 'Konwerter obrazu na Base64 Online';
const description =
  'Konwertuj dowolny obraz na kod Base64 i Data URI bezpośrednio w przeglądarce. Bez przesyłania plików. Za darmo, prywatnie i błyskawicznie.';

const ui: ImageToBase64UI = {
  dragTitle: 'Przeciągnij obraz tutaj',
  dragSubtext: 'lub kliknij, aby przeglądać pliki',
  formatBadge: 'Obsługuje JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Gotowy dla CSS / HTML src="")',
  base64Label: 'Tylko Base64 (Czysty zakodowany tekst)',
  copyBtn: 'Kopiuj',
  dataUriPlaceholder: 'Prześlij obraz, aby zobaczyć kod Data URI...',
  base64Placeholder: 'Prześlij obraz, aby zobaczyć czysty kod Base64...',
  toastMessage: 'Kod skopiowany do schowka!',
  invalidImageAlert: 'Proszę przesłać poprawny plik obrazu.',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Co to jest Base64 i do czego służy w web developmencie?',
    answer:
      'Base64 to system kodowania, który konwertuje dane binarne na ciąg tekstowy ASCII. W tworzeniu stron internetowych służy do osadzania obrazów bezpośrednio w plikach HTML lub CSS za pomocą Data URI, co zmniejsza liczbę żądań HTTP do serwera.',
  },
  {
    question: 'Czy konwertowanie moich obrazów na Base64 tutaj jest bezpieczne?',
    answer:
      'Absolutnie bezpieczne i prywatne. Nasze narzędzie działa w 100% lokalnie w Twojej przeglądarce. Twoje obrazy nigdy nie są przesyłane ani przetwarzane na żadnym zewnętrznym serwerze.',
  },
  {
    question: 'Jakie formaty obrazów obsługuje konwerter Base64?',
    answer:
      'Narzędzie jest kompatybilne z plikami JPG, PNG, GIF, WebP, a nawet wektorowymi plikami SVG. Podczas ładowania obrazu automatycznie wykryje jego typ MIME, aby wygenerować dokładny kod Data URI.',
  },
  {
    question: 'Kiedy NIE należy używać obrazów Base64?',
    answer:
      'Należy unikać używania obrazów Base64 w przypadku dużych fotografii lub obrazów o wysokiej rozdzielczości. Kod Base64 zajmuje około 33% więcej miejsca niż oryginalny plik binarny, co może nadmiernie zwiększyć rozmiar arkuszy stylów CSS lub dokumentów HTML.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Przeciągnij lub wybierz obraz',
    text: 'Przenieś dowolny obraz (JPG, PNG, WebP, SVG, GIF) do obszaru przesyłania, aby rozpocząć konwersję.',
  },
  {
    name: 'Skopiuj wygenerowany kod',
    text: 'Zobaczysz dwa pola tekstowe: pełny Data URI (gotowy do użycia w src="" lub CSS) oraz czysty Base64 do innych zastosowań.',
  },
  {
    name: 'Użyj kodu w swoim projekcie',
    text: 'Wklej Data URI bezpośrednio do src tagu img lub w CSS jako background-image, bez konieczności używania zewnętrznych plików.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter obrazu na Base64: Osadzaj obrazy bez żądań HTTP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 to technika kodowania, która przekształca dane binarne - takie jak obraz - w czysty ciąg tekstowy ASCII. Wynikiem jest Data URI: samodzielny adres URL zaczynający się od <code>data:image/png;base64,...</code>, który zawiera cały zakodowany obraz. Osadzając ten kod bezpośrednio w HTML, CSS lub JSON, obraz ładuje się bez żadnego dodatkowego żądania HTTP do serwera - zero opóźnień sieciowych, natychmiastowe ładowanie.',
  },
  {
    type: 'title',
    text: 'Kiedy używać obrazów Base64',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Głównym argumentem za Base64 jest wyeliminowanie żądań sieciowych. Każdy obraz na stronie internetowej oznacza żądanie HTTP z jego narzutem połączenia, DNS, handshake TLS i opóźnieniem. W przypadku bardzo małych, krytycznych obrazów - głównego logo aplikacji, favicony, ikony interfejsu - osadzenie ich w Base64 w CSS lub HTML eliminuje ten koszt i gwarantuje, że zostaną wyświetlone natychmiast, nawet zanim przeglądarka zdąży cokolwiek zapisać w pamięci podręcznej.',
  },
  {
    type: 'paragraph',
    html: 'Ta technika jest szczególnie skuteczna w aplikacjach typu SPA (Single Page Application), gdzie paczka JavaScript i CSS jest generowana w czasie budowania: osadzenie małych obrazów w paczce gwarantuje, że załadują się one wraz z kodem bez dodatkowych żądań. Jest to również niezbędne w przypadku wiadomości e-mail HTML, w których klienci pocztowi blokują zewnętrzne obrazy, ale prawie zawsze wyświetlają osadzone Data URI.',
  },
  {
    type: 'title',
    text: 'Zastosowania obrazów Base64',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> dla krytycznych ikon.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> dla ikon SVG interfejsu.',
      'JSON i API REST: wysyłaj obrazy jako dane tekstowe w payloadach JSON.',
      'E-maile HTML: osadzone obrazy wyświetlane nawet wtedy, gdy klient blokuje zewnętrzne adresy URL.',
      'Osadzanie w SVG: osadzaj obrazy rastrowe wewnątrz plików SVG jako dane inline.',
    ],
  },
  {
    type: 'title',
    text: 'Jak działa konwersja w przeglądarce',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Podczas wyboru lub przeciągania obrazu, API <code>FileReader</code> przeglądarki odczytuje go bezpośrednio z dysku jako dane binarne w pamięci RAM. Metoda <code>readAsDataURL()</code> konwertuje te binarne bajty na ich reprezentację Base64 przy użyciu algorytmu RFC 4648 - każde 3 bajty oryginalnych danych są reprezentowane przez 4 znaki ASCII z alfabetu Base64. Wynik zawiera automatycznie wykryty poprawny typ MIME.',
  },
  {
    type: 'tip',
    title: 'Używaj tylko dla małych obrazów (poniżej 10 KB)',
    html: 'Base64 zwiększa rozmiar pliku o około 33%: obraz o rozmiarze 10 KB staje się tekstem o wadze ~13,3 KB. W przypadku małych ikon i logo koszt ten jest minimalny, a wyeliminowanie żądania HTTP to rekompensuje. W przypadku dużych fotografii lub obrazów narzut rozmiaru jest znaczący - dla dużych plików zawsze używaj sieci CDN.',
  },
  {
    type: 'title',
    text: 'Kiedy NIE używać Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Unikaj Base64 dla dużych obrazów: użyj sieci CDN',
    html: 'Jeśli masz obrazy większe niż 10-20 KB, Base64 pogarsza wydajność: zwiększa rozmiar HTML/CSS, uniemożliwia przeglądarce niezależne buforowanie obrazu i blokuje renderowanie, podczas gdy parser przetwarza gigantyczny ciąg znaków. W przypadku dużych obrazów zawsze korzystaj z sieci CDN z odpowiednimi nagłówkami pamięci podręcznej.',
  },
  {
    type: 'title',
    text: 'Kompatybilność i prywatność',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI są kompatybilne ze 100% nowoczesnych przeglądarek i większością klientów poczty e-mail. Nasze narzędzie przetwarza wszystko lokalnie za pomocą API FileReader - Twoje obrazy nigdy nie opuszczają Twojego urządzenia. Dzięki temu nadaje się do obrazów firmowych, prywatnych zrzutów ekranu lub wszelkich poufnych treści wizualnych, które musisz przekonwertować na Base64.',
  },
  {
    type: 'title',
    text: 'Podsumowanie: najszybsze i najbezpieczniejsze narzędzie do osadzania',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja obrazów na Base64 to specyficzna, ale bardzo potężna technika, jeśli jest stosowana prawidłowo. Używaj jej w przypadku małych, krytycznych obrazów, gdzie brak żądań HTTP robi różnicę, i unikaj jej w przypadku dużych obrazów, gdzie sieć CDN zawsze wygrywa. Dzięki naszemu narzędziu uzyskasz Data URI w mgnieniu oka, bez przesyłania czegokolwiek na serwer.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
