import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-to-png-converter';
const title = 'WebPをPNGにオンラインで無料で変換しましょう';
const description =
  'ブラウザでWebP画像をPNGに変換します。透明度を維持します。サーバーへのファイルアップロードは不要。無料かつ100%プライベート。';

const ui: ImageConverterUI = {
  dragText: 'WebPファイルをドラッグ...',
  convertText: '即座にPNGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中': '参考文献',
  faqTitle: 'よくある質問',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: 'なぜWebPファイルをPNGに変換する必要があるのですか？',
    answer:
      'WebPファイルは軽量ですが、古いPhotoshopなどの編集プログラムで互換性の問題を引き起こすことがあります。PNGは100%普遍的な互換性を保証します。',
  },
  {
    question: 'WebPからPNGへの変換で透明度は失われますか？',
    answer:
      '全くありません。JPGへの変換とは異なり、PNGはアルファチャネルをサポートしています。当社のユーティリティは、元のファイルのあらゆる透明領域を保持します。',
  },
  {
    question: '機密の企業ファイルをアップロードできますか？',
    answer:
      'できます。また、そうすべきです。すべてがJavaScriptを介してローカルで実行されるため、企業の画像がデバイスから離れることはなく、外部サーバーに保存されることもありません。',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: 'WebPファイルをドラッグ',
    text: 'メインパネルにWebPファイルをドラッグ＆ドロップするか、従来の方法で画像を選択してください。',
  },
  {
    name: '高忠実度変換',
    text: 'ブラウザが画像をピクセル単位で再描画し、元の色域を維持しながら、PNG形式の正確なコピーを生成します。',
  },
  {
    name: '個別または一括ダウンロード',
    text: '各ファイルを個別に保存するか、バッチ処理をした場合はZIPボタンをクリックして、すべてをまとめてダウンロードしてください。',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to PNG 変換機：編集とデザインのためのプロフェッショナルな選択',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'デザイナーが <strong>WebP</strong> 形式のグラフィックアセットをダウンロードし、Photoshop、Figma、またはIllustratorで開こうとすると、ファイルの読み込みに失敗したり、品質が低下したりするという、苛立たしい結果を招くことがあります。 <strong>PNG</strong> 形式は、無損耗圧縮、完全なアルファチャネル、クリエイティブ制作プロセス全体での互換性の保証など、プロの編集分野における揺るぎない標準です。',
  },
  {
    type: 'title',
    text: 'ウェブのためのWebP、スタジオのためのPNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebPはウェブ制作形式です。その圧縮アルゴリズムは、繰り返しの編集ワークフローで最大限の忠実度を維持することではなく、転送重量を減らすように最適化されています。編集されたWebPを保存するたびに、コーデックは圧縮を再適用します。ファイルを何度も修正する必要があるプロジェクトでは、これは累積的な品質の低下を意味します。',
  },
  {
    type: 'paragraph',
    html: 'PNGは <strong>無損耗圧縮</strong> を使用します。ファイルを保存する回数にかかわらず、すべてのピクセルのデータが完全に保持されます。数十回の修正を経ても視覚的な完全性を維持する必要があるUI/UXデザイナー、デジタルイラストレーター、およびブランディングチームが選択する形式です。Photoshop、Figma、Sketch、Illustratorなどのツールは、PNGを主要な書き出し形式として扱います。',
  },
  {
    type: 'title',
    text: '比較：ローカル変換 vs クラウド変換',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウド変換機',
        description: 'リモートサーバーにファイルをアップロードするツールです。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'デザインアセットがサードパーティのサーバーに保存される',
          '大きなファイルの処理に時間がかかる',
          '機密のクライアントプロジェクトの漏洩リスク',
          '一括変換に制限がある、または有料である',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'JavaScript技術を使用してハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'デザインがデバイスを離れることはありません',
          '数十個のファイルを即座に一括変換',
          'アルファチャネルと色域の完全な保持',
          'クライアントプロジェクトのための絶対的なプライバシー',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技術的な仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '最新のブラウザはWebPをネイティブにデコードできます。当社のツールはこの能力を活用してファイルをJavaScriptの <strong>Image</strong> 要素に読み込み、元のサイズと同じ寸法のHTML5 canvasに描画します。JPGへの変換とは異なり、ここでは背景の塗りつぶしは不要で、canvasは完全なアルファチャネルを維持します。',
  },
  {
    type: 'paragraph',
    html: '最終的な書き出しには <code>toDataURL(\'image/png\')</code> メソッドを使用し、これは元の画像に忠実な無損耗PNGを生成します。結果は、中間ステップ、色の劣化、透明度の損失なしに、あらゆるプロフェッショナルなデザインソフトウェアに直接インポートできる状態のファイルです。',
  },
  {
    type: 'tip',
    title: 'エディターへのヒント',
    html: '画像の編集を続ける必要があるときは、PNGを使用してください。無損耗圧縮により、繰り返し保存しても品質が低下しないことが保証されます。これは、PhotoshopやFigmaでレイヤー、マスク、色の調整などを伴う作業をする際に非常に重要です。',
  },
  {
    type: 'title',
    text: '活用事例と互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'WebPアセットをPhotoshop、Figma、Sketch、Illustratorにインポート。',
      '複数の背景で使用するために、ロゴやアイコンの透明度を保持。',
      '長期プロジェクトのためにグラフィックのマスターコピーを作成。',
      'アルファチャネル付きのPNGが必要なモバイルアプリ用アセットの書き出し。',
      '可変背景を持つデザインモックアップやプレゼンテーションで画像を使用。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebPがウェブサーバー形式なら、PNGはデザインスタジオ形式です。このツールは、透明度が維持され、最大品質を備えた、プロダクションレディなPNGにWebPアセットを変換します。これらすべてがブラウザ上で行われ、ファイルがデバイスを離れることはありません。',
  },
];


export const content: WebpAPngLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'ja', faq, howTo }),
};
