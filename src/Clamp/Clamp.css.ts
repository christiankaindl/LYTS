import { box, vars as boxVars } from '@lib/Box/Box.css'
import { vars } from '@lib/index.css'
import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'

export const maxWidth = createVar('max-width')
export const maxHeight = createVar('max-height')

// TODO: Make more generic, by mirroring the technique for horizontal clamping
//       So, set gridTemplateRows when vertical clamping is used. This would unify how alignment works across horizontal/vertical clamping
//       and also fix yAlign, which currenlty does nothing on Clamp.
export const clamp = style([
  box,
  {
    display: 'grid',
    rowGap: fallbackVar(vars.gap, '1em'),
    gridTemplateColumns: `1fr min(${fallbackVar(maxWidth, '100%')}, 100%) 1fr`,
    // Only applies when the container has an explicit height, or vertical clamping is used
    alignItems: 'center'
  }
])

globalStyle(`${clamp} > *`, {
  gridColumn: 2,
  maxHeight,
  boxSizing: 'border-box'
})
