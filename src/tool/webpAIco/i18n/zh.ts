import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAIcoLocaleContent } from '../index';

const slug = 'webp-to-ico-converter';
const title = '在线将 WebP 转换为 ICO';
const description =
  '将 WebP 图像转换为支持透明度的官方 ICO。无需上传文件。生成真实 Microsoft 二进制标头。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 WebP 文件...',
  convertText: '立即将它们转换为 ICO',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: WebpAIcoLocaleContent['faq'] = [
  {
    question: '我可以将 WebP 贴纸设计转换为官方的网页 Favicon ICO 吗？',
    answer:
      '当然可以。由于极高的通用兼容性需求, Favicon 仍然需要经典的 Microsoft ICO 扩展名。此工具将注入二进制标头, 构建一个 100% 合规的图标。',
  },
  {
    question: '在批量创建企业图标时, 我需要在线排队等待吗？',
    answer:
      '完全不需要。我们的转换器在浏览器中加载 JavaScript, 并切断任何上传网络。您设备的 CPU 会异步处理一百张甚至更多照片。',
  },
  {
    question: '生成的 ICO 是否支持原始 WebP 的透明度？',
    answer:
      '是的。我们的引擎在内部使用完全支持 32 位色的 HTML5 Canvas API, 每个透明区域都将干净利落地转移到图标文件中。',
  },
];

const howTo: WebpAIcoLocaleContent['howTo'] = [
  {
    name: '拖拽您本地的所有 WebP 贴纸',
    text: '批量移动大型图片集, 无需担心网络上传限制。',
  },
  {
    name: '逻辑异步转换与直接组装',
    text: '观察进度条和元素如何自动完成, 内存正逐字节处理每一帧数据。',
  },
  {
    name: '获取您的系统和 Web 开发图标包',
    text: '点击大按钮下载打包文件, 或者如果您只需要一个图标, 也可以手动单独下载。',
  },
];

const bibliography: WebpAIcoLocaleContent['bibliography'] = [
  {
    name: 'ICO Web 标头通用文档',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Google WebP 文档',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: WebpAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP 转 ICO 转换器: 用现代素材创建完美 Favicon',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '现代网页设计工作流程产生 <strong>WebP</strong> 格式的素材: 经过优化的 LOGO、UI 图标和品牌元素。但是, 当您需要配置网站的 <strong>favicon</strong> 或 Windows 桌面应用程序的图标时, 所需格式仍然是 <strong>ICO</strong>。将 WebP 转换为 ICO 允许您在不丢失原始质量的情况下重复使用这些高质量素材。',
  },
  {
    type: 'title',
    text: 'WebP vs ICO: 用途不同的格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP 是一种通用图像格式, 非常适合照片、插画和网页 UI 图标。其高效的压缩使其成为加快页面加载速度的理想选择。然而, 它缺乏操作系统和浏览器识别和显示应用程序图标或 favicon 所需的特定二进制结构。',
  },
  {
    type: 'paragraph',
    html: 'ICO 是一种 Microsoft 专门为图标设计的容器格式。它可以在单个文件中存储多种分辨率, 并通过 32 位 Alpha 通道支持完整透明度。按照惯例, 浏览器会寻找 <code>favicon.ico</code> 文件, 这种格式确保您的图标在标准屏幕以及 Retina 和 4K 显示器上都能保持清晰。',
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
          '您的品牌 LOGO 会被传输到第三方服务器',
          '每次转换都需要互联网连接',
          '输出质量取决于服务器性能',
          '每日转换次数通常有限制',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '您的 LOGO 永远不会离开浏览器',
          '按照 Microsoft 标准生成 ICO 二进制标头',
          '32 位透明度被完整保留',
          '支持成套图标的批量转换',
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
    html: '浏览器原生解码 WebP 文件并将其绘制到 32 位色深的 <strong>HTML5 Canvas</strong> 上, 保留原始 Alpha 通道。我们的 JavaScript 引擎随后通过 <code>getImageData()</code> 方法提取像素数据, 并根据 Microsoft 标准指定的 ICONDIR 和 ICONDIRENTRY 标头构建 ICO 二进制结构。',
  },
  {
    type: 'paragraph',
    html: '结果是一个合法合规的 ICO 文件, 而不是简单的重命名。像素数据采用 Windows、macOS 和所有现代浏览器在加载 favicon 或应用程序图标时所期望的正确结构进行打包。',
  },
  {
    type: 'tip',
    title: '高清 Favicon 提示',
    html: '请始终使用最高分辨率的素材生成 ICO。512×512 或更大的 WebP 将在 Retina 和 4K 显示器上生成非常清晰的图标, 而低分辨率图标在这些屏幕上会显得模糊。',
  },
  {
    type: 'title',
    text: '应用场景与兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '为任何网站或 Web 应用程序创建 favicon.ico 文件。',
      '为 Windows 软件安装程序生成应用程序图标。',
      '为 Electron 应用或类似框架制作桌面图标。',
      '为 Chrome 和 Firefox 浏览器扩展制作图标集。',
      '将品牌 WebP 标志转换为企业级应用的图标。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '您的现代设计流程生产 WebP；但应用程序生态系统仍然需要 ICO。此工具在数秒内弥合了这一差距, 无需让您的品牌素材离开浏览器即可生成具有正确二进制结构和完整透明度的图标。',
  },
];

export const content: WebpAIcoLocaleContent = {
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
