import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

export const flexGrow = createVar('flex-grow')
export const wrap = createVar('wrap')

export const row = style([
  box,
  {
    flexWrap: wrap,
  }
])

globalStyle(`${row} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
