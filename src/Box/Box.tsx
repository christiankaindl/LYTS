import { vars } from "@lib/index.css";
import { Slot } from "@radix-ui/react-slot";
import useMergedRef from "@react-hook/merged-ref";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { CSSProperties, forwardRef, useLayoutEffect, useRef, useState } from "react";
import * as styles from './Box.css'

export type BoxProps = {
  /** Amount of space between elements */
  gap?: CSSProperties['gap']
  /** Inspired by Radix UI's API */
  asChild?: boolean
  /** Amount of space between the border and the content */
  padding?: CSSProperties['padding']
  /** Visually break out of the parent's box. Useful for visually aligning e.g. transparent buttons */
  bleed?: CSSProperties['padding']
  bleedTop?: CSSProperties['padding']
  bleedRight?: CSSProperties['padding']
  bleedBottom?: CSSProperties['padding']
  bleedLeft?: CSSProperties['padding']
} & JSX.IntrinsicElements['div']

type Ref = HTMLDivElement
export const boxStyles = styles

/**
 * TODO: Responsive props, padding, x/yAlign
 * Lowest common denominator
 */
const Box = forwardRef<Ref, BoxProps>(function Box ({
  children,
  gap = '1em',
  asChild = false,
  bleed,
  bleedTop,
  bleedRight,
  bleedBottom,
  bleedLeft,
  style = {},
  ...props
}, ref) {
  const Comp = asChild ? Slot : 'div';

  const myRef = useRef<HTMLDivElement>()
  // TODO: Add padding
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
      [vars.bleedTop]: el.style['marginTop'],
      [vars.bleedRight]: el.style['marginRight'],
      [vars.bleedBottom]: el.style['marginBottom'],
      [vars.bleedLeft]: el.style['marginLeft']
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
