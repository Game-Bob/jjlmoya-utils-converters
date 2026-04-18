import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'image-converters',
  title: '온라인 이미지 변환기',
  description: 'PNG, JPG, WebP, SVG, AVIF, GIF, BMP, ICO 형식 간에 이미지를 변환하는 무료 도구입니다. 모든 작업은 인터넷 업로드 없이 브라우저에서 로컬로 처리됩니다.',
  seo: [
    {
      type: 'summary',
      title: '우리의 변환기를 사용하는 이유',
      items: [
        '100% 로컬 변환: 이미지가 장치를 떠나지 않습니다.',
        '21가지 형식 조합 지원: PNG, JPG, WebP, SVG, AVIF, GIF, BMP, ICO.',
        'ZIP 다운로드를 통한 일괄 처리.',
        '가입 불필요, 제한 없음, 침입 광고 없음.',
      ],
    },
    {
      type: 'title',
      text: '이미지 변환: 전체 형식 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '올바른 이미지 형식을 선택하는 것은 웹 성능, 장치 호환성 및 시각적 품질에 직접적인 영향을 미칩니다. 우리의 <strong>온라인 이미지 변환기</strong>는 디자이너, 웹 개발자 및 사진가가 가장 많이 요청하는 변환 경로를 다루며, 파일의 개인 정보를 침해할 수 있는 외부 서버에 의존하지 않습니다.',
    },
    {
      type: 'title',
      text: 'PNG, JPG 및 WebP: 현대 웹 디자인의 세 가지 기둥',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>PNG 형식</strong>은 무손실 압축과 투명도 지원(알파 채널)으로 유명하며, 로고, 아이콘 및 선명한 그래픽의 표준입니다. <strong>JPG 형식</strong>은 최대한의 범용 호환성과 사진을 위한 줄어든 크기를 제공하지만, 저장할 때마다 품질이 저하됩니다. Google에서 개발한 <strong>WebP 형식</strong>은 두 형식의 장점을 모두 결합하여 PNG/JPG보다 30-40% 더 나은 압축률과 투명도 및 애니메이션을 지원합니다. 현재 Core Web Vitals에서 LCP 개선을 위해 권장하는 형식입니다.',
    },
    {
      type: 'table',
      headers: ['형식', '투명도', '압축', '용도'],
      rows: [
        ['PNG', '예', '무손실', '로고, 그래픽, 스크린샷'],
        ['JPG', '아니요', '손실', '사진, 큰 이미지'],
        ['WebP', '예', '무손실/손실', '현대 웹, 성능'],
        ['SVG', '예', '벡터', '확장 가능한 아이콘, 애니메이션'],
        ['AVIF', '예', '우수', '차세대 웹'],
        ['ICO', '예', '비트맵', '파비콘, Windows 아이콘'],
      ],
    },
    {
      type: 'title',
      text: '차세대 형식: AVIF 및 WebP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>AVIF 형식</strong>(AV1 Image File Format)은 WebP의 기술적 후계자로, 동일한 주관적 품질에서 JPG보다 최대 50% 작은 파일 크기를 제공합니다. 채택이 빠르게 증가하고 있지만, 이전 시스템과의 호환성이 제한적이어서 AVIF를 JPG, PNG 또는 WebP와 같은 기존 형식으로 변환하는 작업이 제작 워크플로우에서 자주 필요합니다.',
    },
    {
      type: 'tip',
      title: '웹 성능 팁',
      html: '페이지 로딩 속도를 최대화하려면 웹사이트의 기본 형식으로 WebP를 사용하고 구형 브라우저를 위해 JPG/PNG 폴백을 제공하세요. 여러 <code>source</code> 태그가 있는 HTML <code>picture</code> 요소를 사용하면 방문자의 브라우저 지원에 따라 최적의 형식을 제공할 수 있습니다.',
    },
    {
      type: 'title',
      text: 'SVG, BMP 및 ICO: 특수 용도',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>SVG 파일</strong>은 어떤 해상도에서도 품질 저하 없이 확장 가능한 수학적 벡터로, 로고 및 그래픽 디자인에 적합합니다. 그러나 많은 플랫폼과 편집 애플리케이션이 이를 직접 지원하지 않으므로 배포를 위해 PNG 또는 JPG로 래스터화해야 하는 경우가 많습니다. <strong>BMP 파일</strong>은 웹 용도로는 구식이지만 Windows 환경과 레거시 편집 소프트웨어에서 여전히 사용됩니다. 마지막으로 <strong>ICO 형식</strong>은 웹 파비콘 및 Windows 아이콘 사용자 정의의 표준이며, 변환기에서 기본적으로 생성하는 특정 바이너리 헤더 구조가 필요합니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { label: '조합', value: '21', icon: 'mdi:image-sync' },
        { label: '개인정보 보호', value: '100% 로컬', icon: 'mdi:shield-lock' },
        { label: '형식', value: '8가지', icon: 'mdi:file-image' },
      ],
    },
    {
      type: 'title',
      text: '완전한 개인정보 보호: 서버 없는 변환',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이미지를 원격 서버로 업로드하는 다른 온라인 도구(개인 정보 및 보안 위험 수반)와 달리, 우리의 변환기는 브라우저 기본 API만을 사용합니다: 래스터화에는 <strong>Canvas 2D API</strong>, 파일 로컬 읽기에는 <strong>FileReader API</strong>, 다운로드에는 <strong>Blob/URL.createObjectURL</strong>을 사용합니다. 즉, 기밀 이미지, 기업 로고 또는 개인 문서를 완벽하게 안전하게 변환할 수 있습니다.',
    },
  ],
};
