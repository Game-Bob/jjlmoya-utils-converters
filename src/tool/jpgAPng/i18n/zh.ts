import type { ImageConverterUI } from '../../../shared/ImageConverter.astro';
import { generateSchemas } from '../../../shared/logic/schemas';
import type { JpgAPngLocaleContent } from '../index';

const slug = 'convert-jpg-to-png';
const title = '在线免费将 JPG 转换为 PNG';
const description =
  '在您的浏览器中完成 JPG 到 PNG 的转换，无需上传文件。无损转换、免费且完全私密。';

const ui: ImageConverterUI = {
  dragText: '拖拽 JPG 文件...',
  convertText: '立即将其转换为 PNG',
  selectFiles: '选择文件',
  processedFiles: '已处理文件',
  downloadAll: '下载全部 (.zip)',
  pending: '等待中',
  bibliographyTitle: '参考文献',
  faqTitle: '常见问题',
};

const faq: JpgAPngLocaleContent['faq'] = [
  {
    question: '我什么时候应该将 JPG 转换为 PNG？',
    answer:
      '每当您需要编辑照片中的文字或徽标（logo）时。如果您多次保存 JPG，图像质量会变差。而 PNG 会“冻结”压缩，保持质量不变。',
  },
  {
    question: 'PNG 文件会立即具有透明背景吗？',
    answer:
      '不会。原始 JPG 是扁平的，没有透明通道。生成的 PNG 会准备好这个容器，然后您需要使用 Photoshop 或其他编辑器来隔离并移除背景。',
  },
  {
    question: '这个网站有流量限制吗？',
    answer:
      '由于使用了无云端依赖的 Edge 技术，您的转换大小不受任何限制，因为它完全利用您的电脑或移动终端完成处理。',
  },
];

const howTo: JpgAPngLocaleContent['howTo'] = [
  {
    name: '将 JPG 拖入面板',
    text: '使用鼠标或文件选择器上传 JPG 格式的静态图像。',
  },
  {
    name: '无损执行',
    text: 'Vanilla 软件将图像位信息推入 PNG 家族特有的无损包装容器中。',
  },
  {
    name: '结束会话',
    text: '点击面板，您的浏览器会将下载的网页资产保存到您的用户文件夹中。',
  },
];

const bibliography: JpgAPngLocaleContent['bibliography'] = [
  {
    name: 'The W3C PNG Graphics',
    url: 'https://www.w3.org/Graphics/PNG/',
  },
  {
    name: 'Understanding Digital Image Compression',
    url: 'https://en.wikipedia.org/wiki/Image_compression',
  },
];

const seo: JpgAPngLocaleContent['seo'] = [
  {
    type: 'title',
    text: 'JPG 转 PNG 转换器：无损编辑与透明度支持',
    level: 2,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> 对于相机拍摄的照片来说是无可比拟的，但它有一个致命弱点：每次保存文件时，它都会重新应用有损压缩，导致边缘和渐变逐渐降级。而 <strong>PNG</strong> 使用无损压缩——一旦保存，像素就是不可更改的。当您需要准备图像进行深度编辑、添加透明背景，或将其集成到需要多次保存的设计流程中时，将 JPG 转换为 PNG 就是关键操作。',
  },
  {
    type: 'title',
    text: 'JPG 还是 PNG？何时使用每种格式',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '<strong>JPG</strong> 是摄影之王：体积小，兼容性极佳。但在每次编辑和重新保存时，其压缩伪影（artifacts）会不断累积。如果您需要反复裁剪、修饰或向图像添加文字，从 JPG 开始意味着在每个周期中都会引入质量退化。此外，JPG 缺乏 Alpha 通道：它无法拥有透明背景，这使其在徽标、图标和 UI 元素中处于劣势。',
  },
  {
    type: 'paragraph',
    html: '<strong>PNG</strong> 是公司徽标、文字清晰的截图、界面元素、后期需要抠图的白底产品图，或任何需要多次编辑的图形资源的正确选择。无损压缩保证了文字边缘保持完美的清晰度，纯色区域保持纯净，没有 JPEG 噪点。',
  },
  {
    type: 'title',
    text: '对比：本地转换 vs 云端转换',
    level: 3,
  },
  {
    type: 'comparative',
    items: [
      {
        title: '云端转换器',
        description: '将您的文件上传到远程服务器进行处理的工具。',
        icon: 'mdi:cloud-upload',
        pointIcon: 'mdi:close-circle-outline',
        points: [
          '上传和下载时的网络延迟',
          '您的图像保留在他人的服务器上',
          '文件大小和每日转换次数限制',
          '干扰性广告和第三方追踪器',
        ],
      },
      {
        title: '我们的本地架构',
        description: '通过 Vanilla JS 技术在您的硬件上直接处理。',
        icon: 'mdi:laptop-mac',
        highlight: true,
        points: [
          '即时处理——零网络延迟',
          '完全隐私——0 字节向外传输',
          '没有 MB 大小或文件数量限制',
          '界面干净，无广告或追踪',
        ],
      },
    ],
  },
  {
    type: 'title',
    text: '技术原理是如何运作的',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '处理过程完全是本地的：浏览器根据选定的 JPG 创建一个 <strong>Blob</strong>，并将其绘制在内存中的 <strong>HTML5 Canvas</strong> 上。渲染完成后，调用 <code>toDataURL(\'image/png\')</code>——浏览器内置的 PNG 编解码器会重新编码每个像素，而不应用任何新的有损压缩。结果是一个忠实保留 JPG 当前状态的 PNG：质量既没有变好也没有变坏，只是被“冻结”了。',
  },
  {
    type: 'paragraph',
    html: '生成的 PNG 将使用 DEFLATE 无损压缩，这与 Photoshop 或 GIMP 等专业工具所使用的技术相同。由于它存储了所有像素且不丢弃信息，因此其体积将比原始 JPG 更大——通常在 2 到 5 倍之间。这是为了忠实度和无限可编辑性所付出的代价。',
  },
  {
    type: 'tip',
    title: '重要提示：PNG 不会恢复 JPEG 的质量',
    html: '将 JPG 转换为 PNG <strong>不会恢复</strong>在原始 JPEG 压缩过程中损失的质量。如果您的 JPG 已经存在模糊块（block artifacts）或色彩噪点，PNG 会完好地保留它们——它只是防止了进一步压缩带来的损失。您可以将转换视为对图像当前状态的“冻结”，以便未来的编辑不会进一步降低其质量。',
  },
  {
    type: 'title',
    text: '使用场景与兼容性',
    level: 3,
  },
  {
    type: 'list',
    icon: 'mdi:check-circle',
    items: [
      '抠图后需要透明背景的徽标和品牌元素。',
      '带有文字且需要多次编辑和重新保存的截图。',
      '需要干净、可抠图白底的电商产品图。',
      '用于 PowerPoint 或 Google Slides 演示文稿的图形资源。',
      '边缘清晰度至关重要的网页和移动应用的 UI 资产。',
    ],
  },
  {
    type: 'title',
    text: '结论',
    level: 3,
  },
  {
    type: 'paragraph',
    html: '将 JPG 转换为 PNG 是任何严肃设计流程的第一步。它不会改变原始质量，但会保护每个像素不受未来编辑的影响。使用此工具，转换过程瞬间完成且完全私密，您的企业或个人图像绝不会离开您的设备。',
  },
];


export const content: JpgAPngLocaleContent = {
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
