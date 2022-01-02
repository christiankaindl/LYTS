import React, { Children, CSSProperties } from 'react'
import * as styles from './Grid.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { Slot } from '@radix-ui/react-slot'
import { BaseProps } from '..'

export type GridProps = {
  gridItemMinWidth?: string
  /** TODO */
  gridMaxRowItems?: number
  inline?: boolean
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Grid = React.forwardRef<Ref, GridProps>(function Split ({
  children,
  gap = 1,
  gridItemMinWidth = '300px',
  gridMaxRowItems,
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
      className={`${styles.grid} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap,
          [styles.gridItemMinWidth]: gridItemMinWidth,
          [styles.gridMaxRowItems]: (gridMaxRowItems && String(gridMaxRowItems)) || String(Children.count(children))
        })
      }}
    >
      {children}
    </Comp>
  )
})

export default Grid
