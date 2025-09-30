import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export function ProblemSolutionSection() {
  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='mb-12 text-balance text-center text-3xl font-bold md:text-4xl'>
            О проблеме и решении
          </h2>

          <div className='grid gap-8 md:grid-cols-2'>
            <Card className='border-destructive/20 bg-destructive/5'>
              <CardContent className='p-6'>
                <div className='mb-4 flex items-center gap-2'>
                  <AlertCircle className='h-6 w-6 text-destructive' />
                  <h3 className='text-xl font-bold'>Сегодня в школах</h3>
                </div>
                <ul className='space-y-3 text-muted-foreground'>
                  <li className='flex gap-2'>
                    <span className='text-destructive'>•</span>
                    <span>Очереди в столовой</span>
                  </li>
                  <li className='flex gap-2'>
                    <span className='text-destructive'>•</span>
                    <span>Ручной учёт льгот</span>
                  </li>
                  <li className='flex gap-2'>
                    <span className='text-destructive'>•</span>
                    <span>Работа с наличкой</span>
                  </li>
                  <li className='flex gap-2'>
                    <span className='text-destructive'>•</span>
                    <span>Проблемы с посещаемостью и библиотекой</span>
                  </li>
                  <li className='flex gap-2'>
                    <span className='text-destructive'>•</span>
                    <span>Родители не видят картину в реальном времени</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='border-primary/20 bg-primary/5'>
              <CardContent className='p-6'>
                <div className='mb-4 flex items-center gap-2'>
                  <CheckCircle2 className='h-6 w-6 text-primary' />
                  <h3 className='text-xl font-bold'>Наше решение</h3>
                </div>
                <div className='text-muted-foreground flex gap-3 flex-col'>
                  <span>E-APC объединяет</span>
                  <ul className='space-y-1 text-muted-foreground'>
                    <li className='flex gap-2'>
                      <span className='text-primary'>•</span>
                      <span>электронную столовую</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='text-primary'>•</span>
                      <span>систему управления доступом</span>
                    </li>
                    <li className='flex gap-2'>
                      <span className='text-primary'>•</span>
                      <span>библиотеку</span>
                    </li>
                  </ul>
                  <span>
                    в единую экосистему с мобильными приложениями iOS/Android
                    для школы и родителей.
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
