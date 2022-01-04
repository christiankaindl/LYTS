import React, { Children, cloneElement, FunctionComponent, isValidElement } from 'react'
import * as styles from './Columns.css'
import Box, { BoxProps } from '@lib/Box/Box'
import { useRatio } from '@lib/useRatio'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export type ColumnsProps = {
  children: React.ReactNode
  /**
   * Control the proportional distribution of the columns. By default, all columns are distributed equally.
   * 
   * Needs to be set to a string in the format `${number}[.../${number}]` each value separated with a slash "/" is used as a proportion for the `flex-grow` value.
   * For example, a `ratio` value of "1/1.5/1" will grow the middle child 1.5 times more than the other two elements (assuming there are 3 children).
   *
   * Note: When using the `ratio` prop, make sure that all direct children forward the `style` prop to the underlying DOM element.
   */
  ratio?: string
  /** TODO? */
  collapseAt?: string
} & BoxProps & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement

/**
 * Single axis columns.
 * Columns grow to fill the available space, and only wrap all-at-once when the `collapseAt` amount is reached. By default, all space is distributed equally among the columns.
 * 
 * You can customize the space distribution with the `ratio` prop.
 */
const Columns = React.forwardRef<Ref, ColumnsProps>(function Columns ({
  children,
  ratio,
  ...props
}, ref) {
  const ratios = useRatio(ratio)
  return (
    <Box
      {...props}
      ref={ref}
      className={`${styles.columns} ${props.className ?? ''}`}
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
                    : ratios?.[index] ?? '1'
                })
              }
            })
          )
        })}
    </Box>
  )
})

export default Columns
