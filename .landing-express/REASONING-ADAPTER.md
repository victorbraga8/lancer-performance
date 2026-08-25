# Landing Express — Reasoning Adapter V1.2

The Reasoning Adapter separates **abstract action demand**, **active runtime identity**, **native family mapping** and **empirical action-floor calibration**.

## 1. Architecture

```text
ACTIVE SURFACE / TURN
→ Runtime Identity Resolver
→ active native model + effort

MATERIAL ACTION
→ action baseline
→ context / prompt complexity dimensions
→ required abstract capability + effort
→ central native mapping
→ recommended native model + effort

active vs recommended
→ HARD GATE
→ PASS / recovery / override
```

Do not derive the recommendation from the active model and do not derive the active model from the recommendation.

## 2. START is router-only

`START` may retain `LIGHT/LOW` as a diagnostic baseline, but `gateMode=ROUTER_ONLY` means it is not a user-blocking action.

The first enforced gate belongs to the material route selected after `le-start`:

```text
Nova interação → NEW_INTERACTION
Resume → RESUME
```

This avoids forcing a user to switch to a lightweight START configuration and immediately switch again for the real work.

## 3. Independent concerns

Never collapse:

1. **Runtime identity** — what model/effort is active now;
2. **Native family mapping** — which native model corresponds to LIGHT/GENERAL/ADVANCED/FRONTIER;
3. **Action profile** — how demanding the current action/artifact is;
4. **Action-floor calibration** — whether the abstract baseline has empirical evidence.

## 4. Profile dimensions

Use compact values for:

- ambiguity;
- novelty;
- risk;
- specificationStrength;
- creativeEditorialDemand;
- contextBreadth.

Baselines supply capability/effort floors. Context may raise demand; strong/narrow specification may lower only toward the baseline, never below it.

## 5. Abstract bands

Capability:

```text
LIGHT < GENERAL < ADVANCED < FRONTIER
```

Effort:

```text
LOW < MEDIUM < HIGH < XHIGH
```

The goal is the **lowest sufficient** native configuration, not the strongest by default.

## 6. Current action baselines

```text
START             LIGHT / LOW      (ROUTER_ONLY)
NEW_INTERACTION   GENERAL / MEDIUM
RESUME            GENERAL / MEDIUM
ENRICHMENT        GENERAL / MEDIUM
PROMPT_COMPILE    GENERAL / MEDIUM
PROMPT_EXECUTION  LIGHT / LOW      (actual prompt complexity raises it)
REFINE             LIGHT / LOW
```

These remain calibration candidates until empirical evidence validates final floors.

## 7. PROMPT_EXECUTION

Execution must not inherit `PROMPT_COMPILE`'s minimum.

`PROMPT_EXECUTION` starts at `LIGHT/LOW` and consumes complexity dimensions calculated from the actual immutable prompt, including breadth, sections, 3D/spatial work, motion/interactions, constraints, technical requirements, generated/external capabilities, specification strength and ambiguity.

Canonical rule:

> **Execution complexity raises model/effort. The word “execute” does not.**

A small, strongly specified prompt may remain LIGHT/LOW. More complex prompt evidence may raise to GENERAL, ADVANCED or stronger effort. Never set Sol/high merely because repository mutation will occur.

## 8. Codex native mapping

Operational family equivalence:

```text
LIGHT    → gpt-5.6-luna
GENERAL  → gpt-5.6-terra
ADVANCED → gpt-5.6-sol
FRONTIER → gpt-5.6-sol
```

Effort:

```text
LOW → low
MEDIUM → medium
HIGH → high
XHIGH → xhigh
```

This is native family equivalence, not empirical proof that a specific action floor is correct.

## 9. Active identity

Before every material gate, resolve active model/effort again. Model/effort may change during the same conversation.

For Codex, prefer current `CODEX_THREAD_ID` rollout / latest `turn_context`. Configuration is fallback context only and must not overwrite active-turn evidence.

For Claude/Desktop, use exact active surface/session evidence when exposed. Do not apply Codex mappings to another surface.

## 10. Gate recovery

A blocked gate persists the pending action and compact dimensions. After the user changes configuration and sends `Continuar`, detect runtime identity again and rerun the same action gate. Do not restart the interaction.

Read `GATE-RECOVERY.md`.

## 11. Calibration

Final action floors require representative empirical runs. Record action, surface, native model, effort, task ID, quality, misses, retries and relative cost when observable.

Native mapping can be operational while floor validation remains `PENDING`.

## 12. Update boundary

Provider/model naming changes should normally update `reasoning-adapter.json` and runtime normalization. Action calibration should update floors/evidence. Neither should require duplicated model tables inside skills.
