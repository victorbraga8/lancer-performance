# Model / Effort Gate

The purpose is to avoid both under-reasoning and unnecessary over-reasoning.

## Complexity classes

LOW: localized visual adjustment, small copy/layout refinement, no new asset strategy.
MEDIUM: multi-section direction/build, one primary mechanic, normal asset integration, existing structure understood.
HIGH: scroll cinematic, multi-capability build, generated motion assets, complex refactor, preservation constraints, multiple interactions or uncertain architecture.

## Baseline recommendations

### Claude
- LOW: Haiku/Sonnet + low/medium.
- MEDIUM: Sonnet + medium/high.
- HIGH: Sonnet/Opus + high.

### Codex
- LOW: lightweight available coding model + low/medium.
- MEDIUM: capable coding model + medium/high.
- HIGH: strongest available coding/reasoning model + high.

Do not invent a model name not exposed by the active surface. Prefer native names shown by the runtime.

## Gate output

Recommended: <native model> + <effort>
Classification: LOW / MEDIUM / HIGH
Active: <model + effort or UNKNOWN>
Status: PASS / UPGRADE RECOMMENDED / DOWNGRADE RECOMMENDED / UNKNOWN
Reason: one concise sentence.

A downgrade recommendation matters: do not waste the strongest model on a trivial localized change unless the user knowingly chooses it.
