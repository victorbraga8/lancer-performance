---
name: le-review
description: "[LEGACY/COMPAT] Revisa concepção/prompt ou evidência externa; não é fase obrigatória da V1.2."
---

# Landing Express — le-review

`le-review` permanece por compatibilidade. O fluxo público V1.2 não exige review para chegar a `PROMPT READY` ou `le-end`.

Leia `USER-LANGUAGE.md`, `V1.1-MIGRATION.md`, `EXPERIENCE-QUALITY.md`, `SESSION-LIFECYCLE.md`, `NEXT-ACTION-CONTRACT.md`, o Conception State e o prompt atual.

Use PT-BR por padrão.

Findings de sessão V1.1 ou de implementação externa fornecida são evidência, não instruções automáticas.

Para cada finding relevante, compare com a intenção/estado atuais, verifique se ainda se aplica, explique o impacto em linguagem de experiência e reabra somente decisões afetadas. Use `EXPERIENCE-QUALITY.md` apenas nas dimensões materiais ao finding.

Não altere arquivos de implementação, gere assets, rode dev/build/preview/deploy ou corrija uma implementação externa automaticamente.

Estados V1.1 como `READY FOR BUILD`, `BUILD` e `REVIEW` são históricos e não devem voltar a ser lifecycle de produto.

Sem mudança necessária, preserve `PROMPT READY`. Se o prompt precisar mudar, a rota normal é `le-refine`; se houver troca material de objetivo, recomende Nova interação.
