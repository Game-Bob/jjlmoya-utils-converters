import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'bild-till-base64-konverterare';
const title = 'Bild till Base64 konverterare Online';
const description =
  'Konvertera valfri bild till Base64-kod och Data URI direkt i din webbläsare. Inga filuppladdningar. Gratis, privat och omedelbart.';

const ui: ImageToBase64UI = {
  dragTitle: 'Dra din bild hit',
  dragSubtext: 'eller klicka för att bläddra bland dina filer',
  formatBadge: 'Stöder JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Klar för CSS / HTML src="")',
  base64Label: 'Endast Base64 (Ren kodad text)',
  copyBtn: 'Kopiera',
  dataUriPlaceholder: 'Ladda upp en bild för att se Data URI-koden...',
  base64Placeholder: 'Ladda upp en bild för att se den rena Base64-koden...',
  toastMessage: 'Koden kopierad till urklipp!',
  invalidImageAlert: 'Vänligen ladda upp en giltig bildfil.',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Vad är Base64 och vad används det till i webbutveckling?',
    answer:
      'Base64 är ett kodningssystem som konverterar binära data till en ASCII-textsträng. Inom webbutveckling används det för att bädda in bilder direkt i HTML- eller CSS-filer via Data URI:er, vilket minskar antalet HTTP-anrop till servern.',
  },
  {
    question: 'Är det säkert att konvertera mina bilder till Base64 här?',
    answer:
      'Absolut säkert och privat. Vårt verktyg fungerar 100% lokalt i din webbläsare. Dina bilder laddas aldrig upp till eller behandlas på någon extern server.',
  },
  {
    question: 'Vilka bildformat stöder Base64-konverteraren?',
    answer:
      'Verktyget är kompatibelt med JPG, PNG, GIF, WebP och till och med SVG-vektorfiler. När bilden laddas detekteras automatiskt dess MIME-typ för att generera den exakta Data URI-koden.',
  },
  {
    question: 'När ska jag INTE använda Base64-bilder?',
    answer:
      'Du bör undvika att använda Base64-bilder för stora fotografier eller högupplösta bilder. Base64-kod tar upp cirka 33% mer plats än den ursprungliga binära filen, vilket kan blåsa upp dina CSS-stilmallar eller HTML-dokument överdrivet mycket.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Dra eller välj din bild',
    text: 'Flytta valfri bild (JPG, PNG, WebP, SVG, GIF) till uppladdningsområdet för att starta konverteringen.',
  },
  {
    name: 'Kopiera den genererade koden',
    text: 'Du kommer att se två textfält: den kompletta Data URI-koden (klar att använda i src="" eller CSS) och den rena Base64-koden för andra ändamål.',
  },
  {
    name: 'Använd koden i ditt projekt',
    text: 'Klistra in Data URI direkt i src för en img-tagg eller i din CSS som background-image utan att behöva externa filer.',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Bild till Base64-konverterare: Bädda in bilder utan HTTP-anrop',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 är en kodningsteknik som transformerar binära data - som en bild - till en ren ASCII-textsträng. Resultatet är en Data URI: en självständig URL som börjar med <code>data:image/png;base64,...</code> och innehåller hela den kodade bilden. Genom att bädda in denna kod direkt i din HTML, CSS eller JSON, laddas bilden utan något extra HTTP-anrop till servern - noll nätverkslatens, omedelbar laddning.',
  },
  {
    type: 'title',
    text: 'När man ska använda Base64-bilder',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Huvudargumentet för Base64 är elimineringen av nätverksanrop. Varje bild på en webbsida innebär ett HTTP-anrop med dess overhead för anslutning, DNS, TLS-handskakning och latens. För mycket små kritiska bilder - applikationens huvudlogotyp, favicon, en UI-ikon - eliminerar inbäddning i Base64 i CSS eller HTML den kostnaden och garanterar att de visas omedelbart även innan webbläsaren har hunnit cacha något.',
  },
  {
    type: 'paragraph',
    html: 'Denna teknik är särskilt kraftfull i SPA-appar (Single Page Application) där JavaScript- och CSS-paketet genereras vid byggtiden: att bädda in små bilder i paketet garanterar att de laddas tillsammans med koden utan extra anrop. Det är också oumbärligt för HTML-e-postmeddelanden, där e-postklienter blockerar externa bilder men nästan alltid visar inbäddade Data URI:er.',
  },
  {
    type: 'title',
    text: 'Användningsområden för Base64-bilder',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> för kritiska ikoner.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> för UI-SVG:er.',
      'JSON och REST API:er: skicka bilder som textdata i JSON-objekt.',
      'HTML-e-postmeddelanden: inbäddade bilder som visas även när klienten blockerar externa URL:er.',
      'SVG-inbäddning: bädda in rasterbilder inuti SVG-filer som inline-data.',
    ],
  },
  {
    type: 'title',
    text: 'Hur konverteringen fungerar i webbläsaren',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'När du väljer eller drar en bild på plats, läser webbläsarens <code>FileReader</code>-API den direkt från disken som binära data i RAM-minnet. Metoden <code>readAsDataURL()</code> konverterar de binära byten till deras Base64-representation med RFC 4648-algoritmen - var 3:e byte av originaldata representeras som 4 ASCII-tecken från Base64-alfabetet. Resultatet inkluderar den automatiskt detekterade korrekta MIME-typen.',
  },
  {
    type: 'tip',
    title: 'Använd det endast för små bilder (under 10 KB)',
    html: 'Base64 ökar filstorleken med cirka 33%: en bild på 10 KB blir ~13,3 KB text. För små ikoner och logotyper är denna kostnad minimal och elimineringen av HTTP-anropet kompenserar för det. För fotografier eller stora bilder är storleksökningen betydande - använd alltid ett CDN för stora bilder.',
  },
  {
    type: 'title',
    text: 'När man INTE ska använda Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Undvik Base64 för stora bilder: använd ett CDN istället',
    html: 'Om du har bilder som är större än 10-20 KB, skadar Base64 prestandan: det blåser upp HTML/CSS-storleken, förhindrar att webbläsaren kan cacha bilden oberoende och blockerar renderingen medan tolken bearbetar den gigantiska strängen. För stora bilder, leverera alltid från ett CDN med lämpliga cache-headers.',
  },
  {
    type: 'title',
    text: 'Kompatibilitet och integritet',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI:er är kompatibla med 100% av moderna webbläsare och de flesta e-postklienter. Vårt verktyg bearbetar allt lokalt via FileReader-API:et - dina bilder lämnar aldrig din enhet. Detta gör det lämpligt för företagsbilder, privata skärmdumpar eller annat konfidentiellt visuellt innehåll som du behöver konvertera till Base64.',
  },
  {
    type: 'title',
    text: 'Slutsats: Det snabbaste och mest privata inbäddningsverktyget',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Att konvertera bilder till Base64 är en nischad men mycket kraftfull teknik när den tillämpas korrekt. Använd den för små, kritiska bilder där noll HTTP-anrop gör skillnad, och undvik den för stora bilder där ett CDN alltid vinner. Med vårt verktyg får du Data URI på ett ögonblick, utan att ladda upp något till någon server.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'sv', faq, howTo }),
};
