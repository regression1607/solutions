"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface LaptopAnimationProps {
  children?: React.ReactNode
  className?: string
  delay?: number
}

export function LaptopAnimation({ children, className = "", delay = 0 }: LaptopAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`relative perspective-1000 ${className}`}>
      <motion.div
        style={{ rotateX, scale, opacity }}
        initial={{ rotateX: 25, scale: 0.8, opacity: 0 }}
        animate={{ rotateX: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="relative transform-gpu"
      >
        {/* Laptop Base */}
        <div className="relative">
          {/* Laptop Screen */}
          <motion.div
            initial={{ rotateX: -90 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
            className="relative bg-gray-900 rounded-t-2xl border-4 border-gray-700 shadow-2xl origin-bottom"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Screen Content */}
            <div className="aspect-[16/10] bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 rounded-t-xl overflow-hidden relative">
              {/* Screen Bezel */}
              <div className="absolute inset-2 bg-black rounded-lg overflow-hidden">
                {/* Screen Content */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                  {children}
                  
                  {/* Screen Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Camera */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full border border-gray-600" />
            </div>
            
            {/* Screen Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-t-2xl pointer-events-none" />
          </motion.div>
          
          {/* Laptop Keyboard Base */}
          <motion.div
            initial={{ scaleY: 0.8, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
            className="bg-gray-800 rounded-b-2xl border-4 border-t-0 border-gray-700 shadow-2xl"
          >
            <div className="p-4">
              {/* Keyboard */}
              <div className="grid grid-cols-12 gap-1 mb-3">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: delay + 0.8 + (i * 0.01),
                      ease: "easeOut"
                    }}
                    className="h-2 bg-gray-700 rounded-sm border border-gray-600"
                  />
                ))}
              </div>
              
              {/* Trackpad */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 1.2 }}
                className="w-16 h-10 bg-gray-700 rounded-lg border border-gray-600 mx-auto"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Laptop Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-black/20 rounded-full blur-xl scale-110" />
      </motion.div>
    </div>
  )
}
