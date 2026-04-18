import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bild-konverter',
  title: 'Online Bild Konverter',
  description: 'Kostenlose Tools zur Konvertierung von Bildern zwischen den Formaten PNG, JPG, WebP, SVG, AVIF, GIF, BMP und ICO. Die Verarbeitung erfolgt vollständig lokal in Ihrem Browser, ohne Upload ins Internet.',
  seo: [
    {
      type: 'summary',
      title: 'Warum unsere Konverter nutzen',
      items: [
        '100% lokale Konvertierung: Ihre Bilder verlassen nie Ihr Gerät.',
        'Unterstützung für 21 Formatkombinationen: PNG, JPG, WebP, SVG, AVIF, GIF, BMP und ICO.',
        'Stapelverarbeitung mit ZIP-Download.',
        'Keine Registrierung, keine Limits, keine störende Werbung.',
      ],
    },
    {
      type: 'title',
      text: 'Bildkonvertierung: Der komplette Format-Leitfaden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Wahl des richtigen Bildformats hat direkten Einfluss auf die Web-Performance, die Gerätekompatibilität und die wahrgenommene visuelle Qualität. Unsere <strong>Online-Bild-Konverter</strong> decken die von Designern, Webentwicklern und Fotografen am häufigsten benötigten Konvertierungswege ab – ganz ohne externe Server, die die Vertraulichkeit Ihrer Dateien gefährden könnten.',
    },
    {
      type: 'title',
      text: 'PNG, JPG und WebP: Die drei Säulen des modernen Webdesigns',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>PNG-Format</strong> zeichnet sich durch verlustfreie Kompression und Transparenz-Unterstützung (Alpha-Kanal) aus und ist der Standard für Logos, Icons und Grafiken mit scharfen Kanten. Das <strong>JPG-Format</strong> bietet maximale universelle Kompatibilität und reduzierte Dateigrößen für Fotos, opfert jedoch bei jedem Speichervorgang etwas Qualität. Das von Google entwickelte <strong>WebP-Format</strong> vereint das Beste aus beiden Welten: 30-40 % bessere Kompression als PNG/JPG bei gleichzeitiger Unterstützung von Transparenz und Animationen; es ist heute das von den Core Web Vitals empfohlene Format zur Verbesserung des LCP.',
    },
    {
      type: 'table',
      headers: ['Format', 'Transparenz', 'Kompression', 'Bestens geeignet für'],
      rows: [
        ['PNG', 'Ja', 'Verlustfrei', 'Logos, Grafiken, Screenshots'],
        ['JPG', 'Nein', 'Verlustbehaftet', 'Fotos, große Bilder'],
        ['WebP', 'Ja', 'Verlustfrei/behaftet', 'Modernes Web, Performance'],
        ['SVG', 'Ja', 'Vektor', 'Skalierbare Icons, Animationen'],
        ['AVIF', 'Ja', 'Überlegen', 'Next-Gen Web'],
        ['ICO', 'Ja', 'Bitmap', 'Favicons, Windows-Icons'],
      ],
    },
    {
      type: 'title',
      text: 'Formate der nächsten Generation: AVIF und WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das <strong>AVIF-Format</strong> (AV1 Image File Format) ist der technologische Nachfolger von WebP und bietet bei gleicher subjektiver Qualität bis zu 50 % geringere Dateigrößen als JPG. Obwohl seine Verbreitung schnell zunimmt, macht die eingeschränkte Kompatibilität in älteren Systemen die Konvertierung von AVIF in etabliertere Formate wie JPG, PNG oder WebP zu einem häufigen Bedarf in Produktions-Workflows.',
    },
    {
      type: 'tip',
      title: 'Tipp für Web Performance',
      html: 'Um die Ladegeschwindigkeit Ihrer Seite zu maximieren, verwenden Sie WebP als primäres Format auf Ihrer Website mit JPG/PNG-Fallbacks für ältere Browser. Das HTML-Element <code>picture</code> mit mehreren <code>source</code>-Tags ermöglicht es Ihnen, das optimale Format basierend auf der Unterstützung des besuchenden Browsers bereitzustellen.',
    },
    {
      type: 'title',
      text: 'SVG, BMP und ICO: Spezielle Anwendungsfälle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG-Dateien</strong> sind mathematische Vektoren, die verlustfrei auf jede Auflösung skaliert werden können, ideal für Logos und Grafikdesign. Viele Plattformen und Bearbeitungsanwendungen unterstützen sie jedoch nicht direkt, weshalb eine Rasterung in PNG oder JPG für die Verteilung erforderlich sein kann. <strong>BMP-Dateien</strong> sind zwar für die Webnutzung veraltet, bleiben aber in Windows-Umgebungen und älterer Bearbeitungssoftware gebräuchlich. Schließlich ist das <strong>ICO-Format</strong> der Standard für Web-Favicons und die Windows-Icon-Anpassung, was eine spezifische binäre Header-Struktur erfordert, die unser Konverter nativ generiert.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Kombinationen', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privatsphäre', value: '100% lokal', icon: 'mdi:shield-lock' },
        { label: 'Formate', value: '8 Typen', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Absolute Privatsphäre: Konvertierung ohne Server',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Gegensatz zu anderen Online-Tools, die Ihre Bilder auf entfernte Server hochladen (mit den damit verbundenen Datenschutz- und Sicherheitsrisiken), nutzen unsere Konverter ausschließlich native Browser-APIs: die <strong>Canvas 2D API</strong> für die Rasterung, die <strong>FileReader API</strong> zum lokalen Lesen von Dateien und <strong>Blob/URL.createObjectURL</strong> für Downloads. Das bedeutet, dass Sie vertrauliche Bilder, Firmenlogos oder private Dokumente mit absoluter Sicherheit konvertieren können.',
    },
  ],
};
