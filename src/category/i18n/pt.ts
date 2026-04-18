import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'conversores-de-imagem',
  title: 'Conversores de Imagem Online',
  description: 'Ferramentas gratuitas para converter imagens entre os formatos PNG, JPG, WebP, SVG, AVIF, GIF, BMP e ICO. Tudo é processado localmente no seu navegador, sem carregar nada para a internet.',
  seo: [
    {
      type: 'summary',
      title: 'Por que usar os nossos conversores',
      items: [
        'Conversão 100% local: as suas imagens nunca saem do seu dispositivo.',
        'Suporte para 21 combinações de formatos: PNG, JPG, WebP, SVG, AVIF, GIF, BMP e ICO.',
        'Processamento em lote com download em ZIP.',
        'Sem registo, sem limites, sem anúncios intrusivos.',
      ],
    },
    {
      type: 'title',
      text: 'Conversão de Imagem: Guia Completo de Formatos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Escolher o formato de imagem correto tem um impacto direto no desempenho web, na compatibilidade de dispositivos e na qualidade visual percebida. Os nossos <strong>conversores de imagem online</strong> abrangem as rotas de conversão mais solicitadas por designers, desenvolvedores web e fotógrafos, tudo sem depender de servidores externos que poderiam comprometer a privacidade dos seus ficheiros.',
    },
    {
      type: 'title',
      text: 'PNG, JPG e WebP: Os Três Pilares do Web Design Moderno',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>formato PNG</strong> destaca-se pela sua compressão sem perdas e suporte para transparência (canal alfa), sendo o padrão para logótipos, ícones e gráficos com bordas nítidas. O <strong>formato JPG</strong> oferece a máxima compatibilidade universal e tamanhos reduzidos para fotos, mas sacrifica a qualidade a cada gravação. O <strong>formato WebP</strong>, desenvolvido pela Google, combina o melhor de ambos: compressão 30-40% melhor que PNG/JPG com suporte para transparência e animação, sendo agora o formato recomendado pelos Core Web Vitals para melhorar o LCP.',
    },
    {
      type: 'table',
      headers: ['Formato', 'Transparência', 'Compressão', 'Ideal para'],
      rows: [
        ['PNG', 'Sim', 'Sem perdas', 'Logótipos, gráficos, capturas de ecrã'],
        ['JPG', 'Não', 'Com perdas', 'Fotos, imagens grandes'],
        ['WebP', 'Sim', 'Com/Sem perdas', 'Web moderna, desempenho'],
        ['SVG', 'Sim', 'Vetorial', 'Ícones escaláveis, animações'],
        ['AVIF', 'Sim', 'Superior', 'Web de próxima geração'],
        ['ICO', 'Sim', 'Bitmap', 'Favicons, ícones do Windows'],
      ],
    },
    {
      type: 'title',
      text: 'Formatos de Próxima Geração: AVIF e WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>formato AVIF</strong> (AV1 Image File Format) é o sucessor tecnológico do WebP, oferecendo até 50% menos tamanho de ficheiro que o JPG para a mesma qualidade subjetiva. Embora a sua adoção cresça rapidamente, a compatibilidade limitada em sistemas mais antigos torna a conversão de AVIF para formatos mais estabelecidos como JPG, PNG ou WebP uma necessidade frequente nos fluxos de trabalho de produção.',
    },
    {
      type: 'tip',
      title: 'Dica de desempenho web',
      html: 'Para maximizar a velocidade de carregamento da página, use WebP como o formato principal no seu site, com alternativas (fallbacks) em JPG/PNG para navegadores mais antigos. O elemento HTML <code>picture</code> com várias tags <code>source</code> permite servir o formato ideal com base no suporte do navegador do visitante.',
    },
    {
      type: 'title',
      text: 'SVG, BMP e ICO: Casos de Uso Especiais',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Os <strong>ficheiros SVG</strong> são vetores matemáticos que escalam sem perdas para qualquer resolução, perfeitos para logótipos e design gráfico. No entanto, muitas plataformas e aplicações de edição não os suportam diretamente, tornando necessário rasterizá-los para PNG o JPG para distribuição. Os <strong>ficheiros BMP</strong>, embora obsoletos para uso web, continuam comuns em ambientes Windows e software de edição legado. Por fim, o <strong>formato ICO</strong> é o padrão para favicons web e personalização de ícones do Windows, exigindo uma estrutura de cabeçalho binário específica que o nosso conversor gera nativamente.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Combinações', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privacidade', value: '100% local', icon: 'mdi:shield-lock' },
        { label: 'Formatos', value: '8 tipos', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Privacidade Total: Conversão sem Servidores',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao contrário de outras ferramentas online que carregam as suas imagens para servidores remotos (com os riscos de privacidade e segurança que isso acarreta), os nossos conversores usam exclusivamente APIs nativas do navegador: <strong>Canvas 2D API</strong> para rasterização, <strong>FileReader API</strong> para ler ficheiros localmente e <strong>Blob/URL.createObjectURL</strong> para transferências. Isto significa que pode converter imagens confidenciais, logótipos corporativos ou documentos privados com total segurança.',
    },
  ],
};
