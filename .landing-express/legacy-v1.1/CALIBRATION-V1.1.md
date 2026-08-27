# Landing Express — V1.1 Calibration Contract (Topics 1–6)

This contract adds V1.1 calibration rules on top of the validated v0/V1 behavior. It is additive: preserve the existing Direction Copilot, Build Orchestrator, capability governance, budgets and preservation rules.

The rules below are global product baselines. They must shape direction before build, remain binding during execution and be checked during review. They do not prescribe a visual style.

## 1. Global Experience Baseline

Treat basic UX quality as a baseline rather than a late refine discovery.

### Navigation state

When the experience contains contextual navigation between sections, define and implement an explicit current-location state such as `isActive`, `aria-current`, equivalent semantic state or a visually unambiguous alternative.

The active state must remain coherent with the approved visual system and must not depend only on color when that would weaken accessibility or perceptibility.

### Interaction states

Interactive elements must define the states that are applicable to their behavior:

- default;
- hover;
- focus / focus-visible;
- active / pressed;
- disabled;
- selected / current when relevant.

Do not add states mechanically when they do not exist semantically. When a state exists, its feedback must be perceptible and coherent with the visual grammar.

### Affordance

Navigation, controls and primary actions must look operable. Do not style a functional action as metadata or decorative copy when the user is expected to interact with it.

Use appropriate semantic elements and interaction cues. Cursor changes alone are not sufficient affordance for a control whose function would otherwise be ambiguous.

### Safe viewport

Persistent or edge-positioned controls must remain inside a safe viewport across supported breakpoints and account for practical viewport constraints such as:

- horizontal padding;
- browser/UI insets;
- mobile safe-area insets when applicable;
- fixed/sticky header or footer overlap;
- back-to-top placement;
- floating controls and navigation.

No functional element may become partially unreachable, clipped or effectively outside the viewport.

### Responsive safety

Responsive adaptation must preserve access to navigation and primary actions. Reflow, collapse, resize, pinning or alternative interaction patterns are allowed when required, but the functional intent must survive.

Validate at minimum that:

- controls do not overlap critical content;
- text does not become unreadable through clipping or insufficient measure;
- persistent elements do not obscure actions;
- interactive targets remain reachable;
- horizontal overflow does not hide functional UI.

### Legibility and minimum feedback

The experience must preserve readable hierarchy, sufficient contrast for the actual visual context, perceptible interactive feedback and clear distinction between content and controls.

Do not use low-contrast styling, opacity, tiny type or decorative treatment to make required controls visually disappear.

## 2. Semantic Hierarchy Contract

Classify material visual/textual elements by function before final styling. At minimum use the following semantic classes when relevant:

- `PRIMARY_NARRATIVE`: the dominant story/content the user should perceive first;
- `SUPPORTING_NARRATIVE`: content that explains, proves or extends the primary narrative;
- `PRIMARY_ACTION_NAVIGATION`: primary CTA, section navigation or action needed to progress;
- `SECONDARY_CONTROL`: supporting interaction such as filters, toggles, previous/next or auxiliary controls;
- `METADATA`: labels, indexes, timestamps, technical identifiers and tertiary context;
- `DECORATIVE_INFORMATION`: non-essential information or visual text whose removal would not break task or narrative comprehension.

### Function before styling

Visual Grammar must translate semantic function into perceptual hierarchy. Do not rely only on `font-weight`.

Use the combination appropriate to the approved visual direction, including:

- scale;
- position;
- spacing;
- contrast;
- grouping;
- color behavior;
- surface treatment;
- iconography;
- motion/feedback;
- density and whitespace.

### Action protection

Instructions or controls such as `Scroll to inspect`, `Deconstruct the system`, `Explore`, `Next`, `Back` or equivalent action language must not receive metadata/decorative treatment if they are required to understand or operate the experience.

If deliberately subtle, they must still preserve affordance and perceptual discoverability.

### Recurring control coherence

Controls with the same semantic role across sections should maintain coherent hierarchy and interaction behavior even when local composition changes.

Do not make the same class of action look primary in one section and decorative in another without an explicit narrative reason.

### Required handoff artifact

Direction/build handoff should include a concise `SEMANTIC HIERARCHY MAP` for the material elements or recurring control classes whose role could otherwise be ambiguous.

## 3. Section Enrichment Gate

Before build, evaluate whether each material section expresses its narrative/functional importance strongly enough.

This is a contextual gate, not a media quota.

### Evaluation

For each material section, determine:

- narrative importance: PRIMARY / SUPPORTING / TRANSITIONAL;
- functional importance: PRIMARY / SUPPORTING / NONE;
- current expression: SUFFICIENT / SUBEXPRESSIVE / OVEREXPRESSED;
- enrichment decision: NONE or one/more justified capabilities.

A section is `SUBEXPRESSIVE` when its current composition materially under-represents its narrative or functional importance, not merely because it lacks imagery.

### Enrichment options

When enrichment is justified, consider the smallest capability that materially improves the section, including:

- image;
- video;
- generated media;
- programmatic motion;
- data visualization;
- 3D;
- illustration;
- before/after;
- micro-interaction;
- or `NONE` when composition is already sufficient.

The chosen enrichment must have a clear narrative/functional role and remain subject to existing Asset Necessity, capability, modality and Generation Budget rules.

### No media-by-rule

Forbidden behavior includes rules such as:

- every card needs an image;
- every section needs generated media;
- important sections must use video;
- empty space must be filled with decorative effects.

Media is a capability, not a quality proxy.

### Typographic sections are valid

Preserve typography-led or composition-led sections when hierarchy, rhythm, narrative weight and interaction already express the intended importance.

Do not enrich a section solely to increase visual density.

### Required handoff artifact

Direction/build handoff should include a concise `SECTION ENRICHMENT MAP` for material sections, recording importance, expression status, decision and rationale.

## 4. Complexity / Creativity Budget

Treat creative density as a governed resource. The objective is not visual minimalism; it is to preserve a strong concept without allowing competing focal points, effects and controls to obscure the section's purpose.

### Section-level evaluation

For each material section, identify:

- `PRIMARY FOCUS`: the dominant content, action or mechanic the section is organized around;
- `SUPPORTING FOCI`: secondary elements allowed to reinforce the primary focus;
- `CREATIVE DENSITY`: LOW / MEDIUM / HIGH according to the intended experience;
- `MECHANIC COUNT`: the meaningful visual/interactive mechanisms operating in the same section;
- `DECORATIVE LOAD`: LOW / MEDIUM / HIGH;
- `ACTION LOAD`: primary and secondary actions competing for attention;
- `STATUS`: BALANCED / UNDER-COMPOSED / OVER-COMPOSED.

Do not convert these labels into arbitrary numeric quotas. They exist to make composition decisions explicit and comparable to the section's narrative role.

### Primary focus protection

Every material section must have at least one recognizable primary focus. High-density or experimental sections may contain multiple supporting elements, but the user should still be able to identify what matters first.

Primary actions must remain identifiable even when the section uses strong visual experimentation.

### Over-composition detection

Treat the following as evidence of possible over-composition when they compete rather than cooperate:

- multiple focal points with similar perceptual weight;
- excessive decorative layers;
- simultaneous line systems, grids, labels, badges or technical annotations without hierarchy;
- multiple CTAs or controls fighting for primary attention;
- competing hero mechanics or motion systems;
- visual effects added without narrative or functional role.

A strong concept may still be poorly executed. The framework must support the explicit classification:

`CONCEPT: STRONG / EXECUTION: OVER-COMPOSED`

When this occurs, preserve the concept and reduce competing execution layers before considering a redesign.

### Creativity is not accumulation

Creativity may come from composition, typography, interaction, motion, media, spatial rhythm, technical treatment or restraint. Do not measure creative quality by the number of effects used.

### Required handoff artifact

Direction/build handoff should include a concise `COMPLEXITY / CREATIVITY BUDGET` for material sections whose density or experimentation could become ambiguous. Record primary focus, intended density, allowed supporting mechanisms, known competition risks and expected status.

## 5. Transition Contract

Treat transitions between material sections as part of the experience rather than as empty space between independent templates.

### Transition intent

For each important section boundary, define one of the following or an equivalent explicit intent:

- `CONTINUITY`: the next section feels like a direct extension of the previous one;
- `CONTRAST`: the next section deliberately changes tone, color, scale, depth or rhythm while preserving an intentional relationship;
- `RESET`: the transition intentionally clears visual/narrative pressure before a new phase.

Strong contrast is valid. Unexplained discontinuity is not.

### Transition dimensions

Evaluate when relevant:

- narrative handoff: what idea/question carries from one section to the next;
- visual continuity: shared geometry, alignment, framing, texture, typography, motif or other visual anchor;
- contrast intent: what intentionally changes and why;
- color behavior: continuation, inversion, temperature shift, luminance shift or controlled reset;
- depth behavior: flat-to-deep, deep-to-flat, camera/spatial continuity or deliberate reset;
- motion handoff: whether motion resolves, continues, transfers or stops before the next section;
- interaction handoff: how sticky/pinned/scroll-controlled behavior releases into the next section.

### No stacked-template effect

Avoid transitions that make the page feel like unrelated visual templates stacked vertically. Local section identity may change, but the experience must retain an intentional editorial relationship.

### Positive benchmark

The Hero → Mechanical Inspection transition from the Lancer benchmark is a positive reference because it combined strong section identity with coherent editorial/visual handoff. Preserve the principle, not the literal style.

### Required handoff artifact

Direction/build handoff should include a `TRANSITION MAP` for material boundaries, recording source section, target section, transition intent, narrative bridge, visual/color/depth behavior, motion/interaction handoff and any anchor that must be preserved.

## 6. Programmatic Motion Capability

Motion must be routed by modality and purpose instead of being treated as synonymous with generated video.

### Motion modalities

Classify each relevant motion unit as one of:

- `STATIC`: no motion is required; composition carries the experience;
- `UI_MOTION`: component/interface feedback such as hover, reveal, accordion, tab, navigation, micro-transition or state change;
- `PROGRAMMATIC_MOTION`: motion rendered or controlled in the front-end through CSS, JavaScript, SVG, canvas, WebGL, Three.js, shaders or another approved code-native engine;
- `GENERATED_MOTION`: motion produced as generated media such as video, cinematic output or frame sequence from a generation provider.

These modalities are not quality tiers. Choose the modality that best satisfies the approved narrative and interaction requirement.

### Programmatic engines

Programmatic motion may use, when compatible with hard constraints and the project stack:

- CSS transitions/animations;
- JavaScript-driven animation;
- SVG animation;
- canvas;
- WebGL;
- Three.js;
- shaders;
- existing approved animation/runtime libraries.

Do not introduce a dependency solely because it is fashionable. A specific engine is an implementation choice only when it satisfies the approved motion contract and repository constraints.

### Fixed-asset animation

Prefer programmatic motion when a fixed asset can be made expressive through controlled front-end movement, masking, transforms, parallax, lighting simulation, displacement, camera-like movement or other deterministic techniques and generated media would not add proportional value.

### Generated motion is not the default

Do not route motion automatically to Higgsfield or another generation provider. Generated motion is appropriate when the experience specifically benefits from media-generation qualities that code-native motion cannot reasonably reproduce at the required quality.

### Capability choice factors

When more than one modality can satisfy the experience, consider:

- required visual modality;
- interaction/control precision;
- determinism and synchronization needs;
- reuse across sections or projects;
- generation/tool cost;
- implementation/runtime cost;
- performance implications;
- dependency constraints;
- responsive behavior;
- accessibility/reduced-motion behavior;
- likelihood of retry or regeneration.

This is a motion-routing decision, not the full Execution Economy Contract from topic 8.

### Binding modality

Once approved, the motion modality is binding. Do not silently replace `GENERATED_MOTION` with `PROGRAMMATIC_MOTION`, or the reverse, when that changes the intended experience. If the required modality cannot be delivered, block or request an explicit direction/override decision.

### Required handoff artifact

Direction/build handoff should include a `MOTION CAPABILITY MAP` for material motion units, recording motion hierarchy (PRIMARY / SUPPORTING / AMBIENT), modality, intended engine/provider, control source, narrative role, reuse/control rationale, fallback policy and relevant cost/performance considerations.

## Direction gate

Before declaring Build Readiness for work affected by these topics, confirm:

1. Global Experience Baseline requirements applicable to the experience are explicit.
2. Ambiguous material elements have semantic hierarchy classifications.
3. Every material section has an enrichment decision, including explicit `NONE` where appropriate.
4. Material/experimental sections have a recognizable primary focus and an explicit complexity/creativity status.
5. Important section boundaries have an intentional transition contract.
6. Material motion units have an explicit modality and capability route; generated motion is not being used by default.
7. No enrichment or motion requirement conflicts with Asset Necessity / Generation Budget governance.
8. Responsive and viewport safety are represented in acceptance criteria.

## Build binding rules

During build:

- preserve the semantic role declared in the hierarchy map;
- do not demote primary actions into metadata styling;
- implement applicable interaction states and navigation current-state behavior;
- keep persistent controls inside the safe viewport;
- do not add media merely because a section is text-led;
- if a `SUBEXPRESSIVE` section needs enrichment, use only the approved enrichment capability or request a direction change;
- preserve the `PRIMARY FOCUS` and intended creative density of each governed section;
- when a section is `OVER-COMPOSED`, remove/reduce competing execution layers before redesigning the concept;
- honor the `TRANSITION MAP`, including intentional contrast and motion/interaction release;
- honor the approved motion modality and engine/provider route;
- do not substitute generated and programmatic motion silently;
- treat unapproved enrichment, motion modality changes or transition changes that alter the narrative/compositional contract as scope drift.

## Review checks

Review must explicitly inspect, using the evidence available in the active surface:

### Global Experience Baseline

- contextual navigation has clear active/current feedback when applicable;
- applicable hover/focus/active/disabled states exist and are perceptible;
- controls have clear affordance;
- persistent/edge controls respect safe viewport;
- responsive layout keeps functional UI reachable;
- legibility, contrast and minimum feedback remain adequate.

### Semantic Hierarchy

- primary narrative is perceptually dominant where intended;
- primary actions/navigation are not visually treated as metadata;
- recurring controls keep coherent hierarchy;
- hierarchy uses composition/contrast/spacing/scale etc., not only font weight.

### Section Enrichment

- sections marked `SUFFICIENT` were not needlessly decorated;
- sections marked `SUBEXPRESSIVE` received the approved contextual enrichment or remain an explicit gap;
- generated media is not used by default;
- typographic sections remain valid when sufficient;
- enrichment respects asset/capability/budget governance.

### Complexity / Creativity Budget

- each governed section has a recognizable primary focus;
- primary actions remain identifiable;
- decorative/supporting mechanisms do not overwhelm narrative hierarchy;
- strong concepts are not discarded solely because execution is over-composed;
- `CONCEPT: STRONG / EXECUTION: OVER-COMPOSED` is used when it accurately describes the gap.

### Transition Contract

- material boundaries follow their intended CONTINUITY / CONTRAST / RESET behavior;
- strong contrast remains intentional rather than accidental;
- narrative, visual, chromatic, depth and motion handoffs remain coherent where specified;
- the page does not feel like independent templates stacked together.

### Programmatic Motion Capability

- STATIC / UI_MOTION / PROGRAMMATIC_MOTION / GENERATED_MOTION is correctly respected;
- code-native motion is considered where it provides better control/reuse than generated media;
- generated motion is not chosen merely because a provider exists;
- provider/engine and control source match the approved Motion Capability Map;
- modality changes are explicit rather than silent fallbacks.

A violation may produce REFINE when direction is correct and execution is local. If the approved direction itself omitted a required calibration decision, the review should surface that as a direction/spec gap without silently inventing a redesign.