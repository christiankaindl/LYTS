import { CSSProperties } from "@vanilla-extract/css"

export const lytsId = Symbol('Identifier for LYTS React components')

export interface BaseProps {
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
}
