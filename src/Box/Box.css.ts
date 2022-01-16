import { createVar, style } from "@vanilla-extract/css";

export const vars = {
  alignItems: createVar('align-items'),
  justifyContent: createVar('justify-content'),
  flexDirection: createVar('flex-direction')
}

// FIXME: Bleed is not applied
export const box = style([lyts, {
  display: 'flex',
  ...vars
}])
