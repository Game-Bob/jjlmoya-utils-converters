import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'konwerter-bmp-na-png';
const title = 'Konwerter BMP na PNG';
const description =
  'Konwertuj obrazy BMP na PNG bez utraty jakości. Nowoczesna kompresja bez artefaktów. Bez przesyłania plików. Darmowy i w 100% prywatny.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki BMP...',
  convertText: 'Aby błyskawicznie konwertować je na PNG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Jaka jest główna różnica między BMP a PNG?',
    answer:
      'Zarówno BMP, jak i PNG to formaty bezstratne. Różnica polega na optymalizacji: PNG wykorzystuje nowoczesne algorytmy kompresji, aby zapisać ten sam obraz, zajmując 5 lub 10 razy mniej pamięci niż BMP.',
  },
  {
    question: 'Czy konwersja jest naprawdę prywatna?',
    answer:
      'Tak. Całe przetwarzanie obrazu jest wykonywane przez Twój komputer. Absolutnie nikt nie ma dostępu do Twoich plików podczas lokalnego transferu.',
  },
  {
    question: 'Dlaczego warto wybrać PNG zamiast JPEG w tym przypadku?',
    answer:
      'Jeśli posiadasz plik BMP, to dlatego, że obraz ma precyzyjne kolory. Przekonwertowanie BMP na stratny standard JPG zniekształciłoby te czyste kolory. PNG chroni tę wierność.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Wstaw zdjęcie',
    text: 'Przesuń spokojnie pliki źródłowe BMP do naszej strefy upuszczania elementów internetowych.',
  },
  {
    name: 'Konwersja bez transmisji sieciowej',
    text: 'Zobacz w zaledwie sekundę czyste przetwarzanie wykonane lokalnie przez silnik JS Twojej przeglądarki.',
  },
  {
    name: 'Uzyskaj czyste pliki PNG',
    text: 'Pobierz kopie w formacie PNG pojedynczo lub w skompresowanym pakiecie.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter BMP na PNG: Bezstratny zamiennik formatu BMP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP to format bez kompresji, który zajmuje ogromną ilość miejsca bez żadnych korzyści technicznych w porównaniu do PNG. Oba te formaty są bezstratne: przechowują każdy piksel z absolutną precyzją. PNG dodaje jednak bezstratną kompresję za pomocą algorytmu Deflate, co zmniejsza rozmiar pliku od 3 do 5 razy bez poświęcania ani jednego bitu informacji wizualnej. PNG to w gruncie rzeczy to, czym BMP zawsze chciał być.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: ta sama jakość, radykalnie inna waga',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Podstawowa różnica między BMP a PNG nie polega na jakości obrazu - oba formaty są bezstratne - ale na efektywności przechowywania. BMP przechowuje surowe piksele: bez kompresji, bez optymalizacji, bez zważania na miejsce. PNG analizuje powtarzające się wzorce pikseli i koduje je w sposób kompaktowy za pomocą Deflate, tego samego algorytmu, którego używa ZIP.',
  },
  {
    type: 'paragraph',
    html: 'Oprócz doskonałej kompresji PNG dodaje cechę, której BMP nigdy nie posiadał: pełny kanał alfa dla przezroczystości. Zrzuty ekranu, grafika interfejsu, logo, diagramy techniczne: wszystkie te typy obrazów zyskują ogromnie na konwersji do PNG, która zachowuje każdą dokładną wartość koloru, redukując jednocześnie wagę pliku do ułamka oryginału.',
  },
  {
    type: 'title',
    text: 'Porównanie architektury: lokalna kontra chmurowa',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Usługi przetwarzające pliki BMP na serwerach zewnętrznych.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Twoje obrazy robocze wędrują przez internet',
          'Czas oczekiwania proporcjonalny do rozmiaru BMP',
          'Limity rozmiaru w planach darmowych',
          'Ryzyko analizy lub zatrzymania Twoich plików',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Przetwarzanie bezpośrednio na Twoim sprzęcie za pomocą technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP jest przetwarzany lokalnie, nigdy nie opuszcza Twojego urządzenia',
          'Natychmiastowa konwersja w milisekundach',
          'Brak limitów rozmiaru i liczby plików',
          'Całkowita prywatność: 0 bajtów wysłanych na zewnątrz',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa lokalna konwersja z BMP na PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Proces wykorzystuje interfejs API Canvas języka HTML5. Plik BMP jest odczytywany za pomocą interfejsu API <code>FileReader</code> przeglądarki i dekodowany jako obiekt Blob w pamięci. Ten Blob jest rysowany na niewidocznym płótnie HTML5. Następnie metoda <code>toDataURL(\'image/png\')</code> stosuje natywny algorytm kompresji PNG przeglądarki i generuje wynikowy plik.',
  },
  {
    type: 'paragraph',
    html: 'W przeciwieństwie do konwersji na JPG, konwersja na PNG jest całkowicie bezstratna: każda wartość koloru oryginalnego BMP jest dokładnie zachowana w wynikowym pliku PNG. Nie ma artefaktów, nie ma wygładzania krawędzi, nie ma utraty informacji. Plik końcowy jest wizualnie identyczny z BMP, ale zajmuje od 3 do 5 razy mniej miejsca na dysku.',
  },
  {
    type: 'paragraph',
    html: 'Jeśli pracujesz ze starszym oprogramowaniem eksportującym BMP (maszyny przemysłowe, systemy sterowania, oprogramowanie do diagnostyki medycznej), konwersja na PNG jest najlepszą decyzją. PNG jest kompatybilny z absolutnie wszystkimi nowoczesnymi programami, zachowuje idealną wierność kolorów i zajmuje do 5 razy mniej miejsca. To najprostsza i najbezpieczniejsza możliwa migracja.',
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
      'Zrzuty ekranu i grafiki interfejsu z zachowaniem dokładnych kolorów.',
      'Obrazy dokumentacji technicznej i diagramy oprogramowania.',
      'Eksporty z programów CAD, systemów przemysłowych i starszego oprogramowania.',
      'Logo i elementy identyfikacji wizualnej z dodaną przezroczystością.',
      'Kompatybilność z programami Adobe Photoshop, GIMP, Figma i wszystkimi nowoczesnymi edytorami.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie: PNG jest tym, czym BMP zawsze powinien był być',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja z BMP na PNG to najbardziej naturalna modernizacja pliku graficznego: ta sama bezstratna jakość, większa kompatybilność, obsługa przezroczystości i od 3 do 5 razy mniejsza waga. Nasze narzędzie wykonuje tę konwersję w milisekundach, bezpośrednio w przeglądarce, bez przesyłania plików na serwer.',
  },
];


export const content: BmpAPngLocaleContent = {
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
