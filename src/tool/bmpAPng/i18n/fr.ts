import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'convertisseur-bmp-en-png';
const title = 'Convertisseur BMP vers PNG | Format Local Sans Perte';
const description =
  'Convertissez des images BMP en PNG sans perte de qualité. Compression moderne sans artefacts. Sans téléchargement. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers BMP...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'Quelle est la principale différence entre BMP et PNG ?',
    answer:
      'BMP et PNG sont tous deux des formats sans perte. La différence réside dans l\'optimisation : PNG utilise des algorithmes de compression modernes pour stocker la même image en occupant 5 à 10 fois moins de mémoire que le BMP.',
  },
  {
    question: 'La conversion est-elle vraiment privée ?',
    answer:
      'Oui. Tout le traitement photographique est effectué par votre ordinateur. Absolument personne n\'accède à vos fichiers lors du traitement local.',
  },
  {
    question: 'Pourquoi PNG plutôt que JPEG dans ce cas ?',
    answer:
      'Si vous avez un fichier BMP, c\'est parce que l\'image a des couleurs précises. Convertir un BMP au standard destructeur JPG altérerait vos couleurs nettes. Le PNG protège cette fidélité.',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: 'Chargez votre photo',
    text: 'Déplacez tranquillement les fichiers source BMP dans notre zone de dépôt d\'éléments web.',
  },
  {
    name: 'Traduire sans transmission réseau',
    text: 'Ressentez en à peine une seconde le traitement propre effectué localement par votre JS HTML5.',
  },
  {
    name: 'Obtenez des PNG purs',
    text: 'Téléchargez les répliques PNG individuellement ou via un package compressé.',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'Format de fichier BMP',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Spécification PNG W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur BMP vers PNG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'BMP et PNG sont tous deux des formats d\'image sans perte, ce qui signifie qu\'aucune information visuelle n\'est jetée lors du stockage. Cependant, il existe une différence fondamentale en termes d\'efficacité : BMP stocke les données brutes sans compression, tandis que PNG utilise l\'algorithme de compression Deflate pour réduire la taille du fichier sans perdre un seul pixel d\'information.',
  },
  {
    type: 'paragraph',
    html:
      'La conversion BMP vers PNG est particulièrement utile lors du travail avec des captures d\'écran, des graphiques d\'interface utilisateur, des designs à couleurs plates ou toute image où la précision des couleurs est prioritaire. PNG préservera chaque valeur de couleur exactement comme dans le BMP original, mais avec une taille de fichier considérablement plus petite.',
  },
  {
    type: 'tip',
    html:
      'Si vous avez besoin d\'une compatibilité maximale avec les logiciels d\'édition et d\'une précision parfaite des couleurs, convertissez BMP en PNG plutôt qu\'en JPG. Le PNG sans perte garantit que les couleurs ne se dégradent jamais.',
  },
  {
    type: 'paragraph',
    html:
      'Un BMP plein écran typique (1920x1080) occupe environ 6 Mo. Le même contenu en PNG peut occuper 1 à 3 Mo, soit une réduction de 50 à 85% sans aucune perte de qualité.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez BMP en PNG sans perte de qualité, gratuitement et en toute confidentialité. La meilleure option pour préserver des couleurs exactes avec une taille de fichier optimisée.',
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

export const content: BmpAPngLocaleContent = {
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
