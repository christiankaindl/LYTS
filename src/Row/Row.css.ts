import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@lib/Box/Box.css'
import { legacyGapEnabled } from '@lib/gapFallback.css'

export const flexGrow = createVar('flex-grow')
export const wrap = createVar('wrap')

export const row = style({
  flexWrap: wrap,
})

globalStyle(`${row} > *`, {
  flexGrow: fallbackVar(flexGrow, '0')
})

globalStyle(`${legacyGapEnabled} ${row} > *:not(:last-child)`, {
  marginRight: vars.gap
})
