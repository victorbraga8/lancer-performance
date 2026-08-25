# Landing Express — Conception State V1.2

The copilot maintains a structured conception state. The prompt is compiled from this state after readiness/finalization; raw transcript remains evidence only.

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

## 3. TECHNICAL_REQUIREMENTS

When technical routing is material, this field may include factual repository and approved routing information, for example:

```json
{
  "stackBaseline": ["Next.js", "Tailwind", "Motion"],
  "approvedDependencies": ["@react-three/fiber"],
  "avoidDependencies": ["unnecessary duplicate motion engine"],
  "implementationNotes": ["reuse existing Motion for UI feedback"]
}
```

Inspect the actual repo before recording a new dependency as approved. Read `STACK-AWARE-ROUTING.md`.

## 4. Enrichment governance

Keep compact enrichment metadata under the same state:

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

Only ENRICHMENT/STRUCTURAL consume material loops; MINOR does not; SCOPE_SHIFT interrupts consolidation.

## 5. Material update / invalidation

Update only materially changed fields. Invalidate only affected fields. Preserve unrelated approved state. Do not persist speculative option dumps or hidden chain-of-thought.

## 6. Open decisions

`OPEN_DECISIONS` contains only unresolved decisions capable of materially changing the compiled prompt. Remove when resolved or explicitly accept as intentionally open.

## 7. Resume

Resume recovers existing state and enrichment metadata. It must project the current interaction stage rather than always reopening conception. If the current state is already PROMPT READY or EXECUTION COMPLETE, follow the corresponding post-prompt/post-execution decision instead.

## 8. Execution boundary

Execution is not Conception State.

Keep runtime implementation evidence separately in:

```text
execution-current.json
execution-history.json
```

Execution results may become evidence for a later Refine, but they do not silently rewrite approved conception.

## 9. Compilation

```text
CONCEPTION STATE
→ readiness
→ enrichment/finalization
→ PROMPT_COMPILE gate
→ prompt-vN.md
→ complexity-derived PROMPT_EXECUTION recommendation
```

The final prompt includes only current approved context needed by the executor.
