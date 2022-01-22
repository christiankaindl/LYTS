import React from 'react'
import * as styles from './Split.css'
import { BoxProps } from '@lib/Box/Box'

export interface SplitProps extends BoxProps {
  children?: React.ReactNode
}

type Ref = HTMLDivElement

export const splitStyles = styles ?? {}

/**
 * Separates items along a single axis. Split takes no children, use as child of <Stack>, <Row> or any CSS flexbox context.
 */
export const Split = React.forwardRef<Ref, SplitProps>(function Split ({
  children,
  style = {},
  ...props
}, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={`${styles.split} ${props.className ?? ''}`}
    />
  )
})
