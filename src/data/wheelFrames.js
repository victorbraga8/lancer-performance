/**
 * Higgsfield frame sequence entry point.
 *
 * Current production sequence: 73 JPEG frames extracted at 24 fps from the
 * Higgsfield-generated wheel-explosion.mp4 source.
 *
 * WheelSequence preloads this list and maps scroll progress to frame index.
 * If this list is emptied it renders the built-in SVG prototype.
 */
export const wheelFrameSources = Array.from(
  { length: 73 },
  (_, index) => `/frames/wheel-generated/frame_${String(index + 1).padStart(4, '0')}.jpg`,
)

// Example for a future 120-frame WebP export:
// export const wheelFrameSources = Array.from(
//   { length: 120 },
//   (_, index) => `/frames/wheel/wheel_${String(index + 1).padStart(4, '0')}.webp`,
// )
