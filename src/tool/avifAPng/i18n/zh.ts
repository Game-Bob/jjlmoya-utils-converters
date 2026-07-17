import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAPngLocaleContent } from '../index';

const slug = 'avif-to-png-converter';
const title = '在线将 AVIF 转换为 PNG';
const description =
  '在保持透明度的同时，将 AVIF 图像转换为 PNG。无需上传文件。在您的浏览器中完成本地处理。免费且无限制。';

const ui: ImageConverterUI = {
  dragText: '拖拽 AVIF 文件...',
  convertText: '立即将其转换为 PNG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: AvifAPngLocaleContent['faq'] = [
  {
    question: '为什么要将 AVIF 转换为 PNG？',
    answer:
      'AVIF 格式虽然压缩率极高，但在旧版本浏览器和经典编辑器中的兼容性有限。通过将 AVIF 转换为 PNG，您可以确保文件保留原始透明度，并且所有应用程序都能打开它。',
  },
  {
    question: '原始 AVIF 文件的透明度会被保留吗？',
    answer:
      '是的。与 JPG 会删除透明背景不同，在导出为 PNG 时，我们的转换器会完整保留 Alpha 通道。',
  },
  {
    question: '我的图像真的不会被上传到互联网吗？',
    answer:
      '绝对是真的。我们的转换器使用内部 JavaScript 引擎在您的设备上 100% 本地运行。',
  },
];

const howTo: AvifAPngLocaleContent['howTo'] = [
  {
    name: '添加您的 AVIF 文件',
    text: '您可以将其直接拖到指定区域，或使用按钮浏览计算机上的文件夹。',
  },
  {
    name: '即时处理',
    text: '让 HTML5 处理器渲染图像；格式将在微秒内自动切换为 PNG。',
  },
  {
    name: '获取您的 PNG 文件',
    text: '逐个下载转换后的图像，或通过 ZIP 按钮下载整个压缩包。',
  },
];

const seo: AvifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF 转 PNG 转换器：从网页分发到专业编辑',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF 是在网页上分发图像的理想格式-小巧、高效且高质量。但是，当需要对这些图像进行编辑、修饰或在设计工具中处理时，AVIF 就成了障碍。Figma、Photoshop、Illustrator、Sketch 以及几乎所有的专业设计工具都期望接收 PNG 来进行透明度处理和无损编辑。将 AVIF 转换为 PNG 是连接网页分发世界与创意编辑世界之间的桥梁。',
  },
  {
    type: 'title',
    text: 'AVIF vs PNG：分发 vs 编辑',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF 作为分发格式脱颖而出：文件小、加载快、支持 Alpha 通道且视觉质量出色。然而，其工具生态系统有限。大多数设计软件无法直接导入 AVIF，这中断了创意工作流。尝试在 Figma 中打开 AVIF 或将其作为图层导入 Photoshop 根本行不通。',
  },
  {
    type: 'paragraph',
    html: 'PNG 是数字设计的原生格式。凭借无损压缩、完整的 Alpha 通道支持以及与所有创意工具的通用兼容性，PNG 是首选的工作格式。当您需要缩放、修饰、导出为多种格式或进行图层化工作时，PNG 保证您在过程中不会丢失任何细节或像素。',
  },
  {
    type: 'title',
    text: '对比：云端转换器 vs 我们的本地架构',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '云端转换器',
        description: '将您的 AVIF 文件上传到远程服务器进行处理的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的设计图像传输到了第三方服务器',
          '由于网络延迟带来的等待时间',
          'Alpha 通道可能丢失或改变',
          '大小限制导致批量转换困难',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术和 Canvas API 在浏览器中直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '完美还原并保留 Alpha 通道',
          '即时转换，无数据传输',
          '不设文件数量、大小或批量限制',
          '为专有设计资产提供完全隐私保护',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '带透明度的技术转换如何运行',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '现代浏览器凭借集成的 AV1 引擎原生支持 AVIF 解码。加载文件时，浏览器会在内存中对其进行解码，并保留所有 Alpha 通道信息。解码后的图像（包括其透明度）会以正确的合成模式绘制在 HTML5 <code>Canvas</code> 元素上，以保持 Alpha 通道。',
  },
  {
    type: 'paragraph',
    html: '与导出为 JPG（会通过填充白色来破坏透明度）不同，通过 <code>toBlob(\'image/png\')</code> 导出为 PNG 会完整保留 Alpha 通道。结果是一个具有无损压缩的 PNG，它保留了原始 AVIF 的每一个像素、每一处半透明和每一处细微差别。',
  },
  {
    type: 'tip',
    title: '任何设计工具必备的前提步骤',
    html: '在将您的 AVIF 导入 Figma、Photoshop、Illustrator 或任何设计工具之前，请先将其转换为 PNG。这些应用程序无法直接读取 AVIF，但 PNG 在所有这些工具中都能原生运行，且能完美保留透明度和质量。',
  },
  {
    type: 'title',
    text: '使用场景：您何时需要将 AVIF 转换为 PNG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '导入到 Figma、Sketch、Adobe XD 或其他 UI 设计工具。',
      '在 Photoshop、Affinity Photo 或 GIMP 中作为图层进行编辑，并保持透明度。',
      '用作生成图标或精灵图（sprites）的源文件。',
      '发送给使用标准设计软件的客户或合作者。',
      '以无损编辑格式存档带有透明度的图像。',
    ],
  },
  {
    type: 'title',
    text: '结论：连接网页与设计的桥梁',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF 和 PNG 是现代工作流中的完美拍档：AVIF 用于高效网页分发，PNG 用于设计工具内的编辑和协作。使用我们的转换器，两者之间的转换是即时的、私密的，且能保留每一个细节-这正是当您的视觉资产至关重要时所需要的。',
  },
];


export const content: AvifAPngLocaleContent = {
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
