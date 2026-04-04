import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'convertisseur-svg-en-png';
const title = 'Convertir SVG en PNG en Ligne et Gratuitement - Haute Résolution';
const description =
  'Convertissez des fichiers SVG vectoriels en PNG dans votre navigateur. Sortie HD à double échelle. Préserve la transparence. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers SVG...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir des fichiers SVG en PNG ?',
    answer:
      'SVG est vectoriel et idéal pour les logos, mais parfois vous avez besoin du format PNG rastérisé pour l\'utiliser dans des applications qui ne supportent pas les vecteurs, ou pour le partager sur les réseaux sociaux.',
  },
  {
    question: 'Puis-je choisir la taille de sortie ?',
    answer:
      'Nous doublons actuellement l\'échelle du SVG source pour que la sortie PNG soit nette et adaptée aux écrans Retina ou 4K.',
  },
  {
    question: 'Les transparences SVG sont-elles maintenues ?',
    answer:
      'Oui, le PNG résultant préserve le canal alpha du SVG original, maintenant tous les fonds transparents intacts.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Insérez vos fichiers SVG',
    text: 'Déposez vos fichiers SVG ou faites-les glisser directement dans la zone supérieure.',
  },
  {
    name: 'Génération du PNG HD',
    text: 'En quelques millisecondes, notre moteur local recrée chaque vecteur en une couche de pixels HD au format PNG transparent.',
  },
  {
    name: 'Téléchargez les fichiers',
    text: 'Sauvegardez les PNG générés individuellement ou dans un package ZIP.',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'Spécification W3C SVG',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: Tutoriel SVG',
    url: 'https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur SVG vers PNG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'SVG (Scalable Vector Graphics) est un format d\'image basé sur XML qui décrit des graphiques vectoriels. Ses principaux avantages sont qu\'il s\'adapte parfaitement à n\'importe quelle taille sans perte de qualité et que les fichiers sont généralement petits. Cependant, tous les programmes, applications ou plateformes de réseaux sociaux ne supportent pas directement le SVG.',
  },
  {
    type: 'paragraph',
    html:
      'Convertir SVG en PNG est la solution lorsque vous avez besoin d\'une version rastérisée de votre graphique vectoriel. Le PNG résultant est universellement compatible et, grâce à son support du canal alpha, préserve toutes les transparences du SVG original.',
  },
  {
    type: 'tip',
    html:
      'Pour la meilleure qualité dans le PNG résultant, assurez-vous que votre SVG a des dimensions définies (attributs width et height ou viewBox). Un SVG sans dimensions définies pourrait se rendre à une taille incorrecte.',
  },
  {
    type: 'paragraph',
    html:
      'Les fichiers SVG sont infiniment évolutifs, mais un PNG à résolution 2x d\'un SVG 256x256 produira une image de 512x512 pixels, adaptée à la plupart des utilisations sur les écrans modernes à haute densité.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez SVG en PNG HD gratuitement, en toute confidentialité et avec préservation de la transparence. Rendu à double échelle pour les écrans Retina et 4K.',
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

export const content: SvgAPngLocaleContent = {
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
