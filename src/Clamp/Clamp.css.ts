import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

export const maxWidth = createVar('max-width')
export const maxHeight = createVar('max-height')

// TODO: Make more generic, by mirroring the technique for horizontal clamping
//       So, set gridTemplateRows when vertical clamping is used. This would unify how alignment works across horizontal/vertical clamping
//       and also fix yAlign, which currenlty does nothing on Clamp.

//       But that would (I think) also mean that Clamp can't support the `gap` prop anymore, as it has to be 0 (or otherwise it grows too large)
//       A workaround for this could be to dynamically replace "100%" with a calc: "1fr min(${fallbackVar(maxWidth, '100%')}, calc(100% - ${gap}*2)) 1fr"
export const clamp = style({
  display: 'grid',
  gridTemplateColumns: `1fr min(${fallbackVar(maxWidth, '100%')}, 100%) 1fr`,
  columnGap: 0, // Update when uni-directional clamping is implemented
  // Only applies when the container has an explicit height, or vertical clamping is used
  alignItems: 'center'
})

globalStyle(`${clamp} > *`, {
  gridColumn: 2,
  maxHeight,
  boxSizing: 'border-box'
})
