import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAWebpLocaleContent } from '../index';

const slug = 'jpg-to-webp-converter';
const title = '在线免费将 JPG 转换为 WebP';
const description =
  '在浏览器中将 JPG 图像转换为 WebP。卓越的压缩率，无明显画质损失。无需上传文件。免费、无限制且私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 JPG 文件...',
  convertText: '立即将它们转换为 WebP',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: JpgAWebpLocaleContent['faq'] = [
  {
    question: '为什么要将 JPG 照片转换为 WebP？',
    answer:
      'WebP 可以在肉眼无法察觉差异的情况下, 实现比传统 JPG 文件更好的压缩效果, 从而使网站加载更快、更现代。',
  },
  {
    question: '我需要按图片付费吗？',
    answer:
      '不需要, 该工具是免费的, 所有操作都在您的电脑上直接完成。无论是家庭还是专业用途, 都没有限制。',
  },
  {
    question: '转换过程安全吗？',
    answer:
      '是的, 完全安全。所有处理都在您本地浏览器的 HTML5 Canvas 中完成, 不会向外部服务器发送任何数据。',
  },
];

const howTo: JpgAWebpLocaleContent['howTo'] = [
  {
    name: '拖入您的 JPG 照片',
    text: '将您的 JPG 文件直接拖放到上方区域。检测是即时的。',
  },
  {
    name: '处理为 WebP',
    text: '本地渲染引擎会将每个图像文件转换为专门为网页优化的高质量 WebP 格式。',
  },
  {
    name: '下载结果',
    text: '您可以单独保存每个 WebP 文件, 也可以下载包含所有已转换文件的 ZIP 压缩包。',
  },
];

const bibliography: JpgAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google WebP 压缩研究',
    url: 'https://developers.google.com/speed/webp/docs/webp_study',
  },
  {
    name: 'Web.dev: 使用现代格式提供图像',
    url: 'https://web.dev/uses-webp-images/',
  },
];

const seo: JpgAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG 转 WebP 转换器: 使用 Google 的现代格式加速您的网站',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> 格式在数字摄影领域占据统治地位已有数十年——兼容性极佳且获得广泛支持。但 Google 设计了 <strong>WebP</strong> 格式来在相同画质下挑战 JPG: 在相同视觉质量的前提下, 文件大小可减少 25–35%。对于致力于解决网页加载缓慢问题的开发人员和营销团队来说, 将 JPG 转换为 WebP 是在不改变设计的前提下, 投资回报率最高的一项优化措施。',
  },
  {
    type: 'title',
    text: 'JPG 还是 WebP？何时使用各格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '当您需要极致的通用兼容性时, <strong>JPG</strong> 仍然是正确的选择: 例如发送给客户的电子邮件、Word 文档、旧版社交媒体平台或尚未接受 WebP 的 CMS 系统。它长达三十年的生态系统保证了任何屏幕、打印机或查看器都能无缝打开它。其主要缺点是体积——1.5 MB 的首屏 JPG 图片可能会降低页面的 LCP 评分, 从而无法达到 Core Web Vitals 的标准。',
  },
  {
    type: 'paragraph',
    html: '对于网站上的所有内容, <strong>WebP</strong> 都是明智之选。Chrome、Firefox、Safari 和 Edge 已经原生支持它多年。电子商务中的产品图片、博客横幅、视频缩略图以及在网上发布的任何照片都能直接获益: 网页更轻量, Google PageSpeed Insights 评分更高, 并且在移动端慢速网络下提供更顺畅的用户体验。',
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
          '上传和下载时的网络延迟',
          '您的照片存储在第三方服务器上',
          '文件大小限制和每日转换配额限制',
          '干扰性广告和第三方追踪器',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '即时处理——零网络延迟',
          '完全私密——数据向外发送量为 0 字节',
          '没有 MB 限制或文件数量限制',
          '界面简洁, 无广告或追踪',
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
    html: '当您将 JPG 拖入工具时, 浏览器会创建一个仅存在于 RAM 中的 <strong>Blob 对象</strong>。该 Blob 会被解码并绘制到不可见的 <strong>HTML5 Canvas</strong> 元素中。由于 JPG 不含透明通道, 转换过程非常直接: 引擎通过调用 <code>toDataURL(\'image/webp\')</code> 导出画布, 生成一组由您的操作系统即时下载的字节流——整个过程完全不涉及服务器。',
  },
  {
    type: 'paragraph',
    html: 'WebP 压缩算法结合了块预测技术 (类似于 Google VP8 视频编解码器中的技术) 以及色彩转换和算术编码。其结果是生成的文件包含与原始 JPG 相同的视觉感知信息, 但封装效率要高得多——这意味着每次页面访问时传输的千字节更少。',
  },
  {
    type: 'tip',
    title: 'Core Web Vitals 提示: LCP 与图像重量',
    html: '<strong>最大内容绘画 (LCP)</strong> 是 Google 衡量网页上最大视觉元素加载速度的指标。一个 1.5 MB 的首屏 JPG 可以在没有视觉差异的情况下转换成仅 900 KB (甚至 600 KB) 的 WebP。这 <strong>25–35% 的空间节省</strong> 可以让您的 LCP 评分从“需要改进”变为“良好”, 并提升搜索排名。',
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
      'WooCommerce 或 Shopify 店铺的产品图片: 体积更小, 转化率更高。',
      '博客和文章摄影: 无需重新设计即可获得更好的 PageSpeed 评分。',
      '网页横幅和显示广告素材: 文件更轻量, 同时保持同样的清晰度。',
      '建筑、摄影或设计工作室的排版画廊。',
      '视频流媒体网站或在线课程平台上的视频缩略图。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '将您的 JPG 转换为 WebP 是当今任何网站能采用的最简单、最经济的优化措施之一。使用此工具, 您可以在几秒钟内免费完成, 且您的图像永远不会离开您的设备。更少的千字节, 更好的 LCP, 更快的网页——而这一切都建立在您已经拥有的完全相同的视觉效果之上。',
  },
];


export const content: JpgAWebpLocaleContent = {
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
