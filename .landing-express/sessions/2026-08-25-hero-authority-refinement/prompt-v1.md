# Lancer Performance — Hero & Authority Visual Refinement — Prompt v1

## ROLE / EXECUTION MODE

You are the coding executor for this repository (React 19 + Vite + Motion + @react-three/fiber/three, already installed). Implement directly in the working tree. Inspect the actual current file contents before editing — do not assume the excerpts below are byte-exact; class names and structure are the ground truth to preserve/target.

## BUILD OBJECTIVE

Remove the disabled `WheelSequence` section and every file/CSS rule that exists only for it. Simplify and elevate the Hero (single floor line, richer light/composition, sharper button, more relevant Focus/Sequence meta). Make the "Authority lives in the assembly" bullets more legible, more technical in tone, and visually richer. Fix a site-wide typography problem where small mono-label text (8–11px) reads as illegible/lost. Evaluate and implement a justified Three.js/R3F use to replace the visual richness that would previously have come from Higgsfield-generated cinematic media.

## BUSINESS / CONVERSION INTENT

Audience: technical/automotive enthusiasts who respond to engineering precision and premium restraint, not decoration. The experience must read as authoritative and mechanically credible, not merely stylish.

## EXPERIENCE / EDITORIAL DIRECTION

Dominant impact: **TECHNICAL + PREMIUM**. Hero's editorial role is first impact + establishing the mechanical thesis (contact patch → suspension response). "Authority lives in the assembly" (DesignLanguage section, `id="process"`) exists to prove technical credibility through the construction/assembly narrative. Removing WheelSequence removes a redundant intermediate reading of "mechanical architecture" that Hero + DesignLanguage already cover — the narrative becomes more direct, not weaker.

## VISUAL GRAMMAR

- Tecnológico preciso e premium, com luz cinematográfica mais rica.
- Typography: utility mono labels (eyebrow, meta, tabs, footer, captions) must never drop below a legible floor; weight/size hierarchy must make every label readable at a glance, not just decorative texture.
- Composition: Hero keeps a single floor line near the wheel; less redundant linework, more focus on the car and its lighting.
- Density: controlled — removing WheelSequence reduces section density without losing depth of content elsewhere.
- Color/luminance: dark base preserved; Hero luminance becomes richer/more localized (more studio-style light).
- Materiality: mostly opaque surfaces, selective depth — unchanged.
- Motion character: technical and controlled, never decorative for its own sake.
- Interaction character: responsive and meaningful — color/relevance changes should communicate hierarchy, not just decorate.

## SECTION-BY-SECTION STORYBOARD

### 1. Remove `WheelSequence` and everything exclusive to it

`WheelSequence` is already disabled (commented out) in `src/App.jsx`. Remove it fully, not just leave it commented:

- Delete `src/components/WheelSequence.jsx`.
- Delete `src/components/ArchitectureScene.jsx` and `src/components/ArchitectureFallback.jsx` (verify first they are not imported anywhere else besides `WheelSequence.jsx`; current inspection shows they are not).
- Delete `src/hooks/useArchitectureSceneMode.js` (verify no other consumer besides `WheelSequence.jsx`).
- In `src/App.jsx`, remove the commented-out `import WheelSequence from "./components/WheelSequence"` line and the commented-out `{/* <WheelSequence /> */}` render line.
- In `src/styles.css`, remove every rule scoped to `.architecture`, `.architecture-*` (heading, layout, copy, index, body, detail, tabs, tabs button and its span/strong states, stage, halo, canvas, fallback, stage-meta) and `.fallback-layer` / `.fallback-node`, including their responsive-breakpoint overrides. Re-inspect the actual file for the full rule set and every media-query override before deleting — do not leave orphaned selectors or empty media queries behind.

### 2. Hero — simplify, relight, re-emphasize

File: `src/components/Hero.jsx` + related rules in `src/styles.css`.

- Keep only the single floor line closest to the wheel: `.hero-floor-accent`. Remove the other line, `.hero-load-path` (both its JSX markup — the `<div className="hero-load-path"><i /></div>` — and its CSS rule plus responsive override).
- Increase light/composition richness. Build on what exists (`.studio-light`, `.hero-ignition`, `.hero-car-image` filter) rather than replacing the whole approach — this is the natural place for the Three.js/R3F elevation described below, or for a strengthened CSS/composition treatment if that is genuinely sufficient for the effect. Preserve the primary focus on the car; do not let new lighting compete with `.hero-copy` legibility.
- `Focus` / `Sequence` meta items (`.hero-meta`): currently muted grey labels with almost no visual weight (`.hero-meta small` at 8px, `.hero-meta strong` at 10px, both low-contrast grey). Give them real color/visual relevance — connect them to the site's red accent (`--red`) and/or luminance treatment so they read as meaningful data points, not filler. Keep them readable at increased minimum sizes (see typography section below).
- `Deconstruct the system` button (`.text-link`, rendered inside `.hero-copy`, anchors to `#engineering`): redesign its visual treatment — weight, color, hover state, size — so it reads as a deliberate primary action rather than a quiet footnote. Preserve the underlying `<a href="#engineering">` mechanism (it still needs a valid scroll target after `WheelSequence` — the `id="engineering"` currently lives on the section being deleted; move `id="engineering"` to whichever section now becomes the natural scroll destination, most likely `DesignLanguage`'s `<section className="design section-pad" id="process">` — decide the correct target by checking what makes narrative sense after WheelSequence is removed, and keep the anchor working).

### 3. "Authority lives in the assembly" — legibility + technical tone + richer effect

File: `src/components/DesignLanguage.jsx` (`id="process"`) + `.design-points` rules in `src/styles.css`.

- Rewrite the three `processSteps` bullet copy (`title` / `summary`) to read more technical and precise — keep them short, keep the mechanical/engineering register already established elsewhere (see the existing `WheelSequence` copy tone as a reference for register, even though that component is being removed), avoid generic marketing language.
- Improve legibility of `.design-points button strong` (title) and `.design-points button small` (summary) — current summary text sits at 12px with muted color (#7d8180); raise size/weight/contrast enough that it never feels like secondary fine print while keeping it clearly subordinate to the title.
- Add a richer visual effect to these bullets (hover/active/focus states) — today `is-active` only changes color/background flatly. Consider glow, depth, subtle motion, or light treatment consistent with the technical/controlled motion character — this can be a good secondary candidate for the Three.js/programmatic elevation if it fits better here than in the Hero, or a CSS/Motion-driven enrichment if that is sufficient for equivalent quality.

### 4. Three.js / programmatic cinematic elevation (replaces Higgsfield generation)

Higgsfield will not be used to generate any new cinematic asset in this pass. The three existing static images (`lancer-hero.png`, `lancer-front-detail.png`, `lancer-rear-cta.png`) remain in use as base imagery — do not regenerate or replace them. Any additional cinematic richness needed to sustain the Web Premium/Web Cinematic baseline must come from programmatic mechanisms already available in the stack (`@react-three/fiber`, `three`, `motion`, CSS).

- Evaluate and implement a justified Three.js/R3F treatment — most likely as an enhancement to the Hero's lighting/depth/composition (item 2 above), and/or the DesignLanguage bullets (item 3 above) if that placement is stronger.
- Justify the effect before the mechanism: it must reinforce "technical precision" and "premium restraint," not add spectacle for its own sake.
- Respect `prefers-reduced-motion` and keep performance/responsive behavior intact — do not let a 3D scene degrade mobile or reduced-motion experience; provide a static/CSS fallback when reduced motion is active, following the same pattern already used elsewhere in this codebase (see how motion values are conditioned on `useReducedMotion()` in `Hero.jsx` and `DesignLanguage.jsx`).

### 5. Site-wide typography audit — fix the "too small to read" problem

Across `src/styles.css`, multiple mono-label utility classes sit at 8–11px with low-contrast grey, which reads as genuinely too small/lost rather than intentionally restrained. This includes (inspect the live file for the complete list; this is the known set at conception time): `.eyebrow`, `.hero-meta small`/`strong`, `.hero-floor-accent`-adjacent labels, `.scroll-cue`, `.concept-label`, `.visual-code`, `.process-annotation span`/`p`, `.design-points button span`, `.architecture-*` (moot once deleted), `.performance-media-meta span`, `.performance-disciplines span`/`p`/`small`, `.concept-note`, `.final-cta footer a`, `.brand small`, `.site-header nav a`, `.header-cta`.

- Raise the practical minimum size for these mono/uppercase utility labels so they are comfortably legible, while preserving the monospace/uppercase/letter-spacing character that gives the site its technical identity — this is a hierarchy/weight fix, not a redesign of the type system.
- Re-check weight and contrast together with size: a slightly larger label at the same low weight/contrast may still read as lost; adjust whichever combination actually solves legibility.
- Do not enlarge labels so much that they compete with primary headings/body copy — the goal is "no longer lost," not "equal prominence."
- Apply this pass consistently across the whole site (Header, Hero, DesignLanguage, Performance, FinalCta), not only the sections otherwise touched in this prompt — this was raised as a general problem, not a single-section one.

## MOTION LANGUAGE

Technical and controlled, never decorative. Any new Three.js/R3F treatment or enriched hover/active state must feel deliberate and precise, consistent with existing `Motion` easing/timing already used in this codebase (`[0.2, 0.8, 0.2, 1]` family of eases).

## INTERACTION RULES

- `.design-points` bullets: hover/active/focus states get richer visual treatment (see item 3).
- `Deconstruct the system`: clear, deliberate primary-action hover/interaction treatment; anchor must resolve to a valid section after `WheelSequence` removal.
- `Focus` / `Sequence` meta: color/relevance must read as intentional, not necessarily interactive — do not force hover behavior onto them if that isn't what "relevância visual" calls for; the ask is about visual weight/color, not necessarily new interactivity.

## HARD CONSTRAINTS

- Do not add new dependencies. Stack baseline (`react`, `react-dom`, `motion`, `@react-three/fiber`, `three`) already covers everything required; inspect `package.json` again at execution time to confirm nothing has changed.
- Do not use Higgsfield or any generated-media provider for new assets in this pass.
- Respect `prefers-reduced-motion` for any new/changed motion, including the new 3D/programmatic treatment.
- Preserve responsive behavior — re-check and update the relevant `@media` breakpoints in `styles.css` (including ones referencing classes being deleted or renamed) rather than leaving them stale.
- Do not touch `Header.jsx`, `Performance.jsx`, `FinalCta.jsx`, or the general `site-shell` structure — out of scope for this pass.

## PRESERVE

`Header.jsx`, `Performance.jsx`, `FinalCta.jsx`, `App.jsx`'s overall structure (besides the `WheelSequence` removal), the three existing Higgsfield static images and their current usage, the general dark/red visual identity (`--bg`, `--ink`, `--red`, `--line` tokens), the `prefers-reduced-motion` pattern already established in `Hero.jsx`/`DesignLanguage.jsx`.

## IMPLEMENTATION INTENT

1. Delete `src/components/WheelSequence.jsx`, `src/components/ArchitectureScene.jsx`, `src/components/ArchitectureFallback.jsx`, `src/hooks/useArchitectureSceneMode.js` (after confirming no other consumers).
2. Clean `src/App.jsx` of the commented-out `WheelSequence` import/render.
3. Remove all `.architecture-*` / `.fallback-*` CSS (base rules + responsive overrides) from `src/styles.css`.
4. Edit `Hero.jsx`: remove `.hero-load-path` markup; keep/enhance `.hero-floor-accent`; enrich lighting/composition (CSS and/or new Three.js/R3F); restyle `.hero-meta` for color/relevance; restyle `.text-link` ("Deconstruct the system"); re-home `id="engineering"` to the correct post-removal scroll target.
5. Edit `DesignLanguage.jsx`: rewrite `processSteps` copy for a more technical register; edit `.design-points` CSS for legibility (size/weight/contrast) and richer hover/active effects (CSS/Motion and/or Three.js/R3F, whichever placement is stronger given item 4's decision).
6. Audit and raise the minimum legible size/weight/contrast for the site-wide mono-label utility classes listed above, site-wide, in `src/styles.css`.
7. Run `npm run build` to confirm no build errors and no leftover references to deleted files/classes.

## RESPONSIVE / MOBILE BEHAVIOR

All changes must keep working across the existing breakpoints already defined in `src/styles.css` (`.hero-meta { display: none; }` on mobile, `.hero-floor-accent` mobile positioning, `.design-points button` mobile grid, etc.). Update or remove breakpoint rules that reference deleted classes; do not leave dead/broken responsive CSS behind.

## GENERATED MEDIA / ASSET DIRECTIONS

No new generated media. Existing static assets (`lancer-hero.png`, `lancer-front-detail.png`, `lancer-rear-cta.png`) stay as-is. Any additional visual richness comes from code (Three.js/R3F, CSS, Motion), per `GENERATED-MEDIA-POLICY.md`.

## PROHIBITED PATTERNS

- No new npm dependencies without explicit justification recorded back to the user.
- No leftover dead CSS/selectors for deleted components.
- No decorative motion/3D that isn't justified by the technical/premium editorial direction.
- No shrinking of already-adequate text as a side effect of the typography pass — this is a legibility floor raise, not a redesign.

## VALIDATION / ACCEPTANCE CRITERIA

- `npm run build` succeeds with no errors.
- No file imports a deleted module; no CSS selector targets a class that no longer exists in any JSX.
- Hero shows exactly one floor line near the wheel (`.hero-floor-accent`); `.hero-load-path` is fully removed (JSX + CSS).
- `Deconstruct the system` scrolls to a valid, existing section.
- `.hero-meta` (`Focus`/`Sequence`) visually reads with clear color/relevance, not as flat grey filler.
- `.design-points` bullet copy reads technical/precise; legibility (size/weight/contrast) is visibly improved; hover/active states are visually richer than the current flat color/background swap.
- At least one deliberate, justified Three.js/R3F treatment is implemented (Hero and/or DesignLanguage), respecting `prefers-reduced-motion` with a sane fallback.
- Site-wide mono-label utility text (eyebrow, meta, tabs, captions, footer, nav) is legibly sized/weighted; nothing reads as "lost" at normal viewing distance, while keeping the technical/mono character intact.
- Responsive behavior at existing breakpoints remains intact; no dead CSS referencing deleted classes/components.

## INTENTIONALLY OPEN DECISIONS

- Exact Three.js/R3F technique (e.g., particle/light volume, procedural depth pass, shader-based glow) is left to the executor's technical judgment, as long as it satisfies the justification and constraints above.
- Exact new copy for the three `processSteps` bullets is left to the executor, as long as it is more technical/precise than the current copy and consistent with the site's established register.
- Exact final legible size/weight/contrast values for the mono-label typography pass are left to the executor's judgment, as long as the "no longer lost" acceptance criterion is met without breaking the technical/mono character.
