import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'convertisseur-avif-en-webp';
const title = 'Convertir AVIF en WebP en Ligne - Sécurité et Vitesse';
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
    text: 'Convertisseur AVIF vers WebP en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Convertir AVIF en WebP est un choix judicieux lorsque vous devez élargir la compatibilité de vos images sans sacrifier l\'efficacité de compression. Tandis qu\'AVIF offre la meilleure compression possible, WebP a une compatibilité bien plus large sur les navigateurs, appareils et applications.',
  },
  {
    type: 'paragraph',
    html:
      'WebP maintient plusieurs caractéristiques qui le rendent supérieur au JPG pour le web : il supporte le canal alpha pour la transparence, peut utiliser à la fois la compression avec et sans perte, et bénéficie d\'un support universel dans tous les navigateurs modernes.',
  },
  {
    type: 'tip',
    html:
      'Si vous gérez des images pour un site web et avez besoin du meilleur équilibre entre compatibilité et performances, WebP est le choix idéal. Convertissez vos AVIF en WebP pour servir des images web modernes avec un support universel.',
  },
  {
    type: 'paragraph',
    html:
      'WebP bénéficie d\'un support dans plus de 96% de tous les navigateurs web mondiaux, tandis qu\'AVIF est autour de 80-85%. Cette différence de compatibilité rend WebP plus sûr pour le déploiement en production.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez AVIF en WebP gratuitement avec support de transparence et meilleure compatibilité web. Traitement local sans envoi de données vers des serveurs externes.',
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
