import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'konwerter-avif-na-jpg';
const title = 'Konwertuj AVIF na JPG Online';
const description =
  'Konwertuj obrazy AVIF na JPG w swojej przeglądarce. Bez serwera. W 100% prywatne przetwarzanie lokalne. Darmowe i nielimitowane.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki AVIF...',
  convertText: 'Aby błyskawicznie konwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować AVIF na JPG?',
    answer:
      'Format AVIF zapewnia lepszą kompresję, ale nie wszystkie programy i przeglądarki go obsługują. Konwersja na JPG gwarantuje, że obraz będzie można wyświetlić na 100% urządzeń na całym świecie.',
  },
  {
    question: 'Jak chronimy Twoje obrazy AVIF?',
    answer:
      'Twoje zdjęcia nigdy nie opuszczają Twojego telefonu ani komputera. Cały proces rysowania i kodowania do formatu JPEG odbywa się w środowisku JavaScript Twojej przeglądarki.',
  },
  {
    question: 'Czy stracę jakość przechodząc z AVIF na JPG?',
    answer:
      'Nasze narzędzie przetwarza piksele ze standardową jakością Canvas (od 0,9 do 0,95), dzięki czemu zmiany są niemal niedostrzegalne.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij pliki lub kliknij',
    text: 'Przenieś wszystkie zdjęcia AVIF, które chcesz konwertować, do wyznaczonego obszaru przetwarzania.',
  },
  {
    name: 'Błyskawiczna Transformacja',
    text: 'Zobacz, jak w mniej niż sekundę obraz AVIF jest rekodowany do formatu JPG, zastępując ewentualne kanały alfa jednolitym tłem.',
  },
  {
    name: 'Zapisz lub Pobierz ZIP',
    text: 'Pobierz nowe obrazy JPG pojedynczynio lub użyj przycisku Pobierz wszystko, jeśli przetwarzałeś je zbiorczo.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Ogólne informacje o JPG',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter AVIF na JPG: Uniwersalna Kompatybilność Twoich Nowoczesnych Obrazów',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) to najbardziej wydajny format obrazu dostępny obecnie. Opracowany przez Alliance for Open Media i oparty na kodeku wideo AV1, oferuje kompresję o 50% lepszą niż JPG przy zachowaniu tej samej jakości wizualnej. Ta techniczna przewaga ma jednak swoją cenę: AVIF nie jest obsługiwany przez Photoshop, Lightroom, Przeglądarkę fotografii systemu Windows, ani większość tradycyjnych narzędzi do edycji i wyświetlania obrazów. Konwersja na JPG rozwiązuje ten problem u podstaw.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Wydajność kontra Uniwersalna Kompatybilność',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format AVIF kompresuje w sposób nadzwyczajny: zdjęcie o wysokiej rozdzielczości, które w formacie JPG zajmuje 4 MB, w formacie AVIF może ważyć zaledwie 2 MB przy zachowaniu tej samej jakości. To sprawia, że jest idealny do udostępniania w sieci, gdzie czas ładowania jest krytyczny. Poza przeglądarką AVIF jest jednak niemal niewidoczny: Eksplorator Windows go nie wyświetla, aparaty go nie eksportują, a projektanci go nie akceptują w swoich procesach roboczych.',
  },
  {
    type: 'paragraph',
    html: 'JPG od ponad 30 lat pozostaje uniwersalnym standardem fotografii cyfrowej. Jest obsługiwany przez 100% urządzeń, systemów operacyjnych, aplikacji biurowych, mediów społecznościowych, drukarek i każdego oprogramowania, które kiedykolwiek wyświetliło obraz. Gdy musisz udostępnić, wydrukować, edytować lub wysłać obraz e-mailem, JPG gwarantuje, że wszystko zadziała bez problemu.',
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
          'Twoje prywatne zdjęcia wędrują przez internet na zewnętrzne serwery',
          'Czas oczekiwania na przesłanie i pobranie pliku',
          'Limity rozmiaru i liczby darmowych konwersji',
          'Ryzyko przechowywania obrazów na serwerach zewnętrznych',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio w przeglądarce za pomocą technologii Vanilla JS i Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Twoje zdjęcia nigdy nie opuszczają Twojego urządzenia',
          'Błyskawiczna konwersja bez opóźnień sieciowych',
          'Brak limitów liczby i rozmiaru plików',
          'Bezpieczne dla zdjęć medycznych, prawnych lub poufnych',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa techniczna konwersja w przeglądarce',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nowoczesne przeglądarki, takie jak Chrome, Firefox i Edge, posiadają natywną obsługę formatu AVIF dzięki wbudowanym dekoderom AV1. Po załadowaniu pliku AVIF przeglądarka dekoduje go w pamięci i konwertuje na mapę bitową w pamięci RAM. Ta reprezentacja jest rysowana na niewidocznym elemencie HTML5 <code>Canvas</code>.',
  },
  {
    type: 'paragraph',
    html: 'Następnie Canvas eksportuje obraz za pomocą <code>toBlob(\'image/jpeg\', quality)</code>, stosując standardową kompresję JPG. Ponieważ JPG nie obsługuje przezroczystości, wszelkie kanały alfa w pliku AVIF są wypełniane białym tłem przed eksportem. Rezultatem jest wysokiej jakości plik JPG gotowy do bezpośredniego pobrania, bez przesyłania ani jednego bajta do internetu.',
  },
  {
    type: 'tip',
    title: 'Idealna równowaga między kompresją a kompatybilnością',
    html: 'AVIF jest o 50% mniejszy niż JPG przy tej samej jakości — jednak JPG oferuje 100% kompatybilności z każdym oprogramowaniem. Jeśli otrzymasz obrazy AVIF i chcesz je edytować, wysłać e-mailem lub otworzyć w programach komputerowych, najpierw skonwertuj je do formatu JPG.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia: kiedy konwertować AVIF na JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Edycja w Photoshop, Lightroom, GIMP lub innym oprogramowaniu komputerowym.',
      'Udostępnianie obrazów użytkownikom na starszych urządzeniach lub systemach.',
      'Dołączanie do e-maili w celu zagwarantowania poprawnego wyświetlania.',
      'Publikowanie na platformach nieakceptujących formatu AVIF.',
      'Druk: profesjonalne usługi poligraficzne pracują natywnie z JPG.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: Uniwersalna kompatybilność w jednym kroku',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF to przyszłość kompresji obrazów, jednak obecne realia wymagają kompatybilności. Nasz konwerter pozwala Ci czerpać to, co najlepsze z obu światów: otrzymuj i przechowuj obrazy w formacie AVIF dla maksymalnej wydajności i błyskawicznie konwertuj je na JPG, gdy muszą zadziałać w dowolnym kontekście. Wszystko prywatnie, za darmo i bez limitów.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
