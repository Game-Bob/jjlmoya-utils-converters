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
    "question": "なぜローカルのPNG-JPG変換器を選ぶべきですか？",
    "answer": "一般的なオンラインツールと異なり、当サービスは画像処理をすべてブラウザ内で行います。外部サーバーにファイルが送信されないため、データプライバシーが完全に保護されます。"
  },
  {
    "question": "JPGとPNG、どちらのフォーマットが最適ですか？",
    "answer": "PNGは透明背景やロゴに最適です。一方、JPGは圧縮率が高くファイルサイズが大幅に小さくなるため、写真やWebバナー、SNS投稿に最適です。"
  },
  {
    "question": "サーバーなしでの技術的変換の仕組みは？",
    "answer": "HTML5 Canvas技術を使用しています。ブラウザが非表示の仮想キャンバスにPNGを描画し、透明部分を白で塗りつぶした上でJPEGバイトストリームを出力します。"
  },
  {
    "question": "機密文書や企業データの変換は安全ですか？",
    "answer": "はい、非常に安全です。処理はすべてブラウザのRAM内で行われ、タブを閉じるとデータは完全に消去されます。"
  }
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
    "type": "title",
    "text": "PNGからJPGへの変換コンバーター：画像最適化ガイド",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "デジタルデザインとWeb開発において効率性は非常に重要です。PNG形式は透過機能と無劣化圧縮が特徴ですが、ファイルサイズが大きくなりがちです。Webサイトの表示速度を高速化するにはPNGからJPGへの変換が最適です。"
  },
  {
    "type": "title",
    "text": "JPGとPNGの比較",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "用途に応じて最適なフォーマットを選択しましょう。PNGはロゴやテキストを含むグラフィック向けですが、ファイル容量は大きくなります。"
  },
  {
    "type": "paragraph",
    "html": "JPGは写真やWebバナーに最適な形式で、人間が認識しにくい視覚情報を圧縮して軽量化を実現します。"
  },
  {
    "type": "title",
    "text": "ローカル変換とクラウド変換の比較",
    "level": 3
  },
  {
    "type": "comparative",
    "items": [
      {
        "title": "クラウド型コンバーター",
        "description": "外部サーバーに画像をアップロードして処理する一般的なツール。",
        "icon": "mdi:cloud-upload",
        "pointIcon": "mdi:close-circle-outline",
        "points": [
          "通信レイテンシの発生",
          "プライバシー流出のリスク",
          "ファイル容量制限",
          "広告や追跡スクリプト"
        ]
      },
      {
        "title": "当ツールのローカル構造",
        "description": "ブラウザのHTML5 Canvas技術を利用した直接処理。",
        "icon": "mdi:laptop-mac",
        "highlight": true,
        "points": [
          "通信なしの超高速処理",
          "完全なプライバシー（送信0バイト）",
          "ファイル容量制限なし",
          "クリーンなインターフェース"
        ]
      }
    ]
  },
  {
    "type": "title",
    "text": "ローカル技術変換の仕組み",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "画像をサーバーに送信せずに変換できる理由は、最新のブラウザ機能にあります。ファイルを選択すると、メモリ上のBlobデータが作成され、非表示のHTML5 Canvasに描画されます。"
  },
  {
    "type": "paragraph",
    "html": "JPGは透過度（アルファチャンネル）をサポートしていないため、背景を白色で合成してからJPEGのバイトストリームを生成し、ローカルに直接保存します。"
  },
  {
    "type": "tip",
    "title": "SEOパフォーマンス向上",
    "html": "大きなPNG画像を軽量なJPGに変換することで、WebサイトのLCP指標やPageSpeedスコアを瞬時に改善できます。"
  },
  {
    "type": "title",
    "text": "企業・機密データのセキュリティ",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "金融や医療、法律の専門家にとって外部サイトへの画像アップロードはリスクを伴います。当ツールはタブを閉じると全データが消失するため安心です。"
  },
  {
    "type": "title",
    "text": "出力フォーマットの互換性",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "Windows, macOS, iOS, Androidの標準ビューア",
      "SNSプラットフォーム（Instagram, X, Facebook）",
      "オフィスソフト（Word, PowerPoint）",
      "CMS（WordPress, Shopify）"
    ]
  },
  {
    "type": "title",
    "text": "まとめ",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "このコンバーターは高速性とセキュリティを両立した技術的ソリューションです。"
  }
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
