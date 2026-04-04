import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'convertisseur-png-en-ico';
const title = 'Convertir PNG en ICO en Ligne | Créez des Icônes 100% Réelles pour PC et Web';
const description =
  'Convertissez PNG en ICO avec de vrais en-têtes binaires. Transparences préservées. Sans téléchargement. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers PNG...',
  convertText: 'Pour les convertir en ICO instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'Votre convertisseur crée-t-il de simples fichiers PNG déguisés ou un vrai ICO ?',
    answer:
      'Nous créons un vrai ICO. Nous extrayons les données de votre PNG, créons l\'en-tête hexadécimal standardisé Microsoft (Header + Directory de 22 octets), redimensionnons au format carré idéal localement et assemblons un fichier final validé comme natif.',
  },
  {
    question: 'Les transparences sont-elles préservées lorsque mon logo est intégré dans l\'icône ?',
    answer:
      'Absolument oui. Notre moteur lit votre PNG à 32 bits, l\'ancrant en préservant précisément tous les trous transparents pour qu\'ils ressortent dans la barre d\'adresse universelle web (Favicon).',
  },
  {
    question: 'Le logo de mon entreprise est-il stocké sur vos serveurs ?',
    answer:
      'Ce service garantit zéro contact réseau externe. Le convertisseur fonctionne ancré dans votre Canvas HTML5 interne ; la fabrication de votre icône se déroule à cent pour cent dans votre machine en mémoire locale purement secrète.',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'Faites glisser les fichiers à transférer',
    text: 'Placez vos matrices photo (PNG carré 512x512 est idéal) sur le cadre local interactif.',
  },
  {
    name: 'Compilation automatique du bytecode',
    text: 'Vous verrez la barre s\'exécuter en interne en chargeant et fabriquant la matrice locale d\'en-têtes hexadécimaux ICO purifiés.',
  },
  {
    name: 'Accumulez ou fuyez avec votre ZIP',
    text: 'Téléchargez-les en cliquant sur une méga-compilation pour vos sites web (boutons ZIP globaux) ou téléchargez la miniature pour l\'exécutable Windows.',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Structure Technique du Format Microsoft ICO',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Standard Favicon - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertisseur PNG vers ICO en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    content:
      'Le format ICO (Icon) est le standard de Microsoft pour les icônes d\'applications Windows et les Favicons de pages web. Contrairement à simplement renommer un PNG en .ico, un vrai fichier ICO nécessite une structure binaire spécifique avec des en-têtes de 22 octets, un répertoire d\'images et des données d\'image encodées d\'une manière particulière.',
  },
  {
    type: 'paragraph',
    content:
      'Notre convertisseur crée des fichiers ICO authentiques. Le processus inclut : lire le PNG dans un canvas HTML5, créer l\'en-tête ICO binaire standard Microsoft avec le bon magic number (00 00 01 00), générer le répertoire d\'image et combiner le tout en un fichier .ico binaire valide. Le résultat est reconnu nativement par Windows, macOS et tous les navigateurs web.',
  },
  {
    type: 'tip',
    content:
      'Pour de meilleurs résultats en tant que Favicon, utilisez un PNG carré de 512x512 ou 256x256 pixels comme source. Notre convertisseur le redimensionnera à la taille ICO standard en préservant la proportion et la transparence.',
  },
  {
    type: 'stats',
    content:
      'Un fichier ICO standard occupe entre 1 Ko et 100 Ko selon la résolution et les couches incluses. Les Favicons ICO 16x16 et 32x32 sont les plus courants pour les sites web.',
  },
  {
    type: 'summary',
    content:
      'Convertissez PNG en ICO authentique avec de vrais en-têtes binaires. Gratuit, privé et avec support de transparence. Parfait pour les Favicons web et les icônes Windows.',
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

export const content: PngAIcoLocaleContent = {
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
