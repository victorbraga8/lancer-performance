# Build Prompt Contract — v0

Este arquivo define a forma mínima esperada do prompt final produzido pelo Landing Express Direction Copilot.

Ele não é um template para preencher mecanicamente. Se uma seção não fizer sentido para o projeto, ela pode ser omitida. Se uma decisão estiver intencionalmente aberta, isso deve ser declarado em vez de inventado.

## Estrutura

```text
ROLE / EXECUTION MODE
Defina o papel do executor e deixe claro que a direção já está aprovada. O executor deve implementar, não reinventar a concepção.

BUILD OBJECTIVE
O que será construído e qual resultado a experiência deve produzir.

HARD CONSTRAINTS
Stack, restrições, requisitos obrigatórios, limites de performance, mobile, acessibilidade ou outras regras fixas.

BUSINESS / CONVERSION INTENT
Oferta, público, ação desejada e contexto comercial relevante.

EXPERIENCE DIRECTION
A síntese da experiência: identidade, narrativa e comportamento esperado.

DESIRED PERCEPTION
Como a experiência deve ser percebida e como essa percepção se traduz em decisões concretas.

VISUAL GRAMMAR
Regras de cor, contraste, superfícies, cards, profundidade, glass, mesh, gradientes, bordas, radius, tipografia, imagens, espaçamento e composição.

GLOBAL UI/UX RULES
Hierarquia, navegação, CTA, comportamento de componentes, agrupamento e legibilidade.

NARRATIVE FLOW
Como a história progride da entrada até a conversão.

HERO MECHANIC
Mecânica dominante, se existir, com papel e limites claros.

MOTION LANGUAGE
Ritmo, velocidade, easing, continuidade, comportamento de hover e regras globais de movimento.

INTERACTION RULES
O que é controlado por scroll, hover, click, autoplay ou outras interações. Declare explicitamente quando scroll é a timeline da animação.

SECTION-BY-SECTION STORYBOARD
Para cada section relevante:
- propósito;
- conteúdo;
- composição;
- estado visual;
- motion;
- interação;
- assets;
- transição de entrada e saída.

ASSET MANIFEST
Todo asset gerado deve possuir ID, destino, função, obrigatoriedade e uso previsto.

GENERATED ASSET / HIGGSFIELD DIRECTIONS
Para cada asset aplicável:
- sujeito;
- estado inicial e final;
- câmera;
- movimento de câmera;
- movimento do sujeito/componentes;
- iluminação;
- ambiente/background;
- continuidade;
- invariantes de framing;
- elementos proibidos;
- forma de consumo no front-end.

GENERATION BUDGET
Número máximo de gerações planejadas por asset e condições objetivas que justificam retry.

RESPONSIVE / MOBILE BEHAVIOR
Como preservar intenção, hierarquia, interação e narrativa no mobile.

PROHIBITED PATTERNS
Padrões que quebram a direção aprovada ou representam risco previsível de AI Flop.

IMPLEMENTATION INTENT
Orientação suficiente para a construção sem transformar o prompt em código ou arquitetura inventada.

VALIDATION / ACCEPTANCE CRITERIA
Critérios objetivos e perceptivos que devem ser satisfeitos antes de considerar a landing concluída.
```

## Regra central

O executor deve receber liberdade para resolver detalhes de implementação, mas não para redefinir decisões de direção já aprovadas.

O prompt final deve reduzir ambiguidade em pontos que geram falha previsível e preservar liberdade onde criatividade ainda agrega valor.
