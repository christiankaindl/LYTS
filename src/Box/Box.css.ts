import { bleed, lyts, vars as indexVars } from "@lib/index.css";
import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  alignItems: createVar('align-items'),
  justifyContent: createVar('justify-content'),
  flexDirection: createVar('flex-direction')
}

export const box = style([
  lyts,
  bleed,
  {
    display: 'flex',
    gap: indexVars.gap,
    ...vars,
    vars: {
      [indexVars.gap]: '1em',
      [vars.alignItems]: 'initial',
      [vars.justifyContent]: 'initial',
      [vars.flexDirection]: 'row'
    },
    // Make sure horizontal alignment is applied to Grid elements (like Clamp and Grid)
    // `justifyItems` does nothing in flexbox contexts
    justifyItems: vars.justifyContent
  }])
