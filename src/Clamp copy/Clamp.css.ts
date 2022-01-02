import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const maxWidth = createVar('max-width')
export const maxHeight = createVar('max-height')

export const clamp = style([
  lyts,
  {
    display: 'flex',
    // gap: fallbackVar(vars.gap, '1em'),
    flexDirection: 'row',
  }
])

globalStyle(`${clamp} > *`, {
  maxWidth,
  maxHeight,
  margin: 'auto',
  flexGrow: 1,
  boxSizing: 'border-box'
})
