import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'convertitore-immagine-in-base64';
const title = 'Convertitore da Immagine a Base64 Online';
const description =
  'Converti qualsiasi immagine in codice Base64 e Data URI direttamente nel tuo browser. Nessun caricamento di file. Gratuito, privato e istantaneo.';

const ui: ImageToBase64UI = {
  dragTitle: 'Trascina qui la tua immagine',
  dragSubtext: 'o clicca per sfogliare i tuoi file',
  formatBadge: 'Supporta JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Pronto per CSS / HTML src="")',
  base64Label: 'Solo Base64 (Testo codificato semplice)',
  copyBtn: 'Copia',
  dataUriPlaceholder: 'Carica un\'immagine per vedere il codice Data URI...',
  base64Placeholder: 'Carica un\'immagine per vedere il codice Base64 puro...',
  toastMessage: 'Codice copiato negli appunti!',
  invalidImageAlert: 'Per favore carica un file immagine valido.',
  bibliographyTitle: 'Riferimenti Bibliografici',
  faqTitle: 'Domande Frequenti',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Cos\'è Base64 e a cosa serve nello sviluppo web?',
    answer:
      'Base64 è un sistema di codifica che converte i dati binari in una stringa di testo ASCII. Nello sviluppo web, viene utilizzato per incorporare le immagini direttamente all\'interno di file HTML o CSS tramite Data URI, riducendo il numero di richieste HTTP al server.',
  },
  {
    question: 'È sicuro convertire le mie immagini in Base64 qui?',
    answer:
      'Assolutamente sicuro e privato. Il nostro strumento funziona al 100% localmente nel tuo browser. Le tue immagini non vengono mai caricate o elaborate su alcun server esterno.',
  },
  {
    question: 'Quali formati di immagine supporta il convertitore Base64?',
    answer:
      'Lo strumento è compatibile con file JPG, PNG, GIF, WebP e persino file vettoriali SVG. Al caricamento dell\'immagine, rileverà automaticamente il suo tipo MIME per generare l\'esatto codice Data URI.',
  },
  {
    question: 'Quando NON dovrei usare immagini Base64?',
    answer:
      'Dovresti evitare di usare immagini Base64 per fotografie di grandi dimensioni o immagini ad alta risoluzione. Il codice Base64 occupa circa il 33% di spazio in più rispetto al file binario originale, il che può gonfiare eccessivamente i tuoi fogli di stile CSS o documenti HTML.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Trascina o Seleziona la tua Immagine',
    text: 'Sposta qualsiasi immagine (JPG, PNG, WebP, SVG, GIF) nell\'area di caricamento per avviare la conversione.',
  },
  {
    name: 'Copia il Codice Generato',
    text: 'Vedrai due aree di testo: il Data URI completo (pronto per l\'uso in src="" o CSS) e il Base64 puro per altri usi.',
  },
  {
    name: 'Usa il Codice nel tuo Progetto',
    text: 'Incolla il Data URI direttamente nel src di un tag img o nel tuo CSS come background-image senza bisogno di file esterni.',
  },
];

const bibliography: ImagenBase64LocaleContent['bibliography'] = [
  {
    name: 'MDN Web Docs: Data URIs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
  },
  {
    name: 'Base64 Encoding RFC 4648',
    url: 'https://datatracker.ietf.org/doc/html/rfc4648',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertitore da Immagine a Base64: Incorpora Immagini Senza Richieste HTTP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 è una tecnica di codifica che trasforma i dati binari — come un\'immagine — in una stringa di testo ASCII pura. Il risultato è un Data URI: un URL autonomo che inizia con <code>data:image/png;base64,...</code> e contiene l\'intera immagine codificata. Incorporando questo codice direttamente nel tuo HTML, CSS o JSON, l\'immagine viene caricata senza alcuna richiesta HTTP aggiuntiva al server — latenza di rete zero, caricamento istantaneo.',
  },
  {
    type: 'title',
    text: 'Quando usare immagini Base64',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'L\'argomento principale a favore di Base64 è l\'eliminazione delle richieste di rete. Ogni immagine su una pagina web significa una richiesta HTTP con il suo overhead di connessione, DNS, handshake TLS e latenza. Per immagini critiche molto piccole — il logo principale dell\'applicazione, la favicon, un\'icona dell\'interfaccia utente — incorporarle in Base64 nel CSS o nell\'HTML elimina quel costo e garantisce che vengano visualizzate istantaneamente anche prima che il browser abbia memorizzato qualcosa in cache.',
  },
  {
    type: 'paragraph',
    html: 'Questa tecnica è particolarmente potente nelle app SPA (Single Page Application) in cui il bundle JavaScript e CSS viene generato al momento della build: incorporare piccole immagini nel bundle garantisce che vengano caricate insieme al codice senza richieste aggiuntive. È anche indispensabile per le e-mail HTML, dove i client di posta bloccano le immagini esterne ma visualizzano quasi sempre i Data URI incorporati.',
  },
  {
    type: 'title',
    text: 'Casi d\'uso per le immagini Base64',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline: <code>&lt;img src="data:image/png;base64,..."&gt;</code> per icone critiche.',
      'CSS background: <code>background-image: url("data:image/svg+xml;base64,...")</code> per SVG della UI.',
      'JSON e API REST: invia immagini come dati di testo nei payload JSON.',
      'Email HTML: immagini incorporate che vengono visualizzate anche quando il client blocca gli URL esterni.',
      'Incorporamento SVG: incorpora immagini raster all\'interno di file SVG come dati inline.',
    ],
  },
  {
    type: 'title',
    text: 'Come funziona la conversione nel browser',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Quando selezioni o trascini un\'immagine, l\'API <code>FileReader</code> del browser la legge direttamente dal disco come dati binari nella RAM. Il metodo <code>readAsDataURL()</code> converte quei byte binari nella loro rappresentazione Base64 utilizzando l\'algoritmo RFC 4648 — ogni 3 byte di dati originali sono rappresentati come 4 caratteri ASCII dall\'alfabeto Base64. Il risultato include il tipo MIME corretto rilevato automaticamente.',
  },
  {
    type: 'tip',
    title: 'Usalo solo per immagini piccole (sotto i 10 KB)',
    html: 'Base64 aumenta la dimensione del file di circa il 33%: un\'immagine da 10 KB diventa circa 13,3 KB di testo. Per icone e logo piccoli questo costo è minimo e l\'eliminazione della richiesta HTTP lo compensa. Per fotografie o immagini di grandi dimensioni, il sovrapprezzo dimensionale è significativo — usa sempre una CDN per le immagini grandi.',
  },
  {
    type: 'title',
    text: 'Quando NON usare Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Evita Base64 per immagini grandi — usa invece una CDN',
    html: 'Se hai immagini più grandi di 10-20 KB, Base64 danneggia le prestazioni: gonfia la dimensione di HTML/CSS, impedisce al browser di memorizzare l\'immagine in cache in modo indipendente e blocca il rendering mentre il parser elabora la stringa gigante. Per le immagini grandi, servi sempre da una CDN con intestazioni di cache appropriate.',
  },
  {
    type: 'title',
    text: 'Compatibilità e privacy',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'I Data URI sono compatibili con il 100% dei browser moderni e la maggior parte dei client di posta elettronica. Il nostro strumento elabora tutto localmente tramite l\'API FileReader: le tue immagini non lasciano mai il tuo dispositivo. Questo lo rende adatto per immagini aziendali, screenshot privati o qualsiasi contenuto visivo riservato che hai bisogno di convertire in Base64.',
  },
  {
    type: 'title',
    text: 'Conclusione: Lo strumento di incorporamento più rapido e privato',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertire le immagini in Base64 è una tecnica mirata ma molto potente se applicata correttamente. Usala per immagini piccole e critiche dove l\'assenza di richieste HTTP fa la differenza, ed evitala per immagini grandi dove una CDN vince sempre. Con il nostro strumento, ottieni il Data URI in un istante, senza caricare nulla su alcun server.',
  },
];


export const content: ImagenBase64LocaleContent = {
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
