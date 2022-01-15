import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const flexGrow = createVar('flex-grow')

export const stack = style([
  lyts,
  box,
  {
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'column'
  }
])

globalStyle(`${stack} > *`, {
  flexGrow: fallbackVar(flexGrow, '0'),
  margin: 0
})
