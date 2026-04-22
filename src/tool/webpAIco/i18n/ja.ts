import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-to-ico-converter';
const title = 'WebPをICOに変換标记';
const description =
  'WebP画像を透明度を維持した公式ICOファイルに変換します。ファイルのアップロード不要。本物のMicrosoftバイナリヘッダを生成。無料かつプライベート。';

const ui: ImageConverterUI = {
  dragText: 'WebPファイルをドラッグ...',
  convertText: '即座にICOに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中': '参考文献',
  faqTitle: 'よくある質問',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: 'WebPのステッカーデザインを公式なウェブ用ファビコン(Favicon) ICOに変換できますか？',
    answer:
      'その通りです。ファビコンは、極めて高い普遍的な互換性を確保するために、現在でも古典的なMicrosoft ICO拡張子を必要とします。このツールはバイナリヘッダを注入し、100%正当なアイコンを構築します。',
  },
  {
    question: '大量の企業用アイコンを作成する際、オンラインの待ち時間に耐える必要がありますか？',
    answer:
      '全くありません。当社の変換機はJavaScriptを読み込み、あらゆるアップロードネットワークを遮断します。デバイス自体のCPUが、100枚以上の写真を非同期で処理します。',
  },
  {
    question: '生成されたICOは、元のWebPの透明度를 서포트합니까?',
    answer:
      'はい。当社のエンジンは、32ビットをフルサポートするHTML5 canvas APIで内部的に動作しており、すべての透明な領域がアイコンファイルにきれいに転送されます标记。',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: 'ローカルのWebPステッカーをすべてドラッグしてください',
    text: 'ウェブの容量制限を気にすることなく、大量の写真を一度に移動できます。',
  },
  {
    name: '論理的な非同期翻訳と直接組み立て',
    text: 'メモリがフレームからバイト単位でブロックを処理する間、進行状況バーと要素が自動的に埋まっていくのを確認してください。',
  },
  {
    name: 'システムおよびウェブ開発用のパッケージを持ち帰りましょう',
    text: '統合ファイルの巨大なダウンロードボタンをクリックするか、1つだけ必要な場合は個別にダウンロードしてください。',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP to ICO 変換機：モダンなアセットから完璧なファビコンを作成',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'モダンなウェブデザインのワークフローでは、最適化されたロゴ、UIアイコン、ブランド要素などのアセットが <strong>WebP</strong> 形式で生成されます。しかし、サイトの <strong>ファビコン</strong> やWindowsデスクトップアプリケーション用のアイコンを設定する必要がある場合、求められる形式は依然として <strong>ICO</strong> です。WebPをICOに変換することで、元のソースを失うことなく最高品質のアセットを再利用できます。',
  },
  {
    type: 'title',
    text: 'WebP vs ICO：目的が異なる形式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebPは、写真、イラスト、ウェブUIアイコンに優れた汎用画像形式です。効率的な圧縮により、ページ読み込み速度の向上に理想的です。しかし、オペレーティングシステムやブラウザがアプリケーションアイコンやファビコンを認識して表示するために必要な、特定のバイナリ構造が欠けています。',
  },
  {
    type: 'paragraph',
    html: 'ICOは、アイコンのために特別に設計されたMicrosoftのコンテナ形式です。単一のファイルに複数の解像度を保存でき、32ビットのアルファチャネルを通じて完全な透明度をサポートします。ブラウザは慣例的に <code>favicon.ico</code> ファイルを探し、この形式は標準的な画面とRetinaおよび4Kディスプレイの両方でアイコンが鮮明に見えることを保証します标记。',
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
          '貴社のロゴデータがサードパーティのサーバーへ送信される',
          'すべての変換においてインターネット接続が必須',
          'サーバーの仕様により出力品質が変動する',
          '1日の変換回数に制限がある',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ロゴデータがブラウザを離れることはありません',
          'Microsoft標準に準拠したICOバイナリヘッダの生成',
          '32ビットの透明度が完全に保持される',
          'アイコンセット全体の一括変換をサポート',
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
    html: 'ブラウザはWebPファイルをネイティブにデコードし、元のアルファチャネルを維持しながら32ビットの色深度を持つ <strong>HTML5 Canvas</strong> に描画します。次に、JavaScriptエンジンが <code>getImageData()</code> メソッドを介してピクセルデータを抽出し、Microsoft標準で規定されているICONDIRおよびICONDIRENTRYヘッダを使用してICOバイナリ構造を構築します。',
  },
  {
    type: 'paragraph',
    html: '結果は、単なるファイル名の変更ではなく、正当なICOファイルです。ピクセルデータは、Windows、macOS, およびすべての最新ブラウザがファビコンやアプリケーションアイコンを読み込む際に期待する正しい構造でパッキングされます。',
  },
  {
    type: 'tip',
    title: '鮮明なファビコンのためのヒント',
    html: '常に利用可能な最高解像度のソースからICOを生成してください。512×512以上のWebPは、低解像度のアイコンがぼやけて見えるRetinaや4Kディスプレイでも、完璧に鮮明なファビコンを作成します标记。',
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
      'あらゆるウェブサイトやウェブアプリ用のfavicon.icoファイルの作成。',
      'Windowsソフトウェアインストーラ用のアプリケーションアイコンの生成。',
      'Electronアプリや同様のフレームワーク用のデスクトップアイコンの制作。',
      'ChromeおよびFirefoxブラウザ拡張機能用のアイコンセットの制作。',
      'ブランドのWebPロゴを企業向けアプリケーション用アイコンに変換。',
    ],
  },
  {
    type: 'title',
    text: '結論标记',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'モダンなデザインワークフローはWebPを生み出しますが、アプリケーションのエコシステムは依然としてICOを要求します。このツールは、ブランド資産がブラウザを離れることなく、正しいバイナリ構造と損なわれていない透明度を持つアイコンを生成し、わずか数秒でそのギャップを埋めます标记。',
  },
];

export const content: WebpAIcoLocaleContent = {
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
