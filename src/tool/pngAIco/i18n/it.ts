import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'convertitore-png-in-ico';
const title = 'Converti PNG in ICO Online';
const description =
  'Converti PNG in ICO con veri header binari. Trasparenze preservate. Nessun caricamento di file. Gratuito e privato al 100%.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file PNG...',
  convertText: 'Per convertirli in ICO istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Il vostro convertitore crea semplici file PNG mascherati o un vero ICO?',
    answer:
      'Creiamo un vero ICO. Estraiamo i dati dal tuo PNG, creiamo l\'header esadecimale standard di Microsoft (Header + Directory di 22 byte), ridimensioniamo localmente nel formato quadrato ideale e assembliamo un file finale convalidato come nativo.',
  },
  {
    question: 'Le trasparenze vengono preservate quando il mio logo viene inserito nell\'icona?',
    answer:
      'Assolutamente sì. Il nostro motore legge il tuo PNG a 32 bit, ancorandolo e preservando con precisione tutti i fori trasparenti in modo che risaltino nella barra degli indirizzi web universale (Favicon).',
  },
  {
    question: 'Il logo della mia azienda viene memorizzato sui vostri server?',
    answer:
      'Questo servizio garantisce zero contatti con la rete esterna. Il convertitore lavora ancorato nel tuo HTML5 Canvas interno; la produzione della tua icona avviene al cento per cento all\'interno della tua macchina in una memoria locale puramente segreta.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Trascina i file da trasferire',
    text: 'Posiziona le tue matrici fotografiche (un PNG quadrato 512x512 è l\'ideale) sulla cornice locale interattiva.',
  },
  {
    name: 'Compilazione automatica del bytecode',
    text: 'Vedrai la barra scorrere internamente mentre viene caricata e prodotta la matrice locale degli header esadecimali ICO purificati.',
  },
  {
    name: 'Accumula o scarica il tuo ZIP',
    text: 'Scaricali cliccando su una mega compilation per i tuoi siti web (pulsanti ZIP globali) o scarica la miniatura per l\'eseguibile Windows.',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da PNG a ICO: La Migliore Fonte di Favicon con Trasparenza Perfetta',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>PNG con trasparenza</strong> è il materiale di partenza ideale per la creazione di icone ICO professionali. A differenza del JPG (che non ha canale alfa) o dei formati con perdita, il PNG ti dà esattamente ciò di cui il formato ICO ha bisogno: pixel nitidi, bordi puliti e un canale alfa a 32 bit che permette all\'icona di integrarsi perfettamente su qualsiasi sfondo, che sia la barra dei preferiti bianca di Safari, la barra scura di Firefox o il desktop di Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG o ICO? Quando utilizzare ciascun formato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il <strong>PNG</strong> è il formato di lavoro: è dove progetti il tuo logo, esporti da Figma o Illustrator e salvi le tue versioni modificabili. La sua trasparenza, la precisione dei pixel e la compressione senza perdita lo rendono imbattibile per il processo di progettazione. Ma i browser, i sistemi operativi e le applicazioni Windows che cercano una favicon o un\'icona dell\'app non accettano direttamente il PNG: hanno bisogno dell\'ICO.',
  },
  {
    type: 'paragraph',
    html: 'L\'<strong>ICO</strong> è il formato di distribuzione per le icone negli ambienti Microsoft und sul web. Contiene una specifica struttura binaria che permette di racchiudere più risoluzioni in un unico file: il browser legge la directory interna dell\'ICO und seleziona automaticamente <strong>16×16</strong> per la scheda del browser, <strong>32×32</strong> per i collegamenti, <strong>48×48</strong> per l\'esplora file und <strong>256×256</strong> per gli schermi Retina und 4K. Partire da un PNG trasparente garantisce che tutte quelle risoluzioni avranno bordi perfetti senza alcun alone bianco.',
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
          'Latenza di rete durante il caricamento und il download',
          'Il tuo logo aziendale memorizzato su server di terze parti',
          'Limiti di dimensione dei file und tetti di conversione giornalieri',
          'Annunci intrusivi und tracker di terze parti',
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
    html: 'Il PNG viene decodificato in un <strong>HTML5 Canvas</strong> in memoria con pieno supporto al canale alfa a 32 bit. Il motore costruisce l\'header ICO standard di Microsoft con il numero magico corretto (<code>00 00 01 00</code>), la directory delle immagini con dimensioni und offset dei dati, und i dati dei pixel mantenendo le informazioni sulla trasparenza. Il risultato è un autentico file binario .ico riconosciuto nativamente da Windows, macOS und tutti i browser.',
  },
  {
    type: 'paragraph',
    html: 'La trasparenza del PNG viene interamente preservata nell\'ICO risultante: i pixel trasparenti rimangono tali, quelli semitrasparenti mantengono il loro valore alfa esatto und quelli opachi conservano il colore originale. Questo è fondamentale per i loghi su sfondi variabili: la tua favicon apparirà corretta in modalità chiara, modalità scura und qualsiasi combinazione di colori dell\'interfaccia del browser.',
  },
  {
    type: 'tip',
    title: 'Suggerimento: usa un PNG 512×512 come sorgente',
    html: 'Per il miglior risultato possibile, usa un <strong>PNG quadrato 512×512</strong> come immagine sorgente. Questa risoluzione fornisce al convertitore informazioni sufficienti per generare tutte le dimensioni ICO standard con nitidezza, dalla favicon 16×16 fino all\'icona 256×256 per schermi ad alta densità, senza sgranature o perdita di dettagli sui bordi. Più grande è il PNG sorgente, migliore sarà l\'aspetto delle icone di piccole dimensioni.',
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
      'Favicon trasparente per siti web: funziona in Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'Icona applicazione PWA: manifest.json fa riferimento all\'ICO per l\'installazione desktop.',
      'Personalizzazione cartelle Windows 10/11 con logo aziendale senza sfondo bianco.',
      'Icona di collegamento per applicazioni desktop, installer ed eseguibili.',
      'Icona estensione browser per estensioni Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il PNG con trasparenza è senza dubbio il miglior punto di partenza per la creazione di icone ICO di qualità professionale. Con questo strumento, la conversione è istantanea, i canali alfa sono pienamente preservati und il file risultante è un vero ICO con la corretta struttura binaria. Nessun caricamento del logo su server esterni, niente filigrane, niente limiti — e trasparenza perfetta in tutte le dimensioni.',
  },
];

export const content: PngAIcoLocaleContent = {
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
