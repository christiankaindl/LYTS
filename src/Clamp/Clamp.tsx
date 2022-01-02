import React, { Children } from 'react'
import * as styles from './Clamp.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Slot } from '@radix-ui/react-slot'
import { BaseProps } from '..'

export type ClampProps = {
  clamp: string | [string] | [string, string]
  children: React.ReactNode
  [key: string]: any
} & Omit<BaseProps, 'gap'> & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

/**
 * Clamps its children to a max-width and centers them
 */
const Clamp = React.forwardRef<Ref, ClampProps>(function Clamp ({
  children,
  clamp,
  style = {},
  asChild = false,
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';

  if (Children.count(children) > 1) {
    throw Error(`Clamp must be used with a single child, not ${Children.count(children)}`)
  }

  const clampWidth = Array.isArray(clamp) ? clamp[0] : clamp
  const clampHeight = Array.isArray(clamp) ? (clamp[1] ?? clamp[0]) : clamp

  return (
    <Comp
      {...props}
      ref={ref}
      className={`${styles.clamp} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.maxWidth]: clampWidth,
          [styles.maxHeight]: clampHeight
        })
      }}
    >
      {children}
    </Comp>
  )
})

export default Clamp
