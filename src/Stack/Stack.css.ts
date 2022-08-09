import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@lib/Box/Box.css'
import { legacyGapEnabled } from '@lib/gapFallback.css'

export const flexGrow = createVar('flex-grow')

export const stack = style({})

globalStyle(`${stack} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})

globalStyle(`${legacyGapEnabled} ${stack} > *:not(:last-child)`, {
  marginBottom: vars.gap
})
