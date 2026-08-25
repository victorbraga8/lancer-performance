# Landing Express — Session / Interaction Lifecycle V1.2

Landing Express is an editorial/visual creation copilot whose primary product unit is the **INTERACTION / SESSION**. Gates, prompt versions, execution records and internal checkpoints govern that interaction; they are not separate products the user must learn.

Read `PUBLIC-SURFACE.md`, `USER-LANGUAGE.md`, `GATE-RECOVERY.md`, `PROMPT-EXECUTION.md`, `STYLE-INTERPRETER.md`, `STACK-AWARE-ROUTING.md` and `EXPERIENCE-QUALITY.md`.

## 1. User-facing lifecycle

```text
le-start
   ↓
Resume | Nova interação
   ↓
GATE da ação escolhida
   ↓
COPILOT
   ↓
CONCEPTION READY
   ↓
Acrescentar algo?
   ↓
ENRICHMENT LOOP (0..3)
   ↓
PROMPT COMPILE
   ↓
PROMPT READY + EXECUTION RECOMMENDATION
   ↓
Executar prompt | Refine | Finalizar
   │
   ├── Executar prompt
   │     ↓
   │   PROMPT_EXECUTION GATE
   │     ↓
   │   EXECUÇÃO
   │     ↓
   │   EXECUÇÃO CONCLUÍDA
   │     ↓
   │   Refine | Finalizar
   │
   ├── Refine → prompt-vN+1 → PROMPT READY
   │
   └── Finalizar → le-end → INTERAÇÃO CONCLUÍDA
```

## 2. START is a router

`le-start` must be fast and must not force an optimization hop for a transient routing action.

At start:

1. detect active surface/runtime identity when useful;
2. read only minimal session metadata;
3. offer `Resume | Nova interação` (or only `Nova interação` when no prior interaction exists);
4. run the **first hard gate only after the user chooses the material route**.

Therefore:

```text
le-start
→ Nova interação
→ GATE: NEW_INTERACTION
```

or:

```text
le-start
→ Resume
→ GATE: RESUME
```

`START` may keep an abstract diagnostic baseline in the adapter, but it is `ROUTER_ONLY` and is not a user-blocking hard gate.

## 3. Gate recovery

Every material gate must be resumable.

On `UNDER_REASONING`, material `OVER_REASONING` or relevant `UNKNOWN`:

- persist the pending action;
- tell the user the recommended model/effort;
- tell the user to change it and send `Continuar`;
- detect the runtime again on `Continuar`;
- rerun the same pending action gate;
- continue from that action on PASS/override without restarting the journey.

Read `GATE-RECOVERY.md`.

## 4. User-facing stages

Normal status projection:

```text
EM CONCEPÇÃO
CONSOLIDANDO A DIREÇÃO
PROMPT PRONTO
EXECUTANDO O PROMPT
EXECUÇÃO CONCLUÍDA
REFINANDO O PROMPT
INTERAÇÃO CONCLUÍDA
```

`EXECUÇÃO CONCLUÍDA` is not the same as `INTERAÇÃO CONCLUÍDA`. Only explicit `le-end` closes the interaction.

## 5. NEW_INTERACTION

```text
Nova interação selected
→ MODEL / EFFORT GATE: NEW_INTERACTION
→ PASS / OVERRIDDEN
→ create Session ID + conception-state.json
→ O que você gostaria de fazer?
→ adaptive copilot
```

Do not inherit previous-session prompt/findings/PRESERVE/review decisions unless the user explicitly requests reuse.

## 6. RESUME

For an active interaction:

```text
Resume selected
→ identify session + minimal metadata
→ recover pending gate first when one exists
→ otherwise MODEL / EFFORT GATE: RESUME when material conception recovery is required
→ recover only material state
→ continue from the user-facing state
```

Resume must not always ask a generic conception question. If the interaction is already `PROMPT READY`, show `Executar prompt | Refine | Finalizar`. If it is `EXECUTION_COMPLETE`, show `Refine | Finalizar`. If a gate is pending, recover that gate first.

For a completed interaction, require explicit reopen confirmation before material work.

## 7. Copilot interpretation

Material conception follows internally:

```text
CURRENT USER INTENTION
→ EDITORIAL INTERPRETER
→ EDITORIAL COHERENCE
→ STYLE INTERPRETER
→ VISUAL INTERPRETER
→ STACK-AWARE TECHNICAL ROUTING when material
→ CONTEXTUAL SUGGESTION
→ GENERATED MEDIA DECISION when applicable
→ MATERIAL CONCEPTION STATE UPDATE
```

The user decides intention and perceivable outcome. Landing Express translates into style, mechanism, library and provider only as far as required.

## 8. Style / suggestion / stack rules

- Style is a visual grammar, not an adjective or library name.
- Suggestions follow effect → editorial reason → mechanism → library when useful → trade-off when material.
- Distinguish `STYLE → MECHANISM → LIBRARY → PROVIDER`.
- Inspect the actual repo before recommending a new dependency.
- Prefer existing libraries/capabilities when they preserve equivalent approved quality/control.
- Add a dependency when it materially enables or improves the approved experience; never avoid a necessary dependency merely to keep the stack small.

Persist approved style in `STYLE` and stack baseline/approved dependencies inside `TECHNICAL_REQUIREMENTS`.

## 9. Structured Conception State

Canonical source:

```text
.landing-express/sessions/<session-id>/conception-state.json
```

Use the existing fields:

```text
INTENT
AUDIENCE
EDITORIAL
NARRATIVE
VISUAL_DIRECTION
SECTIONS
CINEMATIC_OPPORTUNITIES
INTERACTIONS
MOTION
THREE_D
STYLE
GLASS_DEPTH_LIGHTING_MATERIALS
CONSTRAINTS
PRESERVE
TECHNICAL_REQUIREMENTS
OPEN_DECISIONS
```

Do not use raw transcript as the prompt source. Update/invalidate selectively.

## 10. Gate coverage

Recalculate before materially different actions including:

- `NEW_INTERACTION`;
- `RESUME` when material recovery begins;
- material `ENRICHMENT`;
- `PROMPT_COMPILE`;
- `PROMPT_EXECUTION`;
- `REFINE`;
- other materially different cognitive/execution actions.

**Recalculate always; interrupt the user only when a material mismatch/unknown requires intervention.** A PASS that changes nothing may remain concise.

## 11. Conception readiness / enrichment

Reach `CONCEPTION READY` only when material editorial, narrative, style, visual, interaction, technical and constraint decisions are mature enough that unresolved ambiguity would not materially change the prompt.

Then ask the defined enrichment checkpoint. `ENRICHMENT`/`STRUCTURAL` consume up to 3 material cycles; `MINOR` does not; `SCOPE_SHIFT` recommends Nova interação.

## 12. Prompt compilation

Required order:

```text
CONCEPTION READY
→ enrichment resolved
→ FINALIZATION PASS
→ MODEL / EFFORT GATE: PROMPT_COMPILE
→ compile immutable prompt-vN.md
→ analyze actual compiled prompt complexity
→ calculate PROMPT_EXECUTION recommendation
→ PROMPT READY
```

The prompt compiler must carry approved style grammar, stack baseline, dependencies/constraints and execution intent without requiring conversation context.

## 13. PROMPT READY

Return:

```text
PROMPT READY

Prompt: <prompt>
Recommended execution model: <native | UNKNOWN>
Recommended execution effort: <native | UNKNOWN>

1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

The execution recommendation comes from the actual prompt complexity. It must not default to the strongest model simply because implementation will occur.

## 14. PROMPT_EXECUTION

Read `PROMPT-EXECUTION.md`.

Before mutation:

```text
prompt-vN + stored complexity
→ detect active runtime now
→ PROMPT_EXECUTION gate
→ stack/capability preflight
→ execute prompt
```

Persist `execution-current.json` and `execution-history.json`.

Successful execution ends at:

```text
EXECUÇÃO CONCLUÍDA
1. Refine
2. Finalizar (`le-end`)
```

Never auto-call `le-end` merely because implementation finished.

## 15. Refine

Refine remains in the same interaction. It may happen before or after execution.

After execution, implementation/result evidence may inform the delta, but Conception State remains the approved source of direction. A successful Refine produces immutable `prompt-vN+1.md` and returns to `PROMPT READY`, where execution is available again.

## 16. Completion

Only explicit `le-end` marks `COMPLETED`.

Completion preserves:

- all prompt versions;
- Conception State;
- Refine history;
- execution history/results;
- gate evidence;
- completion history.

## 17. V1.1 boundary

Do not restore Build Orchestrator, READY FOR BUILD, mandatory technical review or automatic deployment. Governed prompt execution is an in-interaction consumer of the compiled artifact, not a return to the old V1.1 workflow machine.
