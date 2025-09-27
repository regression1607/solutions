"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface AIAnimationProps {
  children?: React.ReactNode
  className?: string
  delay?: number
}

export function AIAnimation({ children, className = "", delay = 0 }: AIAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`relative perspective-1000 ${className}`}>
      <motion.div
        style={{ rotateY, scale, opacity }}
        initial={{ rotateY: -15, scale: 0.9, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="relative transform-gpu"
      >
        {/* AI Interface Container */}
        <div className="relative">
          {/* Main Screen */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl border-4 border-gray-700 shadow-2xl overflow-hidden"
          >
            {/* Screen Content */}
            <div className="aspect-[4/3] relative overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ 
                        duration: 2, 
                        delay: delay + 1 + (i * 0.05),
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="border border-cyan-500/30"
                    />
                  ))}
                </div>
              </div>

              {/* AI Content */}
              <div className="relative z-10 p-4 h-full flex flex-col">
                {children}
                
                {/* AI Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
                
                {/* Floating AI Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%",
                        scale: 0
                      }}
                      animate={{ 
                        y: [null, Math.random() * 100 + "%"],
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        delay: delay + 2 + Math.random() * 3,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 4
                      }}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
          
          {/* AI Status Indicators */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  delay: delay + 1.5 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              />
            ))}
          </div>
        </div>
        
        {/* AI Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-cyan-500/10 rounded-full blur-xl scale-110" />
      </motion.div>
    </div>
  )
}
