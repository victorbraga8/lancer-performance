# Landing Express — Runtime Lifecycle Policy V1.1

Landing Express must not start persistent runtimes or heavy validation merely because they are commonly used during development.

The default is **do not start** unless the user explicitly requests the command/action or approves a validation that specifically requires it.

## Restricted-by-default commands

This includes, but is not limited to:

- `npm run dev`;
- `npm start`;
- `npm run start`;
- commands named `server`, `serve`, `preview`, `watch` or equivalent when they start a persistent process;
- framework-specific dev servers;
- local static servers;
- persistent watchers;
- other commands whose purpose is to keep a process running for interactive validation.

Do not infer permission from a general request to implement code.

## Build validation

`npm run build` and equivalent heavy build validation must run only when:

1. the user explicitly asks for it; or
2. the user approves a validation step that clearly states that a build is required.

When build/server validation would add useful evidence but is not authorized, explain concisely what additional validation would require it. Do not run it automatically.

## Persistent process lifecycle

When the user explicitly authorizes a persistent process, enforce:

```text
START -> USE -> STOP -> VERIFY TERMINATED
```

### START

Record what process is starting and why it is required.

### USE

Perform only the authorized validation/interaction.

### STOP

Terminate the process after the authorized consumption is complete unless the user explicitly asks to leave it running.

### VERIFY TERMINATED

Verify that the launched process is no longer running. If termination cannot be verified, report that explicitly rather than assuming success.

## Scope

This policy applies to build, review, refine, regeneration and any implementation action that could start local runtimes.

Direction-only actions must not start dev/build/server processes.

## Logging

When a restricted command is authorized and executed, record at summary level:

- authorization source;
- command category;
- purpose;
- lifecycle status: STARTED / USED / STOPPED / VERIFIED_TERMINATED;
- any failure to stop/verify.

Do not persist secrets or raw hidden reasoning.