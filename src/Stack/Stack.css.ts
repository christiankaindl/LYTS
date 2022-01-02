import { fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../global.css'

export const stack = style([
  lyts,
  {
    display: 'flex',
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'column'
  }
])

globalStyle(`${stack} > *`, {
  margin: 0
})
