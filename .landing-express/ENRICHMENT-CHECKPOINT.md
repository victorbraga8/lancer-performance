# Landing Express — User-driven Enrichment Checkpoint V1.3

This contract governs **USER-DRIVEN ENRICHMENT** after the conception has already passed the internal copilot-driven opportunity/enrichment work and first reaches `CONCEPTION READY`.

`COPILOT-DRIVEN ENRICHMENT` and `USER-DRIVEN ENRICHMENT` are different behaviors:

```text
COPILOT-DRIVEN ENRICHMENT
- proactive internal pass
- happens before CONCEPTION READY when material
- does not consume the user's 0..3 material loops
- must converge to a prioritized selection or NONE

USER-DRIVEN ENRICHMENT
- begins when the user explicitly adds or changes something
- happens through this checkpoint
- ENRICHMENT / STRUCTURAL consume the existing 0..3 budget
```

The goal of this checkpoint is to give the user one last opportunity to add something without turning the conception into an unlimited, drifting conversation.

## 1. Mandatory position

The lifecycle is:

```text
THEMATIC / CREATIVE ELIGIBILITY
    ↓
CREATIVE INTENSITY MAP
    ↓
COPILOT-DRIVEN ENRICHMENT
    ↓
CONCEPTION READY
    ↓
USER-DRIVEN ENRICHMENT CHECKPOINT
    ↓
No → FINALIZATION GATE
Yes → classify requested change
          ↓
      MINOR | ENRICHMENT | STRUCTURAL | SCOPE_SHIFT
          ↓
      governed enrichment handling
          ↓
      readiness re-evaluation when needed
          ↓
      USER-DRIVEN ENRICHMENT CHECKPOINT again while material-loop budget remains
```

Copilot-driven recommendations never decrement `materialLoopsUsed` merely because the copilot found them proactively.

The checkpoint happens before Finalization Gate. A previous readiness result is not a Finalization PASS.

## 2. Exact user-facing checkpoint

When the conception reaches `CONCEPTION READY`, ask exactly:

```text
A direção já está consistente e pronta para ser transformada em prompt.
Quer acrescentar algo antes de eu consolidar?

1. Sim, quero acrescentar algo
2. Não, pode consolidar
```

Do not silently skip this question.

### If the user chooses `Não`

Proceed to:

```text
FINALIZATION GATE
    ↓
MODEL / EFFORT GATE: PROMPT_COMPILE
    ↓
PROMPT COMPILE
```

### If the user chooses `Sim`

Do not append the new message directly to the final prompt.

Instead:

1. interpret the request against the current Conception State;
2. classify it as `MINOR`, `ENRICHMENT`, `STRUCTURAL` or `SCOPE_SHIFT`;
3. identify only the affected conception fields;
4. if the class is material (`ENRICHMENT` or `STRUCTURAL`), run `MODEL / EFFORT GATE: ENRICHMENT` before material reasoning;
5. reopen questions/suggestions only where required;
6. update/invalidate only affected fields;
7. if creative territory/intensity becomes stale, reopen only those creative-governance decisions and run one new copilot-driven pass after they converge;
8. re-evaluate readiness when the change can affect it.

## 3. Classification

### MINOR

A contained adjustment that does not materially change the conception direction or reopen a material decision.

Rules:

- does **not** consume a material enrichment loop;
- does not automatically invalidate unrelated fields;
- still updates the structured state when needed by the executor;
- re-evaluate readiness if evidence becomes stale.

### ENRICHMENT

Adds meaningful detail or capability while preserving the current objective and architecture.

Rules:

- consumes **1 material enrichment loop**;
- requires the `ENRICHMENT` Model/Effort Gate before material reasoning;
- reopens only affected decisions;
- preserves unaffected valid fields.

### STRUCTURAL

Changes a material part of the conception while preserving the same fundamental objective/session.

Rules:

- consumes **1 material enrichment loop**;
- requires the `ENRICHMENT` Model/Effort Gate;
- explicitly invalidates/reopens affected state fields;
- returns to `CONCEPTION ACTIVE` until affected decisions converge;
- readiness must be re-evaluated.

### SCOPE_SHIFT

Represents a genuinely new or materially expanded objective that no longer fits safely inside the current conception.

Rules:

- do not consume another enrichment loop merely to absorb it;
- stop final consolidation;
- explain the detected scope shift;
- recommend `Nova interação`;
- do not silently stretch the session into a different objective.

## 4. Material-loop budget

A session may use at most:

```text
3 material user-driven enrichment loops
```

Only `ENRICHMENT` and `STRUCTURAL` consume this budget. `MINOR` does not. `SCOPE_SHIFT` interrupts consolidation.

The counter represents material user-requested cycles, **not messages and not copilot-driven opportunities**.

## 5. Fourth material request

If `materialLoopsUsed >= 3` and the user asks for another `ENRICHMENT` or `STRUCTURAL` change, enter a non-convergence diagnosis instead of silently opening a fourth cycle.

Consider:

- `DIRECTION_NOT_CONVERGED`;
- `EDITORIAL_OBJECTIVE_CHANGED`;
- `NEW_IDEA_INVALIDATES_CONSOLIDATED_AREAS`;
- `SCOPE_GREW_BEYOND_INITIAL_INTENT`;
- `DECISIONS_CONFLICT`.

Recommend `Nova interação` when scope drift or objective replacement is material; otherwise return to the narrow blocker.

## 6. Structured persistence

Persist user enrichment governance under `enrichment`:

```json
{
  "maxMaterialLoops": 3,
  "materialLoopsUsed": 0,
  "activeCycle": null,
  "history": [],
  "lastClassification": null,
  "diagnosis": null
}
```

Persist copilot-driven enrichment separately under `creativeGovernance.copilotEnrichment`.

Do not persist hidden chain-of-thought or full transcript.

## 7. Re-evaluation rule

An enrichment response is never a raw append to the compiled prompt.

```text
USER DELTA
    ↓
CLASSIFY
    ↓
AFFECTED CONCEPTION / CREATIVE-GOVERNANCE FIELDS
    ↓
SELECTIVE QUESTIONS / SUGGESTIONS
    ↓
SELECTIVE STATE UPDATE / INVALIDATION
    ↓
READINESS RE-EVALUATION IF MATERIAL
```

Only resulting structured state is consumed by the Prompt Compiler.

## 8. Relationship with Finalization Gate

Finalization runs only after the user chooses to consolidate and after any accepted delta has converged.

```text
CONCEPTION READY
→ checkpoint
→ material user delta
→ CONCEPTION ACTIVE
→ resolve affected decisions
→ optional one-pass copilot re-enrichment if creative basis changed
→ CONCEPTION READY again
→ checkpoint/finalization path
```

The checkpoint and loop guardrail do not replace the Model/Effort Gate or Finalization Gate.
