# Model / Effort Gate — V1.2

The Model/Effort Gate prevents both under-reasoning and unnecessary over-reasoning for the **material action that is about to run**.

Read `RUNTIME-IDENTITY.md`, `REASONING-ADAPTER.md`, `reasoning-adapter.json` and `GATE-RECOVERY.md`.

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
4. configuration only as fallback context when the runtime semantics make it authoritative;
5. explicit user statement when runtime evidence is unavailable;
6. `UNKNOWN` only for the unresolved field.

For Codex, prefer active thread/turn evidence over config. Never let a configured Terra override an active Sol turn, for example.

## 3. Independent actions

At minimum govern:

- `NEW_INTERACTION`;
- `RESUME`;
- material `ENRICHMENT`;
- `PROMPT_COMPILE`;
- `PROMPT_EXECUTION`;
- `REFINE`;
- another materially different action when needed.

A PASS/override never authorizes a later action. Recalculate before every materially different action.

## 4. Prompt execution

`PROMPT_EXECUTION` is special: its recommendation comes from the complexity of the **actual compiled prompt**.

Do not assign a fixed maximum model to execution. The baseline starts low and rises only when prompt breadth, ambiguity, risk, 3D/motion/interaction/integration complexity or related execution evidence justifies it.

Canonical principle:

> **Execution complexity raises model/effort. The word “execute” does not.**

## 5. Native resolution

Resolve abstract capability/effort through the centralized adapter. Preserve exact native names. Do not invent selectors or generic substitutes when an actionable native name is available.

## 6. Statuses

- `PASS`: aligned;
- `UNDER_REASONING`: active model/effort materially below requirement;
- `OVER_REASONING`: active model/effort materially above requirement without justification;
- `UNKNOWN`: required evidence cannot be resolved;
- `OVERRIDDEN`: explicit action-scoped override.

Do not flag microscopic differences. Flag differences that materially affect quality, cost or retry risk.

## 7. Output

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

A PASS that requires no intervention may be concise. A blocked gate must include the recovery instruction from `GATE-RECOVERY.md`.

## 8. HARD GATE + recovery

For `UNDER_REASONING`, material `OVER_REASONING` or relevant `UNKNOWN`:

1. stop before the material action;
2. persist `pending-gate.json` with the action and compact evidence;
3. tell the user the target configuration;
4. tell the user to change it and send `Continuar`;
5. on `Continuar`, detect runtime identity again;
6. rerun the same pending action gate;
7. on PASS/override, clear pending state and continue from that action without restarting the journey.

Override is valid only for the pending action.

## 9. Persistence

Persist compact gate evidence for material actions:

- action;
- profile/dimensions;
- recommended model/effort;
- active model/effort and evidence source;
- status/reason;
- override when present;
- mapping/floor validation status.

Never persist hidden chain-of-thought.

## 10. Economy

The target is the lowest sufficient configuration after accounting for quality, retries, ambiguity, breadth and risk. Neither cheapest-at-all-costs nor strongest-by-default is valid governance.
