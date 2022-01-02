import React, { CSSProperties } from 'react'
import * as styles from './Split.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../global.css'
import { Slot } from '@radix-ui/react-slot'

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

const Split = React.forwardRef<Ref, RowProps>(function Split ({
  children,
  gap = 1,
  inline = false,
  asChild = false,
  style = {},
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <Comp
      {...props}
      ref={ref}
      className={`${styles.split} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap
        })
      }}
    >
      {children}
    </Comp>
  )
})

export default Split
