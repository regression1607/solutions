"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Globe } from "lucide-react"
import { LaptopAnimation } from "@/components/animations/DeviceAnimations"

const features = [
  {
    icon: Code,
    title: "Modern Technologies",
    description: "React, Next.js, TypeScript"
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Custom UI/UX design"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Fast loading & optimized"
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    description: "Search engine friendly"
  }
]

export function WebDevelopmentHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Web{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Create stunning, high-performance websites that engage users and drive business growth. 
              From simple portfolios to complex web applications.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border/40"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Laptop Animation */}
          <div className="flex justify-center lg:justify-end">
            <LaptopAnimation className="w-full max-w-md" delay={0.3}>
              {/* Website Preview Content */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col">
                {/* Browser Bar */}
                <div className="flex items-center space-x-2 p-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded text-xs text-gray-300 px-2 py-1">
                    Novatratech.solutions
                  </div>
                </div>
                
                {/* Website Content */}
                <div className="flex-1 p-4 space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded w-3/4"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="h-2 bg-gray-600 rounded w-1/2"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="grid grid-cols-2 gap-2 mt-4"
                  >
                    <div className="h-8 bg-gray-700 rounded"></div>
                    <div className="h-8 bg-gray-700 rounded"></div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded w-1/3 mt-4"
                  />
                </div>
              </div>
            </LaptopAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
