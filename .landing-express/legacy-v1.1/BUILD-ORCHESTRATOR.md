# Landing Express — Build Orchestrator V1.1

The Build Orchestrator consumes the approved Direction artifacts and executes them without silently reopening creative decisions.

## Sources of truth

Read, in order:

1. `.landing-express/current.json` and the referenced session when present;
2. session `checkpoint.json` when present;
3. session `build-prompt.md`;
4. session `execution-manifest.json`;
5. session `direction.md`;
6. `.landing-express/CALIBRATION-V1.1.md`;
7. `.landing-express/CAPABILITY-CONTRACT.md`;
8. `.landing-express/MODEL-GATE.md`;
9. `.landing-express/EXECUTION-ECONOMY.md`;
10. `.landing-express/SESSION-LIFECYCLE.md`;
11. `.landing-express/RUNTIME-LIFECYCLE.md`;
12. `.landing-express/NEXT-ACTION-CONTRACT.md`;
13. repository state and existing implementation.

If there is no current approved Build Prompt, status is BLOCKED and the user should run `le-direct` first.

## Execution lifecycle

READY -> PREFLIGHT -> RUNNING -> PARTIAL or COMPLETED, with BLOCKED available at every gate.

Persist a session checkpoint at material lifecycle transitions according to `SESSION-LIFECYCLE.md`.

### 1. Build Plan

Decompose approved work into execution units:

- UI/code;
- primary/supporting/ambient motion;
- static/UI/programmatic/generated motion routes;
- generated assets;
- visual integration;
- responsive adaptation;
- Global Experience Baseline implementation;
- semantic hierarchy preservation;
- approved section enrichment;
- complexity/creativity budget enforcement;
- section transition handoffs;
- localized preserve/change boundaries.

For each unit record expected output, capability, modality, dependencies and acceptance criteria.

Also identify material economy choices: model tier, generated vs programmatic capability, expensive tool calls, high-retry routes or reusable implementation choices.

### 2. Capability Preflight

Before any mutation:

- verify coding surface and repository write access;
- inspect all tools actually available in the runtime;
- check every required capability in the execution manifest;
- mark PASS/BLOCKED/OPTIONAL;
- never represent a configured surface-tool as PASS unless the tool is really exposed now.

If Higgsfield is required and no Higgsfield tool is available, STOP as BLOCKED. Do not substitute static image, vectors, CSS or another generator unless the user explicitly overrides.

For `UI_MOTION` and `PROGRAMMATIC_MOTION`, follow `.landing-express/CAPABILITY-CONTRACT.md`: code-native motion may be fulfilled by the active coding surface when the approved stack permits the selected engine. Do not invent an external provider requirement merely because motion exists.

A BLOCKED preflight must write a checkpoint with the exact blocker, resume point and next action.

### 3. Model / Effort Gate

Recalculate the gate for **this build action** using `.landing-express/MODEL-GATE.md`.

Do not inherit the direction-phase recommendation automatically.

Report concisely:

- Action;
- Complexity;
- Recommended;
- Active when observable;
- Status: PASS / UNDER_REASONING / OVER_REASONING / UNKNOWN;
- Reason.

If the mismatch is materially under- or over-reasoned, surface it before mutation and require explicit confirmation/override when the surface permits. Log the override.

Recalculate again when execution changes materially, for example a broad build becomes a localized refine or an isolated regeneration becomes a structural repair.

### 4. Execution Economy Gate

Apply `.landing-express/EXECUTION-ECONOMY.md` before material model/capability/tool choices.

Prefer the lowest total reasonable cost that preserves the approved quality floor after considering:

- action complexity and model cost;
- tool/generation cost;
- retry risk;
- execution time;
- reuse and deterministic control;
- regression risk;
- asset destination and actual necessity.

Examples:

- do not use the highest-cost model for a LOW localized refine unless justified;
- do not downgrade a HIGH action merely to reduce nominal model cost;
- prefer CSS/JS/SVG/canvas/WebGL/Three.js or other approved programmatic capability when it provides the required result with better control/reuse and generated media adds no proportional value;
- do not replace required generated cinematic media with code-native motion if generated qualities are part of the approved contract;
- never generate an asset with no approved destination/role.

Record material `EXECUTION ECONOMY DECISION` artifacts and log when economy drove the selected model/capability route.

### 5. V1.1 Calibration enforcement

Before assembly, resolve the approved V1.1 calibration artifacts.

#### Global Experience Baseline

Implement applicable navigation current-state feedback, interaction states, affordance, safe viewport, responsive safety, legibility/contrast and minimum feedback rules. Functional controls must remain reachable and perceptible across supported breakpoints.

#### Semantic Hierarchy

Preserve the semantic role declared in the `SEMANTIC HIERARCHY MAP`. Primary narrative and primary actions/navigation must retain appropriate perceptual priority through scale, composition, spacing, contrast, grouping, motion/feedback or other approved visual-system mechanisms. Do not demote functional actions into metadata/decorative styling.

#### Section Enrichment

Follow the `SECTION ENRICHMENT MAP`. `NONE` is binding when enrichment is unnecessary. Do not add images, generated media or decorative motion by quota. When a section is approved as `SUBEXPRESSIVE`, use only the approved contextual enrichment capability or stop and request a direction change if execution cannot satisfy it.

#### Complexity / Creativity Budget

Follow the `COMPLEXITY / CREATIVITY BUDGET` for governed sections.

- preserve the declared primary focus;
- keep primary actions identifiable;
- keep supporting focal points subordinate to the main narrative/action;
- do not accumulate decorative layers or mechanics beyond the approved density merely because they are technically available;
- if the direction says `CONCEPT: STRONG / EXECUTION: OVER-COMPOSED`, simplify competing execution layers while preserving the underlying concept.

Do not reinterpret `HIGH` creative density as permission for equal-weight focal points.

#### Transition Contract

Follow the `TRANSITION MAP` for material boundaries.

- preserve CONTINUITY / CONTRAST / RESET intent;
- carry the declared narrative bridge into the next section;
- preserve visual/color/depth anchors when specified;
- release or transfer sticky, pinned, scroll-driven or other interaction states according to the approved handoff;
- do not flatten an intentional strong contrast merely to make sections look more similar;
- do not introduce unrelated section styling that creates a stacked-template effect.

#### Programmatic Motion Capability

Follow the `MOTION CAPABILITY MAP` and distinguish:

- STATIC;
- UI_MOTION;
- PROGRAMMATIC_MOTION;
- GENERATED_MOTION.

PRIMARY/SUPPORTING/AMBIENT defines motion importance; the modality above defines execution mode.

For programmatic motion, use only engines compatible with hard constraints and the approved direction, including CSS/JS/SVG/canvas/WebGL/Three.js/shaders or existing approved libraries. Do not add a dependency solely because it is fashionable.

Do not route movement to Higgsfield or another generation provider by default. Conversely, do not replace approved generated cinematic behavior with code-native motion merely because it is easier or cheaper. Modality changes require explicit approval when they materially alter the experience.

### 6. Runtime Lifecycle Gate

Apply `.landing-express/RUNTIME-LIFECYCLE.md` before commands that start persistent processes or heavy validation.

By default, DO NOT run:

- `npm run dev`;
- `npm start` / `npm run start`;
- `server`, `serve`, `preview`, `watch` or equivalent persistent commands;
- framework dev servers or persistent watchers;
- `npm run build` or equivalent heavy build validation.

A general implementation request is not authorization.

`npm run build` or equivalent may run only when the user explicitly requests it or approves a validation step that clearly states the build requirement.

If additional validation would require a server/build, tell the user concisely and leave it unexecuted unless approved.

When a persistent process is explicitly authorized, enforce:

`START -> USE -> STOP -> VERIFY TERMINATED`

Do not leave a process running after its authorized use unless the user explicitly requests that outcome. If termination cannot be verified, report it.

### 7. Asset execution

For every asset:

- obey required modality;
- obey provider/capability;
- obey shot direction;
- obey Visual Integration Contract;
- consume Generation Budget one attempt at a time;
- retry only on objective contract failure;
- log each attempt and result reference.

A static still plus vector reconstruction does not satisfy a required cinematic motion asset unless explicitly approved.

After a material asset milestone, persist a checkpoint when it changes build state or future resume behavior.

### 8. Build and assembly

Implement UI, interaction and motion according to the approved hierarchy, calibration maps and capability routes. Keep primary motion dominant while supporting/ambient motion add life without competition.

For EVOLUTION/VISUAL REFACTOR work, inspect and preserve approved existing structure. Do not rewrite sections unrelated to the approved scope.

After a material execution unit completes, update the checkpoint when its completion changes the resume point or pending list.

### 9. Preservation Contract

For localized refine/regenerate, explicitly split:

PRESERVE: approved areas that must not change.
CHANGE ONLY: exact failing areas.

Treat accidental changes outside CHANGE ONLY as regression.

Recalculate the Model/Effort Gate for the localized action. Do not carry the broader build recommendation into a small refine automatically.

### 10. Logging

Append structured events to session `events.jsonl`. Maintain `execution-plan.json` and `execution-result.json`.

Log at minimum:

- user request;
- preflight result;
- model/effort action, complexity, recommendation, active state and status;
- model/effort overrides;
- execution units;
- material Execution Economy decisions;
- calibration requirements applied;
- complexity/creativity decisions applied;
- transition handoffs applied;
- motion modality/capability route;
- tool/capability calls;
- asset attempts and retries;
- approved fallbacks/overrides;
- runtime/build authorization when applicable;
- persistent-process lifecycle START/USE/STOP/VERIFY status when applicable;
- checkpoint lifecycle changes;
- file/code changes at summary level;
- errors/blocks;
- deviations from plan;
- final execution status.

Do not log secrets, API keys or hidden chain-of-thought.

### 11. Result handoff

Apply `.landing-express/NEXT-ACTION-CONTRACT.md` to every terminal build state.

When execution finishes:

- persist final build checkpoint with phase/status, last checkpoint, resume point, pending, last activity, `currentState`, `nextAction`, reason and blocker when applicable;
- summarize only what changed, capabilities actually used, V1.1 calibration coverage, motion modalities used, economy-driven decisions, deviations, asset budget usage and known unresolved items;
- if ready for review, output `Current state: READY FOR REVIEW` and `Next action: le-review` or the active-surface equivalent;
- if PARTIAL/BLOCKED, name the exact blocker and use `le-resume` as the next action when checkpointed;
- never end with an ambiguous “done” or an unnamed next step.

## Refine and regenerate modes

If the current review says REFINE, execute only the generated Refinement/Preservation Contract and recalculate model/effort for `localized-refine`.
If it says REGENERATE, regenerate only the failing asset(s), respecting remaining budget, then reintegrate them without redesigning approved UI; recalculate model/effort for `asset-regenerate`.
If it says REDO, do not keep refining; return to `le-direct` to reopen direction.

All modes obey Execution Economy, Session Lifecycle, Runtime Lifecycle and Next Action policies.
