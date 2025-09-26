// EKR Logo 3D Model - Inspired by MetaMask's approach
// This creates a stylized "E" letter with geometric shapes

export const EKR_LOGO = {
  "positions": [
    // Main "E" structure - Front face vertices
    [0, 50, 10],      // 0 - Top left
    [40, 50, 10],     // 1 - Top right
    [0, 25, 10],      // 2 - Middle left
    [30, 25, 10],     // 3 - Middle right
    [0, 0, 10],       // 4 - Bottom left
    [40, 0, 10],      // 5 - Bottom right
    
    // Back face vertices
    [0, 50, -10],     // 6 - Top left back
    [40, 50, -10],    // 7 - Top right back
    [0, 25, -10],     // 8 - Middle left back
    [30, 25, -10],    // 9 - Middle right back
    [0, 0, -10],      // 10 - Bottom left back
    [40, 0, -10],     // 11 - Bottom right back
    
    // Additional vertices for depth and detail
    [5, 45, 15],      // 12 - Top accent
    [35, 45, 15],     // 13 - Top accent right
    [5, 30, 15],      // 14 - Middle accent
    [25, 30, 15],     // 15 - Middle accent right
    [5, 5, 15],       // 16 - Bottom accent
    [35, 5, 15],      // 17 - Bottom accent right
    
    // Inner details
    [10, 40, 5],      // 18 - Inner top
    [20, 40, 5],      // 19 - Inner top right
    [10, 15, 5],      // 20 - Inner bottom
    [20, 15, 5],      // 21 - Inner bottom right
  ],
  "chunks": [
    {
      "color": [59, 130, 246],  // Blue primary
      "faces": [
        // Top horizontal bar
        [0, 1, 13, 12],
        [0, 12, 6],
        [1, 7, 13],
        [12, 13, 7, 6],
        
        // Middle horizontal bar
        [2, 3, 15, 14],
        [2, 14, 8],
        [3, 9, 15],
        [14, 15, 9, 8],
        
        // Bottom horizontal bar
        [4, 5, 17, 16],
        [4, 16, 10],
        [5, 11, 17],
        [16, 17, 11, 10],
      ]
    },
    {
      "color": [147, 51, 234],  // Purple accent
      "faces": [
        // Vertical left bar
        [0, 2, 8, 6],
        [2, 4, 10, 8],
        [0, 6, 10, 4],
        
        // Inner details
        [18, 19, 21, 20],
      ]
    },
    {
      "color": [99, 102, 241],  // Indigo highlights
      "faces": [
        // Accent pieces
        [12, 18, 19, 13],
        [14, 20, 21, 15],
        [16, 20, 21, 17],
      ]
    }
  ]
}

// Animation configurations
export const LOGO_ANIMATIONS = {
  idle: {
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1,
    position: { x: 0, y: 0, z: 0 }
  },
  hover: {
    rotation: { x: 0.1, y: 0.2, z: 0 },
    scale: 1.1,
    position: { x: 0, y: 2, z: 0 }
  },
  mouseFollow: {
    intensity: 0.1,
    maxRotation: 0.3
  }
}

// Material configurations
export const LOGO_MATERIALS = {
  primary: {
    color: "#3b82f6",
    metalness: 0.3,
    roughness: 0.4,
    emissive: "#1e40af",
    emissiveIntensity: 0.1
  },
  accent: {
    color: "#9333ea", 
    metalness: 0.5,
    roughness: 0.3,
    emissive: "#7c3aed",
    emissiveIntensity: 0.15
  },
  highlight: {
    color: "#6366f1",
    metalness: 0.7,
    roughness: 0.2,
    emissive: "#4f46e5",
    emissiveIntensity: 0.2
  }
}
