import React, { Children, cloneElement, isValidElement } from 'react'
import * as styles from './Stack.css'
import Box, { BoxProps } from '@lib/Box/Box'
import { useRatio } from '@lib/useRatio'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export interface StackProps extends BoxProps<'column'> {
  /**
   * Grow the Stack's children to fill the container's height.
   * 
   * If a string is supplied in the format `${number}[.../${number}]` each value separated with a slash "/" is used as a proportion for the `flex-grow` value.
   * For example, an `expandChildren` value of "1/1.5/1" will grow the middle child 1.5 times more than the other two elements (assuming there are 3 children).
   * 
   * @see `ratio`  Columns
   */
  expandChildren?: boolean | string
}

type Ref = HTMLDivElement

export const stackStyles = styles ?? {}

/**
 * Vertically stacked elements, taking up the full width by default. Best nested within other Stacks.
 */
export const Stack = React.forwardRef<Ref, StackProps>(function Stack ({
  children,
  expandChildren = false,
  ...props
}, ref) {
  const ratios = useRatio(expandChildren)
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.stack} ${props.className ?? ''}`}
      orientation='column'
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
                ...child.props.style,
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
