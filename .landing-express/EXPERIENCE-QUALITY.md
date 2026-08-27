# Landing Express — Experience Quality Policy V1.2

This policy consolidates the useful quality constraints learned in V1.1 into the V1.2 Copilot Editorial lifecycle.

It is **not a new user-facing phase**, questionnaire or parallel state machine. Apply it through the existing Editorial Interpreter, Visual Interpreter, Conception State and Prompt Compiler.

## 1. Canonical principle

Web Premium / Web Cinematic quality is achieved through coherent hierarchy, expression, transitions, motion and interaction — not by accumulating effects.

Apply these quality dimensions when materially relevant:

- semantic hierarchy;
- section expression/enrichment;
- creativity/complexity balance;
- transition quality;
- motion modality and hierarchy;
- responsive/safe-viewport quality;
- capability/economy discipline;
- evidence from prior/external review when it helps the current conception.

Do not expose these as mandatory technical steps to the user.

## 2. Semantic hierarchy

For material elements, understand their role before styling:

- primary narrative;
- supporting narrative;
- primary action/navigation;
- secondary control;
- metadata;
- decorative information.

Translate semantic role into perceptual hierarchy using composition, position, scale, spacing, contrast, grouping, material treatment, motion and whitespace — not font weight alone.

Primary actions must remain identifiable. Controls must not look like decorative metadata when the user is expected to interact with them.

Persist hierarchy decisions inside existing `EDITORIAL`, `SECTIONS` or `INTERACTIONS` state. Do not create a second hierarchy state unless a future schema explicitly requires it.

## 3. Section expression / enrichment

For each material section, decide whether its current expression is:

```text
SUFFICIENT | SUBEXPRESSIVE | OVEREXPRESSED
```

Enrichment is contextual. Valid decisions may include image, generated media, programmatic motion, data visualization, 3D, illustration, before/after, microinteraction or `NONE`.

Rules:

- no section needs media merely because it is important;
- typography-led sections are valid;
- empty space is not a defect to fill automatically;
- use the smallest mechanism that materially improves the section;
- generated media remains governed by `GENERATED-MEDIA-POLICY.md`.

Record material results inside `SECTIONS`, `CINEMATIC_OPPORTUNITIES`, `VISUAL_DIRECTION` or `INTERACTIONS` rather than creating a separate V1.1 enrichment artifact.

## 4. Creativity / complexity budget

Creative density is a governed resource.

For visually material or experimental sections, keep clear:

- primary focus;
- supporting mechanisms;
- intended creative density;
- competing focal/effect risk;
- whether execution is balanced, under-composed or over-composed.

A valid diagnosis is:

```text
CONCEPT: STRONG / EXECUTION: OVER-COMPOSED
```

When that is true, preserve the concept and remove competing layers before proposing a redesign.

Do not convert this into numeric quotas or another user-facing score.

## 5. Transition quality

Important section boundaries should have intentional behavior:

```text
CONTINUITY | CONTRAST | RESET
```

Evaluate only what matters: narrative handoff, visual anchor, color/luminance behavior, depth, motion release/continuity and interaction release.

Strong contrast is valid. Unexplained discontinuity is not.

Avoid the “stacked unrelated templates” effect. Persist transition decisions inside `NARRATIVE`, `SECTIONS` and/or `MOTION`.

## 6. Motion routing

Classify material motion by **role** and **modality** when it affects the experience.

Role:

```text
PRIMARY | SUPPORTING | AMBIENT
```

Modality:

```text
STATIC | UI_MOTION | PROGRAMMATIC_MOTION | GENERATED_MOTION
```

These are not quality tiers.

Prefer programmatic motion when deterministic control, scroll synchronization, reversibility, responsiveness, reuse or lower retry risk matter and the required visual quality is achievable.

Use generated motion when synthesis itself materially contributes to the approved experience and deterministic techniques cannot reasonably produce the required result.

Do not silently change an approved modality when that changes the intended experience.

Store material motion decisions in `MOTION`, `THREE_D`, `CINEMATIC_OPPORTUNITIES` and/or `TECHNICAL_REQUIREMENTS`.

## 7. Global UX baseline

When applicable, the conception/prompt must protect:

- clear current/selected state for contextual navigation;
- perceivable hover/focus/active/disabled states where semantically relevant;
- clear affordance for actions and controls;
- readable hierarchy and adequate contrast;
- safe viewport for fixed/sticky/edge controls;
- reachable primary actions on mobile;
- no functional horizontal overflow;
- reasonable touch targets and responsive preservation;
- reduced-motion/accessibility behavior when motion is material.

These are baseline quality expectations, not optional polish added only after implementation.

## 8. Economy without quality degradation

Economy is the lowest **total reasonable cost** that preserves the required quality — not the cheapest nominal option.

When a choice is material, consider:

- quality floor;
- model/tool cost when known;
- retry risk;
- execution time;
- control and determinism;
- reuse value;
- regression risk;
- provider availability/credits;
- asset destination and actual need.

Never fabricate monetary values.

Model/effort selection remains governed by the centralized Reasoning Adapter and Model Gate. Economy must never force a configuration below the required reasoning profile.

Generated media economy remains governed by `GENERATED-MEDIA-POLICY.md`.

Record an economy rationale only when it materially changes a conception or capability decision; do not create noise for trivial choices.

## 9. Review findings as evidence

Legacy or external review findings may be consumed as **evidence**, not as automatic instructions.

When review evidence is relevant:

1. map the finding to the current Conception State;
2. determine whether it still applies to the current intention;
3. reopen only affected decisions;
4. preserve unaffected approved direction;
5. never let legacy review state restore implementation ownership to Landing Express.

A finding from a previous implementation is not binding merely because it exists.

## 10. No state explosion

The V1.1 artifacts below are concept sources, not required V1.2 runtime layers:

- Semantic Hierarchy Map;
- Section Enrichment Map;
- Complexity / Creativity Budget;
- Transition Map;
- Motion Capability Map;
- Execution Economy Decision.

Their useful information must be represented through existing structured conception fields when material. Do not require all maps for every interaction.

## 11. Completion check

Before `CONCEPTION READY`, verify only the quality dimensions that are material to the current experience.

A conception must not be blocked because an irrelevant V1.1 artifact was not produced. It must be blocked when a relevant hierarchy, section expression, transition, motion, UX or capability decision is still ambiguous enough to change the compiled prompt materially.
