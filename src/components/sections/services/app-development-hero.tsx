"use client"

import { motion } from "framer-motion"
import { Smartphone, Tablet, Monitor, Zap } from "lucide-react"
import { MobileAnimation } from "@/components/animations/DeviceAnimations"

const features = [
  {
    icon: Smartphone,
    title: "Native iOS & Android",
    description: "Platform-specific apps"
  },
  {
    icon: Tablet,
    title: "Cross-Platform",
    description: "React Native, Flutter"
  },
  {
    icon: Monitor,
    title: "Progressive Web Apps",
    description: "Web-based mobile apps"
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized & fast"
  }
]

export function AppDevelopmentHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
              App{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Development
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Build powerful mobile and web applications that engage users across all platforms. 
              From native iOS/Android apps to cross-platform solutions.
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
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500">
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

          {/* Mobile Animation */}
          <div className="flex justify-center lg:justify-end">
            <MobileAnimation className="w-full max-w-xs" delay={0.3}>
              {/* App Preview Content */}
              <div className="w-full h-full bg-gradient-to-br from-green-900 to-blue-900 flex flex-col">
                {/* Status Bar */}
                <div className="flex items-center justify-between p-2 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-1 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="p-3 bg-green-800/50 border-b border-green-700/30">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="h-2 bg-white rounded w-1/2"
                  />
                </div>
                
                {/* App Content */}
                <div className="flex-1 p-3 space-y-3">
                  {/* Cards */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + i * 0.2 }}
                      className="bg-gray-800/50 rounded-lg p-2 flex items-center space-x-2"
                    >
                      <div className="w-4 h-4 bg-green-400 rounded"></div>
                      <div className="flex-1">
                        <div className="h-1 bg-gray-400 rounded mb-1"></div>
                        <div className="h-1 bg-gray-600 rounded w-2/3"></div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-2 text-center"
                  >
                    <div className="h-1 bg-white rounded w-1/3 mx-auto"></div>
                  </motion.div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="p-2 bg-gray-800/50 border-t border-gray-700/30">
                  <div className="flex justify-around">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 2.5 + i * 0.1 }}
                        className="w-3 h-3 bg-gray-600 rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </MobileAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
