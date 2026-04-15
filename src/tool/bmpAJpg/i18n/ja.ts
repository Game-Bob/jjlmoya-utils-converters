import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'convert-bmp-to-jpg';
const title = 'BMPをJPGにオンラインで変換';
const description =
  'ブラウザ上でBMP画像をJPGに変換します。サイズを劇的に削減。サーバーへのファイルアップロードは不要。無料で100%プライベートに使用できます。';

const ui: ImageConverterUI = {
  dragText: 'BMPファイルをドラッグ...',
  convertText: '即座にJPGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: 'なぜBMPをJPGに変換するのですか？',
    answer:
      'BMP形式はデータを圧縮しないため、ファイルサイズが非常に大きくなります。JPG形式は、ウェブや配布用に優れた視覚的品質を維持しながら、画像を劇的に圧縮します。',
  },
  {
    question: 'ここで画像を変換するのは安全ですか？',
    answer:
      '100%安全です。処理はすべてお使いのウェブブラウザのエンジンを使用してローカルで実行されるため、プライバシーが保証されます。',
  },
  {
    question: 'このツールはどのように機能しますか？',
    answer:
      'BMPファイルをドラッグするだけで、JavaScriptスクリプトがピクセルを読み取ってHTMLキャンバス上に再描画し、即座にJPEGエンコーディングでエクスポートします。',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: 'BMPファイルをアップロード',
    text: '指定されたエリアにBMP形式の画像をドラッグ＆ドロップするか、選択してください。',
  },
  {
    name: '自動処理',
    text: 'ツールが画像をラスタライズし、数ミリ秒でJPG形式の最適な圧縮レベルを適用します。',
  },
  {
    name: '個別または一括ダウンロード',
    text: 'ウェブ用に最適化された新しい画像を、1つずつ、またはZIPファイルとしてダウンロードして取得してください。',
  },
];

const bibliography: BmpAJpgLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format Specification',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'JPEG.org',
    url: 'https://jpeg.org/',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP-JPGコンバーター：巨大なファイルを数秒で縮小',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP（Bitmap）は、コンピュータサイエンスにおいて最も単純な形式です。各ピクセルをそのまま、圧縮なしで保存します。1920x1080解像度のBMPスクリーンショットのサイズは約6MBです。同じ画像をJPGにすると、視覚的には区別がつかない品質で200〜400KB程度になります。この差は圧倒的であり、当ツールを使用すれば、サーバーに何もアップロードすることなく、ブラウザ上で直接数秒でその変換を行うことができます。',
  },
  {
    type: 'title',
    text: 'BMP vs JPG：生データ vs インテリジェント圧縮',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP形式は、Windows 3.1の時代にMicrosoftによって作成されました。その哲学は可能な限りシンプルです。各ピクセルは3バイト（赤、緑、青）を占有し、ピクセルは追加の処理なしで一列に保存されます。この完全な圧縮の欠如により、実際の写真やスクリーンショットの場合、BMPファイルはJPG相当の50〜100倍も大きくなってしまいます。',
  },
  {
    type: 'paragraph',
    html: '対照的に、JPGは離散コサイン変換（DCT）を使用して各8x8ピクセルのブロックを分析し、人間の目がほとんど認識できない高周波情報を排除します。その結果、見た目は同じでありながら、元のサイズの数分の一の重量の画像が得られます。スクリーンショット、スキャナー、またはレガシーなWindowsアプリケーションからのBMPファイルにとって、JPGへの変換は最も効果的な最適化アクションです。',
  },
  {
    type: 'title',
    text: 'アーキテクチャの比較：ローカル vs クラウド',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウドコンバーター',
        description: '処理のためにBMPファイルをリモートサーバーにアップロードするサービス。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '低速な接続では10MBのBMPをアップロードするのに時間がかかる',
          '機密性の高いスクリーンショットや画像がインターネット上を移動する',
          '無料プランでの頻繁なサイズ制限',
          '二重のレイテンシ：変換されたファイルのアップロードとダウンロード',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用してハードウェア上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMPはRAM内で処理され、サーバーには送信されない',
          '待機時間のない即時変換',
          'ファイルごとのサイズ制限なし',
          '完全なプライバシー：0バイトが外部に送信される',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技術的なBMPからJPGへの変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMPファイルをツールにドラッグすると、ブラウザは<code>FileReader</code> APIを使用してそれを読み取り、メモリ内でBlobオブジェクトとしてデコードします。そのBlobは、不可視のHTML5キャンバス上にレンダリングされます。次に、<code>toDataURL(\'image/jpeg\')</code>メソッドがキャンバスデータにJPEG圧縮アルゴリズムを適用し、結果のJPGファイルを生成します。',
  },
  {
    type: 'paragraph',
    html: 'BMPにはアルファチャンネル（透明度のサポート）がないため、背景色との合成を必要とせず、JPGへの変換は直接的です。プロセス全体は、ネットワークを介したデータ送信なしに、数メガバイトのファイルであってもミリ秒単位でお使いのコンピュータのRAM内で行われます。',
  },
  {
    type: 'tip',
    title: 'WindowsのBMPは巨大になる可能性があります',
    html: 'スクリーンショット（WindowsのPrint Screenキー）やPaintなどの古いアプリケーションによって生成されたBMPファイルは、同等のJPGよりも50〜100倍重くなる可能性があります。フルHD解像度の単一のBMPが6MBを超えることもあります。メールで送信したりプラットフォームにアップロードしたりする前に、これらをJPGに変換することは不可欠な習慣です。',
  },
  {
    type: 'title',
    text: '使用例と変換後のJPGの互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'メール送信用のWindowsスクリーンショットの最適化。',
      'レガシーソフトウェア（CAD、古いスキャナー）によってエクスポートされた画像の変換。',
      'ウェブプラットフォームやSNSへの画像アップロードのための軽量化。',
      'Word、PowerPoint、またはPDFドキュメントへの挿入用ファイルの準備。',
      'すべての最新ビューアおよびブラウザとのユニバーサルな互換性。',
    ],
  },
  {
    type: 'title',
    text: '結論：10MBのBMPが500KBのJPGに。同じ画像で。',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMPからJPGへの変換は、画像ファイルの管理において最も報われる最適化作業の1つです。当ツールは、ファイルをアップロードせず、アカウントを作成することもなく、ブラウザ上で直接数秒でその変換を実行します。その結果、ユニバーサルな互換性を持ち、元のBMPより最大97%軽量な高品質JPGが得られます。',
  },
];


export const content: BmpAJpgLocaleContent = {
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
