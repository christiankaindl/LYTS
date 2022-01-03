import { createVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts } from '../index.css'

export const maxWidth = createVar('max-width')
export const maxHeight = createVar('max-height')

export const clamp = style([
  lyts,
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
])

globalStyle(`${clamp} > *`, {
  maxWidth,
  maxHeight,
  flexGrow: 1,
  boxSizing: 'border-box'
})
