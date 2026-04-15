import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'convert-avif-to-jpg';
const title = 'AVIFをJPGにオンラインで変換';
const description =
  'お使いのブラウザでAVIF画像をJPGに変換します。サーバーを介さず、100%プライベートなローカル処理を行います。無料で無制限に使用できます。';

const ui: ImageConverterUI = {
  dragText: 'AVIFファイルをドラッグ...',
  convertText: '即座にJPGに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: 'なぜAVIFをJPGに変換するのですか？',
    answer:
      'AVIF形式は優れた圧縮率を実現しますが、すべてのプログラムやビューアが対応しているわけではありません。JPGに変換することで、世界中の100%のデバイスで画像を表示できることが保証されます。',
  },
  {
    question: 'AVIF画像はどのように保護されますか？',
    answer:
      'お客様の写真は、スマートフォンやPCから外部に出ることはありません。JPEGへの描画およびエンコードの全プロセスは、ブラウザのJavascript環境内で実行されます。',
  },
  {
    question: 'AVIFからJPGに変換すると品質は低下しますか？',
    answer:
      '当ツールは標準的なキャンバスクオリティ（0.9〜0.95）でピクセルを処理するため、品質の変化はほとんど認識されません。',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: 'ファイルをドラッグまたはクリック',
    text: '変換したいすべてのAVIF写真を、指定された処理エリアに移動させてください。',
  },
  {
    name: '即時変換',
    text: 'アルファチャンネルがあれば塗りつぶし背景に置き換え、AVIFが1秒以内にJPGとして再エンコードされる様子を確認してください。',
  },
  {
    name: '保存またはZIPダウンロード',
    text: '新しいJPG画像を個別に、または一括処理した場合は「すべてダウンロード」を押して保存してください。',
  },
];

const bibliography: AvifAJpgLocaleContent['bibliography'] = [
  {
    name: 'AV1 Image File Format (AVIF)',
    url: 'https://aomediacodec.github.io/av1-avif/',
  },
  {
    name: 'JPGの概要',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF-JPGコンバーター：最新画像にユニバーサルな互換性を',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF（AV1 Image File Format）は、現在利用可能な最も効率的な画像形式です。Alliance for Open Mediaによって開発され、AV1ビデオコーデックに基づいています。同じ視覚品質でJPGよりも50%高い圧縮率を実現します。しかし、この技術的な優位性には代償があります。AVIFは、Photoshop、Lightroom、Windowsフォトビューアー、およびほとんどの伝統的な編集・表示ツールでサポートされていません。JPGに変換することで、この問題を根本から解決できます。',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG：効率性とユニバーサルな互換性の比較',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIFの圧縮能力は非常に優れています。JPGで4MBを占める高解像度の写真も、同じ知覚品質を維持しながら、AVIFではわずか2MBに抑えられる場合があります。これは、読み込みパフォーマンスが重要なウェブ配信にとって完璧です。しかし、ブラウザ以外の環境では、AVIFはほとんど認識されません。Windowsエクスプローラーでのプレビュー表示ができず、カメラもこの形式を書き出さず、デザイナーもワークフローで受け入れにくいのが現状です。',
  },
  {
    type: 'paragraph',
    html: 'JPGは30年以上にわたり、デジタル写真のユニバーサルな標準であり続けています。100%のデバイス、OS、オフィスアプリケーション、SNS、プリンター、そして画像表示ソフトウェアのすべてでサポートされています。共有、印刷、編集、またはメール送信が必要な場合、JPGはすべてが問題なく動作することを保証するものです。',
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
        description: 'AVIFファイルをリモートサーバーにアップロードして処理するツール。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'プライベートな写真がインターネットを介して外部サーバーへ送信される',
          'ファイルのアップロード・ダウンロードに待機時間が発生する',
          'ファイルサイズ制限や無料変換回数に制限がある',
          '第三者のサーバーに画像が残存するリスクがある',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーとCanvas APIを使用してブラウザで直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '画像がデバイスから外部へ出ることはありません',
          'ネットワーク遅延のない即時変換',
          'ファイル数やサイズの制限なし',
          '医療用、法的、または機密性の高い画像に最適',
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
    html: 'Chrome、Firefox、およびEdgeなどの最新ブラウザは、統合されたAV1デコーダーのおかげで、AVIFをネイティブにサポートしています。AVIFファイルを読み込むと、ブラウザはそれをメモリ内でデコードし、RAM上のビットマップデータに変換します。このデータが不可視のHTML5 <code>Canvas</code>要素上に描画されます。',
  },
  {
    type: 'paragraph',
    html: '次に、Canvasは標準的なJPG圧縮を適用しながら <code>toBlob(\'image/jpeg\', quality)</code> を使用して画像を書き出します。JPGは透明度をサポートしていないため、AVIF内に存在するアルファチャンネルは書き出し前に白色背景で塗りつぶされます。結果として、1バイトも外部へ流出することなく、高品質なJPGファイルとして直接ダウンロードができるようになります。',
  },
  {
    type: 'tip',
    title: '圧縮と互換性の完璧なバランス',
    html: 'AVIFは同等品質のJPGより50%小さくなりますが、JPGにはあらゆるソフトウェアとの100%の互換性があります。サーバーからAVIF画像を受け取り、それを編集、メール送信、またはデスクトップツールで開く必要がある場合は、まずJPGに変換してください。',
  },
  {
    type: 'title',
    text: '使用例：AVIFをJPGに変換すべきタイミング',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Photoshop、Lightroom、GIMPなどのデスクトップソフトウェアで編集するとき。',
      '古いデバイスやOSを使用しているユーザーと画像を共有するとき。',
      'メールに添付して、あらゆるメールクライアントでの表示を保証したいとき。',
      'アップロード形式としてAVIFを受け付けていないプラットフォームに投稿するとき。',
      '印刷するとき：プロの印刷サービスはネイティブでJPGを扱います。',
    ],
  },
  {
    type: 'title',
    text: '結論：ワンステップでユニバーサルな互換性を',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIFは画像圧縮の未来ですが、現時点では互換性が必要です。当サイトのコンバーターは、最大効率を得るためにAVIFで画像を受信・保存し、あらゆる状況で機能させる必要があるときは即座にJPGに変換するという、両方の利点を同時に提供します。すべてがプライベート、無料、かつ無制限です。',
  },
];


export const content: AvifAJpgLocaleContent = {
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
