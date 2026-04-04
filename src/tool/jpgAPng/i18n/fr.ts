import type { WithContext, SoftwareApplication } from 'schema-dts';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'convertisseur-jpg-en-png';
const title = 'Convertir JPG en PNG en Ligne et Gratuitement - Privé';
const description =
  'Convertissez des images JPG en PNG dans votre navigateur sans télécharger de fichiers. Conversion sans perte, gratuite et totalement privée.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers JPG...',
  convertText: 'Pour les convertir en PNG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
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

const bibliography: JpgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C PNG Graphics',
    url: 'https://www.w3.org/Graphics/PNG/',
  },
  {
    name: 'Comprendre la compression d\'image numérique',
    url: 'https://en.wikipedia.org/wiki/Image_compression',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur JPG vers PNG en Ligne Gratuit',
  },
  {
    type: 'paragraph',
    html:
      'La conversion de JPG en PNG est une opération fréquente dans le flux de travail des designers, développeurs web et éditeurs de contenu. Le format JPG, bien qu\'efficace pour les photographies, applique un algorithme de compression avec perte qui introduit des artefacts visuels chaque fois que le fichier est resauvegardé.',
  },
  {
    type: 'paragraph',
    html:
      'L\'une des principales raisons de convertir de JPG en PNG est de préparer une image pour son édition. Lorsque vous travaillez avec du texte superposé, des logos ou des éléments graphiques précis, le PNG empêche l\'accumulation d\'artefacts JPEG qui rendraient les bords du texte flous ou les couleurs plates moins définies.',
  },
  {
    type: 'tip',
    html:
      'N\'oubliez pas que la conversion d\'un JPG en PNG ne récupère pas la qualité perdue par la compression JPEG originale. Le PNG fige simplement l\'image dans son état actuel sans introduire de nouvelles pertes.',
  },
  {
    type: 'paragraph',
    html:
      'Les fichiers PNG sont généralement 2 à 5 fois plus grands que leurs équivalents JPG. Cette différence de taille est le prix de la compression sans perte et du support de la transparence.',
  },
  {
    type: 'paragraph',
    html:
      'Le processus de conversion est totalement privé. Notre convertisseur n\'envoie aucune donnée à des serveurs externes ; tout se passe localement sur votre appareil. Vous pouvez convertir des images d\'entreprise, des photographies personnelles ou tout matériel sensible sans vous soucier de la confidentialité.',
  },
  {
    type: 'paragraph',
    html:
      'Convertissez JPG en PNG gratuitement, en toute sécurité et sans limites directement dans votre navigateur. Idéal pour préparer des images à l\'édition ou pour préserver la qualité dans des flux de travail nécessitant plusieurs sauvegardes.',
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

export const content: JpgAPngLocaleContent = {
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
