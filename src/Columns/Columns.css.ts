import { fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const columns = style([
  lyts,
  {
    display: 'flex',
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'row',
  }
])

globalStyle(`${columns} > *`, {
  margin: 'auto',
  flexGrow: 1,
  boxSizing: 'border-box'
})
