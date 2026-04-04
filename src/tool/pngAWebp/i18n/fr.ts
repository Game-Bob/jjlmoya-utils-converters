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
  faqTitle: 'Questions Fréquentes',
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
    text: 'Convertisseur PNG vers WebP : Transparence et Compression Moderne pour le Web',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>PNG</strong> est le format de référence pour les images web avec transparence depuis des décennies — logos, icônes, éléments d\'interface, images de produits sur fond découpé. Son problème est le poids : la compression sans perte qui garantit sa qualité génère également des fichiers notablement volumineux. Le <strong>WebP</strong> de Google résout cette contradiction : il supporte le canal alpha (transparence) <em>et</em> compresse bien mieux que le PNG, faisant du passage de PNG à WebP l\'optimisation parfaite qui ne sacrifie rien.',
  },
  {
    type: 'title',
    text: 'PNG ou WebP ? Quand utiliser chaque format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>PNG</strong> reste le bon format lorsque la compatibilité est critique : outils de design comme Photoshop ou Figma, flux d\'impression, applications de bureau ancienne ou tout contexte où le support WebP n\'est pas garanti. C\'est aussi le format idéal pour sauvegarder les calques de travail dans les pipelines d\'édition, car sa compression sans perte préserve chaque pixel. Le coût : des fichiers qui peuvent peser 3 à 8 fois plus que leur équivalent WebP.',
  },
  {
    type: 'paragraph',
    html: 'Le <strong>WebP</strong> est le remplacement naturel du PNG pour tout le contenu web moderne. Chrome, Firefox, Safari et Edge le supportent nativement. Une image WebP sans perte est 26 % plus petite que le PNG équivalent ; en mode avec perte, elle peut être jusqu\'à 40 % plus petite avec une qualité visuelle pratiquement indistinguible. Et, point crucial pour le design web : <strong>WebP préserve la transparence alpha</strong> exactement comme le PNG, sans aucun compromis visuel.',
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
          'Latence réseau à l\'envoi et au téléchargement',
          'Vos logos et images stockés sur des serveurs tiers',
          'Limites de taille et quota quotidien de conversions',
          'Publicités intrusives et traceurs tiers',
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
    html: 'Le PNG est chargé localement et décodé dans un <strong>Canvas HTML5</strong> en mémoire. L\'API Canvas préserve le canal alpha du PNG original — tous les pixels transparents et semi-transparents sont maintenus intacts dans le tampon de pixels RGBA. Le canvas est ensuite exporté en appelant <code>toDataURL(\'image/webp\')</code>, qui applique le codec WebP du navigateur (basé sur libwebp de Google) pour générer un fichier plus compact sans altérer les données de transparence.',
  },
  {
    type: 'paragraph',
    html: 'WebP utilise deux modes de compression : le mode sans perte (<em>lossless</em>) pour les images où chaque pixel doit être exactement fidèle à l\'original, et le mode avec perte (<em>lossy</em>) pour les photos et éléments où de petites différences sont imperceptibles. Le mode sans perte produit des fichiers 26 % plus petits que le PNG ; le mode avec perte peut atteindre des réductions jusqu\'à 40 % par rapport au PNG tout en maintenant une excellente qualité visuelle.',
  },
  {
    type: 'tip',
    title: 'Conseil : WebP surpasse à la fois PNG et JPG sur le web',
    html: 'WebP en mode sans perte est plus petit que le PNG. WebP en mode avec perte est plus petit que le JPG. Cela fait de WebP le <strong>seul format qui remplace les deux</strong> dans le contexte web. Convertissez vos PNG transparents en WebP avant de les mettre en ligne : Google PageSpeed Insights le détecte et le valorise positivement dans les audits "Servir les images dans des formats modernes".',
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
      'Logos et icônes avec fond transparent pour sites web et applications.',
      'Images de produits avec fond découpé dans les boutiques e-commerce.',
      'Sprites CSS et éléments d\'interface avec transparence alpha.',
      'Illustrations rasterisées et graphiques vectoriels pour landing pages.',
      'Miniatures d\'articles avec fond transparent dans les blogs et portails d\'actualité.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le passage de PNG à WebP est l\'optimisation d\'images web la plus complète disponible : vous obtenez des fichiers plus légers, vous préservez la transparence et vous améliorez les métriques Core Web Vitals sans rien changer à votre design visuel. Cet outil le fait instantanément, gratuitement et de manière totalement privée — vos images sont traitées dans votre navigateur et ne voyagent jamais vers aucun serveur externe.',
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
