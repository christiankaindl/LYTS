import { box } from '@lib/Box/Box.css'
import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { vars } from '../index.css'

export const gridItemMinWidth = createVar('gridItemMinWidth')
export const gridMaxRowItems = createVar('gridMaxRowItems')

export const grid = style([
  box,
  {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${gridItemMinWidth}, 100%), 1fr))`,
    gap: fallbackVar(vars.gap, '1em')
  }
])
