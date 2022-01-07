import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const flexGrow = createVar('flex-grow')

export const row = style([
  lyts,
  box,
  {
    gap: fallbackVar(vars.gap, '1em'),
    flexWrap: vars.wrap,
    alignItems: 'center'
  }
])

globalStyle(`${row} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
