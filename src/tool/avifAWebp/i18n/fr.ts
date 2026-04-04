import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'convertisseur-avif-en-webp';
const title = 'Convertir AVIF en WebP en Ligne';
const description =
  'Convertissez des images AVIF en WebP avec une meilleure compatibilité. Traitement local sans serveurs. Gratuit, privé et illimité.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers AVIF...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'Quelle est la vraie différence entre convertir en WebP et d\'autres formats ?',
    answer:
      'WebP offre le meilleur des deux mondes : des compressions aussi impressionnantes que le JPG mais en conservant la capacité d\'héberger des transparences propres comme un PNG. Changer votre AVIF en WebP maximise la compatibilité web tout en préservant tous ses avantages.',
  },
  {
    question: 'Comment y parvenez-vous sans serveur et rapidement ?',
    answer:
      'Nous tirons parti des modules de décodage intégrés et de l\'objet Image HTML5 JavaScript, ce qui permet de lire votre AVIF en mémoire locale et d\'extraire un fichier WebP optimisé en un temps record.',
  },
  {
    question: 'Le format WebP est-il entièrement compatible aujourd\'hui ?',
    answer:
      'Contrairement à l\'AVIF naissant, le format WebP bénéficie d\'un très large support parmi les navigateurs comme Chrome, Firefox et Safari.',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: 'Insérez vos fichiers photo',
    text: 'Déplacez et déposez toutes vos sélections au format AVIF sur notre canvas.',
  },
  {
    name: 'Traduction algorithmique d\'octets',
    text: 'Notre moteur assimile les algorithmes sans rien télécharger et crée des itérations exactes basées sur WebP compressé.',
  },
  {
    name: 'Récupérez vos téléchargements prêts',
    text: 'Cliquez sur le panneau et recevez des lots en boîtes ZIP ou des fichiers individuels à publier directement.',
  },
];

const bibliography: AvifAWebpLocaleContent['bibliography'] = [
  {
    name: 'Format de fichier image AV1',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Aperçu du format Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur AVIF vers WebP : L\'Alternative Moderne et Sûre pour le Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF est le format d\'image le plus avancé disponible aujourd\'hui : plus petit que WebP, plus petit que JPG, avec une qualité visuelle supérieure. Cependant, son adoption a été inégale — Safari ne l\'a supporté qu\'en 2024, et de nombreux appareils mobiles plus anciens ne le reconnaissent pas. WebP, en revanche, est établi comme le standard web moderne depuis des années avec plus de 95% de support mondial. Convertir AVIF en WebP est la décision pragmatique quand vous avez besoin de modernité sans risquer la compatibilité.',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP : Le Plus Récent vs Le Plus Fiable',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF offre la compression la plus avancée disponible — typiquement 20-30% plus petit que WebP à la même qualité. Sa technologie basée sur AV1 est la plus moderne du secteur. Cependant, le support d\'AVIF a encore des angles morts : les anciennes versions de Safari, certains navigateurs sur des Android plus anciens, et certaines visionneuses d\'images de bureau ne le reconnaissent pas. Pour la production web avec des audiences larges et diverses, cela représente un risque.',
  },
  {
    type: 'paragraph',
    html: 'WebP a un historique de support bien plus solide. Chrome l\'a adopté en 2010, Firefox et Edge ont suivi, et Safari l\'a intégré en 2020. Avec plus de 95% de couverture mondiale des navigateurs, WebP est le choix sûr pour tout site web qui ne veut pas servir des formats de secours. Il supporte la transparence, la compression avec et sans perte, et produit des fichiers bien plus petits que JPG ou PNG.',
  },
  {
    type: 'title',
    text: 'Comparatif : Convertisseurs Cloud vs Notre Architecture Locale',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui téléversent vos fichiers AVIF vers un serveur distant pour les traiter.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos images privées transitent par des serveurs externes',
          'Latence réseau qui ralentit le flux de travail',
          'Limites de fichiers par conversion gratuite',
          'Dépendance de services tiers qui peuvent changer',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct dans votre navigateur via Vanilla JS et l\'API Canvas.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Confidentialité totale — 0 octet ne quitte votre appareil',
          'Vitesse instantanée sans dépendance réseau',
          'Aucune limite de taille ni de nombre de fichiers',
          'Fonctionne sans connexion internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion technique dans le navigateur',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome, Firefox et Edge incluent des décodeurs AVIF natifs. Lors du chargement du fichier, le moteur d\'image du navigateur le décode en RAM en conservant les informations du canal alpha. L\'image est peinte sur un élément <code>Canvas</code> HTML5 invisible en utilisant le contexte 2D, qui préserve correctement la transparence.',
  },
  {
    type: 'paragraph',
    html: 'L\'export est réalisé avec <code>toBlob(\'image/webp\', quality)</code>. Le navigateur applique en interne l\'algorithme de compression WebP, générant un Blob qui inclut le canal alpha si l\'image originale en avait un. Ce Blob est converti en lien de téléchargement direct. L\'ensemble du processus se déroule en microsecondes sans aucune communication avec des serveurs externes.',
  },
  {
    type: 'tip',
    title: 'WebP : le choix pragmatique du développeur moderne',
    html: 'WebP a plus de 95% de support navigateur — AVIF progresse mais n\'a pas encore atteint ce chiffre. Pour les sites en production sans détection de format adaptative, WebP est le choix sûr qui couvre presque toute audience. Convertissez vos AVIF en WebP et servez des images modernes en toute confiance.',
  },
  {
    type: 'title',
    text: 'Cas d\'utilisation : quand choisir WebP plutôt qu\'AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Sites web nécessitant un support navigateur depuis 2020 sans polyfills.',
      'CDNs et systèmes de livraison d\'images acceptant WebP mais pas AVIF.',
      'Applications mobiles hybrides avec WebViews pouvant ne pas supporter AVIF.',
      'Emails HTML modernes où WebP a un support plus large qu\'AVIF.',
      'Plateformes CMS et ecommerce avec support d\'image WebP établi.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : Modernité avec compatibilité garantie',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF est l\'avant-garde de la compression d\'images, mais WebP est le choix fiable et universel de l\'écosystème web moderne. Avec notre outil, vous convertissez du plus récent au plus supporté en un instant — sans rien télécharger sur aucun serveur, avec une confidentialité totale et sans limites de taille.',
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

export const content: AvifAWebpLocaleContent = {
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
