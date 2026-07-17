import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'gif-to-webp-converter';
const title = 'GIFを静的WebPにオンライン変換';
const description =
  'アニメーションGIFを静的WebPに変換します。透明度を維持。サーバー不要。ブラウザ内でローカルに処理。無料。';

const ui: ImageConverterUI = {
  dragText: 'GIFファイルをドラッグ...',
  convertText: '即座にWebPに変換する',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '待機中',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: 'なぜアニメーションファイルを現代的な静的WebP形式に変換するのですか？',
    answer:
      'WebPはGoogleの圧縮標準です。驚くほど軽量で、透明度をきれいに維持します。GIFからWebPに移行することで、重いアニメーションが排除され、Webスピードが飛躍的に向上します。',
  },
  {
    question: '元の画像は透明のままですか？',
    answer:
      'はい。JPEGとは異なり、WebPコンテナは複雑なアルファチャンネルを尊重します。すべてのシルエットは元のまま完璧に保たれます。',
  },
  {
    question: 'ファイルはどこにアップロードされますか？',
    answer:
      'アップロードは行われません。処理はブラウザのJavascriptによってPC上で完全に行われ、外部への送信は一切ありません。',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: 'アニメーションを開始',
    text: '外部接続なしで、数十のGIFをデリミタゾーンに移動してドロップします。',
  },
  {
    name: '見えない大きな変化を目撃',
    text: 'ローカルキャンバスデコーダーが出力を生成する間、ミリ秒単位で変化するプログレスインジケーターを確認してください。',
  },
  {
    name: '変換された結果を保存',
    text: '抽出されたファイルを個別に取得するか、「Zipダウンロード」を押してすべてをパッケージ化します。',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF to WebP コンバーター：重いアニメーションに代わる現代的な選択肢',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'アニメーションGIFは現代のWebコンテンツにおける恐竜のようなものです。不釣り合いな帯域幅を消費し、あらゆるページのPageSpeedを低下させ、数千のWebサイトにおける総重量の大部分を占めています。典型的な5MBのアニメーションGIFは、同じ視覚的品質を維持しながら1MB未満のWebPアニメーションに変換できます。WebPは、Web上のGIFを置き換えるためにGoogleが特別に設計した後継形式です。',
  },
  {
    type: 'title',
    text: 'GIF vs WebP：Webの過去と現在のギャップ',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIFはもともとアニメーション用に設計されていない1987年の形式です。アニメーション機能は後からの「ハック」として追加されました。256色のパレット、非効率な圧縮、オーディオ処理の不可などは、これがもはや旧式の形式であることを示しています。2010年にGoogleによって開発されたWebPは、損失あり・なしの両方で優れた圧縮を提供し、ネイティブのアニメーションサポートと完全なアルファチャンネルを備えています。',
  },
  {
    type: 'paragraph',
    html: 'Web開発者にとって、ページ上のGIFをWebPに置き換えることは、Google PageSpeedスコアを10〜30ポイント向上させることを意味します。ページの軽量化は、Core Web Vitalsの改善、SEOランキングの向上、およびサーバーの帯域幅コストの削減につながります。これは単なる見た目の改善ではなく、技術的なアーキテクチャの決定です。',
  },
  {
    type: 'title',
    text: 'インフラ比較：ローカル vs クラウド',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'クラウドコンバーター',
        description: 'リモートサーバーでGIFを処理するプラットフォーム。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'アニメーションがインターネット経由でサードパーティのサーバーに送信される',
          'アップロードとダウンロードの際のネットワーク遅延による待機時間',
          'サイズ制限（重いGIFは拒否されることが多い）',
          'ファイルの保持や分析に関するリスク',
        ],
      },
      {
        title: '当サイトのローカルアーキテクチャ',
        description: 'Vanilla JSテクノロジーを使用して、ハードウェア上で直接処理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIFがデバイスから離れることはありません',
          'ネットワークの待機時間なしで瞬時に変換',
          'サイズ制限なし：あらゆる重量のGIFを処理可能',
          '完全なプライバシー：外部送信は0バイト',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'ローカルでのGIF to WebP変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'ローカル変換にはHTML5 Canvas APIを使用します。GIFはブラウザのネイティブなImage要素として読み込まれます。キャンバスに描画することで、グラフィックエンジンはすべての透明度情報とともに最初のアニメーションフレームをキャプチャします。<code>toDataURL(\'image/webp\')</code>メソッドは、フレームをRAMから直接WebPとしてエクスポートします。',
  },
  {
    type: 'paragraph',
    html: 'WebPは完全なアルファチャンネルをサポートしているため、背景を追加することなく、生成されたWebPでGIFの透明度が維持されます。WebPの圧縮アルゴリズムはGIFやPNGよりも大幅に効率的であり、これが最終的な出力のファイルサイズが劇的に減少する理由です。',
  },
  {
    type: 'tip',
    title: '確実なPageSpeed改善',
    html: '5MBのアニメーションGIFは、1MB未満のWebPになる可能性があります。WebサイトのページにGIFがある場合、それらをWebPに置き換えることで、Largest Contentful Paint (LCP)やTotal Blocking Time (TBT)を直ちに改善し、SEOランキングに直接影響を与えることができます。',
  },
  {
    type: 'title',
    text: '変換されたWebPの活用事例と互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'PageSpeedスコアを改善するためにWebページ上のGIFを置き換える。',
      'Discord、Slack、現代的なプラットフォーム用に最適化されたアバターやステッカー。',
      'デジタルマーケティングキャンペーン用のバナーやビジュアル。',
      'プログレッシブWebアプリケーション（PWA）でのアニメーション。',
      'Chrome、Edge、Firefox、Safari 14以降、およびすべての現代的なブラウザに対応。',
    ],
  },
  {
    type: 'title',
    text: '結論：GIFを21世紀仕様に移行しましょう',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebサイトのすべてのGIFは、最適化の機会を逃しています。当サイトのツールは、ブラウザで直接、即座に、安全に、制限なくGIFをWebPに変換します。その結果、ファイルサイズは最大5倍削減され、完璧な透明度とすべての現代的なブラウザとの互換性が保証されます。',
  },
];


export const content: GifAWebpLocaleContent = {
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
