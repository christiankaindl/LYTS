import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const flexGrow = createVar('flex-grow')
export const collapseAt = createVar('collapse-at')

export const columns = style([
  lyts,
  box,
  {
    gap: fallbackVar(vars.gap, '1em'),
    flexWrap: 'wrap'
  }
])

globalStyle(`${columns} > *`, {
  flexGrow: fallbackVar(flexGrow, '1'),
  // Holy Albatross technique: https://heydonworks.com/article/the-flexbox-holy-albatross-reincarnated/
  flexBasis: `calc((${collapseAt} - 100%) * 999)`,
  boxSizing: 'border-box'
})
