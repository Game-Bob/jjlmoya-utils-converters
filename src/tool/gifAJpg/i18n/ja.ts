import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'convert-gif-to-jpg';
const title = 'GIFをJPGにオンラインで変換';
const description =
  'GIFファイルから最初のフレームを抽出してJPGに変換します。サーバーを介さず、ブラウザ内でローカル処理を行います。無料で無制限に使用できます。';

const ui: ImageConverterUI = {
  dragText: 'GIFファイルをドラッグ...',
  convertText: '即座にJPGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: 'JPGに変換するとアニメーションはどうなりますか？',
    answer:
      'JPG形式は静止画専用であり、複数のフレームをサポートしていません。当コンバーターは、GIFシーケンスの最初の画像（フレーム）のみを抽出します。',
  },
  {
    question: '特殊効果や透明な背景は失われますか？',
    answer:
      'はい、これはJPG標準の仕様です。透明な背景を持つGIFを読み込んだ場合、色の崩れを防ぐために、背景に自動的に白の塗りつぶしレイヤーを挿入します。',
  },
  {
    question: 'コンテンツが保存されることなく、GIFからJPGを抽出できますか？',
    answer:
      'もちろんです。このツールはHTML5のCanvasを利用したウェブアプリです。すべてのデコード処理は、お客様自身のデバイスのプロセッサで実行されます。',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: '動く重いファイルをドラッグ',
    text: 'フォルダから変換したいGIFを選択し、処理ボックスへドラッグ＆ドロップしてください。',
  },
  {
    name: '最初のフレームをクリーンに抽出',
    text: '一瞬でアニメーションを抽出し、サーバーを経由せずに白背景のJPGを作成します。',
  },
  {
    name: 'ZIPパッケージでまとめて取得',
    text: '個別ダウンロード、または大量のファイルを処理した場合はZIP形式でまとめて取得してください。',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Joint Photographic Experts Group 技術仕様',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIFからJPGへのコンバーター：フレームを高品質な画像として抽出',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIFファイルは何十年もの間、インターネット上の短いアニメーションの世界を支配してきました。しかし、そのアニメーションという性質上、サムネイルやSNSのプレビュー、文書用の画像としては不便な場合があります。特定のフレームを高品質な静止画として抽出したい場合、JPGへの変換が最も実用的で互換性の高い解決策です。',
  },
  {
    type: 'title',
    text: 'GIFそれともJPG？対照的な目的を持つ形式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF（Graphics Interchange Format）は、1フレームあたり256色しか表現できないという厳しい制限のもと、1987年に設計されました。この制限は色数の少ないシンプルなアニメーションでは問題ありませんでしたが、実写写真のような表現には不向きでした。一方、JPGは高度な圧縮アルゴリズムにより、数百万色を表現できます。',
  },
  {
    type: 'paragraph',
    html: 'GIFからフレームを抽出してJPGとして保存することは、ビデオプレーヤーのサムネイル生成、コンテンツ管理プラットフォーム用のプレビュー作成、プレゼン用の静止画取得、複雑なアニメーションの一瞬をアーカイブするなど、多くの用途があります。結果として得られるJPGは、元のGIFよりもはるかに軽量で、汎用性が高いものになります。',
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
        description: '処理のためにファイルをリモートサーバーにアップロードするツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'あなたのGIFがインターネット経由で第三者のサーバーに送信される',
          'アップロードとダウンロードにネットワーク遅延が発生する',
          'セッションごとのサイズやファイル数に制限がある',
          '他人のサーバーにデータが保持されるリスク',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用してハードウェア上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIFがデバイスから離れることはありません',
          'ネットワークの待ち時間なしで即座に処理が完了',
          'サイズ制限やファイル数制限なし',
          '完全なプライバシー：外部へのデータ送信なし',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'フレーム抽出の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'ローカル変換は、HTML5のCanvas APIの性能に支えられています。GIFを読み込むと、ブラウザはメモリ内でそれをネイティブのImage要素としてデコードします。不可視のキャンバス上でレンダリングすることにより、ブラウザのグラフィックエンジンが自動的にアニメーションシーケンスの最初のフレームをキャプチャします。',
  },
  {
    type: 'paragraph',
    html: 'JPG形式は透明度をサポートしていないため、当アルゴリズムは書き出し前に白の背景を適用します。キャンバスの<code>toDataURL(\'image/jpeg\')</code>メソッドは、ネットワーク接続なしで、お客様のコンピュータのRAM内に直接JPGバイトストリームを生成します。結果のファイルは即座にお手元のデバイスに保存されます。',
  },
  {
    type: 'tip',
    title: 'GIFの限定されたカラーパレット',
    html: 'GIFは1フレームあたり256色しか保持できません。抽出されたJPGは、元のGIFの限定されたパレットを継承します。そのため、グラデーションや写真が含まれるGIFの場合、色の境界が目立つポスタリゼーションが起こる可能性があります。最高の結果を得るには、シンプルな色使いのGIFやイラストを使用することをお勧めします。',
  },
  {
    type: 'title',
    text: '変換後のJPGの使用例と互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'ビデオプラットフォームやCMS用のサムネイルおよびプレビュー。',
      'ソーシャルネットワーク投稿用のカバー画像。',
      'Word、PowerPoint、PDFドキュメントへの挿入。',
      'プレゼン資料やマーケティング素材。',
      'Windows, macOS, モバイル端末のビューアーでの高い互換性。',
    ],
  },
  {
    type: 'title',
    text: '結論：アニメーション以上の価値を持つ1フレーム',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '2 MBのアニメーションGIFから、解像度にもよりますが、わずか50〜200 KBの高品質な静止画JPGを生成できます。当ツールは、サーバーを介さずにお客様のブラウザ内で即座に、プライベートに、そして無制限にこの変換を実行します。アカウント作成や待ち時間は不要です。',
  },
];


export const content: GifAJpgLocaleContent = {
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
