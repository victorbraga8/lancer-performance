---
name: le-direct
description: "[COMPAT/INTERNAL] Rota NEW_INTERACTION do Copilot Editorial Web Cinematic / Web Premium."
---

# Landing Express — le-direct

Rota interna/legada. O fluxo normal entra por `le-start → Nova interação`.

Antes de criar sessão ou carregar contexto amplo:

1. detecte model/effort ativos da sessão Claude conforme `RUNTIME-IDENTITY.md`;
2. rode gate `NEW_INTERACTION`;
3. se bloquear, aplique `GATE-RECOVERY.md` e retome esta mesma ação quando o usuário enviar `Continuar`;
4. só PASS/override autoriza criação da sessão e reasoning material.

Depois do gate, use `SESSION-LIFECYCLE.md` como contrato central e carregue apenas o necessário entre `EDITORIAL-INTERPRETER.md`, `STYLE-INTERPRETER.md`, `VISUAL-INTERPRETER.md`, `COPILOT-INITIATIVE.md`, `CREATIVE-ELIGIBILITY.md`, `STACK-AWARE-ROUTING.md`, `SUGGESTION-POLICY.md`, `EXPERIENCE-QUALITY.md`, `GENERATED-MEDIA-POLICY.md`, `CONCEPTION-STATE.md`, `ENRICHMENT-CHECKPOINT.md`, `FINALIZATION-GATE.md`, `PROMPT-COMPILER.md`, `PROMPT-EXECUTION.md` e `POST-PROMPT-DECISION.md`.

Crie nova Session ID, inicialize user-driven enrichment 0/3 e `creativeGovernance` V1.3 e pergunte exatamente:

```text
O que você gostaria de fazer?
```

Conduza:

```text
intenção
→ editorial
→ style grammar + visual por section
→ thematic / creative eligibility
→ creative intensity map
→ Opportunity Pass interno
→ Cinematic Enrichment
→ creative hypotheses compactas
→ Anti-Cliché Pass
→ Opportunity Prioritization
→ recomendações / decisões materiais do usuário
→ stack-aware technical routing quando material
→ Conception State seletivo
```

Aplique `HIGH INITIATIVE + BOUNDED AUTHORITY`: procure oportunidades sem esperar o usuário nomear efeitos/tecnologias, mas preserve com ele decisões de intenção, identidade, prioridade, narrativa e escopo. Use `AUTO | RECOMMEND | COMPARE | ASK` conforme `COPILOT-INITIATIVE.md`.

O `Opportunity Pass` é interno e não vira questionário. Considere typography, composition, scale/contrast, asset value, atmosphere, depth/spatiality, motion, interaction, material/light, simplification/removal e mobile redesign. Traga apenas oportunidades materiais; normalmente selecione 2–5 quando houver múltiplas opções e aceite `NONE` quando adicionar camada só criaria ruído.

Não selecione mecanismo apenas porque é comum na categoria ou tecnicamente sofisticado. Antes da seleção final, formule hipótese compacta, execute Anti-Cliché e priorize por impacto editorial/premium/narrativo versus custo, stack, responsive viability, performance e accessibility.

Não transfira escolha de library ao usuário. Inspecione a stack real antes de recomendar nova dependência.

O copilot-driven enrichment roda antes de `CONCEPTION READY` quando material, converge para seleção compacta ou `NONE` e não consome os ciclos 0..3 do checkpoint user-driven.

Não trate categoria como preset visual. Resolva território e intensidade antes de selecionar mecanismos cinematográficos materiais.

Ao atingir readiness, use checkpoint user-driven/finalization, rode gate `PROMPT_COMPILE`, gere prompt imutável e calcule a recomendação `PROMPT_EXECUTION` pela complexidade real do prompt.

Em `PROMPT READY`:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

`Executar prompt` exige novo runtime detection + gate `PROMPT_EXECUTION` antes de qualquer mutação. Ao terminar, mostre `Refine | Finalizar`; nunca conclua automaticamente.
