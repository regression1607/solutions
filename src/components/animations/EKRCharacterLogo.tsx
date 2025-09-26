"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

interface EKRCharacterLogoProps {
  width?: number
  height?: number
  className?: string
}

export function EKRCharacterLogo({ 
  width = 400, 
  height = 400, 
  className = "" 
}: EKRCharacterLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentExpression, setCurrentExpression] = useState(0)
  const controls = useAnimation()

  // Character expressions - like MetaMask's fox expressions
  const expressions = [
    { eyes: "😊", mood: "happy" },
    { eyes: "😎", mood: "cool" },
    { eyes: "🤔", mood: "thinking" },
    { eyes: "😄", mood: "excited" },
    { eyes: "🧐", mood: "focused" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpression((prev) => (prev + 1) % expressions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [expressions.length])

  const handleHover = () => {
    setIsHovered(true)
    controls.start({
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.5 }
    })
  }

  const handleHoverEnd = () => {
    setIsHovered(false)
    controls.start({
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3 }
    })
  }

  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ width, height }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      {/* Animated background rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #3b82f6, #9333ea, #06b6d4, #3b82f6)"
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main character container */}
      <motion.div
        className="relative z-10 w-48 h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-3xl flex flex-col items-center justify-center shadow-2xl overflow-hidden"
        animate={controls}
        whileTap={{ scale: 0.95 }}
      >
        {/* Character face background */}
        <motion.div
          className="absolute inset-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl"
          animate={{
            background: isHovered 
              ? ["linear-gradient(45deg, #3b82f6, #9333ea)", "linear-gradient(45deg, #06b6d4, #8b5cf6)", "linear-gradient(45deg, #3b82f6, #9333ea)"]
              : "linear-gradient(45deg, #3b82f6, #9333ea)"
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Character eyes */}
        <motion.div
          className="relative z-10 mb-2"
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
        >
          <span className="text-4xl">
            {expressions[currentExpression].eyes}
          </span>
        </motion.div>

        {/* EKR Letters with character */}
        <motion.div 
          className="flex items-center space-x-2 relative z-10"
          animate={{
            y: isHovered ? [0, -5, 0] : 0,
          }}
          transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{
              rotateY: [0, 360],
              color: ["#ffffff", "#fbbf24", "#ffffff"]
            }}
            transition={{
              rotateY: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              color: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <span className="text-white font-bold text-2xl">E</span>
            <motion.div
              className="w-1 h-1 bg-yellow-400 rounded-full mt-1"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={{
              scale: [1, 1.3, 1],
              color: ["#ffffff", "#10b981", "#ffffff"]
            }}
            transition={{
              scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              color: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          >
            <span className="text-white font-bold text-2xl">K</span>
            <motion.div
              className="w-1 h-1 bg-green-400 rounded-full mt-1"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={{
              rotateX: [0, 360],
              color: ["#ffffff", "#f59e0b", "#ffffff"]
            }}
            transition={{
              rotateX: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              color: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            <span className="text-white font-bold text-2xl">R</span>
            <motion.div
              className="w-1 h-1 bg-orange-400 rounded-full mt-1"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Character mouth/expression indicator */}
        <motion.div
          className="mt-2 relative z-10"
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.4, repeat: isHovered ? Infinity : 0 }}
        >
          <motion.div
            className="w-8 h-2 bg-white/30 rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

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

        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floating tech icons around the character */}
      {["⚡", "🚀", "💎", "🔥", "✨", "🎯"].map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 120}px`,
            top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 120}px`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}
