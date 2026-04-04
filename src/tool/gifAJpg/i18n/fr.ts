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
    text: 'Convertisseur GIF vers JPG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Les fichiers GIF sont largement connus pour leur capacité à jouer de courtes animations. Cependant, il y a des situations où vous avez besoin d\'une image statique du contenu GIF : pour l\'utiliser comme miniature, l\'envoyer par e-mail, ou simplement pour obtenir une version de haute qualité d\'un moment spécifique de l\'animation.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir GIF en JPG extrait la première image de l\'animation et la convertit en une image JPG statique. Pendant ce processus, les zones transparentes du GIF original sont remplacées par un fond blanc solide, car le JPG ne supporte pas la transparence.',
  },
  {
    type: 'tip',
    html:
      'Si vous devez extraire plusieurs images d\'un GIF animé (pas seulement la première), envisagez d\'utiliser un outil spécialisé d\'édition GIF. Ce convertisseur est optimisé pour obtenir rapidement l\'image statique de la première trame.',
  },
  {
    type: 'paragraph',
    html:
      'Un GIF animé de 2 Mo peut produire un JPG de la première image de seulement 50-200 Ko, selon la résolution et la complexité de l\'image.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez GIF en JPG en extrayant la première image. Gratuit, privé et local. Fonds transparents automatiquement remplacés par du blanc pour une compatibilité JPG totale.',
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
