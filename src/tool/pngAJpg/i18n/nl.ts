import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convert-png-naar-jpg';
const title = 'PNG naar JPG Online Converteren';
const description =
  'Converteer je PNG-afbeeldingen direct op je eigen computer naar het snel comprimerende JPG-formaat. Zonder foto\'s naar het internet te uploaden. Batch-optimalisatie.';

const ui: ImageConverterUI = {
  dragText: 'Sleep PNG-bestanden hierheen...',
  convertText: 'Om ze direct naar JPG te converteren',
  selectFiles: 'Bestanden selecteren',
  processedFiles: 'Verwerkte bestanden',
  downloadAll: 'Alles downloaden (.zip)',
  pending: 'In afwachting',
  bibliographyTitle: 'Bibliografische Referenties',
  faqTitle: 'Veelgestelde Vragen',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Waarom kiezen voor onze lokale PNG naar JPG converter?',
    answer:
      'In tegenstelling tot conventionele tools verwerkt onze utility de bestanden volledig in je browser. Je afbeeldingen raken nooit een externe harde schijf aan, wat de totale soevereiniteit en privacy van je gegevens garandeert.',
  },
  {
    question: 'JPG of PNG? Welke is beter voor mij?',
    answer:
      'PNG is ideaal voor logo\'s en elementen met transparantie. JPG is echter de gouden standaard voor foto\'s en webbanners, omdat het veel kleinere bestandsgroottes bereikt, wat de laadsnelheid van een site drastisch verbetert.',
  },
  {
    question: 'Hoe werkt de technische conversie zonder te uploaden?',
    answer:
      'We maken gebruik van de kracht van het HTML5 Canvas. De browser herschept de afbeelding op een onzichtbaar virtueel canvas, vult de transparanties met wit en genereert een byte-stream die je direct downloadt.',
  },
  {
    question: 'Is het veilig voor vertrouwelijke documenten?',
    answer:
      'Ja, het is de veiligste optie voor professionals in de banksector, gezondheidszorg of juridische sector. Omdat het een "black box" is die alleen je RAM gebruikt, gaan alle gegevens verloren zodra je het tabblad sluit, waardoor lekken in externe clouds worden voorkomen.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Bestandselectie',
    text: 'Bereid je PNG-bestanden voor in een map en sleep ze allemaal tegelijk naar het verwerkingsgebied of zoek ze op met de verkenner.',
  },
  {
    name: 'Directe verwerking',
    text: 'Controleer of de status voor elk bestand verandert in "Gereed" terwijl de browser de grootte lokaal optimaliseert.',
  },
  {
    name: 'Geoptimaliseerde download',
    text: 'Sla je nieuwe JPG\'s een voor een op of gebruik de knop "Alles downloaden" om een gecomprimeerd ZIP-bestand met alle afbeeldingen te krijgen.',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'PNG Consortium Specificaties',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'Het JPEG-comité',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG naar JPG Converter: De Ultieme Gids voor Beeldoptimalisatie',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'In de wereld van digitaal ontwerp en webontwikkeling is efficiëntie alles. Het PNG-formaat (Portable Network Graphics) is geliefd om zijn vermogen om transparanties te behouden en zijn verliesvrije compressie, maar het heeft één grote vijand: het bestandsgewicht. Wanneer je wilt dat je website vliegt of je e-mails direct laden, is de overstap van PNG naar JPG de slimste technische beslissing.',
  },
  {
    type: 'title',
    text: 'JPG of PNG?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Er bestaat geen formaat dat beter is dan een ander, maar eerder een tool voor elke behoefte. PNG is een verliesvrij formaat, ideaal voor interface-mockups, logo\'s met kleine tekst en visuele elementen die een transparante achtergrond vereisen. Deze getrouwheid heeft echter een prijs: bestanden die 5 of 10 keer zwaarder kunnen zijn dan hun gecomprimeerde equivalent.',
  },
  {
    type: 'paragraph',
    html: 'JPG (Joint Photographic Experts Group) daarentegen gebruikt discretiseringsalgoritmen om informatie te verwijderen die het menselijk oog nauwelijks waarneemt, waardoor vederlichte gewichten worden bereikt. Het is de gouden standaard voor foto\'s, advertentie banners en sociale media. Door je PNG\'s naar JPG te converteren, ruil je geometrische getrouwheid in voor netwerksnelheid.',
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
        description: 'Traditionele tools die je foto\'s naar een externe server uploaden.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Netwerklatentie (Upload/Download)',
          'Risico op lekken van privégegevens',
          'Limieten voor bestandsgrootte per bestand',
          'Advertenties en trackers',
        ],
      },
      {
        title: 'Onze Lokale Architectuur',
        description: 'Directe verwerking op je hardware via Vanilla JS-technologie.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Directe snelheid zonder netwerk',
          'Gegarandeerde privacy (0 bytes verzonden)',
          'Geen MB-limieten per bestand',
          'Professionele en schone interface',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Hoe de technische conversie werkt',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Je vraagt je waarschijnlijk af hoe het mogelijk is om een afbeelding te converteren zonder deze naar een server te sturen. De magie zit in de kracht van moderne browsers. Wanneer je een bestand selecteert, genereren we een Blob die alleen in je RAM bestaat. Die Blob wordt getekend op een onzichtbaar HTML5 Canvas-element.',
  },
  {
    type: 'paragraph',
    html: 'Omdat JPG geen transparantie ondersteunt, vult ons algoritme de achtergrond met een effen witte kleur voordat het PNG-bestand er "op wordt geschilderd". Zodra de afbeelding is samengesteld, voeren we de eigen exportmethode uit, waarbij een byte-stream wordt gegenereerd die je computer direct downloadt.',
  },
  {
    type: 'tip',
    title: 'SEO tip: Het ideale gewicht',
    html: 'Google straft langzame websites actief af. Als je Largest Contentful Paint (LCP) hoog is door een head-PNG van 2MB, kan het converteren naar een JPG van 200KB je PageSpeed-statistieken direct verbeteren zonder visuele verschillen.',
  },
  {
    type: 'title',
    text: 'Beveiliging voor Bedrijven en Professionals',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Als je in gevoelige sectoren werkt zoals banken, gezondheidszorg of recht, is het uploaden van bestanden naar online converters een inbreuk op de beveiliging. Onze tool werkt als een "black box": wat er binnen gebeurt, blijft in je RAM. Het is de enige veilige manier om met vertrouwelijke documenten te werken.',
  },
  {
    type: 'title',
    text: 'Compatibiliteit van het resultaat',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Viewers voor Windows, macOS en mobiele apparaten.',
      'Sociale media (Instagram, LinkedIn, enz.).',
      'Kantoortools (Word, PowerPoint).',
      'Contentbeheersystemen (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusie: Optimaliseer als een professional',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Deze converter is niet zomaar een pagina; het is een stukje techniek dat is ontworpen om je leven gemakkelijker te maken. Of je nu een ontwikkelaar bent of een thuisgebruiker, hier heb je de ultieme oplossing om megabytes te besparen en je gegevens veilig te houden.',
  },
];


export const content: PngAJpgLocaleContent = {
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
