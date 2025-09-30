import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function CaseStudySection() {
  return (
    <section id="cases" className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold md:text-4xl">Кейсы</h2>
          <p className="mb-12 text-center text-muted-foreground">Реальные результаты внедрения</p>

          <Card>
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold">Школа №123, Туркестанская область</h3>

              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-bold text-destructive">До:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Очереди в столовой</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Задержки с учётом льгот</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Отсутствие прозрачного контроля</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 font-bold text-primary">После внедрения E-APC:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Безналичный расчёт</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Push-уведомления родителям</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Онлайн-отчёты по посещаемости и библиотеке</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg bg-primary/5 p-6">
                <Quote className="mb-3 h-8 w-8 text-primary" />
                <p className="mb-2 italic text-muted-foreground">
                  «Система позволила сделать школьный процесс прозрачным и удобным для всех участников»
                </p>
                <p className="text-sm font-medium">— Директор школы №123</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
