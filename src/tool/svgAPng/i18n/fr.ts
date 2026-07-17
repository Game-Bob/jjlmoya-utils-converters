import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'convertisseur-svg-en-png';
const title = 'Convertir SVG en PNG en Ligne et Gratuitement';
const description =
  'Convertissez des fichiers SVG vectoriels en PNG dans votre navigateur. Sortie HD à double échelle. Préserve la transparence. Gratuit et 100% privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers SVG...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'Pourquoi convertir des fichiers SVG en PNG ?',
    answer:
      'SVG est vectoriel et idéal pour les logos, mais parfois vous avez besoin du format PNG rastérisé pour l\'utiliser dans des applications qui ne supportent pas les vecteurs, ou pour le partager sur les réseaux sociaux.',
  },
  {
    question: 'Puis-je choisir la taille de sortie ?',
    answer:
      'Nous doublons actuellement l\'échelle du SVG source pour que la sortie PNG soit nette et adaptée aux écrans Retina ou 4K.',
  },
  {
    question: 'Les transparences SVG sont-elles maintenues ?',
    answer:
      'Oui, le PNG résultant préserve le canal alpha du SVG original, maintenant tous les fonds transparents intacts.',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'Insérez vos fichiers SVG',
    text: 'Déposez vos fichiers SVG ou faites-les glisser directement dans la zone supérieure.',
  },
  {
    name: 'Génération du PNG HD',
    text: 'En quelques millisecondes, notre moteur local recrée chaque vecteur en une couche de pixels HD au format PNG transparent.',
  },
  {
    name: 'Téléchargez les fichiers',
    text: 'Sauvegardez les PNG générés individuellement ou dans un package ZIP.',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur SVG vers PNG: Du Vecteur Infini au Raster Universel',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) est le choix parfait pour le design web: infiniment évolutif, léger et éditable avec n\'importe quel éditeur de code. Mais lorsque vous devez utiliser ce logo ou cette icône dans une application mobile, le partager sur les réseaux sociaux ou l\'insérer dans une présentation PowerPoint, vous vous heurtez à un obstacle: la plupart de ces plateformes ne supportent pas le SVG. Le format <strong>PNG</strong> est la solution universelle: rastérisé, avec canal alpha, compatible dans absolument tous les contextes.',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: Vecteurs pour le Web, Raster pour le Monde',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG stocke l\'image sous forme d\'instructions mathématiques: une courbe de Bézier, un dégradé, un polygone. Cela signifie que le même fichier est parfaitement net à 16px comme à 16 000px. C\'est le format idéal pour votre code web, les animations CSS et tout élément devant s\'adapter à différentes résolutions d\'écran sans perte de qualité.',
  },
  {
    type: 'paragraph',
    html: 'PNG stocke l\'image comme une grille de pixels avec des informations de couleur et de transparence pour chacun. C\'est un format <strong>sans perte</strong>, ce qui signifie que la qualité est préservée intégralement. Une fois qu\'un SVG est rastérisé en PNG, la résolution est fixée. C\'est pourquoi le choix de la taille d\'export est crucial: notre outil effectue le rendu à double échelle (2x) pour garantir la netteté sur les écrans Retina et 4K.',
  },
  {
    type: 'title',
    text: 'Comparatif: Conversion Locale vs Cloud',
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
          'Votre code SVG transite vers des serveurs externes',
          'Rendu distant avec qualité inconsistante',
          'Temps d\'attente pour l\'upload et le traitement',
          'Limitations sur la taille des fichiers SVG',
        ],
      },
      {
        title: 'Notre Architecture Locale',
        description: 'Traitement direct sur votre matériel via la technologie Vanilla JS.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Votre SVG ne quitte jamais votre navigateur',
          'Rendu par le moteur natif du navigateur, fidélité maximale',
          'PNG en résolution 2x pour les écrans haute densité',
          'Transparences préservées avec canal alpha complet',
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
    html: 'Le processus commence par le chargement du fichier SVG dans un élément JavaScript <strong>Image</strong>. Une fois que le moteur du navigateur a analysé et rendu le XML vectoriel, l\'image résultante est dessinée sur un <strong>Canvas HTML5</strong> dont les dimensions sont le double de la taille SVG originale (échelle 2x). Cela produit un PNG avec deux fois plus de pixels par dimension, idéal pour les écrans haute résolution.',
  },
  {
    type: 'paragraph',
    html: 'Contrairement à la conversion en JPG, lors de l\'export en PNG le canvas conserve le canal alpha complet: les zones transparentes du SVG original deviennent des pixels entièrement transparents dans le PNG résultant - sans remplissage de fond blanc. L\'export utilise la méthode <code>toDataURL(\'image/png\')</code> avec compression sans perte.',
  },
  {
    type: 'tip',
    title: 'Conseil avant de rastériser',
    html: 'Choisissez soigneusement la taille d\'export du PNG - rastériser un SVG est un processus à sens unique: vous ne pourrez pas récupérer les vecteurs depuis le PNG résultant. Conservez toujours le SVG original comme source maîtresse, et générez les PNG à la résolution la plus élevée dont vous pourriez avoir besoin.',
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
      'Exporter des logos vectoriels pour des présentations PowerPoint ou Google Slides.',
      'Créer des icônes PNG pour les applications iOS, Android ou Progressive Web Apps.',
      'Partager des designs SVG sur Instagram, LinkedIn ou d\'autres réseaux sociaux.',
      'Insérer des illustrations vectorielles dans des documents Word ou PDF.',
      'Générer des miniatures PNG de graphiques SVG pour la prévisualisation CMS.',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG est le langage des vecteurs ; PNG est le passeport vers le reste du monde numérique. Cet outil rastérise vos SVG en résolution 2x avec les transparences intactes, directement dans votre navigateur, sans qu\'un seul octet de votre design ne transite vers un serveur externe.',
  },
];


export const content: SvgAPngLocaleContent = {
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
