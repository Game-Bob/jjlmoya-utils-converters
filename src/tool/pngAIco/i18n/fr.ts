import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'convertisseur-png-en-ico';
const title = 'Convertir PNG en ICO en Ligne';
const description =
  'Convertissez PNG en ICO avec de vrais en-têtes binaires. Transparences préservées. Sans téléchargement. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers PNG...',
  convertText: 'Pour les convertir en ICO instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographique',
  faqTitle: 'Questions Fréquentes',
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

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur PNG vers ICO : La Meilleure Source pour des Favicons à Transparence Parfaite',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>PNG avec transparence</strong> est le matériau de départ idéal pour créer des icônes ICO professionnelles. Contrairement au JPG (qui n\'a pas de canal alpha) ou aux formats avec perte, le PNG vous offre exactement ce dont le format ICO a besoin : des pixels nets, des bords propres et un canal alpha 32 bits qui permet à l\'icône de s\'intégrer parfaitement sur n\'importe quel fond — que ce soit la barre de favoris blanche de Safari, la barre sombre de Firefox ou le bureau Windows 11.',
  },
  {
    type: 'title',
    text: 'PNG ou ICO ? Quand utiliser chaque format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>PNG</strong> est le format de travail : c\'est là que vous concevez votre logo, exportez depuis Figma ou Illustrator, et sauvegardez vos versions éditables. Sa transparence, sa précision de pixels et sa compression sans perte le rendent imbattable pour le processus de design. Mais les navigateurs, systèmes d\'exploitation et applications Windows cherchant un favicon ou une icône d\'application n\'acceptent pas directement le PNG — ils ont besoin de l\'ICO.',
  },
  {
    type: 'paragraph',
    html: 'L\'<strong>ICO</strong> est le format de distribution pour les icônes dans les environnements Microsoft und le web. Il contient une structure binaire spécifique permettant de regrouper plusieurs résolutions dans un seul fichier : le navigateur lit le répertoire interne du fichier ICO und sélectionne automatiquement <strong>16×16</strong> pour l\'onglet du navigateur, <strong>32×32</strong> pour les raccourcis, <strong>48×48</strong> pour l\'explorateur de fichiers und <strong>256×256</strong> pour les écrans Retina und 4K. Partir d\'un PNG transparent garantit que toutes ces résolutions auront des bords parfaits sans liseré blanc.',
  },
  {
    type: 'title',
    text: 'Comparatif : Conversion locale vs Cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui envoient vos fichiers vers un serveur distant.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latence réseau à l\'envoi und au téléchargement',
          'Votre logo d\'entreprise stocké sur des serveurs tiers',
          'Limites de taille und quota quotidien de conversions',
          'Publicités intrusives und traceurs tiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Vitesse instantanée — zéro latence réseau',
          'Confidentialité totale — 0 octet envoyé à l\'extérieur',
          'Aucune limite de taille ni de nombre de fichiers',
          'Interface épurée, sans publicités ni traçage',
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
    html: 'Le PNG est décodé dans un <strong>Canvas HTML5</strong> en mémoire avec une prise en charge complète du canal alpha 32 bits. Le moteur construit l\'en-tête ICO standard de Microsoft avec le bon nombre magique (<code>00 00 01 00</code>), le répertoire d\'images avec les dimensions und le décalage des données, und les données de pixels tout en maintenant les informations de transparence. Le résultat est un vrai fichier binaire .ico reconnu nativement par Windows, macOS und tous les navigateurs.',
  },
  {
    type: 'paragraph',
    html: 'La transparence du PNG est entièrement préservée dans l\'ICO résultant — les pixels transparents restent transparents, les pixels semi-transparents conservent leur valeur alpha exacte und les pixels opaques gardent leur couleur d\'origine. C\'est crucial pour les logos sur des fonds variables : votre favicon s\'affichera correctement en mode clair, mode sombre und dans toute combinaison de couleurs de l\'interface du navigateur.',
  },
  {
    type: 'tip',
    title: 'Conseil : utilisez un PNG de 512×512 comme source',
    html: 'Pour le meilleur résultat possible, utilisez un <strong>PNG carré de 512×512 pixels</strong> comme image source. Cette résolution donne au convertisseur suffisamment d\'informations pour générer toutes les tailles ICO standard avec netteté — du favicon 16×16 jusqu\'au 256×256 pour les écrans haute densité — sans pixelisation ni perte de détail sur les bords. Plus le PNG source est grand, meilleurs seront les petites icônes résultantes.',
  },
  {
    type: 'title',
    text: 'Cas d\'usage und compatibilité',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Favicon transparent pour sites web : fonctionne dans Chrome, Firefox, Safari, Edge e Internet Explorer.',
      'Icône d\'application PWA : le manifest.json référence l\'ICO pour l\'installation sur bureau.',
      'Personnalisation de dossiers Windows 10/11 avec logo d\'entreprise sans fond blanc.',
      'Icône de raccourci pour applications de bureau, installateurs und exécutables.',
      'Icône d\'extension navigateur pour les extensions Chrome und Firefox.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le PNG avec transparence est sans conteste le meilleur point de départ pour créer des icônes ICO de qualité professionnelle. Avec cet outil, la conversion est instantanée, les canaux alpha sont entièrement préservés und le fichier résultant est un vrai ICO avec la structure binaire correcte. Sans envoyer votre logo sur aucun serveur, sans filigrane, sans limites — und avec une transparence parfaite à toutes les tailles.',
  },
];

export const content: PngAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'fr',
    faq,
    howTo,
  }),
};
