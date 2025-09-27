import { Metadata } from "next"
import { AIIntegrationHero } from "@/components/sections/services/ai-integration-hero"
import { AIIntegrationExamples } from "@/components/sections/services/ai-integration-examples"
import { AIIntegrationProcess } from "@/components/sections/services/ai-integration-process"
import { AIIntegrationPricing } from "@/components/sections/services/ai-integration-pricing"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "AI Integration Services",
  description: "Professional AI integration services from Novatra Solutions including chatbots, machine learning, automation, and intelligent data analysis solutions.",
}

export default function AIIntegrationPage() {
  return (
    <>
      <AIIntegrationHero />
      <AIIntegrationExamples />
      <AIIntegrationProcess />
      <AIIntegrationPricing />
      <CTASection />
    </>
  )
}
