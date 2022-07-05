import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../index.css'

export const flexGrow = createVar('flex-grow')

export const row = style([
  box,
  {
    flexWrap: vars.wrap,
  }
])

globalStyle(`${row} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
