import { bleed, vars as indexVars } from "@lib/index.css";
import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  gap: createVar('gap'),
  alignItems: createVar('align-items'),
  justifyContent: createVar('justify-content'),
  flexDirection: createVar('flex-direction')
}

export const box = style([
  bleed,
  {
    display: 'flex',
    ...vars,
    // Set default values so that values don't propagate beyond the element where props are applied, making it possible to reduce the amount of inline CSS variables
    vars: {
      [vars.gap]: '1em',
      [vars.alignItems]: 'initial',
      [vars.justifyContent]: 'initial',
      [vars.flexDirection]: 'column',
      [indexVars.bleedTop]: '0',
      [indexVars.bleedRight]: '0',
      [indexVars.bleedBottom]: '0',
      [indexVars.bleedLeft]: '0'
    },
    // Make sure horizontal alignment is applied to Grid elements (like Clamp and Grid)
    // `justifyItems` does nothing in flexbox contexts
    justifyItems: vars.justifyContent
  }])
