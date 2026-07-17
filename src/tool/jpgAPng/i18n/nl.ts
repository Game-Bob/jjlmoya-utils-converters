import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-naar-png-converter';
const title = 'JPG naar PNG Online en Gratis Converteren';
const description =
  'Converteer JPG-afbeeldingen naar PNG in je browser zonder bestanden te uploaden. Lossless conversie, gratis en volledig privé.';

const ui: ImageConverterUI = {
  dragText: 'Sleep JPG-bestanden hierheen...',
  convertText: 'Om ze direct naar PNG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Wanneer moet ik JPG naar PNG gebruiken?',
    answer:
      'Altijd wanneer je tekst of logo\'s binnen een foto gaat bewerken. Als je een JPG meerdere keren opslaat, wordt deze "vies". PNG bevriest de compressie.',
  },
  {
    question: 'Zal het PNG-bestand onmiddellijk een transparante achtergrond hebben?',
    answer:
      'Nee. De originele JPG was plat en zonder dat type structureel kanaal. De resulterende PNG bereidt die container voor; daarna moet je het element isoleren met Photoshop of een andere editor.',
  },
  {
    question: 'Heeft deze website verkeerslimieten?',
    answer:
      'Dankzij Edge-technologieën zonder cloud-afhankelijkheden zijn er geen limieten omdat het volledig gebruikmaakt van je eigen computer of mobiele telefoon.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Sleep JPG naar het paneel',
    text: 'Upload statische afbeeldingen in JPG-formaat via de muis of de computer-selector.',
  },
  {
    name: 'Lossless Uitvoering',
    text: 'De Vanilla-software duwt de bits van het beeld naar een lossless omhulsel dat eigen is aan de PNG-familie.',
  },
  {
    name: 'Sessie Beëindigen',
    text: 'Klik op het paneel en je browser plaatst de gedownloade webbestanden in je gebruikersmappen.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG naar PNG Converter: Verliesvrije Bewerking en Transparantie',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> is onverslaanbaar voor camerafoto\'s, maar heeft een zwakke plek: elke keer dat je het bestand opslaat, wordt de compressie met verlies opnieuw toegepast, waardoor randen en gradiënten progressief verslechteren. <strong>PNG</strong> gebruikt verliesvrije compressie - eenmaal opgeslagen, zijn de pixels onveranderlijk. JPG naar PNG converteren is de sleuteloperatie wanneer je een afbeelding moet voorbereiden voor intensieve bewerking, een transparante achtergrond wilt toevoegen of deze wilt integreren in een ontwerpproces dat meerdere keren opslaan vereist.',
  },
  {
    type: 'title',
    text: 'JPG of PNG? Wanneer welk formaat te gebruiken',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> is de koning van de fotografie: kleine bestanden, compatibel met alles. Maar de compressie-artefacten stapelen zich op bij elke bewerking en keer opslaan. Als je herhaaldelijk een afbeelding moet bijsnijden, retoucheren of tekst moet toevoegen, betekent beginnen met JPG dat je in elke cyclus verslechtering introduceert. Bovendien mist JPG het alfakanaal: het kan geen transparante achtergronden hebben, wat het ongeschikt maakt voor logo\'s, iconen en UI-elementen.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> is de juiste keuze voor bedrijfslogo\'s, screenshots met scherpe tekst, interface-elementen, productafbeeldingen met een witte achtergrond die je later moet uitsnijden, of elke grafische bron die meer dan eens bewerkt zal worden. De verliesvrije compressie garandeert dat de randen van tekst perfect gedefinieerd blijven en dat egale kleuren zuiver blijven, zonder JPEG-ruis.',
  },
  {
    type: 'title',
    text: 'Vergelijking: Lokale Conversie vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je bestanden naar een externe server uploaden.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Netwerklatentie bij upload en download',
          'Je afbeeldingen blijven op externe servers staan',
          'Limieten voor bestandsgrootte en dagelijkse conversies',
          'Opdringerige advertenties en trackers van derden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware via Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Directe snelheid - nul netwerklatentie',
          'Volledige privacy - 0 bytes naar buiten verzonden',
          'Geen MB-limieten of beperkingen op aantal bestanden',
          'Schone interface, zonder advertenties of tracking',
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
    html: 'Het proces is puur lokaal: de browser maakt een <strong>Blob</strong> met de geselecteerde JPG en tekent deze op een <strong>HTML5 Canvas</strong> in het geheugen. Eenmaal gerenderd, wordt <code>toDataURL(\'image/png\')</code> aangeroepen - de in de browser geïntegreerde PNG-codec hercodeert elke pixel zonder nieuwe compressie met verlies toe te passen. Het resultaat is een PNG die de huidige staat van de JPG natuurgetrouw bewaart: niet beter en niet slechter, gewoon bevroren.',
  },
  {
    type: 'paragraph',
    html: 'De resulterende PNG gebruikt verliesvrije DEFLATE-compressie, dezelfde die professionele tools zoals Photoshop of GIMP gebruiken. De grootte zal groter zijn dan de originele JPG - meestal tussen 2 en 5 keer - omdat het alle pixels opslaat zonder informatie weg te gooien. Dat is de prijs voor trouw en oneindige bewerkbaarheid.',
  },
  {
    type: 'tip',
    title: 'Belangrijk: PNG herstelt de JPEG kwaliteit niet',
    html: 'Een JPG naar PNG converteren <strong>herstelt de verloren kwaliteit niet</strong> die tijdens de originele JPEG-compressie is verloren gegaan. Als je JPG al blok-artefacten of kleurruis had, zal de PNG deze intact houden - het voorkomt simpelweg dat er meer wordt toegevoegd. Zie de conversie als het "bevriezen" van de huidige staat van de afbeelding zodat toekomstige bewerkingen deze niet verder verslechteren.',
  },
  {
    type: 'title',
    text: 'Gebruiksscenario\'s en compatibiliteit',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo\'s en branding-elementen die een transparante achtergrond nodig hebben na het uitsnijden.',
      'Screenshots met tekst die meerdere keren bewerkt en opnieuw opgeslagen zullen worden.',
      'Productafbeeldingen voor e-commerce die een schone en uitsnijdbare witte achtergrond vereisen.',
      'Grafische bronnen voor PowerPoint- of Google Slides-presentaties.',
      'UI-assets voor web- en mobiele apps waar de scherpte van de randen kritisch is.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De conversie van JPG naar PNG is de eerste stap in elke serieuze ontwerpworkflow. Het transformeert de originele kwaliteit niet, maar beschermt elke pixel tegen toekomstige bewerkingen. Met deze tool gebeurt het proces onmiddellijk en volledig privé, zonder dat je zakelijke of persoonlijke afbeeldingen je apparaat verlaten.',
  },
];


export const content: JpgAPngLocaleContent = {
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
