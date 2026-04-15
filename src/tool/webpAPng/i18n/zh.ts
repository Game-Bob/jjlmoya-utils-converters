import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAPngLocaleContent } from '../index';

const slug = 'webp-to-png-converter';
const title = '在线免费将 WebP 转换为 PNG';
const description =
  '在浏览器中将 WebP 图像转换为 PNG。保留透明度。无需上传文件到服务器。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 WebP 文件...',
  convertText: '立即将它们转换为 PNG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: WebpAPngLocaleContent['faq'] = [
  {
    question: '为什么我需要将 WebP 文件转换为 PNG？',
    answer:
      '尽管 WebP 文件更轻量, 但它们可能会在旧版 Photoshop 等编辑程序中引起不兼容问题。PNG 确保了 100% 的通用兼容性。',
  },
  {
    question: '从 WebP 转换为 PNG 时会丢失透明度吗？',
    answer:
      '完全不会。与转换为 JPG 不同, PNG 支持 Alpha 通道。我们的工具将保留原始文件的任何透明区域。',
  },
  {
    question: '我可以上传机密的公司文件吗？',
    answer:
      '当然可以。由于一切都在本地通过 JavaScript 运行, 您的公司图片永远不会离开您的电脑, 也不会存储在外部服务器上。',
  },
];

const howTo: WebpAPngLocaleContent['howTo'] = [
  {
    name: '拖拽您的 WebP 文件',
    text: '将您的 WebP 文件移动并放入主面板, 或以传统方式选择图片。',
  },
  {
    name: '高保真转换',
    text: '您的浏览器将逐像素重新绘制图像, 并生成 PNG 格式的精确副本, 同时保持原始色域。',
  },
  {
    name: '个人或批量下载',
    text: '您可以单独保存每个文件, 或者如果您处理了一批文件, 请点击 ZIP 按钮将它们打包下载。',
  },
];

const bibliography: WebpAPngLocaleContent['bibliography'] = [
  {
    name: 'WebP API 和库文档',
    url: 'https://developers.google.com/speed/webp/docs/api',
  },
  {
    name: 'HTML Canvas 2D 上下文规范',
    url: 'https://html.spec.whatwg.org/multipage/canvas.html',
  },
  {
    name: 'Can I use: WebP 图像格式',
    url: 'https://caniuse.com/webp',
  },
];

const seo: WebpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP 转 PNG 转换器: 编辑与设计的专业选择',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '当设计师下载了 <strong>WebP</strong> 格式的图形素材并尝试在 Photoshop、Figma 或 Illustrator 中打开时, 结果可能会令人沮丧: 文件无法加载或质量下降。<strong>PNG</strong> 格式是专业编辑公认的标准: 无损压缩、完整的 Alpha 通道, 以及在整个创意生产链中保证的兼容性。',
  },
  {
    type: 'title',
    text: '网页用 WebP, 工作室用 PNG',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP 是一种网页生产格式: 它的压缩算法经过优化是为了减少传输负担, 而不是为了在迭代编辑工作流程中保持最高保真度。每当您保存经过编辑的 WebP 时, 编解码器都会再次应用压缩。对于需要多次修改文件的项目, 这意味着质量的累积下降。',
  },
  {
    type: 'paragraph',
    html: 'PNG 使用 <strong>无损压缩</strong>: 无论您保存多少次文件, 每个像素的数据都会被完整保留。它是 UI/UX 设计师、数字插画家和品牌团队的首选格式, 因为他们需要在数十次修订中保持视觉完整性。Photoshop、Figma、Sketch 和 Illustrator 等工具都将 PNG 视为其主要导出格式。',
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
        description: '将文件上传到远程服务器的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的设计素材会被存储在第三方服务器上',
          '大型文件的远程处理速度较慢',
          '对于机密客户项目存在泄露风险',
          '批量转换受到限制或需要付费',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '您的设计永远不会离开您的机器',
          '立即批量转换数十个文件',
          '完整保留 Alpha 通道和色域',
          '客户项目的绝对隐私',
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
    html: '现代浏览器可以原生解码 WebP。我们的工具利用这一功能将文件加载到 JavaScript <strong>Image</strong> 元素中, 然后将其绘制到与原始尺寸相同的 HTML5 Canvas 上。与转换为 JPG 不同, 这里不需要背景填充: 画布保留了完整的 Alpha 通道。',
  },
  {
    type: 'paragraph',
    html: '最终导出使用 <code>toDataURL(\'image/png\')</code> 方法, 该方法生成一个忠实于原始图像的无损 PNG。结果是一个可以直接导入任何专业设计软件的文件, 无需中间步骤、不会产生偏色或透明度损失。',
  },
  {
    type: 'tip',
    title: '编辑器提示',
    html: '当您需要继续编辑图像时, 请使用 PNG。无损压缩保证了反复保存不会导致质量下降——这在 Photoshop 或 Figma 中处理图层、蒙版或色彩调整时至关重要。',
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
      '将 WebP 素材导入 Photoshop、Figma、Sketch 或 Illustrator。',
      '保留 LOGO 和图标的透明度, 以便在多种背景下使用。',
      '为长期项目创建图形的母带副本。',
      '为需要带 Alpha 通道 PNG 的移动应用导出素材。',
      '在具有多变背景的设计模型和演示文稿中使用图片。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '如果 WebP 是网页服务器格式, 那么 PNG 就是设计工作室格式。此工具将您的 WebP 素材转换为生产就绪的 PNG, 保留透明度和最高质量——一切都在您的浏览器中完成, 且您的文件永远不会离开您的机器。',
  },
];


export const content: WebpAPngLocaleContent = {
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
