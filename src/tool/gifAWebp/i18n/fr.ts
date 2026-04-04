import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'convertisseur-gif-en-webp';
const title = 'Convertir GIF en WebP Statique | Économisez du Poids Hors Ligne';
const description =
  'Convertissez des GIF animés en WebP statique. Préserve la transparence. Sans serveur. Traitement local dans votre navigateur. Gratuit.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers GIF...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi figer un fichier animé au format statique moderne WebP ?',
    answer:
      'WebP est le standard de compression de Google ; il est remarquablement léger et conserve la transparence proprement. Passer de GIF à WebP élimine l\'animation lourde et réalise un gain abyssal en vitesse web.',
  },
  {
    question: 'L\'avatar original restera-t-il transparent ?',
    answer:
      'Oui, contrairement au JPEG, le conteneur WebP respecte le canal Alpha complexe. Toutes ses silhouettes resteront parfaites comme elles l\'étaient nativement.',
  },
  {
    question: 'Où les fichiers seront-ils téléchargés ?',
    answer:
      'Il n\'y a pas de téléchargement. Le traitement est effectué entièrement par le Javascript du navigateur sur votre PC, avec zéro envoi distant.',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'Lancez une avalanche animée',
    text: 'Déplacez et déposez des dizaines de mèmes dans la zone délimitée sans connexion distante.',
  },
  {
    name: 'Contemplez le grand changement invisible',
    text: 'Regardez un indicateur progressif changer à chaque milliseconde pendant que le décodeur de canvas local génère la sortie.',
  },
  {
    name: 'Compressez ou sauvegardez votre arsenal résultant propre',
    text: 'Prenez les fichiers extraits individuellement ou appuyez sur Télécharger Zip pour tout emballer.',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'Spécification GIF89a',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Documentation Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur GIF vers WebP en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Convertir GIF en WebP combine les meilleures caractéristiques des deux formats. Le GIF peut avoir de la transparence et plusieurs images, tandis que WebP peut être statique, plus léger et de meilleure qualité. En extrayant la première image du GIF et en l\'exportant en WebP, vous obtenez une image moderne, ultra-légère avec support complet de la transparence.',
  },
  {
    type: 'paragraph',
    html:
      'Le format WebP offre une compression supérieure avec et sans perte. Pour les images extraites de GIF avec peu de couleurs ou de grandes zones uniformes, la compression WebP sans perte peut produire des fichiers extraordinairement petits tout en maintenant une qualité parfaite.',
  },
  {
    type: 'tip',
    html:
      'Utilisez la conversion GIF vers WebP pour moderniser votre collection d\'avatars animés ou de stickers : vous obtiendrez des images statiques ultra-compressées avec une transparence parfaite, idéales pour le web.',
  },
  {
    type: 'paragraph',
    html:
      'Un GIF de 300 Ko peut produire un WebP statique de la première image de seulement 15-50 Ko s\'il a des zones uniformes et de la transparence. La réduction de taille peut dépasser 80%.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez GIF en WebP statique gratuitement et hors ligne. Meilleure compression que PNG et JPG, avec support de transparence. Traitement local sans contact avec les serveurs.',
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

export const content: GifAWebpLocaleContent = {
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
