"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Lightbulb,
    title: "Ideation & Strategy",
    description: "We analyze your app concept, target audience, and market requirements to create a comprehensive development strategy.",
    color: "from-yellow-500 to-orange-500",
    duration: "1-2 weeks"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive, user-friendly designs with wireframes, prototypes, and visual designs optimized for mobile.",
    color: "from-purple-500 to-pink-500",
    duration: "2-4 weeks"
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Building your app with native or cross-platform technologies, including rigorous testing on multiple devices.",
    color: "from-green-500 to-blue-500",
    duration: "4-12 weeks"
  },
  {
    icon: Rocket,
    title: "Launch & Maintenance",
    description: "App store submission, launch support, and ongoing maintenance with updates and feature enhancements.",
    color: "from-blue-500 to-purple-500",
    duration: "Ongoing"
  }
]

export function AppDevelopmentProcess() {
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
            App Development{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Process
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our comprehensive app development process ensures your mobile application is built to perfection, 
            from concept to app store success.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-300 h-full group-hover:shadow-lg">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${step.color} text-white rounded-full text-sm font-medium`}>
                    {step.duration}
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
