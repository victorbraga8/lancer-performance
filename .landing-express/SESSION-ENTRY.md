# Landing Express — Session Entry Contract

Landing Express is a **Copilot Editorial Web Cinematic / Web Premium**. Opening Codex, Claude Code or another supported AI surface does **not** start Landing Express automatically.

The user enters the product explicitly through the `le-start` action.

## 1. Interaction vs iteration

These concepts are different:

```text
INTERACTION / SESSION
  A complete independent conception journey for the repository.

ITERATION
  A new round inside the same interaction, used to revisit the conception/prompt while preserving approved state.
```

`NEW_INTERACTION` is not `START_NEXT_ITERATION`.

## 2. Canonical entrypoint

Use the surface-native entrypoint:

```text
Codex:          $le-start
Claude CLI/IDE: /le-start
Claude Desktop: /le:start
```

`le-start` owns only **entry + route resolution**. It must not begin conception, create a new session, resume material reasoning or compile a prompt by itself.

The canonical order is:

```text
le-start
   ↓
START MODEL / EFFORT GATE
   ↓
PASS / OVERRIDDEN
   ↓
resolve whether a previous interaction exists
   ↓
show entry menu
   ↓
wait for explicit user choice
   ↓
route to RESUME or NEW_INTERACTION
   ↓
routed action runs its own gate before material reasoning
```

If the START gate is blocked, stop before any material Landing Express work. Do not silently continue into Resume or Nova interação.

## 3. START Model / Effort Gate

Immediately after `le-start`, read `.landing-express/MODEL-GATE.md` and evaluate the named action `START` using the active runtime evidence available from the surface/session.

The START action is intentionally narrow: resolve product entry and route only. Do not inflate its complexity using the complexity of the future landing or future conception task.

Show at least:

```text
Action: START
Recommended model: <native model/tier>
Recommended effort: <effort>
Active model: <native model | UNKNOWN>
Active effort: <effort | UNKNOWN>
Status: PASS | UNDER_REASONING | OVER_REASONING | UNKNOWN | OVERRIDDEN
Reason: <concise reason>
```

Preserve model and effort as independent dimensions. Never replace a known native model with a generic label or collapse a partially known active state into total `UNKNOWN`.

The START gate authorizes only entry/route resolution. It does **not** authorize the material reasoning of `RESUME`, `NEW_INTERACTION`, enrichment, prompt compilation or any later action.

## 4. Existing interaction

After START is `PASS` or explicitly `OVERRIDDEN`, inspect only enough session metadata to know whether a current/previous interaction exists.

When one exists, show exactly:

```text
Landing Express

1. Resume
   Retomar a interação atual.

2. Nova interação
   Criar uma nova interação de concepção.
```

Accept `1/2` or simple equivalents `A/B`.

Wait for the choice. Do not create, resume, mutate or begin conception while the entry decision is unresolved.

## 5. Resume route

When the user selects `1`, `A` or `Resume`, resolve the route as `RESUME` and hand control to the `le-resume` behavior.

`le-start` itself must not:

- assume what the user wants to continue;
- restart the previous task automatically;
- perform material resume reasoning;
- modify the session.

The routed `RESUME` action owns its own Model/Effort Gate before material reasoning.

## 6. New interaction route

When the user selects `2`, `B` or `Nova interação`, resolve the route as `NEW_INTERACTION` and hand control to the `le-direct` behavior in `NEW_INTERACTION` mode.

`le-start` itself must not:

- create the new Session ID;
- initialize conception state;
- ask conception questions;
- inherit prior-session decisions;
- compile a prompt.

Those responsibilities belong to the routed `NEW_INTERACTION` action, after its own Model/Effort Gate.

`Nova interação` never means `START_NEXT_ITERATION`.

## 7. No previous interaction

When no previous Landing Express interaction exists, show only:

```text
Landing Express

1. Nova interação
   Iniciar uma nova interação de concepção.
```

Accept `1`, `A` or the explicit text `Nova interação`.

After the choice, resolve the route as `NEW_INTERACTION`. Do not begin conception inside `le-start`.

## 8. Product rule

The canonical flow is:

```text
open Codex / Claude
        ↓
Landing Express remains inactive
        ↓
user explicitly runs le-start
        ↓
START gate
        ↓
Resume | Nova interação
        ↓
route only
        ↓
action-specific gate
        ↓
material copilot work
```

Automatic startup hooks are not part of the required product flow. A supported surface opening, repository opening or session opening must never be interpreted as implicit `le-start`.
