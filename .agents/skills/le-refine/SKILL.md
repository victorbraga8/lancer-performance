---
name: le-refine
description: "[PUBLIC] Refine pós-PROMPT READY, inclusive após execução, com gate próprio e nova versão de prompt."
---

# Landing Express — le-refine

Use PT-BR e `SESSION-LIFECYCLE.md` + `REFINE-LIFECYCLE.md` como contratos centrais.

A interação precisa ter um prompt atual. Se estiver `COMPLETED`, exija reabertura explícita antes do Refine.

Antes de perguntar o motivo:

1. detecte model/effort ativos agora;
2. rode gate `REFINE`;
3. se bloquear, aplique `GATE-RECOVERY.md` e retome REFINE quando o usuário enviar `Continuar`;
4. somente PASS/override autoriza reasoning material.

Pergunte exatamente:

```text
Por que você deseja fazer o refine?
```

O Refine pode usar como evidência o prompt atual e, quando existir, `execution-current.json`/resultado real da execução. O Conception State continua sendo a fonte canônica da direção aprovada.

Classifique:

```text
MINOR | MATERIAL | STRUCTURAL | SCOPE_SHIFT
```

Atualize/invalide somente fields afetados. Use `STYLE-INTERPRETER.md`, `STACK-AWARE-ROUTING.md`, `SUGGESTION-POLICY.md` e demais interpreters apenas quando o delta exigir. Não faça patch textual direto no prompt como substituto do Refine governado.

Quando convergir:

1. revalide readiness/finalization se necessário;
2. detecte runtime novamente;
3. rode `PROMPT_COMPILE` gate;
4. gere `prompt-vN+1.md` preservando versões anteriores;
5. recalcule a recomendação `PROMPT_EXECUTION` pela complexidade real do novo prompt;
6. registre `refine-history.json`;
7. volte a `PROMPT READY` com:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

Não execute automaticamente e não conclua a interação automaticamente.
