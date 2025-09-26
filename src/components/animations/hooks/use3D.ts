"use client"

import { useRef, useMemo } from 'react'
import { BufferGeometry, BufferAttribute, Vector3 } from 'three'
import type { GeometryData } from '@/types/animations'

export function use3D(geometryData: GeometryData) {
  const geometryRef = useRef<BufferGeometry>(null)

  const geometry = useMemo(() => {
    const geo = new BufferGeometry()
    
    // Convert positions to flat array
    const positions: number[] = []
    const colors: number[] = []
    const indices: number[] = []
    
    let vertexIndex = 0
    
    geometryData.chunks.forEach((chunk) => {
      const chunkColor = chunk.color.map(c => c / 255) // Normalize to 0-1
      
      chunk.faces.forEach((face) => {
        // Handle triangles and quads
        if (face.length === 3) {
          // Triangle
          face.forEach((vertexIdx) => {
            const pos = geometryData.positions[vertexIdx]
            positions.push(pos[0], pos[1], pos[2])
            colors.push(chunkColor[0], chunkColor[1], chunkColor[2])
            indices.push(vertexIndex++)
          })
        } else if (face.length === 4) {
          // Quad - split into two triangles
          const a = face[0]
          const b = face[1]
          const c = face[2]
          const d = face[3]
          
          // First triangle (a, b, c)
          const triangle1 = [a, b, c]
          triangle1.forEach((vertexIdx) => {
            const pos = geometryData.positions[vertexIdx]
            positions.push(pos[0], pos[1], pos[2])
            colors.push(chunkColor[0], chunkColor[1], chunkColor[2])
            indices.push(vertexIndex++)
          })
          
          // Second triangle (a, c, d)
          const triangle2 = [a, c, d]
          triangle2.forEach((vertexIdx) => {
            const pos = geometryData.positions[vertexIdx]
            positions.push(pos[0], pos[1], pos[2])
            colors.push(chunkColor[0], chunkColor[1], chunkColor[2])
            indices.push(vertexIndex++)
          })
        }
      })
    })
    
    geo.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3))
    geo.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3))
    geo.setIndex(indices)
    geo.computeVertexNormals()
    
    return geo
  }, [geometryData])

  return {
    geometry,
    geometryRef
  }
}
