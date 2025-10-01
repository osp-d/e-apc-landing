import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

const integrations = [
  {
    name: 'ИС «Социальный кошелёк»',
    url: 'socialwallet.kz',
    description: 'Автоматизация учёта бесплатного и льготного питания',
  },
  {
    name: 'ЦОР Bilimland.kz',
    url: 'bilimland.kz',
    description: 'Интеграция с цифровыми образовательными ресурсами',
  },
  {
    name: 'Электронное Правительство',
    url: 'egov.kz',
    description: 'Синхронизация с госуслугами и идентификация пользователей',
  },
  {
    name: 'Kaspi.kz',
    url: 'kaspi.kz',
    description: 'Быстрые и удобные платежи через крупнейший банк страны',
  },
];

const benefits = [
  'Прозрачный учёт льгот и платежей',
  'Автоматизация отчётности',
  'Удобство для родителей',
  'Интеграция в единую цифровую экосистему РК',
];

export function IntegrationsSection() {
  return (
    <section id='integrations' className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          <ScrollAnimation>
            <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
              Интеграции
            </h2>
            <p className='mb-12 text-center text-muted-foreground'>
              E-APC подключён к ключевым цифровым экосистемам Казахстана
            </p>
          </ScrollAnimation>

          <div className='mb-12 grid gap-6 md:grid-cols-2'>
            {integrations.map((integration, index) => (
              <ScrollAnimation key={integration.name} delay={index * 0.1}>
                <Card className='h-full'>
                  <CardContent className='p-6'>
                    <div className='mb-2 flex items-start gap-2'>
                      <CheckCircle2 className='mt-1 h-5 w-5 shrink-0 text-primary' />
                      <div>
                        <h3 className='font-bold'>{integration.name}</h3>
                        <p className='text-sm text-muted-foreground'>
                          ({integration.url})
                        </p>
                      </div>
                    </div>
                    <p className='ml-7 text-sm text-muted-foreground'>
                      {integration.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.3}>
            <Card className='bg-primary/5'>
              <CardContent className='p-8'>
                <h3 className='mb-6 text-xl font-bold'>
                  Что это даёт школам и акиматам:
                </h3>
                <div className='grid gap-3 sm:grid-cols-2'>
                  {benefits.map((benefit) => (
                    <div key={benefit} className='flex items-center gap-2'>
                      <div className='h-1.5 w-1.5 rounded-full bg-primary' />
                      <span className='text-sm'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
