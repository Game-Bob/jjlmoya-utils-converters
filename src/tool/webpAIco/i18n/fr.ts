import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-ico';
const title = 'Convertir WebP en ICO | Installez vos Favicons et Logos dans Windows';
const description =
  'Convertissez des images WebP en ICO officiel avec transparence. Sans téléchargement. Vrais en-têtes binaires Microsoft. Gratuit et privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers WebP...',
  convertText: 'Pour les convertir en ICO instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'Puis-je convertir des designs de stickers WebP en un Favicon ICO officiel web ?',
    answer:
      'Exactement. Le Favicon exige encore la classique extension ICO de Microsoft pour une compatibilité universelle extrême. Cet outil injectera des en-têtes binaires construisant une icône 100% légitime.',
  },
  {
    question: 'Dois-je attendre des files d\'attente en ligne lors de la création de mon énorme lot d\'icônes corporatives ?',
    answer:
      'Pas du tout. Notre convertisseur charge le Javascript et coupe tout réseau de téléchargement. Votre propre CPU de téléphone traite cent photos ou plus de manière asynchrone.',
  },
  {
    question: 'L\'ICO résultant supportera-t-il les transparences de mon WebP original ?',
    answer:
      'Oui. Notre moteur fonctionne en interne avec l\'API canvas HTML5 à 32 bits de support complet, chaque trou transparent passera proprement dans le fichier iconographique.',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'Faites glisser tous vos stickers WebP locaux',
    text: 'Déplacez les lots de photos lourdes sans craindre la saturation de la limite web.',
  },
  {
    name: 'Traduction asynchrone logique et assemblage direct',
    text: 'Remarquez rapidement comment la barre et les éléments se complètent automatiquement pendant que la mémoire traite le bloc octet par octet du cadre.',
  },
  {
    name: 'Emportez votre pack pour systèmes et développement web',
    text: 'Cliquez librement sur un bouton téléchargeable massif dans un fichier joint ou téléchargez manuellement si vous n\'en avez besoin que d\'un seul.',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'Documentation Générale ICO Web Header',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Documentation Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertisseur WebP vers ICO en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    content:
      'WebP est le format d\'image moderne préféré pour le web, fréquemment utilisé pour les logos, icônes d\'interface et graphiques d\'applications. Lorsque vous devez convertir ces designs WebP en vraies icônes pour Windows ou Favicons pour des sites web, vous avez besoin du format ICO avec la structure binaire correcte.',
  },
  {
    type: 'paragraph',
    content:
      'Un avantage clé de la conversion WebP en ICO (au lieu de JPG en ICO) est la préservation des transparences. WebP supporte le canal alpha tout comme PNG, donc notre convertisseur peut transférer ces transparences dans l\'ICO résultant. Vous obtiendrez une icône à fond transparent parfaitement fonctionnelle dans Windows et les navigateurs web.',
  },
  {
    type: 'tip',
    content:
      'Si vous avez un logo ou un sticker au format WebP avec fond transparent et souhaitez l\'utiliser comme Favicon de votre site web, convertissez directement en ICO pour le meilleur résultat avec transparence préservée.',
  },
  {
    type: 'stats',
    content:
      'Le format Favicon ICO est supporté par 100% des navigateurs web pour afficher l\'icône de l\'onglet du navigateur. Bien que PNG fonctionne aussi, ICO offre une compatibilité maximale incluant Internet Explorer et les navigateurs plus anciens.',
  },
  {
    type: 'summary',
    content:
      'Convertissez WebP en ICO avec transparence préservée et vrais en-têtes binaires. Gratuit, privé et illimité. Le meilleur convertisseur pour les Favicons et icônes Windows depuis WebP.',
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

export const content: WebpAIcoLocaleContent = {
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
