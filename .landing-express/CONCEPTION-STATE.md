# Landing Express — Conception State V1.3

The copilot maintains one structured conception state. The prompt is compiled from this state after readiness/finalization; raw transcript remains evidence only.

Canonical file:

```text
.landing-express/sessions/<session-id>/conception-state.json
```

## 1. State fields

Use when applicable:

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

`THREE_D` describes approved spatial/3D intent without forcing a library before stack-aware routing justifies one.

## 2. STYLE

`STYLE` is visual grammar, not an adjective/library. Prefer structured material decisions such as:

```json
{
  "summary": "tecnológico preciso e contido",
  "typography": "large-scale, high clarity",
  "composition": "low-density, product anchored",
  "density": "controlled",
  "colorLuminance": "dark base, localized luminance",
  "surfacesMateriality": "mostly opaque, selective depth",
  "imagery": "product-led",
  "depth": "concentrated on primary object",
  "motionCharacter": "technical and controlled",
  "interactionCharacter": "responsive, non-decorative",
  "rhythmWhitespace": "generous recovery between peaks"
}
```

Populate only what materially affects the current conception.

## 3. Creative governance

V1.3 keeps initiative/elegibility/intensity/enrichment metadata inside the same state instead of creating a second mega-state:

```json
{
  "creativeGovernance": {
    "initiative": {
      "mode": "HIGH_INITIATIVE_BOUNDED_AUTHORITY",
      "authorityLevels": ["AUTO", "RECOMMEND", "COMPARE", "ASK"]
    },
    "thematicEligibility": {
      "status": "PENDING",
      "territory": null,
      "emotionalField": null,
      "culturalVisualTerritory": null,
      "desiredIntensity": null,
      "materiality": null,
      "typographyCharacter": null,
      "atmosphereEligibility": [],
      "motionCharacter": null,
      "spatialCharacter": null,
      "interactionCharacter": null
    },
    "intensityMap": {
      "status": "PENDING",
      "diagnosis": null,
      "dimensions": {
        "visual": null,
        "motion": null,
        "atmospheric": null,
        "typographicTension": null,
        "spatial": null,
        "interaction": null
      }
    },
    "copilotEnrichment": {
      "status": "PENDING",
      "passCount": 0,
      "opportunitiesConsidered": 0,
      "selectedCount": 0,
      "responsiveReviewed": false,
      "considered": [],
      "selected": [],
      "summary": null
    }
  }
}
```

`opportunitiesConsidered`, `selectedCount` and `responsiveReviewed` are compact operational metadata, not a new state machine. Counts are derived from the compact considered/selected decisions and must never expand into speculative option dumps.

Persist only approved operational decisions and compact rationale needed for continuity/execution. Never persist hidden chain-of-thought.

Before `CONCEPTION READY`, thematic eligibility must be resolved (or explicitly non-material), creative intensity must be resolved and copilot-driven enrichment must converge to `RESOLVED` or `NONE`.

## 4. Cinematic experience evidence

Do not create a parallel state for cinematic enrichment. Reuse existing fields:

```text
STYLE
  → typography / density / materiality / rhythm

CINEMATIC_OPPORTUNITIES
  → selected cinematic opportunities
  → asset usage / affordance evidence
  → atmosphere / spatial opportunities
  → responsive interpretation (PRESERVE/ADAPT/REFLOW/REDESIGN/REPLACE/HIDE)
  → cinematic continuity motifs/transitions
  → desktop/mobile intensity curve
  → cinematic budget / generated-media replacement evidence

MOTION
  → material motion dramaturgy
  → reversibility/determinism when scroll-driven
  → mobile/reduced-motion behavior

THREE_D
  → approved spatial/programmatic 3D intent

INTERACTIONS
  → meaningful interaction
  → touch/mobile equivalent
  → accessibility behavior

SECTIONS
  → section-level narrative/enrichment decisions

TECHNICAL_REQUIREMENTS
  → factual stack baseline / approved routing / dependencies

CONSTRAINTS
  → responsive / performance / accessibility hard requirements
```

Persist compact selected evidence, not every candidate considered.

## 5. TECHNICAL_REQUIREMENTS

When technical routing is material, this field may include factual repository and approved routing information, for example:

```json
{
  "stackBaseline": ["Next.js", "Tailwind", "Motion"],
  "approvedDependencies": ["@react-three/fiber"],
  "avoidDependencies": ["unnecessary duplicate motion engine"],
  "implementationNotes": ["reuse existing Motion for UI feedback"],
  "cinematicRouting": {
    "routes": [],
    "approvedDependencies": []
  }
}
```

Inspect the actual repo before recording a new dependency as approved. Read `STACK-AWARE-ROUTING.md`.

## 6. User-driven enrichment governance

The existing user enrichment budget remains separate:

```json
{
  "enrichment": {
    "maxMaterialLoops": 3,
    "materialLoopsUsed": 0,
    "activeCycle": null,
    "history": [],
    "lastClassification": null,
    "diagnosis": null
  }
}
```

Only user-driven `ENRICHMENT`/`STRUCTURAL` requests consume material loops; `MINOR` does not; `SCOPE_SHIFT` interrupts consolidation.

Copilot-driven enrichment is recorded under `creativeGovernance.copilotEnrichment` and never consumes this `0..3` user budget.

## 7. Creative critique persistence

`Critique-before-ready` is an evaluation, not another persistent mega-state.

Persist only a compact material decision if a finding changes the conception. The corrected decision belongs in the affected canonical field (`STYLE`, `MOTION`, `CINEMATIC_OPPORTUNITIES`, etc.). Readiness may retain compact critique status/blockers as evidence, but do not persist the full internal review process.

## 8. Material update / invalidation

Update only materially changed fields. Invalidate only affected fields. Preserve unrelated approved state.

If a later user change materially alters creative territory, intensity, responsive intent, continuity or cinematic opportunity, reopen only affected decisions and rerun the relevant passes once after they converge. Do not loop autonomously.

## 9. Open decisions

`OPEN_DECISIONS` contains only unresolved decisions capable of materially changing the compiled prompt. Remove when resolved or explicitly accept as intentionally open.

## 10. Resume

Resume recovers existing state, creative governance and user enrichment metadata. It must project the current interaction stage rather than always reopening conception. If already PROMPT READY or EXECUTION COMPLETE, follow the corresponding post-prompt/post-execution decision.

## 11. Execution boundary

Execution is not Conception State. Keep runtime implementation evidence separately in:

```text
execution-current.json
execution-history.json
```

Execution results may become evidence for a later Refine, but they do not silently rewrite approved conception.

## 12. Compilation

```text
CONCEPTION STATE
→ creative governance readiness
→ cinematic experience coherence
→ critique-before-ready
→ conception readiness
→ user-driven enrichment/finalization
→ PROMPT_COMPILE gate
→ prompt-vN.md
→ complexity-derived PROMPT_EXECUTION recommendation
```

The final prompt includes only current approved context needed by the executor.
