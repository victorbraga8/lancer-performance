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

## Capability Router

Route each execution unit by its contract, not by convenience:

- UI/code -> active coding agent.
- generated asset -> named capability/provider when specified.
- motion -> implementation engine allowed by hard constraints.
- integration -> active coding agent, preserving Visual Integration Contract.

When multiple valid capabilities are available, prefer the one explicitly approved in the direction. Do not introduce a new tool merely because it exists.
