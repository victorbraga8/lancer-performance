# Landing Express — Prompt Execution V1.2

`PROMPT_EXECUTION` is an official in-interaction action available after `PROMPT READY`. It consumes the current immutable prompt and may mutate the target repository through the active coding surface, but it does not close the Landing Express interaction.

## 1. Entry

At `PROMPT READY` offer:

```text
1. Executar prompt
2. Refine
3. Finalizar (`le-end`)
```

Selecting `Executar prompt` does not authorize immediate mutation. It routes to the independent `PROMPT_EXECUTION` Model/Effort Gate.

## 2. Complexity-driven recommendation

The execution recommendation must be derived from the **actual compiled prompt**, not from a fixed maximum model.

Use the complexity metadata generated with `prompt-current.json`, including when material:

- prompt/context breadth;
- section count;
- 3D/WebGL/shader/spatial work;
- motion/timeline complexity;
- interaction breadth;
- generated media/external capability use;
- hard constraints and PRESERVE requirements;
- technical requirements/integrations;
- specification strength and unresolved ambiguity.

Canonical rule:

> **Execution complexity raises model/effort. The word “execute” does not.**

`PROMPT_EXECUTION` starts from the lowest abstract baseline and rises only when the compiled artifact justifies it. Do not default execution to the strongest available model/effort.

## 3. Hard gate

Before any repository mutation:

```text
current prompt-vN
→ current prompt complexity
→ detect active runtime model/effort now
→ MODEL / EFFORT GATE: PROMPT_EXECUTION
→ PASS / OVERRIDDEN
→ capability/stack preflight
→ execute prompt-vN
```

`UNDER_REASONING`, material `OVER_REASONING` and relevant `UNKNOWN` block. Follow `GATE-RECOVERY.md`; after the user changes configuration and sends `Continuar`, rerun this same gate without returning to `le-start` or rebuilding the prompt.

## 4. Stack/capability preflight

Before mutation read `STACK-AWARE-ROUTING.md` and `CAPABILITY-CONTRACT.md`.

- inspect the actual repository stack/dependencies/configuration;
- prefer existing libraries/capabilities when they preserve approved quality and control;
- introduce a new dependency only when it materially improves or enables the approved experience;
- verify external/generated capabilities only when the prompt actually requires them;
- do not silently replace an approved modality because another tool is easier.

## 5. Execution state

Persist:

```text
execution-current.json
execution-history.json
```

Execution states:

```text
RUNNING
EXECUTION_COMPLETE
EXECUTION_FAILED
```

`EXECUTION_COMPLETE` is not `COMPLETED`. Only `le-end` closes the interaction.

Store compact evidence:

- prompt version/artifact;
- execution gate model/effort/status;
- started/completed timestamps;
- outcome summary;
- files changed when observable;
- validations performed and material failures.

## 6. Post-execution decision

After a successful execution return:

```text
EXECUÇÃO CONCLUÍDA

Prompt executado: vN
Modelo: <active model>
Effort: <active effort>
Resumo: <compact execution result>

1. Refine
2. Finalizar (`le-end`)
```

Do not auto-close the interaction.

## 7. Refine after execution

A post-execution Refine may use the execution result as evidence while preserving Conception State as the canonical approved direction.

Flow:

```text
execution result
→ user feedback
→ REFINE gate
→ classify delta
→ selective Conception State update/invalidation
→ prompt-vN+1
→ PROMPT READY
→ Executar | Refine | Finalizar
```

Do not patch generated implementation directly and call that a Refine when the requested change materially changes the approved prompt/direction.

## 8. Failure

If execution fails, preserve failure evidence and explain the practical blocker. Do not mark the interaction complete. Offer a relevant correction/refine path or a retry only after the required gate/capability condition is satisfied.
