# Landing Express — Runtime Identity Resolver V1.2

The Runtime Identity Resolver determines the **model and reasoning effort actually active in the current AI session** before the Model/Effort Gate compares that session with the action requirement.

It exists because configured defaults and active turn settings are not equivalent.

## 1. Canonical order

```text
ACTIVE SESSION / TURN EVIDENCE
        ↓
normalize native model + effort
        ↓
Reasoning Adapter native mapping
        ↓
compare active vs recommended
        ↓
Model / Effort Gate
```

Never infer the active model only from the requested action or from a configured default when current-turn evidence exists.

## 2. Evidence precedence

Use the strongest available evidence in this order:

1. exact model/effort exposed by the active surface/session;
2. exact current-turn runtime record;
3. explicit surface-provided session metadata;
4. configuration only as **fallback context**, never as proof of an already-running turn;
5. explicit user statement when the runtime cannot expose the active value;
6. `UNKNOWN` only for the unresolved dimension.

A configured value may be displayed as `configuredModel` / `configuredEffort`, but it must not silently become `Active model` / `Active effort`.

## 3. Codex active-turn detection

For Codex, prefer the current thread itself.

Shell/tool execution receives `CODEX_THREAD_ID`. Landing Express can use it to locate the current rollout under Codex session storage and read the latest `turn_context` record.

Canonical detection:

```text
CODEX_THREAD_ID
→ ~/.codex/sessions/**/rollout-*<thread-id>.jsonl
→ latest turn_context
→ payload.model
→ payload.effort
```

The `turn_context` values are the evidence used for `Active model` and `Active effort`.

Run the internal helper when shell execution is available:

```text
le identity --surface codex --json
```

The helper is read-only. It must not mutate Codex state.

## 4. Config fallback

`~/.codex/config.toml` may define values such as:

```text
model = "gpt-5.6-sol"
model_reasoning_effort = "high"
```

These describe configuration, not necessarily the already-active turn. The user may have changed model/effort inside the current session.

Therefore:

- active turn wins over config;
- config never overwrites detected current-turn values;
- config-only evidence does not claim `ACTIVE_TURN`;
- if only config is available, preserve it as fallback context and keep truly unobserved active fields `UNKNOWN`.

## 5. Native normalization

Normalize aliases to exact comparable native identities when the equivalence is known.

Examples for Codex GPT-5.6:

```text
GPT-5.6 Luna  → gpt-5.6-luna
GPT-5.6 Terra → gpt-5.6-terra
GPT-5.6 Sol   → gpt-5.6-sol
gpt-5.6       → gpt-5.6-sol
```

Preserve effort independently:

```text
none | minimal | low | medium | high | xhigh | max
```

Do not collapse model and effort into one unknown field.

## 6. Relationship with native mapping

Runtime detection answers:

> What is active now?

The Reasoning Adapter native mapping answers:

> Which native model/effort corresponds to the abstract requirement?

Action-floor calibration answers a different question:

> Is this action baseline empirically validated as sufficient?

These three concerns must remain separate.

## 7. Failure behavior

If model is detected and effort is not:

```text
Active model: gpt-5.6-sol
Active effort: UNKNOWN
```

Do not output `Active model: UNKNOWN` merely because effort is unresolved.

If the runtime cannot expose one material dimension, the gate may remain `UNKNOWN` for that reason, but the explanation must name the exact unresolved field.

## 8. Fast START requirement

`START` is routing only. Runtime identity detection must be lightweight and happen before loading broad conception contracts.

The Start path should need only:

1. Runtime Identity Resolver;
2. Reasoning Adapter mapping;
3. Model Gate rules;
4. minimal current-session metadata needed to show Resume/Nova interação.

Do not load editorial, visual, prompt compiler, refine or migration contracts merely to decide the START gate.
