import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Shield, BookOpen, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

const products = [
  {
    icon: UtensilsCrossed,
    title: 'E-ASHANA',
    subtitle: 'Электронная столовая',
    description:
      'Учёт бесплатного питания, безналичный расчёт, родительский контроль, интеграция с «Социальным кошельком».',
    link: 'https://e-ashana.kz',
    color: 'text-primary',
  },
  {
    icon: Shield,
    title: 'E-BASQARU',
    subtitle: 'СКУД и посещаемость',
    description:
      'Face ID / IC-карта / QR, учёт рабочего времени сотрудников и посещаемости занятий, история и отчёты.',
    link: 'https://e-basqaru.kz',
    color: 'text-primary',
  },
  {
    icon: BookOpen,
    title: 'E-KITAPHANA',
    subtitle: 'Электронная библиотека',
    description:
      'База книжного фонда, учёт движения книг, push-отчёты и родительский контроль.',
    link: 'https://e-kitaphana.kz',
    color: 'text-primary',
  },
];

export function ProductsSection() {
  return (
    <section id='products' className='bg-muted/30 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          <ScrollAnimation>
            <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
              Продукты
            </h2>
            <p className='mb-12 text-center text-muted-foreground'>
              Три решения в единой экосистеме
            </p>
          </ScrollAnimation>

          <div className='grid gap-6 md:grid-cols-3'>
            {products.map((product, index) => (
              <ScrollAnimation key={product.title} delay={index * 0.1}>
                <Card className='h-full transition-shadow hover:shadow-lg'>
                  <CardHeader>
                    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                      <product.icon className={`h-6 w-6 ${product.color}`} />
                    </div>
                    <CardTitle className='text-xl'>{product.title}</CardTitle>
                    <CardDescription className='font-medium'>
                      {product.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='mb-4 text-sm text-muted-foreground'>
                      {product.description}
                    </p>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                      asChild
                    >
                      <a
                        href={product.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Подробнее <ExternalLink className='ml-2 h-4 w-4' />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
