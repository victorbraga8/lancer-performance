# Lancer Performance — cinematic industrial refinement

## Papel e objetivo

Implemente uma refinação estritamente focada da landing React/Vite existente. O resultado deve transmitir uma presença urbana-industrial de rua/pista, com tensão mecânica e agressividade equilibrada, sem comprometer leitura, legibilidade, navegação, desempenho ou acessibilidade.

O visitante deve entender que a performance é a consequência de sistemas mecânicos conectados: o Hero apresenta o foco, Construction process explica a causa e Performance consequence materializa o resultado. A intensidade cresce no Hero, desacelera para a explicação técnica, volta a subir nos detalhes de Performance e relaxa no CTA final.

## Preservar

- A estrutura existente: Header, Hero, Construction process, Performance consequence e CTA final.
- React 19, Vite, Motion, CSS, Three e R3F já instalados. Não adicionar dependências; não criar cena 3D, shader, GSAP, vídeo gerado ou provider externo.
- A imagem do Lancer como protagonista no desktop. Os assets de detalhe já existentes continuam vinculados às quatro disciplinas de Performance.
- Suporte a teclado, toque, foco visível, `prefers-reduced-motion`, contraste e ausência de overflow horizontal.
- O pico de tensão na chegada à seção Performance é apenas uma hipótese de teste futuro: não o implemente neste prompt.

## Direção visual

- Base quase preta/grafite; vermelho de sinalização e luz fria apenas em pontos de estado, transição e profundidade.
- Use fumaça baixa, grão discreto e luz rasante como atmosfera de fundo, com opacidade limitada e sempre atrás de texto, controles e imagens de evidência. A referência é a energia de garagem/pista noturna, sem reproduzir identidade ou gráficos de Need for Speed.
- Não aplique o mesmo efeito em todas as seções. A atmosfera é mais presente no Hero e em Performance; Construction process é uma zona de precisão e recuperação visual.
- Movimentos devem sugerir aceleração curta, inércia e dissipação. Durante a leitura, a interface permanece estável.

## Escopo de implementação

### 1. Back to top

Atualize `BackToTop` para que o controle não exista visualmente nem na navegação por teclado antes de o visitante iniciar a rolagem. Depois de uma pequena distância real de rolagem, revele-o com uma entrada curta e reversível; ao retornar ao topo, oculte-o novamente.

- Mantenha o destino `#hero`, o nome acessível e o foco visível.
- Não exiba o controle por padrão e não crie um novo pico visual; ele continua sendo uma utilidade discreta no canto inferior direito.
- Respeite redução de movimento com alteração estática ou uma transição mínima.

### 2. Hero: eliminar a falsa aparência de tabs

`Focus / Wheel suspension` e `Sequence / Scroll controlled` não são controles. Reestruture `hero-meta` como uma única legenda técnica de leitura contínua, ou como dois metadados claramente descritivos ligados por uma linha/ordem visual.

- A relação deve comunicar: o foco da inspeção é roda/suspensão e a rolagem conduz a sequência de inspeção.
- Não use aparência de tab, botão, estado selecionado ou cartões independentes.
- Preserve contraste e mantenha esse bloco como suporte ao título, não como concorrente do carro ou da chamada principal.

### 3. Construction process: conectar número, seletor e imagem

Reelabore a relação entre os números à esquerda e o ícone no canto direito dos itens de `design-points`.

- Remova a sensação de que `↗` é uma ação genérica desconectada. Transforme o elemento à direita em um marcador/localizador de estado associado ao item selecionado, usando o mesmo número, cor e linguagem da anotação visual.
- Ao selecionar 01, 02 ou 03, a imagem deve evidenciar que aquele item comanda a vista `PROCESS / 01`, `PROCESS / 02` ou `PROCESS / 03`; os callouts sobre a imagem continuam como provas técnicas daquele recorte.
- Use uma linha técnica curta, um anel, ou um conector equivalente para criar a continuidade entre a lista e a imagem. Não adicione outro controle e não transforme a explicação em decoração.
- Preserve clique, teclado e estado ativo inequívoco. A transição entre views deve ser curta e controlada; com redução de movimento, resolver sem deslocamentos perceptíveis.

### 4. Continuidade entre Construction process e Performance consequence

Faça a marcação técnica vermelha evoluir entre as duas seções: uma linha ou detalhe de sinalização pode encerrar a construção e reaparecer, transformado, no início de Performance.

- Ela deve funcionar como ponte narrativa de causa para consequência, nunca como uma faixa decorativa contínua.
- Use CSS e/ou Motion já presentes; mantenha-a fina, contida e responsiva.

### 5. Performance consequence: troca de imagens e interação

Mantenha as quatro disciplinas como controles de seleção e aprimore a transição do asset associado.

- A troca não pode ser apenas um fade. Faça a imagem atual dissipar e a próxima entrar por uma varredura/máscara curta, com um leve rastro de fumaça atrás do conteúdo e uma resposta de luz vermelha controlada no estado ativo.
- Use camadas de entrada e saída reais para evitar corte abrupto. Em `prefers-reduced-motion`, reduza para uma troca estática ou opacity breve.
- Preserve o carro como camada de contexto no desktop, sem competir com o detalhe selecionado. A imagem de detalhe, o rótulo e a disciplina ativa precisam permanecer legíveis.
- Cada disciplina continua acessível por clique, foco e toque; `aria-pressed`, foco visível e diferença inequívoca entre ativo, hover e foco devem permanecer.

### 6. Performance consequence no mobile — REDESIGN

No mobile, não use a imagem do carro como fundo da área de Performance. O palco deve ser preenchido pela imagem do item selecionado (`motor.jpg`, `cambio.jpg`, `roda.jpg` ou `suspensao.jpg`), e a troca precisa ficar imediatamente evidente após toque.

- Reorganize controles, texto e imagem para que a imagem selecionada seja a prova principal no mesmo viewport.
- Preserve a trilha de quatro controles como seleção compacta, com alvo de toque confortável, rótulo curto e estado ativo muito claro.
- A camada do carro pode ser ocultada nessa largura; não a mantenha como fundo escurecido ou elemento visual residual.
- Evite carrossel, rolagem horizontal e pilhas de cards. A solução deve parecer um instrumento de seleção, não uma galeria.

## Roteamento técnico aprovado

- Use Motion já instalado para entrada/saída do Back to top, mudança de disciplina e transições de imagem em camadas.
- Use CSS para grão, fumaça baixa, reflexos rasantes e a linha de continuidade. Esses elementos precisam ser isolados das zonas de leitura e ter `pointer-events: none`.
- Não introduza dependência, provider, mídia gerada ou renderização 3D para este escopo.

## Critérios de aceite

- TOP não aparece nem recebe foco antes de o usuário rolar; aparece depois e retorna corretamente a `#hero`.
- Hero deixa claro foco mecânico e sequência de rolagem sem se parecer com tabs.
- Em Construction process, número, seletor/indicador e `PROCESS / NN` formam uma relação visual compreensível.
- As quatro disciplinas trocam o detalhe com transição de saída e entrada, sem corte visual abrupto; o modo reduzido permanece calmo.
- No mobile, a imagem selecionada é o palco de Performance e a imagem do Lancer não aparece ao fundo.
- Atmosfera industrial e continuidade entre seções elevam a narrativa sem reduzir legibilidade de títulos, cópia, rótulos ou controles.
- Verifique build, desktop/mobile, toque, teclado, foco visível, redução de movimento e ausência de overflow horizontal após a implementação.
