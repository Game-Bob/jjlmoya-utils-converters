import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertitore-webp-in-jpg';
const title = 'Converti WebP in JPG Online e Gratis';
const description =
  'Converti immagini WebP in JPG senza caricare file. Elaborazione locale privata al 100%. Gli sfondi trasparenti vengono sostituiti automaticamente con il bianco.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file WebP...',
  convertText: 'Per convertirli in JPG istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Posso caricare immagini private in modo sicuro?',
    answer:
      'Sì. Non esiste un server di caricamento. Il tuo browser elabora il WebP sul tuo computer e genera il JPG da scaricare. Nessun altro può vederlo.',
  },
  {
    question: 'Cosa succede al mio sfondo WebP se è trasparente?',
    answer:
      'Poiché il formato JPG non supporta la trasparenza, il convertitore riempirà automaticamente le aree trasparenti con uno sfondo bianco solido.',
  },
  {
    question: 'C\'è un limite alle conversioni o alla dimensione dei file?',
    answer:
      'Non imponiamo alcuna restrizione. Puoi convertire centinaia di immagini purché il tuo computer abbia potenza di calcolo e RAM sufficienti.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Trascina i tuoi file',
    text: 'Rilascia i tuoi file WebP nell\'area di caricamento o selezionali utilizzando il browser di file interattivo.',
  },
  {
    name: 'Conversione Locale',
    text: 'Osserva come il motore locale applica uno sfondo e interpreta ogni pixel nel formato JPG universale.',
  },
  {
    name: 'Ottieni i tuoi risultati',
    text: 'Scarica singolarmente o usa il pacchetto ZIP per consolidare tutte le tue nuove fotografie.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da WebP a JPG: Compatibilità Universale senza compromettere la Privacy',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> è la scommessa di Google sull\'efficienza: immagini più leggere con una qualità paragonabile ai JPG tradizionali. Tuttavia, la sua compatibilità rimane un problema nel mondo reale. Client di posta come Outlook, software di progettazione legacy, app di messaggistica e flussi di lavoro aziendali dipendono ancora dall\'ubiquo <strong>JPG</strong>. Convertire WebP in JPG è il ponte tra il web moderno e il mondo reale.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: Quando usare ciascun formato?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il WebP eccelle in ambienti controllati: siti web moderni su Chrome, Edge o Firefox dove la compatibilità del browser può essere garantita. La sua compressione superiore riduce il peso dei file del 25-35% rispetto a un JPG equivalente, migliorando i tempi di caricamento e le metriche dei Core Web Vitals. È il formato ideale quando controlli l\'ambiente di visualizzazione.',
  },
  {
    type: 'paragraph',
    html: 'Il JPG, d\'altra parte, funziona in <em>assolutamente ogni contesto</em>: allegati e-mail, presentazioni PowerPoint, documenti Word, stampanti domestiche, applicazioni di editing legacy e piattaforme di social media senza eccezioni. Se hai bisogno che qualcuno apra la tua immagine senza alcun attrito tecnico, la risposta giusta è il JPG.',
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
          'Le tue foto viaggiano su Internet verso server sconosciuti',
          'Tempo di attesa per il caricamento e l\'elaborazione remota',
          'Limiti giornalieri sulla dimensione dei file e sulle conversioni gratuite',
          'Rischio reale di conservazione dei dati su server di terze parti',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zero byte inviati: tutto accade nella tua RAM',
          'Velocità istantanea senza dipendere dalla tua connessione',
          'Nessun limite sulla dimensione o sul numero di file',
          'Perfetto per foto personali, mediche o aziendali',
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
    html: 'Quando trascini un file WebP nello strumento, il browser lo decodifica nativamente utilizzando il suo motore di rendering interno. Il file viene quindi disegnato su un elemento <strong>HTML5 Canvas</strong> invisibile. Poiché il JPG non supporta la trasparenza, l\'algoritmo riempie preventivamente il canvas con uno sfondo bianco solido prima di comporre l\'immagine sopra.',
  },
  {
    type: 'paragraph',
    html: 'Il passaggio finale è l\'esportazione: il metodo Canvas <code>toDataURL(\'image/jpeg\')</code> converte i pixel del canvas in uno stream di byte JPG compresso di alta qualità. Questo stream viene consegnato direttamente al sistema di download del browser, senza alcuna comunicazione di rete. L\'intero processo richiede millisecondi anche per immagini da molti megapixel.',
  },
  {
    type: 'tip',
    title: 'Suggerimento per la compatibilità',
    html: 'Quando condividi foto con utenti non tecnici o le invii via e-mail, usa sempre il JPG - zero problemi di compatibilità su qualsiasi client di posta, sistema operativo o dispositivo, nessuna eccezione e nessuna spiacevole sorpresa.',
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
      'Allegare foto in e-mail da Outlook, Gmail o Apple Mail.',
      'Inserire immagini in documenti Word, Excel o presentazioni PowerPoint.',
      'Pubblicare sulle piattaforme di social media che rifiutano il WebP.',
      'Condividere tramite WhatsApp o app di messaggistica con supporto limitato ai formati.',
      'Stampare fotografie presso servizi di stampa che accettano solo JPG o PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il WebP è il futuro delle immagini web, ma il JPG rimane il re della compatibilità universale. Questo strumento ti consente di attraversare quel ponte in pochi secondi, in modo completamente privato e senza installare nulla. La tua immagine non lascia mai il tuo dispositivo.',
  },
];


export const content: WebpAJpgLocaleContent = {
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
