import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAJpgLocaleContent } from '../index';

const slug = 'gif-to-jpg-converter';
const title = '在线将 GIF 转换为 JPG';
const description =
  '从 GIF 中提取第一帧并将其转换为 JPG。无需服务器。在您的浏览器中进行本地处理。免费且无限制。';

const ui: ImageConverterUI = {
  dragText: '拖拽 GIF 文件...',
  convertText: '立即将其转换为 JPG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: GifAJpgLocaleContent['faq'] = [
  {
    question: '当我转换为 JPG 时，动画会发生什么？',
    answer:
      'JPG 格式严格来说是静态的，不支持多帧。我们的转换器仅提取 GIF 序列中出现的第一张图像或第一帧。',
  },
  {
    question: '我会丢失任何特殊效果或透明背景吗？',
    answer:
      '是的，这是 JPG 标准的自然特性。如果您上传带有透明背景的 GIF，我们会自动在下方插入一个纯白色固态层，以避免颜色损坏。',
  },
  {
    question: '我可以在网站不保存我的内容的情况下从 GIF 中提取 JPG 图片吗？',
    answer:
      '当然可以。该工具是基于 HTML5 Canvas 的 Web App。所有解码工作均由您自己的物理设备的处理器执行。',
  },
];

const howTo: GifAJpgLocaleContent['howTo'] = [
  {
    name: '拖拽可移动的重型文件',
    text: '将文件夹中的那个 GIF 拖拽到我们的处理框中。',
  },
  {
    name: '干净的第一帧提取计算',
    text: '在极短的时间内提取动画，生成纯白色背景的 JPG，无需接触服务器。',
  },
  {
    name: '获取 ZIP 批量包',
    text: '如果您处理了大量文件，可以通过下载按钮或使用 ZIP 压缩包下载。',
  },
];

const bibliography: GifAJpgLocaleContent['bibliography'] = [
  {
    name: 'Joint Photographic Experts Group 技术规范',
    url: 'https://en.wikipedia.org/wiki/JPEG',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF 转 JPG 转换器：将帧提取为高质量图像',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '几十年来，GIF 文件一直主导着互联网上的短动画世界。然而，它们的动画特性使其在作为缩略图、社交网络预览或文档图像时完全无用。当您需要从 GIF 中提取特定帧并将其转换为高质量的静态图像时，转换为 JPG 是最实用且最具兼容性的解决方案。',
  },
  {
    type: 'title',
    text: 'GIF 还是 JPG？用途截然相反的格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF（图形交换格式）设计于 1987 年，存在一个沿用至今的严重限制：每帧只能表现 256 种颜色。这种技术限制对于调色板有限的简单动画并不重要，但对于真实的照片拍摄来说，它变成了一种视觉上贫乏的格式。相比之下，JPG 可以通过先进的感知压缩算法呈现数千万种颜色。',
  },
  {
    type: 'paragraph',
    html: '从 GIF 中提取一帧并将其保存为 JPG 有多种应用：为视频播放器生成缩略图，为内容管理平台创建预览，获取演示文稿的静态图像，或者仅仅是归档复杂动画中的某个视觉时刻。生成的 JPG 将比原始 GIF 轻得多，且具有普适的兼容性。',
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
        description: '将文件上传到远程服务器进行处理的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的 GIF 通过互联网传输到第三方服务器',
          '上传和下载过程中存在网络延迟',
          '单次会话存在文件体积和数量限制',
          '数据在他人服务器上留存的风险',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术在您的硬件上直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF 绝不离开您的设备',
          '无需网络等待，实现即时速度',
          '没有体积或文件数量限制',
          '完全隐私：0 字节向外传输',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '第一帧提取的技术原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '本地转换依托于 HTML5 Canvas API 的性能。当您加载 GIF 时，浏览器将其作为原生 Image 元素在内存中解码。通过在不可见画布（canvas）上渲染，浏览器的图形引擎会自动捕捉动画序列的第一帧。',
  },
  {
    type: 'paragraph',
    html: '由于 JPG 格式不支持透明度，我们的算法在导出前会应用纯白色固态背景。画布的 <code>toDataURL(\'image/jpeg\')</code> 方法直接在您电脑的 RAM 中生成 JPG 字节流，无需任何网络连接。生成的文件会立即下载到您的设备。',
  },
  {
    type: 'tip',
    title: 'GIF 有限的调色板',
    html: 'GIF 每帧只能包含 256 种颜色。提取出的 JPG 将继承原图极其有限的调色板：如果 GIF 中有渐变或照片，可能会出现色彩断层（Posterization）。为了获得最佳效果，请使用颜色简单的 GIF 或插图。',
  },
  {
    type: 'title',
    text: '生成 JPG 的应用场景与兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '视频平台和 CMS 的缩略图及预览图。',
      '社交网络发布的封面图。',
      '插入 Word、PowerPoint 或 PDF 文档。',
      '演示文件和营销材料。',
      '与 Windows、macOS 及移动端查看器全平台兼容。',
    ],
  },
  {
    type: 'title',
    text: '结论：那一帧比整段动画更有价值',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '一个 2 MB 的动画 GIF 可能会根据分辨率生成一个仅约 50-200 KB 的第一帧 JPG。我们的工具直接在您的浏览器中即时、私密且无限制地完成此项转换。无需服务器，无需账号，无需等待。',
  },
];


export const content: GifAJpgLocaleContent = {
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
