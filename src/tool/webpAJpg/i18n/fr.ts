import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-jpg';
const title = 'Convertir WebP en JPG en Ligne et Gratuitement - Sans Téléchargement';
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
      'Oui. Il n\'y a pas de serveur de téléchargement. Votre navigateur traite le WebP sur votre ordinateur et génère le JPG à télécharger. Personne d\'autre ne le voit.',
  },
  {
    question: 'Que se passe-t-il avec le fond de mon WebP s\'il est transparent ?',
    answer:
      'Comme le JPG ne supporte pas la transparence, le convertisseur remplira automatiquement les zones transparentes avec un fond blanc solide.',
  },
  {
    question: 'Y a-t-il une limite aux conversions ou à la taille des fichiers ?',
    answer:
      'Nous n\'imposons aucune restriction. Vous pouvez convertir des centaines d\'images tant que votre ordinateur dispose de la puissance de traitement et de la RAM suffisantes.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Faites glisser vos fichiers',
    text: 'Déposez vos fichiers WebP modernes dans la zone de téléchargement ou sélectionnez-les à l\'aide du navigateur de fichiers interactif.',
  },
  {
    name: 'Conversion locale',
    text: 'Observez le moteur local appliquer un fond et interpréter chaque pixel au format JPG universel.',
  },
  {
    name: 'Obtenez vos résultats',
    text: 'Téléchargez individuellement ou utilisez le package ZIP pour consolider toutes vos nouvelles photographies.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: Les standards JPEG',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'Compatibilité WebP vers JPEG',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur WebP vers JPG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'WebP est le standard d\'image web moderne de Google, mais sa compatibilité avec les logiciels plus anciens peut être problématique. Convertir WebP en JPG garantit que vos images peuvent être ouvertes par pratiquement n\'importe quel programme, appareil ou plateforme, car JPG est le format photographique le plus universellement supporté.',
  },
  {
    type: 'paragraph',
    html:
      'Un aspect technique important à considérer est la gestion de la transparence. Le format JPG ne prend pas en charge le canal alpha, donc toute zone transparente dans le fichier WebP original sera automatiquement remplacée par un fond blanc solide lors de la conversion.',
  },
  {
    type: 'tip',
    html:
      'Pour de meilleurs résultats, convertissez WebP en JPG lorsque vous devez partager des photos par e-mail ou réseaux sociaux où la taille est importante. Si vous avez besoin de transparence, utilisez WebP vers PNG.',
  },
  {
    type: 'paragraph',
    html:
      'Le format JPG a une compatibilité de 100% sur tous les navigateurs, systèmes d\'exploitation et appareils, tandis que WebP peut ne pas être compatible avec certains visionneuses d\'images et éditeurs plus anciens.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez WebP en JPG localement, gratuitement et sans limites. Sans serveurs, sans inscription, compatible avec tous vos appareils et fichiers.',
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

export const content: WebpAJpgLocaleContent = {
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
