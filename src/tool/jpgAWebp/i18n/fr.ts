import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'convertisseur-jpg-en-webp';
const title = 'Convertir JPG en WebP en Ligne et Gratuitement - Haute Qualité';
const description =
  'Convertissez des images JPG en WebP dans votre navigateur. Compression supérieure sans perte visible. Sans téléchargement. Gratuit, illimité et privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers JPG...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir des photos JPG en WebP ?',
    answer:
      'WebP permet une compression significativement meilleure des fichiers JPG traditionnels sans que l\'œil humain ne remarque la différence, résultant en des sites web plus rapides et modernes.',
  },
  {
    question: 'Dois-je payer par image ?',
    answer:
      'Non, l\'outil est gratuit et tout est traité directement sur votre ordinateur. Il est illimité pour usage domestique ou professionnel.',
  },
  {
    question: 'La conversion est-elle sécurisée ?',
    answer:
      'Oui, totalement. Tout le traitement se fait dans le Canvas HTML5 de votre navigateur local sans envoyer aucune donnée vers des serveurs externes.',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'Insérez vos photos JPG',
    text: 'Déposez vos fichiers JPG ou faites-les glisser directement dans la zone supérieure. La détection est instantanée.',
  },
  {
    name: 'Traitement en WebP',
    text: 'Le moteur de rendu local convertira chaque fichier image en un WebP ultra-optimisé prêt pour le web.',
  },
  {
    name: 'Téléchargez les résultats',
    text: 'Sauvegardez chaque WebP individuellement ou téléchargez le ZIP avec tous les fichiers convertis.',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Étude de compression Google WebP',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: Servir des images en formats modernes',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur JPG vers WebP en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Le JPG est le standard pour les photographies web depuis des décennies. Cependant, le format moderne WebP de Google offre un meilleur rapport qualité-taille, permettant de réduire la taille des fichiers JPG de 25% à 35% tout en maintenant une qualité visuelle pratiquement identique.',
  },
  {
    type: 'paragraph',
    html:
      'Le processus de conversion JPG vers WebP préserve toutes les informations de couleur de l\'image originale. Contrairement au PNG qui peut être affecté par la gestion de la transparence, le JPG est un format purement plat, ce qui signifie que la conversion en WebP est simple.',
  },
  {
    type: 'tip',
    html:
      'Utilisez WebP pour les images de produits en e-commerce, les photographies de blog et toute image sur votre site web. Les navigateurs modernes comme Chrome, Firefox et Safari supportent entièrement WebP.',
  },
  {
    type: 'paragraph',
    html:
      'Selon des études de Google, les images WebP avec perte sont entre 25% et 34% plus petites que les fichiers JPG comparables, ce qui peut accélérer le temps de chargement d\'une page web de plusieurs secondes.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez JPG en WebP sans frais, sans limites et avec une confidentialité totale. Réduisez le poids de vos images et améliorez immédiatement les performances de votre site web.',
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

export const content: JpgAWebpLocaleContent = {
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
