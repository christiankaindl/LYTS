/** FIXME: How to handle responsiveness */

import React, { Children, cloneElement, CSSProperties, FunctionComponent, isValidElement } from 'react'
import * as styles from './Row.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { vars } from '../index.css'
import { lytsId } from '..'
import Box, { BoxProps } from '@lib/Box/Box'
import { useRatio } from '@lib/useRatio'

export type RowProps = {
  wrap?: boolean | CSSProperties['flexWrap']
  /**
   * Grow the Row's children to fill the container's width.
   * 
   * If a string is supplied in the format `${number}[.../${number}]` each value separated with a slash "/" is used as a proportion for the `flex-grow` value.
   * For example, an `expandChildren` value of "1/1.5/1" will grow the middle child 1.5 times more than the other two elements (assuming there are 3 children).
   * 
   * @see `ratio`  Columns
   */
  expandChildren?: boolean | string
  children: React.ReactNode
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

const Row = React.forwardRef<Ref, RowProps>(function Row ({
  children,
  wrap = 'nowrap',
  expandChildren = false,
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
          [vars.wrap]: wrap,
          ...(expandChildren ? { [styles.flexGrow]: '1' } : {})
        })
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
        })
      }
    </Box>
  )
})

export default Row
