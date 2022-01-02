import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const gridItemMinWidth = createVar('gridItemMinWidth')
export const gridMaxRowItems = createVar('gridMaxRowItems')

export const grid = style([
  lyts,
  {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${gridItemMinWidth}, 100%), 1fr))`,
    gap: fallbackVar(vars.gap, '1em')
  }
])
