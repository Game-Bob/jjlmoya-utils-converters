import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'konwerter-png-na-jpg';
const title = 'Konwertuj PNG na JPG Online';
const description =
  'Błyskawicznie konwertuj swoje obrazy PNG do formatu JPG z szybką kompresją na własnym komputerze. Bez przesyłania zdjęć do Internetu. Optymalizacja wsadowa.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki PNG...',
  convertText: 'Aby błyskawicznie konwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekiwanie',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często zadawane pytania',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Dlaczego wybrać nasz lokalny konwerter PNG na JPG?',
    answer:
      'W przeciwieństwie do zwykłych usług narzędzie przetwarza pliki w całości w przeglądarce. Obrazy nie trafiają na zdalny dysk, więc zachowujesz kontrolę i prywatność danych.',
  },
  {
    question: 'JPG czy PNG: który format wybrać?',
    answer:
      'PNG sprawdza się przy logotypach i przezroczystości. JPG lepiej nadaje się do zdjęć i banerów, ponieważ tworzy mniejsze pliki i przyspiesza ładowanie strony.',
  },
  {
    question: 'Jak działa konwersja bez wysyłania pliku?',
    answer:
      'Wykorzystujemy Canvas HTML5. Przeglądarka odtwarza obraz na niewidocznym płótnie, wypełnia przezroczystość bielą i bezpośrednio tworzy dane JPEG do pobrania.',
  },
  {
    question: 'Czy narzędzie jest bezpieczne dla poufnych dokumentów?',
    answer:
      'Tak. W bankowości, medycynie i prawie bezpieczniej nie wysyłać obrazów do zewnętrznej usługi. Dane pozostają w pamięci urządzenia i znikają po zamknięciu karty.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Wybór plików',
    text: 'Przygotuj swoje pliki PNG w folderze i przeciągnij je wszystkie razem do obszaru przetwarzania lub wyszukaj je za pomocą eksploratora.',
  },
  {
    name: 'Błyskawiczne przetwarzanie',
    text: 'Sprawdź, czy status zmieni się na \"Gotowe\" dla każdego pliku, podczas gdy przeglądarka optymalizuje wagę lokalnie.',
  },
  {
    name: 'Zoptymalizowane pobieranie',
    text: 'Zapisz swoje nowe pliki JPG jeden po drugim lub użyj przycisku \"Pobierz wszystko\", aby uzyskać skompresowany plik ZIP ze wszystkimi obrazami.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter PNG na JPG: praktyczny przewodnik optymalizacji obrazów',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'W projektowaniu cyfrowym i tworzeniu stron liczy się szybkość. PNG zachowuje przezroczystość i jakość bez strat, ale może tworzyć duże pliki. JPG pomaga przyspieszyć strony i zmniejszyć rozmiar załączników.',
  },
  {
    type: 'title',
    text: 'JPG czy PNG: co wybrać?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Nie ma jednego najlepszego formatu. PNG sprawdza się przy interfejsach, logotypach i przezroczystości, ale kompresja bez strat może znacznie zwiększyć rozmiar pliku.',
  },
  {
    type: 'paragraph',
    html: 'JPG usuwa szczegóły trudne do zauważenia i tworzy lekkie obrazy. Pasuje do zdjęć, banerów i mediów społecznościowych, gdy ważne jest szybkie pobieranie.',
  },
  {
    type: 'title',
    text: 'Porównanie techniczne: lokalnie czy w chmurze',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Konwertery w chmurze',
        description: 'Zwykłe usługi wysyłające zdjęcia na zdalny serwer.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Opóźnienia sieci (wysyłanie/pobieranie)',
          'Ryzyko wycieku prywatnych danych',
          'Limity rozmiaru pliku',
          'Reklamy i moduły śledzące',
        ],
      },
      {
        title: 'Nasza architektura lokalna',
        description: 'Bezpośrednie przetwarzanie na urządzeniu w natywnym JavaScripcie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Natychmiastowa praca bez sieci',
          'Gwarantowana prywatność (zero wysłanych bajtów)',
          'Brak limitu MB na plik',
          'Czysty, profesjonalny interfejs',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Jak działa konwersja techniczna',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konwersja bez serwera korzysta z nowoczesnych API przeglądarki. Po wybraniu pliku powstaje tymczasowy Blob w pamięci RAM, który trafia na niewidoczny Canvas HTML5.',
  },
  {
    type: 'paragraph',
    html: 'JPG nie obsługuje przezroczystości, więc przezroczyste obszary wypełniamy bielą przed renderowaniem. Canvas tworzy następnie dane JPEG zapisywane bezpośrednio na urządzeniu.',
  },
  {
    type: 'tip',
    title: 'Wskazówka SEO: właściwy rozmiar',
    html: 'Lżejszy obraz może poprawić LCP i wyniki PageSpeed. Zamiana dużego PNG na mniejszy JPG jest przydatna w nagłówkach oraz na stronach z wieloma grafikami.',
  },
  {
    type: 'title',
    text: 'Bezpieczeństwo dla firm i profesjonalistów',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'W bankowości, medycynie i prawie wysyłanie plików do zewnętrznych usług może być ryzykowne. Tutaj przetwarzanie odbywa się w pamięci przeglądarki bez przesyłania do chmury.',
  },
  {
    type: 'title',
    text: 'Zgodność wyniku',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Przeglądarki obrazów w Windows, macOS i telefonach.',
      'Media społecznościowe (Instagram, LinkedIn i inne).',
      'Programy biurowe (Word, PowerPoint).',
      'Systemy zarządzania treścią (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Wniosek: optymalizuj świadomie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ten konwerter łączy szybkość z prywatnością. Niezależnie od tego, czy tworzysz strony, czy używasz ich w domu, zmniejszysz obrazy bez przekazywania plików firmom zewnętrznym.',
  },
];


export const content: PngAJpgLocaleContent = {
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
