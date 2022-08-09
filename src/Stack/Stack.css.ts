import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

export const flexGrow = createVar('flex-grow')

export const stack = style({})

globalStyle(`${stack} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})
