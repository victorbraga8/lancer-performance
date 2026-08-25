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

Depois do gate, use `SESSION-LIFECYCLE.md` como contrato central e carregue apenas o necessário entre `EDITORIAL-INTERPRETER.md`, `STYLE-INTERPRETER.md`, `VISUAL-INTERPRETER.md`, `STACK-AWARE-ROUTING.md`, `SUGGESTION-POLICY.md`, `EXPERIENCE-QUALITY.md`, `GENERATED-MEDIA-POLICY.md`, `CONCEPTION-STATE.md`, `ENRICHMENT-CHECKPOINT.md`, `FINALIZATION-GATE.md`, `PROMPT-COMPILER.md`, `PROMPT-EXECUTION.md` e `POST-PROMPT-DECISION.md`.

Crie nova Session ID, inicialize enrichment 0/3 e pergunte exatamente:

```text
O que você gostaria de fazer?
```

Conduza intenção → editorial → style grammar → visual por section → sugestão contextual → stack-aware technical routing quando material → Conception State seletivo.

Não transfira escolha de library ao usuário. Inspecione a stack real antes de recomendar nova dependência.

Ao atingir readiness, use enrichment/finalization, rode gate `PROMPT_COMPILE`, gere prompt imutável e calcule a recomendação `PROMPT_EXECUTION` pela complexidade real do prompt.

Em `PROMPT READY`:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

`Executar prompt` exige novo runtime detection + gate `PROMPT_EXECUTION` antes de qualquer mutação. Ao terminar, mostre `Refine | Finalizar`; nunca conclua automaticamente.
