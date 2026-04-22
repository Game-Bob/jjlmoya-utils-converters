import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAJpgLocaleContent } from '../index';

const slug = 'avif-to-jpg-converter';
const title = '在线将 AVIF 转换为 JPG';
const description =
  '在浏览器中将 AVIF 图像转换为 JPG。无需服务器。100% 私密本地处理。免费且无限制。';

const ui: ImageConverterUI = {
  dragText: '拖拽 AVIF 文件...',
  convertText: '立即将其转换为 JPG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中': '参考文献记录',
  faqTitle: '常见问题',
};

const faq: AvifAJpgLocaleContent['faq'] = [
  {
    question: '为什么要将 AVIF 转换为 JPG？',
    answer:
      'AVIF 格式虽然提供了更卓越的压缩率，但并非所有程序或查看器都支持它。将其转换为 JPG 可确保图像可以在全球 100% 的设备上查看。',
  },
  {
    question: '我们如何保护您的 AVIF 图像？',
    answer:
      '您的照片永远不会离开您的手机或电脑。绘图并编码为 JPEG 的整个过程都在浏览器的 Javascript 环境中运行。',
  },
  {
    question: '从 AVIF 转换为 JPG 会损失质量吗？',
    answer:
      '我们的工具以标准的 Canvas 质量（0.9 到 0.95）处理像素，使得画质的变化几乎无法察觉。',
  },
];

const howTo: AvifAJpgLocaleContent['howTo'] = [
  {
    name: '拖拽文件或点击选择',
    text: '将所有想要转换的 AVIF 照片移入指定的处理区域。',
  },
  {
    name: '即时转换',
    text: '观察 AVIF 如何在不到一秒的时间内重新编码为 JPG，并将可能存在的 Alpha 通道替换为纯色背景。',
  },
  {
    name: '保存或下载 ZIP',
    text: '逐个下载新的 JPG 图像，或者如果进行了批量处理，点击“下载全部”进行保存。',
  },
];

const seo: AvifAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF 转 JPG 转换器：为您的现代图像提供通用兼容性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF (AV1 Image File Format) 是目前最有效的图像格式。由 Alliance for Open Media 开发，基于 AV1 视频编解码器，它在保持相同视觉质量的前提下，压缩率比 JPG 高出 50%。然而，这种技术优势是有代价的：Photoshop、Lightroom、Windows 照片查看器以及大多数传统的编辑和可视化工具都不支持 AVIF。转换为 JPG 可以从根本上解决这个问题。',
  },
  {
    type: 'title',
    text: 'AVIF vs JPG：效率与通用兼容性的博弈',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF 的压缩能力非常出色：在 JPG 中占用 4 MB 的高分辨率照片，在 AVIF 中仅占 2 MB 且能保持相同的感知质量。这对于对加载性能要求极高的网页分发来说非常完美。然而，在浏览器之外，AVIF 几乎是“隐身”的：Windows 资源管理器无法预览它，相机也无法直接导出它，设计师们在工作流中也不太愿意接受它。',
  },
  {
    type: 'paragraph',
    html: '30 多年来，JPG 一直是数字摄影的通用标准。它受到 100% 设备、操作系统、办公应用、社交网络、打印机以及任何曾经显示过图像的软件的支持。当您需要分享、打印、编辑或通过电子邮件发送图像时，JPG 就是一切都能顺畅运行的保证。',
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
        description: '将您的 AVIF 文件上传到远程服务器进行处理的传统工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的私人照片通过互联网传输到外部服务器',
          '需要等待文件上传和下载的时间',
          '文件大小和免费转换次数受到限制',
          '图像可能在第三方服务器中被保留的风险',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术和 Canvas API 在浏览器中直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '您的图像永远不会离开您的设备',
          '即时转换，无网络延迟',
          '无文件数量或大小限制',
          '适用于医疗、法律或机密级别的图像',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技术转换在浏览器中如何运行',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Chrome、Firefox 和 Edge 等现代浏览器凭借集成的 AV1 解码器，原生支持 AVIF。当您加载 AVIF 文件时，浏览器会在内存中对其进行解码，并将其转换为内存中的位图。这个位图会绘制在一个不可见的 HTML5 <code>Canvas</code> 元素上。',
  },
  {
    type: 'paragraph',
    html: '接着，Canvas 使用 <code>toBlob(\'image/jpeg\', quality)</code> 导出图像，并应用标准的 JPG 压缩。由于 JPG 不支持透明度，AVIF 中存在的任何 Alpha 通道在导出前都会用白色背景填充。结果是一个高质量的 JPG 文件，可供直接下载，且没有一个字节离开过您的浏览器。',
  },
  {
    type: 'tip',
    title: '压缩与兼容性的平衡',
    html: '在相同质量下，AVIF 比 JPG 小 50% —— 但 JPG 与任何软件都有 100% 的兼容性。如果您从服务器收到 AVIF 图像，且需要编辑、发送邮件或在桌面工具中打开它们，请先将它们转换为 JPG。',
  },
  {
    type: 'title',
    text: '使用场景：何时将 AVIF 转换为 JPG',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '在 Photoshop、Lightroom、GIMP 或其他桌面软件中进行编辑。',
      '与使用旧设备或操作系统的用户分享图像。',
      '在电子邮件中添加附件，以确保在任何邮件客户端中都能正常查看。',
      '在不接受 AVIF 作为上传格式的平台上发布。',
      '打印：专业打印服务原生支持 JPG。',
    ],
  },
  {
    type: 'title',
    text: '结论：一步实现通用兼容性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF 是图像压缩的未来，但目前兼容性至关重要。我们的转换器让您能兼顾两者的优点：接收并存储 AVIF 图像以获得最大效率，并在需要在任何情境下使用时，即时将它们转换为 JPG。一切都是私密的、免费的且无限制。',
  },
];


export const content: AvifAJpgLocaleContent = {
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
