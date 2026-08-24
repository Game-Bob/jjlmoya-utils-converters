import { generateSchemas } from '../../../shared/logic/schemas';
import { bibliography } from '../bibliography';
import type { PngToPdfLocaleContent } from '../entry';
import type { ImageToPdfUI } from '../../../shared/image-to-pdf/ui';

const slug = 'png-to-pdf-converter';
const title = "PNG 转 PDF 转换器 Tool";
const description = "在浏览器中将 PNG 图片转换为排版整齐的 PDF。无需上传文件，轻松选择纸张大小、方向及页边距。";

const ui: ImageToPdfUI = {
  formatLabel: 'PNG',
  dropTitle: "根据 PNG 图片生成 PDF",
  dropText: "拖放 PNG 文件至此处。您排列的顺序将直接作为 PDF 的页面顺序。",
  selectFiles: "选择 PNG 文件",
  privacyNote: "所有转换均在本地浏览器完成，您的图片绝不会被上传。",
  optionsTitle: "打印页面",
  settingsTitle: "纸张设置",
  pageSizeLabel: "纸张大小",
  a4: 'A4',
  letter: 'Letter',
  orientationLabel: "方向",
  portrait: "纵向",
  landscape: "横向",
  marginLabel: "页边距",
  pagesTitle: "页面列表",
  reorderHint: "导出前可调整页面先后顺序。",
  page: "页",
  pageSingular: "页",
  pagePlural: "页",
  moveUp: "上移",
  moveDown: "下移",
  remove: "删除",
  emptyPages: "您选择的图片将显示在这里。",
  createPdf: "生成 PDF",
  reset: "重新开始",
  ready: "已准备好接收图片",
  processing: "正在准备图片",
  error: "无法读取该图片",
  downloadPdf: "下载 PDF",
  building: "正在生成 PDF",
  pdfReady: "您的 PDF 已就绪",
  invalidFile: "本工具仅支持 PNG 和 JPEG 格式文件。",
  bibliographyTitle: "参考文献",
  faqTitle: "常见问题",
};

const faq: PngToPdfLocaleContent['faq'] = [
  {
    "question": "可以将多张 PNG 图片合并为一个 PDF 吗？",
    "answer": "可以。只需选择需要的 PNG 文件，调整好页面先后顺序，即可导出一份完整的 PDF 文档。"
  },
  {
    "question": "我的图片会被上传到服务器吗？",
    "answer": "不会。所有的转换过程均在您的本地浏览器中完成。"
  },
  {
    "question": "可以选择 A4 或 Letter 纸张规格吗？",
    "answer": "可以。您可以自由选择 A4 或 Letter 尺寸，并调整横纵方向与页边距。"
  }
];

const howTo: PngToPdfLocaleContent['howTo'] = [
  {
    "name": "选择 PNG 图片",
    "text": "将 PNG 文件拖入区域或从设备中选择。"
  },
  {
    "name": "排序并设置纸张",
    "text": "调整图片先后顺序，并设置 A4/Letter 纸张、方向及页边距。"
  },
  {
    "name": "生成并下载 PDF",
    "text": "点击 '生成 PDF'，就绪后保存文档到本地。"
  }
];

const seo: PngToPdfLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "将 PNG 图片快速合并为便于打印的 PDF 文档",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "这款 PNG 转 PDF 转换器能够帮您把多张照片或扫描件整合成一个结构清晰的 PDF 文件。支持自由调整排序与页面规格。"
  },
  {
    "type": "title",
    "text": "制作精美 PDF 的小技巧",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "按逻辑调整图片顺次，确保封面或重要照片在最前。",
      "根据图片宽高比例选择纵向或横向版式。",
      "适当增加页边距，防止家庭打印机打印时切边。"
    ]
  },
  {
    "type": "tip",
    "title": "隐私安全无忧",
    "html": "所有文件转换均在本地浏览器中完成，绝不会上传至任何第三方服务器。"
  }
];

export const content: PngToPdfLocaleContent = {
  slug, title, description, ui, seo, faq, bibliography, howTo,
  schemas: generateSchemas({ title, description, inLanguage: 'zh', faq, howTo }),
};
