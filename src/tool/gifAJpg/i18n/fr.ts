import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'convertisseur-gif-en-jpg';
const title = 'Convertir GIF en JPG en Ligne | Transformez vos Animations en Photos Statiques';
const description =
  'Extrayez la première image de vos GIF et convertissez en JPG. Sans serveur. Traitement local dans votre navigateur. Gratuit et illimité.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers GIF...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'Que se passe-t-il avec les animations lors de la conversion en JPG ?',
    answer:
      'Le JPG est strictement statique et ne supporte pas plusieurs images. Notre convertisseur extrait uniquement la première image ou trame apparaissant dans la séquence GIF.',
  },
  {
    question: 'Vais-je perdre des effets spéciaux ou des fonds transparents ?',
    answer:
      'Oui, c\'est le comportement naturel du standard JPG. Si vous téléchargez un GIF avec fond transparent, nous insérons automatiquement une couche blanche sous-jacente solide pour éviter des couleurs corrompues.',
  },
  {
    question: 'Puis-je extraire des photos JPG d\'un GIF sans que le site sauvegarde mon contenu ?',
    answer:
      'Absolument oui. L\'outil est une application web basée sur le Canvas HTML5. Tout le décodage est exécuté par le processeur de votre propre appareil physique.',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: 'Faites glisser vos fichiers GIF animés',
    text: 'Placez ou faites glisser depuis votre dossier ce GIF dans notre boîte de traitement.',
  },
  {
    name: 'Extraction propre de la première image',
    text: 'En fractions de temps, l\'animation est extraite créant le JPG blanc solide sans contacter de serveurs.',
  },
  {
    name: 'Téléchargez-les en lot ZIP',
    text: 'Téléchargez via les boutons ou en utilisant le Zip si vous avez traité un grand nombre de fichiers.',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Spécification Technique Joint Photographic Experts Group',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'Information GIF CompuServe',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur GIF vers JPG : Extrayez des Fotogrammes en Images Haute Qualité',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Les GIF animés dominent les animations courtes sur le web depuis des décennies. Mais leur nature animée les rend totalement inutilisables comme miniatures, aperçus pour les réseaux sociaux ou images pour des documents. Lorsque vous avez besoin d\'extraire une image précise d\'un GIF et de la transformer en image statique haute qualité, la conversion en JPG est la solution la plus pratique et universellement compatible.',
  },
  {
    type: 'title',
    text: 'GIF vs JPG : deux formats aux objectifs opposés',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le GIF (Graphics Interchange Format) a été conçu en 1987 avec une limitation sévère qui persiste encore aujourd\'hui : il ne peut représenter que 256 couleurs par image. Cette contrainte technique n\'avait pas d\'importance pour les animations simples à palettes réduites, mais elle en fait un format visuellement pauvre pour la photographie réelle. Le JPG, en revanche, peut restituer des millions de couleurs grâce à des algorithmes de compression perceptuelle avancés.',
  },
  {
    type: 'paragraph',
    html: 'Extraire une image d\'un GIF et la sauvegarder en JPG offre de nombreuses applications pratiques : générer des miniatures pour les lecteurs vidéo, créer des aperçus pour les systèmes de gestion de contenu, obtenir des images statiques pour des présentations, ou simplement archiver un moment visuel d\'une animation complexe. Le JPG résultant sera bien plus léger que le GIF original et universellement compatible.',
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
        description: 'Outils qui envoient vos fichiers vers un serveur distant pour les traiter.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos GIF transitent sur internet vers des serveurs tiers',
          'Latence réseau à l\'envoi et au téléchargement',
          'Limites de taille et de fichiers par session',
          'Risque de rétention de données sur des serveurs externes',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Le GIF ne quitte jamais votre appareil',
          'Vitesse instantanée sans attente réseau',
          'Aucune limite de taille ni de quota de fichiers',
          'Confidentialité totale : 0 octet envoyé à l\'extérieur',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne l\'extraction technique d\'image',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversion locale s\'appuie sur l\'API Canvas HTML5. Lorsque vous chargez un GIF, le navigateur le décode en mémoire sous forme d\'élément Image natif. En le rendant sur un canvas invisible, le moteur graphique du navigateur capture automatiquement la première image de la séquence d\'animation.',
  },
  {
    type: 'paragraph',
    html: 'Comme le JPG ne supporte pas la transparence, notre algorithme applique un fond blanc solide avant l\'exportation. La méthode <code>toDataURL(\'image/jpeg\')</code> du canvas génère le flux d\'octets JPG directement dans la RAM de votre ordinateur, sans aucune connexion réseau. Le fichier résultant est immédiatement téléchargé sur votre appareil.',
  },
  {
    type: 'tip',
    title: 'Palette de couleurs limitée du GIF',
    html: 'Le GIF ne peut contenir que 256 couleurs par image. Le JPG extrait héritera de cette palette réduite du fichier original : si le GIF contenait des dégradés ou des photographies, il peut apparaître avec une certaine postérisation. Pour de meilleurs résultats, utilisez des GIF avec des couleurs simples ou des illustrations.',
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
      'Miniatures et aperçus pour plateformes vidéo et CMS.',
      'Images de couverture pour publications sur les réseaux sociaux.',
      'Insertion dans des documents Word, PowerPoint ou PDF.',
      'Fichiers de présentation et supports marketing.',
      'Compatibilité universelle avec les visionneuses sur Windows, macOS et mobile.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : l\'image qui vaut plus que l\'animation',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Un GIF animé de 2 Mo peut produire un JPG de la première image de seulement 50 à 200 Ko selon la résolution. Notre outil effectue cette conversion instantanément, en toute confidentialité et sans limites, directement dans votre navigateur. Sans serveurs, sans comptes, sans attente.',
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

export const content: GifAJpgLocaleContent = {
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
