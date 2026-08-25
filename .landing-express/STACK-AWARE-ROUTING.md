# Landing Express — Stack-Aware Technical Routing V1.2

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

## 3. Existing-stack preference

Examples:

- existing Motion + CSS can handle local reveal/microinteraction → do not add GSAP by default;
- a complex scrubbed timeline/pinning/cross-element synchronization exceeds the practical control of the current stack → GSAP/ScrollTrigger may be justified;
- simple depth/layering can be CSS/composition → do not introduce Three.js;
- product-focused spatial storytelling genuinely requires real-time 3D/control → R3F/Three may be justified when compatible with the repo;
- deterministic SVG/data diagram is sufficient → do not add generated video.

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

Persist factual baseline and approved additions inside `TECHNICAL_REQUIREMENTS` (for example `stackBaseline`, `approvedDependencies`, `avoidDependencies`) instead of creating a parallel mandatory top-level state.

## 5. Recommendation delivery

User-facing recommendation order:

1. perceivable effect/result;
2. why it supports the editorial objective;
3. mechanism;
4. library only when useful;
5. trade-off only when material.

The compiled prompt may be more technical once a route is approved.

## 6. Provider boundary

External providers come last. Generated media/tool use must also satisfy `GENERATED-MEDIA-POLICY.md` and `CAPABILITY-CONTRACT.md`.

## 7. Execution re-check

Before `PROMPT_EXECUTION`, inspect the repository again when the baseline may have changed. A conception-time assumption must not silently override the actual execution-time stack.
