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
  faqTitle: 'Questions Fréquentes',
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
    text: 'Convertisseur Image vers Base64 : Intégrez des Images Sans Requêtes HTTP',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 est une technique d\'encodage qui transforme des données binaires — comme une image — en une chaîne de texte ASCII pur. Le résultat est un Data URI : une URL auto-contenue qui commence par <code>data:image/png;base64,...</code> et contient l\'image entière encodée. En intégrant ce code directement dans votre HTML, CSS ou JSON, l\'image se charge sans aucune requête HTTP supplémentaire au serveur — zéro latence réseau, chargement instantané.',
  },
  {
    type: 'title',
    text: 'Quand utiliser les images en Base64',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le principal argument en faveur de Base64 est l\'élimination des requêtes réseau. Chaque image sur une page web représente une requête HTTP avec son overhead de connexion, DNS, handshake TLS et latence. Pour les très petites images critiques — le logo principal de l\'application, le favicon, une icône d\'interface — les intégrer en Base64 dans le CSS ou HTML élimine ce coût et garantit leur affichage instantané même avant que le navigateur n\'ait rien mis en cache.',
  },
  {
    type: 'paragraph',
    html: 'Cette technique est particulièrement puissante dans les applications SPA (Single Page Applications) où le bundle JavaScript et CSS est généré au moment de la compilation : intégrer de petites images dans le bundle garantit qu\'elles se chargent avec le code sans requêtes supplémentaires. Elle est aussi indispensable pour les emails HTML, où les clients de messagerie bloquent les images externes mais affichent toujours les Data URIs intégrés.',
  },
  {
    type: 'title',
    text: 'Cas d\'utilisation pour les images Base64',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML inline : <code>&lt;img src="data:image/png;base64,..."&gt;</code> pour les icônes critiques.',
      'CSS background : <code>background-image: url("data:image/svg+xml;base64,...")</code> pour les SVGs d\'interface.',
      'JSON et APIs REST : envoi d\'images comme données texte dans les payloads JSON.',
      'Emails HTML : images intégrées qui s\'affichent même quand le client bloque les URLs externes.',
      'Intégration SVG : intégrer des images raster dans des fichiers SVG comme données inline.',
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion dans le navigateur',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Lorsque vous sélectionnez ou faites glisser une image, l\'API <code>FileReader</code> du navigateur la lit directement depuis le disque comme données binaires en RAM. La méthode <code>readAsDataURL()</code> convertit ces octets binaires en leur représentation Base64 selon l\'algorithme RFC 4648 — chaque 3 octets de données originales sont représentés par 4 caractères ASCII de l\'alphabet Base64. Le résultat inclut le type MIME correct détecté automatiquement.',
  },
  {
    type: 'tip',
    title: 'Utilisez-le uniquement pour les petites images (moins de 10 Ko)',
    html: 'Base64 augmente la taille du fichier d\'environ 33% : une image de 10 Ko devient ~13,3 Ko de texte. Pour les petites icônes et logos, ce coût est minimal et l\'élimination de la requête HTTP le compense. Pour les photographies ou grandes images, le surcoût de taille est significatif — utilisez toujours un CDN pour les grandes images.',
  },
  {
    type: 'title',
    text: 'Quand NE PAS utiliser Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: 'Évitez Base64 pour les grandes images — utilisez un CDN',
    html: 'Si vous avez des images de plus de 10-20 Ko, Base64 nuit aux performances : il gonfle la taille du HTML/CSS, empêche le navigateur de mettre l\'image en cache de façon indépendante, et bloque le rendu pendant que le parseur traite la chaîne géante. Pour les grandes images, servez toujours depuis un CDN avec des en-têtes de cache appropriés.',
  },
  {
    type: 'title',
    text: 'Compatibilité et confidentialité',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Les Data URIs sont compatibles avec 100% des navigateurs modernes et la plupart des clients de messagerie. Notre outil traite tout localement via l\'API FileReader — vos images ne quittent jamais votre appareil. Cela le rend adapté aux images d\'entreprise, aux captures d\'écran privées ou à tout contenu visuel confidentiel que vous devez convertir en Base64.',
  },
  {
    type: 'title',
    text: 'Conclusion : L\'outil d\'intégration le plus rapide et le plus privé',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir des images en Base64 est une technique ciblée mais très puissante quand elle est appliquée correctement. Utilisez-la pour les petites images critiques où zéro requête HTTP fait la différence, et évitez-la pour les grandes images où un CDN gagne toujours. Avec notre outil, vous obtenez le Data URI en un instant, sans rien téléverser sur aucun serveur.',
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
