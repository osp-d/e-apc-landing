import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ProductsSection } from "@/components/products-section"
import { TechnologySection } from "@/components/technology-section"
import { DocumentationSection } from "@/components/documentation-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { ScaleSection } from "@/components/scale-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CaseStudySection } from "@/components/case-study-section"
import { HowToConnectSection } from "@/components/how-to-connect-section"
import { FAQSection } from "@/components/faq-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ProductsSection />
        <TechnologySection />
        <DocumentationSection />
        <IntegrationsSection />
        <ScaleSection />
        <BenefitsSection />
        <CaseStudySection />
        <HowToConnectSection />
        <FAQSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  )
}
