import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-ico';
const title = 'Convertir WebP en ICO | Installez vos Favicons et Logos dans Windows';
const description =
  'Convertissez des images WebP en ICO officiel avec transparence. Sans téléchargement. Vrais en-têtes binaires Microsoft. Gratuit et privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers WebP...',
  convertText: 'Pour les convertir en ICO instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Puis-je convertir des designs de stickers WebP en un Favicon ICO officiel web ?',
    answer:
      'Exactement. Le Favicon exige encore la classique extension ICO de Microsoft pour une compatibilité universelle extrême. Cet outil injectera des en-têtes binaires construisant une icône 100% légitime.',
  },
  {
    question: 'Dois-je attendre des files d\'attente en ligne lors de la création de mon énorme lot d\'icônes corporatives ?',
    answer:
      'Pas du tout. Notre convertisseur charge le Javascript et coupe tout réseau de téléchargement. Votre propre CPU de téléphone traite cent photos ou plus de manière asynchrone.',
  },
  {
    question: 'L\'ICO résultant supportera-t-il les transparences de mon WebP original ?',
    answer:
      'Oui. Notre moteur fonctionne en interne avec l\'API canvas HTML5 à 32 bits de support complet, chaque trou transparent passera proprement dans le fichier iconographique.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Faites glisser tous vos stickers WebP locaux',
    text: 'Déplacez les lots de photos lourdes sans craindre la saturation de la limite web.',
  },
  {
    name: 'Traduction asynchrone logique et assemblage direct',
    text: 'Remarquez rapidement comment la barre et les éléments se complètent automatiquement pendant que la mémoire traite le bloc octet par octet du cadre.',
  },
  {
    name: 'Emportez votre pack pour systèmes et développement web',
    text: 'Cliquez librement sur un bouton téléchargeable massif dans un fichier joint ou téléchargez manuellement si vous n\'en avez besoin que d\'un seul.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'Documentation Générale ICO Web Header',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Documentation Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur WebP vers ICO : Créez des Favicons Parfaits depuis vos Assets Modernes',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Les flux de travail de design web modernes produisent des ressources au format <strong>WebP</strong> : logos optimisés, icônes d\'interface et éléments de marque. Mais lorsqu\'il faut configurer le <strong>favicon</strong> de votre site ou les icônes d\'une application de bureau Windows, le format requis est toujours <strong>ICO</strong>. Convertir WebP en ICO vous permet de réutiliser vos assets de la meilleure qualité sans perdre la source originale.',
  },
  {
    type: 'title',
    text: 'WebP vs ICO : Des Formats aux Objectifs Distincts',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP est un format d\'image polyvalent, excellent pour les photographies, illustrations et icônes d\'interface web. Sa compression efficace le rend idéal pour accélérer le chargement des pages. Cependant, il ne possède pas la structure binaire spécifique que les systèmes d\'exploitation et navigateurs exigent pour reconnaître et afficher une icône d\'application ou un favicon.',
  },
  {
    type: 'paragraph',
    html: 'ICO est un format conteneur Microsoft conçu spécifiquement pour les icônes. Il peut stocker plusieurs résolutions dans un seul fichier et supporte la transparence totale via un canal alpha 32 bits. Les navigateurs cherchent un fichier <code>favicon.ico</code> par convention, et ce format garantit que votre icône s\'affiche nettement sur les écrans standards comme sur les écrans Retina et 4K.',
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
          'Votre logo d\'entreprise transite vers des serveurs tiers',
          'Connexion Internet requise pour chaque conversion',
          'Qualité de sortie variable selon le serveur',
          'Limites sur le nombre de conversions quotidiennes',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Votre logo ne quitte jamais votre navigateur',
          'En-têtes binaires ICO générés selon le standard Microsoft',
          'Transparence 32 bits préservée intégralement',
          'Conversion par lots de sets d\'icônes complets',
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
    html: 'Le navigateur décode le fichier WebP nativement et le dessine sur un <strong>Canvas HTML5</strong> en profondeur de couleur 32 bits, en préservant le canal alpha original. Notre moteur JavaScript extrait ensuite les données de pixels via la méthode <code>getImageData()</code> et construit la structure binaire ICO avec les en-têtes ICONDIR et ICONDIRENTRY spécifiés par le standard Microsoft.',
  },
  {
    type: 'paragraph',
    html: 'Le résultat est un fichier ICO légitime, pas un simple renommage de fichier. Les données de pixels sont empaquetées avec la structure correcte que Windows, macOS et tous les navigateurs modernes s\'attendent à trouver lors du chargement d\'un favicon ou d\'une icône d\'application.',
  },
  {
    type: 'tip',
    title: 'Conseil pour des favicons nets',
    html: 'Générez toujours votre ICO à partir de la source en plus haute résolution disponible. Un WebP de 512×512 ou plus grand produira un favicon parfaitement net sur les écrans Retina et 4K, là où les icônes basse résolution apparaissent floues.',
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
      'Créer le fichier favicon.ico pour tout site web ou application web.',
      'Générer des icônes d\'application pour les installateurs de logiciels Windows.',
      'Produire des icônes de bureau pour les applications Electron ou similaires.',
      'Créer des jeux d\'icônes pour les extensions Chrome et Firefox.',
      'Convertir des logos WebP de marque en icônes pour applications d\'entreprise.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Votre flux de design moderne produit du WebP ; l\'écosystème applicatif exige encore de l\'ICO. Cet outil comble cet écart en quelques secondes, en générant des icônes avec la structure binaire correcte et une transparence intacte, sans que vos assets de marque ne quittent jamais votre navigateur.',
  },
];

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: WebpAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema as any],
};
