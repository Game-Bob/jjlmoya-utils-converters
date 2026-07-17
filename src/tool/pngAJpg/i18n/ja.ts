import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-to-jpg-converter';
const title = 'PNGをJPGにオンラインで変換';
const description =
  'PNG画像を、お使いのコンピュータ上で即座に高速圧縮JPG形式に変換します。インターネットに写真をアップロードする必要はありません。バッチ処理による最適化が可能です。';

const ui: ImageConverterUI = {
  dragText: 'PNGファイルをドラッグ...',
  convertText: '即座にJPGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    question: 'なぜ当サイトのローカルPNG-JPGコンバーターを選ぶべきなのですか？',
    answer:
      '従来のツールとは異なり、当社のユーティリティはファイルを完全にブラウザ内で処理します。画像が他人のハードドライブに触れることはありません。データの完全な支配権とプライバシーを保証します。',
  },
  {
    question: 'JPGとPNG、どちらが私のケースに適していますか？',
    answer:
      'PNGは、ロゴや透明度を必要とする要素に理想的です。一方、JPGは写真やウェブバナーのゴールドスタンダードであり、ファイルサイズを大幅に削減できるため、サイトの読み込み速度を劇的に向上させます。',
  },
  {
    question: 'アップロードせずにどのように技術的な変換を行っているのですか？',
    answer:
      'HTML5のCanvas機能を活用しています。ブラウザが不可視の仮想キャンバス上に画像を再現し、透明部分を白で塗りつぶしてから、即座にダウンロード可能なバイトストリームを生成します。',
  },
  {
    question: '機密文書に使用しても安全ですか？',
    answer:
      'はい、銀行、医療、法律などの機密性を要する分野のプロフェッショナルにとって最も安全な選択肢です。RAMのみを使用する「ブラックボックス」として動作するため、処理内容はタブを閉じると同時に消去され、サードパーティのクラウドへの流出を防ぎます。',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: 'ファイルの選択',
    text: 'フォルダ内にPNGファイルを用意し、処理エリアにまとめてドラッグするか、エクスプローラーを使用して選択してください。',
  },
  {
    name: '即時処理',
    text: 'ブラウザがローカルでサイズを最適化する間、各ファイルのステータスが「完了」に変わることを確認してください。',
  },
  {
    name: '最適化されたダウンロード',
    text: '新しいJPGを一つずつ保存するか、「すべてダウンロード」ボタンを使用して、すべての画像を含む圧縮ZIPファイルを取得してください。',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG-JPGコンバーター：画像最適化のための決定版ガイド',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'デジタルデザインとウェブ開発の世界では、効率こそがすべてです。PNG（Portable Network Graphics）形式は、透明度を維持できることや可逆圧縮であることから愛されていますが、大きな弱点があります。それはファイルサイズです。ウェブサイトの表示を高速化したい場合や、メールを即座に送信したい場合、PNGからJPGへの変更は最も賢明な技術的判断です。',
  },
  {
    type: 'title',
    text: 'JPGかPNGか？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'どちらの形式が優れているということはありません。ニーズに合わせた使い分けが重要です。PNGは可逆形式であり、インターフェースのモックアップや小さなテキストを含むロゴ、透明背景が必要なビジュアル要素に最適です。しかし、この忠実さには代償が伴います。圧縮されたJPGに比べて、ファイルサイズが5倍から10倍重くなることもあります。',
  },
  {
    type: 'paragraph',
    html: '一方、JPG（Joint Photographic Experts Group）は、人間の目にはほとんど認識できない情報を削除する離散化アルゴリズムを使用しており、極めて軽量なファイルサイズを実現します。写真、広告バナー、SNSにとってのゴールドスタンダードです。PNGをJPGに変換することは、幾何学的な忠実さをネットワーク速度と交換することを意味します。',
  },
  {
    type: 'title',
    text: 'アーキテクチャの比較：ローカル対クラウド',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウドコンバーター',
        description: '写真をリモートサーバーにアップロードする従来のツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'ネットワーク遅延（アップロード／ダウンロード）',
          '個人データ流出のリスク',
          'ファイルごとのサイズ制限',
          '広告とトラッカー',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーにより、デバイス上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ネットワークを介さない即時処理速度',
          'プライバシーの保証（送信データ0バイト）',
          'ファイルあたりの容量制限なし',
          'プロフェッショナルでクリーンなインターフェース',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技術的な変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'サーバーに送信せずに画像を変換できる理由を不思議に思うかもしれません。その魔法は、現代のブラウザの能力にあります。ファイルを選択すると、RAM内のみに存在するBlobを生成します。そのBlobが、不可視のHTML5 Canvas要素上に描画されます。',
  },
  {
    type: 'paragraph',
    html: 'JPGは透明度をサポートしていないため、アルゴリズムがPNGを「描画」する前に背景を白の塗りつぶしで埋めます。画像が合成されると、ネイティブのエクスポートメソッドを実行し、コンピュータが直接ダウンロードするバイトストリームを生成します。',
  },
  {
    type: 'tip',
    title: 'SEOのヒント：理想的なファイルサイズ',
    html: 'Googleは表示の遅いウェブサイトに厳しい評価を与えます。2MBのヘッダー画像（PNG）のせいでLargest Contentful Paint（LCP）が高くなっている場合、それを200KBのJPGに変換することで、見た目を変えずにPageSpeedの評価を即座に改善できます。',
  },
  {
    type: 'title',
    text: '企業・プロフェッショナルのためのセキュリティ',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '金融、医療、法律などの機密性の高い分野で仕事をしている場合、ファイルをオンラインコンバーターにアップロードすることはセキュリティ違反となります。当ツールは「ブラックボックス」として機能し、内部で起こることはすべてお客様のRAMに留まります。機密文書を扱う唯一の安全な方法です。',
  },
  {
    type: 'title',
    text: '結果の互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Windows、macOS、モバイルデバイスの画像ビューア。',
      'ソーシャルネットワーク（Instagram、LinkedInなど）。',
      'オフィスツール（Word、PowerPoint）。',
      'コンテンツ管理システム（WordPress、Shopify）。',
    ],
  },
  {
    type: 'title',
    text: '結論：プロのように最適化する',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'このコンバーターは、単なる一つのページではありません。あなたの生活をより快適にするために設計されたエンジニアリングの粋です。開発者であれ一般ユーザーであれ、容量を節約しデータを安全に保つための決定的な解決策がここにあります。',
  },
];


export const content: PngAJpgLocaleContent = {
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
