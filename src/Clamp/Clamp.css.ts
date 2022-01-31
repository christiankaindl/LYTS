import { box, vars as boxVars } from '@lib/Box/Box.css'
import { vars } from '@lib/index.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

export const maxWidth = createVar('max-width')
export const maxHeight = createVar('max-height')

export const clamp = style([
  box,
  {
    display: 'grid',
    rowGap: fallbackVar(vars.gap, '1em'),
    gridTemplateColumns: `1fr min(${fallbackVar(maxWidth, '100%')}, 100%) 1fr`,
    // Only applies with a vertical clamp, because height='100%' is specified below
    alignItems: 'center'
  }
])

globalStyle(`${clamp} > *`, {
  gridColumn: 2,
  maxHeight,
  // Make sure that the child of a vertical clamp spans the specified height
  height: '100%',
  boxSizing: 'border-box'
})
