import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'konvertera-jpg-till-png';
const title = 'Konvertera JPG till PNG Online och Gratis';
const description =
  'Konvertera JPG-bilder till PNG i din webbläsare utan att ladda upp filer. Förlustfri konvertering, gratis och helt privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra JPG-filer hit...',
  convertText: 'För att konvertera dem till PNG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande': 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'När ska jag använda JPG till PNG?',
    answer:
      'Närhelst du ska redigera text eller logotyper i ett fotografi. Om du sparar en JPG flera gånger blir den "smutsig". PNG fryser komprimeringen.',
  },
  {
    question: 'Kommer PNG-filen att få en transparent bakgrund omedelbart?',
    answer:
      'Nej. Den ursprungliga JPG-filen var platt och saknade den typen av strukturell kanal. Den resulterande PNG-filen förbereder den containern, sedan måste du isolera elementet med Photoshop eller ett annat redigeringsprogram.',
  },
  {
    question: 'Har den här webbplatsen trafikbegränsningar?',
    answer:
      'Tack vare Edge-teknik utan molnberoende finns det inga begränsningar eftersom den helt använder din egen dator eller mobiltelefon.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Dra JPG till panelen',
    text: 'Ladda upp statiska bilder i JPG-format med musen eller datorns väljare.',
  },
  {
    name: 'Förlustfri körning',
    text: 'Vanilla-programvaran skjuter bildens bitar till ett förlustfritt hölje som är infödd i PNG-familjen.',
  },
  {
    name: 'Avsluta sessionen',
    text: 'Klicka på panelen så lägger din webbläsare de nedladdade webbtillgångarna i dina användarmappar.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverterare från JPG till PNG: Förlustfri redigering och transparens',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> är oslagbart för kamerafotografier, men har en akilleshäl: varje gång du sparar filen tillämpas dess förlustbringande komprimering igen, vilket gradvis försämrar kanter och gradienter. <strong>PNG</strong> använder förlustfri komprimering – när filen väl har sparats är pixlarna oföränderliga. Att konvertera en JPG till PNG är den avgörande operationen när du behöver förbereda en bild för intensiv redigering, lägga till en transparent bakgrund eller integrera den i ett designflöde som kräver flera sparanden.',
  },
  {
    type: 'title',
    text: 'JPG eller PNG? När man ska använda varje format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> är fotografins kung: låg vikt, kompatibel med allt. Men dess komprimeringseffekter ackumuleras vid varje redigering och omsparande. Om du behöver beskära, retuschera eller lägga till text i en bild upprepade gånger, innebär det att börja från JPG att du introducerar försämring i varje cykel. Dessutom saknar JPG en alfakanal: den kan inte ha transparenta bakgrunder, vilket gör att den inte lämpar sig för logotyper, ikoner och UI-element.',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> är det rätta valet för företagslogotyper, skärmdumpar med skarp text, gränssnittselement, produktbilder med vit bakgrund som du senare behöver beskära, eller alla grafiska resurser som ska redigeras mer än en gång. Den förlustfria komprimeringen garanterar att textkanter förblir perfekt definierade och att plana färger förblir rena, utan JPEG-brus.',
  },
  {
    type: 'title',
    text: 'Jämförelse: Lokal konvertering vs moln',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Verktyg som laddar upp dina filer till en fjärrserver.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Nätverkslatens vid uppladdning och nedladdning',
          'Dina bilder finns kvar på andras servrar',
          'Begränsningar i storlek och dagliga konverteringar',
          'Påträngande reklam och tredjepartsspårare',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning på din hårdvara via Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar hastighet – noll nätverkslatens',
          'Total integritet – 0 byte skickas externt',
          'Inga MB-begränsningar eller begränsningar på antal filer',
          'Rent gränssnitt, utan annonser eller spårning',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur det fungerar tekniskt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Processen är rent lokal: webbläsaren skapar en <strong>Blob</strong> med den valda JPG-filen och ritar den på en <strong>HTML5 Canvas</strong> i minnet. När den väl har renderats anropas <code>toDataURL(\'image/png\')</code> – webbläsarens integrerade PNG-codec kodar om varje pixel utan att tillämpa någon ny förlustbringande komprimering. Resultatet är en PNG som troget bevarar JPG-filens nuvarande tillstånd: varken bättre eller sämre, bara fryst.',
  },
  {
    type: 'paragraph',
    html: 'Den resulterande PNG-filen kommer att använda förlustfri DEFLATE-komprimering, samma som används av professionella verktyg som Photoshop eller GIMP. Dess storlek kommer att vara större än den ursprungliga JPG-filen – vanligtvis mellan 2 och 5 gånger – eftersom den lagrar alla pixlar utan att kasta bort information. Det är priset man betalar för trohet och oändlig redigerbarhet.',
  },
  {
    type: 'tip',
    title: 'Viktigt: PNG återställer inte JPEG kvalitet',
    html: 'Att konvertera en JPG till PNG <strong>återställer inte den förlorade kvaliteten</strong> under den ursprungliga JPEG-komprimeringen. Om din JPG redan hade blockeffekter eller färgbrus, kommer PNG att bevara dem intakta – det förhindrar helt enkelt att fler läggs till. Tänk på konverteringen som att "frysa" bildens nuvarande tillstånd så att framtida redigeringar inte försämrar den ytterligare.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logotyper och varumärkeselement som behöver transparent bakgrund efter beskärning.',
      'Skärmdumpar med text som kommer att redigeras och sparas om flera gånger.',
      'Produktbilder för e-handel som kräver ren och beskärningsbar vit bakgrund.',
      'Grafiska resurser för PowerPoint- eller Google Slides-presentationer.',
      'UI-tillgångar för webb- och mobilapplikationer där kantskärpa är kritisk.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Konvertering från JPG till PNG är det första steget i alla seriösa designarbetsflöden. Det omvandlar inte den ursprungliga kvaliteten, men det skyddar varje pixel från framtida redigeringar. Med det här verktyget sker processen omedelbart och helt privat, utan att dina företags- eller personliga bilder någonsin lämnar din enhet.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'sv', faq, howTo }),
};
