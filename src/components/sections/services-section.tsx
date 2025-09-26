"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Smartphone, Brain, Lightbulb, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Modern Frameworks"],
    href: "/services/web-development"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile and desktop applications that deliver native performance and exceptional user experiences.",
    features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Maintenance & Updates"],
    href: "/services/app-development"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent automation and AI-powered solutions to transform your business processes and enhance user interactions.",
    features: ["Chatbot Development", "Machine Learning", "Process Automation", "Data Analytics"],
    href: "/services/ai-integration"
  },
  {
    icon: Lightbulb,
    title: "Digital Consulting",
    description: "Strategic technology consulting to help businesses navigate digital transformation and optimize their tech stack.",
    features: ["Technology Strategy", "Architecture Design", "Performance Audits", "Team Training"],
    href: "/services/digital-consulting"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We offer comprehensive technology solutions to help your business thrive in the digital age.
            From concept to deployment, we&apos;ve got you covered.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="group/btn p-0 h-auto">
                      <Link href={service.href} className="flex items-center text-primary hover:text-primary/80">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" variant="gradient">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
