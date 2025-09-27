import { Metadata } from "next"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Novatra Solutions. Let's discuss your project and create something amazing together.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  )
}
