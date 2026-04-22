import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'convertisseur-jpg-en-webp';
const title = 'Convertir JPG en WebP en Ligne et Gratuitement';
const description =
  'Convertissez des images JPG en WebP dans votre navigateur. Compression supérieure sans perte visible. Sans téléchargement. Gratuit, illimité et privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers JPG...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir des photos JPG en WebP ?',
    answer:
      'WebP permet une compression significativement meilleure des fichiers JPG traditionnels sans que l\'œil humain ne remarque la différence, résultant en des sites web plus rapides et modernes.',
  },
  {
    question: 'Dois-je payer par image ?',
    answer:
      'Non, l\'outil est gratuit et tout est traité directement sur votre ordinateur. Il est illimité pour usage domestique ou professionnel.',
  },
  {
    question: 'La conversion est-elle sécurisée ?',
    answer:
      'Oui, totalement. Tout le traitement se fait dans le Canvas HTML5 de votre navigateur local sans envoyer aucune donnée vers des serveurs externes.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Insérez vos photos JPG',
    text: 'Déposez vos fichiers JPG ou faites-les glisser directement dans la zone supérieure. La détection est instantanée.',
  },
  {
    name: 'Traitement en WebP',
    text: 'Le moteur de rendu local convertira chaque fichier image en un WebP ultra-optimisé prêt pour le web.',
  },
  {
    name: 'Téléchargez les résultats',
    text: 'Sauvegardez chaque WebP individuellement ou téléchargez le ZIP avec tous les fichiers convertis.',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur JPG vers WebP : Accélérez votre site avec le format de Google',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le format <strong>JPG</strong> domine la photographie numérique depuis des décennies — universel, compact et compatible avec tous les appareils. Mais Google a conçu <strong>WebP</strong> pour surpasser le JPG sur son propre terrain : la même qualité visuelle avec 25 à 35 % de poids en moins. Pour les développeurs et les équipes marketing qui luttent contre des temps de chargement lents, convertir ses JPG en WebP est l\'optimisation au meilleur retour sur effort.',
  },
  {
    type: 'title',
    text: 'JPG ou WebP ? Quand utiliser chaque format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>JPG</strong> reste le bon choix lorsque vous avez besoin d\'une compatibilité universelle : e-mails clients, documents Word, réseaux sociaux anciens ou systèmes CMS qui n\'acceptent pas encore le WebP. Son écosystème de trente ans garantit que n\'importe quel écran, imprimante ou visionneuse ouvrira le fichier sans problème. Son principal inconvénient est le poids — un JPG d\'en-tête de 1,5 Mo peut faire chuter le score LCP de votre page et échouer aux seuils Core Web Vitals.',
  },
  {
    type: 'paragraph',
    html: 'Le <strong>WebP</strong> est le choix intelligent pour tout le contenu hébergé sur votre site web. Chrome, Firefox, Safari et Edge le supportent nativement depuis plusieurs années. Les images de produits en e-commerce, les bannières de blog, les miniatures de vidéo et toute photo publiée en ligne en bénéficient directement : pages plus légères, meilleur score Google PageSpeed Insights et expérience utilisateur plus fluide, notamment sur les connexions mobiles lentes.',
  },
  {
    type: 'title',
    text: 'Comparatif : Conversion locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui envoient vos fichiers vers un serveur distant.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latence réseau à l\'envoi et au téléchargement',
          'Vos photos sont stockées sur des serveurs tiers',
          'Limites de taille et quota quotidien de conversions',
          'Publicités intrusives et traceurs tiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Vitesse instantanée — zéro latence réseau',
          'Confidentialité totale — 0 octet envoyé à l\'extérieur',
          'Aucune limite de taille ni de nombre de fichiers',
          'Interface épurée, sans publicités ni traçage',
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
    html: 'Lorsque vous glissez un JPG dans l\'outil, le navigateur crée un objet <strong>Blob</strong> qui n\'existe que dans votre RAM. Ce Blob est décodé et dessiné sur un élément <strong>Canvas HTML5</strong> invisible. Comme le JPG ne possède pas de canal alpha, la conversion en WebP est directe : le moteur exporte le canvas via <code>toDataURL(\'image/webp\')</code>, générant un flux d\'octets que votre système télécharge instantanément sans passer par aucun serveur.',
  },
  {
    type: 'paragraph',
    html: 'L\'algorithme de compression WebP combine des techniques de prédiction de blocs (similaires à celles de VP8, le codec vidéo de Google) avec des transformées de couleur et un codage arithmétique. Le résultat est un fichier contenant les mêmes informations perceptuelles que le JPG original, mais compressées beaucoup plus efficacement — ce qui se traduit par moins de kilo-octets transférés à chaque visite de page.',
  },
  {
    type: 'tip',
    title: 'Conseil Core Web Vitals : LCP et poids des images',
    html: 'Le <strong>Largest Contentful Paint (LCP)</strong> est la métrique Google qui mesure le temps de chargement du plus grand élément visuel de votre page. Un JPG d\'en-tête de 1,5 Mo peut devenir un WebP de seulement 900 Ko — voire 600 Ko — sans différence visuelle perceptible. Cette économie de <strong>25 à 35 %</strong> peut faire passer votre LCP de « À améliorer » à « Bon » et améliorer votre positionnement dans les résultats de recherche.',
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
      'Images produits sur WooCommerce ou Shopify : moins de poids, plus de conversions.',
      'Photos de blog et articles de contenu : meilleur score PageSpeed sans retoucher le design.',
      'Bannières web et créations publicitaires display : fichiers plus légers, même netteté.',
      'Galeries de portfolio pour l\'architecture, la photographie ou le design.',
      'Miniatures de vidéo sur les sites de streaming ou plateformes de cours en ligne.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir vos JPG en WebP est aujourd\'hui l\'une des optimisations les plus simples et les plus rentables que vous puissiez appliquer à n\'importe quel site web. Avec cet outil, vous le faites en quelques secondes, gratuitement, et sans que vos images ne quittent jamais votre appareil. Moins de kilo-octets, meilleur LCP, pages plus rapides — le tout avec exactement le même rendu visuel qu\'avant.',
  },
];


export const content: JpgAWebpLocaleContent = {
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
