# Lancer Performance - mobile evidence polish

## Objective

Refine the existing React/Vite landing without redesigning its approved dark mechanical territory. Preserve the Lancer as the primary subject, black/graphite studio lighting, localized red accents, engineering labels and a controlled premium rhythm. This version improves mobile composition and turns the supplied component assets into legible performance evidence.

## Preserve

- Existing structure: Header, Hero, Process, Performance and Closing.
- Hero remains the primary intensity peak; Process remains a proof/recovery zone; Performance is the secondary peak; Closing remains recovery.
- Existing dependencies only: React, Vite, Motion, R3F and Three. Do not add a dependency, new 3D scene, GSAP, shader, generated media, smoke, particles or generic automotive effect.
- Existing reduced-motion behavior, keyboard access, contrast and no horizontal overflow.

## Construction Process - mobile only

### Perceptual intent

The static technical flags should read as precise hood annotations, centered over the bodywork rather than stranded at the left edge. The section must end cleanly, without an empty lower chamber below the image.

### Mechanism

- Keep desktop tabs and annotations unchanged.
- On mobile, preserve the existing HIDE + REPLACE decision: hide clickable tabs and use the default process state with three non-interactive technical flags.
- Shift the flags toward center/right while keeping them on safe hood zones and avoiding headlamps, panel lines and visual-code text.
- Reduce the mobile visual container and allow the hood image to occupy its full useful height. Remove the artificial lower empty region; shorten the copy-to-image gap only enough to keep the recovery rhythm.
- The existing material scan remains the only light pass and stays disabled under reduced motion.

## Performance Consequence - evidence stage

### Perceptual intent

On mobile, a tap must have an immediate, visible relationship with the selected mechanical proof. Controls should feel like an instrument selector, not four aggressive stacked cards that disconnect from the media.

### Asset mapping

- Power delivery -> `public/assets/motor.png`
- Traction logic -> `public/assets/cambio.jpg`
- Brake control -> `public/assets/roda.jpg`
- Chassis balance -> `public/assets/suspensao.jpg`

### Mechanism

- Preserve the Lancer as the stable primary composition on desktop. The mapped component asset changes in a subordinate evidence insert, tied to the selected discipline.
- Desktop keeps the existing progression and selected/hovered distinction: selected marker is soft red after pointer departure; hovered/focused marker is full red.
- Mobile is **REDESIGN**: create one compact evidence stage where the selected component image and the four controls coexist in the same viewport. The image change must be unmistakable after a tap.
- Use a compact segmented control or short four-item rail at the bottom of the stage; each control exposes number and concise label, has a clear selected state, 44px minimum touch target and visible focus.
- Do not create long card rows, horizontal scrolling, separate gallery sections or a decorative carousel. Keep selected copy concise beneath or inside the stage only where it does not push the changing image out of view.
- On mobile, promote the selected evidence image enough to prove the system while retaining a restrained Lancer background/relationship. On desktop it remains clearly secondary.
- Maintain `prefers-reduced-motion`: state changes resolve statically or with a short opacity transition only.

## Persistent Back to Top

- Add one fixed, accessible Back to top anchor that remains visible across the journey on desktop and mobile.
- Use a quiet circular or compact technical control at the lower-right, below the header z-index and clear of CTA/touch targets. It links to `#hero`, has an explicit accessible label, visible keyboard focus and does not rely on scroll listeners or new dependencies.
- It is an orientation utility, not a new visual peak.

## Typography and cinematic budget

- Keep light, tensioned headlines and regular body copy.
- Keep uppercase 600-700 reserved for functional labels, evidence captions and compact controls.
- Do not add stronger glow, volumetric rays, haze, parallax or extra atmosphere. The assets, precise crops and the existing red continuity motif supply the enrichment.

## Acceptance criteria

- Process mobile flags are no longer left-heavy and the lower empty space is materially reduced.
- Mobile Performance controls and the selected component evidence are visible in one viewport and clearly connected.
- All four local assets are used exactly in their mapped discipline context without displacing the Lancer as desktop protagonist.
- Back to top is visible throughout desktop and mobile, keyboard accessible and non-obstructive.
- Build, desktop/mobile visual QA, tap/keyboard state changes, reduced motion and horizontal overflow are verified after implementation.
