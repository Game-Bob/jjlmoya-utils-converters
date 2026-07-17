import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-to-webp-converter';
const title = 'AVIFをWebPにオンラインで変換';
const description =
  '互換性を高めるためにAVIF画像をWebPに変換します。サーバーを介さないローカル処理。無料でプライベート、かつ無制限に使用できます。';

const ui: ImageConverterUI = {
  dragText: 'AVIFファイルをドラッグ...',
  convertText: '即座にWebPに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: 'WebPへの変換と他の形式との実際の違いは何ですか？',
    answer:
      'WebPは両方の長所を兼ね備えています。JPGのように驚異的な圧縮を実現しながら、PNGのようにきれいな透明度を保持する能力を備えています。AVIFをWebPに変更することで、すべての利点を保ちながらウェブへの互換性を最大化できます。',
  },
  {
    question: 'サーバーなしで、どのようにして素早く変更できるのですか？',
    answer:
      '内蔵のデコードモジュールとJavaScript HTML5 Imageオブジェクトを活用しています。これにより、ローカルメモリ内でAVIFを読み込み、最適化されたWebPファイルを記録的な速さで抽出できます。',
  },
  {
    question: '現在、WebP形式には完全な互換性がありますか？',
    answer:
      '誕生したばかりのAVIFとは異なり、WebP形式はChrome、Firefox、Safariなどのブラウザ間で非常に幅広いサポートを受けています。',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: '写真ファイルを挿入',
    text: 'すべてのAVIF形式の選択内容を当サイトのキャンバスに移動させてください。',
  },
  {
    name: 'アルゴリズムによるバイト変換',
    text: '当サイトのエンジンは、何もアップロードせずにアルゴリズムを処理し、圧縮されたWebPに基づいた正確な反復を作成します。',
  },
  {
    name: '準備が整ったダウンロードを収集',
    text: 'パネルを押して、ZIP形式または個別のファイルで受け取り、直接公開してください。',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF-WebPコンバーター：ウェブ向けのモダンで安全な選択肢',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIFは、現在利用可能な最も高度な画像形式です。WebPよりも小さく、JPGよりも小さく、優れた視覚品質を備えています。しかし、その普及状況は一様ではありません。Safariは2024年までそれをサポートせず、多くの古いモバイルデバイスはそれを認識しません。対照的に、WebPは95%以上の世界的なサポートを受けており、長年最新のウェブ標準として確立されています。互換性を損なうことなく最新性を必要とする場合、AVIFをWebPに変換することは実用的な決定です。',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP：最新 vs 最も安全',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIFは、現在利用可能な最高の圧縮を提供します。同じ品質で通常WebPよりも20〜30%小さくなります。AV1に基づくそのテクノロジーは、業界で最もモダンなものです。しかし、AVIFのサポートにはまだ不十分な点があります。古いSafariバージョン、一部の古いAndroidブラウザ、および特定のデスクトップ画像プレーヤーでは認識されません。幅広い多様なユーザーを抱えるウェブ制作にとって、これはリスクを伴います。',
  },
  {
    type: 'paragraph',
    html: 'WebPのサポート履歴ははるかに強固です。Chromeは2010年に採用し、FirefoxとEdgeがそれに続き、Safariは2020年に組み込みました。ブラウザにおける世界的なカバー率が95%を超えるWebPは、代替形式を提供したくないあらゆるウェブサイトにとって安全な選択です。透明度、非可逆および可逆圧縮をサポートし、JPGやPNGよりもはるかに小さなファイルを生成します。',
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
        description: '処理のためにAVIFファイルをリモートサーバーにアップロードするツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'プライベート画像が外部サーバーを通過する',
          'ワークフローを遅らせるネットワーク遅延が発生する',
          '無料変換あたりのファイル数に制限がある',
          '変更される可能性のあるサードパーティサービスに依存する',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーとCanvas APIを使用してブラウザで直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '完全なプライバシー：0バイトがデバイスから外部へ出ません',
          'ネットワーク依存のない即時の速度',
          'ファイルサイズやファイル数に制限なし',
          'インターネット接続なしで動作可能',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'ブラウザにおける技術的な変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome、Firefox、およびEdgeには、ネイティブのAVIFデコーダーが含まれています。ファイルを読み込むと、ブラウザの画像エンジンがアルファチャンネル情報を保持しながらRAM内でデコードします。画像は、透明度を正しく保持する2Dコンテキストを使用して、不可視のHTML5 <code>Canvas</code>上に描画されます。',
  },
  {
    type: 'paragraph',
    html: 'エクスポートは <code>toBlob(\'image/webp\', quality)</code> で行われます。ブラウザは内部でWebP圧縮アルゴリズムを適用し、元の画像にアルファチャンネルがある場合はそれを含むBlobを生成します。このBlobは、直接ダウンロードリンクに変換されます。プロセス全体は、外部サーバーとの通信なしで数マイクロ秒で完了します。',
  },
  {
    type: 'tip',
    title: 'WebP：モダンな開発者の実用的な選択',
    html: 'WebPには95%以上のブラウザサポートがあります。AVIFは成長していますが、まだその数値には達していません。アダプティブ形式検出が行われていない本番サイトにとって、WebPはほぼすべてのユーザーをカバーする安全な選択です。AVIFをWebPに変換して、自信を持って最新の画像を提供しましょう。',
  },
  {
    type: 'title',
    text: '使用例：AVIFよりもWebPを選択すべき時',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '2020年以降のブラウザのサポートをポリフィルなしで必要とするウェブサイト。',
      'WebPは受け入れるがAVIFは受け入れないCDNおよび画像配信システム。',
      'AVIFをサポートしていない可能性があるWebViewを備えたハイブリッドモバイルアプリ。',
      'WebPがAVIFよりもサポートが高い最新のHTMLメール。',
      'WebP画像サポートが確立されているCMSプラットフォームおよびEコマース。',
    ],
  },
  {
    type: 'title',
    text: '結論：互換性が保証された最新性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIFは画像圧縮の最先端ですが、WebPはモダンなウェブエコシステムにおいて信頼できる普遍的な選択肢です。当ツールを使用すれば、最新のものから最もサポートされているものへ一瞬で変換できます。サーバーへ何もアップロードせず、完全なプライバシーを保ち、サイズ制限もありません。',
  },
];


export const content: AvifAWebpLocaleContent = {
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
