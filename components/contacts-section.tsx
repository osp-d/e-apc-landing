import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/scroll-animation';

const contacts = [
  {
    icon: Mail,
    label: 'E-mail',
    values: [
      {
        name: 'info@e-ashana.kz',
        href: 'mailto:info@e-ashana.kz',
      },
    ],
  },
  {
    icon: Phone,
    label: 'Телефоны',
    values: [
      { name: '• +7 707 506 0283', href: 'tel:+77075060283' },
      { name: '• +7 778 222 2283', href: 'tel:+77782222283' },
      { name: '• +7 775 673 3025', href: 'tel:+77756733025' },
    ],
  },
];

const websites = [
  { name: 'e-ashana.kz', url: 'https://e-ashana.kz' },
  { name: 'e-basqaru.kz', url: 'https://e-basqaru.kz' },
  { name: 'e-kitaphana.kz', url: 'https://e-kitaphana.kz' },
];

export function ContactsSection() {
  return (
    <section id='contacts' className='py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-4xl'>
          <ScrollAnimation>
            <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
              Контакты
            </h2>
            <p className='mb-12 text-center text-muted-foreground'>
              Свяжитесь с нами любым удобным способом
            </p>
          </ScrollAnimation>

          <div className='mb-8 grid gap-6 md:grid-cols-2'>
            {contacts.map((contact, index) => (
              <ScrollAnimation key={contact.label} delay={index * 0.1}>
                <Card className='h-full'>
                  <CardContent className='p-6 flex justify-between h-full items-center'>
                    <div className='flex items-center gap-3'>
                      <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                        <contact.icon className='h-5 w-5 text-primary' />
                      </div>
                      <span className='font-bold'>{contact.label}</span>
                    </div>

                    <div className='flex flex-col gap-1'>
                      {contact.values.map((value) => (
                        <a
                          key={value.href}
                          href={value.href}
                          className='text-sm text-muted-foreground hover:text-primary'
                        >
                          {value.name}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.3}>
            <Card>
              <CardContent className='p-6'>
                <div className='mb-4 flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10'>
                    <Globe className='h-5 w-5 text-primary' />
                  </div>
                  <span className='font-bold'>Сайты продуктов</span>
                </div>
                <div className='flex flex-wrap gap-3'>
                  {websites.map((site) => (
                    <a
                      key={site.name}
                      href={site.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='rounded-lg bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground'
                    >
                      {site.name}
                    </a>
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
