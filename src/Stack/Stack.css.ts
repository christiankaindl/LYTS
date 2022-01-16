import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../index.css'

export const flexGrow = createVar('flex-grow')

export const stack = style([
  box,
  {
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'column'
  }
])

globalStyle(`${stack} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
