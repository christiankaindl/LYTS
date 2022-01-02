import { fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../global.css'

export const split = style([
  lyts,
  {
    // display: 'grid',
    // gridTemplateColumns: '1fr auto 1fr',
    gap: fallbackVar(vars.gap, '1em'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
])

// globalStyle(`${split} > *:first-child`, {
//   flexGrow: 1
// })
// globalStyle(`${split} > *:last-child`, {
//   flexGrow: 1
// })