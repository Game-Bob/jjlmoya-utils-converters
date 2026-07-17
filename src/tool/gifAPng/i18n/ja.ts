import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-to-png-converter';
const title = 'GIFをPNGにオンラインで変換';
const description =
  'GIFファイルから最初のフレームを抽出し、透明度を維持したままPNGに変換します。サーバー不要。ブラウザ内ローカル処理。無料。';

const ui: ImageConverterUI = {
  dragText: 'GIFファイルをドラッグ...',
  convertText: '即座にPNGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: 'なぜGIFのようなアニメーション形式をPNGのような静的な形式に変換するのですか？',
    answer:
      '多くのSNSやアバターでは、動く画像がサポートされていない場合があります。複雑なGIFから最初の1フレームを高品質なPNGとして抽出することで、制限を回避し、不要なファイルサイズを削減できます。',
  },
  {
    question: '元のGIFの透明度は、変換後のPNGでも維持されますか？',
    answer:
      'はい、JPGとは異なり、PNG形式はアルファチャンネルを保持します。元のGIFに透明な背景があった場合、PNGでも境界線を鮮明に保ったまま透明度が維持されます。',
  },
  {
    question: '処理後、画像は一定期間サーバーに保存されますか？',
    answer:
      'サーバーがお客様のGIFを保持することはありません。Web Canvas APIにより、すべての抽出処理はローカルで完了します。お客様のPCのプロセッサが、ネットワーク通信なしで安全にファイルをデコードします。',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: 'アニメーションを準備',
    text: '変換したいGIFファイルを処理ボックスへドラッグ＆ドロップしてください。',
  },
  {
    name: '完璧な抽出写真',
    text: 'システムが動きの起点を正確に捉え、数ミリ秒で非の打ち所のないコピーを作成します。',
  },
  {
    name: '静止画を保存',
    text: '静的なPNG形式に変換されたGIFアバターを、ZIP形式でまとめて保存してください。',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIFからPNGへのコンバーター：GIFのカラーと透明度の限界を克服',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIFは、モニターがわずか256色しか表示できなかった時代に設計されました。数十年経った今でも、その制限は大きな弱点となっています。PNGは、ロゴ、アイコン、インターフェースのグラフィック、そしてどんな背景色の上でも完璧に見える必要がある透明な背景を持つ画像など、品質と透明度が重要視されるすべてのケースでGIFに代わるものとして誕生しました。',
  },
  {
    type: 'title',
    text: 'GIF vs PNG：1600万色の革命',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIFとPNGの最も決定的な違いは色数だけではありません。GIFはバイナリ透過（ピクセルが不透明か完全に透明かのどちらか）のみをサポートしており、グラデーションには対応していません。一方、PNGはピクセルごとに256段階の不透明度を設定できるフルアルファチャンネルをサポートしています。これにより、PNGのロゴの境界線は完璧に滑らかになりますが、GIFのロゴの境界線はカラー背景の上で特徴的な「ギザギザ」が目立ってしまいます。',
  },
  {
    type: 'paragraph',
    html: '優れた透明度に加え、PNGはGIFの256色の制限を取り払いました。スクリーンショット、グラデーションのあるイラスト、影のあるロゴなど、すべてがPNGでは大幅にきれいに見えます。また、可逆圧縮であるため、JPG変換で発生するようなノイズ（アーティファクト）がなく、各ピクセルが元の値を正確に保持します。',
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
        description: 'リモートサーバーで画像を処理するツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'あなたのロゴやアイコンがインターネット経由で送信される',
          'ネットワーク遅延による待ち時間が発生する',
          'サイズやファイル数に制限がある',
          '第三者のキャッシュに画像が残る可能性がある',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用してハードウェア上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIFがデバイスから離れることはありません',
          'ネットワークなしで即座に変換が完了',
          'ファイル数制限やサイズ制限なし',
          '絶対的なプライバシー：外部への送信なし',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'ブラウザ内でのGIFからPNGへの変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '変換にはブラウザのCanvas APIを使用します。GIFはメモリ内でネイティブのImage要素としてデコードされます。HTML5キャンバスへのレンダリングにより、ブラウザのグラフィックエンジンが元の透明度情報を維持したまま最初のフレームをキャプチャします。',
  },
  {
    type: 'paragraph',
    html: 'JPG変換とは異なり、PNGでは背景を白く塗りつぶす必要はありません。元のGIFのアルファチャンネルは、エクスポートされたPNGに直接引き継がれます。キャンバスの<code>toDataURL(\'image/png\')</code>メソッドは、ネットワーク通信を行わずにお客様のコンピュータのRAM内に直接PNGバイトストリームを生成し、ファイルが即座にダウンロードされます。',
  },
  {
    type: 'tip',
    title: 'GIFのバイナリ透過 vs PNGのアルファチャンネル',
    html: 'GIFは、不透明か透明かの2値しかサポートしていません。PNGに変換する際、GIFの半透明なピクセルはブラウザが解釈した通りに保持されます。もしGIFにギザギザの境界線がある場合、PNGでもそれは維持されますが、PNGであれば後から画像エディタで境界線を滑らかに補正することが可能です。これは元のGIFでは不可能なことです。',
  },
  {
    type: 'title',
    text: '変換後のPNGの使用例と互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'あらゆる背景色の上で使用できるロゴやアイコン。',
      'Discord, Telegram, Slack, ゲームプラットフォーム用のアバター。',
      'ウェブやモバイルアプリのインターフェース用画像。',
      '透明な背景を持つパーソナライズされたステッカーや絵文字。',
      '技術文書用のスクリーンショットやUI要素。',
    ],
  },
  {
    type: 'title',
    text: '結論：PNGは、GIFがずっと「なりたかった」姿です',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIFからPNGに変換することは、単に形式を変えるだけではありません。画像を、GIFが決して到達できなかった現代の標準へとアップデートすることです。より多くの色、より優れた透明度、より軽いサイズ。当ツールは、外部へのデータ送信なしで、お客様のブラウザ内で数ミリ秒でこの変換を完了させます。',
  },
];


export const content: GifAPngLocaleContent = {
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
