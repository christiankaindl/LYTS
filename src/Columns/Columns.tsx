import React, { Children, cloneElement, FunctionComponent, isValidElement } from 'react'
import * as styles from './Columns.css'
import Box, { BoxProps } from '@lib/Box/Box'
import { useRatio } from '@lib/useRatio'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export interface ColumnsProps extends BoxProps {
  /**
   * Control the proportional distribution of the columns. By default, all columns are distributed equally.
   * 
   * Needs to be set to a string in the format `${number}[.../${number}]` each value separated with a slash "/" is used as a proportion for the `flex-grow` value.
   * For example, a `ratio` value of "1/1.5/1" will grow the middle child 1.5 times more than the other two elements (assuming there are 3 children).
   *
   * Note: When using the `ratio` prop, make sure that all direct children forward the `style` prop to the underlying DOM element.
   */
  ratio?: string
  /**
   * Collapse children into a vertical layout at this width.
   * 
   * Note that `collapseAt` is based on the total element width, and **not** the window width.
   */
  collapseAt?: string
}

type Ref = HTMLDivElement
export const columnsStyles = styles ?? {}

/**
 * Extrinsicly sized columns, filling the whole available space and wrapping all-at-once when the `collapseAt` value is reached. Space distribution can be customized with the `ratio` prop.
 */
export const Columns = React.forwardRef<Ref, ColumnsProps>(function Columns ({
  children,
  ratio,
  collapseAt = '0',
  ...props
}, ref) {
  const ratios = useRatio(ratio)
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.columns} ${props.className ?? ''}`}
      style={{
        ...(props.style ?? {}),
        ...assignInlineVars({
          [styles.collapseAt]: collapseAt
        })
      }}
      orientation='row'
    >
      {ratios === undefined
        ? children
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
                    : (ratios?.[index] || '1')
                })
              }
            })
          )
        })}
    </Box>
  )
})
