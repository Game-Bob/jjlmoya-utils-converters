import { bibliography } from '../bibliography';
import type { ImagenBase64LocaleContent } from '../index';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { ImageToBase64UI } from '../index';

const slug = 'image-to-base64-converter';
const title = '图片转 Base64 转换器在线版';
const description =
  '直接在浏览器中将任何图片转换为 Base64 代码和 Data URI。无需上传文件。免费、私密且即时。';

const ui: ImageToBase64UI = {
  dragTitle: '将图片拖到此处',
  dragSubtext: '或点击浏览文件',
  formatBadge: '支持 JPG, PNG, WEBP, SVG, GIF',
  dataUriLabel: 'Data URI (适用于 CSS / HTML src="")',
  base64Label: '仅 Base64 (纯编码文本)',
  copyBtn: '复制',
  dataUriPlaceholder: '上传图片以查看 Data URI 代码...',
  base64Placeholder: '上传图片以查看纯 Base64 代码...',
  toastMessage: '代码已复制到剪贴板！',
  invalidImageAlert: '请上传有效的图片文件。': '参考文献',
  faqTitle: '常见问题',
};

const faq: ImagenBase64LocaleContent['faq'] = [
  {
    question: '什么是 Base64，它在 Web 开发中有什么用途？',
    answer:
      'Base64 是一种将二进制数据转换为 ASCII 文本字符串的编码系统。在 Web 开发中, 它用于通过 Data URI 直接在 HTML 或 CSS 文件中嵌入图片, 从而减少对服务器的 HTTP 请求数量。',
  },
  {
    question: '在这里将我的图片转换为 Base64 安全吗？',
    answer:
      '绝对安全且私密。我们的工具在您的浏览器中 100% 本地运行。您的图片绝不会被上传或在任何外部服务器上处理。',
  },
  {
    question: 'Base64 转换器支持哪些图片格式？',
    answer:
      '该工具兼容 JPG, PNG, GIF, WebP 甚至 SVG 矢量文件。在加载图片时, 它会自动检测其 MIME 类型以生成准确的 Data URI 代码。',
  },
  {
    question: '什么时候不应该使用 Base64 图片？',
    answer:
      '应避免对大型照片或高分辨率图片使用 Base64 图片。Base64 代码占用的空间比原始二进制文件多约 33%, 这可能会导致您的 CSS 样式表或 HTML 文档极度膨胀。',
  },
];

const howTo: ImagenBase64LocaleContent['howTo'] = [
  {
    name: '拖拽或选择您的图片',
    text: '将任何图片 (JPG, PNG, WebP, SVG, GIF) 移动到上传区域以开始转换。',
  },
  {
    name: '复制生成的代码',
    text: '您将看到两个文本区域: 完整的 Data URI (准备用于 src="" 或 CSS) 以及用于其他用途的纯 Base64。',
  },
  {
    name: '在项目中使用代码',
    text: '直接将 Data URI 粘贴到 img 标签的 src 中或 CSS 的 background-image 中, 无需外部文件。',
  },
];

const seo: ImagenBase64LocaleContent['seo'] = [
  {
    type: 'title',
    text: '图片转 Base64 转换器: 无需 HTTP 请求即可嵌入图片',
    level: 2,
  },
  {
    type: 'paragraph',
    html: 'Base64 是一种编码技术, 它将二进制数据 (如图片) 转换为纯 ASCII 文本字符串。结果是一个 Data URI: 一个以 <code>data:image/png;base64,...</code> 开头的自包含 URL, 包含整个编码后的图片。通过将此代码直接嵌入 HTML、CSS 或 JSON, 图片无需任何额外的服务器 HTTP 请求即可加载——零网络延迟, 即时加载。',
  },
  {
    type: 'title',
    text: '何时使用 Base64 图片',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '支持 Base64 的主要理由是消除网络请求。网页上的每张图片都意味着一次 HTTP 请求, 带有连接、DNS、TLS 握手和延迟的开销。对于非常小的关键图片——主应用程序图标、favicon、UI 图标——在 CSS 或 HTML 中以 Base64 嵌入可以消除该成本, 并保证它们即使在浏览器缓存任何内容之前也能立即显示。',
  },
  {
    type: 'paragraph',
    html: '这种技术在 SPA (单页面应用程序) 中尤其强大, 其中 JavaScript 和 CSS 包在构建时生成: 在包中嵌入小图片可保证它们与代码一起加载, 无需额外请求。它对于 HTML 电子邮件也必不可少, 邮邮件客户端会拦截外部图片, 但几乎总是显示嵌入的 Data URI。',
  },
  {
    type: 'title',
    text: 'Base64 图片的使用案例',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      'HTML 内联: 关键图标使用 <code>&lt;img src="data:image/png;base64,..."&gt;</code>。',
      'CSS 背景: UI SVG 使用 <code>background-image: url("data:image/svg+xml;base64,...")</code>。',
      'JSON 和 REST API: 在 JSON 负载中将图片作为文本数据发送。',
      'HTML 电子邮件: 即使客户端拦截外部 URL 也会显示的嵌入式图片。',
      'SVG 嵌入: 在 SVG 文件中将位图嵌入为内联数据。',
    ],
  },
  {
    type: 'title',
    text: '转换在浏览器中如何工作',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '当您选择或拖动图片时, 浏览器的 <code>FileReader</code> API 直接从磁盘读取图片作为 RAM 中的二进制数据。 <code>readAsDataURL()</code> 方法使用 RFC 4648 算法将这些二进制字节转换为其 Base64 表示形式——原始数据的每 3 个字节表示为 Base64 字母表中的 4 个 ASCII 字符。结果包含自动检测到的正确 MIME 类型。',
  },
  {
    type: 'tip',
    title: '仅对小图片使用 (10 KB 以下)',
    html: 'Base64 会使文件大小增加约 33%: 10 KB 的图片变成约 13.3 KB 的文本。对于小图标和徽标, 此成本很小, 而消除 HTTP 请求可以弥补这一点。对于照片或大图片, 大小开销非常大——对于大图片, 请务必使用 CDN。',
  },
  {
    type: 'title',
    text: '何时不使用 Base64',
    level: 3,
  },
  {
    type: 'tip',
    title: '大图片请避免使用 Base64——请改用 CDN',
    html: '如果图片大于 10-20 KB, Base64 会损害性能: 它会使 HTML/CSS 大小膨胀, 阻止浏览器独立缓存图片, 并在解析器处理巨型字符串时阻塞渲染。对于大图片, 请务必使用带有适当缓存头的 CDN 服务。',
  },
  {
    type: 'title',
    text: '兼容性和私密性',
    level: 3,
  },
  {
    type: 'paragraph',
    html: 'Data URI 兼容 100% 的现代浏览器和大多数电子邮件客户端。我们的工具通过 FileReader API 在本地处理所有内容——您的图片绝不会离开您的设备。这使其适用于公司内部图片、私人截图或您需要转换为 Base64 的任何机密视觉内容。',
  },
  {
    type: 'title',
    text: '结论: 最快且最私密的嵌入工具',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '正确应用时, 将图片转换为 Base64 是一项有针对性但非常强大的技术。对于零 HTTP 请求能带来改变的小型、关键图片使用它, 对于 CDN 总是胜出的大型图片则应避免使用。使用我们的工具, 您可以立即获得 Data URI, 而无需上传任何内容至服务器。',
  },
];


export const content: ImagenBase64LocaleContent = {
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
