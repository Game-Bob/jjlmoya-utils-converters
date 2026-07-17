import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'konvertera-png-till-ico';
const title = 'Konvertera PNG till ICO Online';
const description =
  'Konvertera PNG till ICO med riktiga binära headers. Transparens bevaras. Inga filuppladdningar. Gratis och 100 % privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra PNG-filer hit...',
  convertText: 'För att konvertera dem till ICO direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Är din konverterare en skapare av enkla förtäckta PNG-filer eller en äkta ICO?',
    answer:
      'Vi skapar en riktig ICO. Vi extraherar data från din PNG, skapar den standardiserade Microsoft hexadekimala headern (Header + Directory på 22 byte), ändrar storlek till det ideala kvadratiska formatet lokalt och sätter ihop en slutlig fil som valideras som nativ.',
  },
  {
    question: 'Bevaras transparens när min logotyp placeras i ikonen?',
    answer:
      'Absolut ja. Vår motor läser din PNG i 32 bitar, förankrar den och bevarar noggrant alla transparenta genomskinliga hål så att de sticker ut i den universella adressfältet (Favicon).',
  },
  {
    question: 'Lagras min företagslogotyp på dina servrar?',
    answer:
      'Denna tjänst garanterar noll kontakt med externa nätverk. Konverteraren fungerar förankrad i din interna HTML5 Canvas; tillverkningen av din ikon sker till hundra procent inuti din machine i rent hemligt lokalt minne.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Dra filer för att överföra',
    text: 'Placera dina bildmatriser (kvadratisk 512x512 PNG är idealisk) på den interaktiva lokala ramen.',
  },
  {
    name: 'Automatische Bytecodskompilering',
    text: 'Du kommer att se fältet köras internt när den lokala matrisen av renade ICO-hexadecimala headers laddas och tillverkas.',
  },
  {
    name: 'Samla eller kom iväg med din ZIP',
    text: 'Ladda ner dem genom att klicka på en megasamling för dina webbplatser (globala ZIP-knappar) eller ladda ner miniatyren för den körbara Windows-filen.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG till ICO-konverterare: Den bästa källan för Favicons med perfekt transparens',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG med transparens</strong> är det ideala utgångsmaterialet för att skapa professionella ICO-ikoner. Till skillnad från JPG (som inte har någon alfakanal) eller format med dataförlust, ger PNG dig exakt vad ICO-formatet behöver: skarpa pixlar, rena kanter och en 32-bitars alfakanal som gör att ikonen kan integreras perfekt över vilken bakgrund som helst - oavsett om det är Safaris vita bokmärkesfält, Firefox mörka fält eller Windows 11-skrivbordet.',
  },
  {
    type: 'title',
    text: 'PNG eller ICO? När du ska använda respektive format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> är arbetsformatet: det är där du designar din logotyp, exporterar från Figma eller Illustrator och sparar dina redigerbara versioner. Dess transparens, pixelprecision och förlustfria komprimering gör det oslagbart för designprocessen. Men webbläsare, operativsystem und Windows-applikationer som letar efter en favicon eller appikon accepterar inte PNG direkt - de behöver ICO.',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> är distributionsformatet för ikoner i Microsoft-miljöer und på webben. Det innehåller en specifik binär struktur som gör att flera upplösningar kan packas i en enda fil: webbläsaren läser ICO-filens interna katalog und väljer automatiskt <strong>16×16</strong> för webbläsarfliken, <strong>32×32</strong> för genvägar, <strong>48×48</strong> för filutforskaren und <strong>256×256</strong> för Retina- und 4K-skärmar. Att utgå från en transparent PNG garanterar at alla dessa upplösningar får perfekta kanter utan vita ytterkanter.',
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
          'Nätverkslatens vid uppladdning und nedladdning',
          'Din företagslogotyp lagras på tredjepartsservrar',
          'Begränsningar i filstorlek und dagliga konverteringstak',
          'Påträngande annonser und spårare från tredje part',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Omedelbar hastighet - noll nätverkslatens',
          'Komplett integritet - 0 byte skickas externt',
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
    html: 'PNG-filen avkodas till ett <strong>HTML5 Canvas</strong> i minnet med fullt stöd för 32-bitars alfakanal. Motorn bygger standarden för Microsoft ICO-header med korrekt magic number (<code>00 00 01 00</code>), bildkatalogen med dimensioner und dataoffset, und pixeldatan samtidigt som transparensinformationen bevaras. Resultatet är en äkta binär .ico-fil som Windows, macOS und alla webbläsare känner igen nativt.',
  },
  {
    type: 'paragraph',
    html: 'Transparensen i PNG-filen bevaras helt i den resulterande ICO-filen - transparenta pixlar förblir transparenta, halvtransparenta pixlar behåller sitt exakta alfavärde und opaka pixlar behåller sin ursprungliga färg. Detta är avgörande för logotyper på varierande bakgrunder: din favicon kommer att se korrekt ut i ljust läge, mörkt läge und alla kombinationer av webbläsargränssnittets färger.',
  },
  {
    type: 'tip',
    title: 'Tips: använd en 512×512 PNG som källa',
    html: 'För bästa möjliga resultat, använd en <strong>kvadratisk 512×512 PNG</strong> som källbild. Denna upplösning ger konverteraren tillräckligt med information för att generera alla standard ICO-storlekar med skärpa - från 16×16 favicon upp till 256×256 för högupplösta skärmar - utan pixelering eller förlust av kantdetaljer. Ju större käll-PNG, desto bättre kommer de små ikonstorlekarna att se ut.',
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
      'Transparent favicon för webbplatser: fungerar i Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'Ikon för PWA-applikation: manifest.json refererar till ICO-filen för skrivbordsinstallation.',
      'Anpassning av Windows 10/11-mappar med en företagslogotyp utan vit bakgrund.',
      'Genvägsikon för skrivbordsapplikationer, installerare und körbara filer.',
      'Ikon för webbläsartillägg för Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNG med transparens är utan tvekan den bästa utgångspunkten för att skapa ICO-ikoner av professionell kvalitet. Med detta verktyg sker konverteringen omedelbart, alfakanaler bevaras fullt ut und den resulterande filen är en äkta ICO met korrekt binär struktur. Ingen uppladdning av din logotyp till någon server, inga vattenstämplar, inga gränser - und perfekt transparens i alla storlekar.',
  },
];

export const content: PngAIcoLocaleContent = {
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
