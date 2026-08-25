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

Classifique `MINOR | MATERIAL | STRUCTURAL | SCOPE_SHIFT`, atualize/invalide só os fields afetados e use Style/Stack/Suggestion policies apenas quando o delta exigir.

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
