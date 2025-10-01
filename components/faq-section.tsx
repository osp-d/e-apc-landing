import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollAnimation } from '@/components/scroll-animation';

const faqs = [
  {
    question: 'Где хранятся данные?',
    answer: 'В защищённом дата-центре уровня ISO/IEC 27001:2013.',
  },
  {
    question: 'Какие методы идентификации поддерживаются?',
    answer: 'Face ID, IC-карты и QR-код.',
  },
  {
    question: 'Можно ли видеть историю покупок/посещаемости?',
    answer: 'Да, через мобильное приложение (iOS/Android).',
  },
  {
    question: 'Работает ли система с «Социальным кошельком»?',
    answer: 'Да, интеграция поддерживается.',
  },
];

export function FAQSection() {
  return (
    <section id='faq' className='bg-muted/30 py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-3xl'>
          <ScrollAnimation>
            <h2 className='mb-4 text-balance text-center text-3xl font-bold md:text-4xl'>
              Часто задаваемые вопросы
            </h2>
            <p className='mb-12 text-center text-muted-foreground'>
              Ответы на популярные вопросы о платформе E-APC
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Accordion type='single' collapsible className='w-full'>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className='text-left'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
