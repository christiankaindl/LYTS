import { fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { lyts, vars } from '../index.css'

export const split = style([
  lyts,
  {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: fallbackVar(vars.gap, '1em'),
    flexGrow: 1,
    alignItems: 'center'
  }
])
globalStyle(`${split} > *:first-child`, {
  justifySelf: 'start'
})
globalStyle(`${split} > *:last-child`, {
  justifySelf: 'end'
})

export const twoChildren = style({
  gridTemplateColumns: '1fr 1fr'
})
