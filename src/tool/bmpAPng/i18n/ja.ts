import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-to-png-converter';
const title = 'BMPからPNGへのコンバーター';
const description =
  'BMP画像を品質を損なうことなくPNGに変換します。ノイズのないモダンな圧縮。ファイルのアップロードは不要。無料で100%プライベートに使用できます。';

const ui: ImageConverterUI = {
  dragText: 'BMPファイルをドラッグ...',
  convertText: '即座にPNGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'BMPとPNGの主な違いは何ですか？',
    answer:
      'BMPもPNGもロスレス（無損失）形式です。違いは最適化にあります。PNGは現代的な圧縮アルゴリズムを使用して、BMPよりも5倍から10倍少ないメモリ容量で同じ画像を保存できます。',
  },
  {
    question: '変換は本当にプライベートですか？',
    answer:
      'はい。すべての画像処理はお使いのコンピュータで行われます。ローカルでの転送中にファイルにアクセスできる人は誰もいません。',
  },
  {
    question: 'この場合、なぜJPEGではなくPNGなのですか？',
    answer:
      'BMPファイルをお持ちの場合、その画像には正確な色が含まれているからです。BMPを非可逆標準のJPGに変換すると、鮮明な色が損なわれてしまいます。PNGはその忠実度を保護します。',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: '写真を読み込む',
    text: 'BMPソースファイルを、ウェブ要素のドロップゾーンへ安心して移動させてください。',
  },
  {
    name: 'ネットワーク送信なしで変換',
    text: 'HTML5のJavaScriptによってローカルで行われるクリーンな処理を、わずか1秒で実感してください。',
  },
  {
    name: '純粋なPNGを入手',
    text: 'PNG形式の複製を個別に、または圧縮パッケージとしてダウンロードしてください。',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMPからPNGへのコンバーター：BMP形式のロスレスな置き換え',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMPは非圧縮形式であり、PNGと比較して技術的な利点がないまま、膨大なスペースを占有します。どちらもロスレス形式であり、各ピクセルを絶対的な正確さで保存します。しかし、PNGはDeflateアルゴリズムによるロスレス圧縮を追加し、視覚情報を1ビットも犠牲にすることなく、ファイルサイズを3分の1から5分の1に削減します。PNGは、本質的にBMPが常に目指していた姿と言えます。',
  },
  {
    type: 'title',
    text: 'BMP vs PNG：同じ品質、劇的に異なるサイズ',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMPとPNGの根本的な違いは画像品質ではなく（どちらもロスレスです）、ストレージの効率にあります。BMPはピクセルを生のまま保存します。圧縮なし、最適化なし、スペースへの配慮なしです。対照的に、PNGは繰り返されるピクセルパターンを分析し、ZIPで使用されているのと同じアルゴリズムであるDeflateを使用してコンパクトにエンコードします。',
  },
  {
    type: 'paragraph',
    html: '優れた圧縮性能に加えて、PNGはBMPにはなかった機能を備えています。それは、透明度のための完全なアルファチャンネルです。スクリーンショット、インターフェイスグラフィックス、ロゴ、技術図面など、これらすべての種類の画像は、色値を正確に維持しながらファイルサイズを元の何分の一かに削減できる、PNGへの変換から大きな恩恵を受けます。',
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
        description: '第三者のサーバーでBMPファイルを処理するサービス。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '作業画像がインターネット上を移動する',
          '待機時間はBMPのサイズに比例する',
          '無料プランでのサイズ制限',
          'ファイルの分析や保持のリスク',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用してハードウェア上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMPはローカルで処理され、デバイスの外に出ることはない',
          'ミリ秒単位の即時変換',
          'サイズ制限やファイル数の制限なし',
          '完全なプライバシー：0バイトが外部に送信される',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技術的なBMPからPNGへのローカル変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'プロセスにはHTML5のCanvas APIが使用されます。BMPファイルはブラウザの<code>FileReader</code> APIで読み取られ、メモリ内でBlobとしてデコードされます。そのBlobは、不可視のHTML5キャンバス上に描画されます。次に、<code>toDataURL(\'image/png\')</code>メソッドがブラウザ固有のPNG圧縮アルゴリズムを適用し、結果のファイルを生成します。',
  },
  {
    type: 'paragraph',
    html: 'JPGへの変換とは異なり、PNGへの変換は完全にロスレスです。元のBMPの各色値は、生成されるPNGで正確に保持されます。ノイズの発生、エッジのぼやけ、情報の損失はありません。最終的なファイルは視覚的にBMPと同一ですが、ディスク上の占有スペースは3分の1から5分の1になります。',
  },
  {
    type: 'paragraph',
    html: 'BMPを書き出す古いソフトウェア（産業機械、制御システム、医療診断ソフトウェアなど）を使用している場合、PNGへの変換は最善の決断です。PNGは、すべての最新プログラムと完全に互換性があり、完璧な色の正確さを維持し、最大5倍少ないスペースしか占有しません。これは、最もシンプルで安全な移行方法です。',
  },
  {
    type: 'title',
    text: '使用例と変換後のPNGの互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '正確な色が保持されたスクリーンショットやインターフェイスグラフィックス。',
      '技術文書の画像やソフトウェアの図表。',
      'CAD、産業システム、およびレガシーソフトウェアからのエクスポート。',
      '透明度が追加されたロゴやビジュアルアイデンティティ要素。',
      'Adobe Photoshop、GIMP、Figma、およびすべての最新エディタと互換性があります。',
    ],
  },
  {
    type: 'title',
    text: '結論：PNGはBMPが常にそうあるべきだった姿です',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMPからPNGへの変換は、画像ファイルの最も自然な近代化です。同じロスレス品質、高い互換性、透明度のサポート、そして3分の1から5分の1の軽量化。当ツールは、サーバーにファイルを一切アップロードすることなく、ブラウザ上で直接数ミリ秒でこの変換を実行します。',
  },
];


export const content: BmpAPngLocaleContent = {
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
