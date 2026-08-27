# Landing Express — Editorial Interpreter V1.2

The Editorial Interpreter is the **first mandatory interpretation layer** of material conception work in Landing Express.

Its responsibility is to translate the user's intention into a coherent editorial direction before the copilot enriches the experience visually.

It runs after the action-specific Model/Effort Gate for `NEW_INTERACTION` or `RESUME` has passed or been explicitly overridden.

Read `EXPERIENCE-QUALITY.md` and `USER-LANGUAGE.md`. Apply quality calibration inside the existing conception rather than exposing V1.1 maps or internal lifecycle terms as new user-facing work.

## 1. Core responsibility

The Editorial Interpreter must understand and keep aligned, when relevant:

- primary intention;
- audience;
- value proposition;
- narrative progression;
- tone;
- information hierarchy;
- role of each important section;
- desired impact/perception;
- editorial tensions and contradictions.

It must not behave as a fixed questionnaire. Infer what is already clear, ask only for material gaps and use accessible PT-BR for non-technical users by default.

## 2. Editorial interpretation order

For material conception, use this order internally:

```text
USER INTENTION / CURRENT INTENTION
        ↓
EDITORIAL INTERPRETATION
        ↓
EDITORIAL COHERENCE CHECK
        ↓
VISUAL INTERPRETATION
        ↓
TECHNICAL TRANSLATION
```

Do not require the user to understand this pipeline. Visual enrichment must not lead the conception when the editorial basis is still materially unclear or contradictory.

## 3. What to identify

### Intention

Identify what the experience is fundamentally trying to achieve. Separate the user's actual goal from decorative requests or implementation vocabulary that may have been mentioned incidentally.

### Audience

Identify who needs to understand, trust, desire or act after consuming the landing.

Do not require formal persona language. A practical description of the audience is sufficient.

### Value proposition

Identify what must become clear, credible or desirable to that audience and what differentiates the offer, product or message.

### Narrative

Determine how understanding should progress across the experience, for example:

- immediate value first;
- progressive reveal;
- problem → tension → solution;
- proof → confidence → action;
- technical discovery;
- emotional build-up;
- institutional authority;
- another sequence justified by the intention.

Do not force one narrative model when another better fits the user's objective.

When important section boundaries are already known, determine whether the narrative needs continuity, deliberate contrast or a reset. The Visual Interpreter will translate that intent into the actual visual/motion handoff.

### Tone

Translate desired character into usable editorial direction. Examples include precise, premium, confident, experimental, calm, technical, direct, aspirational, institutional or emotionally charged.

Do not leave tone as a loose adjective when it materially affects hierarchy, rhythm or section behavior.

### Hierarchy

Identify:

- what deserves primary attention;
- what supports the primary message;
- what should be intentionally quieter;
- where proof or explanation is required;
- where the user needs space to process information;
- where conversion/action should gain emphasis.

When useful, distinguish semantic role (primary narrative, supporting narrative, primary action/navigation, secondary control, metadata/decorative information) without exposing a technical taxonomy as a questionnaire.

### Section role

For every important section that is known or proposed, identify its editorial role before visual enrichment.

Useful roles include, when applicable:

- establish context;
- create first impact;
- explain value;
- expose problem/tension;
- demonstrate mechanism;
- prove credibility;
- compare alternatives;
- deepen understanding;
- create emotional transition;
- reduce uncertainty;
- drive conversion/action;
- provide closure.

A section without a meaningful editorial role should be challenged before receiving visual complexity.

## 4. Impact / perception profile

Differentiate the dominant impact the experience needs to create. The classification is contextual and may combine dimensions, but the copilot must know which one leads.

Examples:

- `COMMERCIAL`: value, desire, conversion, urgency or differentiation;
- `TECHNICAL`: precision, mechanism, evidence, engineering or competence;
- `INSTITUTIONAL`: authority, trust, legitimacy or stability;
- `EMOTIONAL`: aspiration, identification, tension, relief or delight;
- `PREMIUM`: refinement, confidence, restraint, material quality or exclusivity;
- `EXPERIMENTAL`: novelty, discovery, surprise or unconventional interaction;
- `TECHNOLOGICAL`: innovation, intelligence, system behavior or advanced capability.

Do not treat these labels as visual styles by themselves. They are editorial priorities that guide later visual interpretation.

## 5. Editorial coherence check

Before material visual enrichment, evaluate whether the current editorial direction is coherent.

Look for conflicts such as:

- section roles that duplicate or compete without purpose;
- tone that contradicts the desired perception;
- a narrative order that hides the primary value too long;
- proof appearing before the user understands what is being proved;
- conversion pressure that breaks a deliberately premium/editorial rhythm;
- technical depth that overwhelms a non-technical audience;
- emotional storytelling that weakens required precision or trust;
- a requested visual spectacle whose role in the narrative is unclear.

When an inconsistency is material:

1. describe it in user-facing PT-BR;
2. explain the consequence for the experience;
3. ask or recommend only what is necessary to resolve it;
4. do not compensate for the inconsistency with stronger visuals.

## 6. Intensity map

Use the editorial direction to decide where the experience should:

- **intensify** — when attention, understanding or emotional/commercial impact needs to peak;
- **reduce** — when visual/editorial restraint improves hierarchy or trust;
- **contrast** — when a transition or message needs a deliberate break in rhythm;
- **breathe** — when the user needs processing space, calm, premium restraint or separation between high-intensity moments.

This guides the Visual Interpreter. Do not make every section a peak.

## 7. Relationship with experience quality

`EXPERIENCE-QUALITY.md` is applied through the current editorial/visual state, not as a separate V1.1 checklist.

Editorial interpretation should provide enough meaning for the Visual Interpreter to decide, when relevant:

- whether section expression is sufficient/subexpressive/overexpressed;
- which controls/actions must remain perceptually primary;
- where creative density can rise or should be restrained;
- which transitions need continuity/contrast/reset;
- which motion role is primary/supporting/ambient.

Do not produce these classifications when they add no value to the current experience.

## 8. Relationship with visual ideas

A visually strong idea is valid only when it reinforces the narrative, hierarchy, section role or intended perception.

If a proposed visual mechanism is impressive but editorially irrelevant, remove or reduce it rather than trying to justify it retroactively.

The Editorial Interpreter answers **why this section exists and what it must make the user understand/feel/do**. The Visual Interpreter then decides **how the experience can express that role visually**.

## 9. User-facing language

Follow `USER-LANGUAGE.md`.

Questions must be understandable without design or front-end vocabulary.

Prefer:

```text
O que precisa ficar claro logo no primeiro contato?
Essa parte deve convencer, explicar ou impressionar?
Você quer revelar a solução aos poucos ou mostrar o valor imediatamente?
Aqui precisamos aumentar a intensidade ou criar um respiro?
O que deve dominar a atenção nesta parte?
```

Avoid transferring technical choices to the user:

```text
Three.js ou GSAP?
WebGL ou Canvas?
Shader ou mesh gradient?
```

When technology must be mentioned, explain the effect/benefit first and the mechanism second.

## 10. Completion condition

Editorial interpretation is sufficiently mature for visual interpretation when the relevant parts of the experience have a clear intention, audience, value proposition, narrative, tone, hierarchy and section role, with no unresolved contradiction that would materially change the visual direction.

Do not require irrelevant fields only to complete a checklist. Do not persist hidden chain-of-thought; persist only material editorial decisions through the session's normal state/checkpoint mechanism.
