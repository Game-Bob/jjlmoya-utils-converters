import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'convertisseur-avif-en-png';
const title = 'Convertir AVIF en PNG en Ligne';
const description =
  'Convertissez des images AVIF en PNG en préservant la transparence. Sans téléchargement. Traitement local dans votre navigateur. Gratuit et illimité.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers AVIF...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi devrais-je convertir AVIF en PNG ?',
    answer:
      'AVIF est excellent pour la compression, mais sa compatibilité est limitée dans les anciens navigateurs et éditeurs classiques. En convertissant d\'AVIF en PNG, vous vous assurez que votre fichier conservera la transparence originale et toutes les applications pourront l\'ouvrir.',
  },
  {
    question: 'Les transparences du fichier AVIF original sont-elles maintenues ?',
    answer:
      'Oui. Contrairement au JPG qui supprime le fond transparent, lors de l\'exportation en PNG notre convertisseur garde le canal alpha intact.',
  },
  {
    question: 'Est-il vrai que mes images ne sont pas téléchargées sur internet ?',
    answer:
      'Absolument vrai. Notre convertisseur fonctionne à 100% localement sur votre appareil en utilisant le moteur JavaScript interne.',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'Ajoutez vos fichiers AVIF',
    text: 'Vous pouvez les faire glisser directement dans la zone délimitée ou utiliser le bouton pour parcourir les dossiers de votre ordinateur.',
  },
  {
    name: 'Traitement immédiat',
    text: 'Laissez le processeur HTML5 rendre l\'image ; le format passera automatiquement en PNG en microsecondes.',
  },
  {
    name: 'Obtenez vos PNG',
    text: 'Téléchargez les images converties une par une ou téléchargez un lot complet via le bouton ZIP.',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur AVIF vers PNG: De la Livraison Web à l\'Édition Professionnelle',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF est le format idéal pour servir des images sur le web - petit, efficace et de haute qualité. Mais quand vient le moment d\'éditer, retoucher ou travailler avec ces images dans des outils de design, AVIF devient un obstacle. Figma, Photoshop, Illustrator, Sketch et pratiquement tout outil de design professionnel attendent du PNG pour le travail avec la transparence et l\'édition sans perte. Convertir AVIF en PNG est le pont entre le monde de la livraison web et celui de la création.',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG: Livraison vs Édition',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF excelle comme format de livraison: fichiers petits, chargement rapide, support du canal alpha et qualité visuelle exceptionnelle. Cependant, son écosystème d\'outils est limité. La plupart des logiciels de design ne peuvent pas importer AVIF directement, ce qui perturbe les flux de travail créatifs. Essayer d\'ouvrir un AVIF dans Figma ou l\'importer comme calque dans Photoshop ne fonctionne tout simplement pas.',
  },
  {
    type: 'paragraph',
    html: 'PNG est le format natif du design numérique. Avec sa compression sans perte, son support complet du canal alpha et sa compatibilité universelle avec tous les outils créatifs, PNG est le format de travail par excellence. Quand vous devez redimensionner, retoucher, exporter vers plusieurs formats ou travailler en calques, PNG garantit que vous ne perdrez aucun détail ni pixel dans le processus.',
  },
  {
    type: 'title',
    text: 'Comparatif: Convertisseurs Cloud vs Notre Architecture Locale',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs Cloud',
        description: 'Outils qui téléversent vos fichiers AVIF vers un serveur distant pour les traiter.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos images de design transitent vers des serveurs tiers',
          'Temps d\'attente dû à la latence réseau',
          'Possible perte ou altération du canal alpha',
          'Limites de taille qui compliquent la conversion par lots',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct dans votre navigateur via Vanilla JS et l\'API Canvas.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Canal alpha préservé avec une fidélité parfaite',
          'Conversion instantanée sans transfert de données',
          'Aucune limite de fichiers, taille ou lots',
          'Confidentialité totale pour les actifs de design propriétaires',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Comment fonctionne la conversion technique avec les transparences',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Les navigateurs modernes décodent AVIF nativement grâce à leurs moteurs AV1 intégrés. Lors du chargement du fichier, le navigateur le décode en mémoire en préservant toutes les informations du canal alpha. L\'image décodée - y compris ses transparences - est dessinée sur un élément <code>Canvas</code> HTML5 avec le mode de composition correct pour préserver le canal alpha.',
  },
  {
    type: 'paragraph',
    html: 'Contrairement à l\'export en JPG (qui détruit les transparences en les remplissant de blanc), l\'export en PNG via <code>toBlob(\'image/png\')</code> préserve intégralement le canal alpha. Le résultat est un PNG compressé sans perte qui conserve chaque pixel, chaque semi-transparence et chaque détail de l\'AVIF original.',
  },
  {
    type: 'tip',
    title: 'L\'étape préalable obligatoire pour tout outil de design',
    html: 'Convertissez vos fichiers AVIF en PNG avant de les importer dans Figma, Photoshop, Illustrator ou tout outil de design. Ces applications ne lisent pas AVIF directement, mais PNG fonctionne nativement dans toutes, préservant parfaitement la transparence et la qualité.',
  },
  {
    type: 'title',
    text: 'Cas d\'utilisation: quand vous avez besoin de convertir AVIF en PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Importer dans Figma, Sketch, Adobe XD ou d\'autres outils de design UI.',
      'Éditer comme calque dans Photoshop, Affinity Photo ou GIMP en préservant la transparence.',
      'Utiliser comme source pour la génération d\'icônes ou de sprites.',
      'Envoyer à des clients ou collaborateurs travaillant avec des logiciels de design standard.',
      'Archiver des images avec transparence dans un format d\'édition sans perte.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: Le pont entre le web et le design',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF et PNG sont des compagnons parfaits dans un flux de travail moderne: AVIF pour la livraison web efficace, PNG pour l\'édition et la collaboration dans les outils de design. Avec notre convertisseur, le passage de l\'un à l\'autre est instantané, privé et préserve chaque détail - exactement ce dont vous avez besoin quand vos ressources visuelles comptent.',
  },
];


export const content: AvifAPngLocaleContent = {
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
