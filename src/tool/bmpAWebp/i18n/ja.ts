import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'bmp-to-webp-converter';
const title = 'BMPをWebPに無料で変換';
const description =
  'BMP画像をオフラインでWebPに変換します。巨大なファイルをキロバイト単位に削減。ファイルのアップロードは不要。無料でオフライン、完全にプライベートに使用できます。';

const ui: ImageConverterUI = {
  dragText: 'BMPファイルをドラッグ...',
  convertText: '即座にWebPに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: 'なぜBMPファイルは10倍も重いのですか？WebPにするとどのようなメリットがありますか？',
    answer:
      'BMPは非圧縮のピクセルマップを保存します。WebPは数学的な圧縮を使用して、巨大なBMPを1メガバイト未満にまで縮小しながら、画像を極めて鮮明に保つことができます。',
  },
  {
    question: 'アカウントの登録は必要ですか？',
    answer:
      'メールアドレスは不要です。処理はお使いのPCにインストールされたブラウザのJavaScriptによって行われ、外部への送信は行われないため、素材は隔離された状態で保たれます。',
  },
  {
    question: '同時に多くのファイルをドラッグできますか？',
    answer:
      'はい。お使いのハードウェアが処理に耐えられるなら、50個や100個のファイルをドラッグして一括処理することが可能です。',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: '生ファイルを特定する',
    text: 'ビットマップのコレクションを、転送準備ができたウィンドウに配置してください。',
  },
  {
    name: 'ネイティブバッチ起動',
    text: 'すべてのファイルをデジタルの作業台に投影またはドラッグしてください。',
  },
  {
    name: 'WebPバッチの書き出し',
    text: '結果をクリックすると、マイクロ重量の画像が個別に、または一括ZIPパッケージとして取得されます。',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMPからWebPへのコンバーター：可能な限り最も極端なサイズ削減',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMPをWebPに変換することは、間違いなく画像に対して行える最も劇的な変化です。BMP（ビットマップ）はデジタルエコシステムの中で最も古く、最も重い形式です。各ピクセルを一切圧縮せずに保存するため、最新の形式に比べてファイルサイズが20倍、50倍、あるいは100倍にもなることがあります。Googleによって開発されたWebPは、最新世代の圧縮アルゴリズムを適用し、優れた視覚的品質を維持しながら、サイズを可能な限り最小限に抑えます。',
  },
  {
    type: 'title',
    text: 'なぜBMPは重く、WebPは効率的なのか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP形式は、ディスクスペースが広大で圧縮が優先事項ではなかった80年代のWindows向けに誕生しました。各ピクセルは、削減アルゴリズムなしでそのまま保存されます。1920x1080ピクセルの画像は、内容に関わらずBMPでちょうど5.93 MBになります。これは内部的なスクリーンショットやロスレス編集には理想的ですが、ウェブや現代的なストレージには全く適していません。',
  },
  {
    type: 'paragraph',
    html: 'WebPは、ブロックベースの予測圧縮とDCT変換（デジタルビデオの基盤となるのと同じ技術）を使用して、同じ1920x1080の画像サイズを80 KBから300 KBの間に収めます。これは、元のBMPと比較して95%から99%の削減に相当します。さらに、WebPは透明度のためのアルファチャンネルをサポートし、非可逆圧縮と可逆圧縮の両方を提供、あらゆる用途に対応します。',
  },
  {
    type: 'title',
    text: '比較：クラウドコンバーター vs 当サイトのローカルアーキテクチャ',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウドコンバーター',
        description: '処理のためにBMPファイルをリモートサーバーにアップロードするツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '低速な接続では20 MBのBMPのアップロードに数分かかる',
          '画像は他人のサーバーに保存されたままになる',
          '巨大なBMPファイルを排除するサイズ制限がある',
          '押し付けがましい広告とデータトラッカー',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用してブラウザ上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ネットワーク転送なしでの即時変換',
          '完全なプライバシー - 0バイトが外部に送信される',
          'ファイルごとのサイズ制限なし',
          'インターネット接続なしでも動作',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'ブラウザでの技術的な変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMPファイルをドラッグすると、ブラウザはそれをバイナリBlobとしてRAMメモリに読み込みます。このBlobはJavaScriptの<code>Image</code>要素に読み込まれ、ネイティブの画像エンジンを使用してデコードされます。次に、画像は不可視のHTML5 <code>Canvas</code>要素に描画されます。キャンバスは、画像がピクセル単位で存在する仮想のキャンバスとして機能します。',
  },
  {
    type: 'paragraph',
    html: 'キャンバスに描画された後、MIMEタイプ<code>image/webp</code>と希望する品質レベルを指定して<code>toBlob()</code>メソッドを実行します。ブラウザは内部的にWebP圧縮アルゴリズムを適用し、結果のファイルを含む新しいBlobを生成します。このBlobは、ブラウザがディスクに保存する直接ダウンロードURLに変わります。ネットワーク接続が行われることは一切ありません。',
  },
  {
    type: 'tip',
    title: '可能な限り最大の圧縮率の飛躍',
    html: 'BMPからWebPへの変換は、ファイルサイズを99%削減することができます。20 MBのBMPは、視覚的にほとんど遜色のない品質で、わずか200 KB程度のWebPに変換可能です。これは、標準的な画像形式の間で利用可能な最も効率的な変換です。',
  },
  {
    type: 'title',
    text: 'WebPの使用例と互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'ウェブ公開 - Chrome, Firefox, Safari, Edgeおよびすべての最新ブラウザ。',
      'ソーシャルネットワーク - Instagram, Twitter, FacebookはWebPをネイティブにサポート。',
      'ウェブアプリとPWA - 即座に読み込むための最小サイズ。',
      '効率的なアーカイブ - 旧来のBMPコレクションを置き換えてギガバイト単位で節約。',
      'メールマーケティング - 最新のメールクライアントで高速に読み込める軽量画像。',
    ],
  },
  {
    type: 'title',
    text: '結論：ワンクリックで最もインパクトのある変換',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Windowsから引き継いだ古いBMPファイル、非圧縮のスクリーンショット、または古いツールの画像などがある場合、それらをWebPに変換することは、ストレージとウェブパフォーマンスを最適化するために行える最も効果的なアクションです。当ツールを使用すれば、変換は瞬時に、プライベートに、無制限に行われます。',
  },
];


export const content: BmpAWebpLocaleContent = {
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
