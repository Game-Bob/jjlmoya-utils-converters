import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convertisseur-bmp-en-webp';
const title = 'Convertir BMP en WebP Gratuit | Votre Compresseur Natif Hors Ligne';
const description =
  'Convertissez des images BMP en WebP hors ligne. Réduisez les fichiers volumineux à des kilo-octets. Sans téléchargement. Gratuit, hors ligne et totalement privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers BMP...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi mes fichiers BMP occupent-ils 10 fois plus de place et que gagne-je avec WebP ?',
    answer:
      'BMP stocke des cartes de pixels non compressées. WebP utilise la compression mathématique pour réduire les énormes BMP à moins d\'un mégaoctet tout en gardant l\'image très reconnaissable.',
  },
  {
    question: 'Dois-je créer un compte ?',
    answer:
      'Nous n\'exigeons pas d\'e-mail et votre matériel restera isolé, car le traitement est effectué par le JavaScript du navigateur installé sur votre PC, sans envoi distant.',
  },
  {
    question: 'Puis-je faire glisser plusieurs fichiers simultanément ?',
    answer:
      'Oui, vous pouvez faire glisser 50 ou 100 fichiers tant que votre matériel peut gérer leur traitement sans file d\'attente.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identifier les fichiers bruts',
    text: 'Placez vos collections de bitmaps dans des fenêtres prêtes pour le transfert.',
  },
  {
    name: 'Activation native du lot',
    text: 'Projetez ou faites glisser tous les fichiers sur notre espace de travail numérique.',
  },
  {
    name: 'Sortie du lot WebP',
    text: 'Cliquez sur les résultats et obtenez les images de micro-poids sur disque séparément ou comme packages compressés immédiats.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'Format de fichier BMP',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Documentation Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur BMP vers WebP en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Convertir BMP en WebP représente l\'une des réductions de taille les plus dramatiques possibles entre formats d\'image. Un fichier BMP non compressé peut occuper 10, 20 ou même 50 fois plus d\'espace que son équivalent WebP. Le format WebP de Google utilise une compression avancée avec et sans perte, produisant des fichiers extrêmement légers.',
  },
  {
    type: 'paragraph',
    html:
      'Le processus fonctionne entièrement hors ligne dans votre navigateur. Les fichiers BMP sont décodés via l\'API native du navigateur, rendus sur un canvas HTML5 et exportés en WebP. Aucune connexion réseau n\'est établie pendant la conversion, garantissant la confidentialité totale de vos fichiers.',
  },
  {
    type: 'tip',
    html:
      'Si vous avez une collection d\'anciennes images BMP Windows, les convertir en WebP est le moyen le plus efficace de les moderniser pour le web tout en maintenant toute leur qualité visuelle.',
  },
  {
    type: 'paragraph',
    html:
      'Un BMP de capture d\'écran de bureau typique à 1920x1080 peut passer de ses 6 Mo originaux à un WebP de 100 Ko à 500 Ko, représentant des réductions allant jusqu\'à 98%.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez BMP en WebP hors ligne, gratuitement et sans limites. La conversion la plus efficace disponible : de fichiers non compressés énormes vers un WebP ultra-compressé, avec confidentialité totale garantie.',
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

export const content: BmpAWebpLocaleContent = {
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
