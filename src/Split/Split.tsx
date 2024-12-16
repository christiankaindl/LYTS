import * as styles from './Split.css'
import { BoxProps } from '@lib/Box/Box'

export interface SplitProps extends BoxProps {
  children?: undefined
}

export const splitStyles = styles ?? {}

/**
 * Helper to separate items along a single axis. Split takes no children and composes with `<Stack>`, `<Row>` or any CSS flexbox context.
 */
export function Split ({
  style = {},
  ...props
}) {
  return (
    <div
      {...props}
      className={`${styles.split} ${props.className ?? ''}`}
    />
  )
}
