# Landing Express — End Lifecycle V1.2

`le-end` is the official explicit closure for a Landing Express interaction.

A successful prompt execution does **not** close the interaction. `EXECUTION_COMPLETE` and `COMPLETED` are distinct states.

## 1. Preconditions

The interaction may end when a current prompt exists in `PROMPT READY`, whether or not that prompt has already been executed.

No mandatory technical review is required.

## 2. Closure behavior

On explicit completion:

- preserve all prompt versions;
- preserve Conception State;
- preserve Refine history;
- preserve execution-current/history when present;
- preserve compact gate evidence useful to history;
- write `completion.json`;
- append `completion-history.json`;
- mark compatible session/checkpoint state as `COMPLETED`;
- keep the session available as history.

## 3. Required summary

```text
Landing Express

Interação concluída.
Prompt final: vN
Refines realizados: N
Último modelo recomendado: <model>
Effort: <effort>
Status: COMPLETED
```

## 4. Explicitness

Never invoke completion automatically after:

- prompt compilation;
- successful prompt execution;
- successful build/validation;
- user silence.

After `EXECUTION_COMPLETE`, offer:

```text
1. Refine
2. Finalizar (`le-end`)
```

and wait for an explicit choice.

## 5. Reopen

A completed interaction must never reactivate silently. Resume requires explicit confirmation. Reopening preserves prior completion, prompt, Refine and execution history and then projects the appropriate current interaction state.

## 6. Historical integrity

Completion/reopening are lifecycle events, not destructive migrations. Never delete prior prompt versions, Refine records or execution records.
