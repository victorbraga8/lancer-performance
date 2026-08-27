---
name: le-build
description: "[LEGACY/COMPAT] Handoff do prompt atual; não é a ação oficial de execução V1.2."
---

# Landing Express — le-build

`le-build` permanece somente por compatibilidade. Não dependa de `BUILD-ORCHESTRATOR.md` e não trate este comando como etapa obrigatória.

Resolva a interação e o `PROMPT READY` atual. Este comando pode apenas apresentar `prompt-vN.md` e sua recomendação; ele próprio não altera o produto, gera assets, roda build/deploy ou executa silenciosamente.

A execução oficial V1.2 acontece dentro da própria interação pela escolha:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

`Executar prompt` segue `PROMPT-EXECUTION.md` e exige o gate `PROMPT_EXECUTION` antes de qualquer mutação.

Saída de compatibilidade preferida:

```text
PROMPT READY

Prompt atual: vN
Artefato: <prompt-vN.md>

Próximas opções na interação:
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```
