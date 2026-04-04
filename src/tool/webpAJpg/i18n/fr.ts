import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'convertisseur-webp-en-jpg';
const title = 'Convertir WebP en JPG en Ligne et Gratuitement - Sans Téléchargement';
const description =
  'Convertissez des images WebP en JPG sans télécharger de fichiers. Traitement local 100% privé. Les fonds transparents sont automatiquement remplacés par du blanc.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers WebP...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'Puis-je télécharger des images privées en toute sécurité ?',
    answer:
      'Oui. Il n\'y a pas de serveur de téléchargement. Votre navigateur traite le WebP sur votre ordinateur et génère le JPG à télécharger. Personne d\'autre ne le voit.',
  },
  {
    question: 'Que se passe-t-il avec le fond de mon WebP s\'il est transparent ?',
    answer:
      'Comme le JPG ne supporte pas la transparence, le convertisseur remplira automatiquement les zones transparentes avec un fond blanc solide.',
  },
  {
    question: 'Y a-t-il une limite aux conversions ou à la taille des fichiers ?',
    answer:
      'Nous n\'imposons aucune restriction. Vous pouvez convertir des centaines d\'images tant que votre ordinateur dispose de la puissance de traitement et de la RAM suffisantes.',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'Faites glisser vos fichiers',
    text: 'Déposez vos fichiers WebP modernes dans la zone de téléchargement ou sélectionnez-les à l\'aide du navigateur de fichiers interactif.',
  },
  {
    name: 'Conversion locale',
    text: 'Observez le moteur local appliquer un fond et interpréter chaque pixel au format JPG universel.',
  },
  {
    name: 'Obtenez vos résultats',
    text: 'Téléchargez individuellement ou utilisez le package ZIP pour consolider toutes vos nouvelles photographies.',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: Les standards JPEG',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'Compatibilité WebP vers JPEG',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur WebP vers JPG : Compatibilité Universelle sans Compromettre la Confidentialité',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le format <strong>WebP</strong> est le pari de Google sur l\'efficacité : des images plus légères avec une qualité comparable au JPG traditionnel. Pourtant, sa compatibilité reste un problème concret. Les clients de messagerie comme Outlook, les logiciels de design anciens, les applications de messagerie et les flux de travail d\'entreprise dépendent encore du <strong>JPG</strong> omniprésent. Convertir WebP en JPG, c\'est construire le pont entre le web moderne et le monde réel.',
  },
  {
    type: 'title',
    text: 'WebP vs JPG : Quand Utiliser Chaque Format ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP excelle dans les environnements maîtrisés : sites web modernes sur Chrome, Edge ou Firefox où la compatibilité du navigateur est garantie. Sa compression supérieure réduit le poids des fichiers de 25 à 35 % par rapport à un JPG équivalent, améliorant les temps de chargement et les métriques Core Web Vitals. C\'est le format idéal quand vous contrôlez l\'environnement d\'affichage.',
  },
  {
    type: 'paragraph',
    html: 'Le JPG, en revanche, fonctionne dans <em>absolument tous les contextes</em> : pièces jointes d\'e-mail, présentations PowerPoint, documents Word, imprimantes domestiques, applications d\'édition héritées et plateformes de réseaux sociaux sans exception. Si vous avez besoin qu\'une personne ouvre votre image sans aucune friction technique, JPG est la bonne réponse.',
  },
  {
    type: 'title',
    text: 'Comparatif : Conversion Locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui téléchargent vos fichiers vers un serveur distant.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos photos transitent par Internet vers des serveurs inconnus',
          'Temps d\'attente pour l\'upload et le traitement distant',
          'Limites quotidiennes de taille et de conversions gratuites',
          'Risque réel de rétention des données sur des serveurs tiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Zéro octet envoyé : tout se passe dans votre RAM',
          'Vitesse instantanée sans dépendre de votre connexion',
          'Aucune limite de taille ni de nombre de fichiers',
          'Idéal pour les photos personnelles, médicales ou d\'entreprise',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment ça fonctionne techniquement',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Lorsque vous glissez un fichier WebP dans l\'outil, le navigateur le décode nativement via son moteur de rendu interne. Le fichier est ensuite dessiné sur un élément <strong>Canvas HTML5</strong> invisible. Comme le JPG ne supporte pas la transparence, l\'algorithme pré-remplit le canvas avec un fond blanc solide avant de composer l\'image par-dessus.',
  },
  {
    type: 'paragraph',
    html: 'L\'étape finale est l\'export : la méthode Canvas <code>toDataURL(\'image/jpeg\')</code> convertit les pixels du canevas en un flux d\'octets JPG compressé en haute qualité. Ce flux est livré directement au système de téléchargement du navigateur, sans aucune communication réseau. L\'ensemble du processus prend quelques millisecondes même pour des images de plusieurs mégapixels.',
  },
  {
    type: 'tip',
    title: 'Conseil de compatibilité',
    html: 'Lorsque vous partagez des photos avec des utilisateurs non techniques ou les envoyez par e-mail, utilisez toujours le JPG — compatibilité garantie à 100 % sur tout client de messagerie, système d\'exploitation ou appareil, sans exceptions ni mauvaises surprises.',
  },
  {
    type: 'title',
    text: 'Cas d\'usage et compatibilité',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Joindre des photos dans des e-mails depuis Outlook, Gmail ou Apple Mail.',
      'Insérer des images dans des documents Word, Excel ou présentations PowerPoint.',
      'Publier sur des plateformes de réseaux sociaux qui rejettent le WebP.',
      'Partager via WhatsApp ou applications de messagerie au support de formats limité.',
      'Imprimer des photographies dans des services qui n\'acceptent que le JPG ou PNG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP est l\'avenir de l\'image web, mais le JPG reste le roi de la compatibilité universelle. Cet outil vous permet de franchir ce pont en quelques secondes, en toute confidentialité et sans rien installer. Votre image ne quitte jamais votre appareil.',
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

export const content: WebpAJpgLocaleContent = {
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
