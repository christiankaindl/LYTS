import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

export const flexGrow = createVar('flex-grow')

export const stack = style([
  box,
  {}
])

globalStyle(`${stack} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
