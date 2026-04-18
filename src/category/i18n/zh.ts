import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'image-converters',
  title: '在线图像转换器',
  description: '在 PNG、JPG、WebP、SVG、AVIF、GIF、BMP 和 ICO 格式之间转换图像的免费工具。所有操作都在您的浏览器中本地处理，无需上传到互联网。',
  seo: [
    {
      type: 'summary',
      title: '为什么使用我们的转换器',
      items: [
        '100% 本地转换：您的图像永远不会离开您的设备。',
        '支持 21 种格式组合：PNG、JPG、WebP、SVG、AVIF、GIF、BMP 和 ICO。',
        '支持 ZIP 下载的批量处理。',
        '无需注册，无限制，无侵入性广告。',
      ],
    },
    {
      type: 'title',
      text: '图像转换：完整格式指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '选择正确的图像格式直接影响网页性能、设备兼容性和感知的视觉质量。我们的<strong>在线图像转换器</strong>涵盖了设计师、网页开发人员和摄影师需求最频繁的转换路径，所有这些都不依赖于可能损害文件隐私的外部服务器。',
    },
    {
      type: 'title',
      text: 'PNG、JPG 和 WebP：现代网页设计的三大支柱',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG 格式</strong>以其无损压缩和透明度支持（Alpha 通道）脱颖而出，是标志、图标和具有锋利边缘图形的标准。<strong>JPG 格式</strong>为照片提供最大的通用兼容性和减小的尺寸，但每次保存都会牺牲质量。由 Google 开发的 <strong>WebP 格式</strong>结合了两者之长：比 PNG/JPG 的压缩率高 30-40%，且支持透明度和动画，现在是 Core Web Vitals 推荐用于改善 LCP 的格式。',
    },
    {
      type: 'table',
      headers: ['格式', '透明度', '压缩', '最适合'],
      rows: [
        ['PNG', '是', '无损', '标志、图形、屏幕截图'],
        ['JPG', '否', '有损', '照片、大图'],
        ['WebP', '是', '无损/有损', '现代网页、性能'],
        ['SVG', '是', '矢量', '可缩放图标、动画'],
        ['AVIF', '是', '卓越', '下一代网页'],
        ['ICO', '是', '位图', '网站图标、Windows 图标'],
      ],
    },
    {
      type: 'title',
      text: '下一代格式：AVIF 和 WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF 格式</strong> (AV1 Image File Format) 是 WebP 的技术继任者，在主观质量相同的情况下，文件大小比 JPG 小 50%。虽然其采用率快速增长，但在旧系统中的兼容性有限，使得在生产工作流中经常需要将 AVIF 转换为更成熟的格式（如 JPG、PNG 或 WebP）。',
    },
    {
      type: 'tip',
      title: '网页性能提示',
      html: '为了最大限度地提高页面加载速度，请在您的网站上使用 WebP 作为主要格式，并为旧浏览器提供 JPG/PNG 备用。具有多个 <code>source</code> 标签的 HTML <code>picture</code> 元素允许您根据访问浏览器的支持情况提供最佳格式。',
    },
    {
      type: 'title',
      text: 'SVG、BMP 和 ICO：特殊用例',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG 文件</strong>是数学矢量，可以无损缩放到任何分辨率，非常适合标志和图形设计。然而，许多平台和编辑应用程序并不直接支持它们，因此需要将它们光栅化为 PNG 或 JPG 以进行分发。<strong>BMP 文件</strong>虽然在网页使用方面已经过时，但在 Windows 环境和旧版编辑软件中仍然很常见。最后，<strong>ICO 格式</strong>是网页图标和 Windows 图标自定义的标准，需要我们的转换器原生生成的特定二进制头结构。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: '组合', value: '21', icon: 'mdi:image-sync' },
        { label: '隐私', value: '100% 本地', icon: 'mdi:shield-lock' },
        { label: '格式', value: '8 种类型', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: '完全隐私：无需服务器转换',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '与其他将图像上传到远程服务器（由于隐私和安全风险）的在线工具不同，我们的转换器仅使用原生浏览器 API：用于光栅化的 <strong>Canvas 2D API</strong>、用于本地读取文件的 <strong>FileReader API</strong> 以及用于下载的 <strong>Blob/URL.createObjectURL</strong> kenyataan. 这意味着您可以完全安全地转换机密图像、公司标志或私人文档。',
    },
  ],
};
