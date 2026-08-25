# Landing Express — Generated Media Policy V1.2

Generated media providers such as Higgsfield are **exception mechanisms**, not architectural defaults.

Landing Express must preserve the Web Premium / Web Cinematic baseline regardless of whether generated media is available.

## 1. Decision order

Before recommending generated media, evaluate in this order:

```text
existing/reusable media
        ↓
CSS / typography / SVG / masking / composition
        ↓
programmatic motion / scroll / 3D / WebGL
        ↓
generated media only when materially justified
```

The goal is not to avoid generation at all costs. The goal is to use it only where synthesis creates material experience value that is not reasonably reproducible with deterministic techniques.

## 2. Prefer programmatic motion / 3D when comparable

Prefer deterministic implementation when it can deliver similar or superior quality because it normally provides:

- better interaction control;
- scroll reversibility;
- responsive adaptation;
- reuse;
- lower dependence on provider availability;
- easier refinement;
- lower retry risk;
- better synchronization with labels/UI/state.

Example:

```text
Para uma desmontagem técnica controlada pelo scroll, priorize cena programática quando o objeto puder ser representado com qualidade suficiente. Generated video só entra se o ganho visual de síntese for material e impossível de reproduzir razoavelmente em código/assets existentes.
```

## 3. When generated media is justified

Generated media can be recommended when at least one condition is material:

- photorealistic synthesis is central to the experience;
- the scene/environment would be disproportionately expensive to reproduce programmatically;
- a cinematic transformation depends on appearance generation rather than geometric/control logic;
- source media does not exist and creating it manually is impractical;
- a generated still/video materially increases perceived value without becoming the interaction engine itself.

A visually impressive result alone is not sufficient justification.

## 4. Provider decision factors

Before recommending Higgsfield or another provider, explicitly consider:

- cost / credits;
- free-tier or quota availability;
- provider availability/reliability;
- retry probability;
- reference consistency;
- export format and resolution;
- integration effort;
- latency only when it affects the production flow;
- whether the asset must support reverse/interactive playback;
- replacement/fallback path if the provider becomes unavailable.

If these constraints make generation brittle and a deterministic solution can achieve the same editorial purpose, prefer the deterministic solution.

## 5. No provider lock as a product assumption

Do not write conception rules such as:

```text
Use Higgsfield for every cinematic section.
Every hero needs generated video.
Generated media is required for Web Cinematic quality.
```

Higgsfield is one possible provider. Equivalent providers may be substituted when they satisfy the same asset contract.

## 6. Never degrade the cinematic baseline

If generated media is unavailable, out of credit or unreliable:

- do not reduce the target to a generic static landing merely because generation failed;
- reinterpret the same editorial intent with deterministic mechanisms;
- preserve hierarchy, materiality, depth, motion language and interaction quality using the best available approach.

The baseline is **Web Premium / Web Cinematic**, not **generated-media dependent**.

## 7. Generated asset discipline

Every generated asset recommendation must have a defined destination and purpose before generation.

Record when relevant:

```text
Asset ID
Section
Editorial purpose
Why synthesis is required
Required / Optional
Provider class (not provider lock unless required)
Generation type
Reference/source
Camera / framing
Movement
Lighting / environment
Continuity requirements
Usage in experience
Budget / retry ceiling
Fallback
Do Not Generate
```

If an asset has no destination, narrative function or expected usage, do not generate it.

## 8. External-provider recommendation format

When generated media is justified, explain the recommendation in user-facing language:

```text
Aqui a síntese externa faz sentido porque precisamos de uma transformação fotorealista difícil de reproduzir com geometria simples. O trade-off é depender de créditos/retries e perder parte do controle interativo; por isso eu usaria o vídeo como matéria-prima visual, não como regra para toda a landing.
```

Do not present the provider name as the reason.

## 9. Fallback hierarchy

A recommendation that depends on generated media should define a fallback appropriate to the same editorial objective, for example:

- generated video → programmatic 3D / frame-based controlled sequence;
- generated environment → still + depth/parallax/lighting;
- generated transformation → deterministic masks/3D if synthesis fails;
- optional atmospheric asset → omit without affecting the core hierarchy.

Fallback may reduce a specific effect, but must not silently collapse the whole experience below the premium baseline.

## 10. Relationship with other contracts

- `VISUAL-INTERPRETER.md` identifies the best visual mechanism for the section.
- `SUGGESTION-POLICY.md` defines how the recommendation is explained and compared.
- this policy decides whether external/generated media is actually justified.
- `CAPABILITY-CONTRACT.md` governs execution capability availability when an external executor later consumes the compiled prompt.

## 11. Persistence

Persist only material generated-media decisions, budgets, provider constraints and fallbacks. Do not persist speculative provider exploration or hidden reasoning.
