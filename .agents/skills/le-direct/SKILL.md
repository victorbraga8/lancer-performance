---
name: le-direct
description: "[CLI/IDE/DESKTOP] Landing Express Direction Copilot. Conduz intenção até direção executável, registra a sessão e prepara o Build Orchestrator. Não constrói a landing nesta ação."
---

# Landing Express — le-direct

Leia, nesta ordem:

1. `.landing-express/core.md`
2. `.landing-express/DIRECTION-V1-ADDENDUM.md`
3. `.landing-express/BUILD-PROMPT-CONTRACT.md`
4. `.landing-express/BUILD-PROMPT-V1-ADDENDUM.md`
5. `.landing-express/MODEL-GATE.md`
6. `.landing-express/capabilities.json`

O core v0 continua sendo a base de comportamento. O addendum V1 apenas amplia a direção para execução governada; não remova ou simplifique as regras v0.

A conversa deve ser guiada e reativa, não um questionário. Se houver implementação existente, classifique GREENFIELD / EVOLUTION / VISUAL REFACTOR / REBUILD e inspecione o que precisa ser preservado.

O usuário pode fazer perguntas durante o fluxo; responda e retome do mesmo Direction State.

Ao fechar a direção, execute Drift Review, Anti-Flop Review, Asset Delivery/Visual Integration checks, capability requirements e model/effort recommendation.

Persista a sessão em `.landing-express/sessions/<id>/` com `direction.md`, `build-prompt.md`, `execution-manifest.json`, `session.json` e `events.jsonl`; atualize `.landing-express/current.json`.

Não gere assets nem implemente código nesta ação.
