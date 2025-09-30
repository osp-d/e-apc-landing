import Link from 'next/link';

export function Footer() {
  return (
    <footer className='border-t bg-muted/30 py-12'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-8 flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div className='flex items-center gap-2'>
              <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary'>
                <span className='text-xl font-bold text-primary-foreground'>
                  E
                </span>
              </div>
              <span className='text-xl font-bold'>E-APC</span>
            </div>

            <nav className='flex flex-wrap justify-center gap-6'>
              <Link
                href='#products'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Продукты
              </Link>
              <Link
                href='#integrations'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Интеграции
              </Link>
              <Link
                href='#cases'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Кейсы
              </Link>
              <Link
                href='#faq'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                FAQ
              </Link>
              <Link
                href='#contacts'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Контакты
              </Link>
            </nav>
          </div>

          <div className='border-t pt-8 text-center'>
            <p className='mb-2 text-sm text-muted-foreground'>
              © E-APC, 2025. Все права защищены.
            </p>
            <p className='mb-2 text-sm text-muted-foreground'>
              Обработка данных осуществляется с соблюдением требований ИБ.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Политика конфиденциальности
              </Link>
              <span className='text-muted-foreground'>•</span>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-primary'
              >
                Договор оферты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
