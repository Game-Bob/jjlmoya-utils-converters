import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-to-jpg-converter';
const title = 'WebPをJPGにオンラインで無料で変換しましょう';
const description =
  'ファイルをアップロードせずにWebP画像をJPGに変換します。100%プライベートなローカル処理。透明な背景は自動的に白に置き換えられます。';

const ui: ImageConverterUI = {
  dragText: 'WebPファイルをドラッグ...',
  convertText: '即座にJPGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: 'プライベートな画像を安全にアップロードできますか？',
    answer:
      'はい。アップロードサーバーは存在しません。ブラウザがコンピュータ上でWebPを処理し、ダウンロード用のJPGを生成します。他の誰もそれを見ることはできません。',
  },
  {
    question: 'WebPの背景が透明な場合、どうなりますか？',
    answer:
      'JPGは透明度をサポートしていないため、変換機は透明な領域を自動的に純白の背景で塗りつぶします。',
  },
  {
    question: '変換回数やファイルサイズに制限はありますか？',
    answer:
      '制限は設けていません。コンピュータに十分な処理能力とRAMがある限り、何百枚もの画像を変換できます。',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: 'ファイルをドラッグ',
    text: '現代的なWebPファイルをアップロードエリアにドロップするか、対話型のファイルブラウザを使用して選択してください。',
  },
  {
    name: 'ローカル変換',
    text: 'ローカルエンジンが背景を適用し、各ピクセルを普遍的なJPG形式に解釈するのを見守ってください。',
  },
  {
    name: '結果を確認',
    text: '個別にダウンロードするか、ZIPパッケージを使用してすべての新しい写真を1つにまとめてください。',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to JPG 変換機：プライバシーを損なうことのない普遍的な互換性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> はGoogleが効率性に賭けた画像形式です。従来のJPGに匹敵する品質で、より軽量な画像を実現します。しかし、その互換性は現実の世界では依然として課題です。Outlookなどのメールクライアント、レガシーなデザインソフト、メッセージングアプリ、企業のワークフローは、依然として至る所にある <strong>JPG</strong> に依存しています。WebPをJPGに変換することは、モダンなウェブと現実の世界をつなぐ架け橋となります。',
  },
  {
    type: 'title',
    text: 'WebP vs JPG：各形式をいつ使うべきか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebPは、ブラウザの互換性が保証されているChrome、Edge、Firefox上のモダンなウェブサイトなどの管理された環境で威力を発揮します。その優れた圧縮率は、同等のJPGと比較してファイル容量を25〜35%削減し、読み込み時間とCore Web Vitalsの指標を改善します。閲覧環境を制御できる場合に理想的な形式です。',
  },
  {
    type: 'paragraph',
    html: '一方、JPGは、メールの添付ファイル、PowerPointプレゼンテーション、Word文書、家庭用プリンター、古い編集アプリケーション、ソーシャルメディアプラットフォームなど、<em>例外なくあらゆる状況</em>で動作します。技術的な摩擦なしに誰かに画像を開いてもらう必要がある場合、JPGが正解です。',
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
          '写真はインターネットを通じて未知のサーバーへと送られる',
          'アップロードとリモート処理のための待ち時間が発生する',
          'ファイルサイズや無料変換回数に関する1日の制限がある',
          '第三者のサーバーにデータが保持される実質的なリスクがある',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ユーザーのハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '送信バイト数ゼロ：すべてがRAM内で発生する',
          'インターネット接続に依存しない即時のスピード',
          'ファイルサイズやファイル数に制限なし',
          '個人、医療、または企業用途の写真に最適',
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
    html: 'WebPファイルをツールにドラッグすると、ブラウザは内部のレンダリングエンジンを使用してネイティブにデコードします。その後、画像は見えない <strong>HTML5 Canvas</strong> 要素に描画されます。JPGは透明度をサポートしていないため、アルゴリズムは画像を上に合成する前に、キャンバスを純白の背景で事前に塗りつぶします。',
  },
  {
    type: 'paragraph',
    html: '最終ステップはエクスポートです。Canvasメソッドの <code>toDataURL(\'image/jpeg\')</code> は、キャンバスのピクセルを高画質な圧縮JPGバイトストリームに変換します。このストリームはネットワーク通信なしでブラウザのダウンロードシステムに直接配信されます。全工程は、マルチメガピクセルの画像であっても数ミリ秒で完了します。',
  },
  {
    type: 'tip',
    title: '互換性のヒント',
    html: '技術に詳しくないユーザーと写真を共有したり、メールで送信したりする場合は、常にJPGを使用してください。あらゆるメールクライアント、OS、デバイスにおいて互換性の問題は皆無であり、例外や不快な驚きもありません。',
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
      'Outlook、Gmail、またはApple Mailのメールに写真を添付。',
      'Word文書、Excel、またはPowerPointプレゼンテーションに画像を挿入。',
      'WebPを拒否するソーシャルメディアプラットフォームへの投稿。',
      '形式サポートが制限されているWhatsAppやメッセージングアプリ経由での共有。',
      'JPGまたはPNGのみを受け入れる印刷サービスでの写真印刷。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebPはウェブ画像の未来ですが、JPGは依然として普遍的な互換性の王様です。このツールを使えば、何もインストールすることなく、完全にプライベートに、わずか数秒でその架け橋を渡ることができます。画像がデバイスから離れることはありません。',
  },
];


export const content: WebpAJpgLocaleContent = {
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
