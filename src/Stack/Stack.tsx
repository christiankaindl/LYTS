import React, { CSSProperties } from 'react'
import * as styles from './Stack.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { Slot } from '@radix-ui/react-slot'
import { BaseProps } from '..'

export type StackProps = {
  inline?: boolean
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
} & BaseProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Stack = React.forwardRef<Ref, StackProps>(function Stack ({
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
      className={`${styles.stack} ${props.className ?? ''}`}
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

export default Stack
