# Refinamento visual da landing Lancer

## Papel e escopo

Atue como engenheiro front-end sênior em uma landing React/Vite existente. Faça uma alteração cirúrgica: preserve estrutura, links, navegação, a hero aprovada e todos os ativos válidos fora das áreas listadas. Não altere copy, rotas ou seções fora de escopo sem necessidade direta.

## Objetivo

Elevar a experiência Web Cinematic premium do Lancer abaixo da hero, reforçando engenharia esportiva dark, clareza editorial e interações úteis. A narrativa deve seguir: hero aprovada → arquitetura compreensível → precisão construtiva → consequência em performance.

## Percepção e gramática visual

- Público: interessado em performance automotiva e engenharia esportiva premium.
- Tom: preciso, escuro, técnico e premium; grafite, preto, metal e vermelho discreto.
- A hero é o pico visual. As seções seguintes devem aprofundar a leitura, não disputar atenção com ela.
- Crie profundidade por enquadramento, máscara, sombra e recortes de luz. Use superfícies translúcidas somente como apoio; nunca reduza a legibilidade do texto principal.
- Evite HUD, sci-fi genérico, wireframes decorativos, excesso de cards e linhas apenas ornamentais.

## Hero — preservar e limpar

- Preserve integralmente a composição, a hierarquia e a legibilidade aprovadas.
- Abaixo do veículo, próximo ao capô, mantenha somente as duas linhas atualmente corretas.
- Remova a terceira linha vertical e a quarta linha conectada a ela. Não introduza novos guias ou elementos concorrentes nessa zona.

## Spatial Architecture — trocar scrollytelling por carrossel 3D

- Remova por completo a antiga experiência dependente de scroll/scrollytelling e seus assets vinculados.
- Substitua-a por um carrossel editorial com três estados: **Estrutura**, **Dinâmica** e **Controle**.
- Cada estado deve ter texto fixo em coluna própria, um controle explícito e uma cena 3D programática compacta. A troca de slide deve conduzir câmera, luz e camadas da cena; não use rolagem como controlador da câmera.
- Use Three.js/R3F exclusivamente nesta seção. A cena deve comunicar: volumes e rigidez em Estrutura; transferência de carga e fluxo em Dinâmica; relação entre resposta, tração e frenagem em Controle. Não faça alegações técnicas não verificadas sobre o veículo.
- A leitura deve continuar segura: controles com estado ativo claro, teclado e toque funcionais, foco visível e targets confortáveis.
- Mobile e reduced motion: simplifique a cena e ofereça fallback estático em camadas/SVG, mantendo os três estados e a coluna de texto; nunca esconda informação necessária dentro da cena.

## Construction Process — prova interativa e tipografia mais presente

- Use `lancer-front-detail.png` como cena principal.
- Reequilibre a tipografia de "Every interface…" e da lista abaixo: aumente escala, peso, contraste e espaçamento da lista, mas mantenha uma hierarquia clara entre título, explicação e itens clicáveis.
- Fortaleça os marcadores na imagem: maior área de leitura, número/label com contraste suficiente e linhas de chamada curtas, sem se sobrepor ao texto editorial.
- Construa uma única fonte de dados para os itens de construção e seus marcadores. Ao clicar, focar ou navegar por teclado em um item, atualize somente os marcadores correspondentes, o estado ativo e a cópia de apoio necessária.
- Não use um conjunto fixo de marcadores que ignore a seleção. No mobile, converta os detalhes em blocos de leitura associados ao item ativo e mantenha a imagem sem poluição.
- A transição entre seleções deve ser curta e programática; respeite `prefers-reduced-motion`.

## Response is built — consequência visual unificada

- Reconstrua a área como uma única composição de performance, não como quatro cards isolados.
- Crie uma mídia de grande escala com stills existentes em recortes cinematográficos, contraste e luz controlada. Organize potência, tração, frenagem e chassi como uma progressão conectada em vez de painéis independentes.
- Dê maior peso tipográfico aos dados/ideias principais e reduza o ruído dos elementos secundários. O visitante deve perceber primeiro o todo e depois as quatro consequências.
- Use movimento programático de apoio para revelar a progressão; mantenha-o reversível, sutil e desativável por reduced motion.
- Não use `wheel-exploded-a01.png` nem `wheel-explosion.mp4` como clímax ou mídia desta narrativa. Não gerar nem buscar mídia externa. Se não houver vídeo existente compatível, use stills existentes e movimento programático com qualidade cinematográfica.

## Ativos e restrições

- Use somente ativos existentes no repositório, incluindo quando apropriado `lancer-hero.png`, `lancer-front-detail.png` e `lancer-rear-cta.png`.
- Não usar Higgsfield, outro provider ou mídia externa gerada.
- Preserve a seção final e sua função de fechamento; não transforme o refinamento de performance em um segundo pico que prejudique o encerramento.

## Motion, acessibilidade e responsividade

- Aplique Motion ou GSAP como única camada principal de animação 2D; Three.js/R3F fica isolado em Spatial Architecture.
- Não adicionar scroll locking, overflow horizontal ou efeitos que cruzem as zonas de leitura.
- Garanta contraste, foco visível, semântica de botões/controles, navegação por teclado, alvos de toque, mobile como composição própria e `prefers-reduced-motion`.

## Critérios de aceite

- Hero preservada e as duas linhas excedentes removidas, sem afetar os dois guias corretos.
- Spatial Architecture não depende mais de scroll e entrega três slides 3D claros, navegáveis e com fallback.
- Construction Process possui lista e marcadores legíveis; cada escolha atualiza seus próprios marcadores.
- Response is built é uma composição unificada, visualmente mais rica e tipograficamente mais forte, sem novo ativo externo ou clímax de roda.
- Desktop, mobile e reduced motion validados; sem overflow horizontal e sem regressão em links/navegação preservados.
