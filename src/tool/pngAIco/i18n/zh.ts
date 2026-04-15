import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAIcoLocaleContent } from '../index';

const slug = 'png-to-ico-converter';
const title = '在线 PNG 转 ICO 转换器';
const description =
  '使用真实的二进制标头将 PNG 转换为 ICO。完美保留透明度。无需上传文件。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖动 PNG 文件...',
  convertText: '立即将它们转换为 ICO',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: PngAIcoLocaleContent['faq'] = [
  {
    question: '你们的转换器生成的是简单的伪装 PNG 文件还是真正的 ICO？',
    answer:
      '我们生成的是真正的 ICO。我们从您的 PNG 中提取数据, 创建标准化的 Microsoft 十六进制文件头 (包含 22 字节的文件头 + 目录), 在本地调整大小为理想的正方形格式, 并组装成最终被系统验证为原生格式的文件。',
  },
  {
    question: '将我的徽标放入图标时, 透明度会保留吗？',
    answer:
      '绝对可以。我们的引擎以 32 位方式读取您的 PNG, 在锚定的同时精确保留任何透明穿透孔, 使其在浏览器地址栏 (Favicon) 中脱颖而出。',
  },
  {
    question: '我的公司徽标是否存储在你们的服务器上？',
    answer:
      '此服务保证零外部网络接触。转换器在您的本地 HTML5 Canvas 内运行；图标的制作过程百分之百在您的机器内部私密的本地内存中完成。',
  },
];

const howTo: PngAIcoLocaleContent['howTo'] = [
  {
    name: '拖动文件开始传输',
    text: '将您的照片矩阵 (理想状态是正方形 512x512 PNG) 放入交互式的本地框图中。',
  },
  {
    name: '自动字节码编译',
    text: '在加载和制造本地纯净的 ICO 十六进制文件头矩阵时, 您将看到内部进度条在运行。',
  },
  {
    name: '打包 ZIP 批量下载',
    text: '点击网站专用的批量编译按钮 (全局 ZIP 按钮) 下载, 或单独下载适用于 Windows 可执行文件的缩略图。',
  },
];

const bibliography: PngAIcoLocaleContent['bibliography'] = [
  {
    name: 'Microsoft ICO 格式技术结构',
    url: 'https://en.wikipedia.org/wiki/ICO_(file_format)',
  },
  {
    name: 'Favicon 标准 - W3C',
    url: 'https://www.w3.org/2005/10/howto-favicon',
  },
];

const seo: PngAIcoLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG 转 ICO 转换器: 制作透明 Favicon 的最佳工具',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>带透明度的 PNG</strong> 是制作专业 ICO 图标的理想原始素材。与不含 Alpha 通道的 JPG 或有损格式不同, PNG 能提供 ICO 格式所需的精准要素: 清晰的像素、干净的边缘以及 32 位 Alpha 通道。这使得图标能完美融入任何背景——无论是 Safari 的白色书签栏、Firefox 的深色栏, 还是 Windows 11 的桌面。',
  },
  {
    type: 'title',
    text: 'PNG 还是 ICO？何时使用各格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> 是工作格式: 您可以在其中设计徽标、从 Figma 或 Illustrator 导出并保存可编辑版本。它的透明度、像素精确度和无损压缩特性使其在设计过程中无可替代。但浏览器、操作系统和 Windows 应用程序在寻找 Favicon 或应用图标时并不直接接受 PNG——它们需要 ICO。',
  },
  {
    type: 'paragraph',
    html: '<strong>ICO</strong> 是在 Microsoft 环境和 Web 端分发图标的格式。它包含一个特定的二进制结构, 允许将多种分辨率打包到单个文件中: 浏览器会读取 ICO 内部目录, 并自动为浏览器标签选择 <strong>16×16</strong>、为快捷方式选择 <strong>32×32</strong>、为文件资源管理器选择 <strong>48×48</strong>、并为 Retina 和 4K 屏幕选择 <strong>256×256</strong>。从透明 PNG 开始制作可保证所有这些分辨率都拥有完美的边缘而不产生白边。',
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
          '文件大小限制和每日转换配额',
          '干扰性广告和第三方追踪器',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '即时处理——零网络延迟',
          '完全私密——数据向外发送量为 0 字节',
          '无 MB 限制或文件数量限制',
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
    html: 'PNG 文件被解码到内存中的 <strong>HTML5 Canvas</strong>, 该画布支持完整的 32 位 Alpha 通道。引擎构建标准的 Microsoft ICO 文件头及其正确的幻数 (<code>00 00 01 00</code>)、包含尺寸和数据偏移的图像目录以及保留透明度信息的像素数据。结果是一个真正的二进制 .ico 文件, Windows、macOS 和所有浏览器都能原生识别。',
  },
  {
    type: 'paragraph',
    html: 'PNG 的透明度在生成的 ICO 中得到完整保留——透明像素保持透明, 半透明像素保留其精确的 Alpha 值, 而不透明像素保留其原始颜色。这对于在多变背景下展示徽标至关重要: 您的 Favicon 在浅色模式、深色模式以及浏览器界面的任何颜色组合下都能正确显示。',
  },
  {
    type: 'tip',
    title: '提示: 使用 512×512 的 PNG 作为源文件',
    html: '为了获得最佳效果, 请使用 <strong>512×512 的正方形 PNG</strong> 作为源图像。此分辨率为转换器提供了足够的信息, 从而能够清晰地生成所有标准的 ICO 尺寸——从 16×16 的 Favicon 到 256×256 的高清屏幕图标——而不会出现像素化或边缘细节丢失。源 PNG 越大, 小尺寸图标的效果就越好。',
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
      '网站透明 Favicon: 适用于 Chrome、Firefox、Safari、Edge 和 Internet Explorer。',
      'PWA 应用图标: manifest.json 引用 ICO 以进行桌面端安装。',
      '在使用公司徽标自定义 Windows 10/11 文件夹时, 无需担心白边背景。',
      '桌面应用程序、安装程序和可执行文件的快捷方式图标。',
      'Chrome 和 Firefox 的浏览器扩展图标。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '带透明度的 PNG 无疑是制作专业品质 ICO 图标的最佳起点。使用此工具, 转换是即时的, Alpha 通道得到完整保留, 生成的文件是具有正确二进制结构的真实 ICO。无需将徽标上传到任何服务器, 无水印, 无限制——并在所有尺寸下拥有完美的透明效果。',
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
    inLanguage: 'zh',
    faq,
    howTo,
  }),
};
