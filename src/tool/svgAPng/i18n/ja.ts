import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-to-png-converter';
const title = 'SVGをPNGにオンラインで無料で変換しましょう';
const description =
  'ブラウザでSVGベクトルファイルをPNGに変換します。2倍スケールのHD出力。透明度を維持。ファイルのアップロード不要。無料かつ100%プライベート。';

const ui: ImageConverterUI = {
  dragText: 'SVGファイルをドラッグ...',
  convertText: '即座にPNGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: 'なぜSVGファイルをPNGに変換する必要があるのですか？',
    answer:
      'SVGはベクトルベースでロゴには理想的ですが、ベクトルをサポートしていないアプリケーションで使用したり、メッセージングアプリやソーシャルメディアで共有したりするために、ラスタライズされたPNG形式が必要な場合があります。',
  },
  {
    question: '出力サイズを選択できますか？',
    answer:
      '現在、出力されるPNGがRetinaや4K画面に適した鮮明なものになるよう、元のSVGのスケールを2倍にして出力しています。',
  },
  {
    question: 'SVGの透明度は維持されますか？',
    answer:
      'はい、生成されたPNGは元のSVGのアルファチャネルを保持し、すべての透明な背景をそのまま維持します。',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: 'SVGファイルを挿入',
    text: 'SVGファイルをドロップするか、上部のエリアに直接ドラッグしてください。',
  },
  {
    name: 'HD PNGの生成',
    text: '数ミリ秒以内に、当社のローカルエンジンが各ベクトルを透明PNG形式のHDピクセルレイヤーとして再構築します。',
  },
  {
    name: 'ファイルをダウンロード',
    text: '生成されたPNGを個別に、またはZIPパッケージとして保存してください。',
  },
];

const bibliography: SvgAPngLocaleContent['bibliography'] = [
  {
    name: 'W3C SVG仕様',
    url: 'https://www.w3.org/TR/SVG/',
  },
  {
    name: 'Mozilla: SVGチュートリアル',
    url: 'https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG to PNG 変換機：無限のベクトルから普遍的なラスタへ',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (Scalable Vector Graphics) はウェブデザインにとって完璧な選択肢です：無限にスケーラブルで軽量、そしてあらゆるコードエディタで編集可能です。しかし、そのロゴやアイコンをモバイルアプリで使用したり、ソーシャルメディアで共有したり、PowerPointプレゼンテーションに挿入したりしようとすると壁にぶつかります。これらのプラットフォームの多くはSVGをサポートしていません。 <strong>PNG</strong> 形式は普遍的なソリューションです：ラスタライズされており、アルファチャネルを持ち、絶対にあらゆる文脈で互換性があります。',
  },
  {
    type: 'title',
    text: 'SVG vs PNG：ウェブのためのベクトル、世界のためのラスタ',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVGは画像を数学的な命令として保存します。ベジェ曲線、グラデーション、多角形などがその例です。これは、同じファイルが16pxでも16,000pxでも完璧に見えることを意味します。ウェブコード、CSSアニメーション、および品質を損なうことなくさまざまな画面解像度に適応する必要があるあらゆる要素にとって理想的な形式です。',
  },
  {
    type: 'paragraph',
    html: 'PNGは、各ピクセルの色と透明度の情報を含むピクセルグリッドとして画像を保存します。 <strong>可逆</strong> (lossless) 形式であり、品質が完全に保持されます。一度SVGがPNGにラスタライズされると、解像度は固定されます。そのため、適切なエクスポートサイズを選択することが重要です。当社のツールは、Retinaや4K画面での鮮明さを保証するために、2倍のスケール (2x) でレンダリングします。',
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
          'ユーザーのSVGコードが外部サーバーへ送信される',
          '品質が一定しないリモートレンダリング',
          'アップロードと処理の待機時間',
          'SVGファイルサイズに関する制限',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ユーザーのハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'SVGデータがブラウザを離れることはありません',
          '最大限の再現性を実現するブラウザネイティブエンジンのレンダリング',
          '高密度画面用の2倍解像度PNG',
          '完全なアルファチャネルにより透明度を維持',
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
    html: 'プロセスは、SVGファイルをJavaScriptの <strong>Image</strong> 要素に読み込むことから始まります。ブラウザエンジンがベクトルのXMLを解析してレンダリングすると、結果の画像が元のSVGサイズの2倍（2倍スケール）の <strong>HTML5 Canvas</strong> 上に描画されます。これにより、高解像度画面に最適な、各次元で2倍のピクセルを持つPNGが生成されます。',
  },
  {
    type: 'paragraph',
    html: 'JPGへの変換とは異なり、PNGにエクスポートする場合、キャンバスは完全なアルファチャネルを保持します。元のSVGの透明な領域は、生成されたPNGで完全に透明なピクセルになります。白い背景の塗りつぶしはありません。エクスポートには、可逆圧縮の <code>toDataURL(\'image/png\')</code> メソッドを使用します。',
  },
  {
    type: 'tip',
    title: 'ラスタライズする前のアドバイス',
    html: 'PNGのエクスポートサイズは慎重に選択してください。SVGをラスタライズするのは一方向のプロセスです。生成されたPNGからベクトルを復元することはできません。常に元のSVGをマスターソースとして保持し、将来必要になる可能性のある最高の解像度でPNGを生成してください。',
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
      'PowerPointやGoogleスライドでのプレゼン用にベクトルロゴをエクスポート。',
      'iOS、Android、またはProgressive Web Apps用のPNGアイコンの作成。',
      'Instagram、LinkedIn、またはその他のソーシャルメディアでSVGデザインを共有。',
      'Word文書やPDFにベクトルイラストを挿入。',
      'CMSプレビュー用にSVGグラフィックのPNGサムネイルを生成。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVGはベクトルの言語であり、PNGはデジタルの世界の残りの部分へのパスポートです。このツールは、デザインの1バイトも外部サーバーに送ることなく、ブラウザで直接、透明度を維持したままSVGを2倍の解像度でラスタライズします。',
  },
];


export const content: SvgAPngLocaleContent = {
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
