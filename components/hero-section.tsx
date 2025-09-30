import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/20 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            E-APC — единая цифровая платформа для школы
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Электронная столовая, СКУД/посещаемость и электронная библиотека — в одном решении. Родительский контроль,
            отчёты, push-уведомления и интеграция с ключевыми гос- и финтех-системами.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#demo">Запросить демо</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="#connect">Подключить школу</a>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <CheckCircle2 className="h-4 w-4" />
            Пилот запускается за 14 дней. Поддержка на каждом этапе.
          </div>
        </div>
      </div>
    </section>
  )
}
