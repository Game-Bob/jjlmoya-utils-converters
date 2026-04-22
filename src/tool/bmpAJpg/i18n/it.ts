import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'convertitore-bmp-a-jpg';
const title = 'Convertire BMP in JPG Online';
const description =
  'Converti le immagini BMP in JPG nel tuo browser. Riduci drasticamente le dimensioni. Senza caricare file su server. Gratuito e privato al 100%.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file BMP...',
  convertText: 'Per convertirli in JPG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Perché convertire BMP in JPG?',
    answer:
      'Il formato BMP non comprime i dati, risultando in file estremamente grandi. Il formato JPG comprime drasticamente l\'immagine mantenendo un\'eccellente qualità visiva per il web e la distribuzione.',
  },
  {
    question: 'È sicuro convertire le mie immagini qui?',
    answer:
      'Sicuro al 100%. La tua privacy è garantita poiché l\'elaborazione viene eseguita interamente a livello locale utilizzando il motore del tuo browser web.',
  },
  {
    question: 'Come funziona lo strumento?',
    answer:
      'Trascina semplicemente i tuoi file BMP e il nostro script JavaScript leggerà i pixel per ridisegnarli su un canvas HTML ed esportarli istantaneamente in codifica JPEG.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Carica i tuoi file BMP',
    text: 'Trascina e rilascia o seleziona le tue immagini in formato BMP nell\'area designata.',
  },
  {
    name: 'Elaborazione Automatica',
    text: 'Lo strumento rasterizza l\'immagine e applica il livello ottimale di compressione in formato JPG in millisecondi.',
  },
  {
    name: 'Download Singolo o Batch',
    text: 'Ottieni le tue nuove immagini ottimizzate per il web singolarmente o scaricando un file ZIP.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da BMP a JPG: Riduci un File Gigantesco in Pochi Secondi',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il BMP (Bitmap) è il formato più semplice dell\'informatica: memorizza ogni pixel così com\'è, senza alcun tipo di compressione. Uno screenshot di 1920x1080 in BMP pesa circa 6 MB. La stessa immagine in JPG occupa tra 200 e 400 KB con una qualità visivamente indistinguibile. La differenza è abissale e il nostro strumento ti consente di eseguire tale conversione in pochi secondi, direttamente nel tuo browser, senza caricare nulla su alcun server.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG: dati grezzi contro compressione intelligente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il formato BMP è stato creato da Microsoft nell\'era di Windows 3.1. La sua filosofia è la più semplice possibile: ogni pixel occupa 3 byte (rosso, verde, blu) e i pixel sono memorizzati in fila senza alcuna elaborazione aggiuntiva. Questa totale assenza di compressione rende i file BMP da 50 a 100 volte più grandi del loro equivalente in JPG, per fotografie e screenshot reali.',
  },
  {
    type: 'paragraph',
    html: 'Il JPG, per contro, utilizza la Trasformata Discreta del Coseno (DCT) per analizzare ogni blocco di 8x8 pixel ed eliminare le informazioni ad alta frequenza che l\'occhio umano percepisce a malapena. Il risultato è un\'immagine che sembra identica ma pesa una frazione dell\'originale. Per i file BMP provenienti da screenshot, scanner o applicazioni Windows legacy, la conversione in JPG è l\'azione di ottimizzazione più incisiva possibile.',
  },
  {
    type: 'title',
    text: 'Confronto di Architettura: Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertitori Cloud',
        description: 'Servizi che caricano i tuoi file BMP su server remoti per elaborarli.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Caricare un BMP da 10 MB richiede tempo con connessioni lente',
          'I tuoi screenshot e le tue immagini riservate viaggiano su Internet',
          'Limiti frequenti di dimensione nei piani gratuiti',
          'Doppia latenza: caricamento e download del file convertito',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware tramite tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Il BMP viene elaborato nella tua RAM e non viaggia verso un server',
          'Conversione istantanea senza attese',
          'Nessun limite di dimensione per file',
          'Privacy totale: 0 byte inviati all\'esterno',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione tecnica da BMP a JPG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Quando trascini un file BMP nello strumento, il browser lo legge con l\'API <code>FileReader</code> e lo decodifica come un oggetto Blob in memoria. Tale Blob viene renderizzato su un canvas HTML5 invisibile. Successivamente, il metodo <code>toDataURL(\'image/jpeg\')</code> applica l\'algoritmo di compressione JPEG sui dati del canvas e genera il file JPG risultante.',
  },
  {
    type: 'paragraph',
    html: 'Dato che il BMP non ha un canale alfa (non supporta le trasparenze), la conversione in JPG è diretta senza necessità di composizione con fondo bianco. L\'intero processo avviene nella memoria RAM del tuo computer, senza alcuna trasmissione di dati attraverso la rete, in millisecondi anche per file di vari megabyte.',
  },
  {
    type: 'tip',
    title: 'I BMP di Windows possono essere enormi',
    html: 'I file BMP generati dagli screenshot (tasto Stamp in Windows) o da applicazioni legacy come Paint possono pesare da 50 a 100 volte più di un JPG equivalente. Un singolo BMP a risoluzione Full HD può superare i 6 MB. Convertirli in JPG prima di inviarli via e-mail o caricarli su qualsiasi piattaforma è una pratica essenziale.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso e compatibilità del JPG risultante',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Ottimizzazione degli screenshot di Windows per l\'invio via e-mail.',
      'Conversione di immagini esportate da software legacy (CAD, vecchi scanner).',
      'Riduzione del peso per caricare immagini su piattaforme web e social network.',
      'Preparazione dei file per l\'inserimento in documenti Word, PowerPoint o PDF.',
      'Compatibilità universale con tutti i visualizzatori e browser moderni.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione: 10 MB di BMP, 500 KB di JPG, stessa immagine',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversione da BMP a JPG è uno degli esercizi di ottimizzazione più proficui nella gestione dei file immagine. Il nostro strumento esegue tale trasformazione in pochi secondi, senza caricare alcun file, senza creare alcun account, direttamente nel tuo browser. Il risultato è un JPG di alta qualità, universalmente compatibile e con un peso fino al 97% inferiore al BMP originale.',
  },
];


export const content: BmpAJpgLocaleContent = {
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
