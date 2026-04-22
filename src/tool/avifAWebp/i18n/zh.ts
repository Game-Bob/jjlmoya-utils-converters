import { bibliography } from '../bibliography';
import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { AvifAWebpLocaleContent } from '../index';

const slug = 'avif-to-webp-converter';
const title = '在线将 AVIF 转换为 WebP';
const description =
  '为了获得更好的兼容性，将 AVIF 图像转换为 WebP 格式。无需服务器，本地完成处理。免费、私密且无限制。';

const ui: ImageConverterUI = {
  dragText: '拖拽 AVIF 文件...',
  convertText: '立即将其转换为 WebP',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中': '参考文献',
  faqTitle: '常见问题',
};

const faq: AvifAWebpLocaleContent['faq'] = [
  {
    question: '转换为 WebP 格式与其他格式的实际区别是什么？',
    answer:
      'WebP 结合了两者的优点：它能像 JPG 一样提供惊人的压缩率，同时保留像 PNG 一样处理干净透明度的能力。将 AVIF 转换为 WebP 可以在保留所有优势的同时，最大化网页兼容性。',
  },
  {
    question: '如何在没有服务器的情况下实现如此快速的处理？',
    answer:
      '我们利用了内置的解码模块和 JavaScript HTML5 的 Image 对象，这使得可以在本地内存中读取 AVIF，并在创纪录的时间内提取出优化的 WebP 文件。',
  },
  {
    question: 'WebP 格式目前是否完全兼容？',
    answer:
      '与尚在起步阶段的 AVIF 不同，WebP 格式在 Chrome、Firefox 和 Safari 等浏览器中获得了极广泛的支持。',
  },
];

const howTo: AvifAWebpLocaleContent['howTo'] = [
  {
    name: '插入您的照片文件',
    text: '将所有选定的 AVIF 格式文件拖放到我们的画布中。',
  },
  {
    name: '字节算法转换',
    text: '我们的引擎在不上传任何内容的情况下处理算法，并创建基于 WebP 压缩的精确副本。',
  },
  {
    name: '收集您的下载成果',
    text: '点击面板，接收 ZIP 压缩包或单个文件，以便直接发布。',
  },
];

const seo: AvifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'AVIF 转 WebP 转换器：现代且安全的网页替代方案',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'AVIF 是目前最先进的图像格式：比 WebP 小，比 JPG 小，视觉质量更高。然而，它的采用情况参差不齐——Safari 直到 2024 年才支持它，许多旧的移动设备也无法识别它。相比之下，WebP 多年来作为现代网页标准已被确立，拥有超过 95% 的全球支持。当您需要现代性而又不愿承担兼容性风险时，将 AVIF 转换为 WebP 是务实的决策。',
  },
  {
    type: 'title',
    text: 'AVIF vs WebP：最新技术 vs 最安全选择',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF 提供了目前最先进的压缩技术——在相同质量下，通常比 WebP 小 20-30%。其基于 AV1 的技术是行业内最先进的。然而，AVIF 的支持仍存在盲点：旧版本的 Safari、旧版 Android 上的某些浏览器以及某些桌面图像播放器无法识别它。对于拥有广泛且多样化受众的网页生产来说，这构成了风险。',
  },
  {
    type: 'paragraph',
    html: 'WebP 拥有更稳固的支持历史。Chrome 在 2010 年采用了它，Firefox 和 Edge 随后跟进，Safari 在 2020 年加入了支持。凭借在浏览器中超过 95% 的全球覆盖率，对于任何不想提供回退（fallback）格式的网站来说，WebP 都是安全的选择。它支持透明度、有损和无损压缩，且生成的文件远小于 JPG 或 PNG。',
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
          '您的私密图像经过了外部服务器',
          '网络延迟导致工作流变慢',
          '免费转换的文件数量限制',
          '依赖于可能发生变化的第三方服务',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术和 Canvas API 在浏览器中直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '完全隐私——0 字节离开您的设备',
          '即时处理，不依赖网络',
          '没有大小或文件数量限制',
          '可在无网络连接的情况下工作',
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
    html: 'Chrome、Firefox 和 Edge 都包含原生的 AVIF 解码器。加载文件时，浏览器的图像引擎会在内存中对其进行解码，并保留 Alpha 通道信息。图像会使用 2D 上下文绘制在不可见的 HTML5 <code>Canvas</code> 上，从而正确保留透明度。',
  },
  {
    type: 'paragraph',
    html: '导出过程通过 <code>toBlob(\'image/webp\', quality)</code> 完成。浏览器在内部应用 WebP 压缩算法，如果原始图像包含 Alpha 通道，则生成的 Blob 也会包含。此 Blob 会转换为直接下载链接。整个过程在微秒内完成，不与外部服务器进行任何通信。',
  },
  {
    type: 'tip',
    title: 'WebP：现代开发者的务实选择',
    html: 'WebP 拥有超过 95% 的浏览器支持——AVIF 正在增长，但尚未达到这个数字。对于不具备自适应格式检测的生产站点，WebP 是覆盖几乎所有受众的安全选择。将您的 AVIF 转换为 WebP，放心地提供现代图像。',
  },
  {
    type: 'title',
    text: '使用场景：何时选择 WebP 而非 AVIF',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '自 2020 年起需要在浏览器中提供支持且无需 polyfill 的网站。',
      '接受 WebP 但不支持 AVIF 的 CDN 和图像分发系统。',
      '可能不支持 AVIF 的混合移动应用中的 WebView。',
      'WebP 支持程度高于 AVIF 的现代 HTML 电子邮件。',
      '已建立 WebP 图像支持的 CMS 平台和电子商务系统。',
    ],
  },
  {
    type: 'title',
    text: '结论：拥有保障兼容性的现代感',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'AVIF 是图像压缩的前沿，但 WebP 是现代网页生态系统中可靠且通用的选择。使用我们的工具，您可以瞬间从最新格式转换为支持最广的格式——无需向服务器上传任何内容，拥有完全隐私且无大小限制。',
  },
];


export const content: AvifAWebpLocaleContent = {
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
