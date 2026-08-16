import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'convertisseur-png-en-jpg';
const title = 'Convertir PNG en JPG en Ligne';
const description =
  'Convertissez des images PNG en JPG directement dans votre navigateur. Sans téléchargement vers des serveurs. Rapide, gratuit et totalement privé.';

const ui: ImageConverterUI = {
  dragText: 'Faites glisser des fichiers PNG...',
  convertText: 'Pour les convertir en JPG instantanément',
  selectFiles: 'Sélectionner des fichiers',
  processedFiles: 'Fichiers traités',
  downloadAll: 'Tout télécharger (.zip)',
  pending: 'En attente',
  bibliographyTitle: 'Références Bibliographiques',
  faqTitle: 'Questions Fréquentes',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'Pourquoi choisir notre convertisseur local PNG vers JPG ?',
    answer:
      'Contrairement aux services classiques, cet outil traite les fichiers entièrement dans le navigateur. Vos images ne touchent jamais un disque distant: vous gardez le contrôle et la confidentialité de vos données.',
  },
  {
    question: 'JPG ou PNG: quel format choisir ?',
    answer:
      'Le PNG convient aux logos et aux éléments transparents. Le JPG est préférable pour les photos et les bannières web, car ses fichiers sont bien plus légers et accélèrent le chargement des pages.',
  },
  {
    question: 'Comment convertir une image sans rien envoyer ?',
    answer:
      "Nous utilisons le Canvas HTML5. Le navigateur recrée l'image dans une zone virtuelle invisible, remplit la transparence en blanc et produit directement les octets JPEG à télécharger.",
  },
  {
    question: 'Est-ce sûr pour des documents confidentiels ?',
    answer:
      "Oui. Pour la banque, la santé ou le droit, il est préférable de ne pas envoyer les images à un service externe: le traitement reste dans la RAM et s'arrête à la fermeture de l'onglet.",
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'Glisser les fichiers PNG',
    text: 'Envoyez vos images PNG statiques dans la zone de traitement local en les déposant là.',
  },
  {
    name: 'Re-rendu blanc',
    text: 'Chaque photo adapte automatiquement sa transparence avec une couche blanche sous-jacente pour la rendre compatible avec l\'environnement JPG.',
  },
  {
    name: 'Export direct',
    text: 'Cliquez sur les icônes de téléchargement vertes et sauvegardez vos nouveaux fichiers JPG.',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'Convertisseur PNG vers JPG: guide pratique d\'optimisation des images',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Dans le design numérique et le développement web, la rapidité compte. Le PNG conserve la transparence et la qualité sans perte, mais produit parfois des fichiers lourds. Pour des pages rapides et des pièces jointes légères, le JPG est souvent plus adapté.',
  },
  {
    type: 'title',
    text: 'JPG ou PNG: lequel choisir ?',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "Aucun format n'est meilleur dans tous les cas. Le PNG convient aux interfaces, logos et fonds transparents, mais sa compression sans perte peut donner des fichiers beaucoup plus volumineux.",
  },
  {
    type: 'paragraph',
    html: "Le JPG supprime les détails peu visibles et produit des images légères. Il convient aux photos, bannières et réseaux sociaux: une légère perte en échange d'un chargement plus rapide.",
  },
  {
    type: 'title',
    text: 'Comparaison technique: traitement local et cloud',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Convertisseurs cloud',
        description: 'Services classiques qui envoient vos photos vers un serveur distant.',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'Latence réseau (envoi/téléchargement)',
          'Risque de fuite de données privées',
          'Limite de taille par fichier',
          'Publicités et traceurs',
        ],
      },
      {
        title: 'Notre architecture locale',
        description: 'Traitement direct sur votre appareil avec du JavaScript natif.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'Vitesse immédiate sans réseau',
          'Confidentialité garantie (zéro octet envoyé)',
          'Aucune limite de Mo par fichier',
          'Interface professionnelle et claire',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'Fonctionnement de la conversion technique',
    level: 3,
  },
  {
    type: 'paragraph',
    html: "La conversion sans serveur s'appuie sur les API modernes du navigateur. Le fichier devient un Blob temporaire en RAM, puis il est dessiné dans un Canvas HTML5 invisible.",
  },
  {
    type: 'paragraph',
    html: "Le JPG ne gère pas la transparence: les zones transparentes sont donc remplies de blanc avant le rendu. Le Canvas génère ensuite le flux JPEG enregistré directement sur l'appareil.",
  },
  {
    type: 'tip',
    title: 'Conseil SEO: le poids idéal',
    html: 'Une image plus légère peut améliorer le LCP et les indicateurs PageSpeed. Réduire un PNG volumineux en JPG est particulièrement utile pour les en-têtes et les pages riches en images.',
  },
  {
    type: 'title',
    text: 'Sécurité pour les entreprises et les professionnels',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Pour la banque, la santé ou le droit, envoyer des fichiers à un service externe peut présenter un risque. Ici le traitement reste dans la RAM du navigateur, sans transfert vers un cloud.',
  },
  {
    type: 'title',
    text: 'Compatibilité du résultat',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Visionneuses Windows, macOS et appareils mobiles.',
      'Réseaux sociaux (Instagram, LinkedIn, etc.).',
      'Outils bureautiques (Word, PowerPoint).',
      'Gestionnaires de contenu (WordPress, Shopify).',
    ],
  },
  {
    type: 'title',
    text: 'Conclusion: optimisez avec méthode',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Ce convertisseur associe rapidité et confidentialité. Développeur ou particulier, vous pouvez alléger vos images sans remettre vos fichiers à un service tiers.',
  },
];


export const content: PngAJpgLocaleContent = {
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
