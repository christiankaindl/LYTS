import { fallbackVar, style } from '@vanilla-extract/css'
import { bleed, lyts, vars } from '../index.css'

export const stack = style([
  lyts,
  bleed,
  {
    display: 'flex',
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'column'
  }
])
