import { Children } from 'react'
import * as styles from './Grid.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import Box, { BoxProps } from '@lib/Box/Box'

export interface GridProps extends BoxProps {
  gridItemMinWidth?: string
  /** TODO: Different columns API? See https://css-tricks.com/responsive-layouts-fewer-media-queries/ */
  gridMaxRowItems?: number
}

export const gridStyles = styles ?? {}

/**
 * Grid layout with with responsive defaults, but also fully customizable with standard CSS grid properties.
 */
export function Grid ({
  children,
  gridItemMinWidth = '300px',
  gridMaxRowItems,
  style = {},
  ...props
}: GridProps) {
  return (
    <Box
      {...props}
      className={`${styles.grid} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.gridItemMinWidth]: gridItemMinWidth,
          [styles.gridMaxRowItems]: (gridMaxRowItems && String(gridMaxRowItems)) || String(Children.count(children))
        })
      }}
      orientation='row'
    >
      {children}
    </Box>
  )
}
