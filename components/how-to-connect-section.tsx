import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardList, Settings, Rocket } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

const steps = [
  {
    icon: ClipboardList,
    number: '1',
    title: 'Заявка и диагностика пилота',
    description:
      'Оставьте заявку, и мы проведём анализ потребностей вашей школы',
  },
  {
    icon: Settings,
    number: '2',
    title: 'Установка оборудования и обучение персонала',
    description:
      'Наши специалисты установят систему и обучат ваших сотрудников',
  },
  {
    icon: Rocket,
    number: '3',
    title: 'Запуск, SLA-поддержка, масштабирование',
    description: 'Запускаем систему с полной технической поддержкой',
  },
];

export function HowToConnectSection() {
  return (
    <section id='connect' className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-5xl'>
          <ScrollAnimation>
            <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
              Как подключиться
            </h2>
            <p className='mb-12 text-center text-muted-foreground'>
              Простой процесс внедрения за 3 шага
            </p>
          </ScrollAnimation>

          <div className='mb-12 grid gap-8 md:grid-cols-3'>
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 0.15}>
                <Card className='h-full'>
                  <CardContent className='p-6 text-center'>
                    <div className='mb-4 flex justify-center'>
                      <div className='relative'>
                        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
                          <step.icon className='h-8 w-8 text-primary' />
                        </div>
                        <div className='absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground'>
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <h3 className='mb-3 font-bold'>{step.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.3}>
            <Card className='bg-primary/5'>
              <CardContent className='p-8 text-center'>
                <p className='mb-6 text-lg font-bold'>
                  Пилот возможен за 14 дней
                </p>
                <Button size='lg' id='demo'>
                  Запросить демо
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
