import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-naar-jpg-converter';
const title = 'AVIF naar JPG Online Converteren';
const description =
  'Converteer AVIF-afbeeldingen naar JPG in je browser. Zonder server. 100% privé lokale verwerking. Gratis en onbeperkt.';

const ui: ImageConverterUI = {
  dragText: 'Sleep AVIF-bestanden hierheen...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Waarom AVIF naar JPG converteren?',
    answer:
      'Het AVIF-formaat biedt superieure compressie, maar niet alle programma\'s of viewers ondersteunen het. Converteren naar JPG zorgt ervoor dat de afbeelding op 100% van de apparaten ter wereld kan worden bekeken.',
  },
  {
    question: 'Hoe beschermen we je AVIF-afbeeldingen?',
    answer:
      'Je foto\'s verlaten nooit je mobiel of pc. Het hele proces van tekenen en coderen naar JPEG wordt uitgevoerd in de Javascript-omgeving van je browser.',
  },
  {
    question: 'Verlies ik kwaliteit bij de overstap van AVIF naar JPG?',
    answer:
      'Onze tool verwerkt de pixels met een standaard Canvas-kwaliteit (0,9 tot 0,95), waardoor de veranderingen nauwelijks merkbaar zijn.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Sleep bestanden of klik',
    text: 'Verplaats alle AVIF-foto\'s die je wilt converteren naar het begrensde verwerkingsgebied.',
  },
  {
    name: 'Directe Transformatie',
    text: 'Zie in minder dan een seconde hoe de AVIF wordt gehercodeerd naar JPG, waarbij mogelijke alfakanalen worden vervangen door een effen achtergrond.',
  },
  {
    name: 'Opslaan of ZIP downloaden',
    text: 'Sla je nieuwe JPG-afbeeldingen afzonderlijk op of druk op Alles downloaden als je in batch hebt verwerkt.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Algemene Informatie over JPG',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF naar JPG Converter: Universele Compatibiliteit voor Je Moderne Afbeeldingen',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) is het meest efficiënte beeldformaat dat momenteel beschikbaar is. Ontwikkeld door de Alliance for Open Media en gebaseerd op de AV1-videocodec, biedt het een 50% betere compressie dan JPG bij dezelfde visuele kwaliteit. Dit technische voordeel heeft echter een prijs: AVIF wordt niet ondersteund door Photoshop, Lightroom, Windows Photo Viewer, noch door de meeste traditionele bewerkings- en weergavetools. Converteren naar JPG lost dit probleem bij de wortel op.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG: Efficiëntie versus Universele Compatibiliteit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF comprimeert buitengewoon goed: een foto met hoge resolutie die in JPG 4 MB in beslag neemt, kan in AVIF slechts 2 MB wegen met behoud van dezelfde waargenomen kwaliteit. Dit maakt het perfect voor webdistributie waarbij de laadprestaties kritiek zijn. Buiten de browser is AVIF echter vrijwel onzichtbaar: noch Windows Verkenner toont een voorbeeld, noch camera\'s exporteren het, noch ontvangen ontwerpers het graag in hun workflows.',
  },
  {
    type: 'paragraph',
    html: 'JPG is al meer dan 30 jaar de universele standaard voor digitale fotografie. Het wordt ondersteund door 100% van de apparaten, besturingssystemen, kantoortoepassingen, sociale netwerken, printers en alle software die ooit een afbeelding heeft gezien. Wanneer je moet delen, afdrukken, bewerken of e-mailen, is JPG de garantie dat alles zonder wrijving werkt.',
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
          'Je privéfoto\'s reizen over het internet naar externe servers',
          'Wachttijden voor het uploaden en downloaden van het bestand',
          'Limieten voor bestandsgrootte en aantal gratis conversies',
          'Risico op het bewaren van afbeeldingen op servers van derden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking in je browser via Vanilla JS-technologie en Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Je afbeeldingen verlaten nooit je apparaat',
          'Directe conversie zonder netwerklatentie',
          'Zonder limieten voor bestanden of grootte',
          'Geschikt voor medische, juridische of vertrouwelijke afbeeldingen',
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
    html: 'Moderne browsers zoals Chrome, Firefox en Edge bevatten native ondersteuning voor AVIF dankzij hun geïntegreerde AV1-decoders. Wanneer je een AVIF-bestand laadt, decodeert de browser het in het geheugen en converteert het naar een bitmapweergave in het RAM. Deze weergave wordt getekend op een onzichtbaar HTML5 <code>Canvas</code>-element.',
  },
  {
    type: 'paragraph',
    html: 'Vervolgens exporteert het Canvas de afbeelding met <code>toBlob(\'image/jpeg\', quality)</code>, waarbij de standaard JPG-compressie wordt toegepast. Omdat JPG geen transparantie ondersteunt, wordt elk alfakanaal in de AVIF gevuld met een witte achtergrond vóór de export. Het resultaat is een JPG-bestand van hoge kwaliteit dat klaar is voor directe download, zonder dat er een byte je browser heeft verlaten.',
  },
  {
    type: 'tip',
    title: 'Het perfecte evenwicht tussen compressie en compatibiliteit',
    html: 'AVIF is 50% kleiner dan JPG bij gelijke kwaliteit — maar JPG heeft 100% compatibiliteit met alle software. Als je AVIF-afbeeldingen van de server ontvangt en ze moet bewerken, e-mailen of openen in desktoptools, converteer ze dan eerst naar JPG.',
  },
  {
    type: 'title',
    text: 'Casussen: wanneer AVIF naar JPG converteren',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Bewerken in Photoshop, Lightroom, GIMP of andere desktopsoftware.',
      'Afbeeldingen delen met gebruikers op oude apparaten of besturingssystemen.',
      'Bijvoegen in e-mails om weergave in elke e-mailclient te garanderen.',
      'Publiceren op platforms die AVIF niet accepteren als uploadformaat.',
      'Afdrukken: professionele afdrukservices werken standaard met JPG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: De universele compatibiliteit in één stap',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF is de toekomst van beeldcompressie, maar het heden vereist compatibiliteit. Onze converter stelt je in staat om het beste van twee werelden te krijgen: ontvang en bewaar afbeeldingen in AVIF voor maximale efficiëntie, en converteer ze direct naar JPG wanneer je ze in elke context nodig hebt. Alles privé, gratis en zonder limieten.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
