import { Metadata } from "next"
import { WebDevelopmentHero } from "@/components/sections/services/web-development-hero"
import { WebDevelopmentExamples } from "@/components/sections/services/web-development-examples"
import { WebDevelopmentProcess } from "@/components/sections/services/web-development-process"
import { WebDevelopmentPricing } from "@/components/sections/services/web-development-pricing"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Professional web development services from Novatra Solutions including dashboards, portfolios, e-commerce, and custom web applications with modern technologies.",
}

export default function WebDevelopmentPage() {
  return (
    <>
      <WebDevelopmentHero />
      <WebDevelopmentExamples />
      <WebDevelopmentProcess />
      <WebDevelopmentPricing />
      <CTASection />
    </>
  )
}
