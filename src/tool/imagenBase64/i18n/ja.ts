import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'image-to-base64-converter';
const title = '画像Base64変換器オンライン';
const description =
  'ブラウザ上で直接、画像をBase64コードとData URIに変換します。ファイルのアップロード不要。無料、安全、そして即座に処理されます。';

const ui: ImageToBase64UI = {
  dragTitle: 'ここに画像をドラッグ',
  dragSubtext: 'またはクリックしてファイルを参照',
  formatBadge: 'JPG, PNG, WEBP, SVG, GIFに対応',
  dataUriLabel: 'Data URI（CSS / HTML src=""用）',
  base64Label: 'Base64のみ（純粋なエンコードテキスト）',
  copyBtn: 'コピー',
  dataUriPlaceholder: '画像をアップロードしてData URIコードを表示...',
  base64Placeholder: '画像をアップロードして純粋なBase64コードを表示...',
  toastMessage: 'コードをクリップボードにコピーしました！',
  invalidImageAlert: '有効な画像ファイルをアップロードしてください。',
  bibliographyTitle: '参考文献',
  faqTitle: 'よくある質問',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: 'Base64とは何ですか？Web開発で何に使用されますか？',
    answer:
      'Base64は、バイナリデータをASCIIテキスト文字列に変換するエンコード方式です。Web開発では、Data URIを使用してHTMLやCSSファイル内に画像を直接埋め込むために使用され、サーバーへのHTTPリクエスト数を減らすことができます。',
  },
  {
    question: 'ここで画像をBase64に変換するのは安全ですか？',
    answer:
      '完全に安全でプライバシーが守られています。当ツールはブラウザ内で100%ローカルに動作します。画像が外部サーバーにアップロードされたり、処理されたりすることはありません。',
  },
  {
    question: 'Base64変換器はどの画像形式をサポートしていますか？',
    answer:
      '当ツールは、JPG、PNG、GIF、WebP、さらにはSVGベクトルファイルに対応しています。画像を読み込む際、MIMEタイプを自動的に検出して、正確なData URIコードを生成します。',
  },
  {
    question: 'Base64画像をどのような場合に使用すべきではありませんか？',
    answer:
      '大きな写真や高解像度の画像にBase64画像を使用することは避けてください。Base64コードは元のバイナリファイルよりも約33%容量が増えるため、CSSスタイルシートやHTMLドキュメントが不必要に肥大化する可能性があります。',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: '画像をドラッグまたは選択',
    text: '画像（JPG, PNG, WebP, SVG, GIF）をアップロードエリアに移動して変換を開始します。',
  },
  {
    name: '生成されたコードをコピー',
    text: '2つのテキストエリアが表示されます。完全なData URI（src=""やCSSで使用可能）と、他の用途向けの純粋なBase64です。',
  },
  {
    name: 'プロジェクトでコードを使用',
    text: '外部ファイルを必要とせず、Data URIをimgタグのsrcやCSSのbackground-imageに直接貼り付けます。',
  },
];

const bibliography: ImagenBase64LocaleContent['bibliography'] = [
  {
    name: 'MDN Web Docs: Data URIs',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
  },
  {
    name: 'Base64 Encoding RFC 4648',
    url: 'https://datatracker.ietf.org/doc/html/rfc4648',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: '画像Base64変換器：HTTPリクエストなしで画像を埋め込む',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64は、画像のようなバイナリデータを純粋なASCIIテキスト文字列に変換するエンコード手法です。その結果がData URIであり、<code>data:image/png;base64,...</code>で始まる自己完結型のURLで、エンコードされた画像全体が含まれます。このコードをHTML、CSS、またはJSONに直接埋め込むことで、サーバーへの追加のHTTPリクエストなしで画像が読み込まれます。ネットワーク遅延はゼロで、即座に表示されます。',
  },
  {
    type: 'title',
    text: 'Base64画像を使用すべき場合',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Base64を使用する最大のメリットは、ネットワークリクエストの排除です。Webページ上のすべての画像は、接続、DNS、TLSハンドシェイク、および遅延を伴うHTTPリクエストを意味します。アプリケーションのメインロゴ、ファビコン、UIアイコンなどの非常に小さな重要な画像の場合、CSSやHTMLにBase64で埋め込むことで、そのコストを排除し、ブラウザがキャッシュする前であっても即座に表示されることを保証します。',
  },
  {
    type: 'paragraph',
    html: 'この技術は、ビルド時にJavaScriptとCSSのバンドルが生成されるSPA（シングルページアプリケーション）で特に強力です。小さな画像をバンドルに埋め込むことで、追加のリクエストなしにコードと一緒に読み込まれることが保証されます。また、メールクライアントが外部画像をブロックしても、埋め込まれたData URIはほとんどの場合表示されるHTMLメールでも不可欠です。',
  },
  {
    type: 'title',
    text: 'Base64画像の活用事例',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTMLインライン：重要なアイコン用の <code>&lt;img src="data:image/png;base64,..."&gt;</code>。',
      'CSS背景：UI用SVGの <code>background-image: url("data:image/svg+xml;base64,...")</code>。',
      'JSONとREST API：JSONペイロード内にテキストデータとして画像を送信。',
      'HTMLメール：クライアントが外部URLをブロックしても表示される埋め込み画像。',
      'SVG埋め込み：インラインデータとしてSVGファイル内にラスター画像を埋め込む。',
    ],
  },
  {
    type: 'title',
    text: 'ブラウザでの変換の仕組み',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '画像を選択またはドラッグすると、ブラウザの <code>FileReader</code> APIがディスクからRAMへバイナリデータとして直接読み込みます。 <code>readAsDataURL()</code> メソッドは、RFC 4648アルゴリズムを使用して、そのバイナリバイトをBase64表現に変換します。元のデータの3バイトごとに、Base64アルファベットの4つのASCII文字で表現されます。結果には、自動的に検出された正しいMIMEタイプが含まれます。',
  },
  {
    type: 'tip',
    title: '小さな画像（10 KB未満）にのみ使用してください',
    html: 'Base64はファイルサイズを約33%増加させます。10 KBの画像は約13.3 KBのテキストになります。小さなアイコンやロゴの場合、このコストはわずかであり、HTTPリクエストの排除によって十分に相殺されます。写真や大きな画像の場合、容量のオーバーヘッドが大きいため、常にCDNを使用してください。',
  },
  {
    type: 'title',
    text: 'Base64を使用すべきではない場合',
    level: 3,
  },
  {
    type: 'tip',
    title: '大きな画像にはBase64を避け、代わりにCDNを使用してください',
    html: '画像が10〜20 KBを超える場合、Base64はパフォーマンスを低下させます。HTML/CSSのサイズを肥大化させ、ブラウザが画像を個別にキャッシュするのを妨げ、パサーが巨大な文字列を処理している間レンダリングをブロックします。大きな画像については、常に適切なキャッシュヘッダーを設定したCDNから提供してください。',
  },
  {
    type: 'title',
    text: '互換性とプライバシー',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URIはすべての現代的なブラウザおよびほとんどのメールクライアントと互換性があります。当ツールはFileReader APIを介してローカルですべてを処理するため、画像がデバイス外に出ることはありません。これにより、企業内画像、プライベートなスクリーンショット、またはBase64に変換する必要がある機密性の高いビジュアルコンテンツに適しています。',
  },
  {
    type: 'title',
    text: '結論：最も高速でプライベートな埋め込みツール',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '画像をBase64に変換することは、正しく適用されれば非常に強力な技術です。ゼロHTTPリクエストが効果を発揮する小さな重要な画像に使用し、CDNが常に優位に立つ大きな画像には使用を避けてください。当ツールを使用すれば、サーバーへのアップロードなしで、瞬時にData URIを取得できます。',
  },
];


export const content: ImagenBase64LocaleContent = {
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
