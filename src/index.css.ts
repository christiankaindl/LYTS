import { createVar, fallbackVar, globalStyle, style } from "@vanilla-extract/css";
import { calc } from '@vanilla-extract/css-utils'

export const vars = {
  gap: createVar('gap'),
  wrap: createVar('wrap'),
  // bleed: createVar('bleed'),
  bleedTop: createVar('bleed-top'),
  bleedRight: createVar('bleed-right'),
  bleedBottom: createVar('bleed-bottom'),
  bleedLeft: createVar('bleed-left'),
}

export const lyts = style({})
globalStyle(`${lyts} > *`, {
  margin: 0
})

// TODO: Don't use CSS vars here to avoid inheritance?
// Could also prevent accidental margin setting when bleed is used
export const bleed = style({
  // margin: `${vars.bleedTop} ${fallbackVar(vars.bleedRight, vars.bleedTop)} ${vars.bleedBottom, vars.bleedTop} ${vars.bleedLeft, vars.bleedTop, vars.bleedTop}`,
  marginTop: calc(vars.bleedTop).negate().toString(),
  marginRight: calc(vars.bleedRight).negate().toString(),
  marginBottom: calc(vars.bleedBottom).negate().toString(),
  marginLeft: calc(vars.bleedLeft).negate().toString(),
})
