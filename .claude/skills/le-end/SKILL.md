---
name: le-end
description: "[PUBLIC] Fecha explicitamente a interação Landing Express após PROMPT READY e preserva o histórico."
---

# Landing Express — le-end

Leia `PUBLIC-SURFACE.md`, `USER-LANGUAGE.md`, `SESSION-LIFECYCLE.md`, `END-LIFECYCLE.md` e `POST-PROMPT-DECISION.md`.

Use PT-BR por padrão e mantenha o fechamento objetivo.

A interação atual precisa possuir `prompt-current.json` com status `PROMPT READY`. Não exija review técnico para encerrar.

Se ainda não houver prompt pronto, explique em linguagem simples que a interação precisa chegar a um prompt consolidado antes do fechamento; preserve `PROMPT_READY_REQUIRED` apenas como código interno quando necessário.

Quando disponível, execute:

```text
le end --root <repo-root>
```

O fechamento deve preservar todos os prompts, Conception State, Refine history e a sessão como histórico; gravar `completion.json` + `completion-history.json`; e marcar compatibilidade de session/checkpoint como `COMPLETED` quando presentes.

Retorne:

```text
Landing Express

Interação concluída.
Prompt final: vN
Refines realizados: N
Último modelo recomendado: <model>
Effort: <effort>
Status: COMPLETED
```

Use `UNKNOWN` quando a recomendação final nativa não estiver resolvida.

Depois de `COMPLETED`, pare. Não execute implementação, review, Refine, deploy ou nova interação automaticamente.

Uma sessão concluída continua disponível como histórico. Se o usuário escolher Resume futuramente via `le-start`, exija confirmação explícita de reabertura:

```text
Esta interação já foi concluída.
Deseja reabri-la?

1. Sim, reabrir
2. Não, manter concluída
```

Após reabrir, o fluxo normal ainda precisa rodar o gate `RESUME`.
