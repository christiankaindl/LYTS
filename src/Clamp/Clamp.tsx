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
export const clampStyles = styles ?? {}

/**
 * Center-constrained component, supporting both horizontal and vertical clamping. Individual children can "opt out" of the clamping with the <Breakout> component.
 *
 * @see https://www.joshwcomeau.com/css/full-bleed/ for a detailed explanation of how Clamp and Breakout work internally.
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
