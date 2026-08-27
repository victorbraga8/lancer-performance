---
name: le-build
description: "[LEGACY/COMPAT] Handoff do prompt atual; não é a ação oficial de execução V1.2."
---

# Landing Express — le-build

`le-build` permanece somente por compatibilidade. Não dependa de `BUILD-ORCHESTRATOR.md` e não trate este comando como etapa obrigatória.

Quando houver `PROMPT READY`, apresente `prompt-vN.md` e sua recomendação. Este comando não altera o produto, gera assets, roda build/deploy ou executa silenciosamente.

A execução oficial V1.2 acontece dentro da interação pela opção `Executar prompt`, governada por `PROMPT-EXECUTION.md` e pelo gate `PROMPT_EXECUTION`.

Saída preferida:

```text
PROMPT READY

Prompt atual: vN
Artefato: <prompt-vN.md>

1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```
