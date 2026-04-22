import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'convertisseur-jpg-en-png';
const title = 'Convertir JPG en PNG en Ligne et Gratuitement';
const description =
  'Convertissez des images JPG en PNG dans votre navigateur sans télécharger de fichiers. Conversion sans perte, gratuite et totalement privée.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers JPG...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'Quand devrais-je utiliser JPG vers PNG ?',
    answer:
      'Chaque fois que vous allez éditer du texte ou des logos dans une photographie. Si vous sauvegardez un JPG plusieurs fois, il se dégrade. Le PNG fige la compression.',
  },
  {
    question: 'Le fichier PNG aura-t-il un fond transparent immédiatement ?',
    answer:
      'Non. Le JPG original était plat et sans ce type de canal structurel. Le PNG résultant préparera ce conteneur, puis vous devrez isoler l\'élément à l\'aide de Photoshop ou d\'un autre éditeur.',
  },
  {
    question: 'Ce site web a-t-il des limites de trafic ?',
    answer:
      'Grâce aux technologies Edge sans dépendances cloud, votre conversion n\'a aucune limite car elle utilise entièrement votre ordinateur ou mobile.',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'Glisser JPG dans le panneau',
    text: 'Téléchargez des images JPG statiques en utilisant la souris tactile ou le sélecteur de fichiers de l\'ordinateur.',
  },
  {
    name: 'Exécution sans perte',
    text: 'Le logiciel Vanilla pousse les bits de trame vers un wrapper natif sans perte de la famille PNG.',
  },
  {
    name: 'Terminer la session',
    text: 'Cliquez sur le panneau et votre navigateur déposera les actifs web téléchargés dans vos dossiers utilisateur.',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur JPG vers PNG : Éditez sans perte de qualité et ajoutez de la transparence',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>JPG</strong> est imbattable pour les photos de caméra, mais il a un talon d\'Achille : chaque fois que vous sauvegardez le fichier, il applique à nouveau sa compression avec perte, dégradant progressivement les bords et les dégradés. Le <strong>PNG</strong> utilise une compression sans perte — une fois sauvegardé, les pixels sont immuables. Convertir un JPG en PNG est l\'étape essentielle lorsque vous devez préparer une image pour une édition intensive, ajouter un fond transparent ou l\'intégrer dans un flux de travail de design nécessitant plusieurs sauvegardes.',
  },
  {
    type: 'title',
    text: 'JPG ou PNG ? Quand utiliser chaque format',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Le <strong>JPG</strong> est le roi de la photographie : fichiers légers, compatibles avec tout. Mais ses artefacts de compression s\'accumulent à chaque édition et re-sauvegarde. Si vous devez recadrer, retoucher ou ajouter du texte à une image à plusieurs reprises, partir d\'un JPG signifie introduire de la dégradation à chaque cycle. Le JPG est également dépourvu de canal alpha : il ne peut pas avoir de fonds transparents, ce qui l\'exclut pour les logos, icônes et éléments d\'interface.',
  },
  {
    type: 'paragraph',
    html: 'Le <strong>PNG</strong> est le bon choix pour les logos d\'entreprise, les captures d\'écran avec du texte net, les éléments d\'interface, les images de produits sur fond blanc à découper, ou tout actif graphique qui sera édité plus d\'une fois. La compression sans perte garantit que les bords du texte restent parfaitement définis et que les couleurs unies demeurent pures — sans bruit JPEG.',
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
          'Vos images sont stockées sur des serveurs tiers',
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
    html: 'Le processus est entièrement local : le navigateur crée un <strong>Blob</strong> à partir du JPG sélectionné et le dessine sur un <strong>Canvas HTML5</strong> en mémoire. Une fois rendu, il appelle <code>toDataURL(\'image/png\')</code> — le codec PNG intégré au navigateur ré-encode chaque pixel sans appliquer aucune nouvelle compression avec perte. Le résultat est un PNG qui préserve fidèlement l\'état actuel du JPG : ni meilleur ni moins bon, simplement figé.',
  },
  {
    type: 'paragraph',
    html: 'Le PNG résultant utilise la compression sans perte DEFLATE, la même qu\'emploient des outils professionnels comme Photoshop ou GIMP. Sa taille sera plus grande que le JPG original — généralement 2 à 5 fois — car il stocke tous les pixels sans en éliminer. C\'est le prix à payer pour la fidélité et l\'éditabilité infinie.',
  },
  {
    type: 'tip',
    title: 'Important : le PNG ne récupère pas la qualité JPEG',
    html: 'Convertir un JPG en PNG <strong>ne récupère pas la qualité perdue</strong> lors de la compression JPEG originale. Si votre JPG présentait déjà des artefacts de blocs ou du bruit de couleur, le PNG les conservera intacts — il empêche simplement d\'en ajouter davantage. Considérez la conversion comme le fait de "figer" l\'état actuel de l\'image pour que les éditions futures ne la dégradent pas davantage.',
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
      'Logos et éléments de marque nécessitant un fond transparent après découpe.',
      'Captures d\'écran avec texte qui seront éditées et re-sauvegardées plusieurs fois.',
      'Images de produits pour l\'e-commerce nécessitant un fond blanc propre et découpable.',
      'Ressources graphiques pour des présentations PowerPoint ou Google Slides.',
      'Actifs d\'interface pour applications web et mobiles où la netteté des bords est critique.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'La conversion de JPG en PNG est la première étape de tout flux de travail de design sérieux. Elle ne transforme pas la qualité originale, mais protège chaque pixel des éditions futures. Avec cet outil, le processus se déroule instantanément et de manière totalement privée — vos images professionnelles ou personnelles ne quittent à aucun moment votre appareil.',
  },
];


export const content: JpgAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'fr', faq, howTo }),
};
