import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-to-webp-converter';
const title = 'PNGをWebPにオンラインで無料で変換しましょう';
const description =
  'ブラウザでPNG画像をWebPに変換します。ファイルサイズを最大40%削減。透明度を維持。ファイルのアップロード不要。無料かつプライベート。';

const ui: ImageConverterUI = {
  dragText: 'PNGファイルをドラッグ...',
  convertText: '即座にWebPに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: 'なぜPNGをWebPに変換する必要があるのですか？',
    answer:
      'WebPは同じ品質でPNGよりも最大40%優れた圧縮を提供すると同時に、アルファ透明度もサポートしています。Google PageSpeed Insightsが推奨する形式です。',
  },
  {
    question: '変換過程で透明度は失われますか？',
    answer:
      'いいえ。WebPの技術的実装はアルファチャネルをサポートしています。元のPNGの透明度は、新しいWebPファイルでもそのまま維持されます。',
  },
  {
    question: '画像はサーバーに送信されますか？',
    answer:
      'いいえ。コードはユーザーのブラウザ（クライアント側）でのみ実行されます。変換された画像を当社が閲覧、記録、または保存することはありません。',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: 'PNGファイルを挿入',
    text: '容量の大きいPNGファイルをアップロードエリアにドラッグ＆ドロップするか、従来のインタラクティブなセレクターを使用してください。',
  },
  {
    name: 'チャネル検出',
    text: 'ローカルレンダリングエンジンがピクセル構成を検出し、最適化されたWebP形式でエクスポートします。',
  },
  {
    name: '直接ダウンロード',
    text: '高度に圧縮されたWebPファイルを個別にダウンロードするか、ZIPパッケージコンバーターを使用してまとめてダウンロードしてください。',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebPの実装詳細',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitalsガイダンス',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: 画像形式',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to WebP 変換機：ウェブのための透明度と最新の圧縮技術',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>は、ロゴ、アイコン、UI要素、切り抜き背景の商品画像など、透明度が必要なウェブ画像の標準形式でした。問題はファイルサイズです。品質を保証する可逆圧縮は、ファイル容量を大幅に大きくします。Googleの <strong>WebP</strong> はこの矛盾を解決します。アルファチャネル（透明度）をサポートしながら、PNGよりもはるかに効率的に圧縮するため、ウェブサイトでPNGからWebPに切り替えることは、視覚的な品質を犠牲にすることなく適用できる完璧な最適化です。',
  },
  {
    type: 'title',
    text: 'PNGとWebPの使い分け',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PhotoshopやFigmaなどのデザインツール、印刷ワークフロー、古いデスクトップアプリケーション、またはWebPサポートが保証されていない環境など、互換性が重要な場合には依然として <strong>PNG</strong> が適切な形式です。また、可逆圧縮によってすべてのピクセルが保持されるため、編集工程で作業レイヤーを保存するのにも理想的な形式です。ただし、ファイル容量がWebPの3〜8倍になる可能性があります。',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong>は、あらゆるモダンなウェブコンテンツにおいてPNGの自然な後継です。Chrome、Firefox、Safari、およびEdgeはすべてこれをネイティブにサポートしています。可逆WebP画像は、同等のPNGより26%小さく、非可逆モードでは視覚的にほとんど区別がつかない品質を維持しながら最大40%小さくなります。そしてウェブデザインにとって重要なのは、 <strong>WebPがPNGと全く同様にアルファ透明度を保持</strong> し、視覚的な妥協がないことです。',
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
        title: 'クラウド変換器',
        description: 'リモートサーバーにファイルをアップロードするツールです。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'アップロードおよびダウンロード時にネットワーク遅延が発生',
          'ロゴや画像がサードパーティのサーバーに保存される',
          'ファイルサイズ制限や1日の変換回数制限がある',
          '強制的な広告やサードパーティのトラッカーが含まれる',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ユーザーのハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ネットワーク遅延のない即座の処理速度',
          '完全なプライバシー — 外部送信データ0バイト',
          '容量制限やファイル数の制限なし',
          '広告や追跡のないクリーンなインターフェース',
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
    html: 'PNGファイルがローカルで読み込まれ、メモリ上の <strong>HTML5 Canvas</strong> にデコードされます。Canvas APIは元のPNGのアルファチャネルを保持し、すべての透明および半透明のピクセルがRGBAピクセルバッファ内にそのまま維持されます。次に、 <code>toDataURL(\'image/webp\')</code> を呼び出してキャンバスをエクスポートしますが、この際にブラウザのWebPコーデック（Googleのlibwebpベース）が適用され、透明度データを変更することなく、より圧縮されたファイルを生成します。',
  },
  {
    type: 'paragraph',
    html: 'WebPは2つの圧縮モードを使用します。すべてのピクセルがオリジナルと正確に一致する必要がある画像のための可逆モードと、小さな差異が目立たない写真や要素のための非可逆モードです。可逆モードはPNGより26%小さいファイルを生成し、非可逆モードでは優れた視覚品質を維持しながらPNG比で最大40%の容量削減を達成できます。',
  },
  {
    type: 'tip',
    title: 'ヒント：ウェブではWebPがPNGとJPGの両方を凌駕します',
    html: '可逆モードのWebPはPNGより小さいです。非可逆モードのWebPはJPGより小さいです。これにより、WebPはウェブ環境において <strong>両方の形式を代替する唯一の形式</strong> となりました。アップロードする前に透明PNGをWebPに変換してください。Google PageSpeed Insightsはこれを検出し、「次世代フォーマットでの画像の配信」の監査で高い評価を与えます。',
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
      'ウェブサイトやアプリ用の透明背景のロゴやアイコン。',
      'ECサイトにおける切り抜き背景の商品画像。',
      'アルファ透明度を持つCSSスプライトやUI要素。',
      'ランディングページ用のラスタライズされたイラストやベクターグラフィックス。',
      'ブログやニュースポータルの透明背景の記事サムネイル。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'PNGからWebPへの移行は、現在ウェブにおいて利用可能な最も包括的な画像最適化です。視覚的なデザインを変更することなく、ファイル容量を削減し、透明度を維持し、Core Web Vitalsの指標を改善できます。このツールはブラウザで画像を処理し、外部サーバーへ送信しないため、即座に、無料で、かつ完全にプライベートに行えます。',
  },
];


export const content: PngAWebpLocaleContent = {
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
