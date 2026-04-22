import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'convertitore-jpg-in-ico';
const title = 'Convertitore da JPG a ICO';
const description =
  'Converti foto JPG in ICO con veri header binari Microsoft. Ritaglio quadrato automatico. Nessun caricamento di file. Gratuito e privato.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file JPG...',
  convertText: 'Per convertirli istantaneamente in ICO',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Il file ICO risultante è compatibile nativamente per personalizzare le cartelle di Windows?',
    answer:
      'Sì, creiamo un file Microsoft Icon Format autentico al 100% inserendo un header binario standardizzato a basso livello nella matrice dell\'immagine.',
  },
  {
    question: 'Cosa succede alla proporzione se la mia JPG originale è una foto panoramica orizzontale?',
    answer:
      'Il rigido standard globale ICO richiede assolutamente un\'immagine perfettamente quadrata. Il nostro motore HTML5 JS centrerà la tua foto e ritaglierà l\'eccesso, garantendo un risultato equilibrato.',
  },
  {
    question: 'È pericoloso caricare loghi JPG aziendali o personali nel convertitore?',
    answer:
      'Il motore Canvas in JavaScript risiede nel tuo browser fisico. Convertire centinaia di foto in ICO non invia un singolo megabyte a nessun cloud in paesi dubbi.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Raccogli le foto JPG originali',
    text: 'Trova e raccogli le foto convenzionali e depositatele trascinandole nel nostro amichevole quadrato.',
  },
  {
    name: 'Assisti alla purificazione esadecimale',
    text: 'La ricodifica inserirà nativamente e rapidamente metadati e header in modo asincrono, generando un\'icona pura e rigorosa in memoria.',
  },
  {
    name: 'Compila più design in ZIP',
    text: 'Termina la lavoro scaricando tutto massivamente in un pacchetto compatto in pochi secondi.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da JPG a ICO: Crea Favicon e Icone Windows dalle Tue Foto',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il formato <strong>ICO</strong> è lo standard di Microsoft per le icone delle applicazioni Windows e le favicon dei siti web. A differenza del semplice rinominare un JPG come .ico, un vero file ICO richiede una struttura binaria specifica con header da 22 byte e una directory delle immagini incorporata. Il <strong>JPG</strong> è il punto di partenza più comune per la creazione di queste icone: un logo aziendale, una foto del profilo o qualsiasi immagine che desideri trasformare nell\'icona visiva della tua applicazione o del tuo sito web.',
  },
  {
    type: 'title',
    text: 'JPG o ICO? Quando utilizzare ciascun formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>JPG</strong> è un formato sorgente, non una destinazione per le icone. Perfetto per fotografie e banner, ma incompatibile con i sistemi che richiedono icone: Esplora file di Windows, la barra dei preferiti del browser, i collegamenti sul desktop o i manifest delle applicazioni PWA. Un sistema operativo o un browser che cerca un\'icona si aspetta il formato ICO e, se non lo trova, visualizzerà un\'icona generica o un quadrato rotto.',
  },
  {
    type: 'paragraph',
    html: 'Il formato <strong>ICO</strong> è stato progettato per contenere più risoluzioni in un unico file: <strong>16×16</strong> per la barra dei preferiti, <strong>32×32</strong> per i collegamenti, <strong>48×48</strong> per l\'esplora file e <strong>256×256</strong> per i display ad alta densità. I browser e i sistemi operativi selezionano automaticamente la risoluzione appropriata in base al contesto di visualizzazione: l\'utente non deve gestire nulla.',
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
          'I tuoi loghi aziendali memorizzati su server di terze parti',
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
    html: 'Il JPG viene decodificato e disegnato su un <strong>HTML5 Canvas</strong> in memoria. Poiché il formato ICO richiede un\'immagine quadrata, il motore rileva automaticamente se il JPG è rettangolare und lo ritaglia centrando la parte più rilevante. Quindi costruisce l\'header standard di Microsoft ICO con il numero magico corretto (<code>00 00 01 00</code>), la directory delle immagini und i dati dei pixel codificati. Il risultato è un autentico file binario .ico, non un PNG rinominato.',
  },
  {
    type: 'paragraph',
    html: 'Poiché il JPG manca di un canale alfa, anche l\'ICO risultante non avrà trasparenza: avrà uno sfondo solido ereditato dalla fotografia originale. Se hai bisogno di una favicon con uno sfondo trasparente (ad esempio, per adattarla alle barre dei preferiti scure o chiare), il flusso di lavoro consigliato è: rimuovere lo sfondo in un editor, salvare come PNG und utilizzare il convertitore da PNG a ICO.',
  },
  {
    type: 'tip',
    title: 'Suggerimento: risoluzioni multiple in un unico ICO',
    html: 'I file ICO possono racchiudere <strong>risoluzioni multiple</strong> in un unico file: il browser o il sistema operativo scelgono automaticamente la più appropriata per ogni contesto. Per il miglior risultato possibile, usa come sorgente una JPG quadrata di almeno <strong>256×256 pixel</strong>: questo fornisce al convertitore informazioni sufficienti per generare dimensioni nitide da 16×16, 32×32 und 48×48 senza sgranature.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso und compatibilità',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Favicon del sito web: compatibile con tutti i browser, incluso Internet Explorer.',
      'Personalizzazione delle icone delle cartelle und del desktop in Windows 10/11.',
      'Icona di collegamento per applicazioni desktop o programmi di installazione.',
      'Icona dell\'applicazione per progetti Electron o applicazioni PWA.',
      'Icone per sistemi di gestione file ed esplora file aziendali.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertire una JPG in ICO è un passaggio tecnicamente essenziale per qualsiasi progetto web o desktop che necessiti di un\'identità visiva riconoscibile. Questo strumento genera ICO autentiche con la corretta struttura binaria, in pochi secondi, senza caricare il tuo logo su alcun server esterno. Il risultato funziona in tutti i browser, in Esplora file di Windows und in qualsiasi sistema che utilizzi lo standard ICO di Microsoft.',
  },
];

export const content: JpgAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'it',
    faq,
    howTo,
  }),
};
