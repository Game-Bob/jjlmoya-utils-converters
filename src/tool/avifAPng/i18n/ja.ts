import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-to-png-converter';
const title = 'AVIFをPNGにオンラインで変換';
const description =
  '透明度を維持しながらAVIF画像をPNGに変換します。ファイルをアップロードする必要はありません。ブラウザ上でのローカル処理で、無料で無制限に使用できます。';

const ui: ImageConverterUI = {
  dragText: 'AVIFファイルをドラッグ...',
  convertText: '即座にPNGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中': '参考文献',
  faqTitle: 'よくある質問',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: 'なぜAVIFをPNGに変換する必要があるのですか？',
    answer:
      'AVIFは圧縮には優れていますが、古いブラウザや従来の画像エディタでの互換性は限られています。AVIFからPNGに変換することで、元のファイルの透明度を維持し、すべてのアプリケーションで開けるようになります。',
  },
  {
    question: '元のAVIFファイルの透明度は維持されますか？',
    answer:
      'はい。透明な背景を削除してしまうJPGとは異なり、PNGへの書き出しでは、当コンバーターはアルファチャンネルをそのまま維持します。',
  },
  {
    question: '画像がインターネットにアップロードされないというのは本当ですか？',
    answer:
      '本当です。当コンバーターは、デバイスの内部JavaScriptエンジンを使用して、100%ローカルに実行されます。',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: 'AVIFファイルを追加する',
    text: '指定されたエリアに直接ドラッグするか、ボタンを使用してデバイス内のフォルダを参照してください。',
  },
  {
    name: '即時処理',
    text: 'HTML5プロセッサが画像をレンダリングします。数マイクロ秒で自動的に形式がPNGに切り替わります。',
  },
  {
    name: 'PNGファイルを取得する',
    text: '変換された画像を一つずつダウンロードするか、ZIPボタンを使用して一括で保存してください。',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF-PNGコンバーター：ウェブ配信用からプロの編集まで',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIFは、ウェブで画像を提供するための理想的な形式です。小さく、効率的で、高品質です。しかし、デザインツールでこれらの画像を編集、レタッチ、または加工しようとすると、AVIFは障害となります。Figma、Photoshop、Illustrator、Sketch、および実質的にすべてのプロフェッショナルなデザインツールは、透明度を伴う作業や非可逆編集のためにPNG形式を想定しています。AVIFをPNGに変換することは、ウェブ配信の世界とクリエイティブな編集の世界をつなぐ架け橋となります。',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG：配信 vs 編集',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIFは配信形式として際立っています。ファイルが小さく、読み込みが速く、アルファチャンネルをサポートし、並外れた視覚品質を備えています。しかし、ツールのエコシステムは限られています。ほとんどのデザインソフトウェアはAVIFを直接インポートできず、クリエイティブなワークフローを中断させます。FigmaでAVIFを開こうとしたり、Photoshopにレイヤーとしてインポートしようとしたりしても、うまく機能しません。',
  },
  {
    type: 'paragraph',
    html: 'PNGはデジタルデザインのネイティブ形式です。可逆圧縮、完全なアルファチャンネルのサポート、およびすべてのクリエイティブツールとのユニバーサルな互換性を備えたPNGは、最高級の作業形式です。スケーリング、レタッチ、複数の形式へのエクスポート、またはレイヤー作業が必要な場合、PNGはそのプロセスで詳細やピクセルを一切損なうことがないことを保証します。',
  },
  {
    type: 'title',
    text: '比較：クラウドコンバーターと当サイトのローカルアーキテクチャ',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウドコンバーター',
        description: 'AVIFファイルをリモートサーバーにアップロードして処理するツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'デザイン画像がサードパーティのサーバーに送信される',
          'ネットワーク遅延による待機時間が発生する',
          'アルファチャンネルの喪失や変化の可能性がある',
          '一括変換を困難にするサイズ制限がある',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーとCanvas APIを使用してブラウザで直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'アルファチャンネルを完璧な精度で維持',
          'データ転送のない即時変換',
          'ファイル、サイズ、または一括処理の制限なし',
          '独自の設計資産に対する完全なプライバシー',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '透明度を伴う技術的な変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'モダンなブラウザは、統合されたAV1エンジンによりAVIFをネイティブにデコードします。ファイルを読み込むと、ブラウザはアルファチャンネルの全情報を保持しながらメモリ内でデコードします。透明度を含むデコードされた画像は、アルファチャンネルを維持するための正しい構成モードでHTML5の<code>Canvas</code>要素上に描画されます。',
  },
  {
    type: 'paragraph',
    html: '背景を白で塗りつぶして透明度を破壊してしまうJPGへの書き出しとは異なり、<code>toBlob(\'image/png\')</code>を使用したPNGへの書き出しは、アルファチャンネルを完全に維持します。その結果、元のAVIFのすべてのピクセル、すべての半透明、およびすべての詳細を保持する可逆圧縮のPNGが得られます。',
  },
  {
    type: 'tip',
    title: 'あらゆるデザインツールにとって必須の事前ステップ',
    html: 'Figma、Photoshop、Illustrator、またはあらゆるデザインツールにインポートする前に、AVIFをPNGに変換してください。これらのアプリケーションはAVIFを直接読み込みませんが、PNGはすべてのツールでネイティブに動作し、透明度と品質を完璧に維持します。',
  },
  {
    type: 'title',
    text: '使用例：AVIFをPNGに変換する必要がある場合',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Figma、Sketch、Adobe XD、またはその他のUIデザインツールへのインポート。',
      '透明度を維持したままPhotoshop、Affinity Photo、またはGIMPでレイヤーとして編集。',
      'アイコンやスプライト生成のソースとしての使用。',
      '標準的なデザインソフトウェアを使用しているクライアントや共同作業者への送信。',
      '可逆編集形式での透明度を含む画像のアーカイブ。',
    ],
  },
  {
    type: 'title',
    text: '結論：ウェブとデザインをつなぐ架け橋',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIFとPNGは、現代のワークフローにおける完璧なパートナーです。ウェブでの効率的な配信にはAVIF、デザインツールでの編集や共同作業にはPNGを使用します。当コンバーターを使用すれば、一方から他方への移行は即時かつプライベートに行われ、細部まで維持されます。視覚的な資産が重要である場合に、まさに必要なものです。',
  },
];


export const content: AvifAPngLocaleContent = {
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
