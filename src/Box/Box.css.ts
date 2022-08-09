import { legacyGapEnabled } from "@lib/gapFallback.css";
import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { calc } from '@vanilla-extract/css-utils'

export const vars = {
  gap: createVar('gap'),
  alignItems: createVar('align-items'),
  justifyContent: createVar('justify-content'),
  flexDirection: createVar('flex-direction'),
  bleedTop: createVar('bleed-top'),
  bleedRight: createVar('bleed-right'),
  bleedBottom: createVar('bleed-bottom'),
  bleedLeft: createVar('bleed-left'),
}

export const box = style({
  display: 'flex',
  ...vars,
  // Set default values so that values don't propagate beyond the element where props are applied, making it possible to reduce the amount of inline CSS variables
  vars: {
    [vars.gap]: '1em',
    [vars.alignItems]: 'initial',
    [vars.justifyContent]: 'initial',
    [vars.flexDirection]: 'column',
    [vars.bleedTop]: '0',
    [vars.bleedRight]: '0',
    [vars.bleedBottom]: '0',
    [vars.bleedLeft]: '0'
  },
  // Make sure horizontal alignment is applied to Grid elements (like Clamp and Grid)
  // `justifyItems` does nothing in flexbox contexts
  justifyItems: vars.justifyContent,
  marginTop: calc(vars.bleedTop).negate().toString(),
  marginRight: calc(vars.bleedRight).negate().toString(),
  marginBottom: calc(vars.bleedBottom).negate().toString(),
  marginLeft: calc(vars.bleedLeft).negate().toString(),
})

globalStyle(`${legacyGapEnabled} ${box}`, {
  vars: {
    [vars.gap]: 'inherit'
  }
})
