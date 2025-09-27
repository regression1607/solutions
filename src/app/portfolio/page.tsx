import { Metadata } from "next"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of successful projects at Novatra Solutions. See our work in web development, mobile apps, AI solutions, and digital transformation.",
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
