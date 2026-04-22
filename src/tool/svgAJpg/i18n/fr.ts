import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'convertisseur-svg-en-jpg';
const title = 'Convertir SVG en JPG en Ligne et Gratuitement';
const description =
  'Convertissez des fichiers SVG vectoriels en JPG dans votre navigateur. Rendu haute résolution 2x. Sans téléchargement. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers SVG...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir SVG en JPG ?',
    answer:
      'Le JPG offre une compatibilité maximale sur tous les types d\'appareils ; convertir un SVG en JPG est le meilleur moyen de s\'assurer que tout le monde peut voir votre design sans problèmes de rendu.',
  },
  {
    question: 'Que se passe-t-il avec la transparence du SVG ?',
    answer:
      'Lors de la conversion en JPG (qui ne supporte pas la transparence), un fond blanc opaque sera automatiquement ajouté à votre composition vectorielle.',
  },
  {
    question: 'Quelle résolution aura le JPG résultant ?',
    answer:
      'L\'outil rend le SVG à double échelle (2x) pour garantir une haute résolution adaptée aux écrans Retina et à l\'usage professionnel.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Insérez vos fichiers vectoriels',
    text: 'Déposez vos fichiers SVG dans la zone supérieure pour préparer la liste d\'export.',
  },
  {
    name: 'Rastérisation en JPG',
    text: 'L\'outil convertira les vecteurs en pixels haute résolution et générera votre JPG instantanément.',
  },
  {
    name: 'Téléchargez les résultats',
    text: 'Obtenez vos fichiers JPG un par un ou comme package ZIP.',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur SVG vers JPG : Emmenez vos Vecteurs sur Toutes les Plateformes',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le format <strong>SVG</strong> est le langage natif du web moderne : léger, évolutif, éditable. Mais il existe des plateformes entières qui ne comprennent tout simplement pas les vecteurs. Les réseaux sociaux, les clients de messagerie, les documents Word, les applications d\'impression et la grande majorité des logiciels du monde réel fonctionnent avec des images rastérisées. Le <strong>JPG</strong> est le plus petit dénominateur commun universel : accepté partout, sans exception, sans plugins ni conversions supplémentaires.',
  },
  {
    type: 'title',
    text: 'SVG vs JPG : Quand le Vecteur Doit Devenir une Photo',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG stocke l\'image sous forme d\'instructions mathématiques. Cette nature vectorielle le rend parfait pour le web mais invisible pour le monde analogique et les logiciels hérités. Un fichier SVG envoyé par e-mail peut apparaître comme du texte XML incompréhensible dans le client du destinataire. Un SVG joint à un document Word peut ne pas se rendre du tout dans les anciennes versions d\'Office.',
  },
  {
    type: 'paragraph',
    html: 'JPG convertit chaque image en matrice de pixels avec des informations de couleur compressées par l\'algorithme JPEG. Ne supportant pas le canal alpha, le convertisseur fusionne automatiquement le fond avec du blanc solide. En échange, vous obtenez un fichier qui s\'ouvre sur <em>n\'importe quel appareil de la planète</em> : vieux téléphones, imprimantes, téléviseurs intelligents, applications d\'édition vieilles de vingt ans. C\'est le format du plus petit dénominateur commun, et dans bien des contextes, le plus précieux.',
  },
  {
    type: 'title',
    text: 'Comparatif : Conversion Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui téléchargent vos fichiers vers un serveur distant.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Votre code SVG (avec données de design propriétaires) transite vers des serveurs externes',
          'Rendu inconsistant des polices et dégradés',
          'Connexion Internet requise pour chaque conversion',
          'Qualité JPG de sortie pas toujours configurable',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zéro octet de votre SVG ne quitte le navigateur',
          'Rendu fidèle via le moteur natif du navigateur',
          'JPG en résolution 2x pour une netteté maximale',
          'Fond blanc appliqué automatiquement selon le standard JPG',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment ça fonctionne techniquement',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le fichier SVG est chargé dans un élément <strong>Image</strong> du navigateur, qui utilise son propre moteur de rendu vectoriel pour interpréter le XML. Le résultat visuel est dessiné sur un <strong>Canvas HTML5</strong> avec un fond blanc préalable (requis car JPG ne supporte pas la transparence) à double échelle pour maximiser la résolution de sortie.',
  },
  {
    type: 'paragraph',
    html: 'La méthode <code>toDataURL(\'image/jpeg\', 0.92)</code> convertit les pixels du canvas en un fichier JPG de haute qualité. Les couleurs SVG peuvent subir de légères variations dues à la conversion de l\'espace colorimétrique lors de la compression JPEG. Il est donc recommandé de prévisualiser le résultat avant de l\'utiliser dans des travaux d\'impression professionnels où la fidélité chromatique est critique.',
  },
  {
    type: 'tip',
    title: 'Conseil pour l\'impression',
    html: 'Les fonds et dégradés SVG peuvent sembler légèrement différents en JPG en raison du profil colorimétrique de la compression JPEG. Prévisualisez toujours le résultat avant de l\'envoyer à l\'imprimeur ou de l\'utiliser dans des supports marketing imprimés où la couleur exacte de la marque est importante.',
  },
  {
    type: 'title',
    text: 'Cas d\'usage et compatibilité',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Partager des logos et illustrations SVG sur Facebook, Twitter ou LinkedIn.',
      'Joindre des graphiques vectoriels dans des e-mails via Outlook ou Gmail.',
      'Insérer des designs SVG dans des documents Word, Excel ou présentations.',
      'Publier des images de produits sur des boutiques en ligne qui ne supportent pas le SVG.',
      'Préparer des fichiers pour les services d\'impression à la demande.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le monde réel parle encore en pixels. Cet outil traduit vos vecteurs SVG dans le langage universel du JPG en quelques secondes, avec un rendu haute résolution et sans que vos designs propriétaires ne quittent jamais votre navigateur.',
  },
];


export const content: SvgAJpgLocaleContent = {
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
