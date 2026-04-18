import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bildkonverterare',
  title: 'Bildkonverterare Online',
  description: 'Gratis verktyg för att konvertera bilder mellan formaten PNG, JPG, WebP, SVG, AVIF, GIF, BMP och ICO. Allt bearbetas lokalt i din webbläsare utan att något laddas upp till internet.',
  seo: [
    {
      type: 'summary',
      title: 'Varför använda våra konverterare',
      items: [
        '100 % lokal konvertering: dina bilder lämnar aldrig din enhet.',
        'Stöd för 21 formatkombinationer: PNG, JPG, WebP, SVG, AVIF, GIF, BMP och ICO.',
        'Batchbearbetning med ZIP-nedladdning.',
        'Ingen registrering, inga gränser, inga påträngande annonser.',
      ],
    },
    {
      type: 'title',
      text: 'Bildkonvertering: Komplett formatguide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att välja rätt bildformat har en direkt inverkan på webbprestanda, enhetskompatibilitet och upplevd visuell kvalitet. Våra <strong>bildkonverterare online</strong> täcker de mest efterfrågade konverteringsvägarna av designers, webbutvecklare och fotografer, allt utan att förlita sig på externa servrar som kan äventyra integriteten för dina filer.',
    },
    {
      type: 'title',
      text: 'PNG, JPG och WebP: De tre pelarna i modern webbdesign',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG-formatet</strong> utmärker sig för sin förlustfria komprimering och stöd för transparens (alfakanal), och är standarden för logotyper, ikoner och grafik med skarpa kanter. <strong>JPG-formatet</strong> erbjuder maximal universell kompatibilitet och reducerade storlekar för foton, men offrar kvalitet vid varje sparande. <strong>WebP-formatet</strong>, utvecklat av Google, kombinerar det bästa av båda: 30–40 % bättre komprimering än PNG/JPG med stöd för transparens och animering, och är nu det rekommenderade formatet av Core Web Vitals för att förbättra LCP.',
    },
    {
      type: 'table',
      headers: ['Format', 'Transparens', 'Komprimering', 'Bäst för'],
      rows: [
        ['PNG', 'Ja', 'Förlustfri', 'Logotyper, grafik, skärmdumpar'],
        ['JPG', 'Nej', 'Förlustgivande', 'Foton, stora bilder'],
        ['WebP', 'Ja', 'Förlustfri/givande', 'Modern webb, prestanda'],
        ['SVG', 'Ja', 'Vektor', 'Skalbara ikoner, animationer'],
        ['AVIF', 'Ja', 'Överlägsen', 'Nästa generations webb'],
        ['ICO', 'Ja', 'Bitmapp', 'Favicons, Windows-ikoner'],
      ],
    },
    {
      type: 'title',
      text: 'Nästa generations format: AVIF och WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF-formatet</strong> (AV1 Image File Format) är den tekniska efterföljaren till WebP och erbjuder upp till 50 % mindre filstorlek än JPG vid samma subjektiva kvalitet. Även om användningen växer snabbt, gör begränsad kompatibilitet i äldre system att konvertering från AVIF till mer etablerade format som JPG, PNG eller WebP är ett vanligt behov i produktionsflöden.',
    },
    {
      type: 'tip',
      title: 'Tips för webbprestanda',
      html: 'För att maximera sidladdningshastigheten, använd WebP som huvudformat på din webbplats med JPG/PNG-fallbacks för äldre webbläsare. HTML-elementet <code>picture</code> med flera <code>source</code>-taggar gör att du kan servera det optimala formatet baserat på den besökande webbläsarens stöd.',
    },
    {
      type: 'title',
      text: 'SVG, BMP och ICO: Speciella användningsområden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG-filer</strong> är matematiska vektorer som skalar förlustfritt till valfri upplösning, perfekt för logotyper och grafisk design. Många plattformar och redigeringsprogram stöder dem dock inte direkt, vilket gör det nödvändigt att rastrera dem till PNG eller JPG för distribution. <strong>BMP-filer</strong>, även om de är föråldrade för webbanvändning, förblir vanliga i Windows-miljöer och äldre redigeringsprogram. Slutligen är <strong>ICO-formatet</strong> standarden för webbfavicons och Windows-ikonanpassning, vilket kräver en specifik binär huvudstruktur som vår konverterare genererar inbyggt.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Kombinationer', value: '21', icon: 'mdi:image-sync' },
        { label: 'Integritet', value: '100 % lokalt', icon: 'mdi:shield-lock' },
        { label: 'Format', value: '8 typer', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Total integritet: Konvertering utan servrar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Till skillnad från andra onlineverktyg som laddar upp dina bilder till fjärrservrar (med de integritets- och säkerhetsrisker det innebär), använder våra konverterare uteslutande inbyggda webbläsar-API:er: <strong>Canvas 2D API</strong> för rastrering, <strong>FileReader API</strong> för att läsa filer lokalt och <strong>Blob/URL.createObjectURL</strong> för nedladdningar. Detta innebär att du kan konvertera konfidentiella bilder, företagslogotyper eller privata dokument med fullständig säkerhet.',
    },
  ],
};
