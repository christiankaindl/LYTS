import React from 'react'
import * as styles from './Columns.css'
import Box, { BoxProps } from '@lib/Box/Box'

export type ColumnsProps = {
  children: React.ReactNode
  /** TODO */
  ratio?: string
  /** TODO? */
  collapseAt?: string
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

/**
 * Clamps its children to a maximum length (horizontally and/or vertically) and centers them
 */
const Columns = React.forwardRef<Ref, ColumnsProps>(function Columns ({
  children,
  ratio,
  ...props
}, ref) {
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.columns} ${props.className ?? ''}`}
    >
      {children}
    </Box>
  )
})

export default Columns
