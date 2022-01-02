/** FIXME: How to handle responsiveness */

import React, { CSSProperties } from 'react'
import * as styles from './Row.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { Slot } from '@radix-ui/react-slot'
import { BaseProps, lytsId } from '..'

export type RowProps = {
  gap?: number | string
  /** Inspired by Radix UI's API */
  asChild?: boolean
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Row = React.forwardRef<Ref, RowProps>(function Row ({
  children,
  gap = 1,
  asChild = false,
  wrap = 'nowrap',
  style = {},
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  if (wrap === true) {
    wrap = 'wrap'
  } else if (wrap === false) {
    wrap = 'nowrap'
  }
  return (
    <Comp
      {...props}
      ref={ref}
      className={`${styles.row} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap,
          [vars.wrap]: wrap
        })
      }}
    >
      {children}
    </Comp>
  )
})

export default Row

Row.__id = lytsId
