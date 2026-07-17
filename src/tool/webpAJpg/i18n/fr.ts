import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-jpg';
const title = 'Convertir WebP en JPG en Ligne et Gratuitement';
const description =
  'Convertissez des images WebP en JPG sans télécharger de fichiers. Traitement local 100% privé. Les fonds transparents sont automatiquement remplacés par du blanc.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers WebP...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Puis-je télécharger des images privées en toute sécurité ?',
    answer:
      'Oui. Il n\'y a pas de serveur de téléchargement. Votre navigateur traite le WebP sur votre ordinateur et génère le JPG que vous téléchargez. Personne d\'autre ne le voit.',
  },
  {
    question: 'Qu\'advient-il de mon fond WebP s\'il est transparent ?',
    answer:
      'Comme le JPG ne supporte pas la transparence, le convertisseur remplira automatiquement les zones transparentes avec un fond blanc uni.',
  },
  {
    question: 'Y a-t-il une limite sur les conversions ou la taille des fichiers ?',
    answer:
      'Nous n\'imposons aucune restriction. Vous pouvez convertir des centaines d\'images tant que votre ordinateur a une puissance de traitement et une RAM suffisantes.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Faites glisser vos fichiers',
    text: 'Déposez vos fichiers WebP modernes dans la zone de téléchargement ou sélectionnez-les avec l\'explorateur.',
  },
  {
    name: 'Conversion Locale',
    text: 'Regardez comment le moteur local applique un fond et interprète chaque pixel au format JPG universel.',
  },
  {
    name: 'Obtenez vos résultats',
    text: 'Téléchargez individuellement ou utilisez le package ZIP pour regrouper toutes vos nouvelles photographies.',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur WebP vers JPG: Compatibilité Universelle sans Compromettre la Confidentialité',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> est le pari de Google sur l\'efficacité: des images plus légères avec une qualité comparable au JPG traditionnel. Cependant, sa compatibilité reste un problème dans le monde réel. Les clients de messagerie comme Outlook, les anciens logiciels de conception, les applications de messagerie et les flux de travail en entreprise dépendent toujours de l\'ubiquitaire <strong>JPG</strong>. Convertir WebP en JPG est le pont entre le web moderne et le monde réel.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: Quand utiliser chaque format ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP excelle dans les environnements contrôlés: sites web modernes sur Chrome, Edge ou Firefox où la compatibilité du navigateur peut être garantie. Sa compression supérieure réduit le poids des fichiers de 25-35% par rapport à un JPG équivalent, améliorant les temps de chargement et les métriques Core Web Vitals. C\'est le format idéal lorsque vous contrôlez l\'environnement de visualisation.',
  },
  {
    type: 'paragraph',
    html: 'Le JPG, quant à lui, fonctionne dans <em>absolument tous les contextes</em>: pièces jointes d\'e-mails, présentations PowerPoint, documents Word, imprimantes domestiques, applications d\'édition héritées et plateformes sociales sans exception. Si vous avez besoin que quelqu\'un ouvre votre image sans friction technique, le JPG est la bonne réponse.',
  },
  {
    type: 'title',
    text: 'Comparatif: Conversion Locale vs Cloud',
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
          'Vos photos voyagent sur Internet vers des serveurs inconnus',
          'Temps d\'attente pour le téléchargement et le traitement à distance',
          'Limites quotidiennes sur la taille et le nombre de conversions gratuites',
          'Risque réel de rétention des données sur des serveurs tiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zéro octet envoyé: tout se passe dans votre mémoire RAM',
          'Vitesse instantanée sans dépendre de votre connexion',
          'Aucune limite sur la taille des fichiers ou le nombre de fichiers',
          'Idéal pour les photos personnelles, médicales ou d\'entreprise',
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
    html: 'En faisant glisser un WebP vers l\'outil, le navigateur le décode nativement en utilisant son moteur de rendu interne. Le fichier est ensuite dessiné sur un élément <strong>Canvas HTML5</strong> invisible. Comme le JPG ne supporte pas la transparence, l\'algorithme pré-remplit le canevas avec un fond blanc uni avant de composer l\'image par-dessus.',
  },
  {
    type: 'paragraph',
    html: 'L\'étape finale est l\'exportation: la méthode <code>toDataURL(\'image/jpeg\')</code> du Canvas convertit les pixels du canevas en un flux d\'octets JPG compressé de haute qualité. Ce flux est livré directement au système de téléchargement du navigateur, sans aucune communication réseau. Tout le processus prend quelques millisecondes, même pour des images de plusieurs mégapixels.',
  },
  {
    type: 'tip',
    title: 'Conseil de compatibilité',
    html: 'Lorsque vous partagez des photos avec des utilisateurs non techniques ou que vous les envoyez par e-mail, utilisez toujours le JPG - zéro problème de compatibilité sur n\'importe quel client de messagerie, système d\'exploitation ou appareil, sans exception et sans mauvaise surprise.',
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
      'Joindre des photos dans des e-mails depuis Outlook, Gmail ou Apple Mail.',
      'Insérer des images dans des documents Word, Excel ou des présentations PowerPoint.',
      'Publier sur des réseaux sociaux qui rejettent le format WebP.',
      'Partager via WhatsApp ou des applications de messagerie au support limité.',
      'Imprimer des photographies chez des services de tirage qui n\'acceptent que le JPG ou le PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le WebP est l\'avenir des images web, mais le JPG reste le roi de la compatibilité universelle. Cet outil vous permet de franchir ce pont en quelques secondes, de manière totalement privée et sans rien installer. Votre image ne quitte jamais votre appareil.',
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
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'fr',
    faq,
    howTo,
  }),
};
