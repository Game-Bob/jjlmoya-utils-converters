import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'convertisseur-jpg-en-ico';
const title = 'Convertisseur JPG vers ICO | Créez des Icônes Officielles pour Windows et Web';
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

const bibliography: JpgAIcoLocaleContent['bibliography'] = [
  {
    name: 'Structure Iconographique ICO et Utilisation Système',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Standards JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    content: 'Convertisseur JPG vers ICO en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    content:
      'Convertir JPG en ICO est nécessaire lorsque vous voulez créer des icônes personnalisées pour Windows, des Favicons pour des sites web ou des identificateurs visuels pour des applications. Le format ICO de Microsoft est le standard pour tous ces usages et notre convertisseur génère de vrais fichiers ICO avec la structure binaire correcte.',
  },
  {
    type: 'paragraph',
    content:
      'Une considération technique importante lors de la conversion JPG en ICO est la proportion de l\'image. Le format ICO nécessite des images carrées. Si votre JPG original est rectangulaire, notre convertisseur le centrera et le recadrera automatiquement pour s\'adapter à un format carré, préservant la partie centrale de l\'image.',
  },
  {
    type: 'tip',
    content:
      'Pour des icônes de meilleure qualité, utilisez toujours un JPG carré haute résolution (au moins 256x256) comme source. Le convertisseur redimensionnera à la taille ICO standard en maintenant la netteté maximale possible.',
  },
  {
    type: 'stats',
    content:
      'Les fichiers ICO pour Windows peuvent contenir plusieurs résolutions (16x16, 32x32, 48x48, 256x256) dans un même fichier. Notre convertisseur génère l\'ICO à la résolution optimale selon votre image source.',
  },
  {
    type: 'summary',
    content:
      'Convertissez JPG en ICO authentique avec de vrais en-têtes binaires. Recadrage automatique pour format carré. Gratuit, privé et compatible avec Windows et tous les navigateurs.',
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

export const content: JpgAIcoLocaleContent = {
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
