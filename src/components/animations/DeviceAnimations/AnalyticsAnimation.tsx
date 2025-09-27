"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface AnalyticsAnimationProps {
  children?: React.ReactNode
  className?: string
  delay?: number
}

export function AnalyticsAnimation({ children, className = "", delay = 0 }: AnalyticsAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`relative perspective-1000 ${className}`}>
      <motion.div
        style={{ rotateX, scale, opacity }}
        initial={{ rotateX: 15, scale: 0.9, opacity: 0 }}
        animate={{ rotateX: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="relative transform-gpu"
      >
        {/* Analytics Dashboard Container */}
        <div className="relative">
          {/* Main Dashboard */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl border-4 border-gray-700 shadow-2xl overflow-hidden"
          >
            {/* Dashboard Content */}
            <div className="aspect-[16/10] relative overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 grid-rows-8 h-full">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.2, 0] }}
                      transition={{ 
                        duration: 3, 
                        delay: delay + 1 + (i * 0.02),
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                      className="border border-indigo-500/20"
                    />
                  ))}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="relative z-10 p-4 h-full flex flex-col">
                {children}
                
                {/* Analytics Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
                
                {/* Floating Data Points */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%",
                        scale: 0,
                        opacity: 0
                      }}
                      animate={{ 
                        y: [null, Math.random() * 100 + "%"],
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{ 
                        duration: 4 + Math.random() * 2, 
                        delay: delay + 2 + Math.random() * 4,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 6
                      }}
                      className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
          
          {/* Analytics Status Indicators */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[
              { color: "bg-green-400", label: "Live" },
              { color: "bg-blue-400", label: "Processing" },
              { color: "bg-purple-400", label: "Analytics" }
            ].map((indicator, i) => (
              <motion.div
                key={indicator.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1, 0.8, 1],
                  opacity: [0, 1, 1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2, 
                  delay: delay + 1.5 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className={`w-2 h-2 ${indicator.color} rounded-full`}
              />
            ))}
          </div>
        </div>
        
        {/* Analytics Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-indigo-500/10 rounded-full blur-xl scale-110" />
      </motion.div>
    </div>
  )
}
