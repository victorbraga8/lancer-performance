# Landing Express — Execution Economy Contract V1.1

Economy is a governed execution dimension, not a synonym for choosing the cheapest option.

The objective is to reach the required quality with the **lowest total reasonable cost** while accounting for model cost, tool cost, retry risk, execution time, reuse potential and regression risk.

## Decision inputs

For each material execution unit or capability choice, evaluate when relevant:

- `QUALITY_FLOOR`: minimum quality required by the approved direction;
- `ACTION_COMPLEXITY`: current LOW / MEDIUM / HIGH classification from `MODEL-GATE.md`;
- `MODEL_COST`: relative cost of the recommended model/effort available in the active surface;
- `TOOL_COST`: generation/tool/API or operational cost;
- `RETRY_RISK`: probability that a cheaper/less capable route causes additional attempts;
- `EXECUTION_TIME`: meaningful time cost when one route is materially slower;
- `REUSE_VALUE`: whether the output/implementation can be reused or controlled later;
- `REGRESSION_RISK`: cost of breaking already-approved behavior;
- `CONTROL_VALUE`: value of deterministic control, especially for programmatic/UI motion;
- `ASSET_DESTINATION`: whether a generated asset has an approved destination and role.

Do not fabricate monetary values when they are unknown. Relative classifications such as LOW / MEDIUM / HIGH are acceptable when they are tied to the actual choice.

## Selection rule

Prefer the lowest total reasonable cost that still clears the `QUALITY_FLOOR`.

This means:

- a cheaper model that causes retries or regressions may be more expensive overall;
- a high-cost model on a trivial localized refine is wasteful unless justified by context;
- generated media should not be used when CSS/JS/SVG/canvas/WebGL/Three.js or another controllable capability provides equivalent required quality with better control/reuse;
- programmatic motion should not replace generated media when cinematic/generated qualities are part of the approved experience;
- no generated asset may be requested without approved destination, narrative/functional role and budget;
- reuse and determinism can justify an implementation that costs slightly more initially but reduces repeated generation or refinement.

## Economy decision artifact

For material choices, record a concise `EXECUTION ECONOMY DECISION`:

```text
Unit: <action/section/asset>
Quality floor: <required result>
Options considered: <concise alternatives>
Selected: <model/capability/tool route>
Why: <quality + total-cost rationale>
Cost drivers: <model/tool/retry/time/reuse/regression as applicable>
Economy-motivated: YES | NO
```

Do not turn every trivial CSS property into an economy event. Record decisions where cost/capability/model choice is material.

## Model relationship

`MODEL-GATE.md` remains the source of truth for model/effort calibration. Economy must not force a downgrade below the reasoning capacity required by the action.

When the Model Gate recommends a cheaper/lighter configuration because the action is LOW complexity, that is a valid economy decision and should be logged when material.

## Asset relationship

Generation Budget remains binding. Execution Economy adds a broader question before spending that budget:

> Is generation the lowest total reasonable-cost capability that preserves the required quality?

If no, use the better controlled/lower-total-cost approved capability. If yes, generate only assets with explicit destinations and objective retry conditions.

## Logging

When economy materially influences model, capability or implementation route, record the decision in `events.jsonl` and/or the execution plan/result.

Log rationale at decision-summary level only. Do not log hidden chain-of-thought.