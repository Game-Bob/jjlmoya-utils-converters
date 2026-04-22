import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAIcoLocaleContent } from '../index';

const slug = 'jpg-to-ico-converter';
const title = 'JPG 转 ICO 转换器';
const description =
  '使用真实的 Microsoft 二进制标头将 JPG 照片转换为 ICO。自动正方形裁剪。无需上传文件。免费且私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 JPG 文件...',
  convertText: '立即将它们转换为 ICO',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中': '参考文献',
  faqTitle: '常见问题',
};

const faq: JpgAIcoLocaleContent['faq'] = [
  {
    question: '生成的 ICO 文件是否原生兼容自定义 Windows 文件夹？',
    answer:
      '是的, 我们通过在图像矩阵的底层插入标准化的二进制标头, 创建 100% 真实的 Microsoft 图标格式文件。',
  },
  {
    question: '如果我的原始 JPG 是全景横向照片, 比例会怎样？',
    answer:
      '严格的全球 ICO 标准绝对要求完美的正方形图像。我们的 HTML5 JS 引擎将使您的照片居中并裁剪多余部分, 确保平衡的结果。',
  },
  {
    question: '将公司或个人 JPG 徽标上传到转换器是否危险？',
    answer:
      'JavaScript 中的 Canvas 引擎运行在您自己的浏览器中。将数百张照片转换为 ICO 不会向任何外部云端发送单字节数据。',
  },
];

const howTo: JpgAIcoLocaleContent['howTo'] = [
  {
    name: '收集原始 JPG 照片',
    text: '查找并收集常规照片, 并将其拖放到我们的正方形区域中。',
  },
  {
    name: '见证二进制纯化',
    text: '重新编码将原生且快速地异步插入元数据和标头, 在内存中生成严格纯净的图标 Morse code.',
  },
  {
    name: '编译多个 ZIP 设计',
    text: '只需几秒钟即可将所有内容打包成压缩包批量下载, 完成工作。',
  },
];

const seo: JpgAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG 转 ICO 转换器: 从您的照片创建 Favicon 和 Windows 图标',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> 格式是 Microsoft 针对 Windows 应用程序图标和网站 favicon 的标准。与简单地将 JPG 重命名为 .ico 不同, 真正的 ICO 文件需要特定的二进制结构, 其中包含 22 字节的标头和嵌入的图像目录。 <strong>JPG</strong> 是创建这些图标最常见的起点——公司徽标、个人资料图片或任何您想变成应用程序或网站视觉标志的图像。',
  },
  {
    type: 'title',
    text: 'JPG 还是 ICO？何时使用每种格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> 是源格式, 而不是图标的目标格式。它非常适合照片和横幅, 但与需要图标的系统不兼容: Windows 资源管理器、浏览器的书签栏、桌面快捷方式或 PWA 应用程序清单。寻找图标的操作系统或浏览器期望的是 ICO 格式——如果找不到, 它将显示通用图标或破裂的正方形。',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> 格式设计用于在单个文件中包含多种分辨率: 书签栏使用 <strong>16×16</strong>, 快捷方式使用 <strong>32×32</strong>, 资源管理器使用 <strong>48×48</strong>, 高密度显示器使用 <strong>256×256</strong>。浏览器和操作系统会根据显示环境自动选择合适的分辨率——用户无需进行任何管理。',
  },
  {
    type: 'title',
    text: '对比: 本地转换 vs 云端转换',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '云端转换器',
        description: '将您的文件上传到远程服务器的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '上传和下载时的网络延迟',
          '您的公司徽标存储在第三方服务器上',
          '文件大小限制和每日转换上限',
          '干扰性广告和第三方追踪器',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理 Morse code.',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '即时速度——零网络延迟',
          '完全私密——数据发送量为 0 字节',
          '没有 MB 限制或文件数量限制',
          '界面简洁, 无广告或追踪',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技术原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'JPG 被解码并绘制到内存中的 <strong>HTML5 Canvas</strong> 上。由于 ICO 格式要求正方形图像, 引擎会自动检测 JPG 是否为长方形, 并通过使最相关的部分居中来进行裁剪。然后, 它使用正确的魔数 (<code>00 00 01 00</code>)、图像目录和编码后的像素数据构建标准的 Microsoft ICO 标头。结果是一个真正的二进制 .ico 文件——而不是重命名的 PNG。',
  },
  {
    type: 'paragraph',
    html: '由于 JPG 缺少 Alpha 通道, 生成的 ICO 也不会有透明度——它将具有从原始照片继承的实心背景。如果您需要具有透明背景的 favicon (例如, 为了适应深色或浅色书签栏), 建议的工作流程是: 在编辑器中删除背景, 保存为 PNG, 然后使用 PNG 转 ICO 转换器。',
  },
  {
    type: 'tip',
    title: '提示: 单个 ICO 中的多种分辨率',
    html: 'ICO 文件夹可以在单个文件中打包 <strong>多种分辨率</strong> —— 浏览器或操作系统会自动为每个环境选择最合适的一个。为了获得最佳效果, 请使用至少 <strong>256×256 像素</strong> 的正方形 JPG 作为源文件: 这为转换器提供了足够的信息, 可以在不像素化的情况下生成清晰的 16×16、32×32 und 48×48 尺寸。',
  },
  {
    type: 'title',
    text: '应用场景 und 兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '网站 favicon: 兼容包括 Internet Explorer 在内的所有浏览器。',
      'Windows 10/11 中的文件夹和桌面图标自定义。',
      '桌面应用程序或安装程序的快捷方式图标。',
      'Electron 项目或 PWA 应用程序的应用图标。',
      '文件管理系统和企业资源管理器的图标。',
    ],
  },
  {
    type: 'title',
    text: '结论',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '对于任何需要可识别视觉身份的 Web 或桌面项目来说, 将 JPG 转换为 ICO 都是技术上必不可少的一步。此工具可在几秒钟内生成具有正确二进制结构的真实 ICO, 且无需将您的徽标上传到任何外部服务器。其结果适用于所有浏览器、Windows 资源管理器以及任何采用 Microsoft ICO 标准的系统。',
  },
];

export const content: JpgAIcoLocaleContent = {
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
    inLanguage: 'zh',
    faq,
    howTo,
  }),
};
