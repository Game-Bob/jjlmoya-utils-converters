import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'convertisseurs-image',
  title: 'Convertisseurs d\'Image en Ligne',
  description: 'Outils gratuits pour convertir des images entre les formats PNG, JPG, WebP, SVG, AVIF, GIF, BMP et ICO. Tout est traité localement dans votre navigateur sans rien télécharger sur internet.',
  seo: [
    {
      type: 'summary',
      title: 'Pourquoi utiliser nos convertisseurs',
      items: [
        'Conversion 100% locale: vos images ne quittent jamais votre appareil.',
        'Support de 21 combinaisons de formats: PNG, JPG, WebP, SVG, AVIF, GIF, BMP et ICO.',
        'Traitement par lots avec téléchargement ZIP.',
        'Sans inscription, sans limites, sans publicité intrusive.',
      ],
    },
    {
      type: 'title',
      text: 'Conversion d\'Images: Guide Complet des Formats',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le choix du format d\'image approprié a un impact direct sur les performances web, la compatibilité avec les appareils et la qualité visuelle perçue. Nos <strong>convertisseurs d\'image en ligne</strong> couvrent les routes de conversion les plus demandées par les designers, développeurs web et photographes, sans dépendre de serveurs externes qui pourraient compromettre la confidentialité de vos fichiers.',
    },
    {
      type: 'title',
      text: 'PNG, JPG et WebP: Les Trois Piliers du Web Moderne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>format PNG</strong> se distingue par sa compression sans perte et son support de la transparence (canal alpha), étant le standard pour les logos, icônes et graphiques aux bords nets. Le <strong>format JPG</strong> offre une compatibilité universelle maximale et des tailles réduites pour les photos, mais sacrifie la qualité à chaque sauvegarde. Le <strong>format WebP</strong>, développé par Google, combine le meilleur des deux: une compression 30-40% supérieure à PNG/JPG avec support de la transparence et des animations.',
    },
    {
      type: 'table',
      headers: ['Format', 'Transparence', 'Compression', 'Idéal pour'],
      rows: [
        ['PNG', 'Oui', 'Sans perte', 'Logos, graphiques, captures'],
        ['JPG', 'Non', 'Avec perte', 'Photos, grandes images'],
        ['WebP', 'Oui', 'Sans/Avec perte', 'Web moderne, performance'],
        ['SVG', 'Oui', 'Vectoriel', 'Icônes scalables, animations'],
        ['AVIF', 'Oui', 'Supérieure', 'Web nouvelle génération'],
        ['ICO', 'Oui', 'Bitmap', 'Favicons, icônes Windows'],
      ],
    },
    {
      type: 'title',
      text: 'Formats Nouvelle Génération: AVIF et WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>format AVIF</strong> (AV1 Image File Format) est le successeur technologique du WebP, offrant jusqu\'à 50% de poids en moins que le JPG à qualité subjective égale. Bien que son adoption croisse rapidement, la compatibilité limitée sur les systèmes anciens rend souvent nécessaire la conversion d\'AVIF vers des formats plus établis comme JPG, PNG ou WebP.',
    },
    {
      type: 'tip',
      title: 'Conseil performance web',
      html: 'Pour maximiser la vitesse de chargement, utilisez WebP comme format principal sur votre site avec des alternatives JPG/PNG pour les navigateurs anciens. L\'élément HTML <code>picture</code> avec plusieurs balises <code>source</code> vous permet de servir le format optimal selon le support du navigateur visiteur.',
    },
    {
      type: 'title',
      text: 'SVG, BMP et ICO: Cas d\'Usage Spéciaux',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les <strong>fichiers SVG</strong> sont des vecteurs mathématiques qui s\'adaptent sans perte à n\'importe quelle résolution, parfaits pour les logos et la conception graphique. Cependant, de nombreuses plateformes ne les supportent pas directement. Les <strong>fichiers BMP</strong>, bien qu\'obsolètes pour le web, restent courants dans les environnements Windows. Enfin, le <strong>format ICO</strong> est le standard pour les favicons web et la personnalisation des icônes Windows.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Combinaisons', value: '21', icon: 'mdi:image-sync' },
        { label: 'Confidentialité', value: '100% local', icon: 'mdi:shield-lock' },
        { label: 'Formats', value: '8 types', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Confidentialité Totale: Conversion sans Serveurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Contrairement à d\'autres outils en ligne qui téléchargent vos images sur des serveurs distants, nos convertisseurs utilisent exclusivement les APIs natives du navigateur: <strong>Canvas 2D API</strong> pour la rastérisation, <strong>FileReader API</strong> pour lire les fichiers localement et <strong>Blob/URL.createObjectURL</strong> pour les téléchargements. Vous pouvez ainsi convertir des images confidentielles, des logos d\'entreprise ou des documents privés en toute sécurité.',
    },
  ],
};
