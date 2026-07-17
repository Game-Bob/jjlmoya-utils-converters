import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'konwerter-gif-na-jpg';
const title = 'Konwersja GIF na JPG Online';
const description =
  'Wyodrębnij pierwszą klatkę ze swoich plików GIF i przekonwertuj ją na JPG. Bez serwera. Przetwarzanie lokalne w przeglądarce. Darmowe i nieograniczone.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki GIF...',
  convertText: 'Aby błyskawicznie konwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Co dzieje się z animacjami po przejściu na format JPG?',
    answer:
      'Format JPG jest ściśle statyczny i nie obsługuje wielu klatek. Nasz konwerter wyodrębnia wyłącznie pierwszy obraz lub klatkę, która pojawia się w sekwencji pliku GIF.',
  },
  {
    question: 'Czy stracę jakieś efekty specjalne lub przezroczyste tło?',
    answer:
      'Tak, jest to naturalne zachowanie standardu JPG. Jeśli prześlesz plik GIF z przezroczystym tłem, automatycznie wstawimy pod spód jednolitą białą warstwę, aby uniknąć błędów w kolorach.',
  },
  {
    question: 'Czy mogę wyodrębnić zdjęcia JPG z pliku GIF bez zapisywania treści przez witrynę?',
    answer:
      'Absolutnie tak. Narzędzie jest aplikacją internetową opartą na interfejsie Canvas języka HTML5. Całe dekodowanie wykonuje procesor Twojego własnego urządzenia fizycznego.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Przeciągnij ruchome ciężkie pliki',
    text: 'Umieść lub przeciągnij dany plik GIF ze swojego folderu do naszego pola przetwarzania.',
  },
  {
    name: 'Czyste obliczanie pierwszej klatki',
    text: 'W ułamku sekundy animacja zostaje wyodrębniona, tworząc plik JPG z jednolitym białym tłem bez kontaktu z serwerami.',
  },
  {
    name: 'Pobierz je w postaci paczki ZIP',
    text: 'Pobierz pliki za pomocą przycisków lub używając archiwum ZIP, jeśli przetwarzasz dużą liczbę plików.',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter GIF na JPG: Wyodrębniaj klatki jako obrazy wysokiej jakości',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Pliki GIF od dziesięcioleci dominują w świecie krótkich animacji internetowych. Jednak ich animowana natura czyni je całkowicie bezużytecznymi jako miniatury, podglądy w mediach społecznościowych czy obrazy w dokumentach. Gdy potrzebujesz wyodrębnić konkretną klatkę z pliku GIF i przekształcić ją w wysokiej jakości obraz statyczny, konwersja na JPG jest najbardziej praktycznym i kompatybilnym rozwiązaniem.',
  },
  {
    type: 'title',
    text: 'GIF czy JPG? Formaty o przeciwstawnych przeznaczeniach',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Format GIF (Graphics Interchange Format) został zaprojektowany w 1987 roku z poważnym ograniczeniem, które utrzymuje się do dziś: może reprezentować tylko 256 kolorów na klatkę. To techniczne ograniczenie nie miało znaczenia w przypadku prostych animacji z ograniczoną paletą, ale sprawia, że jest to format ubogi wizualnie dla rzeczywistych ujęć fotograficznych. JPG natomiast może renderować miliony kolorów dzięki zaawansowanym algorytmom kompresji percepcyjnej.',
  },
  {
    type: 'paragraph',
    html: 'Wyodrębnienie klatki z pliku GIF i zapisanie jej jako JPG ma wiele zastosowań: generowanie miniatur dla odtwarzaczy wideo, tworzenie podglądów dla platform zarządzania treścią, uzyskiwanie obrazów statycznych do prezentacji lub po prostu archiwizowanie wizualnego momentu złożonej animacji. Wynikowy plik JPG będzie znacznie lżejszy niż oryginalny plik GIF i uniwersalnie kompatybilny.',
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
        description: 'Narzędzia przesyłające Twoje pliki na zdalny serwer w celu ich przetworzenia.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Twoje pliki GIF wędrują przez internet do serwerów osób trzecich',
          'Opóźnienia sieciowe przy przesyłaniu i pobieraniu',
          'Limity rozmiaru i liczby plików na sesję',
          'Ryzyko przechowywania danych na cudzych serwerach',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio na Twoim sprzęcie za pomocą technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Plik GIF nigdy nie opuszcza Twojego urządzenia',
          'Błyskawiczna prędkość bez oczekiwania na połączenie z siecią',
          'Brak limitów rozmiaru i liczby plików',
          'Całkowita prywatność: 0 bajtów wysyłanych na zewnątrz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak technicznie działa wyodrębnianie klatki',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Lokalna konwersja opiera się na mocy interfejsu Canvas API języka HTML5. Po załadowaniu pliku GIF przeglądarka dekoduje go w pamięci jako natywny element Image. Renderując go na niewidocznym płótnie (canvas), silnik graficzny przeglądarki automatycznie przechwytuje pierwszą klatkę sekwencji animacji.',
  },
  {
    type: 'paragraph',
    html: 'Ponieważ format JPG nie obsługuje przezroczystości, nasz algorytm stosuje jednolite białe tło przed eksportem. Metoda <code>toDataURL(\'image/jpeg\')</code> płótna generuje strumień bajtów JPG bezpośrednio w pamięci RAM Twojego komputera, bez żadnego połączenia sieciowego. Wynikowy plik jest natychmiast pobierany na Twoje urządzenie.',
  },
  {
    type: 'tip',
    title: 'Ograniczona paleta kolorów pliku GIF',
    html: 'Plik GIF może zawierać tylko 256 kolorów na klatkę. Wyodrębniony plik JPG odziedziczy tę ograniczoną paletę z oryginału: jeśli GIF posiadał przejścia tonalne lub był fotografią, może być widoczna pewna posteryzacja. Aby uzyskać najlepszy wynik, używaj plików GIF o prostych kolorach lub ilustracji.',
  },
  {
    type: 'title',
    text: 'Przypadki użycia i kompatybilność wynikowego pliku JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Miniatury i podglądy dla platform wideo i systemów CMS.',
      'Obrazy nagłówkowe do postów w mediach społecznościowych.',
      'Wstawianie do dokumentów Word, PowerPoint lub PDF.',
      'Pliki prezentacji i materiały marketingowe.',
      'Uniwersalna kompatybilność z przeglądarkami na Windows, macOS i urządzeniach mobilnych.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: klatka warta więcej niż cała animacja',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Animowany plik GIF o rozmiarze 2 MB może wyprodukować plik JPG pierwszej klatki o rozmiarze zaledwie 50-200 KB, zależnie od rozdzielczości. Nasze narzędzie wykonuje tę konwersję w sposób błyskawiczny, prywatny i bez limitów, bezpośrednio w Twojej przeglądarce. Bez serwerów, bez kont, bez czekania.',
  },
];


export const content: GifAJpgLocaleContent = {
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
