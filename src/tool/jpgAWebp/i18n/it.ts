import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'convertitore-jpg-in-webp';
const title = 'Converti JPG in WebP Online e Gratis';
const description =
  'Converti immagini JPG in WebP nel tuo browser. Compressione superiore senza perdita visibile. Nessun caricamento di file. Gratuito, illimitato e privato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file JPG...',
  convertText: 'Per convertirli istantaneamente in WebP',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Perché convertire le foto JPG in WebP?',
    answer:
      'WebP consente una compressione significativamente migliore dei tradizionali file JPG senza che l\'occhio umano noti la differenza, garantendo siti web più veloci e moderni.',
  },
  {
    question: 'Devo pagare per ogni immagine?',
    answer:
      'No, lo strumento è gratuito e tutto viene elaborato direttamente sul tuo computer. È illimitato sia per uso domestico che professionale.',
  },
  {
    question: 'La conversione è sicura?',
    answer:
      'Sì, assolutamente. Tutta l\'elaborazione avviene nell\'HTML5 Canvas del tuo browser locale senza inviare dati a server esterni.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Inserisci le tue foto JPG',
    text: 'Rilascia i tuoi file JPG o trascinali direttamente nell\'area superiore. Il rilevamento è istantaneo.',
  },
  {
    name: 'Elaborazione in WebP',
    text: 'Il motore di rendering locale convertirà ogni file immagine in un WebP ultra-ottimizzato pronto per il web.',
  },
  {
    name: 'Scarica i risultati',
    text: 'Salva ogni WebP individualmente o scarica lo ZIP con tutti i file convertiti.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Studio sulla compressione Google WebP',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Fornisci immagini in formati moderni',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da JPG a WebP: Velocizza il tuo sito con il formato moderno di Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il formato <strong>JPG</strong> ha dominato la fotografia digitale per decenni: universalmente compatibile e ampiamente supportato. Ma Google ha progettato <strong>WebP</strong> per battere il JPG sul suo stesso terreno: stessa qualità visiva con dimensioni del file ridotte del 25-35%. Per gli sviluppatori e i team di marketing che lottano contro i caricamenti lenti delle pagine, convertire JPG in WebP è la singola ottimizzazione a più alto rendimento che si possa applicare senza toccare il design.',
  },
  {
    type: 'title',
    text: 'JPG o WebP? Quando utilizzare ciascun formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>JPG</strong> rimane la scelta giusta quando serve una compatibilità universale: e-mail ai clienti, documenti Word, piattaforme di social media legacy o sistemi CMS che non accettano ancora WebP. Il suo ecosistema trentennale garantisce che qualsiasi schermo, stampante o visualizzatore lo aprirà senza problemi. Il limite principale è la dimensione: un JPG header da 1,5 MB può penalizzare il punteggio LCP della tua pagina e non superare le soglie dei Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> è la scelta intelligente per tutti i contenuti del tuo sito web. Chrome, Firefox, Safari ed Edge lo supportano nativamente da anni. Le immagini dei prodotti nell\'e-commerce, i banner dei blog, le miniature dei video e qualsiasi foto pubblicata online ne beneficiano direttamente: pagine più leggere, migliori punteggi di Google PageSpeed Insights e un\'esperienza utente più fluida, specialmente su connessioni mobili lente.',
  },
  {
    type: 'title',
    text: 'Confronto: Conversione Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Strumenti che caricano i tuoi file su un server remoto.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latenza di rete durante il caricamento e il download',
          'Le tue foto vengono memorizzate su server di terze parti',
          'Limiti di dimensione dei file e tetti di conversione giornalieri',
          'Annunci intrusivi e tracker di terze parti',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocità istantanea — latenza di rete zero',
          'Privacy completa — 0 byte inviati esternamente',
          'Nessun limite di MB o restrizioni sul numero di file',
          'Interfaccia pulita, senza pubblicità o tracciamento',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona tecnicamente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Quando trascini un JPG nello strumento, il browser crea un <strong>oggetto Blob</strong> che risiede solo nella tua RAM. Quel Blob viene decodificato e disegnato su un elemento <strong>HTML5 Canvas</strong> invisibile. Poiché il JPG non ha un canale alfa, la conversione in WebP è diretta: il motore esporta il canvas chiamando <code>toDataURL(\'image/webp\')</code>, generando un flusso di byte che il tuo sistema operativo scarica istantaneamente — senza coinvolgere alcun server.',
  },
  {
    type: 'paragraph',
    html: 'L\'algoritmo di compressione WebP combina tecniche di predizione a blocchi (simili a quelle di VP8, il codec video di Google) con trasformazioni di colore e codifica aritmetica. Il risultato è un file che contiene le stesse informazioni percettive del JPG originale ma impacchettate in modo molto più efficiente, il che significa meno kilobyte trasferiti ad ogni visita della pagina.',
  },
  {
    type: 'tip',
    title: 'Suggerimento Core Web Vitals: LCP e peso dell\'immagine',
    html: 'Il <strong>Largest Contentful Paint (LCP)</strong> è la metrica di Google che misura quanto tempo occorre per caricare l\'elemento visivo più grande della tua pagina. Un JPG header da 1,5 MB può diventare un WebP di soli 900 KB — o addirittura 600 KB — senza differenze visive evidenti. Quel <strong>risparmio del 25-35%</strong> può spostare il tuo LCP da "Necessita miglioramento" a "Buono" e spingerti in alto nelle classifiche di ricerca.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Immagini prodotto su negozi WooCommerce o Shopify: meno peso, più conversioni.',
      'Fotografia per blog e articoli: miglior punteggio PageSpeed senza riprogettare nulla.',
      'Banner web e creatività pubblicitarie display: file più leggeri con la stessa nitidezza.',
      'Gallerie di portfolio per studi di architettura, fotografia o design.',
      'Miniature video su siti di streaming o piattaforme di corsi online.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertire i tuoi JPG in WebP è oggi una delle ottimizzazioni più semplici ed efficaci che si possano applicare a qualsiasi sito web. Con questo strumento lo fai in pochi secondi, gratuitamente e senza che le tue immagini lascino mai il tuo dispositivo. Meno kilobyte, miglior LCP, pagine più veloci — tutto con l\'esatto aspetto visivo che avevi già.',
  },
];


export const content: JpgAWebpLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'it', faq, howTo }),
};
