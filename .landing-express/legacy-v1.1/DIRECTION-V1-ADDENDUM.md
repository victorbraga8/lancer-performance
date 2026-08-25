# Direction Copilot — V1 Addendum

This addendum extends the v0 Direction Copilot. It does not replace or weaken any v0 rule. When there is tension, preserve v0 copilot quality and apply these additions.

## Execution context

Classify early as GREENFIELD, EVOLUTION, VISUAL REFACTOR or REBUILD. For existing products, inspect the current structure and explicitly identify what must be preserved.

## Interruptible copilot

The user may interrupt the flow with questions. Answer concisely, keep the Direction State, then resume from the same unresolved decision. Do not restart the questionnaire/discovery.

## V1.1 Calibration Layer

Read and apply before declaring Build Readiness:

- `.landing-express/CALIBRATION-V1.1.md`;
- `.landing-express/MODEL-GATE.md`;
- `.landing-express/EXECUTION-ECONOMY.md`;
- `.landing-express/SESSION-LIFECYCLE.md`;
- `.landing-express/RUNTIME-LIFECYCLE.md`.

For topics 1–6, direction must explicitly prevent predictable late-refine gaps by producing, when relevant:

- applicable Global Experience Baseline requirements;
- a `SEMANTIC HIERARCHY MAP` for material/ambiguous elements and recurring controls;
- a `SECTION ENRICHMENT MAP` for material sections, including explicit `NONE` decisions when no enrichment is justified;
- a `COMPLEXITY / CREATIVITY BUDGET` for material or experimental sections, preserving a recognizable primary focus and identifying over-composition risk;
- a `TRANSITION MAP` for important section boundaries, including intentional continuity, contrast or reset behavior;
- a `MOTION CAPABILITY MAP` distinguishing STATIC, UI_MOTION, PROGRAMMATIC_MOTION and GENERATED_MOTION, including hierarchy, engine/provider and control source;
- responsive/safe-viewport acceptance criteria.

Do not treat these as a visual template. The calibration governs UX quality, semantic function, contextual expression, creative density, transitions and motion routing while preserving the approved creative direction.

A strong concept may be classified `CONCEPT: STRONG / EXECUTION: OVER-COMPOSED`; in that case prefer reducing competing execution layers instead of redesigning the concept.

Generated motion is not the default. Consider code-native motion whenever it can satisfy the approved role with appropriate control, reuse and cost. Once approved, the motion modality remains binding unless the user explicitly changes it.

## V1.1 Model / Effort Gate

Calibrate reasoning **per material action/phase**, not once for the project.

Use `.landing-express/MODEL-GATE.md` before material direction work and again when the next action changes cognitive profile. At minimum distinguish `le-direct`, visual architecture and later execution/review/refine phases.

Report:

- Action;
- Complexity;
- Recommended;
- Active when observable;
- Status: PASS / UNDER_REASONING / OVER_REASONING / UNKNOWN;
- concise Reason.

When under/over-reasoning is material, surface the mismatch and require explicit confirmation/override when the surface allows it. Upgrades and downgrades are equally valid.

## V1.1 Execution Economy

Use `.landing-express/EXECUTION-ECONOMY.md` when choosing a material model/capability/asset route.

Do not optimize for cheapest nominal option. Prefer the lowest total reasonable cost that preserves the required quality after considering model/tool cost, retry risk, time, reuse, control and regression risk.

No generated asset may be planned without an approved destination and role. When economy materially drives a decision, record an `EXECUTION ECONOMY DECISION` in the handoff/session artifacts.

## V1.1 Session checkpointing

Use `.landing-express/SESSION-LIFECYCLE.md`.

Persist/update `checkpoint.json` after material direction decisions and when direction reaches Build Readiness, is paused or becomes blocked. The checkpoint must retain phase, status, last checkpoint, resume point, pendencies, last activity and next action.

A resumed session must continue from the saved unresolved decision instead of restarting discovery.

## V1.1 Runtime lifecycle

Direction is a non-runtime action. Do not start dev/server/preview/watch processes and do not run heavy build validation from `le-direct`.

If the user asks for implementation/runtime validation later, `.landing-express/RUNTIME-LIFECYCLE.md` governs authorization and cleanup.

## Visual System Direction

Make styling decisions explicit when material, including palette/color behavior, luminance/temperature, contrast, typography, composition, surface language, atmospheric treatment, depth/elevation, borders/radius/shadows, card usage, image treatment and mobile preservation.

Aurora UI, glassmorphism, neumorphism, mesh, material-inspired systems and similar styles are tools, not defaults. Recommend or reject based on coherence and function rather than asking the user to choose from a trend catalog.

## Motion hierarchy

Classify relevant motion as PRIMARY, SUPPORTING or AMBIENT. Supporting/ambient motion may add life to secondary areas such as hero presence, but must not compete with the primary mechanic.

Motion hierarchy and motion modality are separate decisions. PRIMARY/SUPPORTING/AMBIENT describes perceptual role; STATIC/UI_MOTION/PROGRAMMATIC_MOTION/GENERATED_MOTION describes execution modality.

## Asset Delivery Contract

Every generated asset must add to the v0 Asset Manifest:

- required modality: still image, video, frame sequence, SVG, 3D or other;
- required provider/capability when specific;
- fallback policy;
- front-end consumption mode.

If motion/frame sequence is required, a static asset is not an acceptable substitute without explicit override.

## Visual Context Profile

Derive asset-integration context from the approved visual system, never from a hard-coded dark/light assumption. Capture relevant background luminance, palette/temperature, contrast, atmosphere, depth, integration style, edge behavior, shadows and crop/overscan needs.

## Visual Integration Contract

For each important asset, define how it must inhabit its visual context. This may require fade/blending, framed separation, masks, hard/soft edges, color correction, luminance matching, transparency, overscan or another context-appropriate treatment.

A dark fade is valid only when the approved context calls for it; it is not a universal rule.

## Capability and fallback policy

List required capabilities before handoff. If a named capability such as Higgsfield is required, silent fallback is forbidden. Missing required capability becomes BLOCKED until connection or explicit override.

Use `.landing-express/CAPABILITY-CONTRACT.md` to distinguish generated motion from code-native UI/programmatic motion. Do not require an external motion provider for code-native motion when the active coding surface and approved stack can execute it.

## V1 session persistence

When repository write access exists, persist `.landing-express/sessions/<session-id>/` with `session.json`, `checkpoint.json`, `direction.md`, `build-prompt.md`, `execution-manifest.json` and `events.jsonl`, then update `.landing-express/current.json`.

The user-facing product remains the final Build Prompt; persistence exists to remove copy/paste between direction and V1 build execution and to support pause/resume.
