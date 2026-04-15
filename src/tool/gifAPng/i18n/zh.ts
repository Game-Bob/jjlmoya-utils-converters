import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { GifAPngLocaleContent } from '../index';

const slug = 'gif-to-png-converter';
const title = '在线将 GIF 转换为 PNG';
const description =
  '从 GIF 中提取第一帧并将其转换为 PNG，同时保留透明度。无需服务器。本地处理。免费。';

const ui: ImageConverterUI = {
  dragText: '拖拽 GIF 文件...',
  convertText: '立即将其转换为 PNG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: GifAPngLocaleContent['faq'] = [
  {
    question: '为什么将 GIF 这种动画格式转换为 PNG 这种静态格式？',
    answer:
      '许多社交网络或头像不支持会动的图片。将复杂 GIF 的第一帧提取到高质量的 PNG 中可以解决这些障碍，并减少不必要的文件体积。',
  },
  {
    question: '旧 GIF 的透明度会在生成的 PNG 中保留吗？',
    answer:
      '是的，与 JPG 不同，PNG 格式保留 Alpha 通道。如果 GIF 有透明背景，PNG 将保留它并保持边缘清晰。',
  },
  {
    question: '处理后，我的图片会在服务器上保留一段时间吗？',
    answer:
      '没有任何服务器会保留您的 GIF；由于 Web Canvas API 的作用，所有提取均在本地完成。是您电脑的处理器在没有任何网络接触的情况下安全地解码您的文件。',
  },
];

const howTo: GifAPngLocaleContent['howTo'] = [
  {
    name: '提供动画',
    text: '将笨重的 GIF 文件拖入输入框。',
  },
  {
    name: '完美的提取照片',
    text: '系统将精准锁定动作源头，在毫秒内产出完美无瑕的拷贝。',
  },
  {
    name: '保存您的静态图',
    text: '将所有转换为 PNG 的静态 GIF 头像批量保存到 ZIP 中。',
  },
];

const bibliography: GifAPngLocaleContent['bibliography'] = [
  {
    name: 'World Wide Web Consortium: PNG format',
    url: 'https://www.w3.org/TR/png/',
  },
  {
    name: 'CompuServe GIF Information',
    url: 'https://www.w3.org/Graphics/GIF/spec-gif89a.txt',
  },
];

const seo: GifAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'GIF 转 PNG 转换器：克服 GIF 的颜色和透明度限制',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'GIF 设计于显示器几乎只能显示 256 色的年代。几十年后，这一限制仍然是它最大的弱点。PNG 的诞生正是为了在所有重视质量和透明度的用例中取代 GIF：Logo、图标、界面图形以及任何在任何背景色上都必须看起来完美的透明背景图像。',
  },
  {
    type: 'title',
    text: 'GIF vs PNG：1600 万色的革命',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'GIF 和 PNG 之间最关键的区别不仅仅是颜色的数量。GIF 支持二进制透明：每个像素要么不透明，要么完全透明，没有灰度等级。而 PNG 支持完整的 Alpha 通道，每个像素具有 256 个不透明度级别。这意味着 PNG 中的 Logo 边缘可以被完美平滑，而 GIF 在彩色背景上展现出特征性的锯齿。',
  },
  {
    type: 'paragraph',
    html: '除了卓越的透明度外，PNG 还消除了 GIF 的 256 色限制。屏幕截图、带有渐变的插图、带有阴影的 Logo：所有这些在 PNG 中看起来都明显更好。而且由于是无损压缩，每个像素都精确保留了原始值，没有 JPG 转换会引入的伪影。',
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
        description: '在远程服务器上处理您图片的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '您的 Logo 和图标通过互联网传输',
          '由于网络延迟导致的等待时间',
          '文件体积和数量限制',
          '您的图片可能会留在第三方缓存中',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术在您的硬件上直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          'GIF 绝不离开您的设备',
          '无需网络，实现即时转换',
          '没有文件体积或数量限制',
          '绝对隐私：0 字节向外传输',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '本地 GIF 转 PNG 的技术原理',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '转换使用了浏览器的 Canvas API。GIF 在内存中被解码为原生 Image 元素。通过在 HTML5 画布（canvas）上渲染，浏览器的图形引擎会捕捉第一帧，且保留其原始透明度信息完好无损。',
  },
  {
    type: 'paragraph',
    html: '与转换为 JPG 不同，使用 PNG 无需添加白色背景。原 GIF 的 Alpha 通道直接保留在导出的 PNG 中。画布的 <code>toDataURL(\'image/png\')</code> 方法直接在您电脑的 RAM 中生成 PNG 字节流，无需任何网络传输，生成的文件会立即下载。',
  },
  {
    type: 'tip',
    title: 'GIF 的二进制透明 vs PNG 的 Alpha 通道',
    html: 'GIF 仅支持二进制透明（全透明或不透明）。转换为 PNG 时，GIF 的半透明像素将保持浏览器解释的样子。如果您的 GIF 有锯齿状边缘，PNG 会保留它们——但您可以在任何编辑器中通过平滑边缘来修复它们，这在原 GIF 中是不可能实现的。',
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
      '可在任何背景色上使用的 Logo 和图标。',
      '用于 Discord、Telegram、Slack 和游戏平台的个人头像。',
      '网页和移动应用的界面图形。',
      '带有透明背景的个性化贴纸和表情。',
      '用于技术文档的屏幕截图和 UI 元素。',
    ],
  },
  {
    type: 'title',
    text: '结论：PNG 是 GIF 一直想成为的样子',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '将 GIF 转换为 PNG 不仅仅是更改格式：它是将图像更新为 GIF 永远无法达到的现代标准。更多色彩，更好的透明度，更小的体积。我们的工具在毫秒内直接在您的浏览器中完成此项转换，不向外发送任何数据。',
  },
];


export const content: GifAPngLocaleContent = {
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
