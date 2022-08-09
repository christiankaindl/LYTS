import { createVar, style } from '@vanilla-extract/css'

export const gridItemMinWidth = createVar('gridItemMinWidth')
export const gridMaxRowItems = createVar('gridMaxRowItems')

export const grid = style({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${gridItemMinWidth}, 100%), 1fr))`
})
