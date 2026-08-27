# Lancer Performance — restrained cinematic refinement v3

## Objetivo

Atualize a implementação React/Vite existente conforme o prompt-v2, com um único ajuste adicional: remover completamente o efeito de luz da Hero. A landing deve permanecer cinematográfica, industrial e legível, mas sem luzes decorativas na entrada.

## Preservar

- Estrutura, textos, assets e stack existentes: React, Vite, Motion e CSS; não adicione dependências, provider, mídia gerada, 3D ou shader.
- TOP aparece somente depois que a rolagem começa.
- Hero sem bloco Focus/Sequence e sem “Scroll to inspect”. O título, a cópia e “Deconstruct the system” são a única orientação do percurso.
- Construction process sem linha inferior, sem `LOAD PATH / TRANSMIT` e com um único indicador numérico à esquerda, junto ao item selecionável. A imagem existente continua sendo a prova principal.
- Performance sem pattern repetitivo, sem `LOAD PATH / RESPONSE` e sem atmosfera animada constante. No mobile, a imagem do Lancer não aparece como fundo; a imagem da disciplina selecionada ocupa o palco.
- Teclado, toque, foco visível, `aria-pressed`, contraste, `prefers-reduced-motion` e ausência de overflow horizontal.

## Hero — remoção do efeito de luz

- Remova o efeito luminoso/varredura/ignition da Hero, incluindo sua camada visual e qualquer animação associada.
- Não substitua por outro brilho, flare, linha ou transição. O carro, a tipografia e a CTA devem respirar com composição estática e iluminação já presente no asset.
- O Hero continua sendo o primeiro pico narrativo por escala, crop e contraste, não por efeito de luz.

## Construction process

- Preserve `lancer-front-detail.png` e os callouts técnicos por estado.
- O seletor deve usar o número uma única vez, no lado esquerdo. Remova o indicador numérico duplicado da direita e qualquer linha/conector inferior ornamental.
- A seleção continua trocando os marcadores e `PROCESS / NN` com uma transição curta; no modo reduzido, a troca é estática.

## Performance consequence

- Preserve os quatro assets (`motor.jpg`, `cambio.jpg`, `roda.jpg`, `suspensao.jpg`) vinculados às disciplinas.
- A imagem selecionada entra por máscara enquanto a anterior se dissipa; a troca deve ser evidente, mas calma.
- O acento de luz/reflexo só pode ser montado quando o usuário solicita outra disciplina. Não faça loop, pulso ou sweep em estado idle. Em redução de movimento, use troca estática/opacity curta sem luz.
- Desktop mantém o carro como contexto secundário. Mobile oculta o carro e usa o asset selecionado como palco principal, com controles compactos e acessíveis.

## Atmosfera e critérios

- Use apenas atmosfera estática e contida: base escura, contraste localizado e fumaça muito discreta quando não prejudicar leitura. Não use pattern, grão repetitivo, linha de transmissão ou labels sem função.
- Não implemente o teste futuro de pico de tensão na chegada à Performance.
- Verifique build, desktop/mobile, troca por toque/clique, foco de teclado, redução de movimento e overflow horizontal.
