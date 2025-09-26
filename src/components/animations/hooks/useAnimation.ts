"use client"

import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, Euler } from 'three'
import type { Mesh } from 'three'

interface UseAnimationOptions {
  autoRotate?: boolean
  rotationSpeed?: number
  followMouse?: boolean
  mouseIntensity?: number
  hover?: boolean
}

export function useAnimation(options: UseAnimationOptions = {}) {
  const {
    autoRotate = true,
    rotationSpeed = 0.005,
    followMouse = true,
    mouseIntensity = 0.1,
    hover = true
  } = options

  const meshRef = useRef<Mesh>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Mouse tracking
  useEffect(() => {
    if (!followMouse) return

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [followMouse])

  // Animation frame
  useFrame((state) => {
    if (!meshRef.current) return

    const mesh = meshRef.current
    const time = state.clock.getElapsedTime()

    // Auto rotation
    if (autoRotate) {
      mesh.rotation.y = time * rotationSpeed
      mesh.rotation.x = Math.sin(time * 0.3) * 0.1
    }

    // Mouse following
    if (followMouse) {
      const targetRotationY = mousePosition.x * mouseIntensity
      const targetRotationX = mousePosition.y * mouseIntensity
      
      mesh.rotation.y += (targetRotationY - mesh.rotation.y) * 0.05
      mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.05
    }

    // Hover effect
    if (hover && isHovered) {
      mesh.position.y = Math.sin(time * 2) * 0.2
      mesh.scale.setScalar(1 + Math.sin(time * 3) * 0.05)
    }
  })

  return {
    meshRef,
    isHovered,
    setIsHovered,
    mousePosition
  }
}
