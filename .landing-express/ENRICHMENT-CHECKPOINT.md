# Landing Express — Enrichment Checkpoint V1.2

This contract governs the optional enrichment step that happens **after** the conception first reaches `CONCEPTION READY` and **before** the finalization gate that authorizes prompt compilation.

The goal is to give the user one last opportunity to add something without turning the conception into an unlimited, drifting conversation.

## 1. Mandatory position

The lifecycle is:

```text
CONCEPTION READY
    ↓
ENRICHMENT CHECKPOINT
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
      ENRICHMENT CHECKPOINT again while material-loop budget remains
```

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
7. re-evaluate readiness when the change can affect it.

## 3. Classification

### MINOR

A contained adjustment that does not materially change the conception direction or reopen a material decision.

Examples include a small wording preference, a narrowly scoped presentation preference or another low-impact adjustment that can be represented by a selective state update.

Rules:

- does **not** consume a material enrichment loop;
- does not automatically invalidate unrelated fields;
- still updates the structured state when the change is material enough to matter to the executor;
- if the adjustment happens to invalidate readiness evidence, re-evaluate readiness normally.

### ENRICHMENT

Adds meaningful detail or capability while preserving the current objective and architecture of the conception.

Rules:

- consumes **1 material enrichment loop**;
- requires the `ENRICHMENT` Model/Effort Gate before material enrichment reasoning;
- reopens only affected decisions;
- preserves all unaffected valid fields.

### STRUCTURAL

Changes a material part of the conception while preserving the same fundamental objective/session.

Rules:

- consumes **1 material enrichment loop**;
- requires the `ENRICHMENT` Model/Effort Gate;
- explicitly invalidates/reopens affected state fields;
- returns to `CONCEPTION ACTIVE` until the affected decisions converge;
- readiness must be re-evaluated before another checkpoint/finalization attempt.

### SCOPE_SHIFT

The request represents a genuinely new or materially expanded objective that no longer fits safely inside the current conception.

Rules:

- do not consume another enrichment loop merely to absorb the scope shift;
- stop final consolidation;
- explain the detected scope shift;
- recommend `Nova interação`;
- do not silently stretch the existing session into a different product/objective.

## 4. Material-loop budget

A session may use at most:

```text
3 material enrichment loops
```

Only `ENRICHMENT` and `STRUCTURAL` consume this budget.

`MINOR` does not consume a loop.

`SCOPE_SHIFT` interrupts consolidation rather than consuming the budget.

The counter represents completed/entered material enrichment cycles, **not messages**. Multiple clarification messages inside one material enrichment cycle remain the same cycle until that requested delta converges or is abandoned.

## 5. Fourth material request

If `materialLoopsUsed >= 3` and the user asks for another `ENRICHMENT` or `STRUCTURAL` change, do not simply answer `limite atingido`.

Enter a non-convergence diagnosis.

The diagnosis must consider evidence for:

- `DIRECTION_NOT_CONVERGED` — the conception still has not stabilized;
- `EDITORIAL_OBJECTIVE_CHANGED` — the underlying objective has materially changed;
- `NEW_IDEA_INVALIDATES_CONSOLIDATED_AREAS` — the new request repeatedly reopens already consolidated decisions;
- `SCOPE_GREW_BEYOND_INITIAL_INTENT` — the session has expanded beyond the original objective;
- `DECISIONS_CONFLICT` — accumulated requests are materially inconsistent.

The diagnosis should identify the most supported cause(s), explain them concisely and recommend the next safe action.

When significant scope drift or objective replacement is present, recommend `Nova interação`.

If the evidence instead shows a narrow unresolved blocker, return to the specific blocker rather than pretending another full material enrichment cycle is available.

## 6. Structured persistence

Persist enrichment governance inside `conception-state.json` under an `enrichment` object:

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

A history entry may contain only material operational evidence such as:

```text
cycle
classification
affectedFields
status
createdAt
completedAt
summary
```

Do not persist hidden chain-of-thought or full transcript.

## 7. Re-evaluation rule

An enrichment response is never a raw append to the compiled prompt.

After the user provides additional information:

```text
USER DELTA
    ↓
CLASSIFY
    ↓
AFFECTED CONCEPTION FIELDS
    ↓
SELECTIVE QUESTIONS / SUGGESTIONS
    ↓
SELECTIVE STATE UPDATE / INVALIDATION
    ↓
READINESS RE-EVALUATION IF MATERIAL
```

Only the resulting structured state is later consumed by the Prompt Compiler.

## 8. Relationship with Finalization Gate

The Finalization Gate runs only after the user chooses to consolidate and after any accepted enrichment delta has converged.

A prior `CONCEPTION READY` evaluation becomes stale when enrichment invalidates a material field.

Therefore:

```text
CONCEPTION READY
→ checkpoint
→ enrichment changes material state
→ CONCEPTION ACTIVE
→ resolve affected decisions
→ CONCEPTION READY again
→ checkpoint/finalization path
```

The checkpoint and loop guardrail do not replace the Model/Effort Gate or Finalization Gate.
