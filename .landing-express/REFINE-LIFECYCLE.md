# Landing Express — Refine Lifecycle V1.2

`Refine` is the governed post-prompt copilot loop. It may begin from `PROMPT READY` or after `EXECUTION_COMPLETE` when the user wants the next prompt/version to represent the intended result better.

It is not pre-prompt Enrichment and it is not a raw implementation patch shortcut.

## 1. Entry

```text
PROMPT READY or EXECUTION COMPLETE
→ user chooses Refine
→ detect active runtime now
→ MODEL / EFFORT GATE: REFINE
→ PASS / OVERRIDDEN
→ Por que você deseja fazer o refine?
→ classify delta
→ selective copilot
→ Conception State update/invalidation
→ readiness/finalization when affected
→ detect runtime again
→ PROMPT_COMPILE gate
→ prompt-vN+1.md
→ recalculate PROMPT_EXECUTION recommendation
→ PROMPT READY
→ Executar prompt | Refine | Finalizar
```

If REFINE gate blocks, apply `GATE-RECOVERY.md` and resume the same action after the user sends `Continuar`.

## 2. Initial question

Ask exactly:

```text
Por que você deseja fazer o refine?
```

Do not lead with a new questionnaire.

## 3. Evidence

Use:

- current Conception State as canonical approved direction;
- current `prompt-vN.md` as prompt baseline;
- `execution-current.json` / relevant execution result when Refine follows execution;
- user feedback as new evidence.

Execution evidence may reveal that the approved prompt/direction should change, but it must not silently rewrite Conception State.

## 4. Delta classification

```text
MINOR | MATERIAL | STRUCTURAL | SCOPE_SHIFT
```

- `MINOR`: localized improvement, core direction intact;
- `MATERIAL`: meaningful decision adjustment within same objective;
- `STRUCTURAL`: reopens narrative/sections/style/hierarchy/architecture; invalidate only affected fields;
- `SCOPE_SHIFT`: materially different objective/product; recommend Nova interação.

## 5. Selective copilot

The prior prompt is baseline, not immutable text. Update Conception State before recompilation.

When relevant, use `STYLE-INTERPRETER.md`, `STACK-AWARE-ROUTING.md`, `VISUAL-INTERPRETER.md` and `SUGGESTION-POLICY.md`. Questions are only for unresolved material decisions.

Do not implement Refine as `old prompt + appended user sentence`.

## 6. Execution result relationship

If the user says, for example, “a hero ficou tecnológica demais”, interpret that result against the approved conception. Decide whether the issue is style grammar, section expression, mechanism, technical routing or execution variance, then update only the relevant state before compiling the next prompt.

A prior execution of `prompt-vN` remains historical evidence. Once Refine creates `prompt-vN+1`, the old execution must not make the session appear `EXECUTION_COMPLETE` for the new current prompt.

## 7. Recompilation

Always create the next immutable version. Run a fresh `PROMPT_COMPILE` gate and calculate the new `PROMPT_EXECUTION` recommendation from the actual new prompt complexity.

## 8. Persistence

Preserve compact evidence in:

```text
refine-current.json
refine-history.json
prompt-current.json
prompt-vN.md
execution-history.json (when prior execution exists)
```

Never delete prior prompt/execution evidence and never persist hidden chain-of-thought.

## 9. Return

```text
PROMPT READY

Prompt: <new compiled prompt>
Recommended execution model: <native | UNKNOWN>
Recommended execution effort: <native | UNKNOWN>

1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

Do not execute, start another Refine or complete the interaction automatically.
