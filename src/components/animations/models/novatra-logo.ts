// Novatra Logo 3D Model - Inspired by MetaMask's approach
// This creates a stylized "N" letter with geometric shapes

export const NOVATRA_LOGO = {
  "positions": [
    // Main "N" structure - Front face vertices
    [0, 50, 10],      // 0 - Top left
    [15, 50, 10],     // 1 - Top left inner
    [15, 25, 10],     // 2 - Middle left
    [35, 50, 10],     // 3 - Top right inner
    [50, 50, 10],     // 4 - Top right
    [50, -50, 10],    // 5 - Bottom right
    [35, -50, 10],    // 6 - Bottom right inner
    [35, -25, 10],    // 7 - Middle right
    [15, -50, 10],    // 8 - Bottom left inner
    [0, -50, 10],     // 9 - Bottom left
    
    // Back face vertices (z = -10)
    [0, 50, -10],     // 10
    [15, 50, -10],    // 11
    [15, 25, -10],    // 12
    [35, 50, -10],    // 13
    [50, 50, -10],    // 14
    [50, -50, -10],   // 15
    [35, -50, -10],   // 16
    [35, -25, -10],   // 17
    [15, -50, -10],   // 18
    [0, -50, -10],    // 19
  ],
  
  "chunks": [
    {
      "color": [59, 130, 246], // Blue color for main "N"
      "faces": [
        // Front face - "N" shape
        [0, 1, 2], [0, 2, 9],     // Left vertical bar
        [2, 8, 9],
        [1, 3, 7], [1, 7, 2],     // Diagonal bar
        [3, 4, 5], [3, 5, 6],     // Right vertical bar
        [6, 7, 3],
        
        // Back face - "N" shape (reversed winding)
        [10, 12, 11], [10, 19, 12],   // Left vertical bar
        [12, 19, 18],
        [11, 17, 13], [11, 12, 17],   // Diagonal bar
        [13, 16, 14], [13, 15, 16],   // Right vertical bar
        [16, 13, 17],
        
        // Side faces connecting front and back
        // Left edge
        [0, 10, 11], [0, 11, 1],
        [9, 19, 10], [9, 10, 0],
        
        // Right edge
        [4, 14, 15], [4, 15, 5],
        [5, 15, 16], [5, 16, 6],
        
        // Top edges
        [1, 11, 13], [1, 13, 3],
        [3, 13, 14], [3, 14, 4],
        
        // Bottom edges
        [8, 18, 19], [8, 19, 9],
        [6, 16, 18], [6, 18, 8],
        
        // Diagonal edges
        [2, 12, 17], [2, 17, 7],
        [7, 17, 16], [7, 16, 6],
      ]
    }
  ]
}

export const LOGO_MATERIALS = {
  primary: {
    color: "#3b82f6",
    metalness: 0.7,
    roughness: 0.2,
    emissive: "#1e40af",
    emissiveIntensity: 0.1
  },
  secondary: {
    color: "#9333ea",
    metalness: 0.5,
    roughness: 0.3,
    emissive: "#7c3aed",
    emissiveIntensity: 0.15
  },
  accent: {
    color: "#06b6d4",
    metalness: 0.8,
    roughness: 0.1,
    emissive: "#0891b2",
    emissiveIntensity: 0.2
  }
}
