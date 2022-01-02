import { fallbackVar, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const row = style([
  lyts,
  {
    display: 'flex',
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'row',
    flexWrap: vars.wrap,
    alignItems: 'center'
  }
])
