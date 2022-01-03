import React, { Children, FunctionComponent } from 'react'
import * as styles from './Clamp.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import Box, { BoxProps } from '@lib/Box/Box'

export type ClampProps = {
  clamp: string | [string] | [string, string]
  children: React.ReactNode
  [key: string]: any
} & Omit<BoxProps, 'gap'> & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

/**
 * Clamps its children to a maximum length (horizontally and/or vertically) and centers them
 */
const Clamp = React.forwardRef<Ref, ClampProps>(function Clamp ({
  children,
  clamp,
  style = {},
  ...props
}, ref) {
  if (Children.count(children) > 1) {
    throw Error(`Clamp must be used with a single child, not ${Children.count(children)}`)
  }

  const clampWidth = Array.isArray(clamp) ? clamp[0] : clamp
  const clampHeight = Array.isArray(clamp) ? (clamp[1] ?? clamp[0]) : clamp

  return (
    <Box
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
    </Box>
  )
})

export default Clamp

export const ClampIcon: FunctionComponent = function StackIcon () {
  return (
    <Clamp gap='6px' clamp='32px' style={{ padding: 12, borderRadius: 12, backgroundImage: 'linear-gradient(32grad, #cf91d8, #aa99ec)', height: 64, width: 64 }}>
      <IconBox />
    </Clamp>
  )
}

const IconBox = function () {
  return (
    <div
      style={{
        backgroundColor: 'rgb(255 255 255 / 0.9)',
        borderRadius: 3,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 7px -1px',
        height: '100%'
      }}
    />
  )
}
