import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'afbeelding-naar-base64-converter';
const title = 'Afbeelding naar Base64 Converter Online';
const description =
  'Converteer elke afbeelding direct in je browser naar Base64-code en Data URI. Geen bestandsuploads. Gratis, privé en direct.';

const ui: ImageToBase64UI = {
  dragTitle: 'Sleep je afbeelding hierheen',
  dragSubtext: 'of klik om door je bestanden te bladeren',
  formatBadge: 'Ondersteunt JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Klaar voor CSS / HTML src="")',
  base64Label: 'Alleen Base64 (Platte gecodeerde tekst)',
  copyBtn: 'Kopiëren',
  dataUriPlaceholder: 'Upload een afbeelding om de Data URI-code te zien...',
  base64Placeholder: 'Upload een afbeelding om de pure Base64-code te zien...',
  toastMessage: 'Code gekopieerd naar klembord!',
  invalidImageAlert: 'Upload een geldig afbeeldingsbestand.',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Wat is Base64 en waarvoor wordt het gebruikt in webontwikkeling?',
    answer:
      'Base64 is een coderingssysteem dat binaire data omzet in een ASCII-tekstreeks. In webontwikkeling wordt het gebruikt om afbeeldingen direct in HTML- of CSS-bestanden in te sluiten via Data URI\'s, waardoor het aantal HTTP-verzoeken naar de server wordt verminderd.',
  },
  {
    question: 'Is het veilig om mijn afbeeldingen hier naar Base64 te converteren?',
    answer:
      'Absoluut veilig en privé. Onze tool werkt 100% lokaal in je browser. Je afbeeldingen worden nooit geüpload naar of verwerkt op een externe server.',
  },
  {
    question: 'Welke afbeeldingsformaten ondersteunt de Base64-converter?',
    answer:
      'De tool is compatibel met JPG, PNG, GIF, WebP en zelfs SVG-vectorbestanden. Bij het laden van de afbeelding detecteert de tool automatisch het MIME-type om de exacte Data URI-code te genereren.',
  },
  {
    question: 'Wanneer moet ik Base64-afbeeldingen NIET gebruiken?',
    answer:
      'Je moet Base64-afbeeldingen vermijden voor grote foto\'s of afbeeldingen met een hoge resolutie. Base64-code neemt ongeveer 33% meer ruimte in beslag dan het originele binaire bestand, wat je CSS-stylesheets of HTML-documenten overmatig kan opblazen.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Sleep of Selecteer je Afbeelding',
    text: 'Sleep een afbeelding (JPG, PNG, WebP, SVG, GIF) naar het uploadgebied om de conversie te starten.',
  },
  {
    name: 'Kopieer de Gegenereerde Code',
    text: 'Je ziet twee tekstgebieden: de volledige Data URI (klaar voor gebruik in src="" of CSS) and de pure Base64 voor andere doeleinden.',
  },
  {
    name: 'Gebruik de Code in je Project',
    text: 'Plak de Data URI direct in de src van een img-tag of in je CSS als background-image zonder dat er externe bestanden nodig zijn.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Afbeelding naar Base64 Converter: Afbeeldingen insluiten zonder HTTP-verzoeken',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 is een coderingstechniek die binaire data - zoals een afbeelding - transformeert naar een pure ASCII-tekstreeks. Het resultaat is een Data URI: een onafhankelijke URL die begint met <code>data:image/png;base64,...</code> en de volledige gecodeerde afbeelding bevat. Door deze code direct in je HTML, CSS of JSON in te sluiten, wordt de afbeelding geladen zonder enig extra HTTP-verzoek aan de server - nul netwerklatentie, direct laden.',
  },
  {
    type: 'title',
    text: 'Wanneer Base64-afbeeldingen te gebruiken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het belangrijkste argument voor Base64 is het elimineren van netwerkverzoeken. Elke afbeelding op een webpagina betekent een HTTP-verzoek met bijbehorende overhead van verbinding, DNS, TLS-handshake en latentie. Voor zeer kleine kritieke afbeeldingen - het hoofdbestand van de applicatie, favicon, een UI-icoon - elimineert het insluiten in Base64 in de CSS of HTML die kosten en garandeert het dat ze onmiddellijk worden weergegeven, zelfs voordat de browser iets heeft kunnen cachen.',
  },
  {
    type: 'paragraph',
    html: 'Deze techniek is vooral krachtig in SPA (Single Page Application) apps waar de JavaScript- en CSS-bundel tijdens de build wordt gegenereerd: het insluiten van kleine afbeeldingen in de bundel garandeert dat ze samen met de code worden geladen zonder extra verzoeken. Het is ook onmisbaar voor HTML-e-mails, waar e-mailclients externe afbeeldingen blokkeren maar ingesloten Data URI\'s bijna altijd weergeven.',
  },
  {
    type: 'title',
    text: 'Toepassingen voor Base64-afbeeldingen',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> voor kritieke iconen.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> voor UI-SVG\'s.',
      'JSON en REST API\'s: afbeeldingen verzenden als tekstgegevens in JSON-payloads.',
      'HTML e-mails: ingesloten afbeeldingen die worden weergegeven zelfs als de client externe URL\'s blokkeert.',
      'SVG-insluiting: rasterafbeeldingen insluiten in SVG-bestanden als inline data.',
    ],
  },
  {
    type: 'title',
    text: 'Hoe de conversie werkt in de browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Wanneer je een afbeelding selecteert of sleept, leest de <code>FileReader</code>-API van de browser deze direct van de schijf als binaire data in het RAM. De methode <code>readAsDataURL()</code> converteert die binaire bytes naar hun Base64-representatie met behulp van het RFC 4648-algoritme - elke 3 bytes aan originele data worden weergegeven als 4 ASCII-tekens uit het Base64-alfabet. Het resultaat bevat het automatisch gedetecteerde correcte MIME-type.',
  },
  {
    type: 'tip',
    title: 'Gebruik het alleen voor kleine afbeeldingen (onder de 10 KB)',
    html: 'Base64 verhoogt de bestandsgrootte met ongeveer 33%: een afbeelding van 10 KB wordt ~13,3 KB aan tekst. Voor kleine iconen en logo\'s zijn deze kosten minimaal en compenseert de eliminatie van het HTTP-verzoek dit. Voor foto\'s of grote afbeeldingen is de extra grootte aanzienlijk - gebruik altijd een CDN voor grote afbeeldingen.',
  },
  {
    type: 'title',
    text: 'Wanneer Base64 NIET te gebruiken',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Vermijd Base64 voor grote afbeeldingen: gebruik een CDN',
    html: 'Als je afbeeldingen hebt die groter zijn dan 10-20 KB, schaad Base64 de prestaties: het blaast de HTML/CSS-grootte op, voorkomt dat de browser de afbeelding onafhankelijk kan cachen en blokkeert de rendering terwijl de parser de gigantische string verwerkt. Gebruik voor grote afbeeldingen altijd een CDN met de juiste cache-headers.',
  },
  {
    type: 'title',
    text: 'Compatibiliteit en privacy',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI\'s zijn compatibel met 100% van de moderne browsers en de meeste e-mailclients. Onze tool verwerkt alles lokaal via de FileReader-API - je afbeeldingen verlaten nooit je apparaat. Dit maakt het geschikt voor bedrijfsafbeeldingen, privé-screenshots of andere vertrouwelijke visuele inhoud die je naar Base64 wilt converteren.',
  },
  {
    type: 'title',
    text: 'Conclusie: De snelste en meest privé insluittol',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Afbeeldingen converteren naar Base64 is een gerichte maar zeer krachtige techniek als deze correct wordt toegepast. Gebruik het voor kleine, kritieke afbeeldingen waar het ontbreken van HTTP-verzoeken een verschil maakt, en vermijd het voor grote afbeeldingen waarbij een CDN altijd wint. Met onze tool krijg je de Data URI in een handomdraai, zonder iets naar een server te uploaden.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
