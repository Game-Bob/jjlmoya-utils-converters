import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'convertisseur-bmp-en-jpg';
const title = 'Convertir BMP en JPG en Ligne - Rapide, Gratuit et Privé';
const description =
  'Convertissez des images BMP en JPG dans votre navigateur. Réduction drastique de la taille. Sans téléchargement vers des serveurs. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers BMP...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir BMP en JPG ?',
    answer:
      'Le format BMP ne compresse pas les données, ce qui donne des fichiers extrêmement volumineux. Le JPG compresse l\'image de manière drastique tout en maintenant une excellente qualité visuelle pour le web et la distribution.',
  },
  {
    question: 'Est-il sûr de convertir mes images ici ?',
    answer:
      '100% sûr. Votre confidentialité est garantie puisque le traitement est effectué entièrement localement en utilisant le moteur de votre propre navigateur web.',
  },
  {
    question: 'Comment fonctionne l\'outil ?',
    answer:
      'Faites simplement glisser vos fichiers BMP, et notre script JavaScript lira les pixels pour les redessiner sur un canvas HTML et les exporter en codage JPEG instantanément.',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'Téléchargez vos fichiers BMP',
    text: 'Faites glisser-déposer ou sélectionnez vos images au format BMP dans la zone désignée.',
  },
  {
    name: 'Traitement automatique',
    text: 'L\'outil rastérise l\'image et applique le niveau de compression JPG optimal en quelques millisecondes.',
  },
  {
    name: 'Téléchargement individuel ou par lot',
    text: 'Obtenez vos nouvelles images optimisées pour le web une à une ou en téléchargeant un fichier ZIP.',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'Spécification du format de fichier BMP',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur BMP vers JPG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'BMP (Bitmap) est l\'un des formats d\'image les plus anciens, développé à l\'origine par Microsoft pour Windows. Sa caractéristique principale est qu\'il stocke les données d\'image sans compression, ce qui signifie qu\'un fichier BMP d\'une photographie standard peut occuper des dizaines voire des centaines de mégaoctets.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir BMP en JPG est la solution la plus pratique pour réduire drastiquement la taille de ces fichiers. Le JPG applique une compression intelligente qui peut réduire un BMP de 95% ou plus tout en maintenant une excellente qualité visuelle pour les photographies.',
  },
  {
    type: 'tip',
    html:
      'Si vous avez de très gros fichiers BMP, convertissez-en un d\'abord pour vérifier que la qualité JPG résultante est satisfaisante, puis traitez le lot complet.',
  },
  {
    type: 'paragraph',
    html:
      'Un BMP non compressé pour une image 1920x1080 occupe environ 6 Mo. Le même contenu en JPG de haute qualité peut n\'occuper que 200-400 Ko, une réduction de 93-97%.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez BMP en JPG gratuitement, en toute confidentialité et sans limites directement dans votre navigateur. Réduisez la taille de vos images jusqu\'à 97% sans perte de qualité visuelle notable.',
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

export const content: BmpAJpgLocaleContent = {
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
