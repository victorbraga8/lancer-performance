# Lancer Performance — aesthetic restraint refinement

## Objective

Refine the current React/Vite implementation from prompt v1. Keep the dark automotive-industrial territory and the mobile evidence-stage redesign, but remove decorative elements that do not improve hierarchy, navigation or the mechanical narrative. The result should feel precise and tense, not busy.

## Preserve

- Existing stack and dependencies only: React, Vite, Motion and CSS. Do not add a dependency, generated media, 3D scene, shader or provider.
- The Lancer remains the desktop subject; the selected mechanical asset remains the mobile subject in Performance.
- Keyboard, touch, focus-visible, contrast, `prefers-reduced-motion` and no horizontal overflow.
- TOP still appears only after the visitor starts scrolling.

## Hero: remove the redundant navigation block

- Remove the entire Focus / Sequence block and remove `Scroll to inspect`.
- Do not replace them with another label, tab, control or image insert. The title, supporting copy and existing `Deconstruct the system` CTA already express the intended progression.
- Let the car, title and CTA regain visual priority.

## Construction process: simplify the selector

- Keep the existing vehicle-detail image as the visual evidence; do not add a second image or a decorative thumbnail.
- Remove the extra line below the clickable items and remove the `LOAD PATH / TRANSMIT` label/connector introduced in v1.
- Move the numeric locator currently at the right edge of each selectable item to the left, immediately beside the item title/sequence. Use one clear numeric indicator rather than duplicated left/right cues.
- Keep the relation to `PROCESS / NN` through the selected number, active state and image annotations. Do not use a long connector line merely to imply this relation.
- Maintain clear click, keyboard and focus behavior; transitions stay short and calm.

## Performance consequence: remove the pattern and make light event-driven

- Remove the repeating/grain pattern from the Performance background. Retain only a restrained dark base with localized depth; avoid permanent haze, sweeping light or animated decorative texture.
- Remove the `LOAD PATH / RESPONSE` continuity label and its line. It is not navigation and should not consume attention.
- Keep the selected detail image transition, but limit the accent light/reflection to an actual user-requested change of discipline. It must not loop, pulse or sweep while the selected image is idle.
- On a new selection, the outgoing image may dissipate and the incoming image may reveal through a short mask. The one-off light pass can accompany that transition, then disappear completely.
- Under reduced motion, use a static swap or short opacity change without the light pass.
- Preserve the existing mobile behavior: hide the Lancer background and fill the Performance stage with the selected component asset; the four compact controls remain visible and accessible.

## Aesthetic guardrails

- Prefer removal over replacement when an element lacks narrative or interaction purpose.
- Atmosphere remains a subtle property of light, contrast and crop, not a layer of constant particles, labels, scanning lines or effects.
- Do not implement the previously noted future peak-of-tension test.

## Acceptance criteria

- Hero has no Focus, Sequence or Scroll to inspect block and remains visually balanced.
- Construction process has no lower continuity line; its numeric selector reads clearly from the left and stays tied to the active image view.
- Performance has no repeating background pattern and no LOAD PATH / RESPONSE label.
- Accent light appears only when a different Performance discipline is selected, never while idle.
- Desktop/mobile interaction, keyboard focus, touch targets, reduced motion, horizontal overflow and build are verified after implementation.
