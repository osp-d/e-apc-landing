import { Card, CardContent } from "@/components/ui/card"
import { Scan, Lock, Server, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "3 метода фиксации",
    description: "Face ID, IC-карта, QR-код",
  },
  {
    icon: Lock,
    title: "Защита данных",
    description: "Закрытый интернет-канал, шифрование, облачный сервер",
  },
  {
    icon: Server,
    title: "Инфраструктура",
    description: "Дата-центр стандарта ISO/IEC 27001:2013",
  },
  {
    icon: ShieldCheck,
    title: "Соответствие ИБ",
    description: "Подтверждено 5 протоколами информационной безопасности",
  },
]

export function TechnologySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold md:text-4xl">Технологии и безопасность</h2>
          <p className="mb-12 text-center text-muted-foreground">Современные решения с максимальной защитой данных</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
