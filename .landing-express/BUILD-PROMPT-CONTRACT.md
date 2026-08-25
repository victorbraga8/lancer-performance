# Build Prompt Contract — V1.2

This contract defines the semantic content expected from the Landing Express Prompt Compiler. `PROMPT-COMPILER.md` defines the executable compilation/versioning lifecycle.

The final prompt is compiled from the **structured Conception State**, never from raw transcript.

## 1. Preconditions

Compilation is forbidden until:

```text
Conception state: CONCEPTION READY
Enrichment Checkpoint: resolved for consolidation
Finalization Gate: PASS
MODEL / EFFORT GATE: PROMPT_COMPILE = PASS | OVERRIDDEN
```

These conditions are independent. A gate from START, NEW_INTERACTION, RESUME or ENRICHMENT never authorizes PROMPT_COMPILE.

## 2. Source of truth

Primary source:

```text
.landing-express/sessions/<session-id>/conception-state.json
```

Consume only current valid material decisions. Remove obsolete/superseded context. Preserve explicitly accepted intentional ambiguity instead of inventing a solution.

Do not copy transcript noise, rejected alternatives or stale discussion into the prompt.

## 3. Prompt structure

Include only relevant sections from this repertoire:

```text
ROLE / EXECUTION MODE
BUILD OBJECTIVE
BUSINESS / CONVERSION INTENT
EXPERIENCE / EDITORIAL DIRECTION
DESIRED PERCEPTION
NARRATIVE FLOW
VISUAL GRAMMAR
SECTION-BY-SECTION STORYBOARD
CINEMATIC DIRECTION
MOTION LANGUAGE
INTERACTION RULES
HARD CONSTRAINTS
PRESERVE
IMPLEMENTATION INTENT
RESPONSIVE / MOBILE BEHAVIOR
GENERATED MEDIA / ASSET DIRECTIONS
PROHIBITED PATTERNS
VALIDATION / ACCEPTANCE CRITERIA
INTENTIONALLY OPEN DECISIONS
```

Do not emit empty headings mechanically.

## 4. Conception-state mapping

Typical mapping:

- `INTENT` → BUILD OBJECTIVE;
- `AUDIENCE` → BUSINESS / CONVERSION INTENT;
- `EDITORIAL` → EXPERIENCE / EDITORIAL DIRECTION;
- `NARRATIVE` → NARRATIVE FLOW;
- `VISUAL_DIRECTION` + `STYLE` + `GLASS_DEPTH_LIGHTING_MATERIALS` → VISUAL GRAMMAR;
- `SECTIONS` → SECTION-BY-SECTION STORYBOARD;
- `CINEMATIC_OPPORTUNITIES` → CINEMATIC DIRECTION;
- `INTERACTIONS` → INTERACTION RULES;
- `MOTION` → MOTION LANGUAGE;
- `THREE_D` + `TECHNICAL_REQUIREMENTS` → IMPLEMENTATION INTENT / CINEMATIC DIRECTION;
- `CONSTRAINTS` → HARD CONSTRAINTS;
- `PRESERVE` → PRESERVE;
- accepted `OPEN_DECISIONS` → INTENTIONALLY OPEN DECISIONS.

Compile semantic instructions; do not mechanically dump JSON.

## 5. Executor independence

The compiled prompt must be understandable by a coding agent **without access to the original conversation**.

It must preserve enough material context to implement correctly while avoiding conversational history that does not affect execution.

The executor may solve implementation details that remain intentionally flexible, but must not reinterpret approved editorial/visual direction.

## 6. Generated media

Generated media remains governed by `GENERATED-MEDIA-POLICY.md`.

Do not add Higgsfield or another provider merely because the experience is Web Cinematic. When generated media is actually required, preserve its purpose, destination, framing/continuity expectations, usage and generation budget.

## 7. Versioning

Each successful compilation produces a new immutable session artifact:

```text
prompt-v1.md
prompt-v2.md
prompt-v3.md
...
```

Never overwrite a previous version. Persist the current pointer/metadata in `prompt-current.json`.

## 8. Model / effort

### Compilation gate

Before compilation, `PROMPT_COMPILE` must pass its own Model/Effort Gate.

### Final prompt recommendation

After compilation, compute a separate recommendation using the **actual compiled prompt** plus its current Conception State.

Consider material complexity such as specification breadth, sections, cinematic/3D demands, motion/interactions, constraints, technical requirements, accepted ambiguity and prompt density.

Resolve model/effort through the centralized Reasoning Adapter mapping. Do not hardcode or invent native selectors. When resolution is unavailable, return `UNKNOWN`, not a generic fake label.

## 9. PROMPT READY

Successful output is:

```text
PROMPT READY

Prompt: <prompt compilado>
Recommended model: <modelo nativo | UNKNOWN>
Recommended effort: <effort nativo | UNKNOWN>
```

The prompt is the principal endpoint of the interaction.

Do not start implementation automatically after PROMPT READY.

## 10. Post-prompt choice

Immediately offer:

```text
1. Refine
2. Finalizar (`le-end`)
```

Do not start Refine automatically. Enrichment is pre-prompt conception work; Refine is post-prompt work on an already compiled prompt and will eventually produce a new prompt version.
