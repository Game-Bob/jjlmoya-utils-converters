import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-png';
const title = 'Convertir WebP en PNG en Ligne et Gratuitement - 100% Privé';
const description =
  'Convertissez des images WebP en PNG dans votre navigateur. Préserve la transparence. Sans téléchargement vers des serveurs. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers WebP...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi dois-je convertir mes fichiers WebP en PNG ?',
    answer:
      'Bien que plus légers, les fichiers WebP peuvent causer des incompatibilités dans les programmes d\'édition comme les anciennes versions de Photoshop. Le PNG assure une compatibilité universelle à 100%.',
  },
  {
    question: 'Les transparences sont-elles perdues lors de la conversion de WebP en PNG ?',
    answer:
      'Pas du tout. Contrairement à la conversion en JPG, le PNG prend en charge le canal alpha. Notre utilitaire préservera toutes les zones transparentes du fichier original.',
  },
  {
    question: 'Puis-je télécharger des fichiers confidentiels de mon entreprise ?',
    answer:
      'Vous pouvez et devriez le faire. Comme tout s\'exécute localement via JavaScript, les images de votre entreprise ne quitteront jamais votre ordinateur ni ne seront stockées sur des serveurs externes.',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'Faites glisser vos WebP',
    text: 'Déplacez et déposez vos fichiers WebP sur le panneau principal ou sélectionnez les images traditionnellement.',
  },
  {
    name: 'Conversion haute fidélité',
    text: 'Votre navigateur redessinera l\'image pixel par pixel et générera une copie exacte en format PNG, en maintenant la gamme de couleurs originale.',
  },
  {
    name: 'Téléchargement individuel ou en masse',
    text: 'Sauvegardez chaque fichier individuellement ou, si vous avez traité un lot, cliquez sur le bouton ZIP pour les télécharger tous ensemble.',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'Documentation WebP API et bibliothèque',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'Spécification HTML Canvas 2D Context',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: format d\'image WebP',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertisseur WebP vers PNG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    content:
      'WebP a été développé par Google comme alternative moderne au PNG et JPG, offrant une compression supérieure avec ou sans perte de qualité. Cependant, son adoption dans les outils d\'édition professionnels peut être limitée, rendant nécessaire la conversion WebP vers PNG pour garantir une compatibilité universelle.',
  },
  {
    type: 'paragraph',
    content:
      'Un avantage clé de la conversion WebP vers PNG est la préservation du canal alpha. Contrairement à la conversion en JPG où les fonds transparents sont remplis de blanc, le PNG maintient intégralement toutes les zones transparentes présentes dans le fichier WebP original.',
  },
  {
    type: 'tip',
    content:
      'Si votre fichier WebP a de la transparence et que vous devez l\'éditer dans Photoshop, convertissez toujours en PNG plutôt qu\'en JPG pour conserver le canal alpha.',
  },
  {
    type: 'stats',
    content:
      'Le format WebP peut réduire la taille des fichiers PNG jusqu\'à 26% et les fichiers JPG jusqu\'à 34%, selon la documentation officielle de Google.',
  },
  {
    type: 'summary',
    content:
      'Convertissez WebP en PNG avec une confidentialité et une qualité totales, en préservant les transparences. Gratuit, sans limites et traité localement dans votre navigateur.',
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

export const content: WebpAPngLocaleContent = {
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
