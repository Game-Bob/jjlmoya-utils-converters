import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { BmpAJpgLocaleContent } from '../index';

const slug = 'bmp-to-jpg-converter';
const title = '在线将 BMP 转换为 JPG';
const description =
  '在您的浏览器中将 BMP 图像转换为 JPG。大幅减小文件大小。无需将文件上传到服务器。免费且 100% 私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 BMP 文件...',
  convertText: '立即将其转换为 JPG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中': '参考文献',
  faqTitle: '常见问题',
};

const faq: BmpAJpgLocaleContent['faq'] = [
  {
    question: '为什么要将 BMP 转换为 JPG？',
    answer:
      'BMP 格式不压缩数据，导致文件极其庞大。JPG 格式可以在大幅压缩图像的同时，为网页和分发保留出色的视觉质量。',
  },
  {
    question: '在这里转换我的图像安全吗？',
    answer:
      '100% 安全。由于处理完全是在您自己的浏览器引擎本地完成的，因此您的隐私得到了保证。',
  },
  {
    question: '这个工具是如何运作的？',
    answer:
      '只需拖入您的 BMP 文件，我们的 JavaScript 脚本就会读取其像素，在 HTML 画布上重新绘制，并立即导出为 JPEG 编码格式。',
  },
];

const howTo: BmpAJpgLocaleContent['howTo'] = [
  {
    name: '上传您的 BMP 文件',
    text: '将您的 BMP 格式图像拖放到指定区域或手动选择。',
  },
  {
    name: '自动处理',
    text: '工具会在毫秒内对图像进行光栅化，并应用 JPG 格式的最佳压缩级别。',
  },
  {
    name: '单个或批量下载',
    text: '逐个获取您为网页优化的新图像，或通过下载 ZIP 文件一次性获取。',
  },
];

const seo: BmpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'BMP 转 JPG 转换器：在几秒钟内缩减巨大的文件',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'BMP（Bitmap）是计算机科学领域最原始的格式：它按原样存储每个像素，没有任何形式的压缩。一张 1920x1080 分辨率的 BMP 截图重约 6 MB。同一张 JPG 图像在视觉质量难辨的情况下，仅占用 200 到 400 KB。这种差异是巨大的，我们的工具允许您在浏览器中直接完成转换，无需向任何服务器上传任何内容。',
  },
  {
    type: 'title',
    text: 'BMP vs JPG：原始数据 vs 智能压缩',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 格式由微软在 Windows 3.1 时代创建。其理念尽可能简单：每个像素占用 3 字节（红、绿、蓝），像素按行存储，不进行任何额外处理。对于真实的图片和截图，这种完全缺乏压缩的情况导致 BMP 文件比同等的 JPG 文件大 50 到 100 倍。',
  },
  {
    type: 'paragraph',
    html: '相比之下，JPG 使用离散余弦变换（DCT）来分析每个 8x8 像素块，并消除人类肉眼几乎察觉不到的高频信息。结果是图像看起来完全相同，但体积却只有原图的一小部分。对于来自截图、扫描仪或旧版 Windows 应用程序的 BMP 文件，转换为 JPG 是最有效的优化手段。',
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
        description: '将您的 BMP 文件上传到远程服务器进行处理的服务。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '在慢速连接下上传 10 MB 的 BMP 需要较长时间',
          '您的机密截图和图像在互联网上传播',
          '免费计划中常见的尺寸限制',
          '双重延迟：转换后文件的上传和下载',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术在您的硬件上直接完成处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'BMP 在您的 RAM 中处理，不传输到服务器',
          '即时转换，无需等待',
          '没有单个文件的大小限制',
          '完全隐私：0 字节向外传输',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: 'BMP 转 JPG 的技术转换原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '当您将 BMP 文件拖入工具时，浏览器会通过 <code>FileReader</code> API 读取该文件，并在内存中将其解码为 Blob 对象。该 Blob 会渲染到不可见的 HTML5 画布上。接着，<code>toDataURL(\'image/jpeg\')</code> 方法会对画布数据应用 JPEG 压缩算法，并生成结果 JPG 文件。',
  },
  {
    type: 'paragraph',
    html: '由于 BMP 没有 Alpha 通道（不支持透明度），因此转 JPG 的过程是直接完成的，无需与白色背景进行合成。整个过程在您计算机的 RAM 内存中进行，无需任何网络数据传输，即使对于数兆字节的文件，也能在毫秒内完成。',
  },
  {
    type: 'tip',
    title: 'Windows BMP 文件可能非常庞大',
    html: '通过截图（Windows 中的 Print Screen 键）或 Paint 等旧版应用生成的 BMP 文件可能比同等的 JPG 重 50 到 100 倍。单张全高清分辨率的 BMP 可能超过 6 MB。在通过电子邮件发送或上传到任何平台之前，将其转换为 JPG 是一项至关重要的操作。',
  },
  {
    type: 'title',
    text: '使用场景和结果 JPG 的兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '优化用于电子邮件发送的 Windows 截图。',
      '转换旧版软件（CAD、旧扫描仪）导出的图像。',
      '在上传图像到网页平台和社交网络前减小体积。',
      '为插入 Word、PowerPoint 或 PDF 文档准备文件。',
      '与所有现代查看器和浏览器通用兼容。',
    ],
  },
  {
    type: 'title',
    text: '结论：10 MB 的 BMP，500 KB 的 JPG，相同的画面',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'BMP 转 JPG 是图像文件管理中最划算的优化操作之一。我们的工具在几秒钟内完成转换，不上传文件，不创建账户，直接在您的浏览器中进行。结果是高质量的 JPG 图像，通用兼容，且体积比原始 BMP 减少达 97%。',
  },
];


export const content: BmpAJpgLocaleContent = {
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
