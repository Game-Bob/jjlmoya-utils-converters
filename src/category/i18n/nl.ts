import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'afbeelding-converters',
  title: 'Online Afbeelding Converters',
  description: 'Gratis tools om afbeeldingen te converteren tussen PNG, JPG, WebP, SVG, AVIF, GIF, BMP en ICO formaten. Alles wordt lokaal in je browser verwerkt zonder iets naar het internet te uploaden.',
  seo: [
    {
      type: 'summary',
      title: 'Waarom onze converters gebruiken',
      items: [
        '100% lokale conversie: je afbeeldingen verlaten nooit je apparaat.',
        'Ondersteuning voor 21 formaatcombinaties: PNG, JPG, WebP, SVG, AVIF, GIF, BMP en ICO.',
        'Batchverwerking met ZIP-download.',
        'Geen registratie, geen limieten, geen storende advertenties.',
      ],
    },
    {
      type: 'title',
      text: 'Beeldconversie: De Volledige Formaatgids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De keuze van het juiste afbeeldingsformaat heeft direct invloed op webprestaties, apparaatcompatibiliteit en waargenomen visuele kwaliteit. Onze <strong>online afbeelding converters</strong> dekken de meest gevraagde conversieroutes door ontwerpers, webontwikkelaars en fotografen, allemaal zonder te vertrouwen op externe servers die de privacy van je bestanden in gevaar kunnen brengen.',
    },
    {
      type: 'title',
      text: 'PNG, JPG en WebP: De Drie Pijlers van Modern Webdesign',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG-formaat</strong> valt op door zijn verliesvrije compressie en ondersteuning voor transparantie (alfakanaal), en is de standaard voor logo\'s, iconen en afbeeldingen with scherpe randen. <strong>JPG-formaat</strong> biedt maximale universele compatibiliteit en gereduceerde bestandsgroottes voor foto\'s, maar offert kwaliteit op bij elke opslag. Het door Google ontwikkelde <strong>WebP-formaat</strong> combineert het beste van beide: 30-40% betere compressie dan PNG/JPG met ondersteuning voor transparantie en animatie, en is nu het aanbevolen formaat door Core Web Vitals om LCP te verbeteren.',
    },
    {
      type: 'table',
      headers: ['Formaat', 'Transparantie', 'Compressie', 'Beste voor'],
      rows: [
        ['PNG', 'Ja', 'Lossless', 'Logo\'s, graphics, screenshots'],
        ['JPG', 'Nee', 'Lossy', 'Foto\'s, grote afbeeldingen'],
        ['WebP', 'Ja', 'Lossless/Lossy', 'Modern web, prestaties'],
        ['SVG', 'Ja', 'Vector', 'Schaalbare iconen, animaties'],
        ['AVIF', 'Ja', 'Superieur', 'Next-gen web'],
        ['ICO', 'Ja', 'Bitmap', 'Favicons, Windows iconen'],
      ],
    },
    {
      type: 'title',
      text: 'Volgende Generatie Formaten: AVIF en WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF-formaat</strong> (AV1 Image File Format) is de technologische opvolger van WebP en biedt tot 50% kleinere bestandsgroottes dan JPG bij dezelfde subjectieve kwaliteit. Hoewel de adoptie snel groeit, maakt de beperkte compatibiliteit in oudere systemen het converteren van AVIF naar meer gevestigde formaten zoals JPG, PNG of WebP tot een frequente behoefte in productieworkflows.',
    },
    {
      type: 'tip',
      title: 'Webprestatie tip',
      html: 'Om de laadsnelheid van de pagina te maximaliseren, gebruik WebP als het primaire formaat op je website met JPG/PNG fallbacks voor oudere browsers. Het HTML <code>picture</code> element met meerdere <code>source</code> tags stelt je in staat om het optimale formaat te serveren op basis van de ondersteuning van de browser van de bezoeker.',
    },
    {
      type: 'title',
      text: 'SVG, BMP en ICO: Speciale Toepassingen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG-bestanden</strong> zijn wiskundige vectoren die zonder kwaliteitsverlies schalen naar elke resolutie, perfect voor logo\'s en grafisch ontwerp. Veel platforms en bewerkingsprogramma\'s ondersteunen ze echter niet direct, waardoor het nodig is om ze te rasteren naar PNG of JPG voor distributie. <strong>BMP-bestanden</strong>, hoewel verouderd voor webgebruik, blijven gebruikelijk in Windows-omgevingen en oudere bewerkingssoftware. Ten slotte is het <strong>ICO-formaat</strong> de standaard voor web favicons en Windows icoonaanpassingen, waarvoor een specifieke binaire headerstructuur vereist is die onze converter systeemeigen genereert.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Combinaties', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privacy', value: '100% lokaal', icon: 'mdi:shield-lock' },
        { label: 'Formaten', value: '8 types', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Totale Privacy: Conversie zonder Servers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In tegenstelling tot andere online tools die je afbeeldingen naar externe servers uploaden (met de bijbehorende privacy- en veiligheidsrisico\'s), gebruiken onze converters uitsluitend systeemeigen browser-API\'s: <strong>Canvas 2D API</strong> voor rastering, <strong>FileReader API</strong> om bestanden lokaal te lezen en <strong>Blob/URL.createObjectURL</strong> voor downloads. Dit betekent dat je vertrouwelijke afbeeldingen, bedrijfslogo\'s of privédocumenten met volledige beveiliging kunt converteren.',
    },
  ],
};
