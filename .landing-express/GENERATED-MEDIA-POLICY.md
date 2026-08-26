# Landing Express — Generated Media Policy V1.3

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

The goal is not to avoid generation at all costs. Use it when synthesis creates material experience value that deterministic techniques cannot reasonably match.

## 2. Generated-media replacement obligation

When generated cinematic media is removed from the baseline, identify which perceptual values were previously embedded in it:

```text
ATMOSPHERE
DEPTH
DRAMATIC_LIGHTING
MOTION
COMPOSITION
ASSET_PRESENCE
CINEMATIC_REVEAL
```

For every material embedded value, define how the experience preserves that value through another mechanism when viable.

Example:

```text
Generated video unavailable
→ atmosphere: haze + ambient gradient
→ depth: layer separation + parallax
→ dramatic lighting: directional/rim treatment
→ motion: deterministic scroll progression
→ cinematic reveal: masking + staged release
```

If a material embedded value has no acceptable replacement, do not silently degrade the landing. Keep the conception blocked until the direction is adapted or generated media is justified again.

## 3. Prefer deterministic motion / 3D when comparable

Prefer deterministic implementation when it can deliver similar or superior quality because it normally provides:

- better interaction control;
- scroll reversibility;
- responsive adaptation;
- reuse;
- lower dependence on provider availability;
- easier refinement;
- lower retry risk;
- better synchronization with labels/UI/state.

For technical disassembly or scroll-controlled progression, prefer programmatic scenes when the asset/geometry supports the required quality.

## 4. When generated media is justified

Generated media remains valid when synthesis is materially superior or necessary, including when:

- photorealistic synthesis is central to the experience;
- the environment/transformation is disproportionately expensive to reproduce programmatically;
- appearance generation is the value itself rather than interaction logic;
- source media does not exist and deterministic reconstruction is impractical;
- a generated still/video materially increases perceived value without becoming the entire interaction engine.

A visually impressive result alone is not sufficient justification.

## 5. Provider decision factors

Before recommending Higgsfield or another provider, consider:

- cost / credits;
- quota availability;
- provider availability/reliability;
- retry probability;
- reference consistency;
- export format and resolution;
- integration effort;
- latency when production-relevant;
- reverse/interactive playback requirements;
- replacement/fallback path.

If generation is brittle and a deterministic solution can preserve the same editorial purpose, prefer the deterministic solution.

## 6. No provider lock as product assumption

Do not write conception rules such as:

```text
Use Higgsfield for every cinematic section.
Every hero needs generated video.
Generated media is required for Web Cinematic quality.
```

A provider is an implementation detail unless explicitly required by the approved asset contract.

## 7. Never degrade the cinematic baseline

If generated media is unavailable, out of credit or unreliable:

- do not reduce the target to a generic static landing;
- reinterpret the same editorial intent with deterministic mechanisms;
- preserve hierarchy, materiality, depth, lighting, motion language, asset presence, reveal and interaction quality where material;
- use the replacement strategy before deciding that the section must become simpler.

The baseline is **Web Premium / Web Cinematic**, not **generated-media dependent**.

## 8. Generated asset discipline

Every generated asset recommendation must have a defined destination and purpose before generation.

Record when relevant:

```text
Asset ID
Section
Editorial purpose
Why synthesis is required
Required / Optional
Provider class
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

## 9. External-provider recommendation format

Explain the perceivable reason before the provider/technology.

Example:

```text
Aqui a síntese externa faz sentido porque precisamos de uma transformação fotorealista difícil de reproduzir com geometria simples. O trade-off é depender de créditos/retries e perder parte do controle interativo; por isso o vídeo entra como matéria-prima visual, não como regra para a landing inteira.
```

Do not present the provider name as the reason.

## 10. Fallback hierarchy

Examples:

- generated video → programmatic 3D / frame-based controlled sequence;
- generated environment → still + depth/parallax/lighting;
- generated transformation → deterministic masks/3D;
- optional atmospheric asset → omit only when the core hierarchy and intended value remain intact.

Fallback may reduce a specific effect, but must not silently collapse the whole experience below the premium baseline.

## 11. Relationship with Cinematic Enrichment

`CINEMATIC ENRICHMENT` must evaluate replacement value explicitly when generated media is not selected/available.

The replacement plan is compact operational evidence and may be persisted with `CINEMATIC_OPPORTUNITIES`. It is not a speculative provider dump.

## 12. Persistence

Persist only material generated-media decisions, embedded values, replacement mechanisms, budgets, provider constraints and fallbacks. Do not persist hidden reasoning.
