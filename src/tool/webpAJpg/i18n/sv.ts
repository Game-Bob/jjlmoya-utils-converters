import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-till-jpg-konverterare';
const title = 'Konvertera WebP till JPG Online och Gratis';
const description =
  'Konvertera WebP-bilder till JPG utan att ladda upp filer. 100 % privat lokal bearbetning. Transparenta bakgrunder ersätts automatiskt med vitt.';

const ui: ImageConverterUI = {
  dragText: 'Dra WebP-filer hit...',
  convertText: 'För att konvertera dem till JPG direkt',
  selectFiles: 'Välj filer',
  processedFiles: 'Bearbetade filer',
  downloadAll: 'Ladda ner alla (.zip)',
  pending: 'Väntande': 'Bibliografiska Referenser',
  faqTitle: 'Vanliga Frågor',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Kan jag ladda upp privata bilder säkert?',
    answer:
      'Ja. Det finns ingen uppladdningsserver. Din webbläsare bearbetar WebP-filen på din dator och genererar en JPG-fil som du kan ladda ner. Ingen annan ser den.',
  },
  {
    question: 'Vad händer med min WebP-bakgrund om den är transparent?',
    answer:
      'Eftersom JPG inte stöder transparens kommer konverteraren automatiskt att fylla transparenta områden med en solid vit bakgrund.',
  },
  {
    question: 'Finns det någon gräns för konverteringar eller filstorlek?',
    answer:
      'Vi sätter inga begränsningar. Du kan konvertera hundratals bilder så länge din dator har tillräcklig processorkraft och RAM.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Dra dina filer',
    text: 'Släpp dina moderna WebP-filer i uppladdningsområdet eller välj dem med den interaktiva filbläddraren.',
  },
  {
    name: 'Lokal konvertering',
    text: 'Se hur den lokala motorn applicerar en bakgrund och tolkar varje pixel till det universella JPG-formatet.',
  },
  {
    name: 'Hämta dina resultat',
    text: 'Ladda ner individuellt eller använd ZIP-paketet för att samla alla dina nya fotografier.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP till JPG-konverterare: Universell kompatibilitet utan att kompromissa med integriteten',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> är Googles satsning på effektivitet: lättare bilder med kvalitet jämförbar med traditionell JPG. Dess kompatibilitet förblir dock ett problem i den verkliga världen. E-postklienter som Outlook, äldre designprogram, meddelandeappar och företagets arbetsflöden är fortfarande beroende av det allestädes närvarande <strong>JPG</strong>-formatet. Att konvertera WebP till JPG är bryggan mellan den moderna webben och den verkliga världen.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: När ska man använda respektive format?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP briljerar i kontrollerade miljöer: moderna webbplatser i Chrome, Edge eller Firefox där webbläsarkompatibilitet kan garanteras. Dess överlägsna komprimering minskar filstorleken med 25–35 % jämfört med motsvarande JPG, vilket förbättrar laddningstider och mätvärden för Core Web Vitals. Det är det ideala formatet när du kontrollerar visningsmiljön.',
  },
  {
    type: 'paragraph',
    html: 'JPG å andra sidan fungerar i <em>absolut alla sammanhang</em>: e-postbilagor, PowerPoint presentationer, Word dokument, hemmaskrivare, äldre redigeringsprogram och sociala medieplattformar utan undantag. Om du behöver att någon ska kunna öppna din bild utan tekniska hinder är JPG det rätta svaret.',
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
          'Dina foton skickas över internet till okända servrar',
          'Väntetid för uppladdning och fjärrbearbetning',
          'Dagliga begränsningar för filstorlek och gratis konverteringar',
          'Verklig risk för datalagring på servrar från tredje part',
        ],
      },
      {
        title: 'Vår Lokala Arkitektur',
        description: 'Direkt bearbetning på din hårdvara med Vanilla JS-teknik.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Noll byte skickas: allt sker i ditt RAM-minne',
          'Omedelbar hastighet utan att bero på din anslutning',
          'Inga gränser för filstorlek eller antal filer',
          'Perfekt för personliga, medicinska eller företagsfoton',
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
    html: 'När du drar en WebP-fil till verktyget avkodar webbläsaren den nativt med sin interna renderingsmotor. Filen ritas sedan på ett osynligt <strong>HTML5 Canvas</strong>-element. Eftersom JPG inte har stöd för transparens fyller algoritmen duken med en solid vit bakgrund innan bilden läggs ovanpå.',
  },
  {
    type: 'paragraph',
    html: 'Sista steget är export: Canvas-metoden <code>toDataURL(\'image/jpeg\')</code> omvandlar pixlarna till en högkvalitativ komprimerad JPG-byteström. Denna ström levereras direkt till webbläsarens nedladdningssystem, utan någon nätverkskommunikation. Hela processen tar millisekunder även för bilder på flera megapixel.',
  },
  {
    type: 'tip',
    title: 'Tips för kompatibilitet',
    html: 'När du delar foton med icke-tekniska användare eller skickar dem via e-post, använd alltid JPG – noll kompatibilitetsproblem i alla e-postklienter, operativsystem eller enheter, inga undantag och inga obehagliga överraskningar.',
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
      'Bifoga foton i e-postmeddelanden från Outlook, Gmail eller Apple Mail.',
      'Infoga bilder i Word dokument, Excel eller PowerPoint presentationer.',
      'Publicera på sociala medieplattformar som nekar WebP.',
      'Dela via WhatsApp eller meddelandeappar med begränsat formatstöd.',
      'Skriva ut fotografier hos utskriftstjänster som endast accepterar JPG eller PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Slutsats',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP är framtiden för webbbilder, men JPG förblir kungen av universell kompatibilitet. Detta verktyg låter dig korsa den bryggan på några sekunder, helt privat och utan att installera något. Din bild lämnar aldrig din enhet.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
