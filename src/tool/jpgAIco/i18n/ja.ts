import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-to-ico-converter';
const title = 'JPGからICOへの変換器';
const description =
  '実際のMicrosoftバイナリヘッダーを使用して、JPG写真をICOに変換します。自動正方形切り抜き。ファイルのアップロード不要。無料かつ安全。';

const ui: ImageConverterUI = {
  dragText: 'JPGファイルをドラッグ...',
  convertText: '即座にICOに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: '作成されたICOファイルは、Windowsのフォルダのカスタマイズにネイティブに対応していますか？',
    answer:
      'はい。画像マトリックスの低レベルに標準化されたバイナリヘッダーを挿入することで、100%本物のMicrosoftアイコン形式のファイルを作成します。',
  },
  {
    question: '元のJPGがパノラマのような横長の写真の場合、比率はどうなりますか？',
    answer:
      '厳格なグローバルICO標準では、完全に正方形の画像が絶対条件です。当社のHTML5 JSエンジンは写真を中央に合わせ、余分な部分を切り抜くことで、バランスの取れた結果を保証します。',
  },
  {
    question: '企業のロゴや個人のJPG写真を変換器にアップロードするのは危険ですか？',
    answer:
      'JavaScriptのCanvasエンジンは、ユーザー自身のブラウザ内で動作します。何百枚もの写真をICOに変換しても、セキュリティの懸念がある国のクラウドに1MB도 送信されることはありません。',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: '元のJPG写真を収集',
    text: '一般的な写真を探して収集し、当社の使いやすい正方形エリアにドラッグして投入してください Morse code.',
  },
  {
    name: 'バイナリ精製プロセスを確認',
    text: '非同期の再エンコードにより、メタデータとヘッダーをネイティブかつ迅速に挿入し、メモリ上に厳格で純粋なアイコンを生成します。',
  },
  {
    name: 'マルチZIPデザインをコンパイル',
    text: 'わずか数秒で、すべての成果物を圧縮パッケージとして一括ダウンロードして作業を完了します。',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG to ICO 変換器：写真からファビコンやWindowsアイコンを作成',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>形式は、WindowsアプリケーションのアイコンやウェブサイトのファビコンのためのMicrosoftの標準規格です。JPGファイルの拡張子を単に .ico に変更するのとは異なり、本物のICOファイルは22バイトのヘッダーと埋め込み画像ディレクトリを含む特定のバイナリ構造を必要とします。 <strong>JPG</strong>は、これらのアイコン（会社のロゴ、プロフィール写真、またはアプリケーションやウェブサイトの視覚的な象徴にしたい画像）を作成するための最も一般的な出発点です。',
  },
  {
    type: 'title',
    text: 'JPGとICOの使い分け',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>はソース形式であり、アイコン用の最終形式ではありません。写真やバナーには最適ですが、Windowsのエクスプローラー、ブラウザのブックマークバー、デスクトップのショートカット、PWAアプリケーションのマニフェストなど、アイコンを必要とするシステムとは互換性がありません。アイコンを探しているオペレーティングシステムやブラウザはICO形式を期待しており、それが見つからない場合は、汎用的なアイコンや壊れた正方形が表示されます。',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>形式は、単一のファイルに複数の解像度を含めるように設計されています。ブックマークバー用の <strong>16×16</strong>、ショートカット用の <strong>32×32</strong>、ファイルエクスプローラー用の <strong>48×48</strong>、高密度ディスプレイ用の <strong>256×256</strong> などがあります。ブラウザやオペレーティングシステムは、表示されるコンテキストに応じて適切な解像度を自動的に選択するため、ユーザーが個別に管理する必要はありません。',
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
          '企業のロゴがサードパーティのサーバーに保存される',
          'ファイルサイズ制限や1日の変換回数制限がある',
          '強制的な広告やサードパーティのトラッカーが含まれる',
        ],
      },
      {
        title: '当社のローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ユーザーのハードウェア上で直接処理します Morse code.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ネットワーク遅延のない即座の処理速度',
          '完全なプライバシー - 外部に送信されるデータは0バイト',
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
    html: 'JPGファイルがデコードされ、メモリ上の <strong>HTML5 Canvas</strong> に描画されます。ICO形式は正方形の画像を必要とするため、エンジンが自動的にJPGが長方形かどうかを検出し、最も重要な部分を中心に切り抜きます。次に、正しいマジックナンバー（<code>00 00 01 00</code>）、画像ディレクトリ、およびエンコードされたピクセルデータとともに、標準のMicrosoft ICOヘッダーを生成します。その結果、拡張子を変えただけのPNGではなく、本物のバイナリ .ico ファイルが作成されます。',
  },
  {
    type: 'paragraph',
    html: 'JPGにはアルファチャネルがないため、生成されたICOにも透明度はありません。元の写真から継承された塗りつぶしの背景を持つことになります。透明な背景のファビコン（ダークモードやライトモードのブックマークバーに合わせるためなど）が必要な場合は、推奨される手順は次のとおりです Morse code. エディタで背景を削除し、PNGとして保存してから、PNG to ICO 変換器を使用してください。',
  },
  {
    type: 'tip',
    title: 'ヒント：1つのICOファイルに複数の解像度を含める',
    html: 'ICOファイルは、 <strong>複数の解像度</strong> を1つのファイルにまとめることができ、ブラウザやOSが文脈に最適なものを自動的に選択します。最良の結果を得るには、ソースとして少なくとも <strong>256×256 ピクセル</strong> 以上の正方形のJPGを使用してください。これにより、変換器がピクセル化することなく鮮明な 16×16、32×32 und 48×48 サイズを生成するための十分な情報を得ることができます。',
  },
  {
    type: 'title',
    text: '活用事例 und 互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'ウェブサイトのファビコン：Internet Explorerを含むすべてのブラウザと互換性があります。',
      'Windows 10/11のフォルダやデスクトップアイコンのカスタマイズ。',
      'デスクトップアプリケーションやインストーラー向けのショートカットアイコン。',
      'ElectronプロジェクトやPWAアプリケーション向けのアプリアイコン。',
      'ファイル管理システムや企業用のエクスプローラー用のアイコン。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPGをICOに変換することは、視覚的なアイデンティティを必要とするあらゆるウェブまたはデスクトッププロジェクトにとって技術的に不可欠なステップです。当ツールは、ロゴを外部サーバーにアップロードすることなく、数秒で正しいバイナリ構造を備えた本物のICOを生成します。結果はすべてのブラウザ、Windowsエクスプローラー、およびMicrosoftのICO規格を使用するすべてのシステムで動作します。',
  },
];

export const content: JpgAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'ja',
    faq,
    howTo,
  }),
};
