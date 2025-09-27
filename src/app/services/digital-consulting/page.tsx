import { Metadata } from "next"
import { DigitalConsultingHero } from "@/components/sections/services/digital-consulting-hero"
import { DigitalConsultingExamples } from "@/components/sections/services/digital-consulting-examples"
import { DigitalConsultingProcess } from "@/components/sections/services/digital-consulting-process"
import { DigitalConsultingPricing } from "@/components/sections/services/digital-consulting-pricing"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Digital Consulting Services",
  description: "Professional digital consulting services from Novatra Solutions including strategy, transformation, analytics, and technology advisory for modern businesses.",
}

export default function DigitalConsultingPage() {
  return (
    <>
      <DigitalConsultingHero />
      <DigitalConsultingExamples />
      <DigitalConsultingProcess />
      <DigitalConsultingPricing />
      <CTASection />
    </>
  )
}
