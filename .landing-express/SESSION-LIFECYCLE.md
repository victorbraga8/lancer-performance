# Landing Express — Session / Interaction Lifecycle V1.3

Landing Express is an editorial/visual creation copilot whose primary product unit is the **INTERACTION / SESSION**. Gates, prompt versions, creative passes, execution records and internal checkpoints govern that interaction; they are not separate products the user must learn.

Read `PUBLIC-SURFACE.md`, `USER-LANGUAGE.md`, `GATE-RECOVERY.md`, `PROMPT-EXECUTION.md`, `COPILOT-INITIATIVE.md`, `CREATIVE-ELIGIBILITY.md`, `STYLE-INTERPRETER.md`, `STACK-AWARE-ROUTING.md`, `CONCEPTION-STATE.md`, `FINALIZATION-GATE.md` and `EXPERIENCE-QUALITY.md`.

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
CREATIVE / CINEMATIC COHERENCE
   ↓
CONCEPTION READY
   ↓
Acrescentar algo?
   ↓
USER-DRIVEN ENRICHMENT LOOP (0..3)
   ↓
PROMPT COMPILE
   ↓
PROMPT READY + EXECUTION RECOMMENDATION
   ↓
Executar prompt | Refine | Finalizar
```

Execution completion is not interaction completion. Only explicit `le-end` closes the interaction.

## 2. START is a router

`le-start` must be fast and must not force a reasoning hop for a transient routing action.

```text
le-start → Nova interação → GATE: NEW_INTERACTION
le-start → Resume → GATE: RESUME
```

## 3. Gate recovery

Every material gate must be resumable. On `UNDER_REASONING`, material `OVER_REASONING` or relevant `UNKNOWN`, persist the pending action, show the recommendation, ask the user to align configuration and send `Continuar`, detect runtime again, rerun the same pending gate and resume that action without restarting the journey.

## 4. User-facing stages

```text
EM CONCEPÇÃO
CONSOLIDANDO A DIREÇÃO
PROMPT PRONTO
EXECUTANDO O PROMPT
EXECUÇÃO CONCLUÍDA
REFINANDO O PROMPT
INTERAÇÃO CONCLUÍDA
```

## 5. NEW_INTERACTION

```text
Nova interação selected
→ MODEL / EFFORT GATE: NEW_INTERACTION
→ PASS / OVERRIDDEN
→ create Session ID + conception-state.json
→ O que você gostaria de fazer?
→ adaptive copilot
```

Do not inherit previous-session direction unless the user explicitly requests reuse.

## 6. RESUME

Recover pending gate first when one exists. Otherwise gate `RESUME` before material conception recovery. Resume from the real stage: conception, prompt ready, execution complete or completed interaction.

Do not rerun creative/cinematic passes unless a material delta invalidated them.

## 7. Copilot interpretation

Material conception follows internally:

```text
CURRENT USER INTENTION
→ EDITORIAL INTERPRETER
→ STYLE / VISUAL INTERPRETATION
→ THEMATIC / CREATIVE ELIGIBILITY
→ CREATIVE INTENSITY MAP
→ OPPORTUNITY PASS
→ CINEMATIC ENRICHMENT
→ ASSET / ATMOSPHERE / DEPTH / TYPOGRAPHY EVIDENCE
→ MOTION DRAMATURGY
→ INTERACTION OPPORTUNITY
→ RESPONSIVE CINEMATIC INTERPRETATION
→ CREATIVE HYPOTHESIS + ANTI-CLICHÉ + PRIORITIZATION
→ CINEMATIC BUDGET + INTENSITY CURVE
→ CINEMATIC CONTINUITY
→ MATERIAL USER DECISIONS
→ STACK-AWARE TECHNICAL ROUTING when material
→ MATERIAL CONCEPTION STATE UPDATE
```

Use `HIGH INITIATIVE + BOUNDED AUTHORITY`. Initiative and Reasoning Gate capability remain separate.

## 8. Creative / cinematic rules

- Style is visual grammar, not an adjective/library name.
- Preserve canonical translation: `STYLE → MECHANISM → LIBRARY → PROVIDER`.
- Context determines eligible mechanisms; category does not act as an aesthetic preset.
- `ELIGIBLE != SELECTED`.
- Specialized evidence may block an attractive mechanism before prioritization.
- Motion has narrative roles, not generic animation labels only.
- Interaction must improve discovery/understanding/impact; `NONE` is valid.
- Responsive preserves experience intent, not desktop geometry.
- Continuity uses transformed/reinterpreted motifs, not literal hero repetition.
- Intensity must alternate peak/release/recovery when multiple peaks exist.
- Inspect the actual repo before recommending a new dependency.

## 9. Structured Conception State

Canonical source:

```text
.landing-express/sessions/<session-id>/conception-state.json
```

Use existing fields only. Project Batch 4 evidence into `CINEMATIC_OPPORTUNITIES`, `MOTION`, `INTERACTIONS` and `CONSTRAINTS` as defined by `CONCEPTION-STATE.md`. Do not create a second mega-state.

## 10. Gate coverage

Recalculate before materially different actions including `NEW_INTERACTION`, `RESUME`, material user-driven `ENRICHMENT`, `PROMPT_COMPILE`, `PROMPT_EXECUTION`, `REFINE` and other materially different cognitive/execution actions.

**Recalculate always; interrupt only when a material mismatch/unknown requires intervention.**

Cinematic subpasses do not automatically create additional model/effort gates. They execute inside the current governed action unless a material mismatch requires interruption.

## 11. Conception readiness

Reach `CONCEPTION READY` only when material editorial, narrative, style, visual, technical and constraint decisions are mature and all creative/cinematic prerequisites have converged.

Readiness requires:

```text
thematic eligibility resolved / NOT_MATERIAL
creative intensity resolved
copilot-driven enrichment RESOLVED / NONE
cinematicExperienceCoherent: true
```

`cinematicExperienceCoherent` remains false while a material issue exists such as invalid mobile preservation, inaccessible pointer-only interaction, non-deterministic scroll motion, broken continuity, `UNDER_DESIGNED` intensity or `OVER_INTENSE` lack of restraint.

Then ask the defined user-driven enrichment checkpoint. `ENRICHMENT`/`STRUCTURAL` consume up to 3 material cycles; `MINOR` does not; `SCOPE_SHIFT` recommends Nova interação.

## 12. Prompt compilation

Required order:

```text
CONCEPTION READY
→ user-driven enrichment resolved
→ FINALIZATION PASS
→ MODEL / EFFORT GATE: PROMPT_COMPILE
→ compile immutable prompt-vN.md
→ analyze actual compiled prompt complexity
→ calculate PROMPT_EXECUTION recommendation
→ PROMPT READY
```

The compiler must preserve approved style, selected cinematic opportunities, responsive classifications/replacements, continuity motifs, intensity/recovery zones, motion roles, selected interaction, stack baseline and constraints without requiring conversation context.

## 13. PROMPT READY

```text
PROMPT READY

Prompt: <prompt>
Recommended execution model: <native | UNKNOWN>
Recommended execution effort: <native | UNKNOWN>

1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

Execution recommendation comes from actual prompt complexity, not from the word `execute`.

## 14. PROMPT_EXECUTION

Before mutation:

```text
prompt-vN + stored complexity
→ detect active runtime now
→ PROMPT_EXECUTION gate
→ stack/capability preflight
→ execute prompt
```

Successful execution ends at `EXECUÇÃO CONCLUÍDA → Refine | Finalizar` and never auto-calls `le-end`.

## 15. Refine

Refine remains in the same interaction. Reopen only affected decisions. If the delta materially changes territory, assets, motion, interaction, responsive intent, continuity or intensity, rerun only the affected creative/cinematic passes before producing `prompt-vN+1.md`.

## 16. Completion

Only explicit `le-end` marks `COMPLETED`. Preserve prompt versions, Conception State, Refine history, execution history/results, gate evidence and completion history.

## 17. V1.1 boundary

Do not restore Build Orchestrator, READY FOR BUILD, mandatory technical review or automatic deployment. Governed prompt execution remains an in-interaction consumer of the compiled artifact.
