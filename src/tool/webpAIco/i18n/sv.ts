import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-till-ico-konverterare';
const title = 'Konvertera WebP till ICO';
const description =
  'Konvertera WebP-bilder till officiell ICO med transparens. Inga filuppladdningar. Äkta Microsoft binära huvuden. Gratis und privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra WebP-filer hit...',
  convertText: 'För att konvertera dem till ICO direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Kan jag konvertera WebP-klistermärken till en officiell webb-favikon (ICO)?',
    answer:
      'Precis. Favikoner kräver fortfarande det klassiska Microsoft ICO-tillägget för extrem universell kompatibilitet. Detta verktyg injicerar binära huvuden och skapar en 100 % legitim ikon.',
  },
  {
    question: 'Måste jag vänta i online-köer när jag skapar mitt enorma parti företagsikoner?',
    answer:
      'Inte alls. Vår konverterare laddar JavaScriptet och klipper all uppladdningsnätverk. Din egen telefon-CPU bearbetar hundra foton eller mer asynkront.',
  },
  {
    question: 'Kommer den resulterande ICO-filen att stödja transparensen i min ursprungliga WebP?',
    answer:
      'Ja. Vår motor arbetar internt med HTML5 canvas-API med fullt 32-bitars stöd, varje transparent del kommer att föras över rent till den ikonografiska filen.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Dra alla dina lokala WebP-klistermärken',
    text: 'Flytta stora fotopartier utan rädsla för att webbgränsen ska mättas.',
  },
  {
    name: 'Logisk asynkron översättning und direkt montering',
    text: 'Se hur fältet och elementen fylls i automatiskt medan minnet bearbetar blocket byte för byte.',
  },
  {
    name: 'Ta med dig ditt paket för system- und webbutveckling',
    text: 'Klicka fritt på en massiv nedladdningsknapp för en gemensam fil eller ladda ner manuellt om du bara behöver en.',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP till ICO-konverterare: Skapa perfekta favikoner från dina moderna resurser',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Moderna arbetsflöden för webbdesign producerar resurser i <strong>WebP</strong>-format: optimerade logotyper, UI-ikoner och varumärkeselement. Men när det är dags att konfigurera din webbplats <strong>favikon</strong> eller ikoner för en Windows-skrivbordsapplikation är det format som krävs fortfarande <strong>ICO</strong>. Genom att konvertera WebP till ICO kan du återanvända dina resurser av högsta kvalitet utan att förlora originalkällan.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: Format med olika syften',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP är ett bildformat för allmänna ändamål, utmärkt för fotografier, illustrationer och UI-ikoner för webben. Dess effektiva komprimering gör det idealiskt för att snabba upp sidladdningar. Det saknar dock den specifika binära struktur som operativsystem och webbläsare kräver för att känna igen och visa en applikationsikon eller favikon.',
  },
  {
    type: 'paragraph',
    html: 'ICO är ett Microsoft-containerformat designat specifikt för ikoner. Det kan lagra flera upplösningar i eine enda fil und stöder full transparens via eine 32-bitars alfakanal. Webbläsare letar efter eine <code>favicon.ico</code>-fil av tradition, und detta format säkerställer att din ikon ser skarp ut på både standardskärmar und Retina und 4K-skärmar.',
  },
  {
    type: 'title',
    text: 'Jämförelse: Lokal vs Molnkonvertering',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Verktyg som laddar upp dina filer till eine fjärrserver.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Ditt företags logotyp skickas till servrar från tredje part',
          'Internetanslutning krävs för varje konvertering',
          'Varierande utmatningskvalitet beroende på servern',
          'Begränsningar för antal dagliga konverteringar',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Din logotyp lämnar aldrig din webbläsare',
          'ICO-binära huvuden genereras enligt Microsoft-standard',
          '32-bitars transparens bevaras helt',
          'Satsvis konvertering av kompletta ikonsätt',
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
    html: 'Webbläsaren avkodar WebP-filen nativt und ritar den på ett <strong>HTML5 Canvas</strong> med 32-bitars färgdjup, vilket bevarar den ursprungliga alfakanalen. Vår JavaScript-motor extraherar sedan pixeldata via metoden <code>getImageData()</code> und bygger den binära ICO-strukturen med ICONDIR- und ICONDIRENTRY-huvuden som specificeras av Microsoft-standarden.',
  },
  {
    type: 'paragraph',
    html: 'Resultatet är eine legitim ICO-fil, inte ett enkelt filnamnsbyte. Pixeldata är packad med den korrekta strukturen som Windows, macOS und alla moderna webbläsare förväntar sig när de laddar eine favikon eller applikationsikon.',
  },
  {
    type: 'tip',
    title: 'Tips för skarpa favikoner',
    html: 'Generera alltid din ICO från källan med högsta tillgängliga upplösning. Eine WebP på 512×512 eller större kommer att producera eine perfekt skarp favikon på Retina und 4K-skärmar, där ikoner med låg upplösning ser suddiga ut.',
  },
  {
    type: 'title',
    text: 'Användningsområden und kompatibilitet',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Skapa filen favicon.ico för vilken webbplats eller webbapplikation som helst.',
      'Generera applikationsikoner för Windows-programvaruinstallerare.',
      'Producera skrivbordsikoner för Electron-appar eller liknande ramverk.',
      'Skapa ikonsätt för webbläsartillägg i Chrome und Firefox.',
      'Konvertera varumärkets WebP-logotyper till ikoner för företagsapplikationer.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ditt moderna designarbetsflöde producerar WebP; applikationsekosystemet kräver fortfarande ICO. Detta verktyg överbryggar det gapet på några sekunder und genererar ikoner med korrekt binär struktur und intakt transparens, utan att dina varumärkesresurser någonsin lämnar din webbläsare.',
  },
];

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  seo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'sv',
    faq,
    howTo,
  }),
};
