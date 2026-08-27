# Landing Express — Style Interpreter V1.2

Style is a **visual grammar**, not a loose adjective or a library name.

The Style Interpreter turns editorial intention + visual direction into a coherent stylistic system the user can understand and the executor can implement.

## 1. Core rule

Avoid treating labels such as `premium`, `moderno`, `tech`, `minimalista`, `Swiss`, `neo-industrial` or `editorial luxury` as sufficient direction by themselves.

A useful style direction describes, when material:

- typography character and scale behavior;
- composition and spatial organization;
- information/effect density;
- color and luminance behavior;
- surfaces/materiality;
- imagery/illustration/product treatment;
- depth and layering;
- motion character;
- interaction character;
- rhythm and whitespace.

Reference labels may summarize a direction, but the grammar must remain understandable without them.

## 2. Effect-first output

Prefer:

```text
Eu levaria a direção para um tecnológico preciso e contido: tipografia de grande escala, baixa densidade, fundos escuros com luminância localizada, superfícies majoritariamente opacas e profundidade concentrada no produto. O motion deve parecer técnico e controlado, não decorativo.
```

Avoid:

```text
Vamos de tech premium com glassmorphism.
```

## 3. Relationship with editorial

Style must reinforce the dominant editorial priority. Examples:

- credibility/proof may require restraint, stable surfaces and precise rhythm;
- premium may mean material confidence and whitespace rather than more effects;
- experimental may allow unconventional composition but still needs a primary focal hierarchy;
- technical precision may favor grid, measurement-like rhythm, deterministic diagrams and controlled motion;
- emotional narrative may use pace, imagery and luminance changes rather than technical spectacle.

## 4. Section consistency

The style system is global, but section expression is contextual. A hero may intensify while proof/conversion sections remain restrained without becoming visually unrelated.

## 5. Persistence

Persist approved style grammar in the existing `STYLE` field. Prefer a structured object such as:

```json
{
  "summary": "...",
  "typography": "...",
  "composition": "...",
  "density": "...",
  "colorLuminance": "...",
  "surfacesMateriality": "...",
  "imagery": "...",
  "depth": "...",
  "motionCharacter": "...",
  "interactionCharacter": "...",
  "rhythmWhitespace": "..."
}
```

Populate only dimensions that materially affect the current conception. Do not create another mandatory state machine.
