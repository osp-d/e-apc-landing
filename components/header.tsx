import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">E</span>
          </div>
          <span className="text-xl font-bold">E-APC</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
            Продукты
          </Link>
          <Link href="#integrations" className="text-sm font-medium transition-colors hover:text-primary">
            Интеграции
          </Link>
          <Link href="#cases" className="text-sm font-medium transition-colors hover:text-primary">
            Кейсы
          </Link>
          <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link href="#contacts" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
          </Link>
        </nav>

        <Button asChild>
          <Link href="#demo">Запросить демо</Link>
        </Button>
      </div>
    </header>
  )
}
