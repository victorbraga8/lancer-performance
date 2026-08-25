---
name: le-start
description: "[PUBLIC] Entrypoint oficial da Landing Express. Resolve Resume ou Nova interação; o primeiro gate bloqueante pertence à rota material escolhida."
---

# Landing Express — le-start

`le-start` é um router rápido. Não force o usuário a trocar model/effort apenas para executar a etapa transitória START.

Leia somente `PUBLIC-SURFACE.md`, `USER-LANGUAGE.md`, `SESSION-LIFECYCLE.md`, `RUNTIME-IDENTITY.md`, `GATE-RECOVERY.md`, `.landing-express/current.json` quando existir e metadata mínima da interação atual.

Não carregue interpreters, prompt compiler ou contexto amplo antes da rota ser escolhida.

## Entrada

Quando houver interação anterior:

```text
Landing Express

1. Resume
   Retomar a interação atual.

2. Nova interação
   Criar uma nova interação.
```

Quando não houver, ofereça apenas `Nova interação`.

## Primeira ação material

Após a escolha:

- `Nova interação` → detectar model/effort ativos agora → gate `NEW_INTERACTION`;
- `Resume` → recuperar gate pendente quando existir; caso contrário, detectar model/effort ativos agora → gate `RESUME` quando a retomada exigir reasoning material.

Se o gate bloquear, siga `GATE-RECOVERY.md`: preserve a ação, diga qual configuração usar e instrua o usuário a enviar `Continuar` após a troca. Não peça para rodar `$le-start` novamente.

## Resume contextual

Se a interação já estiver `PROMPT READY`, Resume deve mostrar `Executar prompt | Refine | Finalizar` em vez de reabrir discovery genericamente.

Se estiver `EXECUTION_COMPLETE`, mostre `Refine | Finalizar`.

Se estiver `COMPLETED`, exija confirmação explícita de reabertura antes de qualquer ação material.

## Boundary

START não cria sessão, não faz concepção, não compila e não executa. Ele apenas projeta o estado atual e roteia para a próxima ação material governada.
