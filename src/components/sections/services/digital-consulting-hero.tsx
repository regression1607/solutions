"use client"

import { motion } from "framer-motion"
import { BarChart3, Target, Lightbulb, TrendingUp } from "lucide-react"
import { AnalyticsAnimation } from "@/components/animations/DeviceAnimations"

const features = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Insights & reporting"
  },
  {
    icon: Target,
    title: "Strategy Planning",
    description: "Digital transformation"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Technology advisory"
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Performance improvement"
  }
]

export function DigitalConsultingHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
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
              Digital{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Consulting
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Strategic digital transformation guidance to optimize your business processes, 
              technology stack, and growth strategies for the digital age.
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
                    <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500">
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

          {/* Analytics Animation */}
          <div className="flex justify-center lg:justify-end">
            <AnalyticsAnimation className="w-full max-w-md" delay={0.3}>
              {/* Analytics Dashboard Content */}
              <div className="w-full h-full flex flex-col">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse" />
                    <div className="h-1 bg-indigo-400 rounded w-20" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-xs text-indigo-400 font-mono"
                  >
                    LIVE DATA
                  </motion.div>
                </div>
                
                {/* KPI Cards */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { value: "94%", label: "Efficiency", color: "bg-green-500" },
                    { value: "127%", label: "Growth", color: "bg-blue-500" },
                    { value: "$2.4M", label: "Revenue", color: "bg-purple-500" }
                  ].map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                      className="bg-gray-800/50 rounded p-2 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 + i * 0.2 }}
                        className={`h-1 ${kpi.color} rounded mb-1`}
                      />
                      <div className="text-xs text-gray-300 font-mono">{kpi.value}</div>
                      <div className="text-xs text-gray-500">{kpi.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Analytics Chart */}
                <div className="flex-1 relative bg-gray-800/30 rounded border border-gray-600/30">
                  {/* Chart Area */}
                  <div className="absolute inset-2">
                    {/* Chart Lines */}
                    <svg className="w-full h-full">
                      {/* Main Trend Line */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 2.5 }}
                        d="M 10 80 Q 30 60 50 45 T 90 30 Q 110 25 130 20"
                        stroke="#6366f1"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.8"
                      />
                      
                      {/* Secondary Line */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 3 }}
                        d="M 10 90 Q 30 75 50 65 T 90 50 Q 110 45 130 40"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>
                    
                    {/* Data Points */}
                    {[
                      { x: "20%", y: "70%" },
                      { x: "40%", y: "50%" },
                      { x: "60%", y: "35%" },
                      { x: "80%", y: "25%" }
                    ].map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 3.5 + i * 0.2 }}
                        className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                        style={{ left: point.x, top: point.y }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Bottom Stats */}
                <div className="mt-3 flex justify-between text-xs">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 4.5 }}
                    className="text-green-400"
                  >
                    ↗ +23% Growth
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 4.7 }}
                    className="text-indigo-400"
                  >
                    Real-time Analytics
                  </motion.div>
                </div>
              </div>
            </AnalyticsAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
