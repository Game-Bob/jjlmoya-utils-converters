import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'convertisseur-jpg-en-ico';
const title = 'Convertisseur JPG vers ICO';
const description =
  'Convertissez des photos JPG en ICO avec de vrais en-têtes binaires Microsoft. Recadrage carré automatique. Sans téléchargement. Gratuit et privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers JPG...',
  convertText: 'Pour les convertir en ICO instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: 'Le fichier ICO résultant est-il nativement compatible pour personnaliser les dossiers Windows ?',
    answer:
      'Oui, nous créons un fichier Microsoft Icon Format 100% authentique en insérant un en-tête binaire standardisé à bas niveau dans la matrice d\'image.',
  },
  {
    question: 'Que se passe-t-il avec la proportion si mon JPG original est une photo horizontale panoramique ?',
    answer:
      'Le standard ICO mondial rigide exige absolument une image parfaitement carrée. Notre moteur JS HTML5 centrera votre photo et rognera les excédents, garantissant un résultat équilibré.',
  },
  {
    question: 'Est-il dangereux de télécharger des logos JPG corporatifs ou personnels dans le convertisseur ?',
    answer:
      'Le moteur Canvas en JavaScript repose dans votre propre navigateur physique. Convertir des centaines de photos en ICO n\'envoie pas un seul mégaoctet vers n\'importe quel cloud.',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: 'Rassemblez les photos JPG originales',
    text: 'Trouvez et collectez les photos conventionnelles et déposez-les en les faisant glisser dans notre carré convivial.',
  },
  {
    name: 'Regardez la purification hexadécimale aveugle',
    text: 'Le réencodage insérera nativement et rapidement les métadonnées et en-têtes générant de manière asynchrone une icône pure stricte en mémoire.',
  },
  {
    name: 'Compilez plusieurs designs ZIP',
    text: 'Terminez le travail en téléchargeant tout massivement dans un package compact en quelques secondes.',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur JPG vers ICO: Créez des Favicons et Icônes Windows depuis vos Photos',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le format <strong>ICO</strong> est le standard de Microsoft pour les icônes d\'applications Windows et les favicons de sites web. Contrairement à un simple renommage d\'un JPG en .ico, un vrai fichier ICO nécessite une structure binaire spécifique avec des en-têtes de 22 octets et un répertoire d\'images intégré. Le <strong>JPG</strong> est le point de départ le plus courant pour créer ces icônes - un logo d\'entreprise, une photo de profil ou toute image que vous souhaitez transformer en identité visuelle de votre application ou site web.',
  },
  {
    type: 'title',
    text: 'JPG ou ICO ? Quand utiliser chaque format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>JPG</strong> est un format source, pas une destination pour les icônes. Parfait pour les photos et les bannières, mais incompatible avec les systèmes qui exigent des icônes: l\'Explorateur Windows, la barre de favoris du navigateur, les raccourcis bureau ou les manifestes d\'applications PWA. Un système d\'exploitation ou un navigateur cherchant une icône attend le format ICO - et s\'il ne le trouve pas, il affichera une icône générique ou un carré cassé.',
  },
  {
    type: 'paragraph',
    html: 'Le format <strong>ICO</strong> a été conçu pour contenir plusieurs résolutions dans un seul fichier: <strong>16×16</strong> pour la barre de favoris, <strong>32×32</strong> pour les raccourcis, <strong>48×48</strong> pour l\'explorateur de fichiers et <strong>256×256</strong> pour les écrans haute densité. Les navigateurs et systèmes d\'exploitation sélectionnent automatiquement la résolution appropriée selon le contexte d\'affichage - l\'utilisateur n\'a rien à gérer.',
  },
  {
    type: 'title',
    text: 'Comparatif: Conversion locale vs Cloud',
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
          'Vos logos d\'entreprise stockés sur des serveurs tiers',
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
          'Vitesse instantanée - zéro latence réseau',
          'Confidentialité totale - 0 octet envoyé à l\'extérieur',
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
    html: 'Le JPG est décodé et dessiné sur un <strong>Canvas HTML5</strong> en mémoire. Comme le format ICO exige une image carrée, le moteur détecte automatiquement si le JPG est rectangulaire et le recadre en centrant la partie la plus pertinente. Il construit ensuite l\'en-tête ICO standard de Microsoft avec le bon nombre magique (<code>00 00 01 00</code>), le répertoire d\'images et les données de pixels encodées. Le résultat est un vrai fichier binaire .ico - pas un PNG renommé.',
  },
  {
    type: 'paragraph',
    html: 'Comme le JPG ne possède pas de canal alfa, l\'ICO résultant n\'aura pas non plus de transparence - il aura un fond solide hérité de la photographie originale. Si vous avez besoin d\'un favicon avec fond transparent (par exemple pour s\'adapter aux barres de favoris sombres ou claires), le flux recommandé est: supprimez le fond dans un éditeur, sauvegardez en PNG, puis utilisez le convertisseur PNG vers ICO.',
  },
  {
    type: 'tip',
    title: 'Conseil: plusieurs résolutions dans un seul ICO',
    html: 'Les fichiers ICO peuvent regrouper <strong>plusieurs résolutions</strong> dans un seul fichier - le navigateur ou le système d\'exploitation choisit automatiquement la plus appropriée selon le contexte. Pour le meilleur résultat possible, utilisez un JPG carré d\'au moins <strong>256×256 pixels</strong> comme source: le convertisseur disposera ainsi de suffisamment d\'informations pour générer des tailles 16×16, 32×32 et 48×48 nettes, sans pixelisation.',
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
      'Favicon de site web: compatible avec tous les navigateurs y compris Internet Explorer.',
      'Personnalisation de dossiers et d\'icônes de bureau sous Windows 10/11.',
      'Icône de raccourci pour applications de bureau ou installateurs.',
      'Icône d\'application pour projets Electron ou applications PWA.',
      'Icônes pour systèmes de gestion de fichiers et explorateurs d\'entreprise.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Convertir un JPG en ICO est une étape techniquement indispensable pour tout projet web ou de bureau nécessitant une identité visuelle reconnaissable. Cet outil génère de vrais ICO avec la structure binaire correcte, en quelques secondes, sans envoyer votre logo sur aucun serveur externe. Le résultat fonctionne dans tous les navigateurs, dans l\'Explorateur Windows et dans tout système consommant le standard ICO de Microsoft.',
  },
];

export const content: JpgAIcoLocaleContent = {
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
