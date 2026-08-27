# Capability Contract — V1

Capabilities are execution resources such as the active coding agent, Higgsfield, image generation, motion/3D tools or other explicitly approved tools.

## Preflight states

- PASS: capability is actually available to the active runtime.
- RUNTIME_CHECK_REQUIRED: CLI can see the policy but only the active runtime can verify the tool registry.
- BLOCKED: required capability is unavailable.
- OPTIONAL: absence does not block.

## Required behavior

1. Build an explicit capability checklist before mutation.
2. Verify tool availability in the active runtime, not only configuration presence.
3. A required capability with fallback `block` MUST NOT be replaced silently.
4. A fallback requires explicit user approval and must be logged as an override.
5. If Higgsfield is required, the executor must call the actual Higgsfield tool exposed by the surface. If no Higgsfield tool is exposed, status is BLOCKED.
6. If modality is `frame-sequence`, `video`, `3d` or another specific type, deliver that modality or stop. A static proxy is not completion.
7. Log capability selected, tool called, result reference, retries and approved fallback.

## Motion capability classes

Motion must be classified before routing. The supported semantic modalities are:

- `STATIC`: no motion capability is required.
- `UI_MOTION`: component/state feedback implemented by the active coding surface using the approved stack.
- `PROGRAMMATIC_MOTION`: code-native motion implemented through CSS, JavaScript, SVG, canvas, WebGL, Three.js, shaders or another approved engine compatible with hard constraints.
- `GENERATED_MOTION`: generated media such as video, cinematic output or frame sequence produced by a named generation capability/provider.

`UI_MOTION` and `PROGRAMMATIC_MOTION` are normally intrinsic to the active coding surface when the repository stack permits the chosen implementation. They do not require a separate external surface-tool merely because motion exists.

`GENERATED_MOTION` requires the named generation provider/capability to pass runtime preflight.

Do not treat these modalities as interchangeable fallbacks. A modality change that alters the approved experience requires explicit direction/override.

## Motion routing factors

When multiple modalities could technically satisfy a motion unit, route according to the approved `MOTION CAPABILITY MAP` and consider:

- required visual modality;
- control precision and synchronization;
- determinism;
- reuse;
- generation/tool cost;
- implementation/runtime cost;
- performance implications;
- dependency constraints;
- responsive behavior;
- accessibility/reduced-motion behavior;
- retry/regeneration risk.

Do not route all motion to Higgsfield or another generative provider by default.

A fixed asset may be animated programmatically when front-end motion provides the required quality with better control or reuse. Conversely, do not replace approved generated cinematic behavior with code-native motion solely because it is easier to execute.

## Capability Router

Route each execution unit by its contract, not by convenience:

- UI/code -> active coding agent.
- static composition -> active coding agent; no motion provider required.
- UI motion -> active coding agent using the approved stack/interaction system.
- programmatic motion -> active coding agent using the approved CSS/JS/SVG/canvas/WebGL/Three.js/shader/runtime engine allowed by hard constraints.
- generated motion -> named generation capability/provider; runtime preflight required.
- generated asset -> named capability/provider when specified.
- integration -> active coding agent, preserving Visual Integration Contract.

When multiple valid capabilities are available, prefer the one explicitly approved in the direction. Do not introduce a new tool merely because it exists.