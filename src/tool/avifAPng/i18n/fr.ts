import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'convertisseur-avif-en-png';
const title = 'Convertir AVIF en PNG en Ligne - Rapide, Local et 100% Privé';
const description =
  'Convertissez des images AVIF en PNG en préservant la transparence. Sans téléchargement. Traitement local dans votre navigateur. Gratuit et illimité.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers AVIF...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi devrais-je convertir AVIF en PNG ?',
    answer:
      'AVIF est excellent pour la compression, mais sa compatibilité est limitée dans les anciens navigateurs et éditeurs classiques. En convertissant d\'AVIF en PNG, vous vous assurez que votre fichier conservera la transparence originale et toutes les applications pourront l\'ouvrir.',
  },
  {
    question: 'Les transparences du fichier AVIF original sont-elles maintenues ?',
    answer:
      'Oui. Contrairement au JPG qui supprime le fond transparent, lors de l\'exportation en PNG notre convertisseur garde le canal alpha intact.',
  },
  {
    question: 'Est-il vrai que mes images ne sont pas téléchargées sur internet ?',
    answer:
      'Absolument vrai. Notre convertisseur fonctionne à 100% localement sur votre appareil en utilisant le moteur JavaScript interne.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Ajoutez vos fichiers AVIF',
    text: 'Vous pouvez les faire glisser directement dans la zone délimitée ou utiliser le bouton pour parcourir les dossiers de votre ordinateur.',
  },
  {
    name: 'Traitement immédiat',
    text: 'Laissez le processeur HTML5 rendre l\'image ; le format passera automatiquement en PNG en microsecondes.',
  },
  {
    name: 'Obtenez vos PNG',
    text: 'Téléchargez les images converties une par une ou téléchargez un lot complet via le bouton ZIP.',
  },
];

const bibliography: AvifAPngLocaleContent['bibliography'] = [
  {
    name: 'Alliance for Open Media: Format AVIF',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'W3C - Spécification PNG (Portable Network Graphics)',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertisseur AVIF vers PNG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    content:
      'AVIF est l\'un des formats les plus avancés disponibles aujourd\'hui, capable de compresser des images avec une efficacité remarquable. Cependant, l\'adoption d\'AVIF dans les outils d\'édition, les visionneuses d\'images et les systèmes d\'exploitation plus anciens est encore limitée. PNG, en revanche, est un format largement compatible, supporté par pratiquement n\'importe quel outil logiciel.',
  },
  {
    type: 'paragraph',
    content:
      'La conversion AVIF vers PNG présente un avantage fondamental par rapport à la conversion en JPG : la préservation du canal alpha. Si votre image AVIF a des zones transparentes, lors de la conversion en PNG celles-ci sont conservées intactes. Ceci est crucial pour les logos, icônes, autocollants et tout graphique où la transparence est essentielle.',
  },
  {
    type: 'tip',
    content:
      'Si vous recevez un fichier AVIF que vous devez éditer dans Photoshop ou GIMP, convertissez-le d\'abord en PNG pour assurer une compatibilité totale et préserver toute transparence présente.',
  },
  {
    type: 'stats',
    content:
      'PNG bénéficie d\'un support universel dans tous les éditeurs d\'image, systèmes d\'exploitation et navigateurs web. AVIF, malgré son efficacité, n\'est toujours pas supporté dans Internet Explorer, les anciennes versions de Safari et de nombreux programmes d\'édition.',
  },
  {
    type: 'summary',
    content:
      'Convertissez AVIF en PNG en préservant la transparence, gratuitement et localement. Obtenez la compatibilité universelle du PNG sans sacrifier la qualité d\'image de votre AVIF.',
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

export const content: AvifAPngLocaleContent = {
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
