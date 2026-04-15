import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'konvertera-bmp-till-webp';
const title = 'Konvertera BMP till WebP Gratis';
const description =
  'Konvertera BMP-bilder till WebP offline. Minska enorma filer till kilobyte. Utan att ladda upp filer. Gratis, offline och helt privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra BMP-filer hit...',
  convertText: 'För att konvertera dem till WebP direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Varför tar mina BMP-filer 10 gånger mer plats och vad vinner jag på att ha dem i WebP?',
    answer:
      'BMP sparar okomprimerade pixelkartor. WebP använder matematisk komprimering för att minska enorma BMP:er till mindre än en megabyte samtidigt som bilden förblir extremt igenkännbar.',
  },
  {
    question: 'Måste jag registrera ett konto?',
    answer:
      'Vi kräver ingen e-post och ditt material förblir isolerat, eftersom processen utförs av webbläsarens JavaScript som är installerat på din dator, utan fjärrsändning.',
  },
  {
    question: 'Kan jag dra många filer samtidigt?',
    answer:
      'Ja, du kan dra 50 eller 100 filer om din hårdvara klarar av att bearbeta alla utan att skapa köer.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identifiera råfiler',
    text: 'Placera dina bitmappskollektioner i fönster som är redo för överföring.',
  },
  {
    name: 'Inbyggd batch-aktivering',
    text: 'Flytta eller dra alla filer till vårt digitala bord.',
  },
  {
    name: 'WebP batch-evakuering',
    text: 'Klicka på resultaten så får du separat bilderna med mikrovikt eller som omedelbara ZIP-paket.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverterare BMP till WebP: Den mest extrema storleksminskningen som är möjlig',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Att konvertera BMP till WebP är utan tvekan den mest spektakulära transformationen du kan göra med en bild. BMP-formatet (Bitmap) är ett av de äldsta och tyngsta formaten i det digitala ekosystemet: det lagrar varje pixel utan någon form av komprimering, vilket resulterar i filer som kan väga 20, 50 eller till och med 100 gånger mer än deras moderna motsvarighet. WebP, utvecklat av Google, tillämpar senaste generationens komprimeringsalgoritmer som minskar storleken till det absolut möjliga minimumet samtidigt som en utmärkt visuell kvalitet bibehålls.',
  },
  {
    type: 'title',
    text: 'Varför är BMP så tungt och WebP så effektivt?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP-formatet föddes på 80-talet för Windows, när diskutrymmet var enormt och komprimering inte var en prioritet. Varje pixel sparas som den är, utan någon reduktionsalgoritm: en bild på 1920x1080 pixlar i BMP upptar exakt 5,93 MB, oberoende av dess innehåll. Detta gör det idealiskt för interna skärmdumpar eller redigering utan förlust, men helt olämpligt för webben eller modern lagring.',
  },
  {
    type: 'paragraph',
    html: 'WebP använder prediktiv komprimering baserad på block och DCT-transformering (samma teknik som ligger till grund för digital video), vilket gör att samma 1920x1080-bild upptar mellan 80 KB och 300 KB. Det innebär en minskning på 95 till 99% jämfört med den ursprungliga BMP-filen. Dessutom stöder WebP alfakanal för transparens och både förlustbringande och förlustfri komprimering, vilket erbjuder total mångsidighet.',
  },
  {
    type: 'title',
    text: 'Jämförelse: Molnkonverterare vs Vår lokala arkitektur',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Verktyg som laddar upp dina BMP-filer till en fjärrserver för bearbetning.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Att ladda upp en 20 MB BMP tar minuter med långsam anslutning',
          'Dina bilder förblir lagrade på andras servrar',
          'Storleksbegränsningar som utesluter stora BMP-filer',
          'Invasiv reklam och dataspårare',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning i din webbläsare via Vanilla JS-teknik och Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar konvertering utan nätverksöverföring',
          'Absolut integritet — 0 byte lämnar din enhet',
          'Inga storleksbegränsningar per fil',
          'Fungerar utan internetanslutning',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den tekniska konverteringen fungerar i webbläsaren',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'När du drar en BMP-fil läser webbläsaren den som en binär Blob i RAM-minnet. Denna Blob laddas in i ett <code>Image</code>-element i JavaScript, som avkodar det med den inbyggda bildmotorn. Därefter ritas bilden på ett osynligt HTML5-elemet <code>Canvas</code>. Canvas fungerar som en virtuell duk där bilden existerar i sin form pixel för pixel.',
  },
  {
    type: 'paragraph',
    html: 'När den ritas på Canvas kör vi metoden <code>toBlob()</code> med MIME-typen <code>image/webp</code> och önskad kvalitetsnivå. Webbläsaren tillämpar internt WebP-komprimeringsalgoritmen och genererar en ny Blob med den resulterande filen. Denna Blob omvandlas till en direkt nedladdnings-URL som din webbläsare sparar på disken. Vid inget tillfälle etableras någon nätverksanslutning.',
  },
  {
    type: 'tip',
    title: 'Det största möjliga komprimeringssprånget',
    html: 'Konvertering från BMP till WebP kan uppnå en minskning av filstorleken på 99%. En 20 MB BMP kan förvandlas till en WebP på knappt 200 KB med praktiskt taget identisk visuell kvalitet. Det är den mest effektiva transformationen tillgänglig bland standardbildformat.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet för WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Webbpublicering — Chrome, Firefox, Safari, Edge och alla moderna webbläsare.',
      'Sociala nätverk — Instagram, Twitter, Facebook accepterar WebP lokalt.',
      'Webbappar och PWA — minimala storlekar för omedelbar laddning.',
      'Effektiv arkivering — ersätter kollektioner av gamla BMP:er och sparar gigabyte.',
      'E-postmarknadsföring — lätta bilder som laddas snabbt i alla moderna e-postklienter.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: Den mest effektfulla konverteringen med ett enda klick',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Om du har gamla BMP-filer från Windows, okomprimerade skärmdumpar eller bilder från gamla verktyg, är konvertering till WebP den mest effektfulla åtgärden du kan vidta för att optimera din lagring och webbprestanda. Med vårt verktyg är konverteringen omedelbar, privat och utan begränsningar — precis som den ska vara.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
