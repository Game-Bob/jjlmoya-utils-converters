import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'convertisseur-bmp-en-png';
const title = 'Convertisseur BMP vers PNG';
const description =
  'Convertissez des images BMP en PNG sans perte de qualité. Compression moderne sans artefacts. Sans téléchargement. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers BMP...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Quelle est la principale différence entre BMP et PNG ?',
    answer:
      'BMP et PNG sont tous deux des formats sans perte. La différence réside dans l\'optimisation : PNG utilise des algorithmes de compression modernes pour stocker la même image en occupant 5 à 10 fois moins de mémoire que le BMP.',
  },
  {
    question: 'La conversion est-elle vraiment privée ?',
    answer:
      'Oui. Tout le traitement photographique est effectué par votre ordinateur. Absolument personne n\'accède à vos fichiers lors du traitement local.',
  },
  {
    question: 'Pourquoi PNG plutôt que JPEG dans ce cas ?',
    answer:
      'Si vous avez un fichier BMP, c\'est parce que l\'image a des couleurs précises. Convertir un BMP au standard destructeur JPG altérerait vos couleurs nettes. Le PNG protège cette fidélité.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Chargez votre photo',
    text: 'Déplacez tranquillement les fichiers source BMP dans notre zone de dépôt d\'éléments web.',
  },
  {
    name: 'Traduire sans transmission réseau',
    text: 'Ressentez en à peine une seconde le traitement propre effectué localement par votre JS HTML5.',
  },
  {
    name: 'Obtenez des PNG purs',
    text: 'Téléchargez les répliques PNG individuellement ou via un package compressé.',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur BMP vers PNG : Le Remplacement Sans Perte du Format BMP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le BMP est un format non compressé qui occupe d\'énormes quantités d\'espace sans aucun avantage technique par rapport au PNG. Les deux sont des formats sans perte : ils stockent chaque pixel avec une précision absolue. Mais le PNG ajoute une compression sans perte via l\'algorithme Deflate, réduisant la taille du fichier de 3 à 5 fois sans sacrifier un seul bit d\'information visuelle. Le PNG est, en substance, ce que le BMP a toujours voulu être.',
  },
  {
    type: 'title',
    text: 'BMP vs PNG : même qualité, taille de fichier radicalement différente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La différence fondamentale entre BMP et PNG ne réside pas dans la qualité de l\'image — les deux sont sans perte — mais dans l\'efficacité de stockage. Le BMP stocke les pixels bruts : sans compression, sans optimisation, sans considération pour l\'espace. Le PNG analyse les motifs de pixels répétés et les code de manière compacte grâce à Deflate, le même algorithme utilisé par ZIP.',
  },
  {
    type: 'paragraph',
    html: 'En plus d\'une compression supérieure, le PNG ajoute une fonctionnalité que le BMP n\'a jamais eue : le canal alpha complet pour la transparence. Captures d\'écran, graphiques d\'interface, logos, diagrammes techniques — tous ces types d\'images bénéficient énormément de la conversion en PNG, qui préserve chaque valeur de couleur exacte tout en réduisant le poids du fichier à une fraction de l\'original.',
  },
  {
    type: 'title',
    text: 'Comparaison d\'Architecture : Local vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Services qui traitent vos fichiers BMP sur des serveurs tiers.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos images de travail transitent sur internet',
          'Temps d\'attente proportionnel à la taille du BMP',
          'Limites de taille dans les plans gratuits',
          'Risque d\'analyse ou de rétention de vos fichiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Le BMP est traité localement, ne quitte jamais votre appareil',
          'Conversion instantanée en quelques millisecondes',
          'Aucune limite de taille ni de nombre de fichiers',
          'Confidentialité totale : 0 octet envoyé à l\'extérieur',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion locale BMP vers PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le processus utilise l\'API Canvas HTML5. Le fichier BMP est lu avec l\'API <code>FileReader</code> du navigateur et décodé comme un Blob en mémoire. Ce Blob est dessiné sur un canvas HTML5 invisible. Ensuite, la méthode <code>toDataURL(\'image/png\')</code> applique l\'algorithme de compression PNG natif du navigateur et génère le fichier résultant.',
  },
  {
    type: 'paragraph',
    html: 'Contrairement à la conversion JPG, la conversion PNG est complètement sans perte : chaque valeur de couleur du BMP original est préservée exactement dans le PNG résultant. Aucun artefact, aucun lissage des bords, aucune perte d\'information. Le fichier final est visuellement identique au BMP mais occupe 3 à 5 fois moins d\'espace disque.',
  },
  {
    type: 'tip',
    title: 'Le PNG est le standard moderne là où le BMP était utilisé',
    html: 'Si vous travaillez avec des logiciels anciens qui exportent en BMP (machines industrielles, systèmes de contrôle, logiciels de diagnostic médical), convertir en PNG est la meilleure décision. Le PNG est compatible avec toutes les applications modernes, maintient une fidélité de couleur parfaite et occupe jusqu\'à 5 fois moins d\'espace. C\'est la migration la plus simple et la plus sûre possible.',
  },
  {
    type: 'title',
    text: 'Cas d\'usage et compatibilité du PNG résultant',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Captures d\'écran et graphiques d\'interface avec couleurs exactes préservées.',
      'Images de documentation technique et diagrammes logiciels.',
      'Exportations de CAO, systèmes industriels et logiciels legacy.',
      'Logos et éléments d\'identité visuelle avec support de transparence ajouté.',
      'Compatible avec Adobe Photoshop, GIMP, Figma et tous les éditeurs modernes.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : le PNG est ce que le BMP aurait toujours dû être',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir BMP en PNG est la modernisation la plus naturelle d\'un fichier image : même qualité sans perte, plus grande compatibilité, support de transparence et 3 à 5 fois moins de poids. Notre outil effectue cette conversion en millisecondes, directement dans votre navigateur, sans envoyer aucun fichier vers aucun serveur.',
  },
];


export const content: BmpAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'fr', faq, howTo }),
};
