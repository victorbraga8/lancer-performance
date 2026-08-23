# Regeneration Prompt — A01 Wheel/Suspension Explode

## EXECUTION MODE

Execute somente a regeneração e reintegração do A01. Não redesenhe a landing, não altere copy, seções, navegação, tipografia, paleta ou arquitetura fora do contrato abaixo.

## BLOCKING GATE

Antes de gerar:

- confirmar que o workspace Higgsfield permite geração de vídeo;
- confirmar saldo suficiente para uma tentativa dentro do budget restante;
- se vídeo continuar exigindo plano Basic ou exceder 3,8 créditos, parar como `BLOCKED`;
- não substituir por still, SVG, CSS ou outro provider sem override explícito do usuário.

## PRESERVE

- Vite + React e os componentes existentes.
- Hero em duas linhas e direção premium automotiva.
- Narrativa engenharia → processo → performance → síntese.
- Scroll como timeline PRIMARY.
- Uma anotação composicional por estado.
- O still `/assets/higgsfield/wheel-exploded-a01.png` como referência visual, end-frame e fallback reduced-motion.
- Todo o código fora de `WheelSequence` e da lista de frames/asset resultante.

## CHANGE ONLY

- Gerar um vídeo 16:9 silencioso no Higgsfield com início montado e final correspondente ao A01 estático aprovado.
- Extrair uma frame sequence otimizada para scroll.
- Trocar a progressão SVG → still pelo mapeamento de scroll aos frames reais.
- Manter o hold do estado final e o fallback reduced-motion.
- Corrigir somente integração, enquadramento e responsividade diretamente ligados à sequência.

## REQUIRED MODALITY / PROVIDER

- Provider: Higgsfield.
- Required modality: vídeo consumível como frame sequence.
- Fallback policy: `block`.
- Budget restante: um retry objetivo; tentativas recusadas antes de criar job não contam.

## SHOT DIRECTION

Use o frame inicial técnico existente como start reference e `/assets/higgsfield/wheel-exploded-a01.png` como end reference quando o modelo suportar start/end frames.

Prompt de geração:

> Locked-camera premium automotive engineering visualization of one Mitsubishi Lancer Evolution front wheel and suspension module. Start as one coherent assembled module. Progressively separate exactly one tire, one rim, one ventilated brake disc, one red caliper, one hub/bearing, one coilover damper and the necessary suspension links along one shared horizontal axis until the architecture spans almost the entire 16:9 frame. Preserve rigid geometry, realistic proportions, mechanical alignment, graphite studio lighting and restrained red accents. Motion must be slow, linear, precise and predictable. Hold the final exploded state. No tire deformation, melting, radial blast, random rotation, camera movement, zoom, orbit, duplicate parts, extra wheels, smoke, sparks, particles, glow, text, logos or HUD.

## INTEGRATION CONTRACT

- A roda/suspensão deve ocupar a linha narrativa inteira, não um canto.
- A câmera permanece travada durante todos os frames.
- O asset deve se fundir ao fundo grafite sem moldura ou card.
- O progresso do scroll mapeia previsivelmente início → separação → hold final.
- Mobile usa o mesmo frame sequence com enquadramento/pan controlado e sem overflow horizontal.
- Reduced motion mostra o A01 estático final.

## ACCEPTANCE CRITERIA

- Vídeo/frame sequence real entregue pelo Higgsfield.
- Nenhuma deformação de pneu ou peça.
- Uma única roda e um único conjunto de componentes.
- Separação linear cobrindo a composição.
- Câmera estável e continuidade entre frames.
- Build aprovado.
- Browser QA desktop/mobile aprovado.
- Hero permanece em duas linhas e nenhuma área fora de `CHANGE ONLY` sofre regressão.
