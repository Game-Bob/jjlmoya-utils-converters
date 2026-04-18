import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'image-converters',
  title: 'オンライン画像変換ツール',
  description: 'PNG、JPG、WebP、SVG、AVIF、GIF、BMP、ICO形式の間で画像を変換するための無料ツール。すべてブラウザ内でローカルに処理されるため、インターネットにアップロードされることはありません。',
  seo: [
    {
      type: 'summary',
      title: '当サイトの変換ツールが選ばれる理由',
      items: [
        '100%ローカル変換：画像がデバイスの外に出ることはありません。',
        '21種類のフォーマット組み合わせに対応：PNG、JPG、WebP、SVG、AVIF、GIF、BMP、ICO。',
        'ZIPダウンロードによる一括処理。',
        '登録不要、制限なし、不快な広告 भीはありません。',
      ],
    },
    {
      type: 'title',
      text: '画像変換：完全フォーマットガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '適切な画像フォーマットの選択は、ウェブのパフォーマンス、デバイスの互換性、および体感的な視覚品質に直接影響します。当サイトの<strong>オンライン画像変換ツール</strong>は、デザイナー、ウェブ開発者、写真家から最も要望の多い変換ルートを網羅しており、ファイルのプライバシーを損なう可能性のある外部サーバーに依存することはありません。',
    },
    {
      type: 'title',
      text: 'PNG、JPG、WebP：現代のウェブデザインの三本柱',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG形式</strong>は、可逆圧縮と透過サポート（アルファチャンネル）が特徴で、ロゴ、アイコン、エッジの鋭いグラフィックの標準となっています。<strong>JPG形式</strong>は、最高の汎用互換性と写真向けのファイルサイズ縮小を提供しますが、保存するたびに品質が犠牲になります。Googleが開発した<strong>WebP形式</strong>は、両方の長所を兼ね備えています。PNGやJPGよりも30〜40%優れた圧縮率で、透過やアニメーションもサポートしており、現在はLCPを改善するためにCore Web Vitalsによって推奨されている形式です。',
    },
    {
      type: 'table',
      headers: ['フォーマット', '透過', '圧縮', '用途'],
      rows: [
        ['PNG', 'あり', '可逆圧縮', 'ロゴ、グラフィック、スクリーンショット'],
        ['JPG', 'なし', '非可逆圧縮', '写真、大きな画像'],
        ['WebP', 'あり', '可逆/非可逆', '現代のウェブ、パフォーマンス'],
        ['SVG', 'あり', 'ベクター', 'スケーラブルなアイコン、アニメーション'],
        ['AVIF', 'あり', '最高', '次世代ウェブ'],
        ['ICO', 'あり', 'ビットマップ', 'ファビコン、Windowsアイコン'],
      ],
    },
    {
      type: 'title',
      text: '次世代フォーマット：AVIFとWebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF形式</strong>（AV1 Image File Format）は、WebP의技術的後継であり、同等の主観的品質でJPGよりも最大50%小さいファイルサイズを提供します。普及は急速に進んでいますが、古いシステムでの互換性が限られているため、制作ワークフローではAVIFをJPG、PNG、WebPなどのより確立された形式に変換することが頻繁に必要となります。',
    },
    {
      type: 'tip',
      title: 'ウェブパフォーマンスのヒント',
      html: 'ページの読み込み速度を最大化するには、ウェブサイトの主要形式としてWebPを使用し、古いブラウザ向けにJPG/PNGのフォールバックを用意してください。複数の<code>source</code>タグを持つHTMLの<code>picture</code>要素を使用すると、訪問者のブラウザのサポート状況に基づいて最適な形式を提供できます。',
    },
    {
      type: 'title',
      text: 'SVG、BMP、ICO：特殊なユースケース',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG形式</strong>は、解像度に関係なく劣化なしでスケーリングできる数学的ベクターであり、ロゴやグラフィックデザインに最適です。しかし、多くのプラットフォームや編集ソフトが直接サポートしていないため、配布用にPNGやJPGにラスタライズする必要があります。<strong>BMP形式</strong>は、ウェブ利用としては時代遅れですが、Windows環境やレガシーな編集ソフトでは依然として一般的です。最後に、<strong>ICO形式</strong>はウェブのファビコンやWindowsアイコンのカスタマイズの標準であり、当サイトの変換ツールがネイティブに生成する特定のバイナリヘッダー構造を必要とします。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: '組み合わせ', value: '21', icon: 'mdi:image-sync' },
        { label: 'プライバシー', value: '100%ローカル', icon: 'mdi:shield-lock' },
        { label: 'フォーマット', value: '8種類', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: '完全なプライバシー：サーバーを介さない変換',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '画像をリモートサーバーにアップロードする他のオンラインツール（プライバシーやセキュリティのリスクを伴います）とは異なり、当サイトの変換ツールはブラウザ独自のAPIのみを使用します。ラスタライズには<strong>Canvas 2D API</strong>を、ファイルのローカル読み込みには<strong>FileReader API</strong>を、ダウンロードには<strong>Blob/URL.createObjectURL</strong>を使用します。つまり、機密画像、企業ロゴ、プライベートなドキュメントを完全に安全に変換できます。',
    },
  ],
};
