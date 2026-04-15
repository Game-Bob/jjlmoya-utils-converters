import type { WithContext, SoftwareApplication, FAQPage, HowTo, Thing } from 'schema-dts';
import type { FAQItem, HowToStep } from '../../types';

interface SchemaOptions {
  title: string;
  description: string;
  inLanguage: string;
  faq: FAQItem[];
  howTo: HowToStep[];
}

export function generateSchemas(options: SchemaOptions): WithContext<Thing>[] {
  const { title, description, inLanguage, faq, howTo } = options;

  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage,
  };

  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: step.text,
        },
      ],
    })),
  };

  return [appSchema as any, faqSchema as any, howToSchema as any];
}
