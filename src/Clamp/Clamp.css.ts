import { box } from '@lib/Box/Box.css'
import { createVar, globalStyle, style } from '@vanilla-extract/css'

export const maxWidth = createVar('max-width')
export const maxHeight = createVar('max-height')

// Use grid here instead, and add a break-out addition
export const clamp = style([
  box,
  {
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
