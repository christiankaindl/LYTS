import React, { CSSProperties } from 'react'
import styles from './Stack.module.css'

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

const Stack = React.forwardRef<Ref, StackProps>(function VStack ({
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
      className={`${styles.stack} ${inline ? styles.inline : ''}`}
      style={{
        ...style,
        ['--lyts-gap' as any]: _gap
      }}
    >
      {children}
    </div>
  )
})

export default Stack
