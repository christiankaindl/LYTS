import React, { CSSProperties } from 'react'
import * as styles from './Stack.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../global.css'
import { Slot } from '@radix-ui/react-slot'

export type StackProps = {
  gap?: number | string
  /** Inspired by Radix UI's API */
  asChild?: boolean
  inline?: boolean
  wrap?: boolean | CSSProperties['flexWrap']
  children: React.ReactNode
  [key: string]: any
} & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Stack = React.forwardRef<Ref, StackProps>(function Stack ({
  children,
  // xAlign = 'initial',
  // yAlign = 'initial',
  gap = 1,
  // as = 'div',
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
