import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-to-jpg-converter';
const title = 'SVGをJPGにオンラインで無料で変換しましょう';
const description =
  'ブラウザでSVGベクトルファイルをJPGに変換します。2倍の高解像度レンダリング。ファイルのアップロード不要。無料かつ100%プライベート。';

const ui: ImageConverterUI = {
  dragText: 'SVGファイルをドラッグ...',
  convertText: '即座にJPGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中': '参考文献',
  faqTitle: 'よくある質問',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: 'なぜSVGをJPGに変換する必要があるのですか？',
    answer:
      'JPGはあらゆる種類のデバイスで最大限の互換性を提供します。SVGをJPGに変換することは、レンダリングの問題なしに誰もがデザインを閲覧できるようにする最良の方法です。',
  },
  {
    question: 'SVGの透明度はどうなりますか？',
    answer:
      '透明度をサポートしていないJPGに変換する際、ベクトル構成に不透明な白い背景が自動的に追加されます。',
  },
  {
    question: '結果のJPGの解像度はどのくらいですか？',
    answer:
      'このツールは、Retina画面やプロ用途に適した高解像度を保証するために、SVGを2倍（2x）のスケールでレンダリングします。',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: 'ベクトルファイルを挿入',
    text: 'エクスポートリストを準備するために、上部のエリアにSVGファイルをドラッグ＆ドロップしてください。',
  },
  {
    name: 'JPGへのラスタライズ',
    text: 'ツールがベクトルを高解像度のピクセルに変換し、即座にJPGを生成します。',
  },
  {
    name: '結果をダウンロード',
    text: 'JPGファイルを個別に、またはZIPパッケージとして取得してください。',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG to JPG 変換機：ベクトルをあらゆるプラットフォームへ',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong>形式は、軽量、スケーラブル、編集可能という現代のウェブの母国語のような存在です。しかし、ベクトルを全く理解しないプラットフォームも存在します。ソーシャルメディア、メールクライアント、Word文書、印刷アプリケーション、そして現実世界の大多数のソフトウェアはラスタライズされた画像で動作します。<strong>JPG</strong>は、例外なくどこでも受け入れられ、プラグインも追加の変換も不要な、普遍的な共通項です。',
  },
  {
    type: 'title',
    text: 'SVG vs JPG：ベクトルを写真にする必要があるとき',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVGは画像を数学的な命令として保存します。このベクトルの性質はウェブには最適ですが、アナログの世界やレガシーソフトウェアには見えない場合があります。メールで送信されたSVGファイルは、受信者のクライアントで理解不能なXMLテキストとして表示されることがあります。Word文書に添付されたSVGは、古いバージョンのOfficeでは全くレンダリングされないこともあります。',
  },
  {
    type: 'paragraph',
    html: 'JPGは、各画像をJPEGアルゴリズムによって圧縮された色情報を持つピクセルマトリックスに変換します。アルファチャネルをサポートしていないため、変換機は背景を白で自動的にマージします。代わりに、古い携帯電話、プリンター、スマートTV、20年前の編集アプリなど、 <em>地球上のあらゆるデバイス</em> で開くことができるファイルが得られます。これは最も広く使われている形式であり、多くの文脈において最も価値のある形式でもあります。',
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
          'ユーザーのSVGコード（独自のデザインデータを含む）が外部サーバーへ送信される',
          'フォントやグラデーションのレンダリングが一貫しない',
          '変換ごとにインターネット接続が必要',
          'JPGの出力品質を常に構成できるとは限らない',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ユーザーのハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ブラウザを離れるデータは0バイト',
          'ブラウザのネイティブエンジンを使用した忠実なレンデリング',
          '最大の鮮明度を実現する2倍解像度のJPG',
          'JPG標準に従い、白い背景が自動的に適用される',
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
    html: 'SVGファイルがブラウザの <strong>Image</strong> 要素に読み込まれ、この要素はXMLを解釈するために独自のベクトルレンダリングエンジンを使用します。視覚的な結果は、出力解像度を最適化するために2倍のスケールで、あらかじめ白い背景を塗りつぶした（JPGが透明度をサポートしていないために必要） <strong>HTML5 Canvas</strong> 上に描画されます。',
  },
  {
    type: 'paragraph',
    html: ' <code>toDataURL(\'image/jpeg\', 0.92)</code> メソッドが、キャンバスのピクセルを高画質なJPGファイルに変換します。SVGの色は、JPEG圧縮の色空間変換により、わずかな変化が生じることがあります。そのため、色再現が重要なプロフェッショナルな印刷作業に使用する前には、結果をプレビューすることをお勧めします。',
  },
  {
    type: 'tip',
    title: '印刷用途へのヒント',
    html: 'SVGの背景やグラデーションは、JPEG圧縮時のカラープロファイルの違いにより、JPGではわずかに異なって見えることがあります。正確なブランドカラーの精度が重要な印刷所へ送る前や、印刷用マーケティング資料に使用する前には、常に結果をプレビューしてください。',
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
      'Facebook、Twitter、LinkedInでのSVGロゴやイラストの共有。',
      'OutlookやGmailを介したメールへのベクトルグラフィックスの添付。',
      'Word文書、Excel、プレゼン資料へのSVGデザインの挿入。',
      'SVGをサポートしていないオンラインショップへの商品画像の掲載。',
      'オンデマンド印刷サービス用のファイル準備。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '現実の世界は依然としてピクセルで会話をしています。このツールは、ユーザー独自のデザインをブラウザの外に出すことなく、数秒のうちに高解像度レンダリングによってSVGベクトルを普遍的なJPG言語へと翻訳します。',
  },
];


export const content: SvgAJpgLocaleContent = {
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
