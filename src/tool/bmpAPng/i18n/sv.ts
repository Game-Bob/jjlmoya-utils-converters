import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'konvertera-bmp-till-png';
const title = 'Konverterare från BMP till PNG';
const description =
  'Konvertera BMP-bilder till PNG utan kvalitetsförlust. Modern komprimering utan artefakter. Utan att ladda upp filer. Gratis och 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra BMP-filer hit...',
  convertText: 'För att konvertera dem till PNG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Vad är den främsta skillnaden mellan BMP och PNG?',
    answer:
      'Både BMP och PNG är förlustfria format. Skillnaden ligger i optimeringen: PNG förstår moderna komprimeringsalgoritmer för att spara samma bild genom att uppta 5 eller 10 gånger mindre minne än BMP.',
  },
  {
    question: 'Är konverteringen verkligen privat?',
    answer:
      'Ja. All bildbehandling görs av din dator. Absolut ingen har tillgång till dina filer under den lokala överföringen.',
  },
  {
    question: 'Varför PNG istället för JPEG i det här fallet?',
    answer:
      'Om du har en BMP-fil beror det på att bilden har exakta färger. Att omvandla en BMP till den destruktiva JPG-standarden skulle smutsa ner dina rena färger. PNG skyddar den troheten.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Infoga ditt fotografi',
    text: 'Flytta lugnt BMP-källfilerna till vårt område för att släppa webbelement.',
  },
  {
    name: 'Konvertering utan nätverksöverföring',
    text: 'Upplev på bara en sekund den rena bearbetningen som görs lokalt av din HTML5 JS.',
  },
  {
    name: 'Få rena PNG-filer',
    text: 'Ladda ner PNG-kopiorna individuellt eller via ett komprimerat paket.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Konverterare från BMP till PNG: Den förlustfria ersättningen för BMP-formatet',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP är ett format utan komprimering som upptar enorma mängder utrymme utan någon teknisk fördel jämfört med PNG. Båda är förlustfria format: de sparar varje pixel med absolut exakthet. Men PNG lägger till förlustfri komprimering genom Deflate-algoritmen, vilket minskar filstorleken mellan 3 och 5 gånger utan att offra en enda bit av visuell information. PNG är i huvudsak vad BMP alltid velat vara.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG: samma kvalitet, radikalt annorlunda storlek',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Den grundläggande skillnaden mellan BMP och PNG ligger inte i bildkvaliteten - båda är förlustfria - utan i lagringseffektiviteten. BMP lagrar pixlar rått: utan komprimering, utan optimering, utan hänsyn till utrymme. PNG analyserar återkommande pixelmönster och kodar dem kompakt genom Deflate, samma algoritm som ZIP använder.',
  },
  {
    type: 'paragraph',
    html: 'Förutom den överlägsna komprimeringen lägger PNG till en funktion som BMP aldrig hade: full alfakanal för transparens. Skärmdumpar, gränssnittsgrafik, logotyper, tekniska diagram: alla dessa typer av bilder drar stor nytta av konverteringen till PNG, som behåller varje exakt färgvärde samtidigt som filens vikt minskas till en bråkdel av originalet.',
  },
  {
    type: 'title',
    text: 'Arkitekturjämförelse: Lokal vs Moln',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Molnkonverterare',
        description: 'Tjänster som bearbetar dina BMP-filer på tredjepartsservrar.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Dina arbetsbilder skickas över internet',
          'Väntetid proportionell mot BMP-filens storlek',
          'Storleksbegränsningar i gratisplaner',
          'Risk för analys eller lagring av dina filer',
        ],
      },
      {
        title: 'Vår lokala arkitektur',
        description: 'Direkt bearbetning på din hårdvara via Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP-filen bearbetas lokalt, lämnar aldrig din enhet',
          'Omedelbar konvertering på millisekunder',
          'Inga storleksbegränsningar eller begränsningar på antal filer',
          'Total integritet: 0 byte skickas externt',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hur den lokala konverteringen från BMP till PNG fungerar',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Processen använder HTML5 Canvas API. BMP-filen läses in med webbläsarens <code>FileReader</code> API och avkodas som en Blob i minnet. Denna Blob ritas på en osynlig HTML5-canvas. Därefter tillämpar metoden <code>toDataURL(\'image/png\')</code> webbläsarens inbyggda PNG-komprimeringsalgoritm och genererar den resulterande filen.',
  },
  {
    type: 'paragraph',
    html: 'Till skillnad från konverteringen till JPG är konverteringen till PNG helt förlustfri: varje färgvärde från den ursprungliga BMP-filen bevaras exakt i den resulterande PNG-filen. Det finns inga artefakter, ingen kantutjämning, ingen informationsförlust. Den slutliga filen är visuellt identisk med BMP men upptar mellan 3 och 5 gånger mindre utrymme på disken.',
  },
  {
    type: 'paragraph',
    html: 'Om du arbetar med äldre programvara som exporterar BMP (industriella maskiner, kontrollsystem, medicinsk diagnostisk programvara), är konvertering till PNG det bästa beslutet. PNG är kompatibelt med absolut alla moderna program, behåller den perfekta färgåtergivningen och upptar upp till 5 gånger mindre utrymme. Det är den enklaste och säkraste migrationen som är möjlig.',
  },
  {
    type: 'title',
    text: 'Användningsfall och kompatibilitet för den resulterande PNG-filen',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Skärmdumpar och gränssnittsgrafik med exakt bevarade färger.',
      'Bilder för teknisk dokumentation och programvarudiagram.',
      'Exporter från CAD, industriella system och äldre programvara.',
      'Logotyper och varumärkeselement med tillagd transparens.',
      'Kompatibel med Adobe Photoshop, GIMP, Figma och alla moderna redigeringsprogram.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats: PNG är vad BMP alltid borde ha varit',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Att konvertera BMP till PNG är den mest naturliga moderniseringen av en bildfil: samma förlustfria kvalitet, högre kompatibilitet, stöd för transparens och mellan 3 och 5 gånger mindre vikt. Vårt verktyg utför denna konvertering på millisekunder direkt i din webbläsare, utan att ladda upp någon fil till någon server.',
  },
];


export const content: BmpAPngLocaleContent = {
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
