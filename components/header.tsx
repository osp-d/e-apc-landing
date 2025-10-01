'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center gap-2'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary'>
            <span className='text-xl font-bold text-primary-foreground'>E</span>
          </div>
          <span className='text-xl font-bold'>E-APC</span>
        </Link>

        <nav className='hidden items-center gap-6 md:flex'>
          <Link
            href='#products'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Продукты
          </Link>
          <Link
            href='#integrations'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Интеграции
          </Link>
          <Link
            href='#cases'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Кейсы
          </Link>
          <Link
            href='#faq'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            FAQ
          </Link>
          <Link
            href='#contacts'
            className='text-sm font-medium transition-colors hover:text-primary'
          >
            Контакты
          </Link>
        </nav>

        <Button asChild className='hidden md:flex'>
          <Link href='#demo'>Запросить демо</Link>
        </Button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='flex items-center justify-center md:hidden'
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? (
            <X className='h-6 w-6' />
          ) : (
            <Menu className='h-6 w-6' />
          )}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='fixed inset-0 top-16 bg-black/20 backdrop-blur-sm md:hidden'
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='absolute left-0 right-0 top-16 border-b bg-background shadow-lg md:hidden'
              >
                <div className='container mx-auto flex flex-col gap-4 px-4 py-6'>
                  <Link
                    href='#products'
                    className='text-base font-medium transition-colors hover:text-primary'
                    onClick={handleLinkClick}
                  >
                    Продукты
                  </Link>
                  <Link
                    href='#integrations'
                    className='text-base font-medium transition-colors hover:text-primary'
                    onClick={handleLinkClick}
                  >
                    Интеграции
                  </Link>
                  <Link
                    href='#cases'
                    className='text-base font-medium transition-colors hover:text-primary'
                    onClick={handleLinkClick}
                  >
                    Кейсы
                  </Link>
                  <Link
                    href='#faq'
                    className='text-base font-medium transition-colors hover:text-primary'
                    onClick={handleLinkClick}
                  >
                    FAQ
                  </Link>
                  <Link
                    href='#contacts'
                    className='text-base font-medium transition-colors hover:text-primary'
                    onClick={handleLinkClick}
                  >
                    Контакты
                  </Link>
                  <Button asChild className='mt-2 w-full'>
                    <Link href='#demo' onClick={handleLinkClick}>
                      Запросить демо
                    </Link>
                  </Button>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
