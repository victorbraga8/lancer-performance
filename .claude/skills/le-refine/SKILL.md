---
name: le-refine
description: "[PUBLIC] Refine pós-PROMPT READY, inclusive após execução, com gate próprio e nova versão de prompt."
---

# Landing Express — le-refine

Use PT-BR e `SESSION-LIFECYCLE.md` + `REFINE-LIFECYCLE.md` como contratos centrais.

A interação precisa ter um prompt atual. Se estiver `COMPLETED`, exija reabertura explícita.

Antes do motivo do Refine:

1. detecte model/effort ativos da sessão Claude agora;
2. rode gate `REFINE`;
3. se bloquear, aplique `GATE-RECOVERY.md` e retome REFINE quando o usuário enviar `Continuar`;
4. só PASS/override autoriza reasoning material.

Pergunte exatamente:

```text
Por que você deseja fazer o refine?
```

Use o prompt atual e, quando existir, resultado de execução como evidência. Conception State continua sendo a fonte canônica da direção.

Classifique `MINOR | MATERIAL | STRUCTURAL | SCOPE_SHIFT`, atualize/invalide só os fields afetados e use Style/Creative Eligibility/Stack/Suggestion policies apenas quando o delta exigir.

Se o Refine alterar território, intensidade, visual direction, sections ou oportunidades cinematográficas, invalide somente a parte criativa afetada e rerode:

```text
Thematic / Creative Eligibility quando necessário
→ Creative Intensity quando necessário
→ Opportunity Pass
→ Cinematic Enrichment
→ Creative Hypothesis
→ Anti-Cliché
→ Opportunity Prioritization
```

Não rerode esse pipeline para delta `MINOR` sem impacto na direção. O pass pode retornar `NONE`, não consome o budget user-driven 0..3 e não deve selecionar tecnologia sofisticada por preferência abstrata.

Ao convergir:

1. revalide readiness/finalization quando necessário;
2. detecte runtime novamente;
3. rode `PROMPT_COMPILE` gate;
4. gere `prompt-vN+1.md` preservando versões anteriores;
5. recalcule `PROMPT_EXECUTION` pela complexidade real do novo prompt;
6. volte a:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

Não execute nem conclua automaticamente.
