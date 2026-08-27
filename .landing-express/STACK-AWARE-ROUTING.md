# Landing Express — Stack-Aware Technical Routing V1.3

Technical recommendations must be grounded in the actual repository before introducing libraries, frameworks or providers.

## 1. Translation layers

Keep these layers distinct:

```text
STYLE / DIRECTION
how the experience should look/feel/behave
        ↓
MECHANISM
what perceptual/interaction mechanism produces it
        ↓
LIBRARY / IMPLEMENTATION
which existing or new tool implements it best in this repo
        ↓
PROVIDER
external capability only when materially required
```

Three.js, R3F, GSAP, Motion, shaders and providers are not styles.

## 2. Required routing order

Before recommending a new dependency:

```text
approved effect / mechanism
→ inspect actual repo stack and dependency constraints
→ can the existing stack deliver equivalent approved quality/control?
→ YES: prefer existing stack
→ NO: evaluate the smallest justified addition
→ explain why the addition materially improves/enables the result
```

Never add a library because it is fashionable or merely possible.

Never avoid a necessary library solely to minimize dependencies when doing so materially degrades the approved experience.

## 3. Cinematic routing rules

Cinematic Enrichment uses the same routing discipline.

Expected routing examples:

```text
local reveal / microinteraction
+ existing Motion/CSS sufficient
→ KEEP EXISTING STACK

complex synchronized timeline / scrub / pinning
+ current stack insufficient
→ GSAP / ScrollTrigger may be justified

composition / layer separation / parallax sufficient
→ do not add Three.js

real spatial storytelling / inspectable 3D object
→ R3F / Three.js may be justified

material/light/distortion depends on shader-level behavior
→ custom shader/WebGL may be justified
```

The system must choose the **smallest mechanism that still satisfies the approved experience**.

Do not convert the technical repertoire into a default stack.

## 4. Repository baseline

When technical routing becomes material, inspect at least what is relevant from:

- package manifest / dependency files;
- framework/runtime;
- styling system;
- existing motion libraries;
- 3D/canvas/WebGL dependencies;
- component conventions;
- performance/accessibility constraints;
- prohibited/required dependencies;
- available external capabilities/providers.

The CLI may inspect `package.json` directly to derive a factual stack baseline before routing cinematic mechanisms.

Persist factual baseline and approved additions inside `TECHNICAL_REQUIREMENTS` (for example `stackBaseline`, `approvedDependencies`, `avoidDependencies`, `cinematicRouting`) instead of creating a parallel mandatory top-level state.

## 5. Existing-stack preference

Examples:

- existing Motion + CSS can handle local reveal/microinteraction → do not add GSAP by default;
- a complex scrubbed timeline/pinning/cross-element synchronization exceeds the practical control of the current stack → GSAP/ScrollTrigger may be justified;
- simple depth/layering can be CSS/composition → do not introduce Three.js;
- product-focused spatial storytelling genuinely requires real-time 3D/control → R3F/Three may be justified when compatible with the repo;
- deterministic SVG/data diagram is sufficient → do not add generated video.

## 6. Recommendation delivery

User-facing recommendation order:

1. perceivable effect/result;
2. why it supports the editorial objective;
3. mechanism;
4. library only when useful;
5. trade-off only when material.

Do not ask a non-technical user to choose between Motion, GSAP, Three.js or another library when the stack/effect evidence makes the technical choice safe.

The compiled prompt may be more technical once a route is approved.

## 7. Provider boundary

External providers come last. Generated media/tool use must also satisfy `GENERATED-MEDIA-POLICY.md` and `CAPABILITY-CONTRACT.md`.

A missing generated-media provider must trigger an equivalent-value replacement plan where viable, not a silent downgrade of the cinematic baseline.

## 8. Execution re-check

Before `PROMPT_EXECUTION`, inspect the repository again when the baseline may have changed. A conception-time assumption must not silently override the actual execution-time stack.

If execution-time evidence invalidates an approved route, preserve the perceptual intent and re-route the mechanism rather than silently substituting a weaker generic effect.
