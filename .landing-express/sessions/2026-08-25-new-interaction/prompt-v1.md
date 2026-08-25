# ROLE / EXECUTION MODE

Atue como engenheiro front-end sênior. Melhore a landing React/Vite existente de forma cirúrgica, preservando a estrutura, os links, a navegação e os ativos válidos fora do escopo. Implemente a direção abaixo; não gere mídia externa, não inicie deploy e não altere copy, rotas ou dependências sem justificativa direta.

# BUILD OBJECTIVE

Transformar a landing do Lancer em uma experiência Web Cinematic premium de temática automotiva esportiva dark. A experiência deve parecer mais intensa e coesa, com a hero como principal cena, engenharia como explicação espacial, construção como prova de precisão, performance como consequência conectada e fechamento limpo do sistema completo.

# EXPERIENCE / EDITORIAL DIRECTION

- Percepção principal: performance esportiva com agressividade controlada; grafite, preto, metal e acentos vermelhos discretos.
- A narrativa deve progredir como: cena do veículo -> arquitetura -> processo construtivo -> consequência em performance -> síntese final.
- Manter uma única ênfase dominante por seção. Sofisticação vem de composição, luz, profundidade e ritmo, não de acumular efeitos.
- Evitar estética genérica de corrida, HUD, brilho sci-fi, excesso de cards, linhas decorativas e CTAs comerciais dominantes.

# VISUAL GRAMMAR

- Use o estúdio escuro e preciso já presente nos ativos digitais como ambiente comum.
- Dê mais presença aos ativos por enquadramento, camadas de luz, máscaras, contraste e profundidade; não use imagens como mero fundo passivo.
- As zonas de texto são invioláveis: copy, CTA, navegação, labels e controles precisam de contraste, respiro e ordem clara. Nenhum elemento de cena pode sobrepor ou reduzir sua legibilidade.

# SECTION-BY-SECTION STORYBOARD

## Hero

- Use `public/assets/higgsfield/lancer-hero.png` como cena principal do veículo em três quartos.
- Valorize escala, piso refletivo, recorte de luz na carroceria e um acento vermelho sutil no chão.
- Introduza uma ignição controlada: luz ambiente/recorte aparece de forma breve e discreta. O título, a introdução e o CTA permanecem mais importantes que a animação.
- Preserve o título em até duas linhas e a leitura clara no desktop e no mobile.

## Arquitetura / seção atualmente associada a Exploded State

- Remova a dependência narrativa do asset Higgsfield e da sequência de vídeo/frame. Não usar `wheel-exploded-a01.png` nem `wheel-explosion.mp4` como clímax.
- Reposicione a seção como leitura espacial da arquitetura mecânica: uma cena 3D delimitada revela profundidade e camadas enquanto a rolagem progride.
- Three.js/R3F é permitido somente aqui, para tornar o módulo inspecionável e comunicar relação entre peças; não usar 3D como efeito global.
- A alternativa de baixa capacidade deve preservar a mesma intenção com SVG programático, composição em camadas e scroll reversível, sem voltar ao still Higgsfield.
- A copy deve ocupar coluna/área própria e fixa. Labels são curtos, aparecem em zonas seguras e no mobile passam a blocos de leitura fora da cena quando necessário.

## Construction process

- Use `public/assets/higgsfield/lancer-front-detail.png` como prova de materialidade e precisão.
- Faça uma máscara de luz revelar comedidamente capô, farol e grade. Três anotações curtas explicam essas áreas sem criar HUD.
- A imagem, a luz e a tipografia precisam reforçar construção e acabamento; o texto nunca deve competir com o close.

## Performance consequence

- Substitua a sensação de quatro cards independentes por uma composição unificada.
- Potência, tração, frenagem e chassi continuam legíveis, mas são conectados por uma única progressão visual/pulso de sistema.
- Dê tensão por ritmo, contraste, deslocamento e uma hierarquia clara; evite uma nova cena de produto tão forte quanto a hero.

## The Complete System

- Use `public/assets/higgsfield/lancer-rear-cta.png` para o fechamento.
- Reduza linhas, textos decorativos e elementos concorrentes. Organize imagem, mensagem e CTA sobre um único eixo de leitura.
- A máscara de entrada da traseira deve ser suave; o encerramento precisa comprimir e acalmar a narrativa, não criar outro pico visual.

# CINEMATIC DIRECTION / MOTION LANGUAGE

- Crie uma linha de carga única para a transição hero -> arquitetura. Ela guia o olhar e permanece fora de zonas de leitura.
- Priorize movimento programático, reversível e sincronizado com scroll. Respeite `prefers-reduced-motion` com versões estáticas coerentes.
- Para animações refinadas, escolha apenas uma biblioteca entre Motion e GSAP. Não introduza ambas.
- Dependências 3D devem ficar confinadas à seção de arquitetura e só ser adicionadas se a implementação espacial realmente precisar delas.

# RESPONSIVE / MOBILE BEHAVIOR

- Mobile é uma composição própria, não um desktop encolhido.
- Reenquadre as imagens, transforme anotação sobre imagem em bloco de leitura quando necessário e reduza ou simplifique a cena 3D.
- Preserve título, CTA e informações essenciais em área segura, com contraste, alvos de toque adequados, foco visível e zero overflow horizontal.
- Reduced motion deve manter significado e hierarquia mesmo sem sequências animadas.

# GENERATED MEDIA / ASSET DIRECTIONS

- Use apenas os ativos existentes no repositório: hero, detalhe frontal e traseira.
- Não chamar Higgsfield ou outro provider, não gerar imagem/vídeo externo e não depender de mídia sintetizada.
- O nome da pasta dos ativos não é autorização para usar Higgsfield como provider.

# HARD CONSTRAINTS

- Preservar acessibilidade, navegação atual, responsividade e comportamento de movimento reduzido.
- Não introduzir texto sobre imagem sem área de contraste e respiro garantidos.
- Não criar overflow horizontal funcional, especialmente no mobile.
- Manter componentes visuais focados em renderização; estado de scroll e orquestração devem ficar em hooks/componentes especializados, sem misturar regras de domínio ou server-side.
- Evitar refactor fora das seções afetadas.

# VALIDATION / ACCEPTANCE CRITERIA

- Hero tem maior impacto visual, com copy e CTA plenamente legíveis.
- A antiga Exploded State não depende de Higgsfield e comunica arquitetura espacial de modo controlado.
- Construction process e Performance consequence ganham relevância visual sem competir entre si ou com a hero.
- The Complete System fica mais organizado, com menos ruído de linhas e uma hierarquia final inequívoca.
- Desktop, mobile e `prefers-reduced-motion` preservam leitura, navegação, contraste e ausência de overflow horizontal.
- Executar checks de build e revisão visual proporcional às mudanças; relatar validações não executadas.
