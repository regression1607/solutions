"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, MeshStandardMaterial, Group } from 'three'
import { NOVATRA_LOGO, LOGO_MATERIALS } from '../../models/novatra-logo'
import { useAnimation } from '../../hooks/useAnimation'
import { use3D } from '../../hooks/use3D'

interface NovatraLogoMeshProps {
  followMouse?: boolean
  slowDrift?: boolean
  autoRotate?: boolean
  intensity?: number
}

export function NovatraLogoMesh({
  followMouse = true,
  slowDrift = false,
  autoRotate = true,
  intensity = 1
}: NovatraLogoMeshProps) {
  const groupRef = useRef<Group>(null)
  const { geometry } = use3D(NOVATRA_LOGO)
  const { meshRef, isHovered, setIsHovered } = useAnimation({
    followMouse,
    autoRotate,
    mouseIntensity: intensity
  })

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    
    if (slowDrift) {
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.1
      groupRef.current.rotation.y = Math.cos(time * 0.2) * 0.1
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2
    }

    if (autoRotate && !isHovered) {
      groupRef.current.rotation.y += 0.005
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
          {...LOGO_MATERIALS.primary}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Secondary accent mesh */}
      <mesh
        geometry={geometry}
        position={[0.1, 0.1, -0.1]}
      >
        <meshStandardMaterial
          {...LOGO_MATERIALS.secondary}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Tertiary accent mesh */}
      <mesh
        geometry={geometry}
        position={[0.2, 0.2, -0.2]}
      >
        <meshStandardMaterial
          {...LOGO_MATERIALS.accent}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}
