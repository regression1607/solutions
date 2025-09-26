"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { EKRLogoMesh } from './EKRLogoMesh'
import type { Logo3DProps } from '@/types/animations'

export function Logo3D({
  width = 400,
  height = 400,
  followMouse = true,
  slowDrift = false,
  autoRotate = true,
  scale = 1
}: Logo3DProps) {
  return (
    <div 
      className="relative"
      style={{ width, height }}
    >
      <Canvas
        className="cursor-pointer"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 100]}
          fov={50}
          near={0.1}
          far={1000}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#9333ea" />
        <pointLight position={[10, -10, 5]} intensity={0.3} color="#3b82f6" />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <EKRLogoMesh
            followMouse={followMouse}
            slowDrift={slowDrift}
            autoRotate={autoRotate}
            scale={scale}
          />
        </Suspense>
        
        {/* Controls for interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={slowDrift}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      {/* Loading indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin opacity-50" />
      </div>
    </div>
  )
}
