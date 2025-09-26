"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Particles } from './Particles'
import type { ParticleSystemProps } from '@/types/animations'

interface ParticleSystemCanvasProps extends ParticleSystemProps {
  width?: number
  height?: number
  className?: string
}

export function ParticleSystem({
  count = 500,
  size = 1.5,
  color = "#3b82f6",
  speed = 0.3,
  opacity = 0.4,
  width,
  height,
  className = ""
}: ParticleSystemCanvasProps) {
  const style = width && height ? { width, height } : {}
  
  return (
    <div 
      className={`relative ${className}`}
      style={style}
    >
      <Canvas
        className="absolute inset-0"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{ position: [0, 0, 50], fov: 75 }}
      >
        <Suspense fallback={null}>
          <Particles
            count={count}
            size={size}
            color={color}
            speed={speed}
            opacity={opacity}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export { Particles }
