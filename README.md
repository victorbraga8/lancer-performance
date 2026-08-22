# Lancer Performance Concept

A local React/Vite landing page centered on a scroll-driven exploded wheel sequence. The hero still, wheel storyboard stills and source animation were generated with Higgsfield on the Free tier. `WheelAssembly.jsx` remains as a procedural SVG fallback while media loads.

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Higgsfield assets in this build

- Hero: `public/assets/higgsfield/lancer-hero.png`
- Design close-up: `public/assets/higgsfield/lancer-front-detail.png`
- Final CTA: `public/assets/higgsfield/lancer-rear-cta.png`
- Original generated animation: `public/assets/higgsfield/wheel-explosion.mp4`
- Active 73-frame scroll sequence: `public/frames/wheel-generated/frame_0001.jpg` through `frame_0073.jpg`
- Alternative generated wheel studies: `public/frames/wheel/wheel_0001.png` through `wheel_0005.png`

`WheelSequence.jsx` preloads the active list from `src/data/wheelFrames.js` and maps section scroll progress from `0..1` to `0..frames.length - 1`.

## Replace with a future Higgsfield sequence

1. Export a consistent image sequence (WebP recommended) from Higgsfield.
2. Keep the wheel locked to the same canvas position and use a consistent aspect ratio across every frame.
3. Copy the files to `public/frames/wheel/`, for example `wheel_0001.webp` through `wheel_0120.webp`.
4. Open `src/data/wheelFrames.js` and update the `length`, folder, prefix and extension in `wheelFrameSources`.

The procedural SVG remains visible while frames preload, so there is no blank state.

## Tuning

- Scroll duration: adjust `.wheel-story` height in `src/styles.css`.
- Narrative stage timing: edit `stages` in `WheelSequence.jsx`.
- Procedural explosion timing: edit the `segment()` ranges and offsets in `WheelAssembly.jsx`.
- Frame naming/count: edit `src/data/wheelFrames.js`.
