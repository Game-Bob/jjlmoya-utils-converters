import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-naar-webp-converter';
const title = 'AVIF naar WebP Online Converteren';
const description =
  'Converteer AVIF-afbeeldingen naar WebP voor betere compatibiliteit. Lokale verwerking zonder servers. Gratis, privé en onbeperkt.';

const ui: ImageConverterUI = {
  dragText: 'Sleep AVIF-bestanden hierheen...',
  convertText: 'Om ze direct naar WebP te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Wat is het echte verschil tussen converteren naar WebP en naar andere formaten?',
    answer:
      'WebP biedt het beste van twee werelden: compressie die net zo verbazingwekkend is als JPG, maar met de mogelijkheid om schone transparanties te bevatten zoals PNG. Door je AVIF naar WebP te veranderen, maximaliseer je de compatibiliteit voor het web met behoud van alle voordelen.',
  },
  {
    question: 'Hoe lukt het om dit zonder server en zo snel te veranderen?',
    answer:
      'We maken gebruik van de ingebouwde decoderingsmodules en het Image-object van JavaScript HTML5, waardoor je AVIF in het lokale geheugen kan worden gelezen en een geoptimaliseerd WebP-bestand in recordtijd kan worden geëxtraheerd.',
  },
  {
    question: 'Is het WebP-formaat tegenwoordig volledig compatibel?',
    answer:
      'In tegenstelling tot het opkomende AVIF, geniet het WebP-formaat van een zeer brede ondersteuning in browsers zoals Chrome, Firefox en Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Voeg je fotobestanden toe',
    text: 'Sleep alle AVIF-bestanden naar ons canvas.',
  },
  {
    name: 'Algoritmische Byte-vertaling',
    text: 'Onze engine verwerkt de algoritmen zonder iets te uploaden en creëert exacte iteraties op basis van gecomprimeerde WebP.',
  },
  {
    name: 'Download je bestanden',
    text: 'Klik op het paneel en ontvang batches in ZIP-bestanden of losse bestanden om ze direct te publiceren.',
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
    text: 'AVIF naar WebP Converter: Het moderne en veilige alternatief voor het web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF is het meest geavanceerde beeldformaat dat momenteel beschikbaar is: kleiner dan WebP, kleiner dan JPG, met superieure visuele kwaliteit. De adoptie is echter ongelijkmatig — Safari ondersteunde het pas in 2024 en veel oudere mobiele apparaten herkennen het niet. WebP daarentegen is al jaren gevestigd als de moderne webstandaard met meer dan 95% wereldwijde ondersteuning. AVIF naar WebP converteren is de pragmatische keuze wanneer je moderniteit wilt zonder compatibiliteitsrisico\'s.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP: De nieuwste vs De veiligste',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF biedt de meest geavanceerde compressie die beschikbaar is — doorgaans 20-30% kleiner dan WebP bij dezelfde kwaliteit. De op AV1 gebaseerde technologie is de modernste in de sector. De ondersteuning van AVIF heeft echter nog blinde vlekken: oudere versies van Safari, sommige browsers op oudere Android-toestellen en bepaalde desktop-beeldviewers herkennen het niet. Voor webproductie met een breed en divers publiek is dit een risico.',
  },
  {
    type: 'paragraph',
    html: 'WebP heeft een veel solidere ondersteuningsgeschiedenis. Chrome adopteerde het in 2010, Firefox en Edge volgden, en Safari voegde het toe in 2020. Met meer dan 95% wereldwijde dekking in browsers is WebP de veilige keuze voor elke website die geen fallback-formaten wil aanbieden. Het ondersteunt transparantie, compressie met en zonder verlies, en realiseert veel kleinere bestanden dan JPG of PNG.',
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
          'Je privéafbeeldingen gaan via externe servers',
          'Netwerklatentie die de workflow vertraagt',
          'Bestandslimieten per gratis conversie',
          'Afhankelijkheid van diensten van derden die kunnen veranderen',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking in je browser via Vanilla JS-technologie en Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Volledige privacy — 0 bytes verlaten je apparaat',
          'Directe snelheid zonder afhankelijkheid van netwerk',
          'Zonder limieten voor grootte of aantal bestanden',
          'Werkt zonder internetverbinding',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de technische conversie in de browser werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox en Edge bevatten native AVIF-decoders. Bij het laden van het bestand decodeert de image-engine van de browser het in de RAM met behoud van de informatie van het alfakanaal. De afbeelding wordt getekend op een onzichtbaar HTML5 <code>Canvas</code> met behulp van de 2D-context, die transparanties correct behoudt.',
  },
  {
    type: 'paragraph',
    html: 'De export wordt uitgevoerd met <code>toBlob(\'image/webp\', quality)</code>. De browser past intern het WebP-compressie-algoritme toe, waarbij een Blob wordt gegenereerd die het alfakanaal bevat als de originele afbeelding dat had. Deze Blob wordt omgezet in een directe downloadlink. Het volledige proces vindt plaats in microseconden zonder enige communicatie met externe servers.',
  },
  {
    type: 'tip',
    title: 'WebP: de pragmatische keuze van de moderne ontwikkelaar',
    html: 'WebP heeft meer dan 95% ondersteuning in browsers — AVIF groeit, maar bereikt dat aantal nog niet. Voor websites in productie zonder adaptieve formaatdetectie is WebP de veilige keuze die bijna elk publiek dekt. Converteer je AVIF\'s naar WebP en bied moderne afbeeldingen met vertrouwen aan.',
  },
  {
    type: 'title',
    text: 'Gebruikssituaties: wanneer kiezen voor WebP boven AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Websites die ondersteuning nodig hebben in browsers vanaf 2020 zonder polyfills.',
      'CDN\'s en beeldleveringssystemen die WebP accepteren maar geen AVIF.',
      'Hybride mobiele apps met WebViews die AVIF mogelijk niet ondersteunen.',
      'Moderne HTML-e-mails waarbij WebP meer ondersteuning heeft dan AVIF.',
      'CMS-platforms en e-commerce met gevestigde WebP-beeldondersteuning.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: Moderniteit met gegarandeerde compatibiliteit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF is de voorhoede van beeldcompressie, maar WebP is de betrouwbare en universele keuze van het moderne web-ecosysteem. Met onze tool converteer je in een oogwenk van het nieuwste naar het meest ondersteunde — zonder iets naar een server te uploaden, met volledige privacy en zonder groottebeperkingen.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'nl', faq, howTo }),
};
