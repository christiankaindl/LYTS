import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { calc } from '@vanilla-extract/css-utils'

export const vars = {
  gap: createVar('gap'),
  wrap: createVar('wrap'),
  bleedTop: createVar('bleed-top'),
  bleedRight: createVar('bleed-right'),
  bleedBottom: createVar('bleed-bottom'),
  bleedLeft: createVar('bleed-left'),
}

export const lyts = style({
  // Set default values so that values don't propagate beyond the element where props are applied, making it possible to reduce the amount of inline CSS variables
  vars: {
    [vars.bleedTop]: '0',
    [vars.bleedRight]: '0',
    [vars.bleedBottom]: '0',
    [vars.bleedLeft]: '0',
  }
})
globalStyle(`${lyts} > *`, {
  margin: 0
})

export const bleed = style({
  // margin: `${vars.bleedTop} ${fallbackVar(vars.bleedRight, vars.bleedTop)} ${vars.bleedBottom, vars.bleedTop} ${vars.bleedLeft, vars.bleedTop, vars.bleedTop}`,
  marginTop: calc(vars.bleedTop).negate().toString(),
  marginRight: calc(vars.bleedRight).negate().toString(),
  marginBottom: calc(vars.bleedBottom).negate().toString(),
  marginLeft: calc(vars.bleedLeft).negate().toString(),
})
