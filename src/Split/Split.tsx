/** FIXME: How to handle responsiveness */

import React from 'react'
import * as styles from './Split.css'
import { BoxProps } from '@lib/Box/Box'

export type SplitProps = {
  children?: React.ReactNode
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

export const splitStyles = styles

/**
 * Separates items along a single axis.
 *
 * Split takes no children and can be composed with both Stack and Row.
 */
const Split = React.forwardRef<Ref, SplitProps>(function Split ({
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

export { Split }

export default Split
