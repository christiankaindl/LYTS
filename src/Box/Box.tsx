import { useAlign } from "@lib/hooks/useAlign";
import { vars } from "@lib/index.css";
import { Slot } from "@radix-ui/react-slot";
import useMergedRef from "@react-hook/merged-ref";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CSSProperties, forwardRef, useLayoutEffect, useRef, useState } from "react";
import * as styles from './Box.css'

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
  bleed?: CSSProperties['padding']
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
export const boxStyles = styles

/**
 * TODO: Responsive props
 * Lowest common denominator
 */
const Box = forwardRef<Ref, BoxProps & JSX.IntrinsicElements['div']>(function Box ({
  children,
  gap = '1em',
  asChild = false,
  bleed,
  bleedTop,
  bleedRight,
  bleedBottom,
  bleedLeft,
  style = {},
  orientation = 'row',
  xAlign = 'initial',
  yAlign = 'initial',
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';
  const align = useAlign(orientation, xAlign, yAlign)

  const myRef = useRef<HTMLDivElement>()
  const [_bleed, setBleed] = useState({})
  useLayoutEffect(() => {
    const el = myRef?.current
    if (!el) { return }
    
    // Could do simple parsing instead (`bleed.split(' ')`)
    bleed && (el.style.margin = String(bleed))
    bleedTop && (el.style.marginTop = String(bleedTop))
    bleedRight && (el.style.marginRight = String(bleedRight))
    bleedBottom && (el.style.marginBottom = String(bleedBottom))
    bleedLeft && (el.style.marginLeft = String(bleedLeft))

    setBleed({
      [vars.bleedTop]: el.style['marginTop'] || 0,
      [vars.bleedRight]: el.style['marginRight'] || 0,
      [vars.bleedBottom]: el.style['marginBottom'] || 0,
      [vars.bleedLeft]: el.style['marginLeft'] || 0
    })

    // FIXME: Don't reset margin if no bleed was provided
    // Or at least log an error
    el.style.marginTop = ''
    el.style.marginRight = ''
    el.style.marginBottom = ''
    el.style.marginLeft = ''
  }, [myRef?.current, bleed, bleedLeft, bleedRight, bleedBottom, bleedTop])

  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <Comp
      {...props}
      // @ts-expect-error
      ref={useMergedRef(ref, myRef)}
      className={`${styles.box} ${props.className ?? ''}`}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.gap]: _gap,
          [styles.vars.justifyContent]: align.justifyContent,
          [styles.vars.alignItems]: align.alignItems,
          [styles.vars.flexDirection]: align.flexDirection,
          ..._bleed
        })
      }}
    >
      {children}
    </Comp>
  )
})

export { Box }

export default Box
