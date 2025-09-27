"use client"

import { motion } from "framer-motion"
import { Brain, Bot, Zap, TrendingUp } from "lucide-react"
import { AIAnimation } from "@/components/animations/DeviceAnimations"

const features = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Advanced ML algorithms"
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversations"
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Process optimization"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Data-driven insights"
  }
]

export function AIIntegrationHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
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
              AI{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Integration
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Transform your business with cutting-edge AI solutions. From intelligent chatbots to 
              predictive analytics and automated workflows.
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
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
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

          {/* AI Animation */}
          <div className="flex justify-center lg:justify-end">
            <AIAnimation className="w-full max-w-md" delay={0.3}>
              {/* AI Interface Content */}
              <div className="w-full h-full flex flex-col">
                {/* AI Header */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
                    <div className="h-1 bg-cyan-400 rounded w-16" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-xs text-cyan-400 font-mono"
                  >
                    AI ACTIVE
                  </motion.div>
                </div>
                
                {/* Neural Network Visualization */}
                <div className="flex-1 relative">
                  {/* Nodes */}
                  <div className="absolute inset-0">
                    {[
                      { x: "20%", y: "20%" },
                      { x: "50%", y: "15%" },
                      { x: "80%", y: "25%" },
                      { x: "15%", y: "50%" },
                      { x: "50%", y: "45%" },
                      { x: "85%", y: "55%" },
                      { x: "30%", y: "80%" },
                      { x: "70%", y: "75%" }
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0.7, 1],
                          scale: [0, 1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: 1.5 + i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        style={{ left: node.x, top: node.y }}
                      />
                    ))}
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[
                      { x1: "20%", y1: "20%", x2: "50%", y2: "45%" },
                      { x1: "50%", y1: "15%", x2: "85%", y2: "55%" },
                      { x1: "80%", y1: "25%", x2: "70%", y2: "75%" },
                      { x1: "15%", y1: "50%", x2: "50%", y2: "45%" },
                      { x1: "50%", y1: "45%", x2: "30%", y2: "80%" }
                    ].map((line, i) => (
                      <motion.line
                        key={i}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 2 + i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 4
                        }}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="url(#gradient)"
                        strokeWidth="1"
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* AI Status */}
                <div className="mt-4 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "75%" }}
                    transition={{ duration: 1.5, delay: 3 }}
                    className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded"
                  />
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "60%" }}
                    transition={{ duration: 1.5, delay: 3.3 }}
                    className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded"
                  />
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "90%" }}
                    transition={{ duration: 1.5, delay: 3.6 }}
                    className="h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded"
                  />
                </div>
              </div>
            </AIAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
