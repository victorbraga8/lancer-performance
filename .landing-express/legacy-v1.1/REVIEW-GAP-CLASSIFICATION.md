# Landing Express — Review Gap Classification Contract

This contract governs how `le-review` explains the nature of gaps without replacing the existing final decision states `ACCEPT`, `REFINE`, `REGENERATE` and `REDO`.

A review decision answers **what should happen next**. Gap classification answers **what kind of problem was found and where responsibility belongs**.

## Required gap classes

Classify every material gap with one or more of:

- `SPEC GAP`: the approved direction/spec omitted, contradicted or under-defined a decision the framework should have established before execution.
- `EXECUTION GAP`: the approved contract was adequate, but implementation did not satisfy it.
- `REFINEMENT GAP`: direction and implementation are fundamentally correct, but localized quality/polish is still below the acceptance target.
- `CONSTRAINT GAP`: a capability, provider, runtime, browser, performance, platform, dependency or other real constraint prevents full delivery of the approved target.
- `USER OVERRIDE`: the user explicitly chose behavior that differs from the recommended/approved default and the deviation is intentional.

A single finding may carry multiple classes when causality is genuinely shared. Do not force a single label for convenience.

## Deferred state

Use `DEFERRED / USER-ACCEPTED` when a known deviation is consciously accepted for now and the user chooses not to resolve it in the current cycle.

A deferred gap must remain visible in the review record. Do not silently convert it into ACCEPTED/RESOLVED.

## Blocking severity

For each unresolved material gap, classify acceptance impact as:

- `BLOCKING FOR FULL ACCEPTANCE`: the experience cannot honestly be considered fully accepted while the gap remains.
- `NON-BLOCKING FOR PARTIAL REFINE`: the gap can remain during a localized refine cycle without invalidating already approved areas.

`DEFERRED / USER-ACCEPTED` may coexist with either severity. It records the user's current decision, not technical quality.

## Causality before action

Use classification to choose the right action:

- `SPEC GAP` usually reopens direction/spec and may lead to `REDO` or targeted direction correction.
- `EXECUTION GAP` usually leads to `REFINE`, or `REGENERATE` when the failing unit is an asset.
- `REFINEMENT GAP` leads to localized `REFINE`.
- `CONSTRAINT GAP` may lead to `REGENERATE`, approved fallback, scope adjustment, deferred acceptance or `REDO` when the target is infeasible.
- `USER OVERRIDE` should not be auto-corrected; record the override and evaluate remaining consequences.

These mappings are guidance, not mechanical one-to-one rules. The final decision must reflect the combined evidence.

## Parallel-gap rule

Do not allow one dominant gap to hide other relevant findings.

Example: a failed cinematic asset must not prevent the review from also identifying semantic hierarchy, viewport safety, transition, over-composition or other systemic gaps visible in the available evidence.

Review the experience across all applicable contracts first, then summarize the material gap set.

## Required finding format

For each material finding, record concisely:

- `Finding`: what differs from the approved/required result.
- `Classification`: one or more gap classes.
- `Severity`: BLOCKING FOR FULL ACCEPTANCE / NON-BLOCKING FOR PARTIAL REFINE.
- `State`: OPEN / DEFERRED / USER-ACCEPTED / RESOLVED where applicable.
- `Evidence`: observable evidence supporting the finding.
- `Affected contract`: spec/contract/map/section/asset involved.
- `Recommended treatment`: calibrate spec, refine execution, regenerate asset, accept constraint, preserve override or reopen direction.

Do not expose hidden chain-of-thought. Evidence and concise rationale are sufficient.

## Review summary

Before the final decision, summarize:

- material findings by classification;
- blocking vs non-blocking gaps;
- deferred/user-accepted deviations;
- whether the primary cause is spec, execution, refine, constraint, override or a combination;
- which approved areas must be preserved.

Then produce the final decision `ACCEPT`, `REFINE`, `REGENERATE` or `REDO` and apply the Next Action Contract.
