import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'convertisseur-png-en-webp';
const title = 'Convertir PNG en WebP en Ligne et Gratuitement - Haute Qualité';
const description =
  'Convertissez des images PNG en WebP dans votre navigateur. Jusqu\'à 40% de taille en moins. Préserve la transparence. Sans téléchargement. Gratuit et privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers PNG...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir PNG en WebP ?',
    answer:
      'WebP offre une compression jusqu\'à 40% supérieure au PNG à qualité égale, tout en supportant également la transparence Alpha. C\'est le format recommandé par Google PageSpeed Insights.',
  },
  {
    question: 'La transparence est-elle perdue dans le processus ?',
    answer:
      'Non. L\'implémentation technique de WebP supporte le canal alpha. Les transparences du PNG original seront préservées dans le nouveau fichier WebP.',
  },
  {
    question: 'Mes images vont-elles sur un serveur ?',
    answer:
      'Non. Le code s\'exécute uniquement dans votre navigateur (côté client). Nous ne voyons, n\'enregistrons ni ne sauvegardons jamais les images que vous convertissez.',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'Insérez vos PNG',
    text: 'Déposez vos gros fichiers PNG dans la zone de téléchargement ou utilisez le sélecteur interactif traditionnel.',
  },
  {
    name: 'Détection des canaux',
    text: 'Le moteur de rendu local détectera et exportera la composition de pixels au format WebP optimisé.',
  },
  {
    name: 'Téléchargement direct',
    text: 'Téléchargez vos fichiers WebP hautement compressés individuellement ou regroupez-les dans un package ZIP.',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: Détails d\'implémentation WebP',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Guidance Core Web Vitals',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: Formats d\'image',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur PNG vers WebP en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'WebP est devenu le standard recommandé par Google pour les images web. Lorsque votre page utilise des images WebP au lieu de PNG, Google PageSpeed Insights le reconnaît comme une optimisation positive qui peut améliorer significativement votre score de performance et le temps de chargement de la page.',
  },
  {
    type: 'paragraph',
    html:
      'Une caractéristique technique clé de WebP est qu\'il supporte à la fois la compression avec et sans perte, et supporte également le canal alpha pour la transparence. Cela signifie que vous pouvez convertir PNG en WebP sans perdre les zones transparentes de votre image.',
  },
  {
    type: 'tip',
    html:
      'Avant de télécharger des images sur votre site web ou blog, convertissez tous vos PNG en WebP pour améliorer les temps de chargement et l\'expérience utilisateur, surtout sur les connexions mobiles lentes.',
  },
  {
    type: 'paragraph',
    html:
      'Selon Google, les images WebP sans perte sont 26% plus petites que les PNG équivalents. Les images WebP avec perte sont 25-34% plus petites que les JPG comparables à la même qualité visuelle.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez PNG en WebP gratuitement, avec support de transparence et sans envoyer d\'images aux serveurs. Réduisez le poids des images jusqu\'à 40% et améliorez les performances web.',
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

export const content: PngAWebpLocaleContent = {
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
