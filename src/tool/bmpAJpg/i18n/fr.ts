import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'convertisseur-bmp-en-jpg';
const title = 'Convertir BMP en JPG en Ligne';
const description =
  'Convertissez des images BMP en JPG dans votre navigateur. Réduction drastique de la taille. Sans téléchargement vers des serveurs. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers BMP...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir BMP en JPG ?',
    answer:
      'Le format BMP ne compresse pas les données, ce qui donne des fichiers extrêmement volumineux. Le JPG compresse l\'image de manière drastique tout en maintenant une excellente qualité visuelle pour le web et la distribution.',
  },
  {
    question: 'Est-il sûr de convertir mes images ici ?',
    answer:
      '100% sûr. Votre confidentialité est garantie puisque le traitement est effectué entièrement localement en utilisant le moteur de votre propre navigateur web.',
  },
  {
    question: 'Comment fonctionne l\'outil ?',
    answer:
      'Faites simplement glisser vos fichiers BMP, et notre script JavaScript lira les pixels pour les redessiner sur un canvas HTML et les exporter en codage JPEG instantanément.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Téléchargez vos fichiers BMP',
    text: 'Faites glisser-déposer ou sélectionnez vos images au format BMP dans la zone désignée.',
  },
  {
    name: 'Traitement automatique',
    text: 'L\'outil rastérise l\'image et applique le niveau de compression JPG optimal en quelques millisecondes.',
  },
  {
    name: 'Téléchargement individuel ou par lot',
    text: 'Obtenez vos nouvelles images optimisées pour le web une à une ou en téléchargeant un fichier ZIP.',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur BMP vers JPG : Réduisez un Fichier Géant en Quelques Secondes',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le BMP (Bitmap) est le format d\'image le plus naïf de l\'informatique : il stocke chaque pixel tel quel, sans aucune compression. Une capture d\'écran 1920x1080 en BMP pèse environ 6 Mo. Cette même image en JPG occupe entre 200 et 400 Ko avec une qualité visuellement indiscernable. La différence est abyssale, et notre outil vous permet d\'effectuer cette conversion en quelques secondes, directement dans votre navigateur, sans envoyer quoi que ce soit à un serveur.',
  },
  {
    type: 'title',
    text: 'BMP vs JPG : données brutes contre compression intelligente',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le BMP a été créé par Microsoft à l\'ère de Windows 3.1. Sa philosophie est la plus simple possible : chaque pixel occupe 3 octets (rouge, vert, bleu), et les pixels sont stockés ligne par ligne sans aucun traitement supplémentaire. Cette absence totale de compression rend les fichiers BMP entre 50 et 100 fois plus grands que leur équivalent JPG pour les photographies et captures d\'écran réelles.',
  },
  {
    type: 'paragraph',
    html: 'Le JPG, en revanche, utilise la Transformée en Cosinus Discrète (DCT) pour analyser chaque bloc de 8x8 pixels et supprimer les informations haute fréquence que l\'œil humain perçoit à peine. Le résultat est une image qui semble identique mais qui pèse une fraction de l\'original. Pour les fichiers BMP provenant de captures d\'écran, scanners ou applications Windows legacy, la conversion en JPG est l\'action d\'optimisation la plus impactante possible.',
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
        description: 'Services qui envoient vos fichiers BMP vers des serveurs distants pour les traiter.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Envoyer un BMP de 10 Mo prend du temps sur des connexions lentes',
          'Vos captures d\'écran et images confidentielles transitent sur internet',
          'Limites de taille fréquentes dans les plans gratuits',
          'Double latence : envoi et téléchargement du fichier converti',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Le BMP est traité dans votre RAM, ne voyage vers aucun serveur',
          'Conversion instantanée sans attente',
          'Aucune limite de taille de fichier',
          'Confidentialité totale : 0 octet envoyé à l\'extérieur',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion technique BMP vers JPG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Lorsque vous faites glisser un fichier BMP dans l\'outil, le navigateur le lit avec l\'API <code>FileReader</code> et le décode comme un objet Blob en mémoire. Ce Blob est rendu sur un canvas HTML5 invisible. Ensuite, la méthode <code>toDataURL(\'image/jpeg\')</code> applique l\'algorithme de compression JPEG aux données du canvas et génère le fichier JPG résultant.',
  },
  {
    type: 'paragraph',
    html: 'Comme le BMP n\'a pas de canal alpha (pas de support de transparence), la conversion en JPG est directe sans avoir besoin de composition avec un fond blanc. Le processus entier se déroule dans la RAM de votre ordinateur, sans aucune transmission de données par le réseau, en quelques millisecondes même pour des fichiers de plusieurs mégaoctets.',
  },
  {
    type: 'tip',
    title: 'Les fichiers BMP Windows peuvent être énormes',
    html: 'Les fichiers BMP générés par les captures d\'écran Windows (touche Impr écran) ou les applications legacy comme Paint peuvent peser entre 50 et 100 fois plus qu\'un JPG équivalent. Un seul BMP Full HD peut dépasser 6 Mo. Les convertir en JPG avant de les envoyer par email ou de les télécharger vers une plateforme est une pratique essentielle.',
  },
  {
    type: 'title',
    text: 'Cas d\'usage et compatibilité du JPG résultant',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Optimisation des captures d\'écran Windows pour l\'envoi par email.',
      'Conversion d\'images exportées par des logiciels legacy (CAO, anciens scanners).',
      'Réduction du poids pour le téléchargement sur des plateformes web et réseaux sociaux.',
      'Préparation de fichiers pour insertion dans des documents Word, PowerPoint ou PDF.',
      'Compatibilité universelle avec tous les visionneuses et navigateurs modernes.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : 10 Mo de BMP, 500 Ko de JPG, même image',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversion de BMP en JPG est l\'un des exercices d\'optimisation les plus rentables dans la gestion des fichiers image. Notre outil effectue cette transformation en quelques secondes, sans envoyer de fichier, sans créer de compte, directement dans votre navigateur. Le résultat est un JPG de haute qualité, universellement compatible, pesant jusqu\'à 97% de moins que le BMP original.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'fr', faq, howTo }),
};
