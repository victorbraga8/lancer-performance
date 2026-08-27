# Refinement Prompt — Navigation Current State

## EXECUTION MODE

Execute um refine localizado exclusivamente no estado atual da navegação contextual do header.

## PRESERVE

- Stack Vite + React, dependências, rotas e estrutura de seções.
- Todo o visual, copy, assets e comportamento atual fora da navegação contextual.
- Hero em duas linhas, sequência SVG → still, A01, scroll timeline e reduced motion.
- Header, marca, CTA e linguagem visual de underline/vermelho existentes.
- Override temporário do A01 e Generation Budget em zero para este refine.

## CHANGE ONLY

- Resolver qual seção entre `engineering`, `process` e `performance` está ativa.
- Manter a orquestração do estado fora do componente visual `Header`.
- Passar ao `Header` apenas um identificador explícito da seção ativa.
- Renderizar `aria-current="location"` somente no link ativo.
- Criar um estado visual persistente coerente com o underline existente e perceptível sem depender somente de cor.
- Reutilizar o lifecycle de scroll/observer mais simples compatível com o projeto, com cleanup e sem listeners duplicados.

## PROIBIDO NESTE CICLO

- Alterar copy, assets, direção, sequência, seções, narrativa ou breakpoints.
- Chamar Higgsfield ou qualquer gerador.
- Consumir Generation Budget.
- Adicionar dependências.
- Transformar o `Header` em responsável por scroll, observação de viewport ou regra de seção ativa.
- Refatorar arquivos sem relação direta com o estado atual da navegação.

## ACCEPTANCE CRITERIA

- Engineering, Process e Performance recebem estado atual coerente durante a navegação pelas respectivas seções.
- Exatamente um link aplicável expõe `aria-current="location"` quando uma seção contextual está ativa.
- O feedback ativo permanece perceptível e distinto do hover sem depender somente de cor.
- O `Header` continua presentational e recebe prop explícita, sem ViewModel inteira.
- Listeners/observers são encerrados corretamente e não são duplicados.
- Layout, hero, sequência, mobile, reduced motion e A01 permanecem inalterados.
- Nenhuma dependência ou geração é introduzida.
