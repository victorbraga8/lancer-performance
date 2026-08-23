---
name: le-build
description: "[CLI/IDE] Executa a experiência já roteirizada pela Landing Express V1. Faz preflight real de capabilities, respeita modalidade/budget/fallback e registra a execução."
---

# Landing Express — le-build

Leia `.landing-express/BUILD-ORCHESTRATOR.md`, `.landing-express/CAPABILITY-CONTRACT.md`, `.landing-express/MODEL-GATE.md`, `.landing-express/capabilities.json` e a sessão indicada por `.landing-express/current.json`.

Execute o Build Orchestrator exatamente.

Antes de alterar arquivos, mostre um preflight curto em português com:

- Status geral: READY ou BLOCKED;
- modelo/effort recomendado e active quando observável;
- coding agent;
- cada capability requerida;
- Higgsfield quando referenciado;
- política de fallback;
- Generation Budget relevante.

Uma capability `surface-tool` só é PASS se você realmente possui essa ferramenta disponível nesta execução. Configuração não equivale a conexão.

Se um asset exige Higgsfield e a ferramenta Higgsfield não está disponível, BLOCKED. Não substitua por SVG, vetores, CSS, imagem estática ou outro gerador sem override explícito.

Respeite required modality e Visual Integration Contract. Em refines, aplique Preservation Contract e mude somente o escopo autorizado.

Registre eventos sem segredos e sem chain-of-thought privada.

Ao concluir, retorne COMPLETED/PARTIAL/BLOCKED, resumo das mudanças, tools realmente usadas, consumo de budget e próximo passo `/le-review`.
