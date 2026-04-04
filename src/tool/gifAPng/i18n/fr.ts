import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAPngLocaleContent } from '../index';

const slug = 'convertisseur-gif-en-png';
const title = 'Convertir GIF en PNG en Ligne';
const description =
  'Extrayez la première image de vos GIF et convertissez en PNG en préservant la transparence. Sans serveur. Traitement local. Gratuit.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers GIF...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir un format animé comme GIF en un format statique comme PNG ?',
    answer:
      'De nombreux réseaux sociaux ou avatars n\'acceptent pas les photographies changeantes. Extraire la première image d\'un GIF complexe vers un PNG de haute qualité résout les barrières de compatibilité et réduit le poids inutile des fichiers.',
  },
  {
    question: 'Les transparences de l\'ancien GIF sont-elles conservées dans le PNG résultant ?',
    answer:
      'Oui, contrairement au JPG, le format PNG maintient le canal alpha. Si le GIF avait un fond transparent, le PNG le conservera avec des bords nets.',
  },
  {
    question: 'Conservez-vous mes images sur des serveurs après le traitement ?',
    answer:
      'Aucun serveur ne retient votre GIF ; toute l\'extraction est locale grâce à l\'API Canvas Web. C\'est le processeur de votre PC qui décode en toute sécurité votre fichier sans aucun contact réseau.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Apportez-nous l\'animation',
    text: 'Déposez les fichiers GIF lourds dans la boîte d\'insertion.',
  },
  {
    name: 'Photo extraite parfaite',
    text: 'Le système se figera à l\'origine exacte du mouvement, produisant la copie impeccable en millisecondes.',
  },
  {
    name: 'Sauvegardez votre image statique',
    text: 'Stockez en vrac dans ZIP tous ces volumes d\'avatars GIF statiques convertis en PNG.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: Format PNG',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'Information GIF CompuServe',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur GIF vers PNG : Dépassez les Limites de Couleurs et de Transparence du GIF',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le GIF a été conçu à une époque où les moniteurs pouvaient à peine afficher 256 couleurs. Des décennies plus tard, cette limitation reste sa plus grande faiblesse. Le PNG a été créé précisément pour remplacer le GIF dans tous les cas d\'usage où la qualité et la transparence importent : logos, icônes, graphiques d\'interface et toute image à fond transparent devant s\'afficher parfaitement sur n\'importe quelle couleur de fond.',
  },
  {
    type: 'title',
    text: 'GIF vs PNG : la révolution des 16 millions de couleurs',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La différence la plus critique entre GIF et PNG n\'est pas seulement le nombre de couleurs. Le GIF supporte une transparence binaire : chaque pixel est soit opaque soit totalement transparent, sans gradation. Le PNG, en revanche, supporte un canal alpha complet avec 256 niveaux d\'opacité par pixel. Cela signifie que les bords d\'un logo en PNG peuvent être parfaitement lissés, tandis que ceux du GIF affichent un crénelage caractéristique sur les fonds colorés.',
  },
  {
    type: 'paragraph',
    html: 'En plus d\'une transparence supérieure, le PNG supprime la limite de 256 couleurs du GIF. Captures d\'écran, illustrations avec dégradés, logos avec ombres — tout s\'affiche bien mieux en PNG. Et comme il utilise une compression sans perte, chaque pixel conserve sa valeur exacte d\'origine, sans les artefacts qu\'une conversion JPG introduirait.',
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
        description: 'Outils qui traitent vos images sur des serveurs distants.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos logos et icônes transitent sur internet',
          'Temps d\'attente dû à la latence réseau',
          'Limites de taille et de nombre de fichiers',
          'Vos images peuvent rester dans des caches tiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Le GIF ne quitte jamais votre appareil',
          'Conversion instantanée sans réseau',
          'Aucune limite de fichiers ni de taille',
          'Confidentialité absolue : 0 octet envoyé',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion locale GIF vers PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversion utilise l\'API Canvas du navigateur. Le GIF est décodé en mémoire sous forme d\'élément Image natif. En le rendant sur un canvas HTML5, le moteur graphique du navigateur capture la première image avec toutes ses informations de transparence d\'origine intactes.',
  },
  {
    type: 'paragraph',
    html: 'Contrairement à une conversion JPG, avec le PNG il n\'est pas nécessaire d\'ajouter un fond blanc. Le canal alpha du GIF original est préservé directement dans le PNG exporté. La méthode <code>toDataURL(\'image/png\')</code> du canvas génère le flux d\'octets PNG dans la RAM de votre ordinateur, sans aucune transmission réseau, et le fichier est téléchargé directement.',
  },
  {
    type: 'tip',
    title: 'Transparence binaire du GIF vs canal alpha complet du PNG',
    html: 'Le GIF ne supporte que la transparence binaire (opaque ou transparent). Lors de la conversion en PNG, les pixels semi-transparents du GIF sont préservés tels que le navigateur les interprète. Si votre GIF a des bords crénelés, le PNG les conservera — mais vous pourrez ensuite les lisser avec un anti-aliasing dans n\'importe quel éditeur, chose impossible avec le GIF original.',
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
      'Logos et icônes utilisables sur n\'importe quelle couleur de fond.',
      'Avatars pour Discord, Telegram, Slack et plateformes de jeu.',
      'Graphiques d\'interface pour applications web et mobiles.',
      'Stickers et emojis personnalisés à fond transparent.',
      'Captures d\'écran et éléments UI pour la documentation technique.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : le PNG est ce que le GIF a toujours voulu être',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir un GIF en PNG n\'est pas seulement changer de format : c\'est mettre à jour une image vers le standard moderne que le GIF n\'a jamais pu atteindre. Plus de couleurs, meilleure transparence, moins de poids. Notre outil effectue cette conversion en quelques millisecondes, directement dans votre navigateur, sans envoyer aucune donnée à l\'extérieur.',
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

export const content: GifAPngLocaleContent = {
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
