import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'jpg-to-png-converter';
const title = 'JPGをPNGにオンラインで無料で変換';
const description =
  'ブラウザ上でファイルをアップロードせずにJPG画像をPNGに変換します。ロスレス変換、無料で完全にプライベートに使用できます。';

const ui: ImageConverterUI = {
  dragText: 'JPGファイルをドラッグ...',
  convertText: '即座にPNGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中': '参考文献',
  faqTitle: 'よくある質問',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: 'いつJPGからPNGへの変換を使うべきですか？',
    answer:
      '写真内のテキストやロゴを編集する場合は常に。JPGを何度も保存すると、画像が劣化します。PNGは圧縮を固定します。',
  },
  {
    question: 'PNGファイルはすぐに背景が透明になりますか？',
    answer:
      'いいえ。元のJPGはフラットで、そのような構造的なチャンネルはありません。結果のPNGはそのコンテナを準備します。その後、Photoshopなどのエディタを使用して要素を分離する必要があります。',
  },
  {
    question: 'このウェブサイトにトラフィック制限はありますか？',
    answer:
      'クラウドに依存しないEdgeテクノロジーのおかげで、変換の重量に制限はありません。すべてお使いのコンピュータまたはモバイル端末を使用するためです。',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: 'JPGをパネルにドラッグ',
    text: 'マウスまたはコンピュータのセレクタを使用してJPG形式の静止画像をアップロードしてください。',
  },
  {
    name: 'ロスレス実行',
    text: 'Vanillaソフトウェアが、描画ビットをPNGファミリー固有のロスレスラッパーに送り込みます。',
  },
  {
    name: 'セッションを終了',
    text: 'パネルをクリックすると、ブラウザがダウンロードされたウェブアセットをユーザーフォルダに保存します。',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPGからPNGへのコンバーター：ロスレス編集と透明度',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>はカメラの写真には無敵ですが、弱点があります。ファイルを保存するたびに非可逆圧縮が再適用され、エッジやグラデーションが徐々に劣化します。<strong>PNG</strong>は可逆圧縮を使用しており、一度保存されたピクセルは不変です。JPGをPNGに変換することは、集中的な編集のために画像を準備したり、透明な背景を追加したり、何度も保存が必要なデザインワークフローに統合したりする場合の重要な操作です。',
  },
  {
    type: 'title',
    text: 'JPGかPNGか？ 各フォーマットをいつ使うべきか',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong>は写真の王様です。ファイルサイズが小さく、すべてに互換性があります。しかし、圧縮によるノイズ（アーティファクト）は、編集や再保存のたびに蓄積されます。画像を繰り返し切り抜いたり、補正したり、テキストを追加したりする必要がある場合、JPGから始めるとサイクルごとに劣化が生じることを意味します。また、JPGにはアルファチャンネルがなく、背景を透明にすることができないため、ロゴ、アイコン、UI要素には適していません。',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>は、企業ロゴ、鮮明なテキスト付きのスクリーンショット、インターフェース要素、後で切り抜く必要がある白い背景の製品画像、または複数回編集されるグラフィックリソースにとって正しい選択です。可逆圧縮により、テキストのエッジが完全に定義されたままになり、ベタ塗りの色がJPEGノイズなしで純粋なまま保たれることが保証されます。',
  },
  {
    type: 'title',
    text: '比較：ローカル変換 vs クラウド',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウドコンバーター',
        description: 'ファイルをリモートサーバーにアップロードするツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'アップロードとダウンロードのネットワーク遅延',
          '画像が他人のサーバーに残る',
          'サイズや1日の変換回数の制限',
          '押し付けがましい広告やサードパーティ製トラッカー',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用してハードウェア上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '瞬時の速度 — ネットワーク遅延ゼロ',
          '完全なプライバシー — 0バイトが外部に送信される',
          'ファイルサイズやファイル数の制限なし',
          '広告やトラッキングのないクリーンなインターフェース',
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
    html: 'プロセスは純粋にローカルです。ブラウザは選択されたJPGを含む<strong>Blob</strong>を作成し、メモリ内の<strong>HTML5キャンバス</strong>上に描画します。レンダリング後、<code>toDataURL(\'image/png\')</code>が呼び出されます。ブラウザに統合されたPNGコーデックが、新たな非可逆圧縮を適用することなく各ピクセルを再コード化します。結果として得られるPNGは、JPGの現在の状態を忠実に保持します。改善も改悪もされず、ただ「静止」されます。',
  },
  {
    type: 'paragraph',
    html: '得られたPNGは、PhotoshopやGIMPなどの専門的なツールで使用されている可逆DEFLATE圧縮を使用します。情報を破棄せずにすべてのピクセルを保存するため、サイズは元のJPGより大きく（通常2〜5倍）なります。これは、忠実度と無限の編集可能性のために支払う対価です。',
  },
  {
    type: 'tip',
    title: '重要：PNGはJPEGの品質を回復させません',
    html: 'JPGをPNGに変換しても、元のJPEG圧縮中に<strong>失われた品質は回復しません</strong>。JPGにすでにブロックノイズや色ノイズがあった場合、PNGはそれらをそのまま保持します。単にそれ以上のノイズが追加されるのを防ぐだけです。変換は、将来の編集によってこれ以上劣化しないように、画像の現在の状態を「凍結」するものと考えてください。',
  },
  {
    type: 'title',
    text: '使用例と互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '切り抜き後に透明な背景が必要なロゴやブランド要素。',
      '何度も編集して再保存される、テキスト付きのスクリーンショット。',
      'クリーンで切り抜き可能な白い背景が必要なEコマース用の製品画像。',
      'PowerPointやGoogle Slidesのプレゼンテーション用グラフィックリソース。',
      'エッジの鮮明さが重要なウェブおよびモバイルアプリケーション用のUIアセット。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPGからPNGへの変換は、本格的なデザインワークフローにおける最初のステップです。元の品質を向上させるものではありませんが、将来の編集からすべてのピクセルを保護します。このツールを使用すれば、プロセスは瞬時に完全にプライベートに行われ、企業や個人の画像がデバイスの外に出ることは一切ありません。',
  },
];


export const content: JpgAPngLocaleContent = {
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
