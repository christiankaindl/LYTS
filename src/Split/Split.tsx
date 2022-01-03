/** FIXME: How to handle responsiveness */

import React, { CSSProperties } from 'react'
import * as styles from './Split.css'
import { BaseProps } from '..'

export type SplitProps = {
  inline?: boolean
  /** TODO */
  wrap?: boolean | CSSProperties['flexWrap']
  /** TODO */
  orientation?: 'vertical' | 'horizontal'
  children?: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

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
