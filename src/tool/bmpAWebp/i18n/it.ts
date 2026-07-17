import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convertitore-bmp-a-webp';
const title = 'Convertire BMP in WebP Gratis';
const description =
  'Converti le immagini BMP in WebP offline. Riduci file enormi a kilobyte. Senza caricare file su server. Gratuito, offline e completamente privato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file BMP...',
  convertText: 'Per convertirli in WebP istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Perché i miei file BMP occupano 10 volte di più e cosa guadagno ad averli in WebP?',
    answer:
      'Il BMP salva mappe di pixel non compresse. Il WebP usa una compressione matematica per ridurre enormi BMP a meno di un megabyte mantenendo l\'immagine estremamente riconoscibile.',
  },
  {
    question: 'Devo registrare un account?',
    answer:
      'Non richiediamo email e il tuo materiale rimarrà isolato, poiché l\'elaborazione viene eseguita dal Javascript del browser installato sul tuo PC, senza invio remoto.',
  },
  {
    question: 'Posso trascinare molti file contemporaneamente?',
    answer:
      'Sì, puoi trascinare 50 o 100 file se il tuo hardware regge l\'elaborazione di tutti senza creare code.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identificare i file grezzi',
    text: 'Posiziona le tue collezioni di mappe bit in finestre pronte per il trasferimento.',
  },
  {
    name: 'Attivazione Nativa del Batch',
    text: 'Proietta o trascina tutti i file sulla nostra tavola digitale.',
  },
  {
    name: 'Evacuazione del Batch WebP',
    text: 'Clicca sui risultati e otterrai separatamente l\'immagine in disco dai micro-pesi o come file compressi immediati.',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore BMP a WebP: La Riduzione di Dimensioni Più Estrema Possibile',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Convertire BMP in WebP è, senza dubbio, la trasformazione più spettacolare che si possa fare con un\'immagine. Il formato BMP (Bitmap) è il formato più antico e pesante dell\'ecosistema digitale: memorizza ogni pixel senza alcun tipo di compressione, risultando in file che possono pesare 20, 50 o anche 100 volte più del loro equivalente moderno. Il WebP, sviluppato da Google, applica algoritmi di compressione di ultima generazione che riducono le dimensioni al minimo possibile mantenendo un\'eccellente qualità visiva.',
  },
  {
    type: 'title',
    text: 'Perché il BMP è così pesante e il WebP così efficiente?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il formato BMP è nato negli anni \'80 per Windows, quando lo spazio su disco era enorme e la compressione non era una priorità. Ogni pixel viene salvato così com\'è, senza alcun algoritmo di riduzione: un\'immagine di 1920x1080 pixel in BMP occupa esattamente 5,93 MB, indipendentemente dal suo contenuto. Questo lo rende ideale per screenshot interni o editing senza perdite, ma completamente inappropriato per il web o l\'archiviazione moderna.',
  },
  {
    type: 'paragraph',
    html: 'WebP utilizza una compressione predittiva basata su blocchi e trasformate DCT (la stessa tecnologia che sta alla base del video digitale), riuscendo a far sì che la stessa immagine da 1920x1080 occupi tra 80 KB e 300 KB. Ciò comporta una riduzione dal 95 al 99% rispetto al BMP originale. Inoltre, WebP supporta il canale alfa per le trasparenze e compressioni sia con perdita che senza perdita, offrendo una versatilità totale.',
  },
  {
    type: 'title',
    text: 'Confronto: Convertitori Cloud vs La Nostra Architettura Locale',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Strumenti che caricano i tuoi file BMP su un server remoto per elaborarli.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Caricare un BMP da 20 MB richiede minuti con una connessione lenta',
          'Le tue immagini rimangono memorizzate su server altrui',
          'Limiti di dimensione che escludono file BMP di grandi dimensioni',
          'Pubblicità invasiva e tracker di dati',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta nel tuo browser tramite tecnologia Vanilla JS e Canvas API.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Conversione istantanea senza trasferimento di rete',
          'Privatatezza assoluta - 0 byte escono dal tuo dispositivo',
          'Senza limiti di dimensione per file',
          'Funziona senza connessione a Internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione tecnica nel browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Trascinando un file BMP, il browser lo legge come un Blob binario nella memoria RAM. Questo Blob viene caricato in un elemento <code>Image</code> di JavaScript, che lo decodifica usando il motore di immagini nativo. Successivamente, l\'immagine viene dipinta su un elemento <code>Canvas</code> HTML5 invisibile. Il Canvas funge da tela virtuale dove l\'immagine esiste nella sua forma pixel per pixel.',
  },
  {
    type: 'paragraph',
    html: 'Una volta dipinta sul Canvas, eseguiamo il metodo <code>toBlob()</code> con il tipo MIME <code>image/webp</code> e il livello di qualità desiderato. Il browser applica internamente l\'algoritmo di compressione WebP e genera un nuovo Blob con il file risultante. Questo Blob viene convertito in un URL di download diretto che il tuo browser salva su disco. In nessun momento viene stabilita alcuna connessione di rete.',
  },
  {
    type: 'tip',
    title: 'Il più grande salto di compressione possibile',
    html: 'La conversione da BMP a WebP può ottenere una riduzione del 99% della dimensione del file. Un BMP da 20 MB può trasformarsi in un WebP di appena 200 KB con una qualità visiva praticamente identica. È la trasformazione più efficiente disponibile tra i formati di immagine standard.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità di WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Pubblicazione web - Chrome, Firefox, Safari, Edge e tutti i browser moderni.',
      'Social network - Instagram, Twitter, Facebook accettano WebP in modo nativo.',
      'Applicazioni web e PWA - dimensioni minime per caricamento istantaneo.',
      'Archiviazione efficiente - sostituisce collezioni di BMP legacy risparmiando gigabyte.',
      'Email marketing - immagini leggere che caricano velocemente in qualsiasi client mail moderno.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: La conversione più impattante in un solo clic',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Se hai file BMP ereditati da Windows, screenshot non compressi o immagini da strumenti datati, convertirli in WebP è l\'azione più impattante che puoi intraprendere per ottimizzare lo spazio di archiviazione e le prestazioni web. Con il nostro strumento, la conversione è istantanea, privata e senza limiti - esattamente come dovrebbe essere.',
  },
];


export const content: BmpAWebpLocaleContent = {
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
