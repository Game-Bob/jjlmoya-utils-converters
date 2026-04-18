import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'convertitori-di-immagini',
  title: 'Convertitori di Immagini Online',
  description: 'Strumenti gratuiti per convertire immagini tra i formati PNG, JPG, WebP, SVG, AVIF, GIF, BMP e ICO. Tutto viene elaborato localmente nel tuo browser senza caricare nulla su Internet.',
  seo: [
    {
      type: 'summary',
      title: 'Perché usare i nostri convertitori',
      items: [
        'Conversione 100% locale: le tue immagini non lasciano mai il tuo dispositivo.',
        'Supporto per 21 combinazioni di formati: PNG, JPG, WebP, SVG, AVIF, GIF, BMP e ICO.',
        'Elaborazione batch con download in formato ZIP.',
        'Nessuna registrazione, nessun limite, nessuna pubblicità invasiva.',
      ],
    },
    {
      type: 'title',
      text: 'Conversione Immagini: Guida Completa ai Formati',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Scegliere il formato d\'immagine corretto ha un impatto diretto sulle prestazioni web, sulla compatibilità dei dispositivi e sulla qualità visiva percepita. I nostri <strong>convertitori di immagini online</strong> coprono i percorsi di conversione più richiesti da designer, sviluppatori web e fotografi, il tutto senza fare affidamento su server esterni che potrebbero compromettere la privacy dei tuoi file.',
    },
    {
      type: 'title',
      text: 'PNG, JPG e WebP: I Tre Pilastri del Web Design Moderno',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>formato PNG</strong> si distingue per la compressione senza perdita di dati e il supporto alla trasparenza (canale alfa), essendo lo standard per loghi, icone e grafiche con bordi netti. Il <strong>formato JPG</strong> offre la massima compatibilità universale e dimensioni ridotte per le foto, ma sacrifica la qualità a ogni salvataggio. Il <strong>formato WebP</strong>, sviluppato da Google, combina il meglio di entrambi: compressione migliore del 30-40% rispetto a PNG/JPG con supporto a trasparenza e animazioni, ed è ora il formato raccomandato da Core Web Vitals per migliorare l\'LCP.',
    },
    {
      type: 'table',
      headers: ['Formato', 'Trasparenza', 'Compressione', 'Ideale per'],
      rows: [
        ['PNG', 'Sì', 'Lossless', 'Loghi, grafiche, screenshot'],
        ['JPG', 'No', 'Lossy', 'Foto, immagini grandi'],
        ['WebP', 'Sì', 'Lossless/Lossy', 'Web moderno, performance'],
        ['SVG', 'Sì', 'Vettoriale', 'Icone scalabili, animazioni'],
        ['AVIF', 'Sì', 'Superiore', 'Web di nuova generazione'],
        ['ICO', 'Sì', 'Bitmap', 'Favicon, icone Windows'],
      ],
    },
    {
      type: 'title',
      text: 'Formati di Nuova Generazione: AVIF e WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>formato AVIF</strong> (AV1 Image File Format) è il successore tecnologico di WebP, offrendo dimensioni di file fino al 50% inferiori rispetto al JPG a parità di qualità soggettiva. Sebbene la sua adozione cresca rapidamente, la compatibilità limitata nei sistemi più vecchi rende la conversione da AVIF a formati più consolidati come JPG, PNG o WebP una necessità frequente nei flussi di lavoro di produzione.',
    },
    {
      type: 'tip',
      title: 'Consiglio per le prestazioni web',
      html: 'Per massimizzare la velocità di caricamento delle pagine, usa WebP come formato principale sul tuo sito web con fallback JPG/PNG per i browser più datati. L\'elemento HTML <code>picture</code> con tag <code>source</code> multipli ti consente di servire il formato ottimale in base al supporto del browser del visitatore.',
    },
    {
      type: 'title',
      text: 'SVG, BMP e ICO: Casi d\'Uso Speciali',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I <strong>file SVG</strong> sono vettori matematici che scalano senza perdite a qualsiasi risoluzione, perfetti per loghi e design grafico. Tuttavia, molte piattaforme e applicazioni di editing non li supportano direttamente, rendendo necessario rasterizzarli in PNG o JPG per la distribuzione. I <strong>file BMP</strong>, sebbene obsoleti per l\'uso web, rimangono comuni negli ambienti Windows e nei software di editing tradizionali. Infine, il <strong>formato ICO</strong> è lo standard per le favicon web e la personalizzazione delle icone di Windows, richiedendo una specifica struttura di intestazione binaria che il nostro convertitore genera nativamente.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Combinazioni', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privacy', value: '100% locale', icon: 'mdi:shield-lock' },
        { label: 'Formati', value: '8 tipi', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Privacy Totale: Conversione senza Server',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A differenza di altri strumenti online che caricano le tue immagini su server remoti (con i rischi per la privacy e la sicurezza che ne derivano), i nostri convertitori utilizzano esclusivamente API native del browser: <strong>Canvas 2D API</strong> per la rasterizzazione, <strong>FileReader API</strong> per leggere i file localmente e <strong>Blob/URL.createObjectURL</strong> per i download. Ciò significa che puoi convertire immagini riservate, loghi aziendali o documenti privati in completa sicurezza.',
    },
  ],
};
