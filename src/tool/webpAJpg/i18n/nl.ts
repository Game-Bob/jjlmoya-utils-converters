import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-naar-jpg-converter';
const title = 'Converteer WebP naar JPG Online en Gratis';
const description =
  'Converteer WebP-afbeeldingen naar JPG zonder bestanden te uploaden. 100% privé lokale verwerking. Transparante achtergronden worden automatisch vervangen door wit.';

const ui: ImageConverterUI = {
  dragText: 'Sleep WebP-bestanden...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting': 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Kan ik privé-afbeeldingen veilig uploaden?',
    answer:
      'Ja. Er is geen uploadserver. Je browser verwerkt de WebP op je eigen computer en genereert de JPG die je kunt downloaden. Niemand anders ziet het.',
  },
  {
    question: 'Wat gebeurt er met mijn WebP-achtergrond als deze transparant is?',
    answer:
      'Aangezien JPG geen transparantie ondersteunt, vult de converter transparante gebieden automatisch met een effen witte achtergrond.',
  },
  {
    question: 'Is er een limiet aan het aantal conversies of de bestandsgrootte?',
    answer:
      'Wij leggen geen beperkingen op. Je kunt honderden afbeeldingen converteren, zolang je computer voldoende rekenkracht en RAM heeft.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Sleep je bestanden',
    text: 'Sleep je moderne WebP-bestanden naar het uploadgebied of selecteer ze met de interactieve bestandsbrowser.',
  },
  {
    name: 'Lokale conversie',
    text: 'Zie hoe de lokale engine een achtergrond toepast en elke pixel interpreteert naar het universele JPG-formaat.',
  },
  {
    name: 'Krijg je resultaten',
    text: 'Download ze afzonderlijk of gebruik het ZIP-pakket om al je nieuwe foto\'s te consolideren.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP naar JPG Converter: Universele compatibiliteit zonder privacy op te offeren',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> is Google\'s inzet op efficiëntie: lichtere afbeeldingen met een kwaliteit die vergelijkbaar is met traditionele JPG. De compatibiliteit blijft echter een probleem in de praktijk. E-mailclients zoals Outlook, oudere ontwerpsoftware, messaging-apps en zakelijke workflows zijn nog steeds afhankelijk van het alomtegenwoordige <strong>JPG</strong>. Het converteren van WebP naar JPG is de brug tussen het moderne web en de echte wereld.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: Wanneer gebruik je welk formaat?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP blinkt uit in gecontroleerde omgevingen: moderne websites op Chrome, Edge of Firefox waar browsercompatibiliteit gegarandeerd kan worden. De superieure compressie vermindert het bestandsgewicht met 25-35% vergeleken met een equivalente JPG, wat de laadtijden en Core Web Vitals-statistieken verbetert. Het is het ideale formaat wanneer je controle hebt over de kijkomgeving.',
  },
  {
    type: 'paragraph',
    html: 'JPG daarentegen werkt in <em>absoluut elke context</em>: e-mailbijlagen, PowerPoint presentaties, Word documenten, thuisprinters, oudere bewerkingsprogramma\'s en sociale mediaplatforms zonder uitzondering. Als je wilt dat iemand je afbeelding zonder technische wrijving kan openen, is JPG het juiste antwoord.',
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
          'Je foto\'s reizen over het internet naar onbekende servers',
          'Wachttijd voor uploaden en externe verwerking',
          'Dagelijkse limieten op bestandsgrootte en gratis conversies',
          'Reëel risico op gegevensretentie op servers van derden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Nul bytes verzonden: alles gebeurt in je RAM',
          'Directe snelheid zonder afhankelijk te zijn van je verbinding',
          'Geen limieten op bestandsgrootte of aantal bestanden',
          'Perfect voor persoonlijke, medische of zakelijke foto\'s',
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
    html: 'Wanneer je een WebP-bestand in de tool sleept, decodeert de browser dit native met behulp van de interne rendering-engine. Het bestand wordt vervolgens op een onzichtbaar <strong>HTML5 Canvas</strong>-element getekend. Omdat JPG geen transparantie ondersteunt, vult het algoritme het canvas met een effen witte achtergrond voordat de afbeelding erop wordt geplaatst.',
  },
  {
    type: 'paragraph',
    html: 'De laatste stap is de export: de Canvas-methode <code>toDataURL(\'image/jpeg\')</code> zet de canvaspixels om in een hoogwaardige gecomprimeerde JPG-bytestream. Deze stream wordt rechtstreeks aan het downloadsyteem van de browser geleverd, zonder enige netwerkcommunicatie. Het hele proces duurt milliseconden, zelfs voor afbeeldingen met veel megapixels.',
  },
  {
    type: 'tip',
    title: 'Compatibiliteitstip',
    html: 'Bij het delen van foto\'s met niet-technische gebruikers of het verzenden per e-mail, gebruik altijd JPG — nul compatibiliteitsproblemen op alle e-mailclients, besturingssystemen of apparaten, geen uitzonderingen en geen onaangename verrassingen.',
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
      'Foto\'s bijvoegen in e-mails van Outlook, Gmail of Apple Mail.',
      'Afbeeldingen invoegen in Word documenten, Excel of PowerPoint presentaties.',
      'Plaatsen op sociale mediaplatforms die WebP weigeren.',
      'Delen via WhatsApp of messaging-apps met beperkte formaatonderstütuning.',
      'Foto\'s afdrukken bij afdrukservices die alleen JPG of PNG accepteren.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP is de toekomst van webafbeeldingen, maar JPG blijft de koning van de universele compatibiliteit. Met deze tool kun je die brug in enkele seconden oversteken, volledig privé en zonder iets te installeren. Je afbeelding verlaat nooit je apparaat.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
