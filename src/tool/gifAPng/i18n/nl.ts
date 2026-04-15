import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-naar-png-converter';
const title = 'GIF naar PNG Online Converteren';
const description =
  'Extraheer het eerste frame uit je GIF\'s en converteer het naar PNG met behoud van transparantie. Zonder server. Lokale verwerking. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Sleep GIF-bestanden hierheen...',
  convertText: 'Om ze direct naar PNG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Waarom een geanimeerd formaat zoals GIF naar een statisch formaat zoals PNG converteren?',
    answer:
      'Veel sociale netwerken of avatars ondersteunen geen afbeeldingen die veranderen. Het extraheren van het eerste frame van een complexe GIF naar een hoogwaardige PNG lost barrières op en vermindert onnodig bestandsgewicht.',
  },
  {
    question: 'Blijven de transparanties van de oude GIF behouden in de resulterende PNG?',
    answer:
      'Ja, in tegenstelling tot JPG behoudt het PNG-formaat het alfakanaal. Als de GIF een transparante achtergrond had, zal de PNG deze behouden met scherpe randen.',
  },
  {
    question: 'Bewaren jullie mijn afbeeldingen na verwerking enige tijd op de servers?',
    answer:
      'Geen enkele server bewaart je GIF; de gehele extractie is lokaal dankzij de Web Canvas API. Het is de processor van je pc die op veilige wijze je bestand decodeert zonder enig contact met het netwerk.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Breng de Animatie Dichterbij',
    text: 'Sleep de zware GIF-bestanden naar het invoerveld.',
  },
  {
    name: 'Perfect Geëxtraheerde Foto',
    text: 'Het systeem stopt de exacte oorsprong van de beweging en maakt in milliseconden een onberispelijke kopie.',
  },
  {
    name: 'Sla je Statische Beeld op',
    text: 'Sla alle naar PNG geconverteerde statische GIF-avatars massaal op in een ZIP-bestand.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF naar PNG Converter: Overschrijd de kleur- en transparantiegrenzen van GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF werd ontworpen in een tijd dat monitoren nauwelijks 256 kleuren konden weergeven. Decennia later is die beperking nog steeds de grootste zwakte. PNG werd precies geboren om GIF te vervangen in alle gebruiksscenario\'s waar kwaliteit en transparantie belangrijk zijn: logo\'s, iconen, interface-graphics en elke afbeelding met een transparante achtergrond die er op elke achtergrondkleur perfect uit moet zien.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG: de revolutie van de 16 miljoen kleuren',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Het meest cruciale verschil tussen GIF och PNG is niet alleen het aantal kleuren. GIF ondersteunt binaire transparantie: elke pixel is ondoorzichtig of volledig transparant, zonder gradaties. PNG daarentegen ondersteunt het volledige alfakanaal, met 256 niveaus van ondoorzichtigheid per pixel. Dit betekent dat de randen van een logo in PNG perfect kunnen worden gladgestreken, terwijl die van GIF een kenmerkende karteling vertonen op gekleurde achtergronden.',
  },
  {
    type: 'paragraph',
    html: 'Naast de superieure transparantie neemt PNG de grens van 256 kleuren van GIF weg. Screenshots, illustraties met gradiënten, logo\'s met schaduwen: ze zien er allemaal aanzienlijk beter uit in PNG. En omdat het verliesvrije compressie is, behoudt elke pixel precies de originele waarde, zonder de artefacten die een conversie naar JPG zou introduceren.',
  },
  {
    type: 'title',
    text: 'Vergelijking van Architectuur: Lokaal vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Tools die je afbeeldingen op externe servers verwerken.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Je logo\'s en iconen reizen via internet',
          'Wachttijd door netwerklatentie',
          'Limieten op grootte en aantal bestanden',
          'Je afbeeldingen kunnen in caches van derden blijven staan',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je hardware via Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'De GIF verlaat nooit je apparaat',
          'Onmiddellijke conversie zonder netwerk',
          'Zonder limieten op bestanden of grootte',
          'Absolute privacy: 0 bytes verzonden',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de lokale GIF naar PNG conversie werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De conversie maakt gebruik van de Canvas API van de browser. De GIF wordt in het geheugen gedecodeerd als een eigen Image-element. Door het op een HTML5-canvas te renderen, legt de grafische engine van de browser het eerste frame vast met al zijn originele transparantie-informatie intact.',
  },
  {
    type: 'paragraph',
    html: 'In tegenstelling tot de conversie naar JPG, is bij PNG geen witte achtergrond nodig. Het alfakanaal van de originele GIF wordt direct bewaard in de geëxporteerde PNG. De <code>toDataURL(\'image/png\')</code> methode genereert de PNG-bytestroom in het RAM-geheugen van je computer zonder enige netwerktransmissie, en het bestand wordt direct gedownload.',
  },
  {
    type: 'tip',
    title: 'Binaire transparantie van GIF vs alfakanaal van PNG',
    html: 'GIF ondersteunt alleen binaire transparantie (ondoorzichtig of transparant). Bij het converteren naar PNG blijven de half-transparante pixels van de GIF behouden zoals de browser ze interpreteert. Als je GIF kartelige randen heeft, zal de PNG deze behouden — maar je kunt ze bewerken met randverzachting in elke editor, iets wat onmogelijk is met de originele GIF.',
  },
  {
    type: 'title',
    text: 'Gebruiksscenario\'s en compatibiliteit van de resulterende PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logo\'s en iconen voor gebruik op elke achtergrondkleur.',
      'Avatars voor Discord, Telegram, Slack en gamingplatforms.',
      'Interface-graphics voor web- en mobiele apps.',
      'Gepersonaliseerde stickers en emoji\'s met transparante achtergrond.',
      'Screenshots en UI-elementen voor technische documentatie.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: PNG is wat de GIF altijd had willen zijn',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Converteren van GIF naar PNG is niet alleen een formaatverandering: het is het bijwerken van een afbeelding naar de moderne standaard die de GIF nooit heeft kunnen bereiken. Meer kleuren, betere transparantie, minder gewicht. Onze tool voert deze conversie in milliseconden uit, direct in je browser, zonder gegevens naar buiten te sturen.',
  },
];


export const content: GifAPngLocaleContent = {
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
