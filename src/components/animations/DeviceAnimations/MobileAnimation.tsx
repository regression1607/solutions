"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface MobileAnimationProps {
  children?: React.ReactNode
  className?: string
  delay?: number
}

export function MobileAnimation({ children, className = "", delay = 0 }: MobileAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`relative perspective-1000 ${className}`}>
      <motion.div
        style={{ rotateY, scale, opacity }}
        initial={{ rotateY: -25, scale: 0.8, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="relative transform-gpu"
      >
        {/* Mobile Device */}
        <div className="relative">
          {/* Phone Frame */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            className="bg-gray-900 rounded-3xl border-4 border-gray-700 shadow-2xl p-2"
          >
            {/* Screen */}
            <div className="aspect-[9/19.5] bg-black rounded-2xl overflow-hidden relative">
              {/* Screen Content */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                {children}
                
                {/* Screen Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent pointer-events-none" />
              </div>
              
              {/* Notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gray-900 rounded-full border border-gray-700" />
            </div>
            
            {/* Screen Reflection */}
            <div className="absolute inset-2 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
          </motion.div>
          
          {/* Home Indicator */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.8 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"
          />
        </div>
        
        {/* Mobile Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-black/20 rounded-full blur-lg" />
      </motion.div>
    </div>
  )
}
