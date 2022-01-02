/** FIXME: How to handle responsiveness */

import React, { Children, CSSProperties } from 'react'
import * as styles from './Split.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { Slot } from '@radix-ui/react-slot'
import { BaseProps, lytsId } from '..'

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
  gap = 1,
  inline = false,
  asChild = false,
  style = {},
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';
  const _gap = typeof gap === 'number' ? `${gap}em` : gap

  const twoChildren = Children.count(children) === 2

  return (
    <Comp
      {...props}
      ref={ref}
      className={`${styles.split} ${twoChildren ? styles.twoChildren : ''} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap
        })
      }}
    >
      {Children.map(children, (child, index) => {
        if (child?.__id !== lytsId) {
          // If the child is not a LYTS component, wrap it in an additional div so to prevent weird stretching for e.g. buttons
          return (
            <div>
              {child}
            </div>
          )
        }
        return child
      })}
    </Comp>
  )
})

export default Split
