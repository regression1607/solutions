"use client"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointsMaterial, BufferGeometry, BufferAttribute } from 'three'
import type { ParticleSystemProps } from '@/types/animations'

export function Particles({
  count = 1000,
  size = 2,
  color = "#3b82f6",
  speed = 0.5,
  opacity = 0.6
}: ParticleSystemProps) {
  const pointsRef = useRef<Points>(null)
  
  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Random positions in a sphere
      const radius = Math.random() * 50 + 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * speed
      velocities[i3 + 1] = (Math.random() - 0.5) * speed
      velocities[i3 + 2] = (Math.random() - 0.5) * speed
    }
    
    return [positions, velocities]
  }, [count, speed])

  const geometry = useMemo(() => {
    const geo = new BufferGeometry()
    geo.setAttribute('position', new BufferAttribute(positions, 3))
    return geo
  }, [positions])

  useFrame((state) => {
    if (!pointsRef.current) return
    
    const time = state.clock.getElapsedTime()
    const positionAttribute = pointsRef.current.geometry.attributes.position
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Update positions
      positionAttribute.array[i3] += velocities[i3] * 0.1
      positionAttribute.array[i3 + 1] += velocities[i3 + 1] * 0.1
      positionAttribute.array[i3 + 2] += velocities[i3 + 2] * 0.1
      
      // Add some wave motion
      positionAttribute.array[i3 + 1] += Math.sin(time + i * 0.01) * 0.02
      
      // Reset particles that go too far
      const x = positionAttribute.array[i3]
      const y = positionAttribute.array[i3 + 1]
      const z = positionAttribute.array[i3 + 2]
      const distance = Math.sqrt(x * x + y * y + z * z)
      
      if (distance > 100) {
        // Reset to center with random offset
        const radius = Math.random() * 10 + 5
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        
        positionAttribute.array[i3] = radius * Math.sin(phi) * Math.cos(theta)
        positionAttribute.array[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positionAttribute.array[i3 + 2] = radius * Math.cos(phi)
      }
    }
    
    positionAttribute.needsUpdate = true
    
    // Rotate the entire particle system
    pointsRef.current.rotation.y = time * 0.1
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color={color}
        size={size}
        transparent
        opacity={opacity}
        sizeAttenuation
        vertexColors={false}
      />
    </points>
  )
}
