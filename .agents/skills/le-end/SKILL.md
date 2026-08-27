---
name: le-end
description: "[PUBLIC] Fecha explicitamente a interação Landing Express após PROMPT READY e preserva todo o histórico."
---

# Landing Express — le-end

Este é um dos três comandos públicos da V1.2.

Leia:

1. `.landing-express/PUBLIC-SURFACE.md`;
2. `.landing-express/USER-LANGUAGE.md`;
3. `.landing-express/SESSION-LIFECYCLE.md`;
4. `.landing-express/END-LIFECYCLE.md`;
5. `.landing-express/POST-PROMPT-DECISION.md`.

Use PT-BR por padrão. O fechamento deve ser objetivo e não expor detalhes técnicos de checkpoint/persistência além do que for útil ao usuário.

## Preconditions

A interação atual precisa possuir `prompt-current.json` com status `PROMPT READY`.

Não exija review técnico para encerrar.

Se não houver prompt pronto, explique em PT-BR que a interação ainda precisa chegar a um prompt pronto antes do fechamento; preserve `PROMPT_READY_REQUIRED` apenas como código interno quando necessário.

## Closure

Quando disponível, execute o helper CLI do pacote para fechamento atômico:

```text
le end --root <repo-root>
```

Ele deve:

- gravar `completion.json`;
- anexar `completion-history.json`;
- preservar `prompt-vN.md`, `prompt-current.json`, Conception State e Refine history;
- marcar session/checkpoint compatíveis como `COMPLETED` quando existirem;
- não apagar a sessão atual.

Se o helper não estiver disponível na surface, aplique exatamente o contrato de `END-LIFECYCLE.md` sem alterar o significado.

## Required output

```text
Landing Express

Interação concluída.
Prompt final: vN
Refines realizados: N
Último modelo recomendado: <model>
Effort: <effort>
Status: COMPLETED
```

Use `UNKNOWN` se o adapter não resolveu recomendação nativa.

## Stop boundary

Após `COMPLETED`, pare.

Não execute implementação, review, Refine, deploy ou nova interação automaticamente.

## Resume de sessão concluída

Uma sessão `COMPLETED` continua como histórico.

Se futuramente o usuário escolher Resume via `le-start`, exija confirmação explícita:

```text
Esta interação já foi concluída.
Deseja reabri-la?

1. Sim, reabrir
2. Não, manter concluída
```

Somente `Sim` reabre; depois disso o fluxo normal de `RESUME` ainda deve rodar seu próprio gate.
