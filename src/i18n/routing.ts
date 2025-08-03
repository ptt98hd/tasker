import { defineRouting } from 'next-intl/routing';

export const locales: [en: string, vi: string] = ['en', 'vi'] as const;

const [en] = locales;
export const routing = defineRouting({
  locales: locales,
  defaultLocale: en,
});
