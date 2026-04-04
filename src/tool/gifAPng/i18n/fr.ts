import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { GifAPngLocaleContent } from '../index';

const slug = 'convertisseur-gif-en-png';
const title = 'Convertir GIF en PNG en Ligne | Extraire une Image Statique Sans Perte';
const description =
  'Extrayez la première image de vos GIF et convertissez en PNG en préservant la transparence. Sans serveur. Traitement local. Gratuit.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers GIF...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir un format animé comme GIF en un format statique comme PNG ?',
    answer:
      'De nombreux réseaux sociaux ou avatars n\'acceptent pas les photographies changeantes. Extraire la première image d\'un GIF complexe vers un PNG de haute qualité résout les barrières de compatibilité et réduit le poids inutile des fichiers.',
  },
  {
    question: 'Les transparences de l\'ancien GIF sont-elles conservées dans le PNG résultant ?',
    answer:
      'Oui, contrairement au JPG, le format PNG maintient le canal alpha. Si le GIF avait un fond transparent, le PNG le conservera avec des bords nets.',
  },
  {
    question: 'Conservez-vous mes images sur des serveurs après le traitement ?',
    answer:
      'Aucun serveur ne retient votre GIF ; toute l\'extraction est locale grâce à l\'API Canvas Web. C\'est le processeur de votre PC qui décode en toute sécurité votre fichier sans aucun contact réseau.',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'Apportez-nous l\'animation',
    text: 'Déposez les fichiers GIF lourds dans la boîte d\'insertion.',
  },
  {
    name: 'Photo extraite parfaite',
    text: 'Le système se figera à l\'origine exacte du mouvement, produisant la copie impeccable en millisecondes.',
  },
  {
    name: 'Sauvegardez votre image statique',
    text: 'Stockez en vrac dans ZIP tous ces volumes d\'avatars GIF statiques convertis en PNG.',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: Format PNG',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'Information GIF CompuServe',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertisseur GIF vers PNG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    content:
      'Convertir GIF en PNG présente un avantage significatif par rapport à la conversion en JPG : la préservation de la transparence. Le PNG, comme certains GIF, supporte le canal alpha. Si votre GIF a un fond transparent, le PNG résultant le préservera avec une totale fidélité.',
  },
  {
    type: 'paragraph',
    content:
      'Un autre avantage du PNG sur le JPG pour ce type de conversion est la qualité sans perte. Le PNG utilise une compression sans perte, ce qui signifie que l\'image extraite du GIF conservera tous ses détails sans les artefacts de compression que le format JPG introduirait.',
  },
  {
    type: 'tip',
    content:
      'Si vous avez un avatar GIF animé pour Discord, Telegram ou d\'autres plateformes et avez besoin de la version PNG statique, ce convertisseur est l\'outil parfait pour l\'obtenir en quelques secondes.',
  },
  {
    type: 'stats',
    content:
      'Un GIF animé de 500 Ko peut produire un PNG de la première image entre 50 Ko et 200 Ko, selon la complexité et les couleurs de l\'image. S\'il a de la transparence, le PNG la préservera parfaitement.',
  },
  {
    type: 'summary',
    content:
      'Convertissez GIF en PNG en préservant la transparence et sans perte de qualité. Extraction de la première image gratuitement, en toute confidentialité et localement dans votre navigateur.',
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

export const content: GifAPngLocaleContent = {
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
