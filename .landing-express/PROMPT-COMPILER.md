# Landing Express — Prompt Compiler / PROMPT READY V1.2

The compiler consolidates approved structured conception into an immutable executable prompt. It is not a second discovery phase and it does not execute automatically.

## 1. Preconditions

```text
Conception State: CONCEPTION READY
Enrichment: resolved for consolidation
Finalization Gate: PASS
PROMPT_COMPILE Gate: PASS | OVERRIDDEN
```

No previous action gate authorizes compilation.

## 2. Canonical source

Compile from current valid `conception-state.json`, not raw transcript.

Consume only approved material decisions, omit invalidated/superseded context, preserve intentional ambiguity explicitly and include enough context for execution without the original conversation.

## 3. Prompt content

Render only relevant sections, including when material:

- role/execution mode;
- build objective and audience/business intent;
- editorial/narrative direction;
- **structured style grammar**;
- section storyboard;
- cinematic/motion/interaction direction;
- hard constraints and PRESERVE;
- **stack baseline / approved dependencies / avoid-dependencies** from `TECHNICAL_REQUIREMENTS`;
- implementation intent;
- responsive/accessibility behavior;
- generated/external capability directions;
- acceptance criteria;
- intentional open decisions.

The prompt should explicitly instruct the executor to inspect the actual repo before adding dependencies and to prefer existing capabilities when they preserve equivalent approved quality/control.

## 4. Versioning

Create immutable:

```text
prompt-v1.md
prompt-v2.md
...
prompt-current.json
```

Never overwrite an older prompt version.

## 5. PROMPT_COMPILE vs PROMPT_EXECUTION

These are different actions.

`PROMPT_COMPILE` asks whether the current runtime can reliably consolidate the conception.

After compilation, analyze the **actual prompt** and build a separate `PROMPT_EXECUTION` recommendation.

`PROMPT_EXECUTION` must start from its own low baseline and rise only from real artifact complexity. It must not inherit `PROMPT_COMPILE`'s GENERAL/MEDIUM minimum and must never default to the strongest model merely because code mutation may occur.

## 6. Execution complexity signals

Use material signals such as:

- prompt/context breadth and density;
- section count/interdependence;
- spatial/3D/WebGL/shader work;
- motion/timeline complexity;
- interaction breadth;
- constraints/PRESERVE and regression risk;
- technical requirements/integrations;
- generated/external capabilities;
- specification strength;
- unresolved ambiguity.

Translate to the Reasoning Adapter dimensions and resolve native model/effort centrally.

## 7. PROMPT READY

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

## 8. Execution relationship

When `Executar prompt` is selected, follow `PROMPT-EXECUTION.md` and `GATE-RECOVERY.md`.

After successful execution, do not mark the interaction completed. Return `Refine | Finalizar`.
