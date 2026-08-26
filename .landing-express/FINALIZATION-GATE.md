# Landing Express — Finalization Gate V1.3

The Finalization Gate determines whether the current conception may enter prompt compilation **after** creative governance, cinematic experience coherence, creative-director critique, readiness and the user-driven enrichment checkpoint have been resolved.

It is **not** the Model/Effort Gate and it is **not** the initial readiness evaluation.

- Creative Governance asks: `território, intensidade e copilot-driven enrichment convergiram?`
- Cinematic Experience asks: `motion/interação/responsive/continuidade/curva de intensidade estão coerentes quando materiais?`
- Critique-before-ready asks: `o que um diretor de criação ainda questionaria ou elevaria?`
- Readiness asks: `a concepção atingiu CONCEPTION READY?`
- User-driven Enrichment Checkpoint asks: `o usuário quer acrescentar algo antes de consolidar?`
- Finalization Gate asks: `a concepção pronta pode ser consolidada agora?`
- Model/Effort Gate asks: `o runtime atual está adequadamente calibrado para PROMPT_COMPILE?`

These stages must remain separate.

## 1. Explicit readiness state

A conception may reach `CONCEPTION READY` only after the material creative critique converges. Do not infer readiness because the user stopped responding, because many fields are populated, or because the conversation became long.

## 2. Required readiness checks

Before `CONCEPTION READY`, validate when applicable:

- objective/intention is clear;
- editorial direction is coherent;
- narrative is defined;
- Web Premium / Web Cinematic baseline is satisfied;
- `THEMATIC / CREATIVE ELIGIBILITY` is resolved or explicitly `NOT_MATERIAL`;
- `CREATIVE INTENSITY MAP` is resolved;
- `COPILOT-DRIVEN ENRICHMENT` converged to `RESOLVED` or `NONE`;
- cinematic experience coherence is resolved;
- `CRITIQUE-BEFORE-READY` is `RESOLVED` or `NONE`;
- cinematic opportunities have been deliberately evaluated;
- technical/visual mechanisms have been evaluated sufficiently for the executor;
- constraints are known;
- material contradictions are resolved or explicitly overridden;
- material open decisions are resolved or explicitly accepted;
- no affected Conception State field remains invalidated.

Do not require irrelevant detail merely to satisfy a checklist.

## 3. Creative / cinematic order

```text
EDITORIAL / STYLE / VISUAL INTERPRETATION
    ↓
THEMATIC / CREATIVE ELIGIBILITY
    ↓
CREATIVE INTENSITY MAP
    ↓
OPPORTUNITY + SPECIALIZED CINEMATIC PASSES
    ↓
MOTION / INTERACTION / RESPONSIVE REVIEW
    ↓
CINEMATIC BUDGET / CONTINUITY / INTENSITY CURVE
    ↓
COPILOT-DRIVEN ENRICHMENT CONVERGED
    ↓
CRITIQUE-BEFORE-READY
    ↓
MATERIAL USER DECISIONS when critique exposes a material issue
    ↓
CONCEPTION READINESS
```

The internal copilot-driven pass and critique do not consume the user's enrichment 0..3 budget.

## 4. Critique-before-ready

Internal question:

> `Se um diretor de criação revisasse esta proposta antes da execução, o que ainda questionaria ou elevaria?`

Check at least, when material:

```text
insufficient impact
asset underutilized
atmosphere missing when required
typography weak against asset/composition
motion functional but under-expressive
spatiality insufficient
overcomposition / lack of restraint
desktop geometry incorrectly preserved on mobile
material technical opportunity ignored
```

Only material findings may be surfaced to the user. Do not dump the internal checklist or hidden reasoning.

A material unresolved critique finding blocks readiness. A clean critique returns `NONE`; resolved findings return `RESOLVED`.

## 5. Readiness evidence model

Use compact evidence such as:

```text
editorialCoherent: true | false
premiumBaselineSatisfied: true | false
cinematicExperienceCoherent: true | false
creativeDirectorCritique: NONE | RESOLVED | BLOCKED
cinematicOpportunitiesEvaluated: true | false
technologiesEvaluated: true | false
constraintsKnown: true | false
contradictionsResolved: true | false
```

Creative eligibility/intensity/copilot enrichment readiness is read from `creativeGovernance`, not duplicated as hidden reasoning.

## 6. User-driven enrichment checkpoint

After readiness passes, ask:

```text
A direção já está consistente e pronta para ser transformada em prompt.
Quer acrescentar algo antes de eu consolidar?

1. Sim, quero acrescentar algo
2. Não, pode consolidar
```

If `Sim`, handle the delta through user-driven governed enrichment. If it invalidates territory/intensity/responsive intent/continuity or cinematic opportunities, reopen only affected decisions and rerun the relevant pass plus critique before readiness.

If `Não`, or an accepted delta converges and the user then chooses consolidation, record `enrichmentCheckpointResolved: true`.

## 7. Finalization blocking behavior

Finalization Gate is `BLOCKED` when any material condition remains, including:

- creative eligibility unresolved;
- creative intensity unresolved;
- copilot-driven enrichment pending;
- `cinematicExperienceCoherent != true`;
- creative critique `BLOCKED` or missing;
- readiness no longer true;
- user-driven checkpoint not resolved;
- a material user enrichment cycle active;
- scope-shift/consolidation blocker;
- material open decisions or invalidated fields unresolved.

Do not compile a provisional final prompt merely because the user seems finished.

## 8. Passing behavior

If readiness is valid, cinematic experience and critique are coherent, the user checkpoint is resolved and no blocker remains:

```text
Finalization Gate: PASS
Conception state: CONCEPTION READY
```

Compilation is still not authorized until the independent `PROMPT_COMPILE` Model/Effort Gate passes or is overridden.

## 9. Cinematic evaluation

`cinematicOpportunitiesEvaluated: true` does not mean generated media, animation, interaction or 3D is required. `NONE` remains valid when restraint is the stronger direction.

A restrained landing can still satisfy the Web Premium baseline.

## 10. Persistence

Persist only readiness/finalization results, compact critique status/material decisions, blockers, accepted decisions/overrides, resulting Conception State and compact creative/cinematic evidence. Do not persist hidden chain-of-thought.
