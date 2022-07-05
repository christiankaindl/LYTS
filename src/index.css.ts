import { createVar, style } from "@vanilla-extract/css"
import { calc } from '@vanilla-extract/css-utils'

export const vars = {
  wrap: createVar('wrap'),
  bleedTop: createVar('bleed-top'),
  bleedRight: createVar('bleed-right'),
  bleedBottom: createVar('bleed-bottom'),
  bleedLeft: createVar('bleed-left'),
}

export const bleed = style({
  // margin: `${vars.bleedTop} ${fallbackVar(vars.bleedRight, vars.bleedTop)} ${vars.bleedBottom, vars.bleedTop} ${vars.bleedLeft, vars.bleedTop, vars.bleedTop}`,
  marginTop: calc(vars.bleedTop).negate().toString(),
  marginRight: calc(vars.bleedRight).negate().toString(),
  marginBottom: calc(vars.bleedBottom).negate().toString(),
  marginLeft: calc(vars.bleedLeft).negate().toString(),
})
