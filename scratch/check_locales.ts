import { ALL_TOOLS } from './src/tools';

const allLocales = new Set<string>();
ALL_TOOLS.forEach(tool => {
  Object.keys(tool.entry.i18n).forEach(l => allLocales.add(l));
});

console.log('All observed locales:', Array.from(allLocales).sort());

ALL_TOOLS.forEach(tool => {
  const toolLocales = Object.keys(tool.entry.i18n);
  const missing = Array.from(allLocales).filter(l => !toolLocales.includes(l));
  if (missing.length > 0) {
    console.log(`Tool ${tool.entry.id} is missing: ${missing.join(', ')}`);
  }
});
