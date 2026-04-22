import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'konvertera-jpg-till-ico';
const title = 'Konvertera JPG till ICO';
const description =
  'Konvertera JPG-foton till ICO med riktiga Microsoft binära headers. Automatisk kvadratisk beskärning. Inga filuppladdningar. Gratis och privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra JPG-filer hit...',
  convertText: 'För att konvertera dem till ICO direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande': 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Är den resulterande ICO-filen nativt kompatibel för att anpassa Windows-mappar?',
    answer:
      'Ja, vi skapar en 100 % autentisk Microsoft Icon Format-fil genom att infoga en standardiserad binär header på låg nivå i bildmatrisen.',
  },
  {
    question: 'Vad händer med proportionerna om mitt ursprungliga JPG är ett panoramafoto?',
    answer:
      'Den rigorösa globala ICO-standarden kräver absolut en perfekt kvadratisk bild. Vår HTML5 JS-motor kommer att centrera ditt foto och beskära överskottet, vilket garanterar ett balanserat resultat.',
  },
  {
    question: 'Är det farligt att ladda upp företagslogotyper eller personliga JPG-filer till konverteraren?',
    answer:
      'Canvas-motorn i JavaScript körs i din egen webbläsare. Att konvertera hundratals foton till ICO skickar inte en enda megabyte till något moln i tveksamma länder.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Samla de ursprungliga JPG-fotona',
    text: 'Hitta och samla de vanliga fotona och deponera dem genom att släppa dem i vår vänliga kvadrat.',
  },
  {
    name: 'Bevittna den binära purificationen',
    text: 'Omkodningen kommer att nativt och snabbt infoga metadata och headers asynkront och generera en strikt ren ikon i minnet.',
  },
  {
    name: 'Sammanställ flera ZIP-designer',
    text: 'Slutför jobbet genom att ladda ner allt massivt i ett kompakt paket på bara några sekunder.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG till ICO-konverterare: Skapa Favicons och Windows-ikoner från dina foton',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>-formatet är Microsofts standard for Windows-applikationsikoner och webbplatsers favicons. Till skillnad från att bara byta namn på en JPG till .ico, kräver en äkta ICO-fil en specifik binär struktur med 22-byte headers och en inbäddad bildkatalog. <strong>JPG</strong> är den vanligaste utgångspunkten for att skapa dessa ikoner — en företagslogotyp, ett profilfoto eller vilken bild som helst som du vill forvandla till din applikations eller webbplats visuella ikon.',
  },
  {
    type: 'title',
    text: 'JPG eller ICO? När du ska använda respektive format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> är ett källformat, inte ett målformat for ikoner. Perfekt for fotografier och banners, men inkompatibelt med system som kräver ikoner: Windows Explorer, webbläsarens bokmärkesfält, skrivbordsgenvägar eller PWA-applikationsmanifest. Ett operativsystem eller en webbläsare som letar efter en ikon forväntar sig ICO-formatet — och om den inte hittar det visas en generisk ikon eller en trasig kvadrat.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>-formatet designades for att innehålla flera upplösningar i en enda fil: <strong>16×16</strong> for bokmärkesfältet, <strong>32×32</strong> for genvägar, <strong>48×48</strong> for filutforskaren och <strong>256×256</strong> for högupplösta skärmar. Webbläsare och operativsystem väljer automatiskt lämplig upplösning baserat på visningssammanhanget — användaren behöver inte hantera någonting.',
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
        description: 'Verktyg som laddar upp dina filer till en fjärrserver.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Nätverkslatens vid uppladdning och nedladdning',
          'Dina företagslogotyper lagras på tredjepartsservrar',
          'Begränsningar i filstorlek och dagliga konverteringstak',
          'Påträngande annonser och spårare från tredje part',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar hastighet — noll nätverkslatens',
          'Komplett integritet — 0 byte skickas externt',
          'Inga MB-gränser eller begränsningar på antal filer',
          'Rent gränssnitt, inga annonser eller spårning',
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
    html: 'JPG-filen avkodas och ritas på ett <strong>HTML5 Canvas</strong> i minnet. Eftersom ICO-formatet kräver en kvadratisk bild detekterar motorn automatiskt om JPG-filen är rektangulär och beskär den genom att centrera den mest relevanta delen. Sedan bygger den standarden for Microsoft ICO-header med korrekt magic number (<code>00 00 01 00</code>), bildkatalogen und den kodade pixeldatan. Resultatet är en äkta binär .ico-fil — inte en omdöpt PNG.',
  },
  {
    type: 'paragraph',
    html: 'Eftersom JPG saknar en alfakanal kommer den resulterande ICO-filen inte heller att ha någon transparens — den kommer att ha en solid bakgrund som ärvts från det ursprungliga fotot. Om du behöver en favicon med transparent bakgrund (till exempel for att anpassa dig till mörka eller ljusa bokmärkesfält) är det rekommenderade arbetsflödet: ta bort bakgrunden i en redigerare, spara som PNG und använd PNG till ICO-konverteraren.',
  },
  {
    type: 'tip',
    title: 'Tips: flera upplösningar i en enda ICO',
    html: 'ICO-filer kan packa <strong>flera upplösningar</strong> i en enda fil — webbläsaren eller OS väljer automatiskt den lämpligaste for varje sammanhang. För bästa möjliga resultat, använd en kvadratisk JPG på minst <strong>256×256 pixlar</strong> som källa: detta ger konverteraren tillräckligt med information for att generera skarpa 16×16, 32×32 und 48×48 storlekar utan pixelering.',
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
      'Webbplatsens favicon: kompatibel med alla webbläsare inklusive Internet Explorer.',
      'Anpassning av mapp- und skrivbordsikoner i Windows 10/11.',
      'Genvägsikon for skrivbordsapplikationer eller installerare.',
      'Applikationsikon for Electron-projekt eller PWA-applikationer.',
      'Ikoner for filhanteringssystem und företagsutforskare.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Att konvertera en JPG till ICO är ett tekniskt nödvändigt steg for alla webb- eller skrivbordsprojekt som behöver en igenkännbar visuell identitet. Detta verktyg genererar autentiska ICO-filer med korrekt binär struktur på några sekunder, utan att ladda upp din logotyp till någon extern server. Resultatet fungerar i alla webbläsare, i Windows Explorer und i alla system som använder Microsofts ICO-standard.',
  },
];

export const content: JpgAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'sv',
    faq,
    howTo,
  }),
};
