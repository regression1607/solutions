import { Metadata } from "next"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesList } from "@/components/sections/services-list"
import { ProcessSection } from "@/components/sections/process-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive technology services including web development, app development, AI integration, and digital consulting solutions.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </>
  )
}
