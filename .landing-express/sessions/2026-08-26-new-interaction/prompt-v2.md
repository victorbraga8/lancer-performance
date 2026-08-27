# Lancer Performance - refine de precisao mecanica

## Objetivo

Evoluir a landing React/Vite existente do Lancer Performance sem refaze-la. Preservar o estudio automotivo escuro, grafite/preto, vermelho pontual, linhas de engenharia, protagonismo do Lancer e composicao editorial limpa. O refine deve corrigir comportamento, enquadramento, hierarquia tipografica e interpretacao mobile com intensidade controlada.

## Preservar

- Estrutura e narrativa: Header, Hero, Process (`DesignLanguage`), Performance e Closing (`FinalCta`).
- Hero como pico de presenca; Processo como prova/recovery; Performance como segundo pico; Closing como recovery.
- Stack atual: React 19, Vite, `motion/react`, `@react-three/fiber` e `three`. Nao adicionar dependencias.
- `prefers-reduced-motion`, foco visivel, navegacao por teclado, contraste e ausencia de overflow horizontal.
- Motivo de continuidade: linha de piso da Hero -> eixo do Processo -> linha de progressao da Performance -> eixo final.

## Performance - consequencia mecanica

### Intencao perceptiva

Os quatro atributos devem parecer consequencias conectadas de uma mesma arquitetura. O estado escolhido permanece inteligivel sem competir com a acao imediata do ponteiro.

### Mecanismo

- Separar estado selecionado de estado hovered. Clique, foco e toque definem `selected`; mouse enter define `hovered`; mouse leave remove somente `hovered`.
- Marker hovered: vermelho pleno e resposta curta. Marker selecionado sem hover: vermelho mais leve, sem glow; demais markers permanecem neutros.
- A midia principal continua sendo o Lancer. Ajustar seu `object-position` horizontal para revelar mais capo e frente, deslocando a imagem visualmente para a esquerda sem alterar o layout.
- Usar `public/assets/roda.jpg` como evidencia tecnica secundaria de frenagem/chassi: um insert ou detalhe subordinado que aparece somente no contexto desses atributos. Nao substituir o Lancer, nao transformar a roda em card decorativo e nao abrir nova section.
- Preservar linha de progressao, foco e toque; nenhuma animacao concorrente ou deslocamento de layout.

### Responsivo

Desktop: **PRESERVE + ADAPT** a progressao e a midia fixa.

Mobile: **REDESIGN** em sequencia vertical tatil; marker selecionado suave continua legivel sem hover; evidencia da roda so aparece se couber como detalhe curto e nunca comprimir a leitura.

## Process - composicao mobile

### Intencao perceptiva

No mobile, o capo deve continuar sendo a prova de construcao sem depender de tabs comprimidas.

### Mecanismo

- Desktop preserva tabs, estados e callouts existentes.
- Mobile: **HIDE + REPLACE**. Ocultar tabs clicaveis. Manter o estado inicial e exibir tres flags tecnicas estaticas sobre zonas seguras do capo, com contraste e tamanho legivel.
- Flags nao sao controles: remover cursor/acoes e evitar qualquer dependencia de hover. Posicionar para nao cobrir farois, linhas de carroceria ou leitura essencial.

## Luz e motion

- Nao adicionar uso novo de Three.js/R3F, GSAP, shader ou dependencia para light rays.
- Quando houver oportunidade real, usar uma unica passagem de luz mascarada por CSS/Motion sobre a superficie do capo: curta, deterministica, sem loop e acionada uma vez na entrada da section. A passagem deve parecer reflexo de estudio, nao laser, haze ou glow.
- Em reduced motion, mostrar somente a luz estatica/composicao final ou ocultar a passagem.
- Continuar evitando smoke, particulas, parallax generico, halos volumosos e efeitos decorativos.

## Tipografia

- Manter headlines amplas, leves e tensionadas; nao aplicar bold ou caixa alta globalmente.
- Usar caixa alta com peso 600-700 de modo seletivo em flags tecnicas e labels de Performance, com tracking ajustado para leitura.
- Body copy permanece em peso regular e sentence case. Nao reduzir microtipografia a decoracao; respeitar o piso de legibilidade atual.

## Asset governance

- `public/assets/roda.jpg`: aprovado apenas como evidencia secundaria de frenagem/chassi, em estudio escuro coerente com o territorio.
- Asset Higgsfield do motor: nao usar enquanto a versao publica tiver watermark. Aceitar somente arquivo original sem marca ou crop que naturalmente exclua a marca; nunca remover watermark.

## Criterios de aceite

- O bullet selecionado fica em vermelho mais leve quando o hover deixa o item; o hovered permanece em vermelho pleno.
- A imagem do Lancer na Performance revela capo/frente com enquadramento deslocado, sem quebrar desktop ou mobile.
- A roda reforca frenagem/chassi sem roubar protagonismo do Lancer.
- No mobile de Process, tabs somem e flags estaticas tecnicas ocupam zonas seguras no capo.
- Nenhuma biblioteca nova e nenhum efeito generico de automotivo sao introduzidos.
- Tipografia ganha peso/caixa alta somente em rotulos de funcao tecnica.
- Validar build, desktop/mobile, teclado, reduced motion e overflow apos a implementacao.
