/** FIXME: How to handle responsiveness */

import React, { CSSProperties } from 'react'
import * as styles from './Row.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { lytsId } from '..'
import Box, { BoxProps } from '@lib/Box/Box'

export type RowProps = {
  gap?: number | string
  /** Inspired by Radix UI's API */
  asChild?: boolean
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Row = React.forwardRef<Ref, RowProps>(function Row ({
  children,
  wrap = 'nowrap',
  style = {},
  ...props
}, ref) {
  if (wrap === true) {
    wrap = 'wrap'
  } else if (wrap === false) {
    wrap = 'nowrap'
  }
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.row} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.wrap]: wrap
        })
      }}
    >
      {children}
    </Box>
  )
})

export default Row

// @ts-expect-error
Row.__id = lytsId
