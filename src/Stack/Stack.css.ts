import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { bleed, lyts, vars } from '../index.css'

export const flexGrow = createVar('flex-grow')

export const stack = style([
  lyts,
  bleed,
  {
    display: 'flex',
    gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'column'
  }
])

globalStyle(`${stack} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
