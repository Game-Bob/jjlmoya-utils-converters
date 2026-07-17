import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'konwerter-svg-na-jpg';
const title = 'Konwertuj SVG na JPG Online i Za Darmo';
const description =
  'Konwertuj pliki wektorowe SVG na JPG w swojej przeglądarce. Renderowanie w wysokiej rozdzielczości 2x. Bez przesyłania plików. Za darmo i w 100% prywatnie.';

const ui: ImageConverterUI = {
  dragText: 'Przeciągnij pliki SVG...',
  convertText: 'Aby błyskawicznie przekonwertować je na JPG',
  selectFiles: 'Wybierz pliki',
  processedFiles: 'Przetworzone pliki',
  downloadAll: 'Pobierz wszystko (.zip)',
  pending: 'Oczekujące',
  bibliographyTitle: 'Bibliografia',
  faqTitle: 'Często Zadawane Pytania',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Dlaczego warto konwertować SVG na JPG?',
    answer:
      'Format JPG oferuje maksymalną kompatybilność na wszystkich typach urządzeń; konwersja SVG na JPG to najlepszy sposób na upewnienie się, że każdy będzie mógł zobaczyć Twój projekt bez problemów z wyświetlaniem.',
  },
  {
    question: 'Co dzieje się z przezroczystością SVG?',
    answer:
      'Podczas konwersji na JPG (który nie obsługuje przezroczystości), do Twojej kompozycji wektorowej zostanie automatycznie dodane nieprzezroczyste białe tło.',
  },
  {
    question: 'Jaką rozdzielczość będzie miał wynikowy plik JPG?',
    answer:
      'Narzędzie renderuje plik SVG w podwójnej skali (2x), aby zagwarantować wysoką rozdzielczość odpowiednią dla ekranów Retina i profesjonalnych zastosowań.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Wstaw pliki wektorowe',
    text: 'Upuść pliki SVG w górnym obszarze, aby przygotować listę do eksportu.',
  },
  {
    name: 'Rasteryzacja do JPG',
    text: 'Narzędzie przekonwertuje wektory na piksele o wysokiej rozdzielczości i błyskawicznie wygeneruje plik JPG.',
  },
  {
    name: 'Pobierz wyniki',
    text: 'Pobierz pliki JPG pojedynczo lub jako pakiet ZIP.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konwerter SVG na JPG: Przenieś swoje wektory na dowolną platformę',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Format <strong>SVG</strong> jest natywnym językiem nowoczesnej sieci: lekki, skalowalny, edytowalny. Istnieją jednak całe platformy, które po prostu nie rozumieją wektorów. Media społecznościowe, klienci poczty e-mail, dokumenty Word, aplikacje do drukowania i zdecydowana większość oprogramowania w świecie rzeczywistym pracują na obrazach rastrowych. <strong>JPG</strong> jest uniwersalnym wspólnym mianownikiem: akceptowanym wszędzie, bez wyjątków, bez wtyczek i bez potrzeby dodatkowych konwersji.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: Kiedy wektor musi stać się zdjęciem',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG przechowuje obraz jako instrukcje matematyczne. Ta wektorowa natura sprawia, że jest idealny dla sieci, ale niewidoczny dla świata analogowego i starszego oprogramowania. Plik SVG wysłany pocztą e-mail może pojawić się jako niezrozumiały tekst XML w kliencie odbiorcy. Plik SVG dołączony do dokumentu Word może w ogóle nie zostać wyrenderowany w starszych wersjach pakietu Office.',
  },
  {
    type: 'paragraph',
    html: 'JPG konwertuje każdy obraz na macierz pikseli z informacjami o kolorze skompresowanymi przez algorytm JPEG. Ponieważ nie obsługuje kanału alfa, konwerter automatycznie łączy tło z jednolitym białym kolorem. W zamian otrzymujesz plik, który otwiera się na <em>każdym urządzeniu na planecie</em>: starych telefonach komórkowych, drukarkach, telewizorach smart, aplikacjach do edycji sprzed dwudziestu lat. Jest to format najmniejszego wspólnego mianownika i w wielu kontekstach najcenniejszy.',
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
          'Twój kod SVG (z zastrzeżonymi danymi projektowymi) trafia na zewnętrzne serwery',
          'Niespójne renderowanie czcionek i gradientów',
          'Połączenie internetowe wymagane do każdej konwersji',
          'Jakość wyjściowa JPG nie zawsze jest konfigurowalna',
        ],
      },
      {
        title: 'Nasza lokalna architektura',
        description: 'Bezpośrednie przetwarzanie na Twoim sprzęcie przy użyciu technologii Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero bajtów Twojego pliku SVG nie opuszcza przeglądarki',
          'Wierne renderowanie przy użyciu natywnego silnika przeglądarki',
          'JPG w rozdzielczości 2x dla maksymalnej ostrości',
          'Białe tło automatycznie stosowane zgodnie ze standardem JPG',
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
    html: 'Plik SVG jest ładowany do elementu <strong>Image</strong> przeglądarki, który używa własnego silnika renderowania wektorowego do interpretacji kodu XML. Wynik wizualny jest rysowany na <strong>HTML5 Canvas</strong> z uprzednim wypełnieniem tła na biało (wymagane, ponieważ format JPG nie obsługuje przezroczystości) w podwójnej skali, aby zmaksymalizować rozdzielczość wyjściową.',
  },
  {
    type: 'paragraph',
    html: 'Metoda <code>toDataURL(\'image/jpeg\', 0.92)</code> konwertuje piksele płótna na wysokiej jakości plik JPG. Kolory SVG mogą ulec nieznacznym zmianom ze względu na konwersję przestrzeni barw w kompresji JPEG. Dlatego zaleca się podgląd wyniku przed użyciem go w profesjonalnych pracach drukarskich, w których kluczowa jest wierność chromatyczna.',
  },
  {
    type: 'tip',
    title: 'Wskazówka dotycząca zastosowań w druku',
    html: 'Tła i gradienty SVG mogą wyglądać nieco inaczej w formacie JPG ze względu na różnice w profilach kolorów w kompresji JPEG. Zawsze sprawdzaj wynik przed wysłaniem do drukarki lub użyciem go w drukowanych materiałach marketingowych, gdzie ważna jest dokładność kolorów marki.',
  },
  {
    type: 'title',
    text: 'Zastosowania i kompatybilność',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Udostępnianie logo i ilustracji SVG na Facebooku, Twitterze lub LinkedIn.',
      'Dołączanie grafiki wektorowej do wiadomości e-mail za pośrednictwem programu Outlook lub Gmail.',
      'Wstawianie projektów SVG do dokumentów Word, Excel lub prezentacji.',
      'Publikowanie zdjęć produktów w sklepach internetowych, które nie obsługują formatu SVG.',
      'Przygotowywanie plików dla usług druku na żądanie.',
    ],
  },
  {
    type: 'title',
    text: 'Podsumowanie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Świat rzeczywisty wciąż mówi w pikselach. To narzędzie w kilka sekund przełoży Twoje wektory SVG na uniwersalny język JPG, oferując renderowanie w wysokiej rozdzielczości i bez opuszczania przeglądarki przez Twoje autorskie projekty.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
