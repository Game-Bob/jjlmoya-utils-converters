import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-to-webp-converter';
const title = 'JPGをWebPにオンラインで無料で変換しましょう';
const description =
  'ブラウザでJPG画像をWebPに変換します。目に見える劣化のない優れた圧縮率。ファイルのアップロード不要。無料、無制限、かつプライベート。';

const ui: ImageConverterUI = {
  dragText: 'JPGファイルをドラッグ...',
  convertText: '即座にWebPに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: 'なぜJPG写真をWebPに変換する必要があるのですか？',
    answer:
      'WebPは、人間の目に違いを感じさせずに従来のJPGファイルよりも大幅に優れた圧縮を可能にし、その結果、より高速でモダンなウェブサイトを実現します。',
  },
  {
    question: '画像ごとに料金を支払う必要がありますか？',
    answer:
      'いいえ、このツールは無料であり、すべての処理はコンピューター上で直接行われます。家庭用またはプロ用として無制限に使用できます。',
  },
  {
    question: '変換は安全ですか？',
    answer:
      'はい、完全に安全です。すべての処理は、外部サーバーにデータを送信することなく、ローカルブラウザのHTML5 Canvas内で行われます。',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: 'JPG写真を挿入',
    text: 'JPGファイルをドロップするか、上部のエリアに直接ドラッグしてください。即座に検出されます。',
  },
  {
    name: 'WebP変換処理',
    text: 'ローカルレンダリングエンジンが、各画像ファイルをウェブに最適化された超軽量なWebPに変換します。',
  },
  {
    name: '結果をダウンロード',
    text: '各WebPを個別に保存するか、変換されたすべてのファイルを含むZIPファイルをダウンロードしてください。',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to WebP 変換機：Googleの最新形式でサイトを高速化',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>形式は数十年にわたりデジタル写真を支配してきました。普遍的な互換性と幅広いサポートを誇ります。しかしGoogleは、同等の視覚品質を維持しながらファイルサイズを25〜35％削減することで、JPGを凌駕する <strong>WebP</strong> を設計しました。遅いページ読み込みに苦しむ開発者やマーケティングチームにとって、JPGをWebPに変換することは、デザインを修正することなく適用できる最も投資対効果の高い最適化です。',
  },
  {
    type: 'title',
    text: 'JPGとWebPの使い分け',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '顧客へのメール、Word文書、古いソーシャルメディアプラットフォーム、あるいはまだWebPをサポートしていないCMSシステムなど、普遍的な互換性が必要な場合には、依然として <strong>JPG</strong> が正しい選択です。30年にわたり構築されたエコシステムにより、あらゆる画面、プリンター、またはビューアーで問題なく開くことが保証されています。主な欠点はサイズです。1.5MBのヘッダーJPGはページのLCPスコアを下げ、Core Web Vitalsのしきい値を下回る原因となります。',
  },
  {
    type: 'paragraph',
    html: 'ウェブサイト上のすべてのコンテンツには <strong>WebP</strong> がスマートな選択です。Chrome、Firefox、Safari、およびEdgeはすでに数年前からネイティブにサポートしています。ECサイトの商品画像、ブログのバナー、動画のサムネイル、およびオンラインで公開されるあらゆる写真は、ページの軽量化、Google PageSpeed Insightsスコアの向上、およびモバイル環境でのスムーズなユーザーエクスペリエンスなど、直接的な恩恵を受けることができます。',
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
          '写真がサードパーティのサーバーに保存される',
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
          '完全なプライバシー - 外部送信データ0バイト',
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
    html: 'JPGファイルをツールにドラッグすると、ブラウザはRAMにのみ存在する <strong>Blobオブジェクト</strong> を作成します。そのBlobはデコードされ、非表示の <strong>HTML5 Canvas</strong> 要素に描画されます。JPGにはアルファチャネルがないため、WebPへの変換は直接行われます。エンジンは <code>toDataURL(\'image/webp\')</code> を呼び出してキャンバスをエクスポートし、サーバーを介さずOSが即座にダウンロードするバイトストリームを生成します。',
  },
  {
    type: 'paragraph',
    html: 'WebP圧縮アルゴリズムは、ブロック予測技術（Googleの動画コーデックであるVP8と同様）を色変換や算術符号化と組み合わせています。その結果、元のJPGと同じ知覚情報を保持しながら、はるかに効率的にパッケージ化されたファイルが作成されます。これは、ページ訪問ごとに転送されるキロバイト数が削減されることを意味します。',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals ヒント：LCPと画像の重さ',
    html: '<strong>Largest Contentful Paint (LCP)</strong> は、ページで最も大きな視覚要素をロードするのにかかる時間を測定するGoogleの指標です。1.5MBのヘッダーJPGを、視覚的な差を出すことなくわずか900KBまたは600KBのWebPにすることができます。この <strong>25〜35％の削減</strong> により、LCPを「改善が必要」から「良好」に移動させ、検索順位を上げることができます。',
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
      'WooCommerceやShopify店舗の商品画像：軽量化によるコンバージョン率向上。',
      'ブログや記事の写真：デザイン変更なしでPageSpeedスコアを改善。',
      'ウェブバナーや広告クリエイティブ：鮮明さを維持したままファイル容量を削減。',
      '建築、写真、またはデザインスタジオのポートフォリオギャラリー。',
      '動画配信サイトやオンライン講座プラットフォームの動画サムネイル。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPGをWebPに変換することは、現在ウェブサイトに適用できる最もシンプルで費用対効果の高い最適化の一つです。このツールを使用すれば、画像がデバイスを離れることなく、数秒で無料で変換できます。より少ないキロバイト、より良いLCP、より速い読み込み速度。これらすべてを、以前と全く同じ見た目で実現できます。',
  },
];


export const content: JpgAWebpLocaleContent = {
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
