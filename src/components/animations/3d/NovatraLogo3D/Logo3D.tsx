"use client"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { NovatraLogoMesh } from './NovatraLogoMesh'
import type { Logo3DProps } from '@/types/animations'

export function Logo3D({
  width = 400,
  height = 400,
  followMouse = true,
  slowDrift = false,
  autoRotate = true,
  showControls = false,
  intensity = 1,
  className = ""
}: Logo3DProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width, height }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{
          background: 'transparent'
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 100]}
          fov={50}
          near={0.1}
          far={1000}
        />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <spotLight
          position={[0, 20, 10]}
          intensity={0.8}
          angle={0.3}
          penumbra={1}
          castShadow
        />
        
        {/* Environment for reflections */}
        <Environment preset="city" />
        
        <Suspense fallback={null}>
          <NovatraLogoMesh
            followMouse={followMouse}
            slowDrift={slowDrift}
            autoRotate={autoRotate}
            intensity={intensity}
          />
        </Suspense>
        
        {showControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
      </Canvas>
    </div>
  )
}
