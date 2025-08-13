import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export interface GuestLayoutProp {
  children: React.ReactNode;
}

export default function GuestLayout({ children }: GuestLayoutProp) {
  const t = useTranslations('locale.guest.layout');

  return (
    <div className="min-h-dvh flex flex-col gap-4">
      <header className="p-4 bg-transparent border-b">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">
            {t('header.logo')}
          </Link>
          <div className="flex space-x-4 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon">
                  <Link href="/auth/login">
                    <LogIn />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{t('header.login')}</TooltipContent>
            </Tooltip>
            <div className="border-l h-6 mx-2" />
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent>{t('header.theme')}</TooltipContent>
            </Tooltip>
            <div className="border-l h-6 mx-2" />
            <Tooltip>
              <TooltipTrigger asChild>
                <LanguageToggle />
              </TooltipTrigger>
              <TooltipContent>{t('header.language')}</TooltipContent>
            </Tooltip>
          </div>
        </nav>
      </header>

      <main className="px-4 h-full my-auto">
        <div className="container mx-auto">{children}</div>
      </main>

      <footer className=" p-4 bg-transparent border-t">
        <div className="text-center container mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
