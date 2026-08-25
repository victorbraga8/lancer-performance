# Landing Express — Visual Interpreter V1.2

The Visual Interpreter translates coherent editorial intent + approved style grammar into section-level Web Premium / Web Cinematic mechanisms.

Read `STYLE-INTERPRETER.md`, `STACK-AWARE-ROUTING.md`, `SUGGESTION-POLICY.md`, `EXPERIENCE-QUALITY.md` and `USER-LANGUAGE.md`.

## 1. Baseline

> **Visual richness is mandatory. Visual mechanism is contextual.**

Do not ask whether the user wants premium quality, Three.js, glass or another implementation tool. The user decides intention/perception; Landing Express translates it.

## 2. Section interpretation

For each material section determine:

- editorial role and attention level;
- intensify / reduce / contrast / breathe;
- whether expression is `SUFFICIENT | SUBEXPRESSIVE | OVEREXPRESSED` when useful;
- which visual mechanism reinforces the role;
- which mechanisms should be avoided because they compete with hierarchy/clarity.

A section may be visually rich through typography, composition, materiality, lighting, depth or restrained motion without heavy 3D/effect density.

## 3. Style before library

Consume `STYLE` as a visual grammar: typography, composition, density, luminance/color, surfaces/materiality, imagery, depth, motion/interaction character and rhythm/whitespace when material.

Never treat Three.js, R3F, GSAP, Motion, WebGL, shader or a provider as a style.

Translation order:

```text
approved style / desired effect
→ visual mechanism
→ stack-aware implementation route
→ provider only when required
```

## 4. Mechanism repertoire

Evaluate contextually, not as a checklist: Three.js/R3F/WebGL/shaders, Motion, GSAP, Canvas, SVG, scroll-driven animation, parallax/depth, masking/clipping, mesh gradients, glass/translucency, blur, lighting/materials, typography motion, microinteractions and spatial composition.

Examples:

- spatial storytelling may justify real-time 3D;
- progressive reveal may justify scroll-driven masking/clipping;
- local feedback may need only CSS/Motion;
- technical precision may favor deterministic SVG/diagram;
- premium restraint may need typography/material/whitespace rather than more animation.

## 5. Stack awareness

When a library choice becomes material, inspect the actual repository before recommending it.

- existing stack can deliver equivalent approved quality/control → prefer it;
- current stack cannot reasonably deliver the approved mechanism → recommend the smallest justified addition;
- never add a dependency because it is fashionable;
- never reject a needed dependency solely to minimize dependency count.

Record factual stack/approved dependency decisions in `TECHNICAL_REQUIREMENTS`.

## 6. Hierarchy / complexity

Visual sophistication is not effect count. Preserve a primary focus. When execution becomes over-composed, remove competing layers before redesigning a strong concept.

Use `CONTINUITY | CONTRAST | RESET` for material transitions and `PRIMARY | SUPPORTING | AMBIENT` plus `STATIC | UI_MOTION | PROGRAMMATIC_MOTION | GENERATED_MOTION` for material motion routing.

## 7. User-facing suggestions

Follow effect → editorial reason → mechanism → library only when useful → trade-off when material.

Prefer:

```text
Aqui eu manteria a prova mais estável para ganhar credibilidade e deixaria o movimento apenas nos controles. Como o projeto já usa Motion, não há motivo para adicionar outra lib só para esse feedback.
```

Avoid:

```text
Vamos usar GSAP + shader + glass para ficar premium.
```

## 8. Constraints

Respect responsive behavior, accessibility/reduced-motion, performance, safe viewport, interaction affordance, existing stack, prohibited dependencies and asset/provider constraints.

## 9. Completion

Visual interpretation is mature when important sections have intentional expression, mechanisms fit the approved style/editorial role, relevant stack decisions are grounded, and no unresolved visual decision would materially change the prompt.

Persist material decisions only through existing Conception State fields. Never persist hidden chain-of-thought.
