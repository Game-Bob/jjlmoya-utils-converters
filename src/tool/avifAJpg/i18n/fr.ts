import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convertisseur-avif-en-jpg';
const title = 'Convertir AVIF en JPG en Ligne';
const description =
  'Convertissez des images AVIF en JPG dans votre navigateur. Sans serveur. Traitement local 100% privé. Gratuit et illimité.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers AVIF...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente': 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir AVIF en JPG ?',
    answer:
      'Le format AVIF offre une compression supérieure, mais tous les programmes ou visionneuses ne le supportent pas. Le convertir en JPG garantit que l\'image pourra être vue sur 100% des appareils dans le monde.',
  },
  {
    question: 'Comment protégeons-nous vos images AVIF ?',
    answer:
      'Vos photos ne quittent jamais votre téléphone ou PC. L\'ensemble du processus de dessin et d\'encodage JPEG s\'exécute dans l\'environnement JavaScript de votre navigateur.',
  },
  {
    question: 'Perdrai-je de la qualité en passant d\'AVIF à JPG ?',
    answer:
      'Notre outil traite les pixels avec une qualité Canvas standard (0,9 à 0,95), rendant les changements à peine perceptibles.',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'Faites glisser les fichiers ou cliquez',
    text: 'Déplacez toutes les photos AVIF que vous souhaitez convertir dans la zone de traitement délimitée.',
  },
  {
    name: 'Transformation instantanée',
    text: 'Regardez en moins d\'une seconde comment l\'AVIF est réencodé en JPG, remplaçant tout canal alpha par un fond solide.',
  },
  {
    name: 'Sauvegardez ou téléchargez le ZIP',
    text: 'Téléchargez vos nouvelles images JPG individuellement ou en cliquant sur Tout télécharger si vous avez traité par lot.',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur AVIF vers JPG : Compatibilité Universelle pour Vos Images Modernes',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) est le format d\'image le plus efficace disponible aujourd\'hui. Développé par l\'Alliance for Open Media et basé sur le codec vidéo AV1, il offre une compression 50% meilleure que le JPG à la même qualité visuelle. Cependant, cet avantage technique a un prix : AVIF n\'est pas pris en charge par Photoshop, Lightroom, la visionneuse de photos Windows, ni par la plupart des outils d\'édition et de visualisation traditionnels. Convertir en JPG résout ce problème à la racine.',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG : Efficacité versus Compatibilité Universelle',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF compresse de manière extraordinaire : une photo haute résolution qui pèse 4 Mo en JPG peut peser à peine 2 Mo en AVIF à la même qualité perçue. Cela le rend parfait pour la livraison web où les performances de chargement sont critiques. Cependant, en dehors du navigateur, AVIF est pratiquement invisible : Windows Explorer ne le prévisualise pas, les appareils photo ne l\'exportent pas, et les designers ne l\'accueillent pas favorablement dans leurs flux de travail.',
  },
  {
    type: 'paragraph',
    html: 'Le JPG est le standard universel de la photographie numérique depuis plus de 30 ans. Il est pris en charge par 100% des appareils, systèmes d\'exploitation, applications bureautiques, réseaux sociaux, imprimantes et tout logiciel ayant jamais traité une image. Quand vous avez besoin de partager, imprimer, éditer ou envoyer par email, le JPG est la garantie que tout fonctionnera sans friction.',
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
        description: 'Outils qui téléversent vos fichiers AVIF vers un serveur distant pour les traiter.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Vos photos privées transitent sur internet vers des serveurs externes',
          'Temps d\'attente pour le téléversement et le téléchargement',
          'Limites de taille et conversions gratuites restreintes',
          'Risque de rétention d\'images sur des serveurs tiers',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct dans votre navigateur via Vanilla JS et l\'API Canvas.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Vos images ne quittent jamais votre appareil',
          'Conversion instantanée sans latence réseau',
          'Aucune limite de fichiers ni de taille',
          'Adapté aux images médicales, juridiques ou confidentielles',
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
    html: 'Les navigateurs modernes comme Chrome, Firefox et Edge incluent le support natif d\'AVIF grâce à leurs décodeurs AV1 intégrés. Lorsque vous chargez un fichier AVIF, le navigateur le décode en mémoire et le convertit en une représentation bitmap en RAM. Cette représentation est peinte sur un élément <code>Canvas</code> HTML5 invisible.',
  },
  {
    type: 'paragraph',
    html: 'Le Canvas exporte ensuite l\'image avec <code>toBlob(\'image/jpeg\', quality)</code>, appliquant la compression JPG standard. Comme le JPG ne supporte pas la transparence, tout canal alpha présent dans l\'AVIF est rempli avec un fond blanc avant l\'export. Le résultat est un fichier JPG de haute qualité prêt pour le téléchargement direct, sans qu\'un seul octet ne quitte votre navigateur.',
  },
  {
    type: 'tip',
    title: 'L\'équilibre parfait entre compression et compatibilité',
    html: 'AVIF est 50% plus petit que JPG à qualité égale — mais JPG a une compatibilité de 100% avec n\'importe quel logiciel. Si vous recevez des images AVIF du serveur et devez les éditer, les envoyer par email ou les ouvrir dans des outils de bureau, convertissez-les d\'abord en JPG.',
  },
  {
    type: 'title',
    text: 'Cas d\'utilisation : quand convertir AVIF en JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Édition dans Photoshop, Lightroom, GIMP ou tout autre logiciel de bureau.',
      'Partage d\'images avec des utilisateurs sur des appareils ou systèmes d\'exploitation anciens.',
      'Pièces jointes d\'emails pour garantir la visualisation dans n\'importe quel client de messagerie.',
      'Publication sur des plateformes qui n\'acceptent pas l\'AVIF comme format de téléversement.',
      'Impression : les services d\'impression professionnels travaillent nativement avec le JPG.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion : La compatibilité universelle en une seule étape',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF est l\'avenir de la compression d\'images, mais le présent exige de la compatibilité. Notre convertisseur vous permet d\'obtenir le meilleur des deux mondes : recevez et stockez des images en AVIF pour une efficacité maximale, et convertissez-les instantanément en JPG quand vous avez besoin qu\'elles fonctionnent dans n\'importe quel contexte. Le tout en toute confidentialité, gratuitement et sans limites.',
  },
];


export const content: AvifAJpgLocaleContent = {
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
