"use client"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, PlaneGeometry, ShaderMaterial, Vector2 } from 'three'

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uIntensity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Create animated waves
    float wave1 = sin(uv.x * 10.0 + uTime * 0.5) * 0.1;
    float wave2 = cos(uv.y * 8.0 + uTime * 0.3) * 0.1;
    
    // Mouse interaction
    vec2 mouseEffect = (uMouse - uv) * 2.0;
    float mouseDistance = length(mouseEffect);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDistance) * 0.3;
    
    // Combine effects
    float pattern = wave1 + wave2 + mouseInfluence;
    
    // Create gradient
    vec3 color = mix(uColor1, uColor2, uv.y + pattern);
    
    // Add some sparkle
    float sparkle = sin(uv.x * 50.0 + uTime) * sin(uv.y * 50.0 + uTime * 0.7);
    sparkle = smoothstep(0.98, 1.0, sparkle) * 0.5;
    
    color += sparkle;
    
    gl_FragColor = vec4(color, uIntensity);
  }
`

interface InteractiveBackgroundProps {
  mousePosition?: { x: number; y: number }
  color1?: string
  color2?: string
  intensity?: number
}

export function InteractiveBackground({
  mousePosition = { x: 0, y: 0 },
  color1 = "#3b82f6",
  color2 = "#9333ea",
  intensity = 0.1
}: InteractiveBackgroundProps) {
  const meshRef = useRef<Mesh>(null)
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new Vector2(0.5, 0.5) },
    uColor1: { value: [0.23, 0.51, 0.96] }, // #3b82f6
    uColor2: { value: [0.58, 0.2, 0.92] },  // #9333ea
    uIntensity: { value: intensity }
  }), [intensity])

  const material = useMemo(() => {
    return new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true
    })
  }, [uniforms])

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.getElapsedTime()
    material.uniforms.uTime.value = time
    
    // Update mouse position
    material.uniforms.uMouse.value.set(
      (mousePosition.x + 1) / 2,
      (mousePosition.y + 1) / 2
    )
  })

  return (
    <mesh ref={meshRef} material={material}>
      <planeGeometry args={[100, 100, 32, 32]} />
    </mesh>
  )
}
