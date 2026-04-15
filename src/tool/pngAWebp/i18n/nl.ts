import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-naar-webp-converter';
const title = 'Converteer PNG naar WebP Online en Gratis';
const description =
  'Converteer PNG-afbeeldingen naar WebP in je browser. Tot 40% kleinere bestandsgrootte. Behoudt transparantie. Geen bestandsuploads. Gratis en privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep PNG-bestanden...',
  convertText: 'Om ze direct naar WebP te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Waarom PNG naar WebP converteren?',
    answer:
      'WebP biedt tot 40% betere compressie dan PNG bij dezelfde kwaliteit, terwijl het ook Alpha-transparantie ondersteunt. Het is het formaat dat wordt aanbevolen door Google PageSpeed Insights.',
  },
  {
    question: 'Gaat transparantie verloren tijdens het proces?',
    answer:
      'Nee. De technische implementatie van WebP ondersteunt het alfakanaal. De transparanties van de originele PNG blijven behouden in het nieuwe WebP-bestand.',
  },
  {
    question: 'Gaan mijn afbeeldingen naar een server?',
    answer:
      'Nee. De code draait exclusief in je browser (Client-Side). We bekijken, registreren of bewaren de afbeeldingen die je converteert nooit.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Voeg je PNG\'s toe',
    text: 'Sleep je grote PNG-bestanden naar het uploadgedeelte of gebruik de traditionele interactieve kiezer.',
  },
  {
    name: 'Kanaaldetectie',
    text: 'De lokale rendering-engine detecteert en exporteert de pixelcompositie naar het geoptimaliseerde WebP-formaat.',
  },
  {
    name: 'Directe Download',
    text: 'Download je sterk gecomprimeerde WebP-bestanden afzonderlijk of bundel ze samen met de ZIP-pakketconverter.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebP Implementatiedetails',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitals Richtlijnen',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Beeldformaten',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG naar WebP Converter: Transparantie en moderne compressie voor het web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> is decennialang het referentieformaat geweest voor webafbeeldingen met transparantie — logo\'s, pictogrammen, UI-elementen, productafbeeldingen op uitgesneden achtergronden. Het probleem is de bestandsgrootte: de verliesvrije compressie die kwaliteit garandeert, genereert ook merkbaar grote bestanden. Google\'s <strong>WebP</strong> lost deze tegenstrijdigheid op: het ondersteunt het alfakanaal (transparantie) <em>en</em> comprimeert veel beter dan PNG, waardoor de overstap van PNG naar WebP op je website een perfecte optimalisatie is die niets opoffert.',
  },
  {
    type: 'title',
    text: 'PNG of WebP? Wanneer je elk formaat moet gebruiken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> blijft het juiste formaat wanneer compatibiliteit cruciaal is: ontwerptools zoals Photoshop of Figma, printworkflows, verouderde desktopapplicaties of elke context waarin WebP-ondersteuning niet gegarandeerd is. Het is ook het ideale formaat voor het opslaan van werklagen in bewerkingspipelines, aangezien de verliesvrije compressie elke pixel behoudt. De kosten: bestanden die 3–8 keer meer kunnen wegen dan hun WebP-equivalent.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> is de natuurlijke vervanger van PNG voor alle moderne webinhoud. Chrome, Firefox, Safari en Edge ondersteunen het allemaal standaard. Een verliesvrije WebP-afbeelding is 26% kleiner dan de equivalente PNG; in de lossy-modus kan deze tot 40% kleiner zijn met vrijwel onwaarneembare visuele kwaliteit. En cruciaal voor webdesign: <strong>WebP behoudt alfa-transparantie</strong> precies zoals PNG, zonder visueel compromis.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Lokale vs Cloud-conversie',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je bestanden uploaden naar een externe server.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Netwerklatentie bij uploaden en downloaden',
          'Je logo\'s en afbeeldingen opgeslagen op servers van derden',
          'Limieten voor bestandsgrootte en dagelijkse conversiequota',
          'Opdringerige advertenties en trackers van derden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Onmiddellijke snelheid — geen netwerklatentie',
          'Volledige privacy — 0 bytes extern verzonden',
          'Geen MB-limieten of beperkingen op aantal bestanden',
          'Schone interface, geen advertenties of tracking',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe het technisch werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De PNG wordt lokaal geladen en gedecodeerd in een in-memory <strong>HTML5 Canvas</strong>. De Canvas API behoudt het alfakanaal van de originele PNG — alle transparante en semi-transparante pixels blijven intact in de RGBA-pixelbuffer. Het canvas wordt vervolgens geëxporteerd door <code>toDataURL(\'image/webp\')</code> aan te roepen, wat de WebP-codec van de browser (gebaseerd op Google\'s libwebp) toepast om een compacter bestand te genereren zonder de transparantiegegevens te wijzigen.',
  },
  {
    type: 'paragraph',
    html: 'WebP gebruikt twee compressiemodi: lossless-modus voor afbeeldingen waarbij elke pixel exact trouw aan het origineel moet zijn, en lossy-modus voor foto\'s en elementen waarbij kleine verschillen onmerkbaar zijn. Lossless-modus produceert bestanden die 26% kleiner zijn dan PNG; lossy-modus kan reducties tot 40% bereiken in vergelijking met PNG met behoud van uitstekende visuele kwaliteit.',
  },
  {
    type: 'tip',
    title: 'Tip: WebP verslaat zowel PNG als JPG op het web',
    html: 'WebP in lossless-modus is kleiner dan PNG. WebP in lossy-modus is kleiner dan JPG. Dit maakt WebP het <strong>enige formaat dat beide vervangt</strong> in de webcontext. Converteer je transparante PNG\'s naar WebP voordat je ze uploadt: Google PageSpeed Insights detecteert het en scoort het positief in audits voor "Afbeeldingen in moderne formaten aanbieden".',
  },
  {
    type: 'title',
    text: 'Toepassingen en compatibiliteit',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo\'s en pictogrammen met transparante achtergronden voor websites en apps.',
      'Productafbeeldingen met uitgesneden achtergronden in e-commerce winkels.',
      'CSS-sprites en UI-elementen met alfa-transparantie.',
      'Gerasterde illustraties en vectorafbeeldingen voor landingspagina\'s.',
      'Artikelminiaturen met transparante achtergronden in blogs en nieuwsportalen.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De overstap van PNG naar WebP is de meest complete webafbeeldingsoptimalisatie die beschikbaar is: je krijgt lichtere bestanden, behoudt transparantie en verbetert Core Web Vitals-metrieken zonder iets aan je visuele ontwerp te veranderen. Deze tool doet het onmiddellijk, gratis en volledig privé — je afbeeldingen worden verwerkt in je browser en gaan nooit naar een externe server.',
  },
];


export const content: PngAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'nl', faq, howTo }),
};
