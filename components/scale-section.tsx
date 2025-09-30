import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

const regions = [
  { name: 'Туркестанская область', count: 420 },
  { name: 'Жамбылская область', count: 182 },
  { name: 'г. Шымкент', count: 54 },
  { name: 'Западно-Казахстанская область', count: 53 },
  { name: 'Кызылординская область', count: 42 },
];

export function ScaleSection() {
  return (
    <section className='bg-muted/30 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-5xl'>
          <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
            Масштаб внедрения
          </h2>

          <Card className='mb-8'>
            <CardContent className='p-8 text-center'>
              <div className='mb-4 flex justify-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
                  <Building2 className='h-8 w-8 text-primary' />
                </div>
              </div>
              <div className='mb-2 text-5xl font-bold text-primary'>805</div>
              <p className='text-muted-foreground'>
                учреждений подключено по Казахстану
              </p>
              <p className='mt-2 text-sm text-muted-foreground'>
                (на 30.08.2025)
              </p>
            </CardContent>
          </Card>

          <div className='mb-8'>
            <h3 className='mb-6 text-center text-xl font-bold'>ТОП-регионы:</h3>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {regions.map((region) => (
                <Card key={region.name}>
                  <CardContent className='p-4'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium'>{region.name}</span>
                      <span className='text-2xl font-bold text-primary'>
                        {region.count}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <p className='text-center text-md text-muted-foreground'>
            Масштаб = зрелость процессов внедрения + отлаженная поддержка
          </p>
        </div>
      </div>
    </section>
  );
}
