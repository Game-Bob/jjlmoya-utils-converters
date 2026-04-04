import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'image-converters',
  title: 'Online Image Converters',
  description: 'Free tools to convert images between PNG, JPG, WebP, SVG, AVIF, GIF, BMP and ICO formats. Everything is processed locally in your browser without uploading anything to the internet.',
  seo: [
    {
      type: 'summary',
      title: 'Why use our converters',
      items: [
        '100% local conversion: your images never leave your device.',
        'Support for 21 format combinations: PNG, JPG, WebP, SVG, AVIF, GIF, BMP and ICO.',
        'Batch processing with ZIP download.',
        'No registration, no limits, no intrusive ads.',
      ],
    },
    {
      type: 'title',
      text: 'Image Conversion: Complete Format Guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Choosing the right image format has a direct impact on web performance, device compatibility and perceived visual quality. Our <strong>online image converters</strong> cover the most demanded conversion routes by designers, web developers and photographers, all without relying on external servers that could compromise the privacy of your files.',
    },
    {
      type: 'title',
      text: 'PNG, JPG and WebP: The Three Pillars of Modern Web Design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG format</strong> stands out for its lossless compression and transparency support (alpha channel), being the standard for logos, icons and graphics with sharp edges. <strong>JPG format</strong> offers maximum universal compatibility and reduced sizes for photos, but sacrifices quality with each save. <strong>WebP format</strong>, developed by Google, combines the best of both: 30-40% better compression than PNG/JPG with transparency and animation support, now the recommended format by Core Web Vitals to improve LCP.',
    },
    {
      type: 'table',
      headers: ['Format', 'Transparency', 'Compression', 'Best for'],
      rows: [
        ['PNG', 'Yes', 'Lossless', 'Logos, graphics, screenshots'],
        ['JPG', 'No', 'Lossy', 'Photos, large images'],
        ['WebP', 'Yes', 'Lossless/Lossy', 'Modern web, performance'],
        ['SVG', 'Yes', 'Vector', 'Scalable icons, animations'],
        ['AVIF', 'Yes', 'Superior', 'Next-gen web'],
        ['ICO', 'Yes', 'Bitmap', 'Favicons, Windows icons'],
      ],
    },
    {
      type: 'title',
      text: 'Next-Generation Formats: AVIF and WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF format</strong> (AV1 Image File Format) is the technological successor of WebP, offering up to 50% less file size than JPG at equal subjective quality. Although its adoption grows rapidly, limited compatibility in older systems makes converting AVIF to more established formats like JPG, PNG or WebP a frequent need in production workflows.',
    },
    {
      type: 'tip',
      title: 'Web performance tip',
      html: 'To maximize page load speed, use WebP as the primary format on your website with JPG/PNG fallbacks for older browsers. The HTML <code>picture</code> element with multiple <code>source</code> tags lets you serve the optimal format based on the visiting browser\'s support.',
    },
    {
      type: 'title',
      text: 'SVG, BMP and ICO: Special Use Cases',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG files</strong> are mathematical vectors that scale losslessly to any resolution, perfect for logos and graphic design. However, many platforms and editing applications do not support them directly, making it necessary to rasterize them to PNG or JPG for distribution. <strong>BMP files</strong>, though obsolete for web use, remain common in Windows environments and legacy editing software. Finally, the <strong>ICO format</strong> is the standard for web favicons and Windows icon customization, requiring a specific binary header structure that our converter generates natively.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: 'Combinations', value: '21', icon: 'mdi:image-sync' },
        { label: 'Privacy', value: '100% local', icon: 'mdi:shield-lock' },
        { label: 'Formats', value: '8 types', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: 'Total Privacy: Conversion without Servers',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unlike other online tools that upload your images to remote servers (with the privacy and security risks that entails), our converters use exclusively native browser APIs: <strong>Canvas 2D API</strong> for rasterization, <strong>FileReader API</strong> to read files locally and <strong>Blob/URL.createObjectURL</strong> for downloads. This means you can convert confidential images, corporate logos or private documents with complete security.',
    },
  ],
};
