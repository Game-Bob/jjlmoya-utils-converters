import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImagenBase64LocaleContent } from '../index';
import type { ImageToBase64UI } from '../index';

const slug = 'convertisseur-image-base64';
const title = 'Convertisseur Image vers Base64 en Ligne - Gratuit et 100% Privé';
const description =
  'Convertissez n\'importe quelle image en code Base64 et Data URI directement dans votre navigateur. Sans téléchargement. Gratuit, privé et instantané.';

const ui: ImageToBase64UI = {
  dragTitle: 'Faites glisser votre image ici',
  dragSubtext: 'ou cliquez pour parcourir vos fichiers',
  formatBadge: 'Supporte JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (Prêt pour CSS / HTML src="")',
  base64Label: 'Base64 uniquement (Texte encodé en clair)',
  copyBtn: 'Copier',
  dataUriPlaceholder: 'Téléchargez une image pour voir le code Data URI...',
  base64Placeholder: 'Téléchargez une image pour voir le code Base64 pur...',
  toastMessage: 'Code copié dans le presse-papiers !',
  invalidImageAlert: 'Veuillez télécharger un fichier image valide.',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Qu\'est-ce que Base64 et à quoi sert-il dans le développement web ?',
    answer:
      'Base64 est un système d\'encodage qui convertit des données binaires en une chaîne de texte ASCII. Dans le développement web, il est utilisé pour intégrer des images directement dans les fichiers HTML ou CSS via des Data URIs, réduisant le nombre de requêtes HTTP vers le serveur.',
  },
  {
    question: 'Est-il sûr de convertir mes images en Base64 ici ?',
    answer:
      'Absolument sûr et privé. Notre outil fonctionne à 100% localement dans votre navigateur. Vos images ne sont jamais téléchargées ni traitées sur un serveur externe.',
  },
  {
    question: 'Quels formats d\'image le convertisseur Base64 supporte-t-il ?',
    answer:
      'L\'outil est compatible avec JPG, PNG, GIF, WebP et même les fichiers vectoriels SVG. Lors du chargement de l\'image, il détectera automatiquement son type MIME pour générer le code Data URI exact.',
  },
  {
    question: 'Quand NE devrais-je PAS utiliser des images en Base64 ?',
    answer:
      'Vous devriez éviter d\'utiliser des images en Base64 pour de grandes photographies ou des images haute résolution. Le code Base64 occupe environ 33% de poids en plus que le fichier binaire original, ce qui peut excessivement gonfler vos feuilles de style CSS ou documents HTML.',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: 'Faites glisser ou sélectionnez votre image',
    text: 'Déplacez n\'importe quelle image (JPG, PNG, WebP, SVG, GIF) vers la zone de téléchargement pour démarrer la conversion.',
  },
  {
    name: 'Copiez le code généré',
    text: 'Vous verrez deux zones de texte : le Data URI complet (prêt à utiliser dans src="" ou CSS) et le Base64 pur pour d\'autres utilisations.',
  },
  {
    name: 'Utilisez le code dans votre projet',
    text: 'Collez directement le Data URI dans le src d\'une balise img ou dans votre CSS comme background-image sans avoir besoin de fichiers externes.',
  },
];

const bibliography: ImagenBase64LocaleContent['bibliography'] = [
  {
    name: 'MDN Web Docs: Data URIs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
  },
  {
    name: 'Base64 Encoding RFC 4648',
    url: 'https://datatracker.ietf.org/doc/html/rfc4648',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur d\'Image vers Base64 en Ligne',
  },
  {
    type: 'paragraph',
    html:
      'L\'encodage Base64 est une technique fondamentale dans le développement web moderne. Il permet de représenter des données binaires (comme des images) sous forme de texte ASCII, rendant possible l\'intégration d\'images directement dans le code HTML, CSS ou JavaScript sans fichiers séparés. Cela se fait via ce qu\'on appelle les Data URIs (Uniform Resource Identifiers de données).',
  },
  {
    type: 'paragraph',
    html:
      'Un Data URI pour une image suit le format : data:[type MIME];base64,[données encodées]. Notre outil génère automatiquement le bon type MIME selon le format de l\'image que vous téléchargez, que ce soit PNG, JPG, WebP, GIF ou SVG.',
  },
  {
    type: 'paragraph',
    html:
      'Les principaux cas d\'utilisation pour les images Base64 incluent : les icônes SVG en CSS, les petits logos dans les applications SPA, les images critiques pour le chargement initial de page qui ne devraient pas causer de requêtes réseau supplémentaires, et les données d\'image en JSON ou APIs REST.',
  },
  {
    type: 'tip',
    html:
      'Le code Base64 est environ 33% plus grand que le fichier original. Pour les petites images (icônes, logos, petits sprites) c\'est efficace. Pour les grandes photographies, il vaut mieux utiliser des fichiers séparés et profiter du cache du navigateur.',
  },
  {
    type: 'paragraph',
    html:
      'Une image PNG de 1Ko se convertit en environ 1,37Ko de Base64. Une image de 100Ko donnerait environ 137Ko de texte Base64. Ce facteur de 1,33x est constant pour tout type de fichier.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez des images en Base64 et Data URI gratuitement et en toute confidentialité. Support JPG, PNG, WebP, SVG et GIF. Résultat immédiat dans votre navigateur sans traitement côté serveur.',
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

export const content: ImagenBase64LocaleContent = {
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
