import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@lib/Box/Box.css'
import { legacyGapEnabled } from '@lib/gapFallback.css'

export const flexGrow = createVar('flex-grow')
export const collapseAt = createVar('collapse-at')

export const columns = style({
  flexWrap: 'wrap'
})

globalStyle(`${columns} > *`, {
  flexGrow: fallbackVar(flexGrow, '1'),
  // Holy Albatross technique: https://heydonworks.com/article/the-flexbox-holy-albatross-reincarnated/
  flexBasis: `calc((${collapseAt} - 100%) * 999)`,
  width: 0,
  boxSizing: 'border-box'
})

globalStyle(`${legacyGapEnabled} ${columns} > *:not(:last-child)`, {
  marginRight: vars.gap,
  marginBottom: vars.gap
})
