import React, { Children } from 'react'
import * as styles from './Grid.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import Box, { BoxProps } from '@lib/Box/Box'

export type GridProps = {
  gridItemMinWidth?: string
  /** TODO */
  gridMaxRowItems?: number
  children: React.ReactNode
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

export const gridStyles = styles

/**
 * TODO? https://css-tricks.com/responsive-layouts-fewer-media-queries/
 */
export const Grid = React.forwardRef<Ref, GridProps>(function Split ({
  children,
  gridItemMinWidth = '300px',
  gridMaxRowItems,
  style = {},
  ...props
}, ref) {
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.grid} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.gridItemMinWidth]: gridItemMinWidth,
          [styles.gridMaxRowItems]: (gridMaxRowItems && String(gridMaxRowItems)) || String(Children.count(children))
        })
      }}
    >
      {children}
    </Box>
  )
})
