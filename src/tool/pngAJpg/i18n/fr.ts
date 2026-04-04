import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convertisseur-png-en-jpg';
const title = 'Convertir PNG en JPG en Ligne';
const description =
  'Convertissez des images PNG en JPG directement dans votre navigateur. Sans téléchargement vers des serveurs. Rapide, gratuit et totalement privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers PNG...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir PNG en JPG ?',
    answer:
      'Le format PNG maintient une haute qualité et la transparence, mais produit de gros fichiers. La conversion en JPG est idéale pour les photos légères dans les e-mails ou les sites web rapides lorsqu\'un fond solide est acceptable.',
  },
  {
    question: 'Vais-je perdre des détails pendant la conversion ?',
    answer:
      'Nous appliquons un taux de compression équilibré de haute qualité, de sorte que les différences dans les photographies et les dégradés seront presque imperceptibles à l\'œil, mais vous remarquerez l\'économie dans la taille finale du fichier.',
  },
  {
    question: 'Mes photos sont-elles traitées en toute sécurité ?',
    answer:
      'Absolument oui. Nous n\'utilisons pas de serveurs cloud ; l\'algorithme de conversion s\'exécute via le Canvas HTML5 de votre propre navigateur web de manière isolée.',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Glisser les fichiers PNG',
    text: 'Envoyez vos images PNG statiques dans la zone de traitement local en les déposant là.',
  },
  {
    name: 'Re-rendu blanc',
    text: 'Chaque photo adapte automatiquement sa transparence avec une couche blanche sous-jacente pour la rendre compatible avec l\'environnement JPG.',
  },
  {
    name: 'Export direct',
    text: 'Cliquez sur les icônes de téléchargement vertes et sauvegardez vos nouveaux fichiers JPG.',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'Spécifications du PNG Consortium',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'Le comité JPEG',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur PNG vers JPG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Le format PNG (Portable Network Graphics) est largement utilisé pour sa qualité sans perte et son support de la transparence (canal alpha). Cependant, cette fidélité a un coût : les fichiers PNG sont considérablement plus grands que leurs équivalents JPG, notamment pour les photographies ou les images avec des dégradés complexes.',
  },
  {
    type: 'paragraph',
    html:
      'Le JPG (ou JPEG) utilise un algorithme de compression avec perte qui réduit considérablement la taille du fichier. Pour les photographies et les images où une légère perte de détail est acceptable, JPG est le choix standard. Un PNG de 2 Mo peut devenir un JPG de 200 Ko avec une qualité visuelle pratiquement identique.',
  },
  {
    type: 'paragraph',
    html:
      'Notre convertisseur PNG vers JPG fonctionne entièrement dans votre navigateur via l\'API Canvas HTML5. Les zones transparentes du PNG original sont remplacées par un fond blanc solide, car le format JPG ne supporte pas le canal alpha.',
  },
  {
    type: 'tip',
    html:
      'Pour les images avec du texte ou des logos nécessitant des fonds transparents, envisagez d\'utiliser WebP plutôt que JPG. WebP offre une compression similaire mais conserve la transparence.',
  },
  {
    type: 'paragraph',
    html:
      'Le JPG peut réduire la taille d\'une image photographique de 70 % à 90 % par rapport au PNG, selon la complexité de l\'image et les paramètres de qualité appliqués.',
  },
  {
    type: 'paragraph',
    html:
      'Les cas d\'utilisation typiques pour la conversion PNG vers JPG comprennent : préparer des images pour l\'e-mail, optimiser les photos de produits pour les boutiques en ligne, réduire le poids des captures d\'écran avant de les partager, et compresser les images pour un chargement plus rapide des pages web.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez PNG en JPG instantanément, gratuitement et en toute confidentialité directement dans votre navigateur. Sans inscription, sans limites et sans compromettre la sécurité de vos fichiers.',
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

export const content: PngAJpgLocaleContent = {
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
