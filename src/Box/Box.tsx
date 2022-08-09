import { useAlign } from "@lib/hooks/useAlign";
import { vars } from "@lib/index.css";
import { Slot } from "@radix-ui/react-slot";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CSSProperties, forwardRef } from "react";
import * as styles from './Box.css'

// TODO: Add `inline` prop?
export interface BoxProps<Direction = 'row'> extends React.HTMLAttributes<HTMLElement> {
  /**
   * Amount of space between elements. Same as CSS' `gap`.
   * @docs https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   */
  gap?: CSSProperties['gap']
  /**
   * Forward props onto its immediate child (must be the only child)
   * 
   * When `true`, the first child is used as the container. Useful for writing semantic HTML with correct element behavior (keyboard interactions, screen-readers).
   * Inspired by Radix UI's <Slot> API.
   *
   * @docs https://www.radix-ui.com/docs/primitives/utilities/slot
   */
  asChild?: boolean
  /** Alias for the CSS `flex-direction` property */
  orientation?: 'row' | 'column'
  /** Visually break out of the parent's box. Useful for visually aligning e.g. transparent buttons */
  bleed?: string | number
  /** Top `bleed` value @see bleed */
  bleedTop?: CSSProperties['padding']
  /** Right `bleed` value @see bleed */
  bleedRight?: CSSProperties['padding']
  /** Bottom `bleed` value @see bleed */
  bleedBottom?: CSSProperties['padding']
  /** Left `bleed` value @see bleed */
  bleedLeft?: CSSProperties['padding']
  /**
   * Horizontal alignment.
   * 
   * Same as CSS' `align-items` property when `orientation='row'`.
   * Same as CSS' `justify-content` property when `orientation='column'`.
   */
  xAlign?: Direction extends 'row'
    ? CSSProperties['justifyContent']
    : CSSProperties['alignItems']
  /**
   * Vertical alignment.
   * 
   * Same as CSS' `justify-content` property when `orientation='row'`.
   * Same as CSS' `align-items` property when `orientation='column'`.
   */ 
  yAlign?: Direction extends 'row'
    ? CSSProperties['alignItems']
    : CSSProperties['justifyContent']
}

type Ref = HTMLDivElement
export const boxStyles = styles ?? {}

/**
 * Generic flexbox context with convenience props such as `xAlign`/`yAlign`for general alignment, `bleed` for visual alignment and `asChild` to customize the rendered element.
 */
const Box = forwardRef<Ref, BoxProps>(function Box ({
  children,
  gap,
  asChild = false,
  bleed,
  bleedTop,
  bleedRight,
  bleedBottom,
  bleedLeft,
  style = {},
  orientation = 'column',
  xAlign = 'initial',
  yAlign = 'initial',
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';
  const align = useAlign(orientation, xAlign, yAlign)

  if (typeof bleed === 'number') {
    bleed = `${bleed}px`
  }
  const _bleed = bleed ? bleed.split(' ') : []
  bleedTop = bleedTop ?? _bleed?.[0]
  bleedRight = bleedRight ?? _bleed?.[1] ?? _bleed?.[0]
  bleedBottom = bleedBottom ?? _bleed?.[2] ?? _bleed?.[0]
  bleedLeft = bleedLeft ?? _bleed?.[3] ?? _bleed?.[1] ?? _bleed?.[0]

  // Only set Create an object that only contains properties which are set
  const inlineVars = Object.assign({},
    gap !== undefined && { [styles.vars.gap]: typeof gap === 'number' ? `${gap}em` : gap },
    bleedTop && { [vars.bleedTop]: toCssValue(bleedTop) },
    bleedRight && { [vars.bleedRight]: toCssValue(bleedRight) },
    bleedBottom && { [vars.bleedBottom]: toCssValue(bleedBottom) },
    bleedLeft && { [vars.bleedLeft]: toCssValue(bleedLeft) },
    align.justifyContent !== 'initial' && { [styles.vars.justifyContent]: align.justifyContent },
    align.alignItems !== 'initial' && { [styles.vars.alignItems]: align.alignItems },
    align.flexDirection !== 'column' && { [styles.vars.flexDirection]: align.flexDirection }
  )

  return (
    <Comp
      {...props}
      ref={ref}
      className={`${styles.box} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars(inlineVars)
      }}
    >
      {children}
    </Comp>
  )
})

export { Box }

export default Box

function toCssValue (value: string | number) {
  return (typeof value === 'number' || value === '0') ? `${value}px` : value
}
