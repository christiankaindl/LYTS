import React, { Children, FunctionComponent } from 'react'
import * as styles from './Clamp.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import Box, { BoxProps } from '@lib/Box/Box'

export interface ClampProps extends Omit<BoxProps, 'gap'> {
  clamp: string | [string] | [string, string]
  children: React.ReactNode
}

type Ref = HTMLDivElement
export const clampStyles = styles

/**
 * Clamps its children to a maximum length (horizontally and/or vertically) and centers them
 * IDEA: Use CSS grid and provide a Clamp.Breakout component to render a full-width element inside the clamp
 */
export const Clamp = React.forwardRef<Ref, ClampProps>(function Clamp ({
  children,
  clamp,
  style = {},
  ...props
}, ref) {
  if (!Children.only(children)) {
    throw Error(`Clamp must be used with a single child, not ${Children.count(children)}`)
  }

  const clampWidth = Array.isArray(clamp) ? clamp[0] : clamp
  const clampHeight = Array.isArray(clamp) ? (clamp[1] ?? clamp[0]) : clamp

  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.clamp} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.maxWidth]: clampWidth,
          [styles.maxHeight]: clampHeight
        })
      }}
    >
      {children}
    </Box>
  )
})
