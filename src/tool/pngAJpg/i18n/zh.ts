import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAJpgLocaleContent } from '../index';

const slug = 'png-to-jpg-converter';
const title = '在线将 PNG 转换为 JPG';
const description =
  '在您自己的计算机上立即将 PNG 图像转换为快速压缩的 JPG 格式。无需将照片上传到互联网。支持批量优化。';

const ui: ImageConverterUI = {
  dragText: '拖拽 PNG 文件...',
  convertText: '立即将其转换为 JPG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: PngAJpgLocaleContent['faq'] = [
  {
    "question": "为什么选择我们的本地 PNG 转 JPG 转换器？",
    "answer": "与普通的在线转换工具不同，我们的程序完全在您的浏览器内部处理图片。您的文件绝不会上传到第三方服务器，保证绝对的数据隐私。"
  },
  {
    "question": "JPG 与 PNG：哪种格式更适合您？",
    "answer": "PNG 非常适合包含透明背景的标志和图标。JPG 具有更高的压缩率，文件体积更小，非常适合网页照片和广告横幅。"
  },
  {
    "question": "无需上传的本地转换是如何实现的？",
    "answer": "我们使用了 HTML5 Canvas 技术。浏览器在后台的虚拟画布上绘制 PNG 图片，将透明区域填充为纯白背景，并直接生成 JPG 字节流。"
  },
  {
    "question": "处理商业机密或敏感文件安全吗？",
    "answer": "非常安全。所有数据仅储存在您的浏览器内存中，关闭标签页后临时数据将立刻完全销毁。"
  }
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: '选择文件',
    text: '在文件夹中准备好 PNG 文件，并将其全部拖入处理区域，或使用文件资源管理器查找。',
  },
  {
    name: '即时处理',
    text: '在浏览器本地优化大小的同时，确认每个文件的状态变为\"就绪\"。',
  },
  {
    name: '优化下载',
    text: '逐个保存您的新 JPG，或使用\"下载全部\"按钮获取包含所有图像的压缩 ZIP 文件。',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    "type": "title",
    "text": "PNG转JPG在线转换器：图像优化指南",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "在浏览器中直接将PNG图片转换为JPG格式，无需上传服务器，保护隐私并提高网站加载速度。"
  },
  {
    "type": "title",
    "text": "JPG 与 PNG 对比",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "PNG支持透明背景但体积较大；JPG压缩率高且体积小，非常适合网页图片和照片。"
  },
  {
    "type": "paragraph",
    "html": "转换为JPG可以在保持良好视觉质量的同时大幅减少文件大小。"
  },
  {
    "type": "title",
    "text": "本地处理与云端转换对比",
    "level": 3
  },
  {
    "type": "comparative",
    "items": [
      {
        "title": "云端转换工具",
        "description": "需要将图片上传到远程服务器。",
        "icon": "mdi:cloud-upload",
        "pointIcon": "mdi:close-circle-outline",
        "points": [
          "网络传输延迟",
          "隐私泄露风险",
          "文件大小限制",
          "广告弹窗"
        ]
      },
      {
        "title": "本地转换架构",
        "description": "基于HTML5 Canvas技术的本地直接处理。",
        "icon": "mdi:laptop-mac",
        "highlight": true,
        "points": [
          "秒级极速转换",
          "绝对隐私安全（0字节上传）",
          "无文件大小限制",
          "界面简洁"
        ]
      }
    ]
  },
  {
    "type": "title",
    "text": "本地转换技术原理",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "利用浏览器原生的Canvas API，在内存中渲染图像并自动充填白色背景后导出JPG字节流。"
  },
  {
    "type": "paragraph",
    "html": "透明区域将自动替换为纯白背景，完美适配JPG标准。"
  },
  {
    "type": "tip",
    "title": "SEO 优化建议",
    "html": "压缩网页图片体积可显著改善 PageSpeed 指标和用户体验。"
  },
  {
    "type": "title",
    "text": "企业级数据安全",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "处理敏感文件更安全，关闭标签页后所有临时内存数据即刻销毁。"
  },
  {
    "type": "title",
    "text": "兼容性说明",
    "level": 3
  },
  {
    "type": "list",
    "icon": "mdi:check-circle",
    "items": [
      "主流操作系统与移动设备",
      "社交媒体平台",
      "办公软件",
      "CMS建站系统"
    ]
  },
  {
    "type": "title",
    "text": "总结",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "兼具高速与安全的专业图像处理工具。"
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
  schemas: generateSchemas({ title, description, inLanguage: 'zh', faq, howTo }),
};
