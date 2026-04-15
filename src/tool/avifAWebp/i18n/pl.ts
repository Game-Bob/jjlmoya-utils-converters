import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'konwerter-avif-na-webp';
const title = 'Konwertuj AVIF na WebP Online';
const description =
  'Konwertuj obrazy AVIF na WebP dla lepszej kompatybilności. Przetwarzanie lokalne bez serwerów. Darmowe, prywatne i nielimitowane.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki AVIF...',
  convertText: 'Aby błyskawicznie konwertować je na WebP',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Jaka jest rzeczywista różnica między konwersją na WebP a inne formaty?',
    answer:
      'WebP oferuje to, co najlepsze z obu światów: kompresję tak niesamowitą jak JPG, przy jednoczesnym zachowaniu możliwości obsługi czystych przezroczystości jak w PNG. Zmiana AVIF na WebP maksymalizuje kompatybilność w sieci, zachowując wszystkie jego zalety.',
  },
  {
    question: 'Jak udaje się to zmienić bez serwera i tak szybko?',
    answer:
      'Wykorzystujemy wbudowane moduły dekodujące i obiekt Image JavaScript HTML5, co pozwala na odczyt pliku AVIF w pamięci lokalnej i wyodrębnienie zoptymalizowanego pliku WebP w rekordowym czasie.',
  },
  {
    question: 'Czy format WebP jest dziś w pełni kompatybilny?',
    answer:
      'W przeciwieństwie do raczkującego formatu AVIF, format WebP cieszy się bardzo szerokim wsparciem wśród przeglądarek takich jak Chrome, Firefox i Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Wstaw pliki zdjęć',
    text: 'Przenieś i upuść wszystkie zaznaczone pliki w formacie AVIF na nasz obszar roboczy.',
  },
  {
    name: 'Algorytmiczne tłumaczenie bajtów',
    text: 'Nasz silnik przetwarza algorytmy bez przesyłania czegokolwiek i tworzy dokładne iteracje oparte na skompresowanym WebP.',
  },
  {
    name: 'Pobierz gotowe pliki',
    text: 'Kliknij panel i odbierz pliki w paczkach ZIP lub pojedynczo, aby opublikować je bezpośrednio.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Google WebP Format Overview',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter AVIF na WebP: Nowoczesna i bezpieczna alternatywa dla sieci',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF to najbardziej zaawansowany format obrazu dostępny obecnie: mniejszy niż WebP, mniejszy niż JPG, o wyższej jakości wizualnej. Jednak jego adaptacja była nierównomierna — Safari nie wspierało go do 2024 roku, a wiele starszych urządzeń mobilnych go nie rozpoznaje. WebP natomiast od lat cieszy się mianem nowoczesnego standardu sieciowego z ponad 95% globalnym wsparciem. Konwersja AVIF na WebP to pragmatyczna decyzja, gdy potrzebujesz nowoczesności bez ryzykowania kompatybilności.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: Najnowszy kontra Najbezpieczniejszy',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF oferuje najbardziej zaawansowaną dostępną kompresję — zazwyczaj o 20-30% mniejszą niż WebP przy tej samej jakości. Jego technologia oparta na AV1 jest najnowocześniejsza w branży. Jednak wsparcie dla AVIF wciąż ma luki: starsze wersje Safari, niektóre przeglądarki na starszym Androidzie i niektóre stacjonarne przeglądarki obrazów go nie rozpoznają. W przypadku produkcji internetowej skierowanej do szerokiego i zróżnicowanego grona odbiorców stanowi to ryzyko.',
  },
  {
    type: 'paragraph',
    html: 'WebP ma znacznie solidniejszą historię wsparcia. Chrome przyjął go w 2010 roku, Firefox i Edge poszły w jego ślady, a Safari dołączyło w 2020. Dzięki ponad 95% globalnemu zasięgowi w przeglądarkach, WebP jest bezpiecznym wyborem dla każdej strony internetowej, która nie chce dostarczać formatów zapasowych (fallback). Obsługuje przezroczystości, kompresję stratną i bezstratną, i generuje znacznie mniejsze pliki niż JPG czy PNG.',
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
          'Twoje prywatne zdjęcia przechodzą przez serwery zewnętrzne',
          'Opóźnienia sieciowe spowalniające pracę',
          'Limity plików na darmową konwersję',
          'Zależność od usług zewnętrznych, które mogą ulec zmianie',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio w przeglądarce za pomocą technologii Vanilla JS i Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Całkowita prywatność — 0 bajtów opuszcza Twoje urządzenie',
          'Błyskawiczne tempo bez zależności od sieci',
          'Brak limitów rozmiaru i liczby plików',
          'Działa bez połączenia z Internetem',
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
    html: 'Przeglądarki Chrome, Firefox i Edge posiadają natywne dekodery AVIF. Po załadowaniu pliku silnik obrazów przeglądarki dekoduje go w pamięci RAM, zachowując informacje o kanale alfa. Obraz jest rysowany na niewidocznym elemencie <code>Canvas</code> HTML5 przy użyciu kontekstu 2D, który poprawnie zachowuje przezroczystości.',
  },
  {
    type: 'paragraph',
    html: 'Eksport odbywa się za pomocą <code>toBlob(\'image/webp\', quality)</code>. Przeglądarka wewnętrznie stosuje algorytm kompresji WebP, generując obiekt Blob zawierający kanał alfa, jeśli oryginalny obraz go posiadał. Ten Blob jest zamieniany na bezpośredni link do pobrania. Cały proces odbywa się w mikrosekundach bez żadnej komunikacji z serwerami zewnętrznymi.',
  },
  {
    type: 'tip',
    title: 'WebP: pragmatyczny wybór nowoczesnego programisty',
    html: 'WebP ma ponad 95% wsparcia w przeglądarkach — AVIF rośnie, ale nie osiągnął jeszcze tego poziomu. W przypadku witryn produkcyjnych bez adaptacyjnego wykrywania formatu, WebP jest bezpiecznym wyborem, który obejmuje niemal każdą grupę odbiorców. Konwertuj pliki AVIF na WebP i pewnie dostarczaj nowoczesne obrazy.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia: kiedy wybrać WebP zamiast AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Strony internetowe potrzebujące wsparcia w przeglądarkach od 2020 roku bez polyfilli.',
      'Sieci CDN i systemy dostarczania obrazów akceptujące WebP, ale nie AVIF.',
      'Hybrydowe aplikacje mobilne z elementami WebView nieobsługującymi AVIF.',
      'Nowoczesne e-maile HTML, gdzie WebP ma szersze wsparcie niż AVIF.',
      'Platformy CMS i e-commerce z ugruntowanym wsparciem dla obrazów WebP.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: Nowoczesność z gwarantowaną kompatybilnością',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF to czołówka kompresji obrazów, ale WebP to niezawodny i uniwersalny wybór nowoczesnego ekosystemu sieciowego. Dzięki naszemu narzędziu błyskawicznie przejdziesz z najnowszego formatu na ten najlepiej wspierany — bez przesyłania czegokolwiek na serwer, z zachowaniem pełnej prywatności i bez limitów rozmiaru.',
  },
];


export const content: AvifAWebpLocaleContent = {
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
