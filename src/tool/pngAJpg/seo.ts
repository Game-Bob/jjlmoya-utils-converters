import type { SEOSection } from '@jjlmoya/utils-shared';

type FAQ = { question: string; answer: string };
type Step = { name: string; text: string };

export function buildPngJpgSeo(source: {
  title: string;
  description: string;
  faq: FAQ[];
  howTo: Step[];
}): SEOSection[] {
  const faq = (index: number) => source.faq[index % source.faq.length];
  const step = (index: number) => source.howTo[index % source.howTo.length];

  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    { type: 'title', text: faq(1).question, level: 3 },
    { type: 'paragraph', html: faq(1).answer },
    { type: 'paragraph', html: faq(2).answer },
    { type: 'title', text: faq(0).question, level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: faq(0).question,
          description: faq(0).answer,
          icon: 'mdi:cloud-upload',
          pointIcon: 'mdi:close-circle-outline',
          points: [step(0).name, step(1).name],
        },
        {
          title: source.title,
          description: step(0).text,
          icon: 'mdi:laptop-mac',
          highlight: true,
          points: [step(1).name, step(2).name],
        },
      ],
    },
    { type: 'title', text: faq(2).question, level: 3 },
    { type: 'paragraph', html: step(0).text },
    { type: 'paragraph', html: step(1).text },
    { type: 'tip', title: step(2).name, html: `<p>${faq(3).answer}</p>` },
    { type: 'title', text: faq(3).question, level: 3 },
    { type: 'paragraph', html: faq(3).answer },
    { type: 'title', text: step(0).name, level: 3 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: source.howTo.map(({ name, text }) => `<strong>${name}:</strong> ${text}`),
    },
    { type: 'title', text: step(2).name, level: 3 },
    { type: 'paragraph', html: source.description },
  ];
}
