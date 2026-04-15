import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAPngLocaleContent } from '../index';

const slug = 'bmp-to-png-converter';
const title = 'BMP 转 PNG 转换器';
const description =
  '无损地将 BMP 图像转换为 PNG。现代压缩技术，无伪影。无需上传文件。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 BMP 文件...',
  convertText: '立即将其转换为 PNG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: BmpAPngLocaleContent['faq'] = [
  {
    question: 'BMP 和 PNG 之间的主要区别是什么？',
    answer:
      'BMP 和 PNG 都是无损格式。区别在于优化：PNG 能够通过现代压缩算法在保持相同图像质量的同时，占用的内存比 BMP 少 5 到 10 倍。',
  },
  {
    question: '转换过程真的是私密的吗？',
    answer:
      '是的。所有的图像处理都在您的电脑上完成。在本地处理过程中，绝对没有任何人能访问您的文件。',
  },
  {
    question: '在这种情况下，为什么选择 PNG 而不是 JPEG？',
    answer:
      '如果您拥有 BMP 文件，通常是因为该图像具有精确的色彩。将 BMP 转换为有损的 JPG 标准会破坏您的纯正色彩，而 PNG 则能完美保护这种色彩忠实度。',
  },
];

const howTo: BmpAPngLocaleContent['howTo'] = [
  {
    name: '载入您的照片',
    text: '放心将 BMP 源文件拖入我们的网页元素投放区域。',
  },
  {
    name: '无需网络传输的转换',
    text: '只需一秒钟即可体验由您的 HTML5 JS 在本地完成的纯净处理。',
  },
  {
    name: '获取纯正的 PNG',
    text: '可以单独下载 PNG 副本，或通过压缩包一次性下载。',
  },
];

const bibliography: BmpAPngLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'PNG Specification W3C',
    url: 'https://www.w3.org/TR/png/',
  },
];

const seo: BmpAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP 转 PNG 转换器：替代 BMP 格式的无损之选',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP 是一种非压缩格式，与 PNG 相比没有任何技术优势，却占用大量空间。两者都是无损格式：它们能以绝对精度保存每个像素。但 PNG 通过 Deflate 算法增加了无损压缩，在不牺牲任何视觉信息位的情况下，将文件大小减少 3 到 5 倍。从本质上讲，PNG 正是 BMP 一直想要成为的样子。',
  },
  {
    type: 'title',
    text: 'BMP vs PNG：相同质量，完全不同的体积',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 和 PNG 之间的根本区别不在于图像质量（两者都是无损的），而在于存储效率。BMP 原始地存储像素：无压缩、无优化、不考虑空间占用。而 PNG 会分析重复的像素模式，并使用与 ZIP 相同的 Deflate 算法进行紧凑编码。',
  },
  {
    type: 'paragraph',
    html: '除了优越的压缩性能外，PNG 还增加了 BMP 从未具备的功能：支持透明度的完整 Alpha 通道。屏幕截图、界面图形、徽标、技术图表：所有这些类型的图像都能从 PNG 转换中获益匪浅，在保持每个精确颜色值的同时，将文件重量降至原始大小的一小部分。',
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
        description: '在第三方服务器上处理您的 BMP 文件的服务。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的工作图像在互联网上传输',
          '等待时间与 BMP 的大小成正比',
          '免费方案中的体积限制',
          '文件被分析或留存的风险',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术在您的硬件上直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP 在本地处理，绝不离开您的设备',
          '毫秒级的即时转换',
          '没有体积或文件数量限制',
          '完全隐私：0 字节向外传输',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '本地 BMP 转 PNG 的工作原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '该过程利用了 HTML5 的 Canvas API。BMP 文件通过浏览器的 <code>FileReader</code> API 读取并解码为内存中的 Blob。该 Blob 被绘制在不可见的 HTML5 画布上。接着，<code>toDataURL(\'image/png\')</code> 方法应用浏览器原生的 PNG 压缩算法并生成结果文件。',
  },
  {
    type: 'paragraph',
    html: '与转换为 JPG 不同，转换为 PNG 是完全无损的：原始 BMP 的每个颜色值都会在生成的 PNG 中得到精确保留。没有伪影，没有边缘模糊，没有信息丢失。最终文件在视觉上与 BMP 完全相同，但占用的磁盘空间减少了 3 到 5 倍。',
  },
  {
    type: 'paragraph',
    html: '如果您使用的是导出 BMP 的旧软件（工业设备、控制系统、医疗诊断软件），转换为 PNG 是最佳决策。PNG 与几乎所有现代程序兼容，保持完美的色彩忠诚度，且空间占用减少高达 5 倍。这是最简单、最安全的迁移方式。',
  },
  {
    type: 'title',
    text: '生成 PNG 的应用场景与兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '完美保留精确颜色的屏幕截图和界面图形。',
      '技术文档图像和软件图表。',
      'CAD 导出、工业系统和老旧软件产出物。',
      '增加了透明度的徽标和视觉识别元素。',
      '兼容 Adobe Photoshop、GIMP、Figma 和所有现代编辑器。',
    ],
  },
  {
    type: 'title',
    text: '结论：PNG 是 BMP 的理想进化形式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '将 BMP 转换为 PNG 是图像文件最自然的现代化方式：相同的无损质量、更强的兼容性、支持透明度且体积轻巧 3 到 5 倍。我们的工具在您的浏览器中直接完成此项转换，无需上传任何文件到服务器。',
  },
];


export const content: BmpAPngLocaleContent = {
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
