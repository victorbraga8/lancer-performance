---
name: le-review
description: "[CLI/IDE/DESKTOP] Fecha o ciclo da Landing Express após execução: compara resultado com contratos e recomenda ACCEPT, REFINE, REGENERATE ou REDO sem validação visual autônoma avançada."
---

# Landing Express — le-review

Leia a sessão atual, Direction State, Build Prompt, execution manifest, execution plan/result e logs disponíveis.

Esta é V1: não finja possuir screenshot comparison ou QA visual automatizado se a surface não os oferece. Use evidência disponível: arquivos, outputs, screenshots fornecidos pelo usuário e inspeção permitida pela surface.

Compare EXPECTED vs ACTUAL por:

- direção visual/editorial;
- Visual Integration Contract;
- asset modality/provider;
- motion hierarchy e interação;
- hard constraints;
- preservation scope;
- capability/tool realmente utilizada;
- budget/retries;
- acceptance criteria.

Classifique:

- ACCEPT: contrato materialmente cumprido;
- REFINE: direção correta, falha localizada de implementação;
- REGENERATE: asset localizado falhou em modalidade/shot/continuidade/integração;
- REDO: problema estrutural de direção, hero mechanic ou narrativa.

Para REFINE/REGENERATE, produza um Preservation Contract com `PRESERVE` e `CHANGE ONLY`; persista `result-review.md` e `refinement-prompt.md` ou `regeneration-prompt.md` na sessão e atualize `events.jsonl`.

Se o mesmo gap já falhou repetidamente, recomende REDO/reavaliação em vez de loop infinito.
