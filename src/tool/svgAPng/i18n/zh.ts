import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAPngLocaleContent } from '../index';

const slug = 'svg-to-png-converter';
const title = '在线免费将 SVG 转换为 PNG';
const description =
  '在浏览器中将 SVG 矢量文件转换为 PNG。支持双倍缩放高清输出。保留透明度。无需上传文件。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 SVG 文件...',
  convertText: '立即将它们转换为 PNG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中': '参考文献',
  faqTitle: '常见问题',
};

const faq: SvgAPngLocaleContent['faq'] = [
  {
    question: '为什么要将 SVG 文件转换为 PNG？',
    answer:
      'SVG 是基于矢量的, 非常适合标志设计, 但有时您需要栅格化的 PNG 格式以便在不支持矢量的应用程序中使用, 或者通过即时通讯软件或社交媒体进行分享。',
  },
  {
    question: '我可以选择输出尺寸吗？',
    answer:
      '目前我们默认将原始 SVG 的比例翻倍, 以确保生成的 PNG 图像清晰, 并适用于 Retina 或 4K 屏幕。',
  },
  {
    question: 'SVG 的透明度会保留吗？',
    answer:
      '是的, 生成的 PNG 会保留原始 SVG 的 Alpha 通道, 使所有透明背景保持原样。',
  },
];

const howTo: SvgAPngLocaleContent['howTo'] = [
  {
    name: '放入您的 SVG 文件',
    text: '将您的 SVG 文件拖入上方区域。',
  },
  {
    name: '高清 PNG 生成',
    text: '在毫秒之间, 我们的本地引擎就会将每个矢量重建为透明 PNG 格式的高清像素层。',
  },
  {
    name: '下载文件',
    text: '您可以单独下载生成的 PNG, 也可以将其打包为 ZIP 下载。',
  },
];

const seo: SvgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG 转 PNG 转换器: 从无限矢量到通用栅格',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> (可缩放矢量图形) 是网页设计的完美选择: 无限缩放、轻量级, 且可以使用任何代码编辑器进行编辑。但是当您需要快速在移动应用中使用该徽标或图标、在社交媒体上分享或插入 PowerPoint 演示文稿时, 您就会遇到阻碍: 大多数此类平台并不支持 SVG。 <strong>PNG</strong> 格式则是通用的解决方案: 栅格化、带有 Alpha 通道, 且在绝对任何场景下都具有良好的兼容性。',
  },
  {
    type: 'title',
    text: 'SVG vs PNG: 为 Web 打造矢量, 为世界提供栅格',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG 以数学指令的形式存储图像: 贝塞尔曲线、渐变、多边形。这意味着同一个文件在 16 像素或 16,000 像素下看起来都非常完美。它是网页代码、CSS 动画以及任何需要无损适应不同屏幕分辨率元素的理想格式。',
  },
  {
    type: 'paragraph',
    html: 'PNG 将图像存储为像素网格, 其中包含每个像素的颜色和透明度信息。它是一种 <strong>无损</strong> (lossless) 格式, 意味着画质被完全保留。一旦 SVG 被栅格化为 PNG, 分辨率就固定了。这就是为什么选择正确的导出尺寸至关重要: 我们的工具以双倍缩放 (2x) 进行渲染, 以确保在 Retina 和 4K 屏幕上保持清晰。',
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
          '您的 SVG 代码会传输到外部服务器',
          '画质不稳定的远程渲染',
          '需要等待上传和处理时间',
          '对 SVG 文件大小有限制',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '您的 SVG 数据永远不会离开浏览器',
          '利用浏览器原生引擎实现极高还原度',
          '输出 2 倍高清 PNG 以适配高分辨率屏幕',
          '通过完整 Alpha 通道完美保留透明度',
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
    html: '处理过程始于将 SVG 文件加载到 JavaScript 的 <strong>Image</strong> 元素中。一旦浏览器引擎解析并渲染了矢量 XML, 生成的图像就会被绘制到 <strong>HTML5 Canvas</strong> 上, 画布尺寸是原始 SVG 尺寸的两倍 (2x 缩放)。这样就产生了一个在每个维度上都有两倍像素的 PNG, 非常适合高分辨率显示器。',
  },
  {
    type: 'paragraph',
    html: '与转换为 JPG 不同, 在导出为 PNG 时, 画布保留了完整的 Alpha 通道: 原始 SVG 中的透明区域在生成的 PNG 中变为完全透明的像素——没有白色背景填充。导出使用具有无损压缩特性的 <code>toDataURL(\'image/png\')</code> 方法。',
  },
  {
    type: 'tip',
    title: '栅格化前的提示',
    html: '请谨慎选择您的 PNG 导出尺寸——将 SVG 栅格化是一个单向过程: 您无法从生成的 PNG 中恢复矢量数据。请始终保留原始 SVG 作为母带源, 并以您可能需要的最高分辨率生成 PNG。',
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
      '为 PowerPoint 或 Google Slides 演示文稿导出矢量标志。',
      '为 iOS、Android 或渐进式 Web 应用 (PWA) 创建 PNG 图标。',
      '在 Instagram、LinkedIn 或其他社交媒体上分享 SVG 设计。',
      '将矢量插图插入 Word 文档或 PDF。',
      '为 CMS 预览生成 SVG 图形的 PNG 缩略图。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG 是矢量世界的语言；PNG 是通往数字世界其他领域的通行证。此工具能在浏览器中直接以 2 倍分辨率将您的 SVG 栅格化并保留透明度, 您的设计数据完全不会传输到任何外部服务器。',
  },
];


export const content: SvgAPngLocaleContent = {
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
