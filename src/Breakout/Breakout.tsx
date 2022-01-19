import { FunctionComponent } from "react";
import { Box, BoxProps } from "@lib/Box/Box";
import * as styles from './Breakout.css'
/**
 * Span the full row in a CSS Grid context
 * 
 * Use within a <Clamp> or <Grid> to make specific children full-width.
 * 
 * @see Clamp
 * @see Grid
 */
export const Breakout: FunctionComponent<BoxProps> = function ({ children, ...props }) {
  return (
    <Box
      {...props}
      className={`${styles.breakout}`}
    >
      {children}
    </Box>
  )
}
