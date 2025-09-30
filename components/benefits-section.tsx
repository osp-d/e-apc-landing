import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, School, Building } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Для родителей",
    items: ["Push-уведомления", "История покупок и посещаемости", "Контроль баланса"],
  },
  {
    icon: School,
    title: "Для школ",
    items: [
      "Меньше наличных операций",
      "Быстрый поток в столовой",
      "Учёт рабочего времени",
      "Автоматизация библиотеки",
    ],
  },
  {
    icon: Building,
    title: "Для акиматов и УО",
    items: ["Прозрачная аналитика по регионам", "Выполнение всех норм", "Требования информационной безопасности"],
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold md:text-4xl">Преимущества для всех</h2>
          <p className="mb-12 text-center text-muted-foreground">
            Каждый участник образовательного процесса получает свои выгоды
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
