# Landing Express — Prompt Compiler / PROMPT READY V1.3

The compiler consolidates approved structured conception into an immutable executable prompt. It is not a second discovery phase and it does not execute automatically.

## 1. Preconditions

```text
Conception State: CONCEPTION READY
Copilot-driven cinematic enrichment: RESOLVED | NONE
Responsive / continuity / intensity coherence: resolved when material
Critique-before-ready: RESOLVED | NONE
User enrichment: resolved for consolidation
Finalization Gate: PASS
PROMPT_COMPILE Gate: PASS | OVERRIDDEN
```

No previous action gate authorizes compilation.

## 2. Canonical source

Compile from current valid `conception-state.json`, not raw transcript.

Consume only approved material decisions, omit invalidated/superseded context, preserve intentional ambiguity explicitly and include enough context for execution without the original conversation.

## 3. Executable cinematic contract

When cinematic decisions are material, compile an explicit `CINEMATIC EXECUTION CONTRACT` that keeps these layers distinguishable:

```text
PERCEPTUAL INTENT
what the user should perceive / understand / feel
        ↓
MECHANISM
what approved visual/motion/spatial/interaction behavior produces it
        ↓
LIBRARY / IMPLEMENTATION
only when stack-aware routing approved or materially constrained it
        ↓
PROVIDER
only when an external/generated capability is actually required
        ↓
RESPONSIVE BEHAVIOR
PRESERVE | ADAPT | REFLOW | REDESIGN | REPLACE | HIDE
```

The executor must not flatten an approved mechanism into a generic fade/slide/decorative treatment.

## 4. Prompt content

Render only relevant sections, including when material:

- role/execution mode;
- build objective and audience/business intent;
- editorial/narrative direction;
- structured style grammar;
- section storyboard;
- selected cinematic opportunities;
- **perceptual intent separated from mechanism**;
- **approved library/implementation only when routed/approved**;
- **provider only when required**;
- explicit asset usage/affordance evidence;
- atmosphere/lighting/depth direction;
- cinematic continuity motifs/transitions;
- desktop/mobile intensity curve, cinematic budget and recovery zones;
- responsive cinematic classification (`PRESERVE/ADAPT/REFLOW/REDESIGN/REPLACE/HIDE`) and replacement intent;
- motion dramaturgy roles, mobile behavior and reduced-motion behavior;
- selected interaction with touch/accessibility behavior;
- generated-media replacement strategy/fallback when material;
- hard constraints and PRESERVE;
- stack baseline / approved dependencies / avoid-dependencies from `TECHNICAL_REQUIREMENTS`;
- implementation intent;
- acceptance criteria;
- intentional open decisions.

Do not invent a library/provider merely because a mechanism exists. Stack-aware routing owns implementation choice.

## 5. Responsive execution intent

Responsive output preserves **experience intent**, not desktop geometry.

When material, make clear:

```text
desktop mechanism
→ responsive classification
→ mobile mechanism / alternative
→ intent being preserved
```

Do not require the user to specify breakpoints when the copilot can translate the approved intent safely.

## 6. Cinematic continuity and intensity

When continuity is material, preserve which motifs connect sections and how they transform/reduce/reappear. Do not convert continuity into literal repetition of the hero effect.

When intensity is material, preserve the sequence of `INTENSITY → RELEASE/RECOVERY → RENEWED_EMPHASIS` and any distinct mobile curve. Recovery zones are implementation requirements when they were part of the approved conception.

## 7. Versioning

Create immutable:

```text
prompt-v1.md
prompt-v2.md
...
prompt-current.json
```

Never overwrite an older prompt version.

## 8. PROMPT_COMPILE vs PROMPT_EXECUTION

These are different actions.

`PROMPT_COMPILE` asks whether the current runtime can reliably consolidate the conception.

After compilation, analyze the actual prompt and build a separate `PROMPT_EXECUTION` recommendation.

`PROMPT_EXECUTION` starts from its own low baseline and rises only from real artifact complexity. It must not inherit `PROMPT_COMPILE`'s minimum and must never default to the strongest model merely because code mutation may occur.

## 9. Execution complexity signals

Use material signals such as:

- prompt/context breadth and density;
- section count/interdependence;
- spatial/3D/WebGL/shader work;
- motion/timeline complexity;
- interaction breadth;
- responsive redesign/replacement breadth;
- continuity/intensity interdependence across sections;
- constraints/PRESERVE and regression risk;
- technical requirements/integrations;
- generated/external capabilities;
- specification strength;
- unresolved ambiguity.

Translate to the Reasoning Adapter dimensions and resolve native model/effort centrally.

## 10. PROMPT READY

Return:

```text
PROMPT READY

Prompt: <compiled prompt>
Recommended execution model: <native | UNKNOWN>
Recommended execution effort: <native | UNKNOWN>

1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

`PROMPT READY` authorizes no automatic mutation. Execution begins only after explicit user choice and independent `PROMPT_EXECUTION` gate.

## 11. Execution relationship

When `Executar prompt` is selected, follow `PROMPT-EXECUTION.md` and `GATE-RECOVERY.md`.

After successful execution, do not mark the interaction completed. Return `Refine | Finalizar`.
