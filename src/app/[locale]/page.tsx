import { AppWindowMac, FileText, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  const t = useTranslations('nextjs');
  const FOOTER_LINKS = [
    {
      href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
      label: t('footer.learn'),
      icon: FileText,
    },
    {
      href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
      label: t('footer.examples'),
      icon: AppWindowMac,
    },
    {
      href: 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
      label: t('footer.goToNextjs'),
      icon: Globe,
    },
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            {t('getStarted')}{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">{t('saveAndSee')}</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button size="lg" variant="default" asChild>
            <Link
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              {t('deployNow')}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
            >
              {t('readDocs')}
            </Link>
          </Button>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {FOOTER_LINKS.map(({ href, label, icon: Icon }) => (
          <Button key={href} size="lg" variant="ghost" asChild>
            <Link href={href} target="_blank">
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          </Button>
        ))}
      </footer>
    </div>
  );
}
