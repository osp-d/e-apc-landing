import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const documents = [
  'Приказ №456 Министерства просвещения РК',
  'Лицензия второй категории КНБ РК',
  'Протоколы испытаний по информационной безопасности (Минцифры РК)',
  'Договор с ОЦИБ (Отраслевой центр информационной безопасности)',
  'Индустриальный сертификат',
  'Сертификат ISO/IEC 27001:2013',
];

export function DocumentationSection() {
  return (
    <section className='bg-muted/30 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
            Документация и соответствие требованиям
          </h2>
          <p className='mb-12 text-center text-muted-foreground'>
            Наши продукты полностью соответствуют требованиям законодательства и
            образовательных стандартов
          </p>

          <Card>
            <CardContent className='p-8'>
              <h3 className='mb-6 text-xl font-bold'>
                Документы и сертификаты:
              </h3>
              <div className='grid gap-4 sm:grid-cols-2'>
                {documents.map((doc) => (
                  <div key={doc} className='flex items-center gap-3'>
                    <CheckCircle2 className='h-5 w-5 shrink-0 text-primary' />
                    <span className='text-sm'>{doc}</span>
                  </div>
                ))}
              </div>
              <p className='mt-6 text-sm text-muted-foreground'>
                Все документы готовы к предоставлению по запросу.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
