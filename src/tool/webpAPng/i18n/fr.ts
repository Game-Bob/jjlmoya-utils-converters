import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-png';
const title = 'Convertir WebP en PNG en Ligne et Gratuitement';
const description =
  'Convertissez des images WebP en PNG dans votre navigateur. Préserve la transparence. Sans téléchargement vers des serveurs. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers WebP...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi dois-je convertir mes fichiers WebP en PNG ?',
    answer:
      'Bien que plus légers, les fichiers WebP peuvent causer des incompatibilités dans les programmes d\'édition comme les anciennes versions de Photoshop. Le PNG assure une compatibilité universelle à 100%.',
  },
  {
    question: 'Les transparences sont-elles perdues lors de la conversion de WebP en PNG ?',
    answer:
      'Pas du tout. Contrairement à la conversion en JPG, le PNG prend en charge le canal alpha. Notre utilitaire préservera toutes les zones transparentes du fichier original.',
  },
  {
    question: 'Puis-je télécharger des fichiers confidentiels de mon entreprise ?',
    answer:
      'Vous pouvez et devriez le faire. Comme tout s\'exécute localement via JavaScript, les images de votre entreprise ne quitteront jamais votre ordinateur ni ne seront stockées sur des serveurs externes.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Faites glisser vos WebP',
    text: 'Déplacez et déposez vos fichiers WebP sur le panneau principal ou sélectionnez les images traditionnellement.',
  },
  {
    name: 'Conversion haute fidélité',
    text: 'Votre navigateur redessinera l\'image pixel par pixel et générera une copie exacte en format PNG, en maintenant la gamme de couleurs originale.',
  },
  {
    name: 'Téléchargement individuel ou en masse',
    text: 'Sauvegardez chaque fichier individuellement ou, si vous avez traité un lot, cliquez sur le bouton ZIP pour les télécharger tous ensemble.',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'Documentation WebP API et bibliothèque',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'Spécification HTML Canvas 2D Context',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: format d\'image WebP',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur WebP vers PNG : Le Choix Professionnel pour l\'Édition et le Design',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Lorsqu\'un designer télécharge une ressource graphique au format <strong>WebP</strong> et tente de l\'ouvrir dans Photoshop, Figma ou Illustrator, le résultat peut être frustrant : le fichier ne se charge pas ou perd en qualité. Le format <strong>PNG</strong> est le standard incontesté de l\'édition professionnelle : compression sans perte, canal alpha complet et compatibilité garantie avec toute la chaîne de production créative.',
  },
  {
    type: 'title',
    text: 'WebP pour le Web, PNG pour le Studio',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP est un format de production web : ses algorithmes de compression sont optimisés pour réduire le poids de transfert, pas pour préserver une fidélité maximale dans les flux d\'édition itératifs. Chaque fois que vous sauvegardez un WebP modifié, le codec applique à nouveau la compression. Pour les projets où un fichier sera modifié de nombreuses fois, cela représente une dégradation cumulative de la qualité.',
  },
  {
    type: 'paragraph',
    html: 'Le PNG utilise une compression <strong>sans perte</strong> : les données de chaque pixel sont préservées intégralement, quel que soit le nombre de fois où vous sauvegardez. C\'est le format choisi par les designers UI/UX, les illustrateurs numériques et les équipes de branding qui ont besoin de maintenir l\'intégrité visuelle sur des dizaines de révisions. Des outils comme Photoshop, Figma, Sketch et Illustrator traitent le PNG comme leur principal format d\'exportation.',
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
          'Vos ressources de design sont stockées sur des serveurs tiers',
          'Traitement distant lent pour les fichiers volumineux',
          'Risque de fuite pour les projets clients confidentiels',
          'Conversion par lots limitée ou payante',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Vos designs ne quittent jamais votre machine',
          'Conversion par lots de dizaines de fichiers instantanément',
          'Préservation totale du canal alpha et de la gamme de couleurs',
          'Confidentialité absolue pour les projets clients',
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
    html: 'Les navigateurs modernes peuvent décoder le WebP nativement. Notre outil exploite cette capacité pour charger le fichier dans un élément JavaScript <strong>Image</strong>, puis le dessine sur un canvas HTML5 aux mêmes dimensions que l\'original. Contrairement à la conversion en JPG, aucun remplissage de fond n\'est nécessaire ici : le canvas conserve le canal alpha complet.',
  },
  {
    type: 'paragraph',
    html: 'L\'export final utilise la méthode <code>toDataURL(\'image/png\')</code>, qui génère un PNG sans perte fidèle à l\'original. Le résultat est un fichier prêt à être importé directement dans tout logiciel de design professionnel, sans étapes intermédiaires, dégradation des couleurs ni perte de transparence.',
  },
  {
    type: 'tip',
    title: 'Conseil pour les éditeurs',
    html: 'Utilisez le PNG lorsque vous devez continuer à éditer l\'image. La compression sans perte garantit qu\'il n\'y aura aucune dégradation de qualité lors des sauvegardes répétées — essentiel quand vous travaillez avec des calques, des masques ou des ajustements de couleur dans Photoshop ou Figma.',
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
      'Importer des ressources WebP dans Photoshop, Figma, Sketch ou Illustrator.',
      'Conserver la transparence dans les logos et icônes pour usage sur fonds multiples.',
      'Créer des copies maîtres de graphismes pour des projets à long terme.',
      'Exporter des assets pour applications mobiles nécessitant PNG avec canal alpha.',
      'Utiliser des images dans des maquettes et présentations design à fonds variables.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Si le WebP est le format du serveur web, le PNG est le format du studio de design. Cet outil convertit vos ressources WebP en PNG prêts à la production, avec les transparences intactes et une qualité maximale — le tout dans votre navigateur, sans que vos fichiers ne quittent jamais votre machine.',
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
  schemas: generateSchemas({ title, description, inLanguage: 'fr', faq, howTo }),
};
