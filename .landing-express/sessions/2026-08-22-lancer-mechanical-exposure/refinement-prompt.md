# Refinement Prompt — Temporary A01 Override

## EXECUTION MODE

Execute um refine localizado sobre a implementação atual. O A01 estático + SVG foi aceito temporariamente pelo usuário e não deve ser regenerado neste ciclo.

## PRESERVE

- Stack Vite + React, componentes, dependências e rotas existentes.
- Paleta grafite/metálica, accent vermelho e atmosfera premium automotiva.
- Hero em duas linhas, copy focada em arquitetura mecânica e CTA não comercial.
- Ordem narrativa hero → engenharia → processo → performance → síntese.
- Scroll como timeline principal e uma anotação composicional por estado.
- Asset `/assets/higgsfield/wheel-exploded-a01.png` exatamente como está.
- Progressão SVG → still atual como fallback temporariamente aprovado.
- Reduced motion usando o A01 estático.
- Copy sem especificações técnicas inventadas.
- Alterações locais do usuário em `package-lock.json`, `.agents`, `.claude` e arquivos fora do escopo.

## CHANGE ONLY

- Executar build e checks estáticos.
- Verificar a landing no navegador em desktop e mobile.
- Verificar hero em no máximo duas linhas, ausência de overflow horizontal, scroll progressivo, hold final e reduced motion.
- Corrigir somente erros de build ou gaps visuais/responsivos diretamente comprovados pelos checks.
- Registrar a execução e os riscos residuais.

## PROIBIDO NESTE CICLO

- Chamar Higgsfield ou qualquer gerador.
- Consumir Generation Budget.
- Regenerar, editar ou substituir o A01.
- Alterar direção, narrativa, copy, paleta ou estrutura aprovada sem evidência de regressão.
- Refatorar fora dos arquivos diretamente responsáveis por um gap comprovado.

## ACCEPTANCE CRITERIA

- Build concluído com sucesso.
- Hero permanece em duas linhas em desktop e mobile.
- Nenhum overflow horizontal.
- Scroll controla a sequência de forma previsível.
- Estado final explodido permanece legível.
- Reduced motion remove movimento contínuo e mostra o A01 estático.
- Nenhuma alteração fora de `CHANGE ONLY`.
- Pendência de modalidade do A01 permanece documentada, sem ser tratada como resolvida.
