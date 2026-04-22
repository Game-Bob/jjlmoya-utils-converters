import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'convertitore-webp-in-png';
const title = 'Converti WebP in PNG Online e Gratis';
const description =
  'Converti immagini WebP in PNG nel tuo browser. Preserva la trasparenza. Nessun caricamento di file sui server. Gratuito e privato al 100%.';

const ui: ImageConverterUI = {
  dragText: 'Trascina i file WebP...',
  convertText: 'Per convertirli in PNG istantaneamente',
  selectFiles: 'Seleziona file',
  processedFiles: 'File elaborati',
  downloadAll: 'Scarica tutto (.zip)',
  pending: 'In attesa': 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Perché devo convertire i miei file WebP in PNG?',
    answer:
      'Pur essendo più leggeri, i file WebP possono causare incompatibilità in programmi di editing come le vecchie versioni di Photoshop. Il PNG garantisce una compatibilità universale al 100%.',
  },
  {
    question: 'Le trasparenze vanno perse convertendo da WebP a PNG?',
    answer:
      'Assolutamente no. A differenza della conversione in JPG, il PNG supporta il canale alfa. La nostra utility preserverà ogni area trasparente del file originale.',
  },
  {
    question: 'Posso caricare file aziendali riservati?',
    answer:
      'Puoi e devi farlo. Poiché tutto viene eseguito localmente tramite JavaScript, le immagini della tua azienda non lasceranno mai il tuo computer né verranno memorizzate su server esterni.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Trascina i tuoi file WebP',
    text: 'Sposta e rilascia i tuoi file WebP sul pannello principale o seleziona le immagini in modo tradizionale.',
  },
  {
    name: 'Conversione ad Alta Fedeltà',
    text: 'Il tuo browser ridisegnerà l\'immagine pixel per pixel e genererà una copia esatta in formato PNG, mantenendo la gamma cromatica originale.',
  },
  {
    name: 'Download Singolo o Multiplo',
    text: 'Salva ogni file individualmente o, se hai elaborato un batch, clicca sul pulsante ZIP per scaricarli tutti insieme in un pacchetto.',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da WebP a PNG: La Scelta Professionale per Editing e Design',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Quando un designer scarica un asset grafico in formato <strong>WebP</strong> e prova ad aprirlo in Photoshop, Figma o Illustrator, il risultato può essere frustrante: il file non si carica o perde qualità. Il formato <strong>PNG</strong> è lo standard indiscusso dell\'editing professionale: compressione lossless, canale alfa completo e compatibilità garantita in tutta la catena di produzione creativa.',
  },
  {
    type: 'title',
    text: 'WebP per il Web, PNG per lo Studio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Il WebP è un formato di produzione web: i suoi algoritmi di compressione sono ottimizzati per ridurre il peso del trasferimento, non per preservare la massima fedeltà attraverso flussi di lavoro di editing iterativi. Ogni volta che salvi un WebP modificato, il codec applica nuovamente la compressione. Per i progetti in cui un file verrà modificato molte volte, ciò significa un degrado qualitativo cumulativo.',
  },
  {
    type: 'paragraph',
    html: 'Il PNG utilizza la <strong>compressione lossless</strong>: i dati di ogni pixel vengono preservati interamente, non importa quante volte salvi il file. È il formato scelto da designer UI/UX, illustratori digitali e team di branding che devono mantenere l\'integrità visiva attraverso decine di revisioni. Strumenti come Photoshop, Figma, Sketch e Illustrator trattano il PNG come il loro formato di esportazione principale.',
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
          'I tuoi asset di design sono memorizzati su server di terze parti',
          'Elaborazione remota lenta per i file di grandi dimensioni',
          'Rischio di leak per progetti riservati di clienti',
          'Conversione batch limitata o a pagamento',
        ],
      },
      {
        title: 'La Nostra Architettura Locale',
        description: 'Elaborazione diretta sul tuo hardware utilizzando la tecnologia Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'I tuoi design non lasciano mai la tua macchina',
          'Converti istantaneamente decine di file in batch',
          'Preservazione totale del canale alfa e della gamma cromatica',
          'Privacy assoluta per i progetti dei clienti',
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
    html: 'I browser moderni possono decodificare il WebP nativamente. Il nostro strumento sfrutta questa capacità per caricare il file in un elemento <strong>Image</strong> JavaScript, quindi lo disegna su un canvas HTML5 con le stesse dimensioni dell\'originale. A differenza della conversione in JPG, qui non è necessario alcun riempimento di sfondo: il canvas mantiene l\'intero canale alfa.',
  },
  {
    type: 'paragraph',
    html: 'L\'esportazione finale utilizza il metodo <code>toDataURL(\'image/png\')</code>, che genera un PNG lossless fedele all\'originale. Il risultato è un file pronto per essere importato direttamente in qualsiasi software di design professionale senza passaggi intermedi, degrado del colore o perdita di trasparenza.',
  },
  {
    type: 'tip',
    title: 'Suggerimento per editor',
    html: 'Usa il PNG quando hai bisogno di continuare a modificare l\'immagine. La compressione lossless garantisce che non ci siano degradazioni della qualità dovute a salvataggi ripetuti — fondamentale quando si lavora con livelli, maschere o regolazioni del colore in Photoshop o Figma.',
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
      'Importazione di asset WebP in Photoshop, Figma, Sketch o Illustrator.',
      'Preservazione della trasparenza in loghi e icone per l\'uso su sfondi multipli.',
      'Creazione di copie master di grafiche per progetti a lungo termine.',
      'Esportazione di asset per app mobile che richiedono PNG con canale alfa.',
      'Utilizzo di immagini in mockup di design e presentazioni con sfondi variabili.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusione',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Se il WebP è il formato del server web, il PNG è il formato dello studio di design. Questo strumento converte i tuoi asset WebP in PNG pronti per la produzione, con trasparenza intatta e massima qualità — tutto nel tuo browser e senza che i tuoi file lascino mai la tua macchina.',
  },
];


export const content: WebpAPngLocaleContent = {
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
