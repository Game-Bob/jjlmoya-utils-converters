import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'convertisseur-gif-en-webp';
const title = 'Convertir GIF en WebP Statique';
const description =
  'Convertissez des GIF animés en WebP statique. Préserve la transparence. Sans serveur. Traitement local dans votre navigateur. Gratuit.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers GIF...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi figer un fichier animé au format statique moderne WebP ?',
    answer:
      'WebP est le standard de compression de Google ; il est remarquablement léger et conserve la transparence proprement. Passer de GIF à WebP élimine l\'animation lourde et réalise un gain abyssal en vitesse web.',
  },
  {
    question: 'L\'avatar original restera-t-il transparent ?',
    answer:
      'Oui, contrairement au JPEG, le conteneur WebP respecte le canal Alpha complexe. Toutes ses silhouettes resteront parfaites comme elles l\'étaient nativement.',
  },
  {
    question: 'Où les fichiers seront-ils téléchargés ?',
    answer:
      'Il n\'y a pas de téléchargement. Le traitement est effectué entièrement par le Javascript du navigateur sur votre PC, avec zéro envoi distant.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Lancez une avalanche animée',
    text: 'Déplacez et déposez des dizaines de mèmes dans la zone délimitée sans connexion distante.',
  },
  {
    name: 'Contemplez le grand changement invisible',
    text: 'Regardez un indicateur progressif changer à chaque milliseconde pendant que le décodeur de canvas local génère la sortie.',
  },
  {
    name: 'Compressez ou sauvegardez votre arsenal résultant propre',
    text: 'Prenez les fichiers extraits individuellement ou appuyez sur Télécharger Zip pour tout emballer.',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur GIF vers WebP : Le Remplacement Moderne des Animations Lourdes',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Les GIF animés sont les dinosaures du contenu web moderne : ils consomment une bande passante disproportionnée, dégradent le PageSpeed de toute page et sont responsables d\'un pourcentage significatif du poids total sur des milliers de sites web. Un GIF animé typique de 5 Mo peut devenir une animation WebP de moins de 1 Mo avec la même qualité visuelle. WebP est le successeur moderne que Google a spécifiquement conçu pour remplacer le GIF sur le web.',
  },
  {
    type: 'title',
    text: 'GIF vs WebP : l\'écart entre le passé et le présent du web',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le GIF est un format de 1987 qui n\'a pas été conçu à l\'origine pour les animations — cette fonctionnalité est arrivée comme un hack ultérieur. Sa palette de 256 couleurs, sa compression inefficace et son incapacité à gérer l\'audio en font un format obsolète. WebP, développé par Google en 2010, offre une compression supérieure avec et sans perte, un support d\'animation natif et un canal alpha complet.',
  },
  {
    type: 'paragraph',
    html: 'Pour un développeur web, remplacer les GIF par des WebP sur les pages peut représenter une amélioration de 10 à 30 points dans le score PageSpeed de Google. Moins de poids de page signifie de meilleurs Core Web Vitals, un meilleur référencement SEO et des coûts de bande passante réduits sur les serveurs. Ce n\'est pas seulement une amélioration esthétique — c\'est une décision d\'architecture technique.',
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
        description: 'Plateformes qui traitent vos GIF sur des serveurs distants.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos animations transitent sur internet vers des serveurs tiers',
          'Temps d\'attente dû à la latence réseau',
          'Limites de taille (les grands GIF sont souvent rejetés)',
          'Risque de rétention et d\'analyse de vos fichiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Le GIF ne quitte jamais votre appareil',
          'Conversion instantanée sans attente réseau',
          'Aucune limite de taille : traitez des GIF de tout poids',
          'Confidentialité totale : 0 octet envoyé à l\'extérieur',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion locale GIF vers WebP',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversion locale utilise l\'API Canvas HTML5. Le GIF est chargé comme un élément Image natif du navigateur. En le dessinant sur un canvas, le moteur graphique capture la première image de l\'animation avec toutes ses informations de transparence. La méthode <code>toDataURL(\'image/webp\')</code> exporte l\'image en WebP directement dans la RAM.',
  },
  {
    type: 'paragraph',
    html: 'Le WebP supporte le canal alpha complet, donc les transparences du GIF sont préservées dans le WebP résultant sans avoir besoin d\'ajouter un fond. Les algorithmes de compression WebP sont significativement plus efficaces que ceux du GIF ou du PNG, ce qui explique la réduction drastique de la taille du fichier final.',
  },
  {
    type: 'tip',
    title: 'Amélioration PageSpeed garantie',
    html: 'Un GIF animé de 5 Mo peut devenir un WebP de moins de 1 Mo. Si vous avez des GIF sur les pages de votre site, les remplacer par des WebP peut immédiatement améliorer votre Largest Contentful Paint (LCP) et votre Total Blocking Time (TBT), impactant directement le référencement SEO.',
  },
  {
    type: 'title',
    text: 'Cas d\'usage et compatibilité du WebP résultant',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Remplacement des GIF sur les pages web pour améliorer le PageSpeed.',
      'Avatars et stickers optimisés pour Discord, Slack et les plateformes modernes.',
      'Bannières et visuels pour les campagnes de marketing digital.',
      'Animations dans les applications web progressives (PWA).',
      'Compatible avec Chrome, Edge, Firefox, Safari 14+ et tous les navigateurs modernes.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : migrez vos GIF vers le XXIe siècle',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chaque GIF sur votre site web est une opportunité d\'optimisation manquée. Notre outil convertit les GIF en WebP instantanément, en toute confidentialité et sans limites, directement dans votre navigateur. Le résultat : des fichiers jusqu\'à 5 fois plus petits, une transparence parfaite et une compatibilité avec tous les navigateurs modernes.',
  },
];


export const content: GifAWebpLocaleContent = {
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
