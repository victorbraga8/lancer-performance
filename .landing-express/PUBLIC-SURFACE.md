# Landing Express — Public Surface V1.2

V1.2 keeps the command surface small while allowing governed prompt execution inside the interaction.

## 1. Official public commands

Promote only:

```text
le-start
le-refine
le-end
```

Surface equivalents:

```text
Codex: $le-start | $le-refine | $le-end
Claude CLI/IDE: /le-start | /le-refine | /le-end
Claude Desktop: /le:start | /le:refine | /le:end
```

`Executar prompt` is an **in-flow action**, not another command the user must memorize.

## 2. Product mental model

```text
Start
→ Resume | Nova interação
→ construir direção
→ Prompt pronto
→ Executar | Refine | Finalizar
→ execução opcional
→ Refine | Finalizar
```

User-facing stages:

```text
EM CONCEPÇÃO
CONSOLIDANDO A DIREÇÃO
PROMPT PRONTO
EXECUTANDO O PROMPT
EXECUÇÃO CONCLUÍDA
REFINANDO O PROMPT
INTERAÇÃO CONCLUÍDA
```

## 3. START and Resume

`le-start` is a router. It does not require a blocking START gate. The first blocking gate belongs to the material route selected: `NEW_INTERACTION` or `RESUME`.

Resume projects the actual state:

- conception → current-intent continuation;
- prompt ready → `Executar | Refine | Finalizar`;
- execution complete → `Refine | Finalizar`;
- pending gate → recover the same gate;
- completed → explicit reopen confirmation.

## 4. Gate recovery

When a material gate blocks, the user should not restart the flow. Show the target configuration and instruct them to change it and send `Continuar`. Then detect runtime identity again and resume the pending action.

## 5. Legacy compatibility

Keep callable but unpromoted during migration:

```text
le-direct
le-build
le-review
le-resume
```

`le-build` remains a legacy compatibility handoff and is not the normal implementation path. The V1.2 in-flow implementation path is `Executar prompt` governed by `PROMPT_EXECUTION.md`.

## 6. Language and technical ownership

PT-BR by default. Explain effect before technology. The user chooses experience/intention; Landing Express translates style → mechanism → library → provider. Inspect the real stack before recommending new dependencies.
