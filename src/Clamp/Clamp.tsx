import React, { Children, FunctionComponent } from 'react'
import * as styles from './Clamp.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import Box, { BoxProps } from '@lib/Box/Box'

export interface ClampProps extends BoxProps {
  /**
   * The maximum width (or height) of its children.
   *
   * If an array with two values are passed, the second value is used as the maximum height. In that case, you can also set the first value to `null` to get only vertical centering.
   *
   * Note: When vertical clamping is used, only a single direct child is supported.
   */
  clamp: string | [maxWidth: string | null, maxHeight: string]
  children: React.ReactNode
}

type Ref = HTMLDivElement
export const clampStyles = styles

/**
 * Center-constrained children
 * 
 * Supports both horizontal clamping and vertical clamping.
 * 
 * You can also use <Breakout> as direct children to "break out" of the Clamp container, to the full width.
 *
 * @see https://www.joshwcomeau.com/css/full-bleed/ for a detailed explanation of how Clamp and Breakout work.
 */
export const Clamp = React.forwardRef<Ref, ClampProps>(function Clamp ({
  children,
  clamp,
  style = {},
  ...props
}, ref) {
  const isArray = Array.isArray(clamp)
  const clampWidth = isArray ? clamp[0] : clamp
  const clampHeight = isArray ? clamp[1] : undefined

  if (clampHeight !== undefined && Children.count(children) > 1) {
    throw Error(`<Clamp> with a vertical clamp set must be used with a single child only. Current children: ${Children.count(children)}`)
  }

  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.clamp} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          ...(clampWidth && { [styles.maxWidth]: clampWidth }),
          ...(clampHeight && { [styles.maxHeight]: clampHeight })
        })
      }}
    >
      {children}
    </Box>
  )
})
