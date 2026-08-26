# Model / Effort Gate — V1.3

The Model/Effort Gate prevents both under-reasoning and unnecessary over-reasoning for the **material action that is about to run**.

Read `RUNTIME-IDENTITY.md`, `REASONING-ADAPTER.md`, `reasoning-adapter.json`, `COPILOT-INITIATIVE.md`, `CREATIVE-ELIGIBILITY.md` and `GATE-RECOVERY.md`.

## 1. START boundary

`le-start` is a fast router. It detects runtime/session metadata and asks `Resume | Nova interação`, but it does not force the user to optimize model/effort for the transient START step.

The first user-blocking hard gate belongs to the selected material route:

```text
le-start → Nova interação → GATE: NEW_INTERACTION
le-start → Resume → GATE: RESUME
```

The adapter may retain a `START` diagnostic baseline as `ROUTER_ONLY`; it is not an enforced user gate.

## 2. Runtime observation

Before each material gate, detect the active configuration **at that moment**.

Observation precedence:

1. active surface/session value explicitly exposed by the runtime;
2. exact current-turn runtime record;
3. explicit session/environment evidence;
4. configuration only as fallback context when authoritative;
5. explicit user statement when runtime evidence is unavailable;
6. `UNKNOWN` only for the unresolved field.

Never let stale configuration override stronger current runtime evidence.

## 3. Independent material actions

At minimum govern:

- `NEW_INTERACTION`;
- `RESUME`;
- material user-driven `ENRICHMENT`;
- `PROMPT_COMPILE`;
- `PROMPT_EXECUTION`;
- `REFINE`;
- another materially different action when genuinely needed.

A PASS/override never authorizes a later material action.

## 4. Cinematic Enrichment policy

`CINEMATIC_ENRICHMENT` is **not** a separate user-facing hard gate in V1.3.

It runs as a governed subaction inside the current material parent action:

```text
NEW_INTERACTION
RESUME
ENRICHMENT
REFINE
```

Policy:

```text
cinematic subpass
→ evaluate real cinematic complexity
→ if no material delta: remain under active parent gate
→ if material complexity changed: recalculate the parent action profile
→ interrupt only when resulting mismatch / UNKNOWN is material
```

Do not create a new gate merely because a cinematic mechanism exists.

High initiative does not raise model/effort by itself:

```text
Copilot Initiative != Reasoning Capability
```

`HIGH INITIATIVE + BOUNDED AUTHORITY` determines how proactively opportunities are sought. Model/effort is determined by actual ambiguity, novelty, risk, specification strength, creative/editorial demand and context breadth.

## 5. Gate fatigue prevention

Avoid repeated interruptions during one coherent creative pass.

Recalculate internally whenever useful, but show/block only when:

- the active runtime becomes materially insufficient;
- the active runtime is materially excessive and wasteful;
- required runtime evidence is `UNKNOWN`;
- the task changed enough to become a new material action.

A motion/atmosphere/typography/spatial subpass does not independently earn a gate.

## 6. Prompt execution

`PROMPT_EXECUTION` is special: its recommendation comes from the complexity of the **actual compiled prompt**.

Do not assign a fixed maximum model to execution. The baseline starts low and rises only when prompt breadth, ambiguity, risk, 3D/motion/interaction/integration complexity or related execution evidence justifies it.

> **Execution complexity raises model/effort. The word “execute” does not.**

## 7. Native resolution

Resolve abstract capability/effort through the centralized adapter. Preserve exact native names. Do not invent selectors or generic substitutes when an actionable native name is available.

## 8. Statuses

- `PASS`: aligned;
- `UNDER_REASONING`: active model/effort materially below requirement;
- `OVER_REASONING`: active model/effort materially above requirement without justification;
- `UNKNOWN`: required evidence cannot be resolved;
- `OVERRIDDEN`: explicit action-scoped override.

Do not flag microscopic differences. Flag differences that materially affect quality, cost or retry risk.

## 9. Output

When a gate must be shown:

```text
Action: <action>
Required / Recommended model: <native | UNKNOWN>
Required / Recommended effort: <native | UNKNOWN>
Active model: <native | UNKNOWN>
Active effort: <native | UNKNOWN>
Status: PASS | UNDER_REASONING | OVER_REASONING | UNKNOWN | OVERRIDDEN
Reason: <concise reason>
```

A PASS that requires no intervention may remain silent/concise. A blocked gate must include recovery instructions.

## 10. HARD GATE + recovery

For `UNDER_REASONING`, material `OVER_REASONING` or relevant `UNKNOWN`:

1. stop before the material action;
2. persist `pending-gate.json` with the action and compact evidence;
3. show target configuration;
4. ask the user to align it and send `Continuar`;
5. detect runtime identity again;
6. rerun the same pending action gate;
7. on PASS/override, clear pending state and continue without restarting the journey.

Override is valid only for the pending action.

## 11. Persistence

Persist compact gate evidence only:

- action;
- profile/dimensions;
- recommended model/effort;
- active model/effort and evidence source;
- status/reason;
- override when present;
- mapping/floor validation status.

For cinematic subpasses, persist only compact policy/result needed for continuity (`ownGate: false`, parent action, whether recalculation was required). Never persist hidden chain-of-thought.

## 12. Economy

The target is the lowest sufficient configuration after accounting for quality, retries, ambiguity, breadth and risk. Neither cheapest-at-all-costs nor strongest-by-default is valid governance.
