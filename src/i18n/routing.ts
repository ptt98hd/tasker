import { defineRouting } from 'next-intl/routing';

export const locales: [en: string] = ['en'] as const;

const [en] = locales;
export const routing = defineRouting({
  locales: locales,
  defaultLocale: en,
});
