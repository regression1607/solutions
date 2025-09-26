"use client"

import { motion } from "framer-motion"

interface Logo3DFallbackProps {
  width?: number
  height?: number
  className?: string
}

export function Logo3DFallback({ 
  width = 400, 
  height = 400, 
  className = "" 
}: Logo3DFallbackProps) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/15 to-blue-500/15"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Main logo */}
      <motion.div
        className="relative z-10 w-40 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Animated letters */}
        <div className="flex items-center space-x-1">
          <motion.span 
            className="text-white font-bold text-3xl"
            animate={{
              rotateY: [0, 360],
              color: ["#ffffff", "#fbbf24", "#ffffff"]
            }}
            transition={{
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              color: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            E
          </motion.span>
          <motion.span 
            className="text-white font-bold text-3xl"
            animate={{
              scale: [1, 1.2, 1],
              color: ["#ffffff", "#10b981", "#ffffff"]
            }}
            transition={{
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              color: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          >
            K
          </motion.span>
          <motion.span 
            className="text-white font-bold text-3xl"
            animate={{
              rotateX: [0, 360],
              color: ["#ffffff", "#f59e0b", "#ffffff"]
            }}
            transition={{
              rotateX: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              color: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            R
          </motion.span>
        </div>
        
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2
          }}
        />
      </motion.div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
