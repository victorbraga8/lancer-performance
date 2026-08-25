---
name: le-resume
description: "[LEGACY/INTERNAL] Retoma a mesma interação. Fluxo público recomendado: le-start → Resume."
---

# Landing Express — le-resume

Use `SESSION-LIFECYCLE.md` como contrato central e PT-BR por padrão.

Antes de qualquer recovery material:

1. leia metadata mínima da sessão;
2. se houver `pending-gate.json`, trate `Continuar` como recuperação dessa ação via `GATE-RECOVERY.md`;
3. se a sessão estiver `COMPLETED`, exija reabertura explícita;
4. caso a retomada precise voltar à concepção, detecte o runtime ativo e rode gate `RESUME` antes de carregar contexto amplo.

Resume deve continuar do estado real, não sempre perguntar a mesma coisa.

- `EM CONCEPÇÃO` → após gate, recupere Conception State e pergunte `O que você quer continuar ou alterar?`;
- `PROMPT PRONTO` → mostre `Executar prompt | Refine | Finalizar`;
- `EXECUÇÃO CONCLUÍDA` → mostre `Refine | Finalizar`;
- gate pendente → recupere o gate primeiro;
- `INTERAÇÃO CONCLUÍDA` → pergunte se deseja reabrir.

Quando voltar à concepção, use editorial → style grammar → visual → stack-aware technical routing → contextual suggestions → selective state update. Preserve decisões válidas e não recompile por mensagem.

Antes de `ENRICHMENT`, `PROMPT_COMPILE`, `PROMPT_EXECUTION` ou `REFINE`, detecte novamente model/effort ativos e rode o gate próprio. Model/effort podem mudar durante a mesma interação.

Em `PROMPT READY`, siga `POST-PROMPT-DECISION.md`. Depois de `EXECUTION_COMPLETE`, siga `PROMPT-EXECUTION.md`. Somente `le-end` conclui a interação.
