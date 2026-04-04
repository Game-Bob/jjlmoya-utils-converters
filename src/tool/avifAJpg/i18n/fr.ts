import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convertisseur-avif-en-jpg';
const title = 'Convertir AVIF en JPG en Ligne - Sans Téléchargement de Photos';
const description =
  'Convertissez des images AVIF en JPG dans votre navigateur. Sans serveur. Traitement local 100% privé. Gratuit et illimité.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers AVIF...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir AVIF en JPG ?',
    answer:
      'Le format AVIF offre une compression supérieure, mais tous les programmes ou visionneuses ne le supportent pas. Le convertir en JPG garantit que l\'image pourra être vue sur 100% des appareils dans le monde.',
  },
  {
    question: 'Comment protégeons-nous vos images AVIF ?',
    answer:
      'Vos photos ne quittent jamais votre téléphone ou PC. L\'ensemble du processus de dessin et d\'encodage JPEG s\'exécute dans l\'environnement JavaScript de votre navigateur.',
  },
  {
    question: 'Perdrai-je de la qualité en passant d\'AVIF à JPG ?',
    answer:
      'Notre outil traite les pixels avec une qualité Canvas standard (0,9 à 0,95), rendant les changements à peine perceptibles.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Faites glisser les fichiers ou cliquez',
    text: 'Déplacez toutes les photos AVIF que vous souhaitez convertir dans la zone de traitement délimitée.',
  },
  {
    name: 'Transformation instantanée',
    text: 'Regardez en moins d\'une seconde comment l\'AVIF est réencodé en JPG, remplaçant tout canal alpha par un fond solide.',
  },
  {
    name: 'Sauvegardez ou téléchargez le ZIP',
    text: 'Téléchargez vos nouvelles images JPG individuellement ou en cliquant sur Tout télécharger si vous avez traité par lot.',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Format de fichier image AV1 (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'Aperçu JPEG',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur AVIF vers JPG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'AVIF (AV1 Image File Format) est le format d\'image le plus moderne et efficace actuellement disponible. Développé par l\'Alliance for Open Media, il offre une compression significativement supérieure au WebP, PNG et JPG. Cependant, son adoption est encore limitée : de nombreuses applications de bureau, éditeurs d\'images et visionneuses de photos sur appareils plus anciens ne peuvent pas ouvrir les fichiers AVIF.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir AVIF en JPG est la solution pour maximiser la compatibilité. Le JPG bénéficie d\'un support universel sur tous les appareils et systèmes d\'exploitation dans le monde. En convertissant d\'AVIF en JPG, vous garantissez que n\'importe qui peut voir votre image sans problèmes de compatibilité.',
  },
  {
    type: 'tip',
    html:
      'Si vous partagez des images avec des personnes utilisant des appareils ou programmes plus anciens, convertissez toujours d\'AVIF en JPG pour vous assurer qu\'ils peuvent les voir sans installer de logiciels supplémentaires.',
  },
  {
    type: 'paragraph',
    html:
      'AVIF peut produire des images 50 à 60% plus petites que JPEG à qualité visuelle équivalente. Cependant, la compatibilité universelle du JPG le rend toujours essentiel pour la distribution de masse.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez AVIF en JPG gratuitement, localement et sans limites. Compatibilité universelle maximale pour vos images sans compromettre la confidentialité de vos fichiers.',
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

export const content: AvifAJpgLocaleContent = {
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
