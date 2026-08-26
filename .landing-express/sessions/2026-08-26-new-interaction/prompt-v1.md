# Lancer Performance — Evolução cinematográfica contida

## Objetivo

Evoluir a landing React/Vite existente sem descaracterizar a direção aprovada: estúdio automotivo escuro, técnico e premium, com grafite/preto, vermelho pontual, linhas de engenharia e protagonismo absoluto do Lancer. Não refazer a página nem criar uma estética de corrida genérica, sci-fi ou conversão comercial.

## Preservar

- Estrutura: Header, Hero, Process (`DesignLanguage`), Performance e Closing (`FinalCta`).
- Ativos locais existentes em `public/assets/higgsfield/`.
- Linguagem editorial, composição limpa, `prefers-reduced-motion`, foco visível, navegação e ausência de overflow horizontal.
- Stack atual: React 19, Vite, `motion/react`, `@react-three/fiber` e `three`. Não adicionar dependências.

## Gramática visual

- Headline: ampla, leve, tensa, com contraste entre peso regular e 300. Não torná-la mais bold por padrão.
- Microtipografia: mono somente para índices, estados e medidas; elevar o piso de legibilidade dos textos funcionais e reduzir tracking quando o conteúdo exigir leitura.
- Luz: recorte de estúdio localizado no carro; vermelho como vetor de carga, não glow decorativo.
- Densidade: uma ênfase dominante por section. Remover/reduzir qualquer camada que dispute o carro ou a copy.

## Contrato cinematográfico

### Continuidade

Transformar o acento vermelho entre sections: linha de piso da Hero → eixo do Processo → linha de progressão da Performance → eixo de fechamento. É o motivo de continuidade; não repetir literalmente o mesmo efeito.

### Hero — intensidade principal

Percepção: o Lancer deve parecer uma peça de engenharia sob luz controlada.

Mecanismo: preservar carro, headline e linha de piso; recalibrar `HeroLightScene` para reforçar recorte e volume de estúdio. Poeira visível, pulsos abstratos, smoke, halo volumoso e parallax genérico não devem ser a leitura dominante.

Implementação: manter R3F somente se produzir esse recorte com baixo custo e sem comprometer legibilidade; Motion continua responsável pelas entradas e pelo deslocamento discreto já existente.

Mobile: **PRESERVE + ADAPT**. Manter carro e headline como dupla principal; enquadrar frente/roda, proteger duas linhas e esconder metadados laterais já dispensáveis.

### Process — prova e recovery

Percepção: o detalhe frontal deve provar continuidade de superfície, junções e montagem.

Mecanismo: preservar close e estados selecionáveis; fazer o eixo de continuidade chegar como marcador técnico. Anotações devem ocupar zonas seguras.

Mobile: **REFLOW + REDESIGN**. Copy antes da imagem; marcadores absolutos tornam-se módulos de leitura abaixo/sobre a base segura da imagem. Manter estados de toque e foco.

### Performance — intensidade renovada

Percepção: os quatro atributos são consequências conectadas da mesma arquitetura, não uma lista genérica.

Mecanismo: manter a mídia estável e criar uma linha de progressão única para conectar potência, tração, frenagem e chassi. Hover, foco e toque ativam o atributo sem deslocar a mídia ou iniciar uma animação concorrente.

Mobile: **REDESIGN**. Sequência vertical própria, mídia mais curta, itens táteis e leitura por etapas; não apenas empilhar a grade desktop.

### Closing — síntese e recovery

Percepção: encerrar a inspeção com confiança e retorno claro ao sistema.

Mecanismo: manter traseira, eixo e CTA; reduzir competição visual, sem novo pico cinematográfico.

Mobile: **ADAPT + HIDE**. Concentrar enquadramento, CTA e eixo; ocultar informação institucional secundária se ela disputar a composição.

## Motion, acessibilidade e orçamento

- Hero: supporting/programmatic motion; Process: supporting/UI motion; Performance: primary/UI motion; Closing: estático com feedback discreto.
- Todos os movimentos devem ser determinísticos, reversíveis quando guiados por rolagem e dispensáveis com `prefers-reduced-motion`.
- Não usar smoke, partículas visíveis, shaders decorativos, novo 3D por section, GSAP ou novas bibliotecas.
- Curva: Hero intensa → Processo como prova/recovery → Performance intensa → Closing como recovery.

## Critérios de aceite

- A landing mantém a identidade aprovada e o Lancer continua como foco primário.
- As transições comunicam um sistema contínuo sem acumular efeitos.
- Labels técnicos funcionais são legíveis em desktop e mobile.
- Mobile preserva intenção por composição própria nos pontos definidos.
- Performance se torna segundo pico sem competir com a Hero.
- Desktop, mobile, teclado, reduced motion, ausência de overflow e build são verificados após implementação.
