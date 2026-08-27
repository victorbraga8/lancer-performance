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

- `EM CONCEPÇÃO` → após gate, recupere Conception State + `creativeGovernance` e pergunte `O que você quer continuar ou alterar?`;
- `PROMPT PRONTO` → `Executar prompt | Refine | Finalizar`;
- `EXECUÇÃO CONCLUÍDA` → `Refine | Finalizar`;
- gate pendente → recuperar gate;
- `INTERAÇÃO CONCLUÍDA` → confirmar reabertura.

Ao voltar à concepção, preserve `HIGH INITIATIVE + BOUNDED AUTHORITY` e use:

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

Antes de `ENRICHMENT` user-driven, `PROMPT_COMPILE`, `PROMPT_EXECUTION` ou `REFINE`, detecte novamente o runtime ativo e rode o gate próprio. Initiative permanece separada da capacidade de reasoning. Não use configuração/default como prova quando a surface expõe evidência ativa mais forte.

Em `PROMPT READY`, siga `POST-PROMPT-DECISION.md`. Depois de `EXECUTION_COMPLETE`, siga `PROMPT-EXECUTION.md`. Somente `le-end` conclui a interação.
