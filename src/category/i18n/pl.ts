import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'konwertery-obrazow',
  title: 'Konwertery Obrazów Online',
  description: 'Darmowe narzędzia do konwersji obrazów między formatami PNG, JPG, WebP, SVG, AVIF, GIF, BMP i ICO. Wszystko jest przetwarzane lokalnie w Twojej przeglądarce, bez przesyłania plików do Internetu.',
  seo: [
    {
      type: 'summary',
      title: 'Dlaczego warto korzystać z naszych konwerterów',
      items: [
        'W 100% lokalna konwersja: Twoje obrazy nigdy nie opuszczają Twojego urządzenia.',
        'Wsparcie dla 21 kombinacji formatów: PNG, JPG, WebP, SVG, AVIF, GIF, BMP i ICO.',
        'Przetwarzanie wsadowe z możliwością pobrania archiwum ZIP.',
        'Bez rejestracji, bez limitów, bez uciążliwych reklam.',
      ],
    },
    {
      type: 'title',
      text: 'Konwersja Obrazu: Kompleksowy Przewodnik po Formatach',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wybór właściwego formatu obrazu ma bezpośredni wpływ na wydajność strony, kompatybilność urządzeń i subiektywnie postrzeganą jakość wizualną. Nasze <strong>konwertery obrazów online</strong> obsługują najczęściej poszukiwane przez projektantów, deweloperów i fotografów ścieżki konwersji, a wszystko to bez polegania na zewnętrznych serwerach, które mogłyby naruszyć prywatność Twoich plików.',
    },
    {
      type: 'title',
      text: 'PNG, JPG i WebP: Trzy Filary Nowoczesnego Projektowania WWW',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Format PNG</strong> wyróżnia się bezstratną kompresją i obsługą przezroczystości (kanał alfa), będąc standardem dla logo, ikon i grafik o ostrych krawędziach. <strong>Format JPG</strong> oferuje maksymalną uniwersalną kompatybilność i mniejsze rozmiary dla zdjęć, ale traci na jakości przy każdym zapisie. Opracowany przez Google <strong>format WebP</strong> łączy w sobie najlepsze cechy obu tych rozwiązań: o 30-40% lepszą kompresję niż PNG/JPG przy zachowaniu wsparcia dla przezroczystości i animacji. Jest to obecnie format zalecany przez Core Web Vitals w celu poprawy wskaźnika LCP.',
    },
    {
      type: 'table',
      headers: ['Format', 'Przezroczystość', 'Kompresja', 'Najlepszy do'],
      rows: [
        ['PNG', 'Tak', 'Bezstratna', 'Logo, grafiki, zrzuty ekranu'],
        ['JPG', 'Nie', 'Stratna', 'Zdjęcia, duże obrazy'],
        ['WebP', 'Tak', 'Bezstratna/Stratna', 'Nowoczesne WWW, wydajność'],
        ['SVG', 'Tak', 'Wektorowa', 'Skalowalne ikony, animacje'],
        ['AVIF', 'Tak', 'Najwyższa', 'WWW nowej generacji'],
        ['ICO', 'Tak', 'Bitmapowa', 'Favikony, ikony Windows'],
      ],
    },
    {
      type: 'title',
      text: 'Formaty Nowej Generacji: AVIF i WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Format AVIF</strong> (AV1 Image File Format) jest technologicznym następcą WebP, oferującym do 50% mniejszy rozmiar pliku niż JPG przy zachowaniu identycznej jakości wizualnej. Choć jego popularność szybko rośnie, ograniczona kompatybilność ze starszymi systemami sprawia, że konwersja z AVIF na bardziej utrwalone formaty, takie jak JPG, PNG czy WebP, jest częstą potrzebą w profesjonalnych projektach.',
    },
    {
      type: 'tip',
      title: 'Wskazówka dotycząca wydajności WWW',
      html: 'Aby zmaksymalizować szybkość ładowania strony, używaj WebP jako głównego formatu w swojej witrynie, zapewniając JPG/PNG jako alternatywę (fallback) dla starszych przeglądarek. Element HTML <code>picture</code> z wieloma znacznikami <code>source</code> pozwala przeglądarce na wybór optymalnego formatu w zależności od stopnia jego wsparcia.',
    },
    {
      type: 'title',
      text: 'SVG, BMP i ICO: Specyficzne Zastosowania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Pliki SVG</strong> to wektory matematyczne, które można skalować bezstratnie do dowolnej rozdzielczości, co czyni je idealnymi dla logo i projektów graficznych. Jednak wiele platform i aplikacji do edycji nie wspiera ich bezpośrednio, co wymusza ich rasteryzację do formatu PNG lub JPG w celu publikacji. <strong>Pliki BMP</strong>, choć przestarzałe w kontekście WWW, wciąż są powszechnie używane w środowiskach Windows i starszym oprogramowaniu graficznym. Z kolei <strong>format ICO</strong> jest standardem dla favikon internetowych i ikon systemowych Windows, wymagającym specyficznej struktury nagłówka binarnego, którą nasz konwerter generuje natywnie.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Kombinacje', value: '21', icon: 'mdi:image-sync' },
        { label: 'Prywatność', value: '100% lokalnie', icon: 'mdi:shield-lock' },
        { label: 'Formaty', value: '8 typów', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Całkowita Prywatność: Konwersja bez Serwerów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W przeciwieństwie do innych narzędzi online, które przesyłają Twoje obrazy na zdalne serwery (co niesie ze sobą ryzyko dla prywatności i bezpieczeństwa), nasze konwertery korzystają wyłącznie z natywnych API przeglądarki: <strong>Canvas 2D API</strong> do rasteryzacji, <strong>FileReader API</strong> do lokalnego odczytu plików oraz <strong>Blob/URL.createObjectURL</strong> do pobierania wyników. Oznacza to, że możesz konwertować poufne obrazy, logo firmowe czy dokumenty prywatne z zachowaniem pełnego bezpieczeństwa.',
    },
  ],
};
