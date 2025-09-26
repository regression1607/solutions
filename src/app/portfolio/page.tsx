import { Metadata } from "next"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of successful projects including web applications, mobile apps, and AI-powered solutions.",
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <ProjectsGrid />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
