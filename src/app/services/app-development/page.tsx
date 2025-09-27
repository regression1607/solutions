import { Metadata } from "next"
import { AppDevelopmentHero } from "@/components/sections/services/app-development-hero"
import { AppDevelopmentExamples } from "@/components/sections/services/app-development-examples"
import { AppDevelopmentProcess } from "@/components/sections/services/app-development-process"
import { AppDevelopmentPricing } from "@/components/sections/services/app-development-pricing"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "App Development Services",
  description: "Professional mobile and web app development services from Novatra Solutions including iOS, Android, and cross-platform applications with modern technologies.",
}

export default function AppDevelopmentPage() {
  return (
    <>
      <AppDevelopmentHero />
      <AppDevelopmentExamples />
      <AppDevelopmentProcess />
      <AppDevelopmentPricing />
      <CTASection />
    </>
  )
}
