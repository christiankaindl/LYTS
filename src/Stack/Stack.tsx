import React from 'react'
import * as styles from './Stack.css'
import Box, { BoxProps } from '@lib/Box/Box'

export type StackProps = {
  children: React.ReactNode
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Stack = React.forwardRef<Ref, StackProps>(function Stack ({
  children,
  ...props
}, ref) {
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.stack} ${props.className ?? ''}`}
    >
      {children}
    </Box>
  )
})

export default Stack
