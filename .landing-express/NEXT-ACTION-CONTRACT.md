# Landing Express — Next Action Contract V1.2

Every material Landing Express step must make the next user choice obvious without requiring lifecycle knowledge.

Read `SESSION-LIFECYCLE.md`, `PUBLIC-SURFACE.md`, `USER-LANGUAGE.md`, `GATE-RECOVERY.md` and `PROMPT-EXECUTION.md`.

## 1. Product boundary

Landing Express owns editorial/visual conception, prompt compilation, optional governed prompt execution, Refine and explicit completion.

Execution is never automatic. Completion is never implied by execution.

## 2. Entry

Normal entry is `le-start`.

`le-start` is a router; do not block it with a START model/effort hop. After `Resume | Nova interação`, the selected material action owns the first hard gate.

## 3. Gate blocked

A blocked gate must end with an operational next step:

```text
Altere para <modelo> / <effort> e envie `Continuar`.
```

Persist the pending action. `Continuar` reruns that same gate after fresh runtime detection. Do not send the user back to `le-start`.

## 4. User-facing stages

```text
EM CONCEPÇÃO
CONSOLIDANDO A DIREÇÃO
PROMPT PRONTO
EXECUTANDO O PROMPT
EXECUÇÃO CONCLUÍDA
REFINANDO O PROMPT
INTERAÇÃO CONCLUÍDA
```

## 5. Resume by actual state

- conception → current-intent continuation;
- prompt ready → `Executar prompt | Refine | Finalizar`;
- execution complete → `Refine | Finalizar`;
- pending gate → recover pending gate;
- completed → explicit reopen confirmation.

Do not always ask a generic conception question when the interaction has already advanced.

## 6. PROMPT READY

Return:

```text
PROMPT READY

Prompt: <prompt compilado>
Recommended execution model: <modelo nativo | UNKNOWN>
Recommended execution effort: <effort nativo | UNKNOWN>

1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

## 7. Executar prompt

Selecting execution routes to `PROMPT_EXECUTION`.

Before mutation:

- use actual prompt complexity;
- detect active runtime again;
- run independent execution gate;
- recover via `Continuar` if blocked;
- inspect stack/capabilities;
- execute only on PASS/override.

After success:

```text
EXECUÇÃO CONCLUÍDA

1. Refine
2. Finalizar (`le-end`)
```

Never emit `COMPLETED` merely because implementation finished.

## 8. Refine

Refine may happen before or after execution. It uses the prompt plus relevant execution evidence, updates Conception State selectively and produces a new immutable prompt version. Return to `PROMPT READY` with all three choices.

## 9. Finalizar

Only explicit `le-end` marks the interaction complete. Preserve prompt, execution, refine and gate history.

## 10. Suggestions / technical ownership

User-facing suggestions must follow effect → reason → mechanism → library when useful → trade-off. Style is a visual grammar. Inspect the real stack before adding dependencies.

## 11. Legacy compatibility

`le-build`, `le-review`, `le-direct` and `le-resume` remain compatibility surfaces and are not normal next-action instructions.

## 12. Forbidden endings

Forbidden:

- only saying `done`;
- raw status without practical next action;
- blocked gate without telling the user how to recover;
- silently executing the prompt;
- auto-closing after execution;
- sending a prompt-ready user back into generic discovery;
- forcing a non-technical user to choose libraries;
- requiring the user to remember where the flow stopped.
