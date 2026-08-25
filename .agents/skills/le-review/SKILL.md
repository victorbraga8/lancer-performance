---
name: le-review
description: "[LEGACY/COMPAT] Revisa concepção/prompt ou evidência externa; não é fase obrigatória da V1.2."
---

# Landing Express — le-review

`le-review` permanece por compatibilidade. O fluxo público V1.2 não exige review para chegar a `PROMPT READY` ou `le-end`.

Leia `USER-LANGUAGE.md`, `V1.1-MIGRATION.md`, `EXPERIENCE-QUALITY.md`, `SESSION-LIFECYCLE.md`, `NEXT-ACTION-CONTRACT.md`, o Conception State e o prompt atual.

Use PT-BR por padrão.

Review findings — inclusive findings de sessão V1.1 ou implementação externa fornecida — são **evidência**, não instruções automáticas.

Para cada finding relevante:

1. compare com a intenção e Conception State atuais;
2. determine se ainda se aplica;
3. explique o impacto em linguagem de experiência;
4. reabra somente decisões afetadas;
5. recomende Refine quando o prompt precisar mudar;
6. preserve o restante da direção.

Aplique `EXPERIENCE-QUALITY.md` para avaliar hierarquia, expressão de sections, criatividade, transições, motion, UX/responsividade e capability/economy apenas quando materiais ao finding.

Não altere arquivos de implementação, gere assets, rode dev/build/preview/deploy ou corrija uma implementação externa automaticamente.

Um finding antigo não é vinculante apenas porque está persistido. `READY FOR BUILD`, `BUILD`, `REVIEW` e outras fases V1.1 não devem voltar a ser estados de produto.

Se não houver mudança necessária, preserve `PROMPT READY`. Se houver, a rota normal é `le-refine`; se o objetivo mudou materialmente, recomende Nova interação.
