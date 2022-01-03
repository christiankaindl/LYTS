import React, { Children, cloneElement, FunctionComponent, isValidElement } from 'react'
import * as styles from './Stack.css'
import Box, { BoxProps } from '@lib/Box/Box'
import { useRatio } from '@lib/useRatio'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export type StackProps = {
  children: React.ReactNode
  /**
   * Grow the Stack's children to fill the container's height.
   * 
   * If a string is supplied in the format `${number}[.../${number}]` each value separated with a slash "/" is used as a proportion for the `flex-grow` value.
   * For example, an `expandChildren` value of "1/1.5/1" will grow the middle child 1.5 times more than the other two elements (assuming there are 3 children).
   * 
   * @see `ratio`  Columns
   */
  expandChildren?: boolean | string
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Stack = React.forwardRef<Ref, StackProps>(function Stack ({
  children,
  expandChildren = false,
  style = {},
  ...props
}, ref) {
  const ratios = useRatio(expandChildren)
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.stack} ${props.className ?? ''}`}
      style={{
        ...style,
        ...(expandChildren === true 
            ? assignInlineVars({
              [styles.flexGrow]: '1'
            }) : {})
      }}
    >
      {ratios === undefined
        ? children
        // TODO: Only need to map the children like this is expandChildren is a string.
        : Children.map(children, (child, index) => {
          if (!child) return null
          if (!isValidElement(child)) return child
          return (
            cloneElement(child, {
              style: {
                ...(child.props.style ?? {}),
                ...assignInlineVars({
                  [styles.flexGrow]: typeof ratios === 'string'
                    ? ratios
                    : ratios?.[index] ?? '0'
                })
              }
            })
          )
        })}
    </Box>
  )
})

export default Stack

export const StackIcon: FunctionComponent = function StackIcon () {
  return (
    <Stack gap='6px' expandChildren style={{ padding: 12, borderRadius: 12, backgroundImage: 'linear-gradient(32grad, #ea9280, #e58fb1)', height: 64, width: 64 }}>
      <IconBox />
      <IconBox />
      <IconBox />
    </Stack>
  )
}

const IconBox = function () {
  return (
    <div
      style={{
        backgroundColor: 'rgb(255 255 255 / 0.9)',
        borderRadius: 3,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 7px -1px'
      }}
    />
  )
}
