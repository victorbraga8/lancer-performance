# Landing Express — Gate Recovery V1.2

A blocked Model/Effort Gate must behave like a resumable checkpoint, not a dead end.

## 1. Core rule

When a material action is blocked by `UNDER_REASONING`, material `OVER_REASONING` or relevant `UNKNOWN`:

1. preserve the action that was about to run;
2. preserve its compact reasoning dimensions/recommendation;
3. tell the user exactly what configuration should change;
4. tell the user what to do after changing it;
5. on `Continuar`, detect the active runtime again and rerun **that same action gate**;
6. if aligned, continue from the pending action without restarting `le-start`, route selection, conception or prompt compilation.

Canonical user instruction:

```text
Para continuar:
Altere a configuração para <modelo> / <effort> e envie `Continuar`.
Eu vou detectar novamente a configuração ativa e retomar esta mesma ação sem reiniciar o fluxo.

Se quiser manter a configuração atual:
“Autorizo override de <ACTION>.”
```

## 2. Persistence

Persist a compact pending gate record as `pending-gate.json` while blocked. Prefer the current session directory when a session exists; before a session exists use `.landing-express/pending-gate.json`.

Persist only:

- action;
- surface;
- recommended model/effort;
- active model/effort observed at the block;
- compact dimensions;
- gate status/reason;
- next action/route when useful;
- timestamp.

Do not persist hidden chain-of-thought.

## 3. Recovery

`Continuar` is a recovery intent when a pending gate exists.

Recovery order:

```text
pending action
→ detect active runtime identity again
→ rerun pending action gate
→ PASS / OVERRIDDEN: clear pending gate and continue
→ still blocked: update pending gate and repeat practical instruction
```

A model/effort change in the same conversation is expected. Never assume the active configuration remained unchanged from a prior gate.

## 4. Unknown

When evidence remains `UNKNOWN`, explain which dimension could not be confirmed. Do not force the user to restart the flow.

## 5. Gate visibility

Recalculate before every materially different cognitive/execution action. A `PASS` that does not require user intervention may remain concise. A blocked gate must always expose the full actionable recovery instruction.
