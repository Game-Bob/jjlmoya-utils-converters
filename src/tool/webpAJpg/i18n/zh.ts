import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { WebpAJpgLocaleContent } from '../index';

const slug = 'webp-to-jpg-converter';
const title = '在线免费将 WebP 转换为 JPG';
const description =
  '无需上传文件即可将 WebP 图像转换为 JPG。100% 私密本地处理。透明背景将自动替换为白色。';

const ui: ImageConverterUI = {
  dragText: '拖拽 WebP 文件...',
  convertText: '立即将它们转换为 JPG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: WebpAJpgLocaleContent['faq'] = [
  {
    question: '我可以安全地上传私密图片吗？',
    answer:
      '是的。没有上传服务器。您的浏览器会在您的电脑上处理 WebP 并生成可供下载的 JPG。没有其他人能看到它。',
  },
  {
    question: '如果我的 WebP 背景是透明的, 会发生什么？',
    answer:
      '由于 JPG 不支持透明度, 转换器将自动使用纯白色背景填充透明区域。',
  },
  {
    question: '转换次数或文件大小有限制吗？',
    answer:
      '我们没有任何限制。只要您的电脑有足够的处理能力和内存, 您就可以转换成百上千张图片。',
  },
];

const howTo: WebpAJpgLocaleContent['howTo'] = [
  {
    name: '拖拽您的文件',
    text: '将您的现代 WebP 文件放入上传区域, 或使用交互式文件浏览器进行选择。',
  },
  {
    name: '本地转换',
    text: '观察本地引擎如何应用背景并将每个像素解释为通用的 JPG 格式。',
  },
  {
    name: '获取结果',
    text: '您可以单独下载, 也可以使用 ZIP 包下载所有新照片。',
  },
];

const bibliography: WebpAJpgLocaleContent['bibliography'] = [
  {
    name: 'JPEG.org: JPEG 标准',
    url: 'https://jpeg.org/jpeg/',
  },
  {
    name: 'Mozilla Developer Network - image/jpeg',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats/Image_types#jpeg',
  },
  {
    name: 'WebP 到 JPEG 的兼容性',
    url: 'https://developers.google.com/speed/webp/faq',
  },
];

const seo: WebpAJpgLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'WebP 转 JPG 转换器: 不牺牲隐私的通用兼容性',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>WebP</strong> 是 Google 对效率的追求: 图像更轻量, 质量可与传统 JPG 媲美。然而, 它的兼容性在现实世界中依然是个问题。Outlook 等邮件客户端、旧版设计软件、即时通讯应用和企业工作流程仍然依赖于无处不在的 <strong>JPG</strong>。将 WebP 转换为 JPG 是连接现代 Web 与现实世界的桥梁。',
  },
  {
    type: 'title',
    text: 'WebP vs JPG: 什么时候应该使用哪种格式？',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP 在可控环境中表现出色: 在 Chrome、Edge 或 Firefox 等浏览器兼容性有保障的现代网站上。与其等效的 JPG 相比, 它的卓越压缩使文件大小减少了 25-35%, 从而提高了加载速度和 Core Web Vitals 指标。当您能够控制查看环境时, 它是理想的格式。',
  },
  {
    type: 'paragraph',
    html: '而 JPG 则适用于 <em>绝对任何场景</em>: 邮件附件、PowerPoint 演示文稿、Word 文档、家用打印机、旧版编辑软件以及无一例外的社交媒体平台。如果您需要让某人在没有任何技术阻碍的情况下打开您的图片, JPG 是正确的选择。',
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
        description: '将文件上传到远程服务器的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的照片会通过互联网传输到未知的服务器',
          '需要等待上传和远程处理的时间',
          '每天对文件大小和免费转换次数有限制',
          '存在第三方服务器保留数据的真实风险',
        ],
      },
      {
        title: '我们的本地架构',
        description: '使用 Vanilla JS 技术直接在您的硬件上进行处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '零字节发送: 一切都在您的内存中完成',
          '即时速度, 不依赖于您的网络连接',
          '对文件大小或文件数量没有限制',
          '非常适合个人、医疗或企业照片',
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
    html: '当您将 WebP 文件拖入工具时, 浏览器会使用其内部渲染引擎原生解码。随后, 图像会被绘制到一个不可见的 <strong>HTML5 Canvas</strong> 元素上。由于 JPG 不支持透明度, 算法会在合成图像之前, 用纯白色背景预填充画布。',
  },
  {
    type: 'paragraph',
    html: '最后一步是导出: Canvas 方法 <code>toDataURL(\'image/jpeg\')</code> 将画布像素转换为高质量的压缩 JPG 字节流。此流不经过任何网络通信, 直接交付给浏览器的下载系统。整个过程即使对于数百万像素的图像也只需几毫秒。',
  },
  {
    type: 'tip',
    title: '兼容性建议',
    html: '与非技术用户分享照片或通过邮件发送时, 请始终使用 JPG——在任何邮件客户端、操作系统或设备上都没有任何兼容性问题, 没有例外, 也没有令人不快的意外。',
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
      '在 Outlook、Gmail 或 Apple Mail 的邮件中添加照片附件。',
      '在 Word 文档、Excel 或 PowerPoint 演示文稿中插入图片。',
      '在拒绝 WebP 的社交媒体平台上发布内容。',
      '通过格式支持有限的 WhatsApp 或即时通讯软件分享。',
      '在仅接受 JPG 或 PNG 的打印服务处打印照片。',
    ],
  },
  {
    type: 'title',
    text: '总结',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'WebP 是网页图片的未来, 但 JPG 仍然是通用兼容性的王者。此工具能让您在几秒钟内跨越这道鸿沟, 且完全私密, 无需安装任何软件。您的图片从未离开您的设备。',
  },
];


export const content: WebpAJpgLocaleContent = {
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
