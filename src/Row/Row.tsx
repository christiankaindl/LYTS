import React, { Children, cloneElement, CSSProperties, isValidElement, type ReactElement } from 'react'
import * as styles from './Row.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import Box, { BoxProps } from '@lib/Box/Box'
import { useRatio } from '@lib/useRatio'

export interface RowProps extends BoxProps {
  /**
   * Same as CSS' `flex-wrap` property.
   * @docs https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  wrap?: boolean | CSSProperties['flexWrap']
  /**
   * Grow the Row's children to fill the container's width.
   * 
   * If a string is supplied in the format `${number}[.../${number}]` each value separated with a slash "/" is used as a proportion for the `flex-grow` value.
   * For example, an `expandChildren` value of "1/1.5/1" will grow the middle child 1.5 times more than the other two elements (assuming there are 3 children).
   * 
   * @see `ratio` in Columns props
   */
  expandChildren?: boolean | string
}

type Ref = HTMLDivElement

export const rowStyles = styles ?? {}

/**
 * Horizontally stacked components, with convenience `wrap` and `expand` props. By default, all children are vertically centered and horizontally start-aligned.
 */
export const Row = React.forwardRef<Ref, RowProps>(function Row ({
  children,
  wrap = 'nowrap',
  expandChildren = false,
  yAlign = 'center',
  style = {},
  ...props
}, ref) {
  if (wrap === true) {
    wrap = 'wrap'
  } else if (wrap === false) {
    wrap = 'nowrap'
  }
  const ratios = useRatio(expandChildren)
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.row} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [styles.wrap]: wrap
        })
      }}
      yAlign={yAlign}
      orientation='row'
    >
      {ratios === undefined
        ? children
        // TODO: Only need to map the children like this if expandChildren is a string.
        : Children.map(children, (child, index) => {
          if (!child) return null
          if (!isValidElement(child)) return child
          return (
            cloneElement(child as ReactElement<{ style: CSSProperties }>, {
              style: {
                ...(child as ReactElement<{ style: CSSProperties }>).props.style,
                ...assignInlineVars({
                  [styles.flexGrow]: typeof ratios === 'string'
                    ? ratios
                    : (ratios?.[index] || '0')
                })
              }
            })
          )
        })
      }
    </Box>
  )
})
