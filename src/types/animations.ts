import { Vector3 } from 'three'

export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: number[]
  repeat?: number
  yoyo?: boolean
}

export interface Logo3DProps {
  width?: number
  height?: number
  followMouse?: boolean
  slowDrift?: boolean
  autoRotate?: boolean
  showControls?: boolean
  intensity?: number
  className?: string
  scale?: number
}

export interface ParticleSystemProps {
  count?: number
  size?: number
  color?: string
  speed?: number
  opacity?: number
}

export interface MousePosition {
  x: number
  y: number
}

export interface AnimationState {
  isPlaying: boolean
  progress: number
  direction: 'forward' | 'reverse'
}

export interface GeometryData {
  positions: number[][]
  chunks: {
    color: number[]
    faces: number[][]
  }[]
}

export interface MaterialConfig {
  color: string
  metalness?: number
  roughness?: number
  emissive?: string
  transparent?: boolean
  opacity?: number
}

export interface CameraConfig {
  position: Vector3
  target: Vector3
  fov?: number
  near?: number
  far?: number
}

export interface LightConfig {
  type: 'ambient' | 'directional' | 'point' | 'spot'
  color: string
  intensity: number
  position?: Vector3
  target?: Vector3
}
