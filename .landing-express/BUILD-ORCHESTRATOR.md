# Landing Express — Build Orchestrator V1

The Build Orchestrator consumes the approved Direction artifacts and executes them without silently reopening creative decisions.

## Sources of truth

Read, in order:

1. `.landing-express/current.json` and the referenced session when present;
2. session `build-prompt.md`;
3. session `execution-manifest.json`;
4. session `direction.md`;
5. `.landing-express/CAPABILITY-CONTRACT.md`;
6. `.landing-express/MODEL-GATE.md`;
7. repository state and existing implementation.

If there is no current approved Build Prompt, status is BLOCKED and the user should run `le-direct` first.

## Execution lifecycle

READY -> PREFLIGHT -> RUNNING -> PARTIAL or COMPLETED, with BLOCKED available at every gate.

### 1. Build Plan

Decompose approved work into execution units:

- UI/code;
- primary/supporting/ambient motion;
- generated assets;
- visual integration;
- responsive adaptation;
- localized preserve/change boundaries.

For each unit record expected output, capability, modality, dependencies and acceptance criteria.

### 2. Capability Preflight

Before any mutation:

- verify coding surface and repository write access;
- inspect all tools actually available in the runtime;
- check every required capability in the execution manifest;
- mark PASS/BLOCKED/OPTIONAL;
- never represent a configured surface-tool as PASS unless the tool is really exposed now.

If Higgsfield is required and no Higgsfield tool is available, STOP as BLOCKED. Do not substitute static image, vectors, CSS or another generator unless the user explicitly overrides.

### 3. Model / Effort Gate

Resolve the recommendation from `MODEL-GATE.md`, report active state if visible, and surface mismatch before expensive work. Continue when policy/user permits.

### 4. Asset execution

For every asset:

- obey required modality;
- obey provider/capability;
- obey shot direction;
- obey Visual Integration Contract;
- consume Generation Budget one attempt at a time;
- retry only on objective contract failure;
- log each attempt and result reference.

A static still plus vector reconstruction does not satisfy a required cinematic motion asset unless explicitly approved.

### 5. Build and assembly

Implement UI, interaction and motion according to the approved hierarchy. Keep primary motion dominant while supporting/ambient motion add life without competition.

For EVOLUTION/VISUAL REFACTOR work, inspect and preserve approved existing structure. Do not rewrite sections unrelated to the approved scope.

### 6. Preservation Contract

For localized refine/regenerate, explicitly split:

PRESERVE: approved areas that must not change.
CHANGE ONLY: exact failing areas.

Treat accidental changes outside CHANGE ONLY as regression.

### 7. Logging

Append structured events to session `events.jsonl`. Maintain `execution-plan.json` and `execution-result.json`.

Log at minimum:

- user request;
- preflight result;
- model/effort recommendation and active state;
- execution units;
- tool/capability calls;
- asset attempts and retries;
- approved fallbacks/overrides;
- file/code changes at summary level;
- errors/blocks;
- deviations from plan;
- final execution status.

Do not log secrets, API keys or hidden chain-of-thought.

### 8. Result handoff

When execution finishes, summarize only what changed, capabilities actually used, deviations, asset budget usage and known unresolved items. Then recommend `le-review`.

## Refine and regenerate modes

If the current review says REFINE, execute only the generated Refinement/Preservation Contract.
If it says REGENERATE, regenerate only the failing asset(s), respecting remaining budget, then reintegrate them without redesigning approved UI.
If it says REDO, do not keep refining; return to `le-direct` to reopen direction.
