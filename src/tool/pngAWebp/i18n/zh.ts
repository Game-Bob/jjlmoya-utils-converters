import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { PngAWebpLocaleContent } from '../index';

const slug = 'png-to-webp-converter';
const title = '在线免费将 PNG 转换为 WebP';
const description =
  '在浏览器中将 PNG 图像转换为 WebP。文件体积减少高达 40%。保留透明度。无需上传文件。免费且私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 PNG 文件...',
  convertText: '立即将它们转换为 WebP',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: PngAWebpLocaleContent['faq'] = [
  {
    question: '为什么要将 PNG 转换为 WebP？',
    answer:
      'WebP 在保持相同画质的前提下, 压缩率比 PNG 高出多达 40%, 同时还支持 Alpha 透明度。它是 Google PageSpeed Insights 推荐的格式。',
  },
  {
    question: '转换过程中会丢失透明度吗？',
    answer:
      '不会。WebP 的技术实现支持 Alpha 通道。原始 PNG 的透明度将完美保留在新的 WebP 文件中。',
  },
  {
    question: '我的图片会上传到服务器吗？',
    answer:
      '不会。代码完全在您的浏览器(客户端)运行。我们从不查看、记录或保存您转换的图片。',
  },
];

const howTo: PngAWebpLocaleContent['howTo'] = [
  {
    name: '放入您的 PNG',
    text: '将您的大體積 PNG 文件拖入上传区域, 或使用传统的交互式选择器。',
  },
  {
    name: '通道检测',
    text: '本地渲染引擎将检测像素组成并将其导出为优化后的 WebP 格式。',
  },
  {
    name: '直接下载',
    text: '您可以单独下载高压缩率的 WebP 文件, 也可以使用 ZIP 打包转换器批量下载。',
  },
];

const bibliography: PngAWebpLocaleContent['bibliography'] = [
  {
    name: 'Google: WebP 实现详情',
    url: 'https://developers.google.com/speed/webp/',
  },
  {
    name: 'W3C: Core Web Vitals 指南',
    url: 'https://web.dev/vitals/',
  },
  {
    name: 'Mozilla Docs: 图像格式',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
  },
];

const seo: PngAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'PNG 转 WebP 转换器: 为 Web 设计提供透明度与现代压缩技术',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> 几十年来一直是带透明度的 Web 图像的标准格式——标志、图标、UI 元素、抠图背景的产品图。其问题在于文件体积: 保证质量的无损压缩也会产生显著的大文件。Google 的 <strong>WebP</strong> 解决了这一矛盾: 它支持 Alpha 通道(透明度) <em>且</em> 压缩率远高于 PNG, 这使得在您的网站上将 PNG 切换为 WebP 成为一种不牺牲任何质量的完美优化。',
  },
  {
    type: 'title',
    text: 'PNG 还是 WebP？何时使用各格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '当兼容性至关重要时, <strong>PNG</strong> 仍然是正确的格式: 例如 Photoshop 或 Figma 等设计工具、打印工作流、旧式桌面应用程序或任何无法保证 WebP 支持的环境。它也是保存编辑流程中工作图层的理想格式, 因为其无损压缩保留了每一个像素。代价是: 文件体积可能是同等 WebP 的 3-8 倍。',
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> 是所有现代 Web 内容中 PNG 的自然替代品。Chrome、Firefox、Safari 和 Edge 都原生支持它。无损 WebP 图像比同等 PNG 小 26%；在有损模式下, 它的体积可缩小高达 40%, 且视觉画质几乎无法区分。对于 Web 设计来说至关重要的一点是: <strong>WebP 像 PNG 一样保留 Alpha 透明度</strong>, 没有任何视觉权衡。',
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
          '您的徽标和图像存储在第三方服务器上',
          '文件大小限制和每日转换配额',
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
          '无 MB 限制或文件数量限制',
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
    html: 'PNG 文件被本地加载并解码到内存中的 <strong>HTML5 Canvas</strong> 中。Canvas API 保留了原始 PNG 的 Alpha 通道——所有透明和半透明像素在 RGBA 像素缓冲区中保持原样。然后通过调用 <code>toDataURL(\'image/webp\')</code> 导出画布, 该方法应用浏览器的 WebP 编解码器 (基于 Google 的 libwebp) 来生成更紧凑的文件, 而不会改变透明度数据。',
  },
  {
    type: 'paragraph',
    html: 'WebP 使用两种压缩模式: 无损模式适用于每一个像素都必须精确还原原始图像的情况；有损模式适用于照片和细微差异无法察觉的元素。无损模式产生的文件比 PNG 小 26%；有损模式在保持极佳视觉质量的同时, 体积可比 PNG 减少高达 40%。',
  },
  {
    type: 'tip',
    title: '提示: 在 Web 端, WebP 同时超越了 PNG 和 JPG',
    html: '无损模式下的 WebP 比 PNG 小。有损模式下的 WebP 比 JPG 小。这使得 WebP 成为 Web 环境下 <strong>唯一能够同时取代两者的格式</strong>。在上传之前将您的透明 PNG 转换为 WebP: Google PageSpeed Insights 会检测到这一点, 并在“以现代格式提供图像”审计中给出正面评分。',
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
      '网站和应用中带透明背景的标志和图标。',
      '电子商务商店中带抠图背景的产品图片。',
      '带 Alpha 透明度的 CSS 精灵图和 UI 元素。',
      '用于落地页的栅格化插图和矢量图形。',
      '博客和新闻门户中带透明背景的文章缩略图。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '从 PNG 切换到 WebP 是目前最全面的 Web 图像优化手段: 您可以获得更轻量的文件、保留透明度, 并在不改变视觉设计的前提下改善 Core Web Vitals 指标。此工具由浏览器本地处理, 不会向任何服务器传输图片, 过程即时、免费且完全私密。',
  },
];


export const content: PngAWebpLocaleContent = {
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
