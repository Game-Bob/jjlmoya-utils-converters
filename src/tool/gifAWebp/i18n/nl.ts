import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-naar-webp-converteren';
const title = 'GIF naar statische WebP Online Converteren';
const description =
  'Converteer geanimeerde GIF\'s naar statische WebP. Behoudt transparantie. Geen server nodig. Lokaal verwerkt in je browser. Gratis.';

const ui: ImageConverterUI = {
  dragText: 'Sleep GIF-bestanden hierheen...',
  convertText: 'Om ze direct naar WebP te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Waarom een geanimeerd bestand bevriezen naar het moderne statische WebP-formaat?',
    answer:
      'WebP is de compressiestandaard van Google; het is opmerkelijk lichtgewicht en behoudt transparantie op een schone manier. De overstap van GIF naar WebP elimineert de zware animatie en zorgt voor een enorme winst in websnelheid.',
  },
  {
    question: 'Blijft de originele avatar transparant?',
    answer:
      'Ja, in tegenstelling tot JPEG respecteert de WebP-container het complexe alfakanaal. Alle contouren blijven perfect zoals ze van nature waren.',
  },
  {
    question: 'Waar worden de bestanden naar geüpload?',
    answer:
      'Er is geen upload. De verwerking wordt volledig uitgevoerd door de JavaScript van de browser op je eigen pc, zonder enige verzending op afstand.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Start een geanimeerde lawine',
    text: 'Verplaats en drop tientallen memes in de gemarkeerde zone zonder externe verbinding.',
  },
  {
    name: 'Getuige van de grote onzichtbare verandering',
    text: 'Bekijk hoe een voortgangsindicator elke milliseconde verandert terwijl de lokale canvas-decoder de output genereert.',
  },
  {
    name: 'Sla je schone verzameling resultaten op',
    text: 'Neem de geëxtraheerde bestanden afzonderlijk op of druk op Download Zip om alles te verpakken.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF naar WebP Converter: De moderne vervanger voor zware animaties',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Geanimeerde GIF\'s zijn de dinosaurussen van de moderne webcontent: ze verbruiken buitensporige bandbreedte, verslechteren de PageSpeed van elke pagina en zijn verantwoordelijk voor een aanzienlijk percentage van het totale gewicht op duizenden websites. Een typische geanimeerde GIF van 5 MB kan een WebP-animatie van minder dan 1 MB worden met dezelfde visuele kwaliteit. WebP is de moderne opvolger die Google specifiek heeft ontworpen om GIF op het web te vervangen.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP: De kloof tussen het verleden en het heden van het web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF is een formaat uit 1987 dat oorspronkelijk niet bedoeld was voor animaties - die functie kwam later als een hack. Het palet van 256 kleuren, de inefficiënte compressie en het onvermogen om audio te verwerken maken het een verouderd formaat. WebP, ontwikkeld door Google in 2010, biedt superieure compressie (zowel met als zonder verlies), systeemeigen ondersteuning voor animaties en een volledig alfakanaal.',
  },
  {
    type: 'paragraph',
    html: 'Voor een webontwikkelaar kan het vervangen van GIF\'s door WebP op pagina\'s een verbetering van 10 tot 30 punten in de Google PageSpeed score betekenen. Minder paginagewicht betekent betere Core Web Vitals, betere SEO-rankings en lagere bandbreedtekosten op servers. Het is niet alleen een esthetische verbetering - het is een technische architectuurbeslissing.',
  },
  {
    type: 'title',
    text: 'Architectuurvergelijking: Lokaal vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Cloud Converters',
        description: 'Platforms die je GIF\'s op externe servers verwerken.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Je animaties reizen over het internet naar servers van derden',
          'Wachttijd door netwerklatentie bij upload en download',
          'Groottebeperkingen (grote GIF\'s worden vaak geweigerd)',
          'Risico op bewaring en analyse van bestanden',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je eigen hardware met Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'De GIF verlaat nooit je apparaat',
          'Directe conversie zonder netwerkwachttijd',
          'Geen groottebeperkingen: verwerk GIF\'s van elk gewicht',
          'Totale privacy: 0 bytes worden extern verzonden',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de lokale GIF naar WebP conversie werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'De lokale conversie maakt gebruik van de HTML5 Canvas API. De GIF wordt geladen als een systeemeigen browser Image-element. Door het op een canvas te tekenen, legt de grafische engine het eerste animatieframe vast met alle transparantie-informatie. De methode <code>toDataURL(\'image/webp\')</code> exporteert het frame direct in het RAM-geheugen als WebP.',
  },
  {
    type: 'paragraph',
    html: 'WebP ondersteunt een volledig alfakanaal, dus GIF-transparanties blijven behouden in de resulterende WebP zonder dat er een achtergrond hoeft te worden toegevoegd. WebP-compressiealgoritmen zijn aanzienlijk efficiënter dan GIF of PNG, wat de drastische vermindering van de bestandsgrootte van de uiteindelijke output verklaart.',
  },
  {
    type: 'tip',
    title: 'Gegarandeerde verbetering van de PageSpeed',
    html: 'Een geanimeerde GIF van 5 MB kan een WebP van minder dan 1 MB worden. Als je GIF\'s op je website hebt, kan het vervangen ervan door WebP onmiddellijk je Largest Contentful Paint (LCP) en Total Blocking Time (TBT) verbeteren, wat direct invloed heeft op je SEO-rankings.',
  },
  {
    type: 'title',
    text: 'Gebruiksscenario\'s en compatibiliteit van de resulterende WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Vervangen van GIF\'s op webpagina\'s om de PageSpeed-scores te verbeteren.',
      'Geoptimaliseerde avatars en stickers voor Discord, Slack en moderne platforms.',
      'Banners en visuals voor digitale marketingcampagnes.',
      'Animaties in progressive web applications (PWA).',
      'Compatibel met Chrome, Edge, Firefox, Safari 14+ en alle moderne browsers.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: migreer je GIF\'s naar de 21e eeuw',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Elke GIF op je website is een gemiste kans voor optimalisatie. Onze tool converteert GIF\'s direct, privé en zonder beperkingen naar WebP, rechtstreeks in je browser. Het resultaat: bestanden die tot 5 keer kleiner zijn, perfecte transparantie en compatibiliteit met alle moderne browsers.',
  },
];


export const content: GifAWebpLocaleContent = {
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
