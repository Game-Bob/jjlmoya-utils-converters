import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'konvertera-png-till-webp';
const title = 'Konvertera PNG till WebP Online och Gratis';
const description =
  'Konvertera PNG-bilder till WebP i din webbläsare. Upp till 40 % mindre filstorlek. Bevarar transparens. Inga filuppladdningar. Gratis och privat.';

const ui: ImageConverterUI = {
  dragText: 'Dra PNG-filer hit...',
  convertText: 'För att konvertera dem till WebP direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande',
  bibliographyTitle: 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Varför konvertera PNG till WebP?',
    answer:
      'WebP erbjuder upp till 40 % bättre komprimering än PNG vid samma kvalitet, samtidigt som det stöder Alpha-transparens. Det är det format som rekommenderas av Google PageSpeed Insights.',
  },
  {
    question: 'Går transparens förlorad i processen?',
    answer:
      'Nej. Den tekniska implementeringen av WebP stöder alfakanalen. Transparensen i den ursprungliga PNG-filen kommer att bevaras i den nya WebP-filen.',
  },
  {
    question: 'Skickas mina bilder till någon server?',
    answer:
      'Nej. Koden körs exklusivt i din webbläsare (Client-Side). Vi ser, registrerar eller sparar aldrig de bilder du konverterar.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Lägg till dina PNG-filer',
    text: 'Släpp dina stora PNG-filer i uppladdningsområdet eller använd den traditionella interaktiva väljaren.',
  },
  {
    name: 'Kanalidentifiering',
    text: 'Den lokala renderingsmotorn kommer att identifiera och exportera pixelsammansättningen till det optimerade WebP-formatet.',
  },
  {
    name: 'Direkt nedladdning',
    text: 'Ladda ner dina högkomprimerade WebP-filer individuellt eller bunta ihop dem med hjälp av ZIP-paketkonverteraren.',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG till WebP-konverterare: Transparens och modern komprimering för webben',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> har varit referensformatet för webbbilder med transparens i årtionden - logotyper, ikoner, UI-element, produktbilder på utskurna bakgrunder. Problemet är filstorleken: den förlustfria komprimeringen som garanterar kvalitet genererar också märkbart stora filer. Googles <strong>WebP</strong> löser denna motsägelse: det stöder alfakanalen (transparens) <em>och</em> komprimerar mycket bättre än PNG, vilket gör bytet från PNG till WebP på din webbplats till en perfekt optimering som inte offrar något.',
  },
  {
    type: 'title',
    text: 'PNG eller WebP? När du ska använda respektive format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> förblir rätt format när kompatibilitet är avgörande: designverktyg som Photoshop eller Figma, arbetsflöden för utskrift, äldre skrivbordsapplikationer eller sammanhang där WebP-stöd inte kan garanteras. Det är också det ideala formatet för att spara arbetslager i redigeringsflöden, eftersom dess förlustfria komprimering bevarar varje pixel. Kostnaden: filer som kan väga 3-8 gånger mer än deras WebP-motsvarighet.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> är den naturliga ersättaren för PNG för allt modernt webbinnehåll. Chrome, Firefox, Safari och Edge stöder det alla nativt. En förlustfri WebP-bild är 26 % mindre än motsvarande PNG; i förlustläge kan den vara upp till 40 % mindre med praktiskt taget oskiljbar visuell kvalitet. Och avgörande för webbdesign: <strong>WebP bevarar alfa-transparens</strong> exakt som PNG, utan visuella kompromisser.',
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
          'Dina logotyper och bilder lagras på tredjepartsservrar',
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
    html: 'PNG-filen laddas lokalt och avkodas till ett <strong>HTML5 Canvas</strong> i minnet. Canvas-API:et bevarar alfakanalen från den ursprungliga PNG-filen - alla transparenta och halvtransparenta pixlar hålls intakta i RGBA-pixelbufferten. Canvasen exporteras sedan genom att anropa <code>toDataURL(\'image/webp\')</code>, vilket tillämpar webbläsarens WebP-codec (baserat på Googles libwebp) för att generera en mer kompakt fil utan att ändra transparensdatan.',
  },
  {
    type: 'paragraph',
    html: 'WebP använder två komprimeringslägen: förlustfritt läge för bilder där varje pixel måste vara exakt trogen originalet, och förlustläge för foton och element där små skillnader är omärkliga. Förlustfritt läge ger filer som är 26 % mindre än PNG; förlustläge kan uppnå minskningar på upp till 40 % jämfört med PNG med bibehållen utmärkt visuell kvalitet.',
  },
  {
    type: 'tip',
    title: 'Tips: WebP vinner över både PNG och JPG på webben',
    html: 'WebP i förlustfritt läge är mindre än PNG. WebP i förlustläge är mindre än JPG. Detta gör WebP till det <strong>enda formatet som ersätter båda</strong> i webbsammanhang. Konvertera dina transparenta PNG-filer till WebP innan du laddar upp dem: Google PageSpeed Insights upptäcker det och ger höga poäng i revisioner för "Leverera bilder i moderna format".',
  },
  {
    type: 'title',
    text: 'Användningsområden och kompatibilitet',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Logotyper och ikoner med transparent bakgrund för webbplatser och appar.',
      'Produktbilder med utskurna bakgrunder i e-handelsbutiker.',
      'CSS-sprites och UI-element med alfa-transparens.',
      'Rastrerade illustrationer och vektorgrafik för målsidor.',
      'Artikelminiatyrer med transparent bakgrund i bloggar och nyhetsportaler.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Bytet från PNG till WebP är den mest kompletta optimeringen av webbbilder som finns tillgänglig: du får lättare filer, bevarar transparens och förbättrar Core Web Vitals-mått utan att ändra någonting i din visuella design. Detta verktyg gör det omedelbart, gratis och helt privat - dina bilder bearbetas i din webbläsare och skickas aldrig till någon extern server.',
  },
];


export const content: PngAWebpLocaleContent = {
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
