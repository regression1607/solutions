import { Metadata } from "next"
import { AboutHero } from "@/components/sections/about-hero"
import { TeamSection } from "@/components/sections/team-section"
import { ValuesSection } from "@/components/sections/values-section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Novatra Solutions - our mission, values, and the passionate team behind innovative technology solutions.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
