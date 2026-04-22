import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { SvgAJpgLocaleContent } from '../index';

const slug = 'svg-to-jpg-converter';
const title = '在线免费将 SVG 转换为 JPG';
const description =
  '在浏览器中将 SVG 矢量文件转换为 JPG。支持 2 倍高清渲染。无需上传文件。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 SVG 文件...',
  convertText: '立即将它们转换为 JPG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中': '参考文献',
  faqTitle: '常见问题',
};

const faq: SvgAJpgLocaleContent['faq'] = [
  {
    question: '为什么要将 SVG 转换为 JPG？',
    answer:
      'JPG 在所有类型的设备上都具有最大的兼容性；将 SVG 转换为 JPG 是确保每个人都能无障碍查看您的设计（而不出现渲染问题）的最佳方式。',
  },
  {
    question: '转换后 SVG 的透明度会怎样？',
    answer:
      '由于 JPG 不支持透明度, 在转换为 JPG 时, 您的矢量作品将自动添加不透明的白色背景。',
  },
  {
    question: '生成的 JPG 分辨率是多少？',
    answer:
      '该工具以双倍缩放 (2x) 渲染 SVG, 以确保生成适合 Retina 屏幕和专业用途的高分辨率图像。',
  },
];

const howTo: SvgAJpgLocaleContent['howTo'] = [
  {
    name: '放入您的矢量文件',
    text: '将您的 SVG 文件拖入上方区域, 以准备导出列表。',
  },
  {
    name: '栅格化为 JPG',
    text: '该工具将矢量转换为高清像素, 并立即生成您的 JPG 文件。',
  },
  {
    name: '下载结果',
    text: '您可以单独下载 JPG 文件, 也可以将其打包为 ZIP 下载。',
  },
];

const seo: SvgAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'SVG 转 JPG 转换器: 让您的矢量图适配任何平台',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>SVG</strong> 格式是现代 Web 的原生语言: 轻量、可缩放、可编辑。但仍有很多平台完全无法识别矢量图。社交媒体、邮件客户端、Word 文档、打印应用程序以及绝大多数现实世界的软件都使用栅格化图像。<strong>JPG</strong> 是通用的最大公约数: 它无处不在、无一例外, 无需插件, 也无需额外的二次转换。',
  },
  {
    type: 'title',
    text: 'SVG vs JPG: 当矢量图需要变成照片时',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'SVG 以数学指令的形式存储图像。这种矢量特性使其非常适合 Web 展现, 但对于模拟世界和旧版软件来说则是不可见的。通过邮件发送的 SVG 文件在接收方的客户端中可能显示为无法理解的 XML 文本。附加到 Word 文档的 SVG 在旧版 Office 中可能完全无法渲染。',
  },
  {
    type: 'paragraph',
    html: 'JPG 将图像转换为像素矩阵, 并通过 JPEG 算法压缩颜色信息。由于它不支持 Alpha 通道, 转换器会自动将背景合并为纯白色。作为回报, 您将获得一个可以在 <em>地球上任何设备</em> 上打开的文件: 旧手机、打印机、智能电视、甚至是二十年前的编辑软件。它是兼容性最强的格式, 在许多环境下也是最有价值的格式。',
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
          '您的 SVG 代码 (包含私有的设计数据) 会传输到外部服务器',
          '字体和渐变色的渲染效果不统一',
          '每次转换都需要互联网连接',
          '输出的 JPG 质量并不总是可调',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '没有任何一个字节的 SVG 会离开您的浏览器',
          '使用浏览器原生引擎进行精准渲染',
          '输出 2 倍高清 JPG 以获得极致清晰度',
          '按照 JPG 标准自动应用白色背景',
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
    html: 'SVG 文件被加载到浏览器的 <strong>Image</strong> 元素中, 该元素使用其内置的矢量渲染引擎来解析 XML。视觉结果被绘制到 <strong>HTML5 Canvas</strong> 上, 并预先填充白色背景 (这是必须的, 因为 JPG 不支持透明度), 同时以双倍缩放绘制以最大化输出分辨率。',
  },
  {
    type: 'paragraph',
    html: '<code>toDataURL(\'image/jpeg\', 0.92)</code> 方法将画布像素转换为高质量的 JPG 文件。由于 JPEG 压缩过程中的色彩空间转换, SVG 的颜色可能会出现细微偏差。因此, 在用于对颜色保真度要求极高的专业印刷工作之前, 建议先预览结果。',
  },
  {
    type: 'tip',
    title: '印刷用途提示',
    html: '由于 JPEG 压缩时的颜色配置文件差异, SVG 的背景和渐变在 JPG 中看起来可能略有不同。在发送给印刷厂或用于印刷营销材料之前, 请务必先预览结果, 尤其是当品牌颜色的准确性至关重要时。',
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
      '在 Facebook、Twitter 或 LinkedIn 上分享 SVG 徽标和插图。',
      '通过 Outlook 或 Gmail 在邮件中添加矢量图形附件。',
      '将 SVG 设计插入 Word 文档、Excel 或演示文稿。',
      '在不支持 SVG 的在线商店中发布产品图片。',
      '为按需打印服务准备文件。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '现实世界仍然以像素为交流语言。此工具能在几秒钟内将您的 SVG 矢量图转换为通用的 JPG 语言, 提供高清渲染, 且您的设计数据永远不会离开浏览器。',
  },
];


export const content: SvgAJpgLocaleContent = {
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
