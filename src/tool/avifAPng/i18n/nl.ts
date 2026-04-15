import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-naar-png-converter';
const title = 'AVIF naar PNG Online Converteren';
const description =
  'Converteer AVIF-afbeeldingen naar PNG met behoud van transparantie. Zonder bestanden te uploaden. Lokale verwerking in je browser. Gratis en onbeperkt.';

const ui: ImageConverterUI = {
  dragText: 'Sleep AVIF-bestanden hierheen...',
  convertText: 'Om ze direct naar PNG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Waarom zou ik AVIF naar PNG converteren?',
    answer:
      'AVIF is geweldig voor compressie, maar de compatibiliteit is beperkt in oudere browsers en klassieke editors. Door AVIF naar PNG te converteren, zorg je ervoor dat je bestand de originele transparantie behoudt en dat alle applicaties het kunnen openen.',
  },
  {
    question: 'Blijven de transparanties van het originele AVIF-bestand behouden?',
    answer:
      'Ja. In tegenstelling tot JPG, dat de transparante achtergrond verwijdert, behoudt onze converter bij het exporteren naar PNG het alfakanaal intact.',
  },
  {
    question: 'Worden mijn afbeeldingen echt niet naar internet geüpload?',
    answer:
      'Absoluut waar. Onze converter wordt 100% lokaal op je apparaat uitgevoerd met behulp van de interne JavaScript-engine.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Voeg je AVIF-bestanden toe',
    text: 'Je kunt ze direct naar het begrensde gebied slepen of de knop gebruiken om de mappen op je apparaat te doorzoeken.',
  },
  {
    name: 'Directe verwerking',
    text: 'Laat de HTML5-processor de afbeelding renderen; het formaat verandert automatisch in PNG in microseconden.',
  },
  {
    name: 'Download je PNG\'s',
    text: 'Download de geconverteerde afbeeldingen één voor één of download een compleet blok via de ZIP-knop.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: AVIF-formaat',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Portable Network Graphics (PNG) Specificatie',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF naar PNG Converter: Van Webdistributie naar Professionele Bewerking',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF is het ideale formaat voor het aanbieden van afbeeldingen op het web — klein, efficiënt en van hoge kwaliteit. Maar wanneer het tijd is om die afbeeldingen te bewerken, te retoucheren of ermee te werken in ontwerptools, wordt AVIF een obstakel. Figma, Photoshop, Illustrator, Sketch en vrijwel elke professionele ontwerptool verwachten PNG voor het werken met transparanties en verliesvrije bewerking. AVIF naar PNG converteren is de brug tussen de wereld van webdistributie en die van creatieve bewerking.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Distributie vs Bewerking',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF excelleert als distributieformaat: kleine bestanden, snel laden, ondersteuning van alfakanalen en uitzonderlijke visuele kwaliteit. Het ecosysteem van tools is echter beperkt. De meeste ontwerpsoftware kan AVIF niet direct importeren, wat creatieve workflows onderbreekt. Proberen een AVIF in Figma te openen of als laag in Photoshop te importeren, werkt simpelweg niet.',
  },
  {
    type: 'paragraph',
    html: 'PNG is het eigen formaat van digitaal ontwerp. Met verliesvrije compressie, volledige ondersteuning van alfakanalen en universele compatibiliteit met alle creatieve tools, is PNG het werkformaat bij uitstek. Wanneer je moet schalen, retoucheren, exporteren naar meerdere formaten of in lagen moet werken, garandeert PNG dat je tijdens het proces geen details of pixels verliest.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Cloud Converters vs Onze Lokale Architectuur',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je AVIF-bestanden naar een externe server uploaden om ze te verwerken.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Je ontwerpafbeeldingen reizen naar servers van derden',
          'Wachttijd door netwerklatentie',
          'Mogelijk verlies of wijziging van het alfakanaal',
          'Groottebeperkingen die batchconversie bemoeilijken',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking in je browser via Vanilla JS-technologie en Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Alfakanaal behouden met perfecte getrouwheid',
          'Directe conversie zonder gegevensoverdracht',
          'Geen limieten voor bestanden, grootte of batches',
          'Volledige privacy voor eigen ontwerpassets',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de technische conversie met transparanties werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Moderne browsers decoderen AVIF standaard dankzij hun geïntegreerde AV1-engines. Bij het laden van het bestand decodeert de browser het in het geheugen met behoud van alle informatie van het alfakanaal. De gedecodeerde afbeelding — inclusief de transparanties — wordt op een HTML5-<code>Canvas</code>-element getekend met de juiste compositiemodus om het alfakanaal te behouden.',
  },
  {
    type: 'paragraph',
    html: 'In tegenstelling tot exporteren naar JPG (waarbij transparanties verloren gaan door ze met wit in te vullen), behoudt exporteren naar PNG via <code>toBlob(\'image/png\')</code> het alfakanaal volledig. Het resultaat is een PNG met verliesvrije compressie die elke pixel, elke semitransparantie en elk detail van de originele AVIF behoudt.',
  },
  {
    type: 'tip',
    title: 'De verplichte voorafgaande stap voor elke ontwerptool',
    html: 'Converteer je AVIF\'s naar PNG voordat je ze importeert in Figma, Photoshop, Illustrator of een andere ontwerptool. Deze applicaties lezen AVIF niet direct, maar PNG werkt standaard in al deze tools, waarbij transparanties en kwaliteit perfect behouden blijven.',
  },
  {
    type: 'title',
    text: 'Casussen: wanneer je AVIF geconverteerd naar PNG nodig hebt',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importeren in Figma, Sketch, Adobe XD of andere UI-design tools.',
      'Bewerken als laag in Photoshop, Affinity Photo of GIMP met behoud van transparantie.',
      'Gebruiken als bron voor het genereren van iconen of sprites.',
      'Verzenden naar klanten of medewerkers die werken met standaard ontwerpsoftware.',
      'Archiveren van afbeeldingen met transparanties in het verliesvrije bewerkingsformaat.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: De brug tussen het web en ontwerp',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF en PNG zijn perfecte partners in een moderne workflow: AVIF voor efficiënte weblevering, PNG voor bewerking en samenwerking in ontwerptools. Met onze converter is de overgang van de een naar de ander direct, privé en behoudt elk detail — precies wat je nodig hebt wanneer je visuele assets belangrijk zijn.',
  },
];


export const content: AvifAPngLocaleContent = {
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
