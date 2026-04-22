import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'convertitore-jpg-a-png';
const title = 'Convertire JPG in PNG Online e Gratis';
const description =
  'Converti le immagini JPG in PNG nel tuo browser senza caricare file. Conversione lossless, gratuita e totalmente privata.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file JPG...',
  convertText: 'Per convertirli in PNG istantaneamente',
  selectFiles: 'Seleziona i file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Quando dovrei usare da JPG a PNG?',
    answer:
      'Ogni volta che devi modificare testo o loghi all\'interno di una fotografia. Se salvi un JPG più volte, questo si degrada. Il PNG congela la compressione.',
  },
  {
    question: 'Il file PNG avrà immediatamente lo sfondo trasparente?',
    answer:
      'No. Il JPG originale era piatto e senza quel tipo di canale strutturale. Il PNG risultante preparerà quel contenitore, poi dovrai isolare l\'elemento usando Photoshop o un altro editor.',
  },
  {
    question: 'Questo sito ha limiti di traffico?',
    answer:
      'Grazie alle tecnologie Edge senza dipendenze cloud, il peso della tua conversione non comporta limiti perché utilizza interamente il tuo terminale informatico o mobile.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Trascina JPG nel pannello',
    text: 'Carica immagini statiche in formato JPG utilizzando il mouse o il selettore del computer.',
  },
  {
    name: 'Esecuzione Lossless',
    text: 'Il software Vanilla spinge i bit del quadro verso un involucro senza perdite nativo della famiglia PNG.',
  },
  {
    name: 'Termina Sessione',
    text: 'Fai clic sul pannello e il tuo browser depositerà gli asset web scaricati nelle tue cartelle utente.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da JPG a PNG: Editing senza perdite e trasparenza',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>JPG</strong> è insuperabile per le fotografie scattate con la fotocamera, ma ha un tallone d\'Achille: ogni volta che salvi il file viene applicata nuovamente la sua compressione con perdita, degradando progressivamente i bordi e le sfumature. Il <strong>PNG</strong> utilizza una compressione senza perdita: una volta salvato, i pixel sono immutabili. Convertire un JPG in PNG è l\'operazione chiave quando devi preparare un\'immagine per l\'editing intensivo, aggiungere uno sfondo trasparente o integrarla in un flusso di progettazione che richiede più salvataggi.',
  },
  {
    type: 'title',
    text: 'JPG o PNG? Quando usare ogni formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>JPG</strong> è il re della fotografia: pesi ridotti, compatibile con tutto. Ma i suoi artefatti di compressione si accumulano ad ogni modifica e salvataggio. Se devi ritagliare, ritoccare o aggiungere testo a un\'immagine ripetutamente, iniziare dal JPG significa introdurre un degrado in ogni ciclo. Inoltre, il JPG è privo di canale alfa: non può avere sfondi trasparenti, il che lo squalifica per loghi, icone ed elementi di UI.',
  },
  {
    type: 'paragraph',
    html: 'Il <strong>PNG</strong> è la scelta corretta per i loghi aziendali, gli screenshot con testo nitido, gli elementi di interfaccia, le immagini di prodotto con sfondo bianco che dovrai ritagliare in seguito o qualsiasi risorsa grafica che verrà modificata più di una volta. La compressione senza perdita garantisce che i bordi del testo rimangano perfettamente definiti e che i colori piatti rimangano puri, senza rumore JPEG.',
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
          'Latenza di rete in upload e download',
          'Le tue immagini rimangono su server altrui',
          'Limiti di dimensioni e conversioni giornaliere',
          'Pubblicità intrusiva e tracker di terze parti',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware tramite tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Velocità istantanea — zero latenza di rete',
          'Privacy totale — 0 byte inviati all\'esterno',
          'Nessun limite di MB né di numero di file',
          'Interfaccia pulita, senza annunci o tracciamenti',
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
    html: 'Il processo è puramente locale: il browser crea un <strong>Blob</strong> con il JPG selezionato e lo disegna su un <strong>Canvas HTML5</strong> in memoria. Una volta renderizzato, viene chiamato <code>toDataURL(\'image/png\')</code> — il codec PNG integrato nel browser ricodifica ogni pixel senza applicare alcuna nuova compressione con perdita. Il risultato è un PNG che preserva fedelmente lo stato attuale del JPG: né meglio né peggio, semplicemente congelato.',
  },
  {
    type: 'paragraph',
    html: 'Il PNG risultante utilizzerà la compressione DEFLATE senza perdita, la stessa impiegata da strumenti professionali come Photoshop o GIMP. La sua dimensione sarà maggiore rispetto al JPG originale — normalmente tra 2 e 5 volte — perché memorizza tutti i pixel senza scartare informazioni. È il prezzo da pagare per la fedeltà e l\'editabilità infinita.',
  },
  {
    type: 'tip',
    title: 'Importante: il PNG non recupera la qualità JPEG',
    html: 'Convertire un JPG in PNG <strong>non recupera la qualità persa</strong> durante la compressione JPEG originale. Se il tuo JPG presentava già artefatti di blocco o rumore di colore, il PNG li conserverà intatti: evita semplicemente che se ne aggiungano altri. Pensa alla conversione come a un "congelamento" dello stato attuale dell\'immagine in modo che le modifiche future non la degradino ulteriormente.',
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
      'Loghi ed elementi di marca che necessitano di uno sfondo trasparente dopo il ritaglio.',
      'Screenshot con testo che verranno modificati e risalvati più volte.',
      'Immagini di prodotto per l\'e-commerce che richiedono uno sfondo bianco pulito e ritagliabile.',
      'Risorse grafiche per presentazioni PowerPoint o Google Slides.',
      'Asset di interfaccia utente per applicazioni web e mobili dove la nitidezza dei bordi è fondamentale.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversione da JPG a PNG è il primo passo in qualsiasi flusso di lavoro di progettazione serio. Non trasforma la qualità originale, ma protegge ogni pixel da future modifiche. Con questo strumento, il processo avviene all\'istante e in modo completamente privato, senza che le tue immagini aziendali o personali lascino mai il tuo dispositivo.',
  },
];


export const content: JpgAPngLocaleContent = {
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
