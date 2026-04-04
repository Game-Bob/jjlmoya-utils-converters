import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'convertisseur-svg-en-jpg';
const title = 'Convertir SVG en JPG en Ligne et Gratuitement - Haute Résolution';
const description =
  'Convertissez des fichiers SVG vectoriels en JPG dans votre navigateur. Rendu haute résolution 2x. Sans téléchargement. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers SVG...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir SVG en JPG ?',
    answer:
      'Le JPG offre une compatibilité maximale sur tous les types d\'appareils ; convertir un SVG en JPG est le meilleur moyen de s\'assurer que tout le monde peut voir votre design sans problèmes de rendu.',
  },
  {
    question: 'Que se passe-t-il avec la transparence du SVG ?',
    answer:
      'Lors de la conversion en JPG (qui ne supporte pas la transparence), un fond blanc opaque sera automatiquement ajouté à votre composition vectorielle.',
  },
  {
    question: 'Quelle résolution aura le JPG résultant ?',
    answer:
      'L\'outil rend le SVG à double échelle (2x) pour garantir une haute résolution adaptée aux écrans Retina et à l\'usage professionnel.',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'Insérez vos fichiers vectoriels',
    text: 'Déposez vos fichiers SVG dans la zone supérieure pour préparer la liste d\'export.',
  },
  {
    name: 'Rastérisation en JPG',
    text: 'L\'outil convertira les vecteurs en pixels haute résolution et générera votre JPG instantanément.',
  },
  {
    name: 'Téléchargez les résultats',
    text: 'Obtenez vos fichiers JPG un par un ou comme package ZIP.',
  },
];

const bibliography: SvgAJpgLocaleContent['bibliography'] = [
  {
    name: 'Spécification W3C SVG',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Aperçu du standard JPEG',
    url: 'https://jpeg.org/jpeg/',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur SVG vers JPG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'Bien que le SVG soit parfaitement évolutif et léger pour le web, vous avez parfois besoin d\'une version JPG de votre graphique vectoriel. Le JPG est le format photographique le plus compatible au monde et peut être ouvert sans problème par n\'importe quel appareil, système d\'exploitation ou programme de visualisation d\'images.',
  },
  {
    type: 'paragraph',
    html:
      'La conversion SVG en JPG implique un processus de rastérisation : le graphique vectoriel est converti en grille de pixels. Pendant ce processus, les transparences SVG sont fusionnées avec un fond blanc solide, car le JPG ne supporte pas le canal alpha. Notre convertisseur effectue cette rastérisation à double résolution (2x).',
  },
  {
    type: 'tip',
    html:
      'Si votre SVG contient du texte ou des polices personnalisées, assurez-vous qu\'ils sont incorporés ou convertis en chemins avant la conversion. Les polices système peuvent ne pas être disponibles dans le moteur de rendu.',
  },
  {
    type: 'paragraph',
    html:
      'Un SVG de 100 Ko converti en JPG à 2x peut produire un fichier entre 50 Ko et 500 Ko selon la complexité du design et les couleurs utilisées.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez SVG en JPG haute résolution gratuitement et en toute confidentialité. Rendu 2x pour une netteté maximale, fond blanc automatique pour une compatibilité JPG totale.',
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

export const content: SvgAJpgLocaleContent = {
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
