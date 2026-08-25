# Landing Express — Finalization Gate V1.2

The Finalization Gate determines whether the current conception may enter prompt compilation **after** the optional enrichment checkpoint has been resolved.

It is **not** the Model/Effort Gate and it is **not** the initial readiness evaluation.

- Readiness asks: `a concepção atingiu CONCEPTION READY?`
- Enrichment Checkpoint asks: `o usuário quer acrescentar algo antes de consolidar?`
- Finalization Gate asks: `a concepção pronta, já após o checkpoint/enrichment, pode ser consolidada agora?`
- Model/Effort Gate asks: `o runtime atual está adequadamente calibrado para executar PROMPT_COMPILE?`

These stages must remain separate.

## 1. Explicit readiness state

A conception may reach the explicit state:

```text
CONCEPTION READY
```

Do not infer readiness because the user stopped responding, because many fields are populated, or because the conversation became long.

Readiness must be evaluated materially before the Enrichment Checkpoint.

## 2. Required readiness checks

Before `CONCEPTION READY`, validate when applicable:

- objective/intention is clear;
- editorial direction is coherent;
- narrative is defined;
- Web Premium / Web Cinematic baseline is satisfied;
- cinematic opportunities have been deliberately evaluated, including the decision to avoid them when appropriate;
- technical/visual mechanisms have been evaluated sufficiently for the executor;
- constraints are known, including an explicit `none known` when appropriate;
- material contradictions are resolved or explicitly overridden;
- material open decisions are resolved or explicitly accepted as intentionally open;
- no affected Conception State field remains invalidated.

Do not require irrelevant detail merely to satisfy a checklist.

## 3. Readiness evidence model

Use `CONCEPTION-STATE.md` as the structured source of truth and record compact readiness evidence such as:

```text
editorialCoherent: true | false
premiumBaselineSatisfied: true | false
cinematicOpportunitiesEvaluated: true | false
technologiesEvaluated: true | false
constraintsKnown: true | false
contradictionsResolved: true | false
```

This evidence is a material conclusion, not hidden chain-of-thought.

## 4. Enrichment checkpoint position

After readiness passes, do **not** run Finalization Gate immediately.

Read `ENRICHMENT-CHECKPOINT.md` and ask the required checkpoint:

```text
A direção já está consistente e pronta para ser transformada em prompt.
Quer acrescentar algo antes de eu consolidar?

1. Sim, quero acrescentar algo
2. Não, pode consolidar
```

If the user chooses `Sim`, handle the delta through the governed enrichment flow. If a material field is invalidated, return to `CONCEPTION ACTIVE`, resolve only affected decisions and re-evaluate readiness.

If the user chooses `Não`, or an accepted enrichment cycle converges and the user then chooses to consolidate, record:

```text
enrichmentCheckpointResolved: true
```

Only then may Finalization Gate run.

## 5. Finalization blocking behavior

Finalization Gate is `BLOCKED` when any material condition remains, including:

- readiness is no longer true;
- the Enrichment Checkpoint has not been resolved in favor of consolidation;
- a material enrichment cycle is still active;
- enrichment diagnosis/scope shift has blocked consolidation;
- material open decisions or invalidated fields remain unresolved.

Example:

```text
Finalization Gate: BLOCKED
Conception state: CONCEPTION READY
Blocker: enrichmentCheckpointResolved
Next: resolve enrichment checkpoint
```

or:

```text
Finalization Gate: BLOCKED
Conception state: CONCEPTION ACTIVE
Next: continue copilot on affected blockers
```

Do not compile a provisional final prompt merely because the user seems finished.

## 6. Passing behavior

If readiness is valid, the checkpoint is resolved for consolidation and no material enrichment cycle/blocker remains:

```text
Finalization Gate: PASS
Conception state: CONCEPTION READY
```

Compilation is still **not yet authorized**.

The mandatory sequence is:

```text
CONCEPTION READY
    ↓
ENRICHMENT CHECKPOINT resolved
    ↓
FINALIZATION GATE PASS
    ↓
MODEL / EFFORT GATE: PROMPT_COMPILE
    ↓
PASS / OVERRIDDEN
    ↓
PROMPT COMPILE
```

A Finalization Gate PASS never overrides a blocked Model/Effort Gate.

## 7. Open decisions

A material open decision blocks readiness/finalization unless the user explicitly accepts that it may remain open for the executor.

Accepted open decisions must be recorded so the compiler can preserve the ambiguity intentionally instead of inventing an answer.

## 8. Contradictions

Material contradictions must be resolved before readiness unless the user explicitly chooses a side or accepts the conflict as intentional.

Do not hide contradiction resolution inside prompt compilation.

## 9. Cinematic evaluation

`cinematicOpportunitiesEvaluated: true` does not mean generated media or 3D is required.

It means the copilot deliberately considered whether cinematic treatment materially improves the experience and recorded the selected/avoided direction.

A restrained landing can still satisfy the Web Premium baseline.

## 10. Relationship with enrichment

If enrichment changes a material field:

1. update/invalidate only affected Conception State fields;
2. return to `CONCEPTION ACTIVE` when necessary;
3. resolve the affected delta through the copilot;
4. re-run readiness;
5. repeat the checkpoint/finalization path according to `ENRICHMENT-CHECKPOINT.md`.

A previous readiness/finalization result becomes stale after a material state change.

## 11. Persistence

Persist only:

- readiness result/checks;
- enrichment checkpoint resolution status;
- finalization status;
- blockers;
- explicitly accepted open decisions/overrides;
- resulting conception state.

Do not persist hidden chain-of-thought.
