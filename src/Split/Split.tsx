/** FIXME: How to handle responsiveness */

import React, { CSSProperties } from 'react'
import * as styles from './Split.css'
import { BaseProps } from '..'

export type SplitProps = {
  children?: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

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

export default Split
