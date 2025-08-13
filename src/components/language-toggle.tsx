'use client';

import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const locales = [
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' },
];

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (locale: string) => {
    const segments = pathname.split('/');
    if (segments[1] && locales.some((l) => l.code === segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    const newPath = segments.join('/') || '/';
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-4">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale.code} onClick={() => handleChange(locale.code)}>
            {locale.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
