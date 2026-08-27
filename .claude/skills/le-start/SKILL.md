---
name: le-start
description: "[PUBLIC] Entrypoint oficial da Landing Express. Resolve Resume ou Nova interação; o primeiro gate bloqueante pertence à rota material escolhida."
---

# Landing Express — le-start

`le-start` é um router rápido. Não force troca de model/effort apenas para a etapa transitória START.

Leia somente `PUBLIC-SURFACE.md`, `USER-LANGUAGE.md`, `SESSION-LIFECYCLE.md`, `RUNTIME-IDENTITY.md`, `GATE-RECOVERY.md`, `.landing-express/current.json` quando existir e metadata mínima da interação.

Quando houver interação anterior, ofereça:

```text
1. Resume
2. Nova interação
```

Quando não houver, apenas `Nova interação`.

Após a escolha:

- `Nova interação` → detectar model/effort ativos agora → gate `NEW_INTERACTION`;
- `Resume` → recuperar gate pendente quando existir; caso contrário, detectar runtime agora → gate `RESUME` quando houver recovery material.

Use somente identidade nativa Claude exposta pela surface/session. Não aplique mappings Codex ao Claude.

Se o gate bloquear, aplique `GATE-RECOVERY.md`: preserve a ação e instrua `Continuar` após a troca, sem pedir novo `/le-start`.

Resume deve projetar o estado real:

- `PROMPT READY` → `Executar prompt | Refine | Finalizar`;
- `EXECUTION_COMPLETE` → `Refine | Finalizar`;
- `COMPLETED` → confirmação explícita de reabertura.

START não cria sessão, não faz concepção, não compila e não executa.
