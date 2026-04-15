import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAWebpLocaleContent } from '../index';

const slug = 'convert-gif-to-webp';
const title = '在线将 GIF 转换为静态 WebP';
const description =
  '将动态 GIF 转换为静态 WebP。保留透明度。无需服务器。在浏览器中本地处理。免费。';

const ui: ImageConverterUI = {
  dragText: '拖入 GIF 文件...',
  convertText: '立即将其转换为 WebP',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: GifAWebpLocaleContent['faq'] = [
  {
    question: '为什么要将动态文件切换为现代静态 WebP 格式？',
    answer:
      'WebP 是 Google 的压缩标准；它非常轻量且能干净地保留透明度。从 GIF 切换到 WebP 可以消除沉重的动画，并获得巨大的网页速度提升。',
  },
  {
    question: '原始头像会保持透明吗？',
    answer:
      '是的，与 JPEG 不同，WebP 容器遵循复杂的 Alpha 通道。所有的轮廓都将像原生一样保持完美。',
  },
  {
    question: '文件会上传到哪里？',
    answer:
      '没有上传。处理完全由您 PC 上的浏览器 Javascript 执行，零远程发送。',
  },
];

const howTo: GifAWebpLocaleContent['howTo'] = [
  {
    name: '启动动态文件处理',
    text: '在没有远程连接的情况下，将数十个表情包移动并放入划定区域。',
  },
  {
    name: '见证伟大的隐形变化',
    text: '当本地 Canvas 解码器生成输出时，观察每毫秒变化的进度指示器。',
  },
  {
    name: '保存您干净的结果集',
    text: '单独获取提取的文件，或按“下载 Zip”打包所有内容。',
  },
];

const bibliography: GifAWebpLocaleContent['bibliography'] = [
  {
    name: 'GIF89a 规范',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
  {
    name: 'Google WebP 文档',
    url: 'https://developers.google.com/speed/webp',
  },
];

const seo: GifAWebpLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF 转 WebP 转换器：沉重动画的现代替代方案',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '动态 GIF 是现代网络内容的恐龙：它们消耗不成比例的带宽，降低任何页面的 PageSpeed，并且在成千上万个网站的总重量中占有相当大的比例。一个典型的 5 MB 动态 GIF 在保持相同视觉质量的情况下可以变成 1 MB 以下的 WebP 动画。WebP 是 Google 专门为在网络上取代 GIF 而设计的现代继任者。',
  },
  {
    type: 'title',
    text: 'GIF vs WebP：网络过去与现状之间的鸿沟',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF 是一种 1987 年的格式，最初并非为动画设计——该功能是后来作为一种“黑客”手段加入的。它的 256 色调色板、低效率的压缩以及无法处理音频，使其成为一种过时的格式。WebP 由 Google 在 2010 年开发，提供卓越的有损和无损压缩、原生动画支持以及完整的 Alpha 通道。',
  },
  {
    type: 'paragraph',
    html: '对于 Web 开发人员来说，在页面上用 WebP 取代 GIF 可能意味着 Google PageSpeed 分数提高 10 到 30 分。更轻的页面重量意味着更好的 Core Web Vitals、更好的 SEO 排名以及更低的服务器带宽成本。这不仅仅是美学上的提升——它是一项技术架构决策。',
  },
  {
    type: 'title',
    text: '架构比较：本地 vs 云端',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '云端转换器',
        description: '在远程服务器上处理您的 GIF 的平台。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的动画通过互联网传输到第三方服务器',
          '由于上传和下载时的网络延迟造成的等待时间',
          '大小限制（大的 GIF 经常被拒绝）',
          '文件保留和分析的风险',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF 永远不会离开您的设备',
          '即时转换，无需网络等待',
          '无大小限制：处理任何重量的 GIF',
          '绝对隐私：0 字节向外发送',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '本地 GIF 转 WebP 转换的工作原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '本地转换使用 HTML5 Canvas API。GIF 被加载为原生的浏览器 Image 元素。通过将其绘制到画布上，图形引擎会捕捉包含所有透明度信息的第一帧动画。<code>toDataURL(\'image/webp\')</code> 方法直接在 RAM 中将该帧导出为 WebP。',
  },
  {
    type: 'paragraph',
    html: 'WebP 支持完整的 Alpha 通道，因此 GIF 的透明度保留在生成的 WebP 中，无需添加背景。WebP 压缩算法的效率明显高于 GIF 或 PNG，这解释了最终输出文件大小的大幅降低。',
  },
  {
    type: 'tip',
    title: '保证网页速度提升',
    html: '一个 5 MB 的动态 GIF 可以变成 1 MB 以下的 WebP。如果您的网站页面上有 GIF，用 WebP 替换它们可以立即改善您的 Largest Contentful Paint (LCP) 和 Total Blocking Time (TBT)，直接影响 SEO 排名。',
  },
  {
    type: 'title',
    text: '生成的 WebP 的使用案例和兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '替换网页上的 GIF 以提高 PageSpeed 分数。',
      '为 Discord、Slack 和现代平台优化的头像和贴纸。',
      '用于数字营销活动的横幅和视觉效果。',
      '渐进式 Web 应用程序 (PWA) 中的动画。',
      '兼容 Chrome、Edge、Firefox、Safari 14+ 以及所有现代浏览器。',
    ],
  },
  {
    type: 'title',
    text: '结论：将您的 GIF 迁移到 21 世纪',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '您网站上的每一个 GIF 都是一次错失的优化机会。我们的工具直接在您的浏览器中即时、私密且无限制地将 GIF 转换为 WebP。结果：文件缩小高达 5 倍、完美的透明度，并与所有现代浏览器兼容。',
  },
];


export const content: GifAWebpLocaleContent = {
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
