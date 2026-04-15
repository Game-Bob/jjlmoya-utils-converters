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
    question: '为什么要选择我们的本地 PNG 转 JPG 转换器？',
    answer:
      '与传统工具不同，我们的实用程序完全在您的浏览器中处理文件。您的图像永远不会触及他人的硬盘，保证了您数据的完全主权和隐私。',
  },
  {
    question: 'JPG 还是 PNG？哪种更适合我的情况？',
    answer:
      'PNG 是具有透明度要求的徽标和元素的理想选择。然而，JPG 是摄影和网页横幅的黄金标准，因为它能达到更小的文件体积，从而显著提高网站的加载速度。',
  },
  {
    question: '如何在不上传任何内容的情况下进行技术转换？',
    answer:
      '我们利用 HTML5 Canvas 的强大功能。浏览器在一个不可见的虚拟画布上重建图像，用白色填充透明部分，并生成可以直接立即下载的字节流。',
  },
  {
    question: '对于机密文档安全吗？',
    answer:
      '是的，对于银行业、医疗保健或法律行业的专业人士来说，这是最安全的选择。作为一个仅使用您内存的“黑匣子”，关闭标签页后，内部发生的一切都会消失，从而避免了第三方云端的泄露。',
  },
];

const howTo: PngAJpgLocaleContent['howTo'] = [
  {
    name: '选择文件',
    text: '在文件夹中准备好 PNG 文件，并将其全部拖入处理区域，或使用文件资源管理器查找。',
  },
  {
    name: '即时处理',
    text: '在浏览器本地优化大小的同时，确认每个文件的状态变为“就绪”。',
  },
  {
    name: '优化下载',
    text: '逐个保存您的新 JPG，或使用“下载全部”按钮获取包含所有图像的压缩 ZIP 文件。',
  },
];

const bibliography: PngAJpgLocaleContent['bibliography'] = [
  {
    name: 'PNG 联盟规范',
    url: 'http://www.libpng.org/pub/png/',
  },
  {
    name: 'JPEG 委员会',
    url: 'https://jpeg.org/',
  },
];

const seo: PngAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG 转 JPG 转换器：图像优化终极指南',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '在数字设计和网页开发的世界中，效率就是一切。PNG (Portable Network Graphics) 格式因其保持透明度的能力和无损压缩而受到喜爱，但它有一个大敌人：文件重量。当您希望您的网站飞速运行或您的电子邮件即时加载时，从 PNG 转换为 JPG 是最明智的技术决策。',
  },
  {
    type: 'title',
    text: 'JPG 还是 PNG？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '没有一种格式优于另一种格式，只有适合每种需求的工具。PNG 是无损格式，非常适合界面模型、带有小文本的徽标以及需要透明背景的视觉元素。然而，这种忠实性是有代价的：文件体积可能比压缩后的同类产品重 5 或 10 倍。',
  },
  {
    type: 'paragraph',
    html: '另一方面，JPG (Joint Photographic Experts Group) 使用离散化算法技术来删除人眼几乎察觉不到的信息，从而实现羽量级的大小。它是摄影、广告横幅和社交媒体的黄金标准。通过将 PNG 转换为 JPG，您是将几何保真度换取网络速度。',
  },
  {
    type: 'title',
    text: '架构对比：本地 vs 云端',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '云端转换器',
        description: '将您的照片上传到远程服务器的传统工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '网络延迟（上传/下载）',
          '私有数据泄露风险',
          '每个文件的尺寸限制',
          '广告和追踪器',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术在您的硬件上直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '无需网络的即时速度',
          '隐私保证（发送数据为 0 字节）',
          '无单文件大小限制',
          '专业且干净的界面',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技术转换的工作原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '您可能想知道如何在不发送到服务器的情况下转换图像。奥秘在于现代浏览器的强大功能。当您选择一个文件时，我们会生成一个仅存在于您内存中的 Blob。该 Blob 会被绘制在一个不可见的 HTML5 Canvas 元素上。',
  },
  {
    type: 'paragraph',
    html: '由于 JPG 不支持透明度，我们的算法会在“绘制”PNG 之前先用纯白色填充背景。合成图像后，我们执行原生导出方法，生成可供您的计算机直接下载的字节流。',
  },
  {
    type: 'tip',
    title: 'SEO 建议：理想的文件重量',
    html: 'Google 会主动惩罚缓慢的网站。如果您的 Largest Contentful Paint (LCP) 因为一个 2MB 的头部 PNG 而偏高，那么将其转换为 200KB 的 JPG 可以在不影响视觉效果的情况下立即改善您的 PageSpeed 指标。',
  },
  {
    type: 'title',
    text: '企业和专业人士的安全保障',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '如果您在银行、医疗保健或法律等敏感行业工作，将文件上传到在线转换器属于安全违规行为。我们的工具就像一个“黑匣子”：内部发生的一切都留在您的内存中。这是处理机密文档唯一安全的方法。',
  },
  {
    type: 'title',
    text: '结果的兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'Windows、macOS 和移动设备查看器。',
      '社交网络 (Instagram, LinkedIn 等)。',
      '办公工具 (Word, PowerPoint)。',
      '内容管理系统 (WordPress, Shopify)。',
    ],
  },
  {
    type: 'title',
    text: '结论：像专业人士一样优化',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '这个转换器不只是另一个网页；它是为您生活更便捷而设计的工程杰作。无论您是开发人员还是家庭用户，这里都有节省空间并确保数据安全的终极解决方案。',
  },
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
