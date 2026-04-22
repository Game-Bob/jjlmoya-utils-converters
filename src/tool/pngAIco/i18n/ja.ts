import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-to-ico-converter';
const title = 'PNGをICOにオンラインで変換しましょう';
const description =
  '実際のバイナリヘッダーを使用してPNGをICOに変換します。透明度が維持されます。ファイルのアップロード不要。無料かつ100%プライベート。';

const ui: ImageConverterUI = {
  dragText: 'PNGファイルをドラッグ...',
  convertText: '即座にICOに変換します',
  selectFiles: 'ファイルを選択',
  processedFiles: '処理済みファイル',
  downloadAll: 'すべてダウンロード (.zip)',
  pending: '保留中': '参考文献',
  faqTitle: 'よくある質問',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: 'この変換器は単にPNGファイルの拡張子を偽装したものですか、それとも本物のICOを生成しますか？',
    answer:
      '本物のICOを作成します。ユーザーのPNGからデータを抽出し、標準化されたMicrosoftの16進数ヘッダー（22バイトのヘッダー + ディレクトリ）を作成し、ローカルで理想的な正方形形式にサイズ変更して、ネイティブとして検証された最終ファイルを組み立てます。',
  },
  {
    question: 'ロゴをアイコンにするとき、透明度は維持されますか？',
    answer:
      'もちろんです。当社のエンジンはユーザーのPNGを32ビットとして読み込み、固定しながら透明な領域を正確に保持するため、ブラウザのユニバーサルアドレスバー（ファビコン）で綺麗に映えます。',
  },
  {
    question: '会社のロゴはウェブサーバーに保存されますか？',
    answer:
      '本サービスは外部ネットワークへの接触が一切ないことを保証します。変換器はユーザーの内部HTML5 Canvas内で動作し、アイコンの作成は純粋に秘密が保持されるローカルメモリ内で100%行われます。',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: 'ファイルをドラッグして転送',
    text: '写真のマトリックス（正方形の512x512 PNGが理想的）をインタラクティブなローカルフレームに配置してください。',
  },
  {
    name: '自動バイトコードコンパイル',
    text: '精製されたICOの16進数ヘッダーのローカルマトリックスを読み込み、作成する間、内部的にプログレスバーが動くのが見えます。',
  },
  {
    name: 'まとめてZIPでダウンロード',
    text: 'ウェブサイト用のメガコンピレーション（グローバルなZIPボタン）をクリックしてダウンロードするか、Windows実行ファイル用のサムネイルをダウンロードしてください。',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG to ICO 変換器：完璧な透明度を持つファビコンのための最適な選択',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>透明度を含むPNG</strong>は、プロフェッショナルなICOアイコンを作成するための理想的なソース素材です。アルファチャネルのないJPGや、非可逆圧縮形式とは異なり、PNGはICO形式が必要とするもの（鮮明なピクセル、綺麗なエッジ、アイコンをあらゆる背景上で完璧に調和させる32ビットのアルファチャネル）を正確に提供します。これはSafariの白いブックマークバー、Firefoxのダークバー、あるいはWindows 11のデスクトップなど、どこでも同様です。',
  },
  {
    type: 'title',
    text: 'PNGまたはICO？各形式を使い分ける場合',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong>は作業用の形式です。ロゴをデザインし、FigmaやIllustratorからエクスポートし、編集可能なバージョンを保存するためのものです。透明度、ピクセル精度、および可逆圧縮により、デザインプロセスにおいて無敵です。しかし、ファビコンやアプリのアイコンを必要とするブラウザ、OS、およびWindowsアプリケーションはPNGを直接受け入れず、ICOが必要になります。',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong>はMicrosoft環境およびウェブにおいて、アイコンを配布するための形式です。単一のファイルの中に複数の解像度を詰め込むことができる、特定のバイナリ構造を持っています。ブラウザはICO内部のディレクトリを読み込み、ブラウザのタブ用には <strong>16x16</strong>、ショートカット用には <strong>32x32</strong>、エクスプローラー用には <strong>48x48</strong> und Retinaや4K画面用には <strong>256x256</strong> を自動的に選択します。透明なPNGから開始することで、白い縁取りが出ることなく、すべての解像度で完璧なエッジが保証されます。',
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
        title: 'クラウド変換器',
        description: 'リモートサーバーにファイルをアップロードするツールです。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          'アップロード und ダウンロード時にネットワーク遅延が発生',
          'ロゴが他社のサーバーに保存される',
          'ファイルサイズの制限や1日の変換回数の制限がある',
          '強制的な広告やサードパーティのトラッカーが含まれる',
        ],
      },
      {
        title: 'ローカルアーキテクチャ',
        description: 'Vanilla JS技術を使用し、ユーザーのハードウェア上で直接処理します。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'ネットワーク遅延のない即座の処理速度',
          '完全なプライバシー — 外部送信データ0バイト',
          '容量制限やファイル数の制限なし',
          '広告や追跡のないクリーンなインターフェース',
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
    html: 'PNGファイルが32ビットのアルファチャネルが完全にサポートされたメモリ上の <strong>HTML5 Canvas</strong> にデコードされます。エンジンは正しいマジックナンバー（<code>00 00 01 00</code>）を含む標準のMicrosoft ICOヘッダー、サイズ und データオフセットを含む画像ディレクトリ、および透明度情報を保持したピクセルデータを構築します。結果は、Windows, macOS und すべてのブラウザにおいてネイティブに認識される本物のバイナリ.icoファイルです。',
  },
  {
    type: 'paragraph',
    html: 'PNGの透明度は、生成されたICOにおいて完全に維持されます。透明なピクセルは透明なまま、半透明なピクセルは正確なアルファ値を保持し、不透明なピクセルは元の色を保持します。これは、背景が変化するロゴにとって非常に重要です。ファビコンはライトモード, ダークモード und ブラウザのインターフェース色のどのような組み合わせでも正しく表示されます。',
  },
  {
    type: 'tip',
    title: 'ヒント：512x512のPNGをソースとして使用してください',
    html: '最高の仕上がりを得るために、<strong>正方形の512x512のPNG</strong> をソース画像として使用してください。この解像度は、変換器が16x16のファビコンから高解像度画面用の256x256まで、すべての標準のICOサイズを、ピクセルのにじみやエッジの細部の消失なしに鮮明に生成するのに十分な情報を提供します。ソースPNGが大きいほど、小さなサイズのアイコンも綺麗に見えます。',
  },
  {
    type: 'title',
    text: '活用事例 und 互換性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'ウェブサイト用の透明なファビコン：Chrome, Firefox, Safari, Edge, e Internet Explorerで動作します。',
      'PWAアプリケーションのアイコン：manifest.jsonはデスクトップインストールのためにICOを参照します。',
      '白い背景なしでロゴを使用したWindows 10/11のフォルダーのカスタマイズ。',
      'デスクトップアプリケーション, インストーラー und 実行ファイルのためのショートカットアイコン。',
      'Chrome und Firefox拡張機能のためのブラウザ拡張機能アイコン。',
    ],
  },
  {
    type: 'title',
    text: '結論',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '透明なPNGは、疑いようもなく、プロフェッショナルな品質を持ったICOアイコンを作成するための最良の出発点です。このツールを使用すれば、変換は即座に行われ、アルファチャネルは完全に保持され、結果は正しいバイナリ構造を持った本物のICOファイルになります。ロゴをサーバーにアップロードする必要がなく、透かしや制限もなく、すべてのサイズで完璧な透明度を実現できます。',
  },
];

export const content: PngAIcoLocaleContent = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: generateSchemas({
    title,
    description,
    inLanguage: 'ja',
    faq,
    howTo,
  }),
};
