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

- `EM CONCEPÇÃO` → após gate, recupere Conception State + `creativeGovernance` e pergunte `O que você quer continuar ou alterar?`;
- `PROMPT PRONTO` → mostre `Executar prompt | Refine | Finalizar`;
- `EXECUÇÃO CONCLUÍDA` → mostre `Refine | Finalizar`;
- gate pendente → recupere o gate primeiro;
- `INTERAÇÃO CONCLUÍDA` → pergunte se deseja reabrir.

Quando voltar à concepção, preserve `HIGH INITIATIVE + BOUNDED AUTHORITY` e use:

```text
editorial
→ style/visual
→ thematic / creative eligibility
→ creative intensity
→ Opportunity Pass
→ Cinematic Enrichment
→ Creative Hypothesis
→ Anti-Cliché
→ Opportunity Prioritization
→ decisões materiais
→ stack-aware routing
→ selective state update
```

Não rerode copilot-driven enrichment sem motivo. Se a intenção atual invalidar território, intensidade ou oportunidades selecionadas, reabra somente a base afetada e execute um novo pass após ela convergir. O pass interno não consome os ciclos 0..3 do usuário.

O Opportunity Pass continua invisível como questionário: busque oportunidades materiais, permita `NONE` e normalmente retenha apenas 2–5 de maior valor. Antes de selecionar, elimine/reformule clichês de categoria e compare impacto com custo/risco/stack/responsive viability.

Antes de `ENRICHMENT` user-driven, `PROMPT_COMPILE`, `PROMPT_EXECUTION` ou `REFINE`, detecte novamente model/effort ativos e rode o gate próprio. Initiative permanece separada da capacidade de reasoning.

Em `PROMPT READY`, siga `POST-PROMPT-DECISION.md`. Depois de `EXECUTION_COMPLETE`, siga `PROMPT-EXECUTION.md`. Somente `le-end` conclui a interação.
