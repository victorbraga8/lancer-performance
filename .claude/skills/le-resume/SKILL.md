---
name: le-resume
description: "[LEGACY/INTERNAL] Retoma a mesma interação. Fluxo público recomendado: le-start → Resume."
---

# Landing Express — le-resume

Use `SESSION-LIFECYCLE.md` como contrato central e PT-BR por padrão.

Antes de recovery material:

1. leia metadata mínima;
2. recupere `pending-gate.json` primeiro quando existir;
3. se `COMPLETED`, exija reabertura explícita;
4. se a retomada voltar à concepção, detecte model/effort ativos da sessão Claude e rode gate `RESUME` antes de carregar contexto amplo.

Resume continua do estado real:

- `EM CONCEPÇÃO` → após gate, `O que você quer continuar ou alterar?`;
- `PROMPT PRONTO` → `Executar prompt | Refine | Finalizar`;
- `EXECUÇÃO CONCLUÍDA` → `Refine | Finalizar`;
- gate pendente → recuperar gate;
- `INTERAÇÃO CONCLUÍDA` → confirmar reabertura.

Ao voltar à concepção, use editorial → style grammar → visual → stack-aware routing → sugestões → selective state update.

Antes de `ENRICHMENT`, `PROMPT_COMPILE`, `PROMPT_EXECUTION` ou `REFINE`, detecte novamente o runtime ativo e rode o gate próprio. Não use configuração/default como prova quando a surface expõe evidência ativa mais forte.

Em `PROMPT READY`, siga `POST-PROMPT-DECISION.md`. Depois de `EXECUTION_COMPLETE`, siga `PROMPT-EXECUTION.md`. Somente `le-end` conclui a interação.
