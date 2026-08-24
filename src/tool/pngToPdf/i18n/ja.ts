import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { PngToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'png-to-pdf-converter';
const title = "PNG PDF 変換ツール";
const description = "ブラウザ上でPNG画像を整列されたPDFに変換。ファイルをアップロードすることなく、用紙サイズや向き、余白を設定できます。";

const ui: ImageToPdfUI = {
  formatLabel: 'PNG',
  dropTitle: "PNG画像からPDFを作成",
  dropText: "ここにPNGファイルをドロップ。選択した順番がそのままページ順になります。",
  selectFiles: "PNGファイルを選択",
  privacyNote: "すべての処理はブラウザ内で行われます。画像がアップロードされることはありません。",
  optionsTitle: "印刷シート",
  settingsTitle: "用紙設定",
  pageSizeLabel: "用紙サイズ",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "向き",
  portrait: "縦向き",
  landscape: "横向き",
  marginLabel: "余白",
  pagesTitle: "ページ一覧",
  reorderHint: "出力前にページの順番を並べ替えます。",
  page: "ページ",
  pageSingular: "ページ",
  pagePlural: "ページ",
  moveUp: "上へ移動",
  moveDown: "下へ移動",
  remove: "削除",
  emptyPages: "選択した画像がここに表示されます。",
  createPdf: "PDFを作成",
  reset: "リセット",
  ready: "画像の準備完了",
  processing: "画像を処理中",
  error: "画像を読み込めませんでした",
  downloadPdf: "PDFをダウンロード",
  building: "PDFを生成中",
  pdfReady: "PDFの作成が完了しました",
  invalidFile: "このツールはPNGおよびJPEGファイルのみに対応しています。",
  bibliographyTitle: "参考文献",
  faqTitle: "よくある質問",
};

const faq: PngToPdfLocaleContent['faq'] = [
  {
    "question": "複数のPNG画像を1つのPDFにまとめられますか？",
    "answer": "はい。必要なだけのPNGファイルを選択し、ページ順を整えて1つのPDFファイルとして出力できます。"
  },
  {
    "question": "画像がサーバーに送信されることはありますか？",
    "answer": "いいえ。すべての変換処理はブラウザ内で完結するため、安全です。"
  },
  {
    "question": "A4やLetterなどの用紙サイズを選べますか？",
    "answer": "はい。A4やLetterサイズ、縦横の向き、余白を設定できます。"
  }
];

const howTo: PngToPdfLocaleContent['howTo'] = [
  {
    "name": "PNG画像を選択",
    "text": "PNGファイルをドラッグ＆ドロップするか、デバイスから選択します。"
  },
  {
    "name": "ページと用紙の設定",
    "text": "ページの順序を並べ替え、A4/Letterサイズや向き、余白を調整します。"
  },
  {
    "name": "PDFを作成してダウンロード",
    "text": "「PDFを作成」をクリックし、完成したファイルを手元に保存します。"
  }
];

const seo: PngToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "PNG画像を印刷に適した高品質なPDFへ変換",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "複数枚のPNG画像やスキャンデータを、1つのきれいなPDFファイルにまとめるツールです。ページ順の変更や用紙サイズ・余白の指定も簡単に行えます。"
  },
  {
    "type": "title",
    "text": "きれいなPDF書類を作成するポイント",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "表紙や重要な写真を先頭にするようドラッグで並べ替え。",
      "縦長画像は「縦向き」、横長画像は「横向き」を選択。",
      "ご家庭のプリンターで印刷する場合は十分な余白を設定。"
    ]
  },
  {
    "type": "tip",
    "title": "個人情報や機密写真も安心",
    "html": "ブラウザローカルで処理されるため、プライベートな写真や重要書類も安心して変換できます。"
  }
];

export const content: PngToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'ja', faq, howTo }),
};
