"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Lightbulb } from "lucide-react"

const services = [
  { icon: Code, name: "Web Development", color: "text-blue-500" },
  { icon: Smartphone, name: "App Development", color: "text-green-500" },
  { icon: Brain, name: "AI Integration", color: "text-purple-500" },
  { icon: Lightbulb, name: "Digital Consulting", color: "text-orange-500" },
]

export function ServicesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            We provide comprehensive technology solutions to help your business thrive 
            in the digital age. From concept to deployment, we deliver excellence.
          </motion.p>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-300"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r from-muted to-muted/50 mb-4`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm text-center">{service.name}</h3>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
