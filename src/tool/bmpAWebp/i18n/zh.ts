import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAWebpLocaleContent } from '../index';

const slug = 'convert-bmp-to-webp';
const title = '免费将 BMP 转换为 WebP';
const description =
  '离线将 BMP 图像转换为 WebP。将巨大文件缩减至千字节。无需上传文件。免费、离线且完全私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 BMP 文件...',
  convertText: '立即将其转换为 WebP',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: BmpAWebpLocaleContent['faq'] = [
  {
    question: '为什么我的 BMP 文件占用空间大 10 倍？转换为 WebP 有什么好处？',
    answer:
      'BMP 存储的是未经压缩的像素图。WebP 使用数学压缩技术，在保持图像极高辨识度的同时，将巨大的 BMP 缩减到不到 1MB。',
  },
  {
    question: '我需要注册账户吗？',
    answer:
      '我们不要求提供电子邮件，您的资料将保持隔离状态，因为处理是由您电脑上安装的浏览器 JavaScript 完成的，无需远程传输。',
  },
  {
    question: '我可以同时拖入多个文件吗？',
    answer:
      '是的，如果您的硬件能够承受，您可以同时拖入 50 或 100 个文件进行处理，而无需排队。',
  },
];

const howTo: BmpAWebpLocaleContent['howTo'] = [
  {
    name: '识别原始文件',
    text: '将您的位图集合放在准备好传输的窗口中。',
  },
  {
    name: '原生批量激活',
    text: '将所有文件投影或拖拽到我们的数字工作台上。',
  },
  {
    name: '导出 WebP 批量文件',
    text: '点击结果，您将分别获得极小体积的图像，或作为即时压缩包下载。',
  },
];

const bibliography: BmpAWebpLocaleContent['bibliography'] = [
  {
    name: 'BMP File Format',
    url: 'https://en.wikipedia.org/wiki/BMP_file_format',
  },
  {
    name: 'Google WebP Documentation',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: BmpAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP 转 WebP 转换器：最极限的文件瘦身方案',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '将 BMP 转换为 WebP 与无疑是您可以对图像进行的、最令人惊叹的转变。BMP（位图）格式是数字生态系统中最古老、最笨重的格式之一：它不经任何压缩地存储每个像素，导致文件的体积可能是其现代等效格式的 20、50 甚至 100 倍。由 Google 开发的 WebP 应用了最先进的压缩算法，在保持出色视觉质量的同时，将体积缩减到极致。',
  },
  {
    type: 'title',
    text: '为什么 BMP 如此笨重，而 WebP 如此高效？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 格式诞生于 80 年底的 Windows 系统，当时硬盘空间巨大且压缩并非首要任务。每个像素都原样保存，没有任何缩减算法：一张 1920x1080 像素的图像在 BMP 中正好占用 5.93 MB，与其内容无关。这使其成为内部截图或无损编辑的理想选择，但完全不适合网页或现代存储。',
  },
  {
    type: 'paragraph',
    html: 'WebP 使用基于块的预测压缩和 DCT 变换（与数字视频背后的技术相同），使得同样的 1920x1080 图像仅占用 80 KB 到 300 KB。这意味着比原始 BMP 减少了 95% 到 99%。此外，WebP 支持透明度 Alpha 通道以及有损和无损压缩，提供了全面的通用性。',
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
        description: '将您的 BMP 文件上传到远程服务器进行处理的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '在慢速连接下上传 20 MB 的 BMP 需要几分钟',
          '您的图像存储在他人的服务器上',
          '体积限制排除了大型 BMP 文件',
          '侵入性广告和数据追踪器',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术和 Canvas API 在您的浏览器中直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '无需网络传输，即时转换',
          '绝对隐私——0 字节离开您的设备',
          '不限单个文件的大小',
          '无需互联网连接即可工作',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '浏览器本地转换的技术原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '拖拽 BMP 文件时，浏览器将其作为二进制 Blob 读取到 RAM 内存中。该 Blob 被加载到 JavaScript 的 <code>Image</code> 元素中，使用原生图像引擎进行解码。接着，图像被绘制在不可见的 HTML5 <code>Canvas</code> 元素上。Canvas 充当虚拟画布，图像以像素对像素的形式存在于其中。',
  },
  {
    type: 'paragraph',
    html: '在 Canvas 上绘制完成后，我们运行 <code>toBlob()</code> 方法，并指定 MIME 类型为 <code>image/webp</code> 以及所需的质量等级。浏览器内部应用 WebP 压缩算法，生成包含结果文件的新 Blob。该 Blob 被转换为浏览器保存到硬盘的直接下载 URL。整个过程不建立任何网络连接。',
  },
  {
    type: 'tip',
    title: '最大的压缩跨度',
    html: 'BMP 到 WebP 的转换可以实现 99% 的文件体积缩减。一张 20 MB 的 BMP 可以在视觉质量几乎完全相同的情况下，变成仅约 200 KB 的 WebP。这是标准图像格式之间最有效的转换。',
  },
  {
    type: 'title',
    text: 'WebP 的应用场景与兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '网页发布——Chrome、Firefox、Safari、Edge 及所有现代浏览器均支持。',
      '社交网络——Instagram、Twitter、Facebook 原生接受 WebP。',
      '网页应用与 PWA——极小体积实现即时加载。',
      '高效归档——替换陈旧的 BMP 集合，节省数以 GB 计的空间。',
      '邮件营销——轻量级图像，在任何现代邮件客户端中都能快速加载。',
    ],
  },
  {
    type: 'title',
    text: '结论：一键实现最具冲击力的转换',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '如果您有来自 Windows 的陈旧 BMP 文件、未经压缩的截图或来自旧工具的图像，将它们转换为 WebP 是优化存储和网页性能的最有效行动。使用我们的工具，转换是即时的、私密的且无限制的——正应如此。',
  },
];


export const content: BmpAWebpLocaleContent = {
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
