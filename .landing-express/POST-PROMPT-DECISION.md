# Landing Express — Post-Prompt Decision V1.2

After a prompt reaches `PROMPT READY`, Landing Express must stop and ask what the user wants to do next.

## 1. Required decision

Show:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

Do not start any route automatically.

## 2. Executar prompt

`Executar prompt` routes to `PROMPT_EXECUTION.md`.

Before any mutation:

- use the complexity/recommendation stored from the actual compiled prompt;
- detect active model/effort again;
- run the independent `PROMPT_EXECUTION` hard gate;
- apply `GATE-RECOVERY.md` if blocked;
- run stack/capability preflight;
- execute only after PASS/override.

The execution recommendation must be complexity-driven, not fixed to the strongest model.

Successful execution returns to:

```text
EXECUÇÃO CONCLUÍDA

1. Refine
2. Finalizar (`le-end`)
```

Execution completion never auto-closes the interaction.

## 3. Refine

`Refine` is post-prompt work defined by `REFINE-LIFECYCLE.md` and may occur before or after an execution.

Choosing Refine only resolves the route. Before material reasoning, run its own `REFINE` gate. A successful Refine updates affected Conception State selectively, creates immutable `prompt-vN+1.md`, recalculates execution recommendation from the new actual prompt and returns to `PROMPT READY`.

## 4. Finalizar

`Finalizar` routes to `le-end`.

Only explicit finalization writes `COMPLETED`. It preserves prompt, Refine and execution history.

## 5. Enrichment vs Refine vs Execution

- **Enrichment**: pre-prompt conception improvement; governed by the 0..3 material loop.
- **Refine**: post-prompt change to the approved direction/prompt; produces a new prompt version.
- **Execution**: consumes the current prompt version and may mutate the repository; it does not implicitly change the approved prompt and does not close the interaction.

If implementation evidence shows the desired direction itself should change, route that change through Refine rather than silently patching the implementation and pretending the prompt remains authoritative.

## 6. User agency

`PROMPT READY` means the prompt is usable. `EXECUTION COMPLETE` means the current prompt was consumed successfully. Neither state means the user has completed the interaction.
