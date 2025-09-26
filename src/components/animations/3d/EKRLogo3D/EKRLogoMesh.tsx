"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial, Group } from 'three'
import { EKR_LOGO, LOGO_MATERIALS } from '../../models/ekr-logo'
import { useAnimation } from '../../hooks/useAnimation'
import { use3D } from '../../hooks/use3D'

interface EKRLogoMeshProps {
  followMouse?: boolean
  slowDrift?: boolean
  autoRotate?: boolean
  scale?: number
}

export function EKRLogoMesh({
  followMouse = true,
  slowDrift = false,
  autoRotate = true,
  scale = 1
}: EKRLogoMeshProps) {
  const groupRef = useRef<Group>(null)
  const { geometry } = use3D(EKR_LOGO)
  const { meshRef, isHovered, setIsHovered } = useAnimation({
    followMouse,
    autoRotate,
    rotationSpeed: slowDrift ? 0.002 : 0.005
  })

  useFrame((state) => {
    if (!groupRef.current) return
    
    const time = state.clock.getElapsedTime()
    
    // Floating animation
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.5
    
    // Subtle breathing effect
    const breathe = 1 + Math.sin(time * 1.5) * 0.02
    groupRef.current.scale.setScalar(scale * breathe)
    
    // Color shifting
    if (meshRef.current) {
      const material = meshRef.current.material as MeshStandardMaterial
      if (material.emissive) {
        material.emissiveIntensity = 0.1 + Math.sin(time * 2) * 0.05
      }
    }
  })

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          vertexColors
          metalness={LOGO_MATERIALS.primary.metalness}
          roughness={LOGO_MATERIALS.primary.roughness}
          emissive={LOGO_MATERIALS.primary.emissive}
          emissiveIntensity={LOGO_MATERIALS.primary.emissiveIntensity}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh geometry={geometry} scale={1.05}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={isHovered ? 0.3 : 0.1}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh geometry={geometry} scale={1.01}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={isHovered ? 0.2 : 0.05}
        />
      </mesh>
    </group>
  )
}
