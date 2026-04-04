import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convertisseur-bmp-en-webp';
const title = 'Convertir BMP en WebP Gratuit | Votre Compresseur Natif Hors Ligne';
const description =
  'Convertissez des images BMP en WebP hors ligne. Réduisez les fichiers volumineux à des kilo-octets. Sans téléchargement. Gratuit, hors ligne et totalement privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers BMP...',
  convertText: 'Pour les convertir en WebP instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'Pourquoi mes fichiers BMP occupent-ils 10 fois plus de place et que gagne-je avec WebP ?',
    answer:
      'BMP stocke des cartes de pixels non compressées. WebP utilise la compression mathématique pour réduire les énormes BMP à moins d\'un mégaoctet tout en gardant l\'image très reconnaissable.',
  },
  {
    question: 'Dois-je créer un compte ?',
    answer:
      'Nous n\'exigeons pas d\'e-mail et votre matériel restera isolé, car le traitement est effectué par le JavaScript du navigateur installé sur votre PC, sans envoi distant.',
  },
  {
    question: 'Puis-je faire glisser plusieurs fichiers simultanément ?',
    answer:
      'Oui, vous pouvez faire glisser 50 ou 100 fichiers tant que votre matériel peut gérer leur traitement sans file d\'attente.',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: 'Identifier les fichiers bruts',
    text: 'Placez vos collections de bitmaps dans des fenêtres prêtes pour le transfert.',
  },
  {
    name: 'Activation native du lot',
    text: 'Projetez ou faites glisser tous les fichiers sur notre espace de travail numérique.',
  },
  {
    name: 'Sortie du lot WebP',
    text: 'Cliquez sur les résultats et obtenez les images de micro-poids sur disque séparément ou comme packages compressés immédiats.',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'Format de fichier BMP',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Documentation Google WebP',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur BMP vers WebP : La Réduction de Taille la Plus Extrême Possible',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Convertir BMP en WebP est sans conteste la transformation la plus spectaculaire que vous puissiez faire avec une image. Le format BMP (Bitmap) est le format le plus ancien et le plus lourd de l\'écosystème numérique : il stocke chaque pixel sans aucune compression, produisant des fichiers qui peuvent peser 20, 50 ou même 100 fois plus que leur équivalent moderne. WebP, développé par Google, applique des algorithmes de compression de dernière génération qui réduisent la taille au minimum possible tout en maintenant une excellente qualité visuelle.',
  },
  {
    type: 'title',
    text: 'Pourquoi le BMP est-il si lourd et le WebP si efficace ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le format BMP est né dans les années 80 pour Windows, à une époque où l\'espace disque était abondant et la compression n\'était pas une priorité. Chaque pixel est stocké tel quel, sans aucun algorithme de réduction : une image de 1920x1080 pixels en BMP occupe exactement 5,93 Mo quel que soit son contenu. Cela le rend idéal pour les captures d\'écran internes ou l\'édition sans perte, mais totalement inadapté au web ou au stockage moderne.',
  },
  {
    type: 'paragraph',
    html: 'WebP utilise une compression prédictive par blocs et des transformées DCT (la même technologie qui sous-tend la vidéo numérique), permettant à la même image 1920x1080 d\'occuper entre 80 Ko et 300 Ko. Cela représente une réduction de 95 à 99% par rapport au BMP original. De plus, WebP supporte le canal alpha pour la transparence et la compression avec et sans perte, offrant une polyvalence totale.',
  },
  {
    type: 'title',
    text: 'Comparatif : Convertisseurs Cloud vs Notre Architecture Locale',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui téléversent vos fichiers BMP vers un serveur distant pour les traiter.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Téléverser un BMP de 20 Mo prend des minutes avec une connexion lente',
          'Vos images restent stockées sur des serveurs tiers',
          'Limites de taille excluant les grands fichiers BMP',
          'Publicité intrusive et traceurs de données',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct dans votre navigateur via Vanilla JS et l\'API Canvas.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Conversion instantanée sans transfert réseau',
          'Confidentialité absolue — 0 octet ne quitte votre appareil',
          'Aucune limite de taille de fichier',
          'Fonctionne sans connexion internet',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion technique dans le navigateur',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Lorsque vous faites glisser un fichier BMP, le navigateur le lit comme un Blob binaire en mémoire RAM. Ce Blob est chargé dans un élément JavaScript <code>Image</code>, qui le décode à l\'aide du moteur d\'image natif. L\'image est ensuite dessinée sur un élément <code>Canvas</code> HTML5 invisible. Le Canvas agit comme une toile virtuelle où l\'image existe pixel par pixel.',
  },
  {
    type: 'paragraph',
    html: 'Une fois dessinée sur le Canvas, nous exécutons la méthode <code>toBlob()</code> avec le type MIME <code>image/webp</code> et le niveau de qualité souhaité. Le navigateur applique en interne l\'algorithme de compression WebP et génère un nouveau Blob avec le fichier résultant. Ce Blob est converti en URL de téléchargement direct que votre navigateur enregistre sur le disque. Aucune connexion réseau n\'est établie à aucun moment.',
  },
  {
    type: 'tip',
    title: 'Le plus grand bond de compression possible',
    html: 'La conversion BMP vers WebP peut atteindre une réduction de 99% de la taille du fichier. Un BMP de 20 Mo peut devenir un WebP de seulement 200 Ko avec une qualité visuelle pratiquement identique. C\'est la transformation la plus efficace disponible entre formats d\'image standard.',
  },
  {
    type: 'title',
    text: 'Cas d\'utilisation et compatibilité WebP',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Publication web — Chrome, Firefox, Safari, Edge et tous les navigateurs modernes.',
      'Réseaux sociaux — Instagram, Twitter, Facebook acceptent nativement le WebP.',
      'Applications web et PWA — tailles minimales pour un chargement instantané.',
      'Archivage efficace — remplacez les collections BMP héritées en économisant des gigaoctets.',
      'Email marketing — images légères qui chargent rapidement dans tout client de messagerie moderne.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : La conversion la plus impactante en un seul clic',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Si vous avez des fichiers BMP hérités de Windows, des captures d\'écran non compressées ou des images provenant d\'anciens outils, les convertir en WebP est l\'action la plus impactante que vous puissiez prendre pour optimiser votre stockage et vos performances web. Avec notre outil, la conversion est instantanée, privée et sans limites — exactement comme elle devrait être.',
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

export const content: BmpAWebpLocaleContent = {
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
