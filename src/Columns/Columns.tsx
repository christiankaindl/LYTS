/** FIXME: How to handle responsiveness */

import React from 'react'
import * as styles from './Columns.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Slot } from '@radix-ui/react-slot'
import { vars } from '@lib/index.css'
import { BaseProps } from '..'

export type ColumnsProps = {
  children: React.ReactNode
  /** TODO */
  ratio?: string
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

/**
 * Clamps its children to a max-width and centers them
 */
const Columns = React.forwardRef<Ref, ColumnsProps>(function Columns ({
  children,
  gap = 1,
  style = {},
  asChild = false,
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';
  const _gap = typeof gap === 'number' ? `${gap}em` : gap

  return (
    <Comp
      {...props}
      ref={ref}
      className={`${styles.columns} ${props.className ?? ''}`}
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

export default Columns
