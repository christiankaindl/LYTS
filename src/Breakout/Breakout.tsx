import { Box, BoxProps } from "@lib/Box/Box";
import * as styles from './Breakout.css'

export const breakoutStyles = styles ?? {}

/**
 * Spans the full row in a CSS Grid context. Use within a `<Clamp>` or `<Grid>` to make elements full-width.
 * 
 * @see Clamp
 * @see Grid
 */
export function Breakout ({ children, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      className={styles.breakout}
    >
      {children}
    </Box>
  )
}
