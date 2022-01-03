import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const flexGrow = createVar('flex-grow')

export const columns = style([
  lyts,
  {
    display: 'flex',
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'row',
  }
])

globalStyle(`${columns} > *`, {
  flexBasis: 0,
  flexGrow: fallbackVar(flexGrow, '1'),
  boxSizing: 'border-box'
})
