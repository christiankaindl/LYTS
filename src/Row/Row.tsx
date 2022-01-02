import React, { CSSProperties } from 'react'
import * as styles from './Row.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../global.css'

export type RowProps = {
  gap?: number | string
  /** Inspired by Radix UI's API */
  asChild?: boolean
  inline?: boolean
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
  [key: string]: any
} & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Row = React.forwardRef<Ref, RowProps>(function Row ({
  children,
  // xAlign = 'initial',
  // yAlign = 'initial',
  gap = 1,
  // as = 'div',
  inline = false,
  style = {},
  ...props
}, ref) {
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <div
      {...props}
      ref={ref}
      className={`${styles.row} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap
        })
      }}
    >
      {children}
    </div>
  )
})

export default Row
